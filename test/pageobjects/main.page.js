import { $, $$ } from "@wdio/globals";
import Page from "./page.js";

const invalidBankName_error = "Must contain at least 5 characters";
const invalidRoutingNumber_error = "Must contain a valid routing number";
const invalidAccNumber_error = "Must contain at least 9 digits";
const blankBankName_error = "Enter a bank name";
const blankRoutingNumber_error = "Enter a valid bank routing number";
const blankAccNumber_error = "Enter a valid bank account number";

class MainPage extends Page {
  get sidebarUsername() {
    return $("h6[data-test='sidenav-username']");
  }
  get myAccLink() {
    return $("a[data-test='sidenav-user-settings']");
  }
  get popupWindowTitle() {
    return $("div[data-test='user-onboarding-dialog-title'] h2");
  }

  get popupWindowDescription() {
    return $("div[data-test='user-onboarding-dialog-content'] p");
  }

  get nextBtn() {
    return $("button[data-test='user-onboarding-next']");
  }

  get bankNameField() {
    return $("#bankaccount-bankName-input");
  }

  get routingNumberField() {
    return $("#bankaccount-routingNumber-input");
  }

  get accNumberField() {
    return $("#bankaccount-accountNumber-input");
  }

  get submitBtn() {
    return $("button[data-test='bankaccount-submit']");
  }

  get bankNameFieldErrorMsg() {
    return $("#bankaccount-bankName-input-helper-text");
  }

  get routingNumberFieldErrorMsg() {
    return $("#bankaccount-routingNumber-input-helper-text");
  }

  get accNumberFieldErrorMsg() {
    return $("#bankaccount-accountNumber-input-helper-text");
  }

  get redFieldsHighlight() {
    return $$('fieldset[aria-hidden="true"].MuiOutlinedInput-notchedOutline');
  }

  get bankAccsLink() {
    return $("a[data-test='sidenav-bankaccounts']");
  }

  get newTransactionLink() {
    return $("a[data-test='nav-top-new-transaction']");
  }

  get firstTransaction() {
    return $(
      "div[data-test='transaction-list']");
  }

  async getStartedWindowDisplay() {
    await super.isDisplayed(this.popupWindowTitle);
    await super.isDisplayed(this.popupWindowDescription);
    await super.isDisplayed(this.nextBtn);
  }

  async createBankAccFormDisplay() {
    await super.isDisplayed(this.popupWindowTitle);
    await super.isDisplayed(this.bankNameField);
    await super.isDisplayed(this.routingNumberField);
    await super.isDisplayed(this.accNumberField);
    await super.isDisplayed(this.submitBtn);
  }

  async finishedWindowDisplay() {
    await super.isDisplayed(this.popupWindowTitle);
    await super.isDisplayed(this.popupWindowDescription);
    await super.isDisplayed(this.nextBtn);
  }

  async bankAccsLinkDisplay() {
    await super.isDisplayed(this.bankAccsLink);
  }

  async newTransactionBtnDisplay() {
    await super.isDisplayed(this.newTransactionLink);
  }

  async popupWindowExisting() {
    await super.isExist(this.popupWindowTitle);
  }

  async submitBtnAccessibility() {
    await super.isDisabled(this.submitBtn);
  }

  async fillCreateBankAccForm(bankName, routingNumber, accNumber) {
    await super.setValue(this.bankNameField, bankName);
    await super.setValue(this.routingNumberField, routingNumber);
    await super.setValue(this.accNumberField, accNumber);
  }

  async checkInvalidCredentialsError() {
    const bankNameFieldErrorMsg = this.bankNameFieldErrorMsg;
    const routingNumberFieldErrorMsg = this.routingNumberFieldErrorMsg;
    const accNumberFieldErrorMsg = this.accNumberFieldErrorMsg;
    await super.checkText(bankNameFieldErrorMsg, invalidBankName_error);
    await super.checkText(
      routingNumberFieldErrorMsg,
      invalidRoutingNumber_error
    );
    await super.checkText(accNumberFieldErrorMsg, invalidAccNumber_error);
  }

  async checkBlankFieldsError() {
    const bankNameFieldErrorMsg = this.bankNameFieldErrorMsg;
    const routingNumberFieldErrorMsg = this.routingNumberFieldErrorMsg;
    const accNumberFieldErrorMsg = this.accNumberFieldErrorMsg;
    await super.click(this.bankNameField);
    await super.click(this.routingNumberField);
    await super.click(this.accNumberField);
    await super.click(this.bankNameField);
    await super.checkText(bankNameFieldErrorMsg, blankBankName_error);
    await super.checkText(routingNumberFieldErrorMsg, blankRoutingNumber_error);
    await super.checkText(accNumberFieldErrorMsg, blankAccNumber_error);
  }

  async checkRedFieldsHighlight() {
    const redFieldsHighlight = this.redFieldsHighlight;
    await super.checkRedHighlightedFields(redFieldsHighlight);
  }

  async checkUsername(expectedUsername) {
    await super.checkText(this.sidebarUsername, "@" + expectedUsername);
  }

  async clickNextBtn() {
    await super.click(this.nextBtn);
  }

  async clickSubmitBtn() {
    await super.click(this.submitBtn);
  }

  async clickMyAccLink() {
    await super.click(this.myAccLink);
  }

  async clickBankAccsLink() {
    await super.click(this.bankAccsLink);
  }

  async clickNewTransactionBtn() {
    await super.click(this.newTransactionLink);
  }

  async clickFirstTransaction() {
    const firstTransaction = this.firstTransaction;
    await super.click(firstTransaction);
  }

  async isPageOpened() {
    await super.doesPageHaveURL("http://localhost:3000/");
  }

  async open() {
    await super.openURL("");
  }
}

export default new MainPage();
