import { Component , OnInit } from '@angular/core';
import   {API} from '../../api/api'
import { busStop } from '../../dataClasses/BusStop';
import { BusRoute } from '../../dataClasses/BusRoute';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-stops',
  standalone: true,
  imports: [CommonModule, RouterOutlet,],
  templateUrl: './stops.component.html',
  styleUrl: './stops.component.css'
})
export class StopsComponent implements OnInit {
  async ngOnInit() {
    this.stops = await new API().getBusStops();
      console.log(this.stops)
    }
   
    stops : busStop[] = []; 
}
