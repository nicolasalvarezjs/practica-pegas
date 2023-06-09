import { Pipe, PipeTransform } from '@angular/core';
import { FEMENINO, MALE, MASCULINO } from '../../../constants/gender';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value: any): any {
    return value === MALE ? MASCULINO : FEMENINO;
  }

}
