import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Person } from '../../interfaces/Person';
import { phoneIsAlreadyMessage } from '../../constants/errorMessages';
import { Router } from '@angular/router';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss']
})
export class FormRegisterComponent implements OnInit {

  male = 'MALE';
  female = 'FEMALE';
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    age: new FormControl('', [Validators.required]),
    gender: new FormControl('MALE', [Validators.required]),
    birthDate: new FormControl('09/13/1993', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    isBreastfeedingOrPregnant: new FormControl(false, [])
  });
  loading = false;

  constructor(private peopleService: PeopleService, private router: Router) {}

  ngOnInit() {
    this.form.controls['gender'].valueChanges.subscribe( newValue => {
      if(newValue === this.male){
        this.form.controls['isBreastfeedingOrPregnant'].setValue(false);
      }
    });
  }

  onSubmit(){
    if(this.form.invalid){
      this.form.markAllAsTouched();
      return;
    }
    this.loading = true;
    this.peopleService.createPerson(this.form.value as Person)
      .subscribe({
        next: e => {
          this.loading = false;
          this.router.navigateByUrl('/home');
        },
        error: e => {
          if(e.error === phoneIsAlreadyMessage){
            this.form.controls['phone'].setErrors({ alreadyExist: true });
            this.form.controls['phone'].markAsTouched();
          }
          this.loading = false;
        },
      })
  }

  get isMale(){
    return this.form.value.gender === this.male;
  }

  getIsInvalidField(formName: keyof Person){
    return this.form.controls[formName].invalid && this.form.controls[formName].touched;
  }

  getInputClass(formName: keyof Person){
    return `form-control ${ this.getIsInvalidField(formName) && 'is-invalid' }`;
  }

  getPhoneError(key: 'required' | 'alreadyExist')  {
    const errors = this.form.controls['phone'].errors || {};
    return errors[key] && this.form.controls['phone'].touched;
  }

}
