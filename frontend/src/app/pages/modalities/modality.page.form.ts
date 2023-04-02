import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export class ModalityPageForm {
  private formBuilder: FormBuilder;

  constructor(formBuilder: FormBuilder) {
    this.formBuilder = formBuilder;
  }

  createForm(): FormGroup {
    return this.formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      min_temperature: ['', [Validators.required]],
      max_temperature: ['', [Validators.required]],
      min_air_humidity: ['', [Validators.required]],
      max_air_humidity: ['', [Validators.required]],
      min_soil_humidity: ['', [Validators.required]],
      max_soil_humidity: ['', [Validators.required]],
    });
  }
}
