import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';

import { TicketBookingService } from '../../../services/ticket-booking.service';

@Component({
  selector: 'app-bus-details',
  templateUrl: './bus-details.component.html',
  styleUrls: ['./bus-details.component.css']
})
export class BusDetailsComponent implements OnInit, DoCheck {
  busDetails:any = {};
  constructor(private _travelDetails:TicketBookingService) {}
  
  ngOnInit(): void {
    this.busDetails = this._travelDetails.getBusDetails(this.busDetails);
    console.log(this.busDetails)
  }
  
  ngDoCheck(): void {
    this.busDetails = this._travelDetails.getBusDetails(this.busDetails);
    console.log(this.busDetails)
  }
  

}
