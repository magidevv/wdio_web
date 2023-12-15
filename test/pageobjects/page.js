import { browser } from "@wdio/globals";

/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
export default class Page {
  /**
   * Opens a sub page of the page
   * @param path path of the sub page (e.g. /path/to/page.html)
   */

  async openURL(path) {
    await browser.url(path);
  }

  async getURL() {
    return browser.getUrl();
  }

  async waitForTimeout(ms) {
    await browser.pause(ms);
  }

  async doesPageHaveURL(url) {
    await expect(await browser).toHaveUrl(url);
  }

  async doesPageURLContainText(text) {
    await expect(await browser.getUrl()).toContain(text);
  }

  async click(element) {
    await element.click();
  }

  async dblClick(element) {
    await element.doubleClick();
  }

  async setValue(element, value) {
    await element.setValue(value);
  }

  async clearValue(element) {
    const valueLength = (await element.getValue()).length;
    for (let i = 0; i < valueLength; i++) {
      await element.addValue("\uE003");
    }
  }

  async addKeyValue(element) {
    await element.addValue("\uE003");
  }

  async isDisplayed(element, timeout = 5000) {
    await expect(await element).toBeDisplayed({ timeout });
  }

  async isDisabled(element) {
    await expect(await element).toBeDisabled();
  }

  async isExist(element) {
    await expect(await element).not.toBeExisting();
  }

  async getText(element) {
    return await element.getText();
  }

  async checkText(element, text) {
    const actualText = await this.getText(element);
    await expect(actualText).toContain(text);
  }

  async checkTextArray(element, textArray) {
    const actualText = await this.getText(element);
    await textArray.forEach((text) => {
      expect(actualText).toContain(text);
    });
  }

  async checkRedHighlightedFields(fields) {
    for (const field of fields) {
      const colorProperty = await field.getCSSProperty("border-color");
      const actualColor = colorProperty.parsed.hex;
      expect(actualColor).toEqual("#f44336");
    }
  }
}
