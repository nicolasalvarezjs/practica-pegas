import { MALE, FEMALE } from '../constants/gender';

export interface Person {
  name: string;
  lastname: string;
  age: string;
  gender: typeof MALE | typeof FEMALE;
  isBreastfeedingOrPregnant: boolean;
  phone: string;
  birthDate: Date | string;
}