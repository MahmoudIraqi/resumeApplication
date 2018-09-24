import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '../../../../../node_modules/@angular/forms';

@Component({
  selector: 'Contact-comp',
  templateUrl: './contact.components.html',
  styleUrls: ['./contact.components.css']
})
export class ContactComponents implements OnInit {

  // @ViewChild('f')  contactForm: NgForm;
  // userData = {
  //   userName : '',
  //   userEmail: '',
  //   userPhone: '',
  //   userMajor: '',
  //   userMessage: ''
  // };

  // submitted= false;

  // onSubmit (form: NgForm){
  //   console.log(form);
  // }
  

    // onSubmit (){
    //   this.submitted = true;
    //   this.userData.userName = this.contactForm.value.Name;
    //   this.userData.userEmail = this.contactForm.value.Mail;
    //   this.userData.userPhone = this.contactForm.value.PhoneNum;
    //   this.userData.userMajor = this.contactForm.value.majorSelect;
    //   this.userData.userMessage = this.contactForm.value.Message;
    // }

  ngOnInit() {
  }
}
