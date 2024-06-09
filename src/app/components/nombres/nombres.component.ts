// src/app/components/nombres/nombres.component.ts
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nombres',
  templateUrl: './nombres.component.html',
  styleUrls: ['./nombres.component.scss'],
})
export class NombresComponent implements OnInit {
  @Input() nombre: string = '';
  @Input() apellido: string = '';

  constructor() {}

  ngOnInit() {}
}




