import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerserviceService } from './customerservice.service';

@Component({
  selector: "app-root",
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'TourAng';
  public cid: any = this.aroute.snapshot.params['id'];
  constructor(public router: Router,
    public aroute: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
