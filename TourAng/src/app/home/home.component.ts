import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerserviceService } from '../customerservice.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public cid: any = this.aroute.snapshot.params['id'];
  constructor(
    public router: Router,
    public aroute: ActivatedRoute,
    public restApi: CustomerserviceService) { }

  ngOnInit(): void {
  }

}
