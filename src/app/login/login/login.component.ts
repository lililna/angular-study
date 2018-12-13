import { Component, OnInit } from '@angular/core';
import{ FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { QuoteService } from 'app/services/quote.service';
import { Quote } from 'app/domain/quote.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  quote: Quote = {
    "id": "1",
    "cn": "最大的挑战和突破在于用人，而用人最大的突破在于信任人。",
    "en": "Do one thing at a time, and do well.",
    "pic": "/assets/images/quotes/1.jpg"
  };
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private quoteService$: QuoteService
  ) {
    this.quoteService$.getQuote().subscribe(q => {
      this.quote = q;
    })
   }
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
