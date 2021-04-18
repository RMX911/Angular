import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';

import { TicketBookingService } from '../../../services/ticket-booking.service';

@Component({
  selector: 'app-bus-details',
  templateUrl: './bus-details.component.html',
  styleUrls: ['./bus-details.component.css']
})
export class BusDetailsComponent implements OnInit, DoCheck {
  busDetails:any = {};
  isChecked:any =  []
  seatPrice = 0;
  selectSeat:boolean = false;
  seatClass:string =''
  total:number = 0
  constructor(private _travelDetails:TicketBookingService) {}
  
  ngOnInit(): void {
    this.busDetails = this._travelDetails.getBusDetails(this.busDetails);
    console.log(this.busDetails)
  }
  
  ngDoCheck(): void {
    this.busDetails = this._travelDetails.getBusDetails(this.busDetails);
    this.seatPrice = this.busDetails.fare;
    this.seatClass = this.busDetails.coachType;
    this.isChecked = this._travelDetails.seatsBooked;
    console.log(this.seatPrice)
  }

  calculatePrice(seatNo:string){
    this.isChecked = this._travelDetails.seatBooking(seatNo)
    console.log(this.isChecked)
  //  console.log(this.isChecked.length)
  //   if (this.isChecked.includes(seatNo)){
  //      this.isChecked = this.isChecked.filter((e:string) => e !== seatNo)
  //   }
  //   else{
  //     this.isChecked.push(seatNo)
  //   }
  //   console.log(this.isChecked)
      // 
      // this.intendedDeviceStatus[index]= this.intendedDeviceStatus[index] ? 1 : 0;    
      // console.log(this.intendedDeviceStatus)
 
  }
  

}
