import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Packages } from '../Packages';
import { PackserviceService } from '../packservice.service';

@Component({
  selector: 'packedit',
  templateUrl: './packedit.component.html',
  styleUrls: ['./packedit.component.css']
})
export class PackeditComponent implements OnInit {

  @Input()
  packageData: Packages = {
    packageID: 0,
    packageName: '',
    packageImage: '',
    itenary: '',
    location: '',
    hotelName: '',
    hotelCostPerDay: 0,
    costPerDay: 0
  };

  packageid = this.aroute.snapshot.params['pid'];

  constructor(
    public router: Router,
    public aroute: ActivatedRoute,
    public restApi: PackserviceService) { }

  ngOnInit(): void {
    this.restApi
      .getAPackage(this.packageid)
      .subscribe((data) => (this.packageData = data));
  }

  updatePackage() {
    if (window.confirm('Are you sure , you want to update?')) {
      this.restApi.updatePackage(this.packageData).subscribe((data: {}) => {
        this.router.navigate(['/packadmin']);
      });
    }

  }
}
