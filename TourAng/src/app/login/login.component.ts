import { Component, Input, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerserviceService } from '../customerservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input()
  customerDetails = { email: '', password: '' };

  public customer: any = [];
  message: any = '';

  constructor(
    public router: Router,
    public aroute: ActivatedRoute,
    public restApi: CustomerserviceService,
  ) { }

  ngOnInit(): void {
  }

  loginCustomer() {
    if (this.customerDetails.email == "") {
      Swal.fire({
        text: 'Please enter the valid email!',
        icon: 'warning'
      });
    }
    else if (this.customerDetails.email == "tpbadmin@gmail.com" && this.customerDetails.password == "Admin") {
      this.router.navigate(['/admin'])
    }
    else {
      this.restApi.getCustomer(this.customerDetails.email).subscribe((data: any) => (this.customer = data));
      if (this.customer == null) {
        Swal.fire({
          title: 'You dont have any active account with this email id,Please Register !!!!',
          showCancelButton: true,
          confirmButtonText: `Ok`,
          denyButtonText: `Cancel`,
        }).then((result: any) => {
          if (result.isConfirmed) {
            this.router.navigate(['/register'])
          } else if (result.isDenied) {
            this.router.navigate(['/login'])
          }
        })
      }
      else if (this.customer.password == this.customerDetails.password) {
        this.router.navigate(['/packlist-customer', this.customer.customerID]);
      }
      if (this.customerDetails.password != this.customer.password) {
        Swal.fire({
          text: 'Please Verify Your Password!',
          icon: 'warning'
        });
      }
    }
  }
}