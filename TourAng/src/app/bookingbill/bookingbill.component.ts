import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Packages } from '../Packages';
import { PackserviceService } from '../packservice.service';

@Component({
  selector: 'bookingbill',
  templateUrl: './bookingbill.component.html',
  styleUrls: ['./bookingbill.component.css']
})
export class BookingbillComponent implements OnInit {

  cid = this.aroute.snapshot.params['cid'];
  pid = this.aroute.snapshot.params['pid'];
  actualprice = this.aroute.snapshot.params['ap'];
  discount = this.aroute.snapshot.params['dp'];
  totalprice = this.aroute.snapshot.params['tp'];
  public pack: Packages = {
    packageID: 0,
    packageName: '',
    packageImage: '',
    itenary: '',
    location: '',
    hotelName: '',
    hotelCostPerDay: 0,
    costPerDay: 0
  };

  constructor(public router: Router,
    public aroute: ActivatedRoute,
    public packserv: PackserviceService) { }

  ngOnInit(): void {
    this.packserv.getAPackage(this.pid).subscribe((data) => (this.pack = data));
  }
  confirmBook() {
    this.router.navigate(['/bookings', this.cid]);
  }

}
