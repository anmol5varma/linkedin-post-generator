const generateCaption = content => {
    let result = '';
    result += content[0].title + '\n' + '(Read more)' + '\n'
    for (let i = 1; i < content.length; i++) {
        result += `${i}. ${content[i].title}\n`
        const pointList = content[i].description
            .split('. ')
            .reduce((acc, point) => {
                return acc.concat(`- ${point + (point.endsWith('.') ? '' : '.')}\n`)
            }, '')
        result += pointList
    }
    result+= '\n' + '🌟 Book a FREE quick chat with me at https://topmate.io/anmol5varma/ 🌟'
    return result
}

module.exports = {
    generateCaption
}