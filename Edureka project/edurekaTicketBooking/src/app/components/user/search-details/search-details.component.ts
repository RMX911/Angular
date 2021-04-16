import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {Router} from '@angular/router';

import { TicketBookingService } from '../../../services/ticket-booking.service';

@Component({
  selector: 'app-search-details',
  templateUrl: './search-details.component.html',
  styleUrls: ['./search-details.component.css'],
})
export class SearchDetailsComponent implements OnInit, OnChanges {

  @Input() travelDetails: any;
  source:string="";
  destination:string="";
  busDetails:any = []
  allBusDeatils:any = []
  constructor(private _travelDetails:TicketBookingService, private router:Router) {}

  ngOnInit(): void {
    this._travelDetails.getbusDetails().subscribe((data) => {
      this.busDetails = data;
      this.allBusDeatils = data;
    });
  }

  ngOnChanges(): void {
    // console.log('Coming from search component', this.travelDetails);
    this.source = this.travelDetails.source.toLowerCase();
    this.destination = this.travelDetails.destination.toLowerCase();

    // let filterValue1 = (event.target as HTMLInputElement).value;
    // let filterValueLower = filterValue.toLowerCase();

    if (this.source === '') {
      this.busDetails = this.allBusDeatils;
    } else {
      this.busDetails = this.allBusDeatils.filter((travelDetails: any) =>
        travelDetails.source.toLowerCase().includes(this.source) && travelDetails.destination.toLowerCase().includes(this.destination)
      );
      // console.log(this.busDetails)
    }
    // if(this.busDetails.length < this.allBusDeatils.length)
    //   this._travelDetails.searchSuccessful()
  }

  showDetails(event:Event, index:number){
    this._travelDetails.storeBusDetails(index, this.busDetails);
    this.router.navigate(['/busDetails']);
  }

}
