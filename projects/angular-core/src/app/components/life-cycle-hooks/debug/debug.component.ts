import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-debug',
  templateUrl: './debug.component.html',
  styleUrls: ['./debug.component.css']
})
export class DebugComponent implements OnInit, AfterViewInit {
  loading = true;
  constructor() { }

  ngOnInit(): void {
    this.loading = false;
  }
  ngAfterViewInit(): void {
    // this.loading = false;
  }

}
