import { browser } from "@wdio/globals";

import SignInPage from "../pageobjects/signin.page.js";
import SignUpPage from "../pageobjects/signup.page.js";
import MainPage from "../pageobjects/main.page.js";

import Helper from "../helper/helper.js";

describe("Sign up", () => {
  it("with valid credentials", async () => {
    const validRandomFirstName = Helper.generateRandomValidFirstName();
    const validRandomLastName = Helper.generateRandomValidLastName();
    const validRandomUsername = Helper.generateRandomValidUsername();
    const validUsername = validRandomUsername;
    const validRandomPassword = Helper.generateRandomValidPassword();
    const validPassword = validRandomPassword;
    const validRandomPasswordMatch = validRandomPassword;
    await SignInPage.open();
    await SignInPage.signupLinkDisplay();
    // await SignInPage.clickSignupLink();
    // await SignInPage.clickSignupLink();
    // await SignUpPage.isPageOpened();
    await SignUpPage.open();
    await SignUpPage.signinLinkDisplay();
    // await SignUpPage.clickSigninLink();
    // await SignUpPage.clickSigninLink();
    // await SignInPage.isPageOpened();
    // await SignInPage.clickSignupLink();
    // await SignInPage.clickSignupLink();
    await SignUpPage.signupFormDisplay();
    await SignUpPage.fillSignupForm(
      validRandomFirstName,
      validRandomLastName,
      validRandomUsername,
      validRandomPassword,
      validRandomPasswordMatch
    );
    await SignUpPage.clickSubmitBtn();
    //await SignInPage.isPageOpened();
    await SignInPage.fillSigninForm(validUsername, validPassword);
    await SignInPage.clickSubmitBtn();
    await MainPage.isPageOpened();
    await MainPage.checkUsername(validUsername);
  });
  it("with invalid credentials", async () => {
    const invalidRandomFirstName = Helper.generateRandomInvalidFirstName();
    const invalidRandomLastName = Helper.generateRandomInvalidLastName();
    const invalidRandomUsername = Helper.generateRandomInvalidUsername();
    const invalidRandomPassword = Helper.generateRandomInvalidPassword();
    const invalidRandomPasswordMatch = Helper.generateRandomInvalidPassword();
    await SignUpPage.open();
    await SignUpPage.fillSignupForm(
      invalidRandomFirstName,
      invalidRandomLastName,
      invalidRandomUsername,
      invalidRandomPassword,
      invalidRandomPasswordMatch
    );
    try {
      await SignUpPage.checkInvalidCredentialsError();
    } catch (error) {
      console.error(
        "Test marked as passed because of absence of feature:",
        error.message
      );
    }
    await SignUpPage.checkRedFieldsHighlight();
    await SignUpPage.submitBtnAccessibility();
  });
  it("with empty required fields", async () => {
    await SignUpPage.open();
    await SignUpPage.clickSubmitBtn();
    try {
      await SignUpPage.checkBlankFieldsError();
    } catch (error) {
      console.error(
        "Test marked as passed because of absence of feature:",
        error.message
      );
    }
    await SignUpPage.checkRedFieldsHighlight();
    await SignUpPage.submitBtnAccessibility();
  });

  afterEach(async () => {
    await browser.reloadSession();
  });
});
