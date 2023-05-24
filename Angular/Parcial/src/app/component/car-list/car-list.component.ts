import { Component } from '@angular/core';
import { Car } from 'src/app/interface/car';
import { CarService } from 'src/app/service/car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent {

  cars:Car[] = []

  constructor(private carService:CarService){
    this.cars = this.carService.getCars()
  }

}
