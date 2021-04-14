const { browser, element, By, $, $$ } = require("protractor");
// const log4js = require("log4js");
// const logger = log4js.getLogger("SpecLogger");


describe("execute script", function () {
    it("can run something", async function () {
        browser.get("/")

        await browser.executeScript(function () {
            console.log("Hello world")
        })

        await browser.sleep(10000)
        
    })
})

// generate random email

// const getdataForEmail = function () {
//     let mounth = new Date().getUTCMonth() + 1;
//     const Data = new Date();
//     return Data.getFullYear() + "." + mounth + "." + Data.getDate() +
//         "." + Data.getHours() + "." + Data.getMinutes() +
//         "." + Data.getSeconds() + "." + Data.getMilliseconds();
// }


// let userEmail = function () {
//     return `nfse2eui${getdataForEmail()}@mailinator.com`;
// };