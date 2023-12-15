import { browser } from "@wdio/globals";

import SignInPage from "../pageobjects/signin.page.js";
import MainPage from "../pageobjects/main.page.js";
import TransactionDetailPage from "../pageobjects/transaction.detail.page.js";

import userCredentials from "../data/user-credentials.json" assert { type: "json" };
import Helper from "../helper/helper.js";

describe("View the transaction detail", () => {
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

  it("as a registered user", async () => {
    await MainPage.clickFirstTransaction();
    await TransactionDetailPage.transactionDetailDisplay();
  });
  it("writing the valid comment", async () => {
    const validRandomNote = Helper.generateRandomValidNote();
    await MainPage.clickFirstTransaction();
    await TransactionDetailPage.fillCommentField(validRandomNote);
    await TransactionDetailPage.newCommentDisplay();
  });
  it("like the transaction", async () => {
    await MainPage.clickFirstTransaction();
    await TransactionDetailPage.clickLikeBtn();
  });

  afterEach(async () => {
    await browser.reloadSession();
  });
});
