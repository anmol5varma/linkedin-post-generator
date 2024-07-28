const Jimp = require('jimp');
const Color = require('color')
const { writeFile } = require('fs/promises')
const HexColor = require('./colors.js')
const content = require('./content.js')
const { createBaseImage, createCustomFont, saveImage, stringifyNumbers } = require('./utils');
const { IMAGE_WIDTH, PADDING, DP_DIAMETER, FONTS, PAGINATION_PADDING } = require('./constants.js');
const { generateCaption } = require('./markdown.js');
const { generatePdf } = require('./pdf.js');

const addTitle = async ({ baseImage, text, y, color }) => {
    const { textImage } = await createCustomFont({ text, color, fontType: FONTS.roboto_black[100] });
    baseImage.composite(textImage, PADDING, y)
}

// Function to add text to an image
const addHeaderToImage = async (baseImage, { text, length }) => {
    const color = { r: 200, g: 100, b: 100 }
    const blackColor = Color(HexColor.black).object()
    // Create a custom font with the desired color and size
    const { textImage, textHeight } = await createCustomFont({ text, color, fontType: FONTS.roboto_black[100] });

    // Add 2mins read
    const twoMinRead = await createCustomFont({ text: `${Math.ceil(length / 500)} min${Math.ceil(length / 500) > 1 ? 's' : ''} read`, color: blackColor, fontType: FONTS.satisfy[32] });
    const swipe = await createCustomFont({ text: 'swipe', color: blackColor, fontType: FONTS.satisfy[32] });

    // Calculate text position (centered)
    const y = (baseImage.bitmap.height - textHeight) / 2; // Adjust y position as needed

    baseImage.composite(twoMinRead.textImage, baseImage.bitmap.width - twoMinRead.textWidth - PADDING, y - 50)
    baseImage.composite(swipe.textImage, baseImage.bitmap.width - swipe.textWidth - PADDING, y + 18)

    // Add text to the image
    await Promise.all(
        text.split(' ')
            .map(async (line, idx) => addTitle({ baseImage, text: line.toUpperCase(), color: blackColor, y: idx * 125 + 150 }))
    )
    // await writeWordWrap(baseImage, { text, font: FONTS.roboto_black[100], color: blackColor, size: 100, x: 50, y: 150 }, {marginRight: 250, yGap: 25, xGap: 20})

    return baseImage;
}

const writeWordWrap = async (baseImage, { text, font, color, size, x = 150, y = 300 }, { marginRight = 150, yGap = Math.ceil(size / 8), xGap = Math.ceil(size / 4) }) => {
    const wordList = text.split(' ')
    const contentWidth = IMAGE_WIDTH - marginRight
    let yAxisPointer = y
    let xAxisPointer = x
    for (let word of wordList) {
        const { textImage, textWidth, textHeight } = await createCustomFont({ text: word, color, fontType: font });
        if ((xAxisPointer + textWidth) > contentWidth) {
            xAxisPointer = x
            yAxisPointer += size + yGap
        }
        baseImage.composite(textImage, xAxisPointer, yAxisPointer)
        xAxisPointer += textWidth + xGap
    }
    return yAxisPointer + size
}

// Function to add text to an image
const addContentToImage = async (baseImage, page, idx, total) => {
    const color = { r: 0, g: 0, b: 0 }
    const blackColor = Color(HexColor.black).object()

    let yAxis = await writeWordWrap(baseImage, { text: page.title, font: FONTS.roboto_black[64], color, size: 64 }, {})
    const points = page.description.split('. ')
    yAxis += 10
    for (let point of points) {
        yAxis = await writeWordWrap(baseImage, { text: point + (point.endsWith('.') ? '' : '.'), font: FONTS.roboto[32], color, size: 32, y: yAxis + 20 }, {})
    }

    // Add pagination
    const indexString = await createCustomFont({ text: idx, color: blackColor, fontType: FONTS.bebas[64] });
    const totalString = await createCustomFont({ text: '/' + total, color: blackColor, fontType: FONTS.bebas[64] })
    baseImage.composite(indexString.textImage, PADDING, PAGINATION_PADDING)
    baseImage.composite(totalString.textImage, baseImage.bitmap.width - PADDING - totalString.textWidth, PAGINATION_PADDING)

    return baseImage;
}

// Function to add footer
const addFooter = async (baseImage) => {
    const color = { r: 0, g: 0, b: 0 }
    // Create a custom font with the desired color and size
    const { textImage, textWidth } = await createCustomFont({ text: 'Anmol Varma', color, fontType: FONTS.bebas[64] });

    // Calculate text position (centered)
    const y = (baseImage.bitmap.height - (DP_DIAMETER + PADDING)); // Adjust y position as needed

    // Add text to the image
    baseImage.composite(textImage, (DP_DIAMETER + PADDING + PADDING), y + 18);


    let photo = await Jimp.read('./assets/me.jpeg')
    let circleMask = await Jimp.read('./assets/circular_mask.png')
    photo.resize(DP_DIAMETER, DP_DIAMETER)
    circleMask.resize(DP_DIAMETER, DP_DIAMETER)

    photo.mask(circleMask, 0, 0)

    baseImage.composite(photo, PADDING, y)
    return baseImage;
}

//Add last page
const addAuthorDetails = async (baseImage) => {
    const color = { r: 200, g: 100, b: 100 }
    const blackColor = Color(HexColor.black).object()

    // Create a custom font with the desired color and size
    const author = await createCustomFont({ text: 'Anmol Varma', color: blackColor, fontType: FONTS.bebas[100] });

    const like = await createCustomFont({ text: 'like . follow . share', color: blackColor, fontType: FONTS.satisfy[32] });

    // Calculate text position (centered)
    const y = (baseImage.bitmap.height - (150 + 2 * PADDING)); // Adjust y position as needed
    const x1 = (baseImage.bitmap.width - (150 + author.textWidth + PADDING)) / 2; // Adjust x position as needed


    // Add text to the image
    baseImage.composite(author.textImage, (150 + PADDING + x1), y + 18);
    baseImage.composite(like.textImage, (150 + PADDING + x1), y + 120);
    let photo = await Jimp.read('./assets/me.jpeg')
    let circleMask = await Jimp.read('./assets/circular_mask.png')
    photo.resize(150, 150)
    circleMask.resize(150, 150)
    photo.mask(circleMask, 0, 0)
    baseImage.composite(photo, x1, y)

    // Create a custom font with the desired color and size
    const { textImage, textWidth, textHeight } = await createCustomFont({ text: 'Thank you for reading', color, fontType: FONTS.roboto[64] });

    // Calculate text position (centered)
    const x = (baseImage.bitmap.width - textWidth) / 2; // Adjust y position as needed

    baseImage.composite(textImage, x, 2 * PADDING)

    // Add text to the image
    const follow = await createCustomFont({ text: 'Follow for more', color: blackColor, fontType: FONTS.bebas[100] });
    const content = await createCustomFont({ text: 'such content', color: blackColor, fontType: FONTS.bebas[100] });

    baseImage.composite(follow.textImage, (baseImage.bitmap.width - follow.textWidth) / 2, 300);
    baseImage.composite(content.textImage, (baseImage.bitmap.width - content.textWidth) / 2, 430);
    return baseImage;
}

const main = async (content) => {
    const bgColor = Color(HexColor.skyblue).hexa();
    const date = new Date()
    const imagePath = []
    await Promise.all(
        content.map(async (page, idx) => {
            const baseImage = createBaseImage({ bgColor, width: IMAGE_WIDTH, height: IMAGE_WIDTH })
            let image = await addFooter(baseImage)
            if (idx === 0)
                image = await addHeaderToImage(image, { text: page.title, length: content.reduce((total, page) => total + page.title.length + page.description.length, 0) })
            else
                image = await addContentToImage(image, page, stringifyNumbers(idx), stringifyNumbers(content.length - 1))
            imagePath.push(`./output/${date.toDateString()}/images/${idx}.png`)
            await saveImage(image, `./output/${date.toDateString()}/images/${idx}.png`)
        })
    )
    let authorImage = createBaseImage({ bgColor, width: IMAGE_WIDTH, height: IMAGE_WIDTH })
    authorImage = await addAuthorDetails(authorImage)
    imagePath.push(`./output/${date.toDateString()}/images/${content.length}.png`)
    await saveImage(authorImage, `./output/${date.toDateString()}/images/${content.length}.png`)
    const md = generateCaption(content)
    await writeFile(`./output/${date.toDateString()}/caption.md`, md)
    const pdfPath = `./output/${date.toDateString()}/${content[0].title}.pdf`
    generatePdf(imagePath, pdfPath)
}

main(content)
