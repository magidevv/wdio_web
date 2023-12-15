import { $ } from "@wdio/globals";
import Page from "./page.js";

class BankAccsPage extends Page {
  get bankAccsList() {
    return $("ul[data-test='bankaccount-list']");
  }

  get bankAccName() {
    return $("li[data-test^='bankaccount-list-item-'] p");
  }

  get bankAccDeleteBtn() {
    return $("button[data-test='bankaccount-delete']");
  }

  async bankAccsListDisplay() {
    await super.isDisplayed(this.bankAccsList);
    await super.isDisplayed(this.bankAccName);
  }

  async bankAccDeleteBtnDisplay() {
    await super.isDisplayed(this.bankAccDeleteBtn);
  }

  async bankAccDeleteBtnAccessibility() {
    await super.isExist(this.bankAccDeleteBtn);
  }

  async clickBankAccDeleteBtn() {
    const actualBankAccName = await super.getText(this.bankAccName);
    await super.click(this.bankAccDeleteBtn);
    await super.checkText(this.bankAccName, actualBankAccName + " " + "(Deleted)");
  }

  async isPageOpened() {
    await super.doesPageURLContainText("bankaccounts");
  }

  async open() {
    await super.openURL("/bankaccounts");
  }
}

export default new BankAccsPage();
