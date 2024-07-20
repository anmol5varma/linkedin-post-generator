const Jimp = require('jimp');
const Color = require('color')
const HexColor = require('./colors.js')
const { createImage, createCustomFont, saveImage, stringifyNumbers } = require('./utils');
const { IMAGE_WIDTH, PADDING, DP_DIAMETER, FONTS, PAGINATION_PADDING } = require('./constants.js');

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
const addAuthorDetails = async () => { }

const main = async (content) => {
    const bgColor = Color(HexColor.skyblue).hexa();
    const date = new Date()
    await Promise.all(
        content.map(async (page, idx) => {
            const baseImage = createImage({ bgColor, width: IMAGE_WIDTH, height: IMAGE_WIDTH })
            let image = await addFooter(baseImage)
            if (idx === 0)
                image = await addHeaderToImage(image, { text: page.title, length: content.reduce((total, page) => total + page.title.length + page.description.length, 0) })
            else
                image = await addContentToImage(image, page, stringifyNumbers(idx), stringifyNumbers(content.length - 1))
            await saveImage(image, `./output/${date.toDateString()}/${idx}.png`)
        })
    )
}

const content = [
    {
        title: 'Getting started with Web development',
        description: '',
        tip: ''
    }, {
        title: 'Understand the basics',
        description: 'Before diving into coding, it is important to understand the fundamental concepts of web development.',
        tip: ''
    }, {
        title: 'Learn the Core Technologies',
        description: 'Learn front-end development using HTML/CSS/JS and back-end development with node/java/python/ruby.',
        tip: ''
    }, {
        title: 'Get Comfortable with Development Tools',
        description: 'Learn tools/tech like Text Editor(VSCode), version control(GIT), browser dev tool(inspect elements).',
        tip: ''
    }, {
        title: 'Build a Basic Project',
        description: 'Create a simple project applying everything that you have learnt. Examples: Todo app, personal portfolio, basic blog using CRUD.',
        tip: ''
    }
]

main(content)
