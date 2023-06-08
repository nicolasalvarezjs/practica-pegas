enum Gender {
    'MALE' ,
    'FEMALE'
}

export interface Person {
    name: string;
    lastname: string;
    age: string;
    gender: Gender,
    isBreastfeedingOrPregnant: boolean;
    phone: string;
    birthDate: Date;
}