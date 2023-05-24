import { Component, Input } from '@angular/core';
import { Car } from 'src/app/interface/car';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {

  @Input()car?:Car

}
