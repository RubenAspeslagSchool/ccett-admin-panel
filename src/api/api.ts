'use client'

import { busStop } from '../dataClasses/BusStop';
import { BusRoute } from '../dataClasses/BusRoute';

export class API{
   
API_URL = 'http://35.210.33.78:3001/api/graphql';

// google maps directions api
//! process.env.REACT_APP_GOOGLE_MAPS_API_KEY does not work Bug???
apiKey = "AIzaSyDhnmK5v6FhVb_qGX-8Ub1EXKt7H4kM9zM"
//const ROUTE_API_URL = 'https://maps.googleapis.com/maps/api/directions/json';
PROXY_API = 'http://localhost:3002/route-data';



public async getBusStops() : Promise<busStop[]> {
    const res = await fetch(this.API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            query: "{ stops { id name longitude latitude } }" 
        })
    
    });
    const data = await res.json();
    const stopsData = data.data.stops as busStop[];
    const stops = stopsData.map((stop) => new busStop(stop.id, stop.name, stop.longitude, stop.latitude));
    return stops;   
}

public async getBusRoutes(): Promise<BusRoute[]> {
    const res = await fetch(this.API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        query: "{ routes { id stops { stop { id name longitude latitude } } } }" 
      })
    });
  
    const data = await res.json();
    console.log(data);
  
    const routesData = data.data.routes as { id: number, stops: { stop: { id: number, name: string, longitude: number, latitude: number } }[] }[];
    
    const routes = routesData.map((route) => 
      new BusRoute(route.id.toString(), route.stops.map((stop) => 
        new busStop(stop.stop.id, stop.stop.name, stop.stop.longitude, stop.stop.latitude))
      ));
  
    for (let i = 0; i < routes.length; i++) {
      console.log(routes[i].getTestString());
    }
  
    return routes;   
  }
}

 