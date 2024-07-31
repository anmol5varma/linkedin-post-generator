const PDFDocument = require('pdfkit');
const fs = require('fs');
const { IMAGE_WIDTH } = require('./constants');

const addImageToNewPage = (doc, imagePath, width, height) => {
    doc.addPage({ size: [width, height] }); // Create a new page
    doc.image(imagePath, 0, 0, { width, height });
}


const generatePdf = (imagePaths, pdfPath) => {
    const doc = new PDFDocument({ autoFirstPage: false });
    doc.pipe(fs.createWriteStream(pdfPath));

    for(let imagePath of imagePaths){
        addImageToNewPage(doc, imagePath, IMAGE_WIDTH, IMAGE_WIDTH)
    }

    doc.end();
}

const formatTitle = title => title.replaceAll('\n', ' ')

module.exports = {
    generatePdf,
    formatTitle
}