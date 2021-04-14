// Ожидания. Явные и неявные. ExpectedConditions. Определение собственных условий ожидания

const { protractor } = require("protractor");
const { browser, element, By, $, $$ } = require("protractor");

const EC = protractor.ExpectedConditions;

describe("Waits", function () {
  beforeEach(async function () {
    await browser.manage().timeouts().implicitlyWait(0); // перед каждым it сбрасываем на 0
  });

  it("implicit wait should wait for element to be present", async function () {
    await browser.manage().timeouts().implicitlyWait(10000);
    await browser.get("http://the-internet.herokuapp.com/dynamic_loading/2");
    await $("#start button").click();
    // 10 sec waiting
    console.log(await $("#finish h4").getText());
  });

  it("explicit wait should wait for element to be present", async function () {
    // await browser.manage().timeouts().implicitlyWait(10000);
    await browser.get("http://the-internet.herokuapp.com/dynamic_loading/2");
    await $("#start button").click();
    // 10 sec waiting
    await browser.wait(
      async function () {
        return await $("#finish h4").isPresent();
      },
      20000,
      "Result should appeared in 20 sec, but it doesn't"
    );

    console.log(await $("#finish h4").getText());
  });

  it("explicit wait should wait for element to be displayed", async function () {
    // await browser.manage().timeouts().implicitlyWait(10000);
    await browser.get("http://the-internet.herokuapp.com/dynamic_loading/2");
    await $("#start button").click();
    // 10 sec waiting
    await browser.wait(
      EC.and(
        EC.visibilityOf($("#finish h4")),
        EC.invisibilityOf($("#loading")),
       ),20000,
        "Result should appeared in 20 sec, but it doesn't"

    );

    console.log(await $("#finish h4").getText());
  });
});
