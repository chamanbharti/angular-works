import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expression-change',
  templateUrl: './expression-change.component.html',
  styleUrls: ['./expression-change.component.css']
})
export class ExpressionChangeComponent implements OnInit, AfterViewInit {
  loading = true;
  constructor() { }

  ngOnInit(): void {
    this.loading = false;
  }
  ngAfterViewInit(): void {
    this.loading = false;
  }

}
