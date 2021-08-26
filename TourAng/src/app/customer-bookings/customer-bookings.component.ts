import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerserviceService } from '../customerservice.service';
import { PackagebookingserviceService } from '../packagebookingservice.service';
import { Booking } from '../Booking';
import { Customer } from '../Customer';

@Component({
  selector: 'customer-bookings',
  templateUrl: './customer-bookings.component.html',
  styleUrls: ['./customer-bookings.component.css']
})
export class CustomerBookingsComponent implements OnInit {

  public cid: any = this.aroute.snapshot.params['cid'];
  bookings: Booking[] = [];
  public customer: any = [];

  constructor(
    public aroute: ActivatedRoute,
    public custserv: CustomerserviceService,
    public pbookserv: PackagebookingserviceService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.getPackBookings(this.cid);
    this.custserv.getCustomerByID(this.cid).subscribe((data) => (this.customer = data));
  }

  getPackBookings(customerID: any) {
    let val = this.pbookserv
      .getPackBookings(customerID)
      .subscribe((data) => (this.bookings = data));
    console.log(this.bookings);
    return val;
  }

}
