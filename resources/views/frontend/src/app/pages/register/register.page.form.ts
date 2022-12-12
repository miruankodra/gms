import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export class RegisterPageForm {
  private formBuilder: FormBuilder;

  constructor(formBuilder: FormBuilder) {
    this.formBuilder = formBuilder;
  }

  createForm(): FormGroup {
    return this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirm: ['', Validators.nullValidator],
      address: ['', Validators.required],
      country: ['', Validators.required],
      city: ['', Validators.required],
      zip: ['', Validators.required],
      agreement: ['', Validators.requiredTrue],
    });
  }
}
