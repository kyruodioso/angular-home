import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  validationForm: FormGroup;

  constructor() {
    this.validationForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      phone: new FormControl(null, Validators.required)

    });
  }

  get firstName(): AbstractControl {
    return this.validationForm.get('firstName')!;
  }

  get email(): AbstractControl {
    return this.validationForm.get('email')!;
  }

  get phone(): AbstractControl{
    return this.validationForm.get('phone')!;
  }

}
