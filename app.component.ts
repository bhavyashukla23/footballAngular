import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angularapp';
  positions=['kicker','offence','defence'];
  signupForm: any;
  
  ngOnInit(): void {
      this.signupForm = new FormGroup({
        'username': new FormControl(null),
        'firstname':new FormControl(null),
        'lastname':new FormControl(null),
        'email':new FormControl(null),
        'mobileNumber':new FormControl(null),
        'address':new FormControl(null),
        'position':new FormControl('kicker'),
        'addNumbers':new FormArray([])

            })
  }
  onSubmit(){
    console.log(this.signupForm.value);
    console.log(this.signupForm.value.username);
  }
  onAddNumber(){
    const control = new FormControl(null);
    (<FormArray>this.signupForm.get('addNumbers')).push(control); 
    }
   
  // get addNumbers():FormArray{    
  //   console.log(this.signupForm.controls["addNumbers"])
  //  return this.signupForm.controls["addNumbers"]as FormArray;  
  //  }


}
