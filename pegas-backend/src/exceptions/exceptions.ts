import { phoneIsAlreadyMessage } from "./errorMessages";

export class PhoneAlreadyExist extends Error {
  constructor(message?: string) {
    super(message || phoneIsAlreadyMessage);
  }
}

export class FieldsAreRequired extends Error {
  constructor(message: string) {
    super(message);
  }
}
