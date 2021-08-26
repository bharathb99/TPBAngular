import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Packages } from '../Packages';
import { PackserviceService } from '../packservice.service';

@Component({
  selector: 'packlist-customer',
  templateUrl: './packlist-customer.component.html',
  styleUrls: ['./packlist-customer.component.css']
})
export class PacklistCustomerComponent implements OnInit {

  public cid: any = this.aroute.snapshot.params['cid'];
  packageData: any = [];

  constructor(
    public router: Router,
    public aroute: ActivatedRoute,
    public restApi: PackserviceService
  ) { }

  ngOnInit(): void {
    this.loadPackages();
  }

  loadPackages() {
    return this.restApi
      .getPackages()
      .subscribe((data: any) => (this.packageData = data));
  }

}
