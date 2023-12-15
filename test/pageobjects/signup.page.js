import { $, $$ } from "@wdio/globals";
import Page from "./page.js";

const invalidFirstName_error = "First Name is not valid";
const invalidLastName_error = "Last Name is not valid";
const invalidUsername_error = "Username is not valid";
const invalidPassword_error = "Password is not valid";
const invalidPasswordMatch_error = "Password does not match";
const blankFirstName_error = "First Name is required";
const blankLastName_error = "Last Name is required";
const blankUsername_error = "Username is required";
const blankPassword_error = "Enter your password";
const blankPasswordMatch_error = "Confirm your password";

class SignUpPage extends Page {
  get firstNameField() {
    return $("#firstName");
  }

  get lastNameField() {
    return $("#lastName");
  }

  get usernameField() {
    return $("#username");
  }

  get passwordField() {
    return $("#password");
  }

  get confirmPasswordField() {
    return $("#confirmPassword");
  }

  get submitBtn() {
    return $("button[data-test='signup-submit']");
  }

  get firstNameFieldErrorMsg() {
    return $("#firstName-helper-text");
  }

  get lastNameFieldErrorMsg() {
    return $("#lastName-helper-text");
  }

  get usernameFieldErrorMsg() {
    return $("#username-helper-text");
  }

  get passwordFieldErrorMsg() {
    return $("#password-helper-text");
  }

  get passwordMatchFieldErrorMsg() {
    return $("#confirmPassword-helper-text");
  }

  get redFieldsHighlight() {
    return $$('fieldset[aria-hidden="true"].MuiOutlinedInput-notchedOutline');
  }

  get signinLink() {
    return $('a[href="/signin"]');
  }

  async signupFormDisplay() {
    await super.isDisplayed(this.firstNameField);
    await super.isDisplayed(this.lastNameField);
    await super.isDisplayed(this.usernameField);
    await super.isDisplayed(this.passwordField);
    await super.isDisplayed(this.confirmPasswordField);
    await super.isDisplayed(this.submitBtn);
  }

  async signinLinkDisplay() {
    await super.isDisplayed(this.signinLink);
  }

  async checkInvalidCredentialsError() {
    const firstNameFieldErrorMsg = this.firstNameFieldErrorMsg;
    const lastNameFieldErrorMsg = this.lastNameFieldErrorMsg;
    const usernameFieldErrorMsg = this.usernameFieldErrorMsg;
    const passwordFieldErrorMsg = this.passwordFieldErrorMsg;
    const passwordMatchFieldErrorMsg = this.passwordMatchFieldErrorMsg;
    await super.checkText(firstNameFieldErrorMsg, invalidFirstName_error);
    await super.checkText(lastNameFieldErrorMsg, invalidLastName_error);
    await super.checkText(usernameFieldErrorMsg, invalidUsername_error);
    await super.checkText(passwordFieldErrorMsg, invalidPassword_error);
    await super.checkText(
      passwordMatchFieldErrorMsg,
      invalidPasswordMatch_error
    );
  }

  async checkBlankFieldsError() {
    const firstNameFieldErrorMsg = this.firstNameFieldErrorMsg;
    const lastNameFieldErrorMsg = this.lastNameFieldErrorMsg;
    const usernameFieldErrorMsg = this.usernameFieldErrorMsg;
    const passwordFieldErrorMsg = this.passwordFieldErrorMsg;
    const passwordMatchFieldErrorMsg = this.passwordMatchFieldErrorMsg;
    await super.checkText(firstNameFieldErrorMsg, blankFirstName_error);
    await super.checkText(lastNameFieldErrorMsg, blankLastName_error);
    await super.checkText(usernameFieldErrorMsg, blankUsername_error);
    await super.checkText(passwordFieldErrorMsg, blankPassword_error);
    await super.checkText(
      passwordMatchFieldErrorMsg,
      blankPasswordMatch_error
    );
  }

  async checkRedFieldsHighlight() {
    const redFieldsHighlight = this.redFieldsHighlight;
    await super.checkRedHighlightedFields(redFieldsHighlight);
  }

  async submitBtnAccessibility() {
    await super.isDisabled(this.submitBtn);
  }

  async fillSignupForm(
    firstName,
    lastName,
    username,
    password,
    confirmPassword
  ) {
    await super.setValue(this.firstNameField, firstName);
    await super.setValue(this.lastNameField, lastName);
    await super.setValue(this.usernameField, username);
    await super.setValue(this.passwordField, password);
    await super.setValue(this.confirmPasswordField, confirmPassword);
  }

  async clickSubmitBtn() {
    await super.click(this.submitBtn);
  }

  async clickSigninLink() {
    await super.click(this.signinLink);
  }

  async isPageOpened() {
    await super.doesPageURLContainText("signup");
  }

  async open() {
    await super.openURL("/signup");
  }
}

export default new SignUpPage();
