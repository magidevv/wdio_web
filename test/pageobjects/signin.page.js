import { $, $$ } from "@wdio/globals";
import Page from "./page.js";

const invalidCredentials_error = "Username or password is invalid";
const blankUsername_error = "Username is required";
const blankPassword_error = "Password is required";
class SignInPage extends Page {
  get usernameField() {
    return $("#username");
  }

  get passwordField() {
    return $("#password");
  }

  get submitBtn() {
    return $("button[data-test='signin-submit']");
  }

  get signinErrorMsg() {
    return $("div[data-test='signin-error']");
  }

  get redFieldsHighlight() {
    return $$('fieldset[aria-hidden="true"].MuiOutlinedInput-notchedOutline');
  }

  get emptyFieldErrorMsg() {
    return $("#username-helper-text");
  }

  get signupLink() {
    return $("a[data-test='signup']");
  }

  async signinFormDisplay() {
    await super.isDisplayed(this.usernameField);
    await super.isDisplayed(this.passwordField);
    await super.isDisplayed(this.submitBtn);
  }

  async signupLinkDisplay() {
    await super.isDisplayed(this.signupLink);
  }

  async checkInvalidCredentialsError() {
    const signinErrorMsg = this.signinErrorMsg;
    await super.checkText(signinErrorMsg, invalidCredentials_error);
  }

  async checkBlankFieldsError() {
    const emptyFieldErrorMsg = this.emptyFieldErrorMsg;
    await super.checkTextArray(emptyFieldErrorMsg, [
      blankUsername_error,
      blankPassword_error,
    ]);
  }

  async checkRedFieldsHighlight() {
    const redFieldsHighlight = this.redFieldsHighlight;
    await super.checkRedHighlightedFields(redFieldsHighlight);
  }

  async fillSigninForm(username, password) {
    await super.setValue(this.usernameField, username);
    await super.setValue(this.passwordField, password);
  }

  async clickSubmitBtn() {
    await super.click(this.submitBtn);
  }

  async clickSignupLink() {
    await super.click(this.signupLink);
  }

  async isPageOpened() {
    await super.doesPageURLContainText("signin");
  }

  async open() {
    await super.openURL("/signin");
  }
}

export default new SignInPage();
