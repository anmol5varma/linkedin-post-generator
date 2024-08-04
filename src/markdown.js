const generateCaption = content => {
    let result = '';
    result += content[0].title + ' (Read more)' + '\n\n'
    for (let i = 1; i < content.length - 1; i++) {
        result += `${i}. ${content[i].title}\n`
        const pointList = content[i].description
            .split('. ')
            .reduce((acc, point) => {
                return acc.concat(`- ${point + (point.endsWith('.') ? '' : '.')}\n`)
            }, '')
        result += pointList + '\n'
    }
    result += content[content.length - 1].description + '\n'
    result += '\n' + '🌟 Book a FREE quick chat with me at https://topmate.io/anmol5varma/ 🌟\n\n'
    return result
}

module.exports = {
    generateCaption
}