import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingresar-ingredientes',
  templateUrl: './ingresar-ingredientes.page.html',
  styleUrls: ['./ingresar-ingredientes.page.scss'],
})
export class IngresarIngredientesPage implements OnInit {

  items: { name: string; flag: number }[] = [];

  constructor() { }

  ngOnInit() {
    this.addInput();
  }

  addInput(): void {
    this.items.push({ name: '', flag: 1 });
    console.log(this.items);
  }

  changeInInput(event: any, index: number): void {
    console.log(event, index);
    const value = event.detail.value;
    if (value?.length > 0) {
      if (!this.items[index + 1]) this.addInput();
      if (this.items[index].flag === 0) this.toggleFlag(index, 1);
    } else {
      this.toggleFlag(index, 0);
    }
  }

  toggleFlag(index: number, val: number): void {
    this.items[index].flag = val;
  }

  checkEmptyInput(): void {
    console.log(this.items);
    if (this.items?.length > 1) {
      this.items = this.items.filter(
        element => (
          element.name.trim().length > 0 
          || 
          (element.name.trim().length === 0 && element.flag === 1)
        )
      );
    }
  }

}

