import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

/*
The Property Binding uses the following Syntax

[binding-target]=”binding-source”
  */
 title = 'angular-core';
 firstName = 'Chaman';
 lastName = "Bharti";
 isDisabled = true;
 closeLabel = false;
 nullItem;
 evilText = 'Template <script>alert("You are hacked")</script> Syntax';
 color = 'red';
 clickCount = 0;
 clickCount1 = 0;
 value = '';
 value2 = '';

 closeMe(){
   console.log('clicked');
 }

 onSave(){
  console.log('saved');
}

getTitle(): number {
  return 5;
}
clickMe(){
  this.clickCount++;
}
handleInput(event){
  this.value = event.target.value;
}
handleInput1(element){
  this.value2 = element.value;
}


}
