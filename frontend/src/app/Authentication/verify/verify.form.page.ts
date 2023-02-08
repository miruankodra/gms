import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export class VerifyFormPage {
    private formBuilder: FormBuilder;

    constructor(formBuilder: FormBuilder) {
        this.formBuilder = formBuilder;
    }

    createForm(): FormGroup {
        return this.formBuilder.group({
            ftDigit: ['', [Validators.required]],
            sDigit: ['', [Validators.required]],
            tDigit: ['', [Validators.required]],
            frDigit: ['', [Validators.required]],
            fDigit: ['', [Validators.required]],
        });
    }
}
