import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TicketBookingService {

  constructor(private http: HttpClient) { }

  getPlaces(){
    return this.http.get<any>('../../assets/destination.json');
  }

  getbusDetails(){
    return this.http.get<any>('../../assets/busdata.json');
  }
}
