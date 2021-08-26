import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../Customer';
import { CustomerserviceService } from '../customerservice.service';

@Component({
  selector: 'customeredit',
  templateUrl: './customeredit.component.html',
  styleUrls: ['./customeredit.component.css']
})
export class CustomereditComponent implements OnInit {

  cid = this.aroute.snapshot.params['cid'];
  @Input()
  customerData: Customer = {
    customerID: this.cid,
    customerName: {
      fname: "",
      lname: ""
    },
    gender: "",
    password: "",
    email: "",
    dateOfBirth: "",
    phone: "",
    address: {
      doorno: 0,
      street: "",
      city: "",
      pincode: 0,
    }
  };

  constructor(
    public router: Router,
    public aroute: ActivatedRoute,
    public restApi: CustomerserviceService) { }

  ngOnInit(): void {
    this.restApi
      .getCustomerByID(this.cid)
      .subscribe((data) => (this.customerData = data));
  }

  updateCustomer() {
    if (window.confirm('Are you sure , you want to update?')) {
      this.restApi.updateCustomer(this.customerData).subscribe((data: {}) => {
        this.router.navigate(['/customeredit']);
      });
    }

  }

}
