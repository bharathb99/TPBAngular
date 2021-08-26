import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerserviceService } from '../customerservice.service';
import { PackagebookingserviceService } from '../packagebookingservice.service';
import { PackserviceService } from '../packservice.service';

@Component({
  selector: 'navbar-user',
  templateUrl: './navbar-user.component.html',
  styleUrls: ['./navbar-user.component.css']
})
export class NavbarUserComponent implements OnInit {
  public cid: any = this.aroute.snapshot.params['cid'];
  constructor(public aroute: ActivatedRoute,
    public router: Router,
    public custserv: CustomerserviceService,
    public packserv: PackserviceService,
    public pbookserv: PackagebookingserviceService,) { }

  ngOnInit(): void {
  }

  logout() {
    this.router.navigate(['']);
  }
}
