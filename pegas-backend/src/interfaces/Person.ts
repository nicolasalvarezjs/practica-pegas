export interface Person {
  name: string;
  lastname: string;
  age: string;
  gender: "MALE" | "FEMALE";
  isBreastfeedingOrPregnant: boolean;
  phone: string;
  birthDate: Date | string;
}
