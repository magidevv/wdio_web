import { $ } from "@wdio/globals";
import Page from "./page.js";

class TransactionDetailPage extends Page {
  get transactionSender() {
    return $("span[data-test^='transaction-sender-']");
  }

  get transactionAction() {
    return $("span[data-test^='transaction-action-']");
  }

  get transactionReceiver() {
    return $("span[data-test^='transaction-receiver-']");
  }

  get transactionAmount() {
    return $("span[data-test^='transaction-amount-']");
  }

  get transactionDescription() {
    return $("p[data-test='transaction-description']");
  }

  get transactionLikeCount() {
    return $("div[data-test^='transaction-like-count-']");
  }

  get transactionLikeBtn() {
    return $("button[data-test^='transaction-like-button-']");
  }

  get commentField() {
    return $("input[data-test^='transaction-comment-input-']");
  }

  get newComment() {
    return $("li[data-test^='comment-list-item-']");
  }

  async transactionDetailDisplay() {
    await super.isDisplayed(this.transactionSender);
    await super.isDisplayed(this.transactionAction);
    await super.isDisplayed(this.transactionReceiver);
    await super.isDisplayed(this.transactionAmount);
    await super.isDisplayed(this.transactionDescription);
    await super.isDisplayed(this.transactionLikeCount);
    await super.isDisplayed(this.transactionLikeBtn);
    await super.isDisplayed(this.commentField);
  }

  async newCommentDisplay() {
    await super.isDisplayed(this.newComment);
  }

  async fillCommentField(text) {
    await super.setValue(this.commentField, text);
    await this.commentField.addValue("\uE007");
  }

  async clickLikeBtn() {
    const likeCountText = await super.getText(this.transactionLikeCount);
    const likeCountNumber = parseInt(likeCountText, 10);
    const expectedQTY = (likeCountNumber + 1).toString();
    if (await super.isEnabled(this.transactionLikeBtn)) {
      await super.click(this.transactionLikeBtn);
      await super.checkText(this.transactionLikeCount, expectedQTY);
    }
  }
}

export default new TransactionDetailPage();
