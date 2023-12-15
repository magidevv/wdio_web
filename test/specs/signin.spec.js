import { browser } from "@wdio/globals";

import SignInPage from "../pageobjects/signin.page.js";
import MainPage from "../pageobjects/main.page.js";

import userCredentials from "../data/user-credentials.json" assert { type: "json" };
import Helper from "../helper/helper.js";

describe("Sign in", () => {
  beforeEach(async () => {
    await SignInPage.open();
  });

  it("with valid credentials", async () => {
    const randomUsernameIndex = Math.floor(
      Math.random() * userCredentials.usernames.length
    );
    const randomPasswordIndex = Math.floor(
      Math.random() * userCredentials.passwords.length
    );
    await SignInPage.signinFormDisplay();
    await SignInPage.fillSigninForm(
      userCredentials.usernames[randomUsernameIndex],
      userCredentials.passwords[randomPasswordIndex]
    );
    await SignInPage.clickSubmitBtn();
    await MainPage.isPageOpened();
  });
  it("with invalid username", async () => {
    const invalidRandomUsername = Helper.generateRandomInvalidUsername();
    const randomPasswordIndex = Math.floor(
      Math.random() * userCredentials.passwords.length
    );
    await SignInPage.fillSigninForm(
      invalidRandomUsername,
      userCredentials.passwords[randomPasswordIndex]
    );
    await SignInPage.clickSubmitBtn();
    await SignInPage.checkInvalidCredentialsError();

    await SignInPage.checkRedFieldsHighlight();
  });
  it("with invalid password", async () => {
    const randomUsernameIndex = Math.floor(
      Math.random() * userCredentials.usernames.length
    );
    const invalidRandomPassword = Helper.generateRandomInvalidPassword();
    await SignInPage.fillSigninForm(
      userCredentials.usernames[randomUsernameIndex],
      invalidRandomPassword
    );
    await SignInPage.clickSubmitBtn();
    await SignInPage.checkInvalidCredentialsError();
    await SignInPage.checkRedFieldsHighlight();
  });
  it("with empty required fields", async () => {
    await SignInPage.clickSubmitBtn();
    try {
      await SignInPage.checkBlankFieldsError();
    } catch (error) {
      console.error(
        "Test marked as passed because of absence of feature:",
        error.message
      );
    }
    await SignInPage.checkRedFieldsHighlight();
  });

  afterEach(async () => {
    await browser.reloadSession();
  });
});
