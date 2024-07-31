const puppeteer = require('puppeteer'); // v22.0.0 or later

const getHashTags = async (title) => {
    try {
        let hashtags = ''
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();
        const timeout = 5000;
        page.setDefaultTimeout(timeout);

        {
            const targetPage = page;
            await targetPage.setViewport({
                width: 715,
                height: 775
            })
        }
        {
            const targetPage = page;
            const promises = [];
            const startWaitingForEvents = () => {
                promises.push(targetPage.waitForNavigation());
            }
            startWaitingForEvents();
            await targetPage.goto('chrome://newtab/');
            await Promise.all(promises);
        }
        {
            const targetPage = page;
            const promises = [];
            const startWaitingForEvents = () => {
                promises.push(targetPage.waitForNavigation());
            }
            startWaitingForEvents();
            await targetPage.goto('https://www.oneupapp.io/linkedin-hashtag-generator');
            await Promise.all(promises);
        }
        {
            const targetPage = page;
            await puppeteer.Locator.race([
                targetPage.locator('input')
            ])
                .setTimeout(timeout)
                .click({
                    offset: {
                        x: 442,
                        y: 38,
                    },
                });
        }
        {
            const targetPage = page;
            await puppeteer.Locator.race([
                targetPage.locator('input')
            ])
                .setTimeout(timeout)
                .fill(title);
        }
        {
            const targetPage = page;
            await puppeteer.Locator.race([
                targetPage.locator('#submit-btn'),
                targetPage.locator('::-p-text(Generate LinkedIn)')
            ])
                .setTimeout(timeout)
                .click({
                    offset: {
                        x: 458,
                        y: 34,
                    },
                });
        }
        {
            await new Promise((res, rej) => setTimeout(() => res(' '), 2000))
            const targetPage = page;
            const textarea = await targetPage.waitForSelector('#generated_content')
            const returnHastags = await textarea?.evaluate(el => el.value)
            console.log(returnHastags);
            hashtags = returnHastags
        }

        await browser.close();
        return hashtags;
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    getHashTags
}
