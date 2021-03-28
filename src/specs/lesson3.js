// Возможности объектов WebElement, Browser и других

const { browser, element, By, $, $$, Key } = require("protractor");

describe("Protractor", function () {
  it("Should be alive", async function () {
    await browser.get("http://the-internet.herokuapp.com/");

    let browser2 = await browser.forkNewDriverInstance().ready;
    await browser2.get("/");
  });
});

it("can switch to iframe", async function () {
  await browser.get("http://the-internet.herokuapp.com/iframe");

  let iframe = $("#mce_0_ifr");
  let text = $("body#tinymce");

  await browser.switchTo().frame(iframe.getWebElement()); // возвращаем WebElement, представленный ElementFinder
  console.log(await text.getText());

  await browser.switchTo().defaultContent(); // выйти из фрэйма
});

// кликаем на checkbox

describe("ElementFinder", function () {
  it("can be clicked", async function () {
    await browser.get("http://the-internet.herokuapp.com/checkboxes");
    browser.sleep(3000);
    $$('[type="checkbox"]').click();
    browser.sleep(3000);

    // $('[type="checkbox"]').click();
    // browser.sleep(3000);
  });

  it("check for present element", async function () {
    await browser.get("http://the-internet.herokuapp.com/checkboxes");
    await console.log(
      await $("not existing element")
        .isDisplayed()
        .then(null, (err) => false) // false
    );

    await console.log(
      await $("form#checkboxes")
        .isDisplayed()
        .then(null, (err) => false) // true
    );
  });

  it("check that checkbox is enabled", async function () {
    await browser.get("http://the-internet.herokuapp.com/checkboxes");

    await console.log(
      await $("form#checkboxes").isEnabled()
      //.then(null, (err) => false) // true
    );
  });

  it("can send key into it", async function () {
    await browser.get("http://the-internet.herokuapp.com/login");

    await $("#username").clear(); // очищает инпут
    await $("#username").sendKeys("Hello World", Key.ENTER); // нужно заимпортить Key
    browser.sleep(4000);
  });

  fit("can work with ElementArrayFinder's", async function () {
    await browser.get("http://the-internet.herokuapp.com/checkboxes");
    // browser.sleep(3000);
    console.log(await $$('[type="checkbox"]').count()); //отображает сколько выбрано элементов

    await $$('[type="checkbox"]').each(async (elem, index) => {
      console.log(await elem.isSelected(), "INDEX:", index);

      if (!(await elem.isSelected())) {
        await elem.click();
      }
      console.log(await elem.isSelected(), "INDEX:", index);
    });

    // browser.sleep(3000);

    // $('[type="checkbox"]').click();
    // browser.sleep(3000);
  });
});
