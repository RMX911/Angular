import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

import { TicketBookingService } from '../../../services/ticket-booking.service';

@Component({
  selector: 'app-search-details',
  templateUrl: './search-details.component.html',
  styleUrls: ['./search-details.component.css'],
})
export class SearchDetailsComponent implements OnInit {
  travelDetails: any;
  source: string = '';
  destination: string = '';
  busDetails: any = [];
  allBusDeatils: any = [];
  constructor(
    private _travelDetails: TicketBookingService,
    private router: Router
  ) {
    this.travelDetails = _travelDetails.getData();
  }

  ngOnInit(): void {
    this._travelDetails.getbusDetails().subscribe((data) => {
      this.busDetails = data;
      this.allBusDeatils = data;
    });
  }

  ngAfterContentChecked() {
    this.source = this.travelDetails.source.toLowerCase();
    this.destination = this.travelDetails.destination.toLowerCase();

    if (this.source === '') {
      this.busDetails = this.allBusDeatils;
    } else {
      this.busDetails = this.allBusDeatils.filter(
        (travelDetails: any) =>
          travelDetails.source.toLowerCase().includes(this.source) &&
          travelDetails.destination.toLowerCase().includes(this.destination)
      );
    }
  }

  showDetails(event: Event, index: number) {
    this._travelDetails.storeBusDetails(index, this.busDetails);
    this.router.navigate(['/busDetails']);
  }
}
