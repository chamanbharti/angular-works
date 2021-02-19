import { Component, OnInit } from '@angular/core';
import { BikeService } from '../../shared/bike.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public bikes;
  constructor(private bikeService: BikeService) { }

  ngOnInit(): void {
    this.getBikes();
  }
  getBikes(){
    return this.bikeService.getBikes().subscribe(
      data => {this.bikes = data},
      err => console.log(err),
      () => console.log('Bikes loaded')
    );
  }
}
