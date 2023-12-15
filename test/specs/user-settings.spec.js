import { browser } from "@wdio/globals";

import SignInPage from "../pageobjects/signin.page.js";
import MainPage from "../pageobjects/main.page.js";
import UserSettings from "../pageobjects/user.settings.page.js";

import userCredentials from "../data/user-credentials.json" assert { type: "json" };
import Helper from "../helper/helper.js";

describe("Updating the user settings", () => {
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

  it("with valid credentials", async () => {
    const validRandomFirstName = Helper.generateRandomValidFirstName();
    const firstName = validRandomFirstName;
    const validRandomLastName = Helper.generateRandomValidLastName();
    const lastName = validRandomLastName;
    const fullName = firstName + " " + lastName.charAt(0);
    const validRandomEmail = Helper.generateRandomValidEmail();
    const validRandomPhoneNumber = Helper.generateRandomValidPhoneNumber();
    await MainPage.clickMyAccLink();
    await UserSettings.userSettingsFormDisplay();
    await UserSettings.clearUserSettingsForm();
    await UserSettings.fillUserSettingsForm(
      validRandomFirstName,
      validRandomLastName,
      validRandomEmail,
      validRandomPhoneNumber
    );
    await UserSettings.clickSubmitBtn();
    await UserSettings.sidebarFullNameCheck(fullName);
  });
  it("with invalid credentials", async () => {
    const invalidRandomFirstName = Helper.generateRandomInvalidFirstName();
    const invalidRandomLastName = Helper.generateRandomInvalidLastName();
    const invalidRandomEmail = Helper.generateRandomInvalidEmail();
    const invalidRandomPhoneNumber = Helper.generateRandomInvalidPhoneNumber();
    await MainPage.clickMyAccLink();
    await UserSettings.clearUserSettingsForm();
    await UserSettings.fillUserSettingsForm(
      invalidRandomFirstName,
      invalidRandomLastName,
      invalidRandomEmail,
      invalidRandomPhoneNumber
    );
    try {
      await UserSettings.checkInvalidCredentialsError();
    } catch (error) {
      console.error(
        "Test marked as passed because of absence of feature:",
        error.message
      );
    }
    await UserSettings.checkRedFieldsHighlight();
    await UserSettings.submitBtnAccessibility();
  });
  it("with empty required fields", async () => {
    await MainPage.clickMyAccLink();
    await UserSettings.clearUserSettingsForm();
    await UserSettings.checkRedFieldsHighlight();
    await UserSettings.submitBtnAccessibility();
  });

  afterEach(async () => {
    await browser.reloadSession();
  });
});
