import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  newServerName = '';
  newServerContent = '';
  // output
 @Output() serverCreated = new EventEmitter<{serverName:string,serverContent:string}>();
 @Output() blueprintCreated = new EventEmitter<{serverName:string,serverContent:string}>();;
 
 constructor() { }

  ngOnInit(): void {
  }

  onAddServer() {
    this.serverCreated.emit(
      {
        serverName:this.newServerName,
        serverContent: this.newServerContent
      })
  }

  onAddBlueprint() {
    this.blueprintCreated.emit(
      {
        serverName:this.newServerName,
        serverContent: this.newServerContent
      })
   
  }
  onAddServer2(serverNameInput:HTMLInputElement) {
    console.log(serverNameInput.value);
  } 
}
