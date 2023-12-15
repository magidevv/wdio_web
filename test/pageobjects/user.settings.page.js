import { $, $$ } from "@wdio/globals";
import Page from "./page.js";

const invalidFirstName_error = "First name is not valid";
const invalidLastName_error = "Last name is not valid";
const invalidEmail_error = "Must contain a valid email address";
const invalidPhoneNumber_error = "Phone number is not valid";
const blankFirstName_error = "Enter a first name";
const blankLastName_error = "Enter a last name";
const blankEmail_error = "Enter an email address";
const blankPhoneNumber_error = "Enter a phone number";

class UserSettingsPage extends Page {
  get firstNameField() {
    return $("#user-settings-firstName-input");
  }

  get lastNameField() {
    return $("#user-settings-lastName-input");
  }

  get emailField() {
    return $("#user-settings-email-input");
  }

  get phoneNumberField() {
    return $("#user-settings-phoneNumber-input");
  }

  get submitBtn() {
    return $("button[data-test='user-settings-submit']");
  }

  get fullNameText() {
    return $("h6[data-test='sidenav-user-full-name']");
  }

  get firstNameFieldErrorMsg() {
    return $("#user-settings-firstName-input-helper-text");
  }

  get lastNameFieldErrorMsg() {
    return $("#user-settings-lastName-input-helper-text");
  }

  get emailFieldErrorMsg() {
    return $("#user-settings-email-input-helper-text");
  }

  get phoneNumberFieldErrorMsg() {
    return $("#user-settings-phoneNumber-input-helper-text");
  }

  get redFieldsHighlight() {
    return $$('fieldset[aria-hidden="true"].MuiOutlinedInput-notchedOutline');
  }

  async userSettingsFormDisplay() {
    await super.isDisplayed(this.firstNameField);
    await super.isDisplayed(this.lastNameField);
    await super.isDisplayed(this.emailField);
    await super.isDisplayed(this.phoneNumberField);
    await super.isDisplayed(this.submitBtn);
  }

  async checkInvalidCredentialsError() {
    const firstNameFieldErrorMsg = this.firstNameFieldErrorMsg;
    const lastNameFieldErrorMsg = this.lastNameFieldErrorMsg;
    const emailFieldErrorMsg = this.emailFieldErrorMsg;
    const phoneNumberFieldErrorMsg = this.phoneNumberFieldErrorMsg;
    await super.checkText(firstNameFieldErrorMsg, invalidFirstName_error);
    await super.checkText(lastNameFieldErrorMsg, invalidLastName_error);
    await super.checkText(emailFieldErrorMsg, invalidEmail_error);
    await super.checkText(phoneNumberFieldErrorMsg, invalidPhoneNumber_error);
  }

  async checkBlankFieldsError() {
    const firstNameFieldErrorMsg = this.firstNameFieldErrorMsg;
    const lastNameFieldErrorMsg = this.lastNameFieldErrorMsg;
    const emailFieldErrorMsg = this.emailFieldErrorMsg;
    const phoneNumberFieldErrorMsg = this.phoneNumberFieldErrorMsg;
    await super.checkText(firstNameFieldErrorMsg, blankFirstName_error);
    await super.checkText(lastNameFieldErrorMsg, blankLastName_error);
    await super.checkText(emailFieldErrorMsg, blankEmail_error);
    await super.checkText(phoneNumberFieldErrorMsg, blankPhoneNumber_error);
  }

  async checkRedFieldsHighlight() {
    const redFieldsHighlight = this.redFieldsHighlight;
    await super.checkRedHighlightedFields(redFieldsHighlight);
  }

  async submitBtnAccessibility() {
    await super.isDisabled(this.submitBtn);
  }
  
  async clearUserSettingsForm() {
    await super.clearValue(this.firstNameField);
    await super.clearValue(this.lastNameField);
    await super.clearValue(this.emailField);
    await super.clearValue(this.phoneNumberField);
  }

  async fillUserSettingsForm(firstName, lastName, email, phoneNumber) {
    await super.setValue(this.firstNameField, firstName);
    await super.setValue(this.lastNameField, lastName);
    await super.setValue(this.emailField, email);
    await super.setValue(this.phoneNumberField, phoneNumber);
  }

  async sidebarFullNameCheck(fullName) {
    const fullNameText = this.fullNameText;
    await super.checkText(fullNameText, fullName);
  }

  async clickSubmitBtn() {
    await super.click(this.submitBtn);
  }

  async open() {
    await super.openURL("/user/settings");
  }
}

export default new UserSettingsPage();
