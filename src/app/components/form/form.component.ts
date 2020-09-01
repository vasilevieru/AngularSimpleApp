import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  Editor = ClassicEditor;
  form: FormGroup;
  pattern = new RegExp('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$');

  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit(): void {
    const a = this.form.getRawValue();
    console.log(a);
    
  }

  private initForm(): void {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.pattern(this.pattern)]),
      description: new FormControl(null)
    })
  }

}
