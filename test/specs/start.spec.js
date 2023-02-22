describe("Atividade teste", () => {
  it("Acessar e preencher o forms", async () => {
    //Acessar forms
    await $("~Forms").click();
    expect(await $("~text-input")).toBeDisplayed();
    //
    //Preechimento do forms
    await $("~text-input").setValue("Hello!");
    await $("~switch").click();
    await $("~Dropdown").click();
    expect(await $("~Dropdown")).toBeDisplayed();
    await $('android=new UiSelector().text("webdriver.io is awesome")').click();
    await $("~button-Active").click();
    expect(await $("~button-Active")).toBeDisplayed();
    await $('android=new UiSelector().text("OK")').click();
  });
});
