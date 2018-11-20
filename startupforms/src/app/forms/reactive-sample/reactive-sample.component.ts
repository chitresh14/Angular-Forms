import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-sample',
  templateUrl: './reactive-sample.component.html',
  styleUrls: ['./reactive-sample.component.css']
})
export class ReactiveSampleComponent implements OnInit {

  states: Array<String> = ['AR', 'AL', 'CA', 'DC'];
  reactiveForm :FormGroup;
  constructor(private fb:FormBuilder) { }
  // user = {'fname' : 'Bob' , 'lname': 'Smith'}
  ngOnInit() {
    //console.log('Initial value: ' + this.user);
    this.reactiveForm = this.fb.group({
      firstName : [null, [Validators.required,Validators.minLength(2)]],
      lastName: [null,Validators.required],
      address : this.fb.group({
        addressType : [null,Validators.required],
        streetAddress : [null,Validators.required],
        expiryDate: [null, this.expiryDateValidator],
        city : [null,Validators.required],
        state : [null,Validators.required],
        zipcode : [null,[Validators.required,Validators.pattern('^[0-9]{5}$')]]
      })
    });
  }
  expiryDateValidator(control:AbstractControl){
    if(control){
      const  group = <FormGroup>control.root.get('address');
      if(group){
        const addControl = group.controls.addressType;
        if(addControl){
          if(addControl.value ==='temporary'){
            if(control.value===null || control.value ==='' || control.value===undefined){
              return {'date_error': 'Date cannot be blank.'};
            }
          }
        }
      } 
    }
    return null;

  }
  triggerExpiryValidator(){
    this.expiryDate.updateValueAndValidity();
  }

  submitHandler(){
    console.log(this.reactiveForm);
    //console.log('Final Value: ' + this.user.fname);
  }
  get firstName(){
    return <FormGroup>this.reactiveForm.controls.firstName;
  }

  get lastName(){
    return <FormGroup>this.reactiveForm.get('lastName');;
  }
  get zipcode(){
    const temp = <FormGroup>this.reactiveForm.controls.address; // if don't do typecast then controls 
    // refers to Abstract control of formGroup Class.
    return temp.controls.zipcode;
  }
  get addressType(){
    const temp = <FormGroup>this.reactiveForm.controls.address; // if don't do typecast then controls 
    // refers to Abstract control of formGroup Class.
    return temp.controls.addressType;
  }
  get city(){
    const temp = <FormGroup>this.reactiveForm.controls.address;
    return temp.controls.city;
  }
  get streetAddress(){
    const temp = <FormGroup>this.reactiveForm.controls.address;
    return temp.controls.streetAddress;
  }
  get expiryDate(){
    const temp = <FormGroup>this.reactiveForm.controls.address;
    return temp.controls.expiryDate;
  }
  get state(){
    const temp = <FormGroup>this.reactiveForm.controls.address;
    return temp.controls.state;
  }

}
