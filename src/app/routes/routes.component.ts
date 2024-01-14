import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import   {API} from '../../api/api'
import { busStop } from '../../dataClasses/BusStop';
import { BusRoute } from '../../dataClasses/BusRoute';

@Component({
  selector: 'app-routes',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './routes.component.html',
  styleUrl: './routes.component.css'
})
export class RoutesComponent implements OnInit {
  async ngOnInit() {
    this.routes = await new API().getBusRoutes();
      console.log(this.routes)
    }
    title = 'admin-panel';
    routes : BusRoute[] = [];
}
