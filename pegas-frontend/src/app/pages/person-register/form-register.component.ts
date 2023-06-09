import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Person } from '../../interfaces/Person';
import { phoneIsAlreadyMessage } from '../../constants/errorMessages';
import { Router } from '@angular/router';
import { PeopleService } from 'src/app/services/people.service';
import { MALE, FEMALE } from '../../constants/gender';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss']
})
export class FormRegisterComponent implements OnInit {

  male = MALE;
  female = FEMALE;
  form!: FormGroup;
  loading = false;

  constructor(
    private peopleService: PeopleService, 
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      lastname: ['', [Validators.required, Validators.minLength(3)]],
      age: ['', [Validators.required, Validators.min(1), Validators.max(120)]],
      gender: [MALE,],
      birthDate: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      isBreastfeedingOrPregnant: [false]
    });
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
    const formValues: Person = {
      ...this.form.value,
      phone: this.form.value.phone.toString()
    }
    this.peopleService.createPerson(formValues)
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

  getAgeError(keyError: 'required' | 'min' | 'max'){
    const errors = this.form.controls['age'].errors || {};
    return errors[keyError] && this.form.controls['phone'].touched;
  }

}
