// Оптимизация процесса разработки. Настройка отладчика, точки остановки. Интерактивный режим
// log4js - библиотека для логирования
// npm install log4js

// const { browser, element, By, $, $$ } = require("protractor");
// const log4js = require("log4js");
// const logger = log4js.getLogger("SpecLogger");


const {browser, $} = require("protractor");

describe("Drag-and-drop", function () {
    it("Can drag-and-drop", async function () {
        await browser.get("http://the-internet.herokuapp.com/drag_and_drop")
        await browser.sleep(2000)
        await browser.actions().dragAndDrop($("#column-a"),$("#column-b")).perform();
        await browser.sleep(2000)


    })

})





