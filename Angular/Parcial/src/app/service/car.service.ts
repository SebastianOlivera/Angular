import { Injectable } from '@angular/core';
import { Car } from '../interface/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {
// Va en mayuscula cuando haces datos mock (en el servicio) datos harcodeados
  CARS:Car[] = [
    {
      image:'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/2023/revuelto/revuelto_m.png',
      model:'modelo',
      description:'destripction',
      type:'audi'
    },
    {
      image:'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/2023/revuelto/revuelto_m.png',
      model:'modelo',
      description:'destripction',
      type:'audi'
    },
    {
      image:'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/2023/revuelto/revuelto_m.png',
      model:'modelo',
      description:'destripction',
      type:'audi'
    }
  ]

  constructor() { }
  getCars():Car[] {
    return this.CARS
  }

}
