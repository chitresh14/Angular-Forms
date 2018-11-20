import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-template-sample',
  templateUrl: './template-sample.component.html',
  styleUrls: ['./template-sample.component.css']
})
export class TemplateSampleComponent implements OnInit {
  user = {'fname':'Bob' , 'lname':'Smith'};
  states: Array<String> = ['AR', 'AL', 'CA', 'DC'];
  constructor() { }

  ngOnInit() {
  }

  submitHandler(myForm){
    console.log(myForm);
    // console.log('Model Form ' + this.user);
    // console.log('Value is '+ myForm.value);
  }

}
