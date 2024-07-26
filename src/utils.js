const Jimp = require('jimp');
const Color = require('color')

// Function to create a 500x500 pixel image
const createImage = ({ width = 500, height = 500, bgColor = '#FFFFFF' }) => {
    try {
        // Create a new blank image, 500x500 pixels, with a white background
        const image = new Jimp(width, height, bgColor);
        return image
    } catch (error) {
        console.error('Error:', error);
    }
}

// Function to create a 500x500 pixel image
const createBaseImage = ({ width = 500, height = 500, bgColor = '#FFFFFF' }) => {
    const numberOfLines = 16
    try {
        // Create a new blank image, 500x500 pixels, with a white background
        const image = new Jimp(width, height, bgColor);

        // Calculate the distance between the lines
        const distance = width / (numberOfLines + 1);

        // Reduce the alpha of the color
        let color = Color(bgColor).alpha(0.85).rgb();

        // Convert the color to Jimp's integer format
        const lineColor = Jimp.rgbaToInt(color.red(), color.green(), color.blue(), color.alpha() * 255);

        // Draw the vertical lines
        for (let i = 1; i <= numberOfLines; i++) {
            const x = Math.round(i * distance);
            for (let y = 0; y < height; y++) {
                image.setPixelColor(lineColor, x, y);
            }
        }

        // Draw the horizontal lines
        for (let i = 1; i <= numberOfLines; i++) {
            const y = Math.round(i * distance);
            for (let x = 0; x < height; x++) {
                image.setPixelColor(lineColor, x, y);
            }
        }

        return image
    } catch (error) {
        console.error('Error:', error);
    }
}

// Function to create a custom font
const createCustomFont = async ({ text, color: { r, g, b }, size = 32, fontType = '' }) => {
    // Load a font (using a built-in font)
    let font;
    if (fontType)
        font = await Jimp.loadFont(fontType);
    else
        font = await Jimp.loadFont(Jimp[`FONT_SANS_${size}_BLACK`]);

    // Measure the size of the text
    const textWidth = Jimp.measureText(font, text);
    const textHeight = Jimp.measureTextHeight(font, text, textWidth);

    // Create a temporary image to hold the text
    const textImage = new Jimp(textWidth, textHeight, 0x00000000); // Transparent background
    textImage.print(font, 0, 0, text);

    // Apply a color overlay to the text
    textImage.color([{ apply: 'red', params: [r] }, { apply: 'green', params: [g] }, { apply: 'blue', params: [b] }]);
    return { textImage, textWidth, textHeight }
}

const saveImage = (image, path) => {
    return image.writeAsync(path);
}

const stringifyNumbers = number => number < 10 ? `0${number}` : number.toString()

module.exports = {
    createImage,
    createBaseImage,
    createCustomFont,
    saveImage,
    stringifyNumbers
}