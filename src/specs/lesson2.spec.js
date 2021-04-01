// lesson 2 selectors

const { browser, element, By, $, $$ } = require("protractor");
// const url = require("../resources/constantMovie");

xdescribe("Protractor", function () {
  it("Should be alive", async function () {
    await browser.get("/");
    let a = element.all(By.css("movie-card")).first();
    let b = $$("movie-card").get(3).$("p a"); // цепочка поиска (chaining of elements)
    console.log(await a.getText());
    console.log(await b.getText());
  });
});
