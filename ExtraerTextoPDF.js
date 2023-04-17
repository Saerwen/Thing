const pdf = require('pdf-parse');
const tf = require('@tensorflow/tfjs');
const use = require('@tensorflow-models/universal-sentence-encoder');
const docx = require('docx');
const { Document, Paragraph, Table, TableRow, TableCell } = docx;
const openai = require('openai');

class FileController {
  async subirArchivo(req, res) {
    try {
      if (!req.files) {
        return res.status(400).send('No se ha subido ningún archivo.');
      }

      const archivo = req.files.archivo;
      const buffer = archivo.data;
      const texto = await extraerTextoPDF(buffer);

      // Convert the PDF data to a string of text
      const textoPDF = texto;

      // Use Universal Sentence Encoder to encode the text
      const model = await use.load();
      const embeddings = await model.embed([textoPDF]);
      const embeddingsArray = embeddings.arraySync()[0];

      // Process the embeddings to get desired output
      const output = await procesarEmbeddings(embeddingsArray);

      // Generate a Word document with the output text and send it to the client for download
      await generarDocumentoWord(output, res);

    } catch (error) {
      console.log(error);
      res.status(500).send('Ha ocurrido un error al procesar el archivo.');
    }
  }
}

async function extraerTextoPDF(buffer) {
  const data = await pdf(buffer);
  return data.text;
}

async function procesarEmbeddings(embeddingsArray) {
  // Convert the embeddings to a 2D array
  const embeddings2D = embeddingsArray.map(x => [x]);

  // Send the embeddings to ChatGPT with the prompt
  openai.apiKey = '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';
  const response = await openai.completions.create({
    engine: 'davinci',
    prompt: 'Elabora un informe cohesionado que respete la siguiente estructura: Primero resumir en una frase el siniestro. Segundo describir el riesgo (El bien asegurado y su año de construcción si se conoce). Tercero cotejar si la información los metros y año de construcción coinciden con los inscritos en poliza y determinar en consecuencia si habrá que aplicar infraseguro (descuento sobre el capital asegurado) y regla de equidad (descuento sobre la indemnización). Cuarto descripción de los hechos observados.\n',
    maxTokens: 512,
    temperature: 0.5,
    n: 1,
    stop: ['\n']
    },
    embeddings2D
  );

  // Extract and return the generated text
  const generatedText = response.data.choices[0].text.trim();
  return generatedText;
}

async function generarDocumentoWord(textoGenerado, res) {
  // Create a new document
  const doc = new Document();

  // Add a paragraph with the generated text
  const paragraph = new Paragraph();
  paragraph.addRun(new docx.TextRun(textoGenerado));
  doc.addParagraph(paragraph);

  // Generate a buffer with the document data
  const buffer = await docx.Packer.toBuffer(doc);

    // Send the buffer to the client for download
  res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
  res.setHeader('Content-Disposition', 'attachment; filename=informe.docx');

  res.send(buffer);
}



module.exports = FileController;
