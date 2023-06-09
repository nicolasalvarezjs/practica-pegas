import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  male = 'MALE';
  female = 'FEMALE';

  transform(value: any, args?: any): any {
    return value === this.male ? 'Masculino' : 'Femenino';
  }

}
