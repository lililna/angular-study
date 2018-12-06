import { Component, OnInit } from '@angular/core';
import{ FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder) { }
  ngOnInit() {
    // this.form = new FormGroup ({
    //   email: new FormControl('li@163.com', Validators.compose([Validators.required, Validators.email])),
    //   password: new FormControl('', Validators.required)
    // })
    this.form = this.fb.group({
      email: ['li@163.com',Validators.compose([Validators.required, Validators.email, this.validata])],
      password: ['', Validators.required]
    })
  }

  onSubmit({value, valid}, ev: Event) {
    ev.preventDefault();
    console.log(JSON.stringify(value));
    console.log(JSON.stringify(valid));
    //this.form.controls['email'].setValidators(this.validata);
  }

  validata(c: FormControl): {[key:string]: any} {
    if(!c.value) {
      return null;
    }
    const pattern = /^li+/;
    if(pattern.test(c.value)) {
      return null;
    }
    return {
      emailNotValid: 'The email must start with wang'
    }
  }

}
