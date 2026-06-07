async function generarInformeSiniestro(resumen) {
  const doc = new Document();
  doc.addSection({
    properties: {},
    children: [
      new Paragraph({
        text: 'Informe de siniestro',
        heading: true,
        thematicBreak: true,
      }),
      new Paragraph({
        text: 'Resumen del siniestro:',
        heading: true,
      }),
      new Paragraph({
        text: resumen,
      }),
      new Paragraph({
        text: 'Información adicional:',
        heading: true,
      }),
      new Table({
        rows: [
          new TableRow({
            children: [
              new TableCell({ children: [new Paragraph({ text: 'Fecha:' })] }),
              new TableCell({ children: [new Paragraph({ text: '01/04/2023' })] }),
            ],
          }),
          new TableRow({
            children: [
              new TableCell({ children: [new Paragraph({ text: 'Lugar:' })] }),
              new TableCell({ children: [new Paragraph({ text: 'Ciudad XYZ' })] }),
            ],
          }),
        ],
      }),
    ],
  });

  const buffer = await Packer.toBuffer(doc);

  const fs = require('fs');
  fs.writeFile('C:\\Users\\maria\\Desktop\\JBB\\informeSiniestro.docx', buffer, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Informe de siniestro generado y guardado exitosamente');
      return buffer;
    }
  });
}

 