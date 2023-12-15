import { browser } from "@wdio/globals";

import SignInPage from "../pageobjects/signin.page.js";
import SignUpPage from "../pageobjects/signup.page.js";
import MainPage from "../pageobjects/main.page.js";
import BankAccsPage from "../pageobjects/bank.accounts.page.js";

import Helper from "../helper/helper.js";

describe("The bank account", () => {
  beforeEach(async () => {
    const validRandomFirstName = Helper.generateRandomValidFirstName();
    const validRandomLastName = Helper.generateRandomValidLastName();
    const validRandomUsername = Helper.generateRandomValidUsername();
    const validUsername = validRandomUsername;
    const validRandomPassword = Helper.generateRandomValidPassword();
    const validPassword = validRandomPassword;
    const validRandomPasswordMatch = validRandomPassword;
    await SignUpPage.open();
    await SignUpPage.fillSignupForm(
      validRandomFirstName,
      validRandomLastName,
      validRandomUsername,
      validRandomPassword,
      validRandomPasswordMatch
    );
    await SignUpPage.clickSubmitBtn();
    await SignInPage.fillSigninForm(validUsername, validPassword);
    await SignInPage.clickSubmitBtn();
  });

  it("creating with valid credentials", async () => {
    const validRandomBankName = Helper.generateRandomValidBankName();
    const validRandomRoutingNumber = Helper.generateRandomValidRoutingNumber();
    const validRandomAccNumber = Helper.generateRandomValidAccNumber();
    await MainPage.getStartedWindowDisplay();
    await MainPage.clickNextBtn();
    await MainPage.createBankAccFormDisplay();
    await MainPage.fillCreateBankAccForm(
      validRandomBankName,
      validRandomRoutingNumber,
      validRandomAccNumber
    );
    await MainPage.clickSubmitBtn();
    await MainPage.finishedWindowDisplay();
    await MainPage.clickNextBtn();
    await MainPage.popupWindowExisting();
    await MainPage.bankAccsLinkDisplay();
    await MainPage.clickBankAccsLink();
    await BankAccsPage.isPageOpened();
    await BankAccsPage.bankAccsListDisplay();
  });
  it("creating with invalid credentials", async () => {
    const invalidRandomBankName = Helper.generateRandomInvalidBankName();
    const invalidRandomRoutingNumber =
      Helper.generateRandomInvalidRoutingNumber();
    const invalidRandomAccNumber = Helper.generateRandomInvalidAccNumber();
    await MainPage.clickNextBtn();
    await MainPage.fillCreateBankAccForm(
      invalidRandomBankName,
      invalidRandomRoutingNumber,
      invalidRandomAccNumber
    );
    await MainPage.checkInvalidCredentialsError();
    // await MainPage.checkRedFieldsHighlight();
    await MainPage.submitBtnAccessibility();
  });
  it("creating with empty required fields", async () => {
    await MainPage.clickNextBtn();
    await MainPage.clickSubmitBtn();
    await MainPage.checkBlankFieldsError();
    // await MainPage.checkRedFieldsHighlight();
    await MainPage.submitBtnAccessibility();
  });
  it("deleting", async () => {
    const validRandomBankName = Helper.generateRandomValidBankName();
    const validRandomRoutingNumber = Helper.generateRandomValidRoutingNumber();
    const validRandomAccNumber = Helper.generateRandomValidAccNumber();
    await MainPage.clickNextBtn();
    await MainPage.fillCreateBankAccForm(
      validRandomBankName,
      validRandomRoutingNumber,
      validRandomAccNumber
    );
    await MainPage.clickSubmitBtn();
    await MainPage.clickNextBtn();
    await MainPage.clickBankAccsLink();
    await BankAccsPage.bankAccDeleteBtnDisplay();
    await BankAccsPage.clickBankAccDeleteBtn();
    await BankAccsPage.bankAccDeleteBtnAccessibility();
  });

  afterEach(async () => {
    await browser.reloadSession();
  });
});
