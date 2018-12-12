import { Pipe, PipeTransform } from '@angular/core';

/**
 * Trunc the string value and add ...
 * Usage
 *  value | trunc:length
 * Exemple:
 *  {{ "some text" | trunc:4 }}
 *  formats to : some...
 */
@Pipe({
  name: 'trunc'
})
export class TruncPipe implements PipeTransform {

  transform(value: string, length: number): string {
    return value.substr(0, length) + '...';
  }

}
