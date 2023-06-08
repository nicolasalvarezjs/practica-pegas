

export class PhoneAlreadyExist extends Error {
    constructor(){
        super('Phone already exist');
    }
}