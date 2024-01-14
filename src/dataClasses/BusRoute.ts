import { busStop } from "./BusStop";

export class BusRoute {
    constructor(name: string, stops: busStop[]) {
        this.name = name;
        this.stops = stops;
    }

    name: string;
    stops: busStop[];

    getTestString() {
        let testStops = this.stops.map((stop) => stop.name  + " " + stop.id + " " + stop.latitude + " " + stop.longitude);
        return this.name + " " + testStops;
    }

}