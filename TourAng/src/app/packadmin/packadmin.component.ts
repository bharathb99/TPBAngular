import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PackserviceService } from '../packservice.service';

@Component({
  selector: 'packadmin',
  templateUrl: './packadmin.component.html',
  styleUrls: ['./packadmin.component.css']
})
export class PackadminComponent implements OnInit {

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

  deletePackage(id: any) {
    return this.restApi.deletePackage(id).subscribe((data: any) => {
      this.loadPackages();
    });
  }

}
