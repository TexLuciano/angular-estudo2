import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sexo',
})
export class SexoPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    switch (value) {
      case 'm':
        return 'masculino';
      case 'f':
        return 'feminino';
      default:
        return value;
    }
  }
}
