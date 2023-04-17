const fs = require('fs');
const path = require('path');
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const fileupload = require("express-fileupload");
const pdf = require('pdf-parser');
const tf = require('@tensorflow/tfjs-node');
const use = require('@tensorflow-models/universal-sentence-encoder');
const docx = require('docx');
const { Document, Paragraph, Table, TableRow, TableCell } = docx;
const openai = require('openai');
const cors = require('cors');
const morgan = require('morgan');
const getText = require('readPdfText.js');

const app = express();
const fileController = new FileController();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileupload());

router.post('/subir-archivo', fileController.subirArchivo);

router.use(function(req, res) {
    res.status(404).json({
        error: true,
        message: 'Not Found'
    });
});
router.post('/crear-archivo-word', function(req, res) {
    const { text } = req.body;
    const doc = new Document();
    const paragraph = new Paragraph(text);
    doc.addParagraph(paragraph);
    const buffer = docx.Packer.toBuffer(doc);
    const fileName = `document_${new Date().getTime()}.docx`;
    const filePath = path.join(__dirname, 'uploads', fileName);
    fs.writeFileSync(filePath, buffer);
    res.json({
        success: true,
        message: 'File saved successfully',
        data: {
            name: fileName,
            size: buffer.length,
            path: filePath,
        },
    });
});


app.use('/api', router);

app.use(express.static(__dirname));

app.get('/', function (req, res) {
    res.render('index.html');
});

app.post('/extract-pdf-text', async (req, res) => {
    try {
        if (!req.files) {
            res.send({
                status: false,
                message: 'No pdf uploaded'
            });
        } else {
            let pdf = req.files.pdf;
            const filePath = `./uploads/${pdf.name}`;
            await pdf.mv(filePath);

           getText(filePath). then(function(textArray) {
                if(textArray.length > 0) {
                    // delete pdf file locally after we are done with it
                    fs.unlink(filePath, function (error) {
                        if(error) {
                            console.error(error);
                        }
                    });
                    res.send({
                        status: true,
                        message: 'Pdf is uploaded',
                        data: {
                            name: pdf.name,
                            size: pdf.size,
                            text: textArray
                        }
                    });
                } else {
                    res.send({
                        status: false,
                        message: 'There was an issue parsing the pdf file',
                        text: ["Could not parse pdf file"]
                    });
                }
               
            const response = openai.complete({
                    engine: 'davinci',
                    prompt: `summarize document\n${textArray.join('\n')}\n---\n`,
                    maxTokens: 50,
                    n: 1,
                    temperature: 0.5,
                });
                const summary = response.data.choices[0].text;
                const wordFilePath = `./uploads/${pdf.name.replace('.pdf', '')}.docx`;
                fs.writeFileSync(wordFilePath, summary, 'utf-8');
                 });
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

router.post('/crear-archivo-word', function(req, res) {
    const { text } = req.body;
    const doc = new Document();
    const paragraph = new Paragraph(text);
    doc.addParagraph(paragraph);
    const buffer = docx.Packer.toBuffer(doc);
    const fileName = `document_${new Date().getTime()}.docx`;
    const filePath = path.join(__dirname, 'uploads', fileName);
    fs.writeFileSync(filePath, buffer);
    res.json({
        success: true,
        message: 'File saved successfully',
        data: {
            name: fileName,
            size: buffer.length,
            path: filePath,
        },
    });
});

var port = 3000;
app.listen(port, function () {
    console.log('Server', process.pid, 'listening on port', port);
});

module.exports = app;
