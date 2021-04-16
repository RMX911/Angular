import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TicketBookingService {
  // index:string = "";
  details: any = {}
  constructor(private http: HttpClient) {}
  // search:boolean = false;
  getPlaces() {
    return this.http.get<any>('../../assets/destination.json');
  }

  getbusDetails() {
    return this.http.get<any>('../../assets/busdata.json');
  }

  storeBusDetails(index: number, busDetails: any) {
    sessionStorage.setItem('clickData', JSON.stringify(busDetails[index as any]));
    // this.index = index as any;
  }

  getBusDetails(details:any){
    details = JSON.parse(sessionStorage.getItem('clickData') || '{}')
    return details;
  }

  // searchSuccessful(){
  //   this.search = !this.search;
  //   return this.search;
  // }
}
