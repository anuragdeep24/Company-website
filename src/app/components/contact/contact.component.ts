import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\+?\d{10,15}$/)
    ]),
  });

  submitted = false;

  onSubmit() {
    if (this.contactForm.valid) {
      emailjs.send(
        'YOUR_SERVICE_ID',      // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID',     // Replace with your EmailJS template ID
        this.contactForm.value,
        'YOUR_USER_ID'          // Replace with your EmailJS public user ID
      ).then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          this.submitted = true;
          this.contactForm.reset();
        },
        (error) => {
          console.log('FAILED...', error);
          alert('Oops! Something went wrong. Please try again later.');
        }
      );
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
