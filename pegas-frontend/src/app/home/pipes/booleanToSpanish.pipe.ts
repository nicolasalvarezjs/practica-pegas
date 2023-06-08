import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleanToSpanish'
})
export class booleanToSpanish implements PipeTransform {

  transform(value: any, args?: any): any {
    return value ? 'si' : 'no';
  }

}
