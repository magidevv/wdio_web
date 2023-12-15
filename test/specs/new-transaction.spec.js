import { browser } from "@wdio/globals";

import SignInPage from "../pageobjects/signin.page.js";
import MainPage from "../pageobjects/main.page.js";
import NewTransactionPage from "../pageobjects/new.transaction.page.js";

import userCredentials from "../data/user-credentials.json" assert { type: "json" };
import Helper from "../helper/helper.js";

describe("Creating the new transaction", () => {
  beforeEach(async () => {
    await SignInPage.open();
    const randomUsernameIndex = Math.floor(
      Math.random() * userCredentials.usernames.length
    );
    const randomPasswordIndex = Math.floor(
      Math.random() * userCredentials.passwords.length
    );
    await SignInPage.fillSigninForm(
      userCredentials.usernames[randomUsernameIndex],
      userCredentials.passwords[randomPasswordIndex]
    );
    await SignInPage.clickSubmitBtn();
  });

  it("with valid data", async () => {
    const validRandomAmount = Helper.generateRandomValidAmount();
    const validRandomNote = Helper.generateRandomValidNote();
    await MainPage.newTransactionBtnDisplay();
    await MainPage.clickNewTransactionBtn();
    await NewTransactionPage.isPageOpened();
    await NewTransactionPage.selectContactSectionDisplay();
    await NewTransactionPage.clickFirstUser();
    await NewTransactionPage.paymentFormDisplay();
    await NewTransactionPage.fillPaymentForm(
      validRandomAmount,
      validRandomNote
    );
    await NewTransactionPage.completeSectionDisplay();
    await NewTransactionPage.clickCreateAnotherTransaction();
    await NewTransactionPage.homeBtnDisplay();
    await NewTransactionPage.clickHomeBtn();
    await MainPage.isPageOpened();
    await MainPage.clickNewTransactionBtn();
    await NewTransactionPage.clickFirstUser();
    await NewTransactionPage.fillPaymentForm(
      validRandomAmount,
      validRandomNote
    );
    await NewTransactionPage.completeSectionDisplay();
    await NewTransactionPage.clickReturnToTransactions();
    await MainPage.isPageOpened();
  });
  it("with invalid data", async () => {
    const invalidAmount = Helper.generateInvalidAmount();
    const invalidRandomNote = Helper.generateRandomInvalidNote();
    await MainPage.clickNewTransactionBtn();
    await NewTransactionPage.clickFirstUser();
    await NewTransactionPage.fillForm(invalidAmount, invalidRandomNote);
    await NewTransactionPage.checkInvalidCredentialsError();
    await NewTransactionPage.checkRedFieldsHighlight();
    await NewTransactionPage.requestBtnAccessibility();
    await NewTransactionPage.payBtnAccessibility();
  });
  it("with empty required fields", async () => {
    await MainPage.clickNewTransactionBtn();
    await NewTransactionPage.clickFirstUser();
    await NewTransactionPage.fillForm("", "");
    await NewTransactionPage.checkBlankFieldsError();
    await NewTransactionPage.checkRedFieldsHighlight();
    await NewTransactionPage.requestBtnAccessibility();
    await NewTransactionPage.payBtnAccessibility();
  });

  afterEach(async () => {
    await browser.reloadSession();
  });
});
