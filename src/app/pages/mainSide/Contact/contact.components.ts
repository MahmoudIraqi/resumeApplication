import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '../../../../../node_modules/@angular/forms';
import { Http, Headers, Response, URLSearchParams } from '@angular/http';

@Component({
  selector: 'Contact-comp',
  templateUrl: './contact.components.html',
  styleUrls: ['./contact.components.css']
})
export class ContactComponents implements OnInit {

  @ViewChild('f')  contactForm: NgForm;
  userData = {
    userName : '',
    userEmail: '',
    userPhone: '',
    userMajor: '',
    userMessage: ''
  };

  submitted= false;

  constructor(private http: Http) { }

  // onSubmit (form: NgForm){
  //   console.log(form);
  // }

  

  onSubmit (){
    this.submitted = true;
    this.userData.userName = this.contactForm.value.Name;
    this.userData.userEmail = this.contactForm.value.Mail;
    this.userData.userPhone = this.contactForm.value.PhoneNum;
    this.userData.userMajor = this.contactForm.value.majorSelect;
    this.userData.userMessage = this.contactForm.value.Message;
  }

  sendEmail() {

    let url = `./feedback.php`
    let params: URLSearchParams = new URLSearchParams();

    params.set('to', 'mahmoud.must@hotmail.com');
    params.set('from', this.userData.userEmail );
    params.set('subject', this.userData.userMajor);
    params.set('content',  this.userData.userPhone + this.userData.userMessage );

    return this.http.post(url, params).subscribe();
  }

  ngOnInit() {
  }
}
