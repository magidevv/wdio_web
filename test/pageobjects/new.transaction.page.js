import { $ } from "@wdio/globals";
import Page from "./page.js";

const invalidAmount_error = "Please enter a valid amount";
const blankAmount_error = "Please enter a valid amount";
const blankNote_error = "Please enter a note";

class NewTransactionPage extends Page {
  get searchField() {
    return $("#user-list-search-input");
  }

  get userList() {
    return $("ul[data-test='users-list']");
  }

  get firstUser() {
    return $("ul[data-test='users-list']");
  }

  get amountField() {
    return $("#amount");
  }

  get addNoteField() {
    return $("#transaction-create-description-input");
  }

  get requestBtn() {
    return $("button[data-test='transaction-create-submit-request']");
  }

  get payBtn() {
    return $("button[data-test='transaction-create-submit-payment']");
  }

  get redFieldsHighlight() {
    return $$('fieldset[aria-hidden="true"].MuiOutlinedInput-notchedOutline');
  }

  get amountFieldErrorMsg() {
    return $("#transaction-create-amount-input-helper-text");
  }

  get addNoteFieldErrorMsg() {
    return $("#transaction-create-description-input-helper-text");
  }

  get completeRequestDetails() {
    return $("//*[contains(text(), 'Requested')]");
  }

  get completePaymentDetails() {
    return $("//*[contains(text(), 'Paid')]");
  }

  get returnToTransactionsLink() {
    return $("a[data-test='new-transaction-return-to-transactions']");
  }

  get createAnotherTransactionBtn() {
    return $("button[data-test='new-transaction-create-another-transaction']");
  }

  get successTransactionMsg() {
    return $("div[data-test='alert-bar-success'] div.MuiAlert-message");
  }

  get homeBtn() {
    return $("a[data-test='sidenav-home']");
  }

  async selectContactSectionDisplay() {
    await super.isDisplayed(this.searchField);
    await super.isDisplayed(this.userList);
  }

  async paymentFormDisplay() {
    await super.isDisplayed(this.amountField);
    await super.isDisplayed(this.addNoteField);
    await super.isDisplayed(this.requestBtn);
    await super.isDisplayed(this.payBtn);
  }

  async completeSectionDisplay() {
    await super.isDisplayed(this.returnToTransactionsLink);
    await super.isDisplayed(this.createAnotherTransactionBtn);
    await super.isDisplayed(this.successTransactionMsg);
  }

  async homeBtnDisplay() {
    await super.isDisplayed(this.homeBtn);
  }

  async checkInvalidCredentialsError() {
    const amountFieldErrorMsg = this.amountFieldErrorMsg;
    await super.checkText(amountFieldErrorMsg, invalidAmount_error);
  }

  async checkBlankFieldsError() {
    const amountFieldErrorMsg = this.amountFieldErrorMsg;
    const addNoteFieldErrorMsg = this.addNoteFieldErrorMsg;
    await super.checkText(amountFieldErrorMsg, blankAmount_error);
    await super.checkText(addNoteFieldErrorMsg, blankNote_error);
  }

  async checkRedFieldsHighlight() {
    const redFieldsHighlight = this.redFieldsHighlight;
    await super.checkRedHighlightedFields(redFieldsHighlight);
  }

  async requestBtnAccessibility() {
    await super.isDisabled(this.requestBtn);
  }

  async payBtnAccessibility() {
    await super.isDisabled(this.payBtn);
  }

  async fillRequestForm(amount, note) {
    await super.setValue(this.amountField, amount);
    await super.setValue(this.addNoteField, note);
    await this.clickRequestBtn();
    await super.checkText(
      this.completeRequestDetails,
      `Requested $${amount}.00 for ${note}`
    );
  }

  async fillPaymentForm(amount, note) {
    await super.setValue(this.amountField, amount);
    await super.setValue(this.addNoteField, note);
    await this.clickPayBtn();
    await super.checkText(
      this.completePaymentDetails,
      `Paid $${amount} for ${note}`
    );
  }

  async fillForm(amount, note) {
    await super.setValue(this.amountField, amount);
    await super.setValue(this.addNoteField, note);
    await super.click(this.amountField);
  }

  async clickFirstUser() {
    await super.click(this.firstUser);
  }

  async clickRequestBtn() {
    await super.click(this.requestBtn);
  }

  async clickPayBtn() {
    await super.click(this.payBtn);
  }

  async clickCreateAnotherTransaction() {
    await super.click(this.createAnotherTransactionBtn);
  }

  async clickReturnToTransactions() {
    await super.click(this.returnToTransactionsLink);
  }

  async clickHomeBtn() {
    await super.click(this.homeBtn);
  }

  async isPageOpened() {
    await super.doesPageURLContainText("transaction/new");
  }

  async open() {
    await super.openURL("/transaction/new");
  }
}

export default new NewTransactionPage();
