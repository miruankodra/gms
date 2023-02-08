import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export class EnrollFormPage {
    private formBuilder: FormBuilder;

    constructor(formBuilder: FormBuilder) {
        this.formBuilder = formBuilder;
    }

    createForm(): FormGroup {
        return this.formBuilder.group({
            email: ['', [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
        });
    }
}
