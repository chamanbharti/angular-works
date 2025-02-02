import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  // transform(value: any): string {
  //   if (value.length > 10) {
  //     return value.substr(0, 10) + '...';
  //   }
  //   return value;
  // }
  // Parametrizing a Custom Pipe
  transform(value: any, limit: number): string {
    if (value.length > limit) {
      return value.substr(0, limit) + '...';
    }
    return value;
  }
}
