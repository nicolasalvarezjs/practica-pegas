import { Pipe, PipeTransform } from '@angular/core';
import { MALE, FEMALE } from '../../../constants/gender';

type pipeArgs = {
  gender: typeof MALE | typeof FEMALE;
}

@Pipe({
  name: 'breastfeedingOrPregnantTransform'
})
export class breastfeedingOrPregnantTransform implements PipeTransform {

  transform(value: any, { gender }: pipeArgs ): any {
    if(gender === MALE){
      return '-';
    }
    return value ? 'si' : 'no';
  }

}
