import { Component, OnInit } from '@angular/core';
import { IPersona } from './persona'

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  personas: IPersona[];

  constructor() { }

  ngOnInit() {
  }

}
