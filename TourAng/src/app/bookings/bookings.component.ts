import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from '../Booking';
import { PackagebookingserviceService } from '../packagebookingservice.service';

@Component({
  selector: 'bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  public cid: any = this.aroute.snapshot.params['cid'];
  bookings: Booking[] = [];

  constructor(
    public aroute: ActivatedRoute,
    public pbookserv: PackagebookingserviceService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.getPackBookings(this.cid);
  }

  getPackBookings(customerID: any) {
    let val = this.pbookserv
      .getPackBookings(customerID)
      .subscribe((data) => (this.bookings = data));
    console.log(this.bookings);
    return val;
  }

}
