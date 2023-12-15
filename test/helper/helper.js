import { faker } from "@faker-js/faker";

class Helper {
  static generateRandomValidFirstName() {
    return faker.person.firstName();
  }

  static generateRandomValidLastName() {
    return faker.person.lastName();
  }

  static generateRandomValidUsername() {
    return faker.internet.userName();
  }

  static generateRandomValidEmail() {
    return faker.internet.email();
  }

  static generateRandomValidPassword() {
    return faker.internet.password();
  }

  static generateRandomValidPhoneNumber() {
    return faker.string.numeric(12);
  }

  static generateRandomInvalidFirstName() {
    return faker.string.numeric(4);
  }

  static generateRandomInvalidLastName() {
    return faker.string.numeric(4);
  }

  static generateRandomInvalidUsername() {
    return faker.string.numeric(4);
  }

  static generateRandomInvalidEmail() {
    return faker.person.lastName() + "@" + faker.internet.domainSuffix();
  }

  static generateRandomInvalidPassword() {
    return faker.string.numeric(4);
  }

  static generateRandomInvalidPhoneNumber() {
    return faker.string.numeric(4);
  }

  static generateRandomValidBankName() {
    return faker.company.name();
  }

  static generateRandomValidRoutingNumber() {
    return faker.string.numeric(9);
  }

  static generateRandomValidAccNumber() {
    return faker.string.numeric(9);
  }

  static generateRandomInvalidBankName() {
    return faker.string.numeric(4);
  }

  static generateRandomInvalidRoutingNumber() {
    return faker.string.numeric(4);
  }

  static generateRandomInvalidAccNumber() {
    return faker.string.numeric(4);
  }

  static generateRandomValidAmount() {
    return faker.commerce.price();
  }

  static generateRandomValidNote() {
    return faker.string.alpha(15);
  }

  static generateInvalidAmount() {
    return ".";
  }

  static generateRandomInvalidNote() {
    return faker.string.numeric(15);
  }
}

export default Helper;
