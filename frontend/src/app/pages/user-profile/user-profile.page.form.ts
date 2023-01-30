import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export class UserProfilePageForm {
    private formBuilder: FormBuilder;

    constructor(formBuilder: FormBuilder) {
        this.formBuilder = formBuilder;
    }

    createForm(): FormGroup {
        return this.formBuilder.group({
            id: ['', Validators.required],
            firstname: ['', Validators.required],
            lastname: ['', Validators.required],
            username: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            phone: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(8)]],
            old_password: ['', Validators.nullValidator],
            address: ['', Validators.required],
            country: ['', Validators.required],
            city: ['', Validators.required],
            zip: ['', Validators.required],
        });
    }
}
