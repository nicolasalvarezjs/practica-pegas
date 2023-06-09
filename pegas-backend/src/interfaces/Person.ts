export interface Person {
  name: string;
  lastname: string;
  age: number;
  gender: "MALE" | "FEMALE";
  isBreastfeedingOrPregnant: boolean;
  phone: string;
  birthDate: Date | string;
}
