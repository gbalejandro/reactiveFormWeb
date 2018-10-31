import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-personas-form',
  templateUrl: './personas-form.component.html',
  styleUrls: ['./personas-form.component.css']
})
export class PersonasFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  formGroup: FormGroup;

  ngOnInit() {
    this.formGroup = this.fb.group({
      nombre: '',
      fechaNacimiento: ''
    });
  }

}
