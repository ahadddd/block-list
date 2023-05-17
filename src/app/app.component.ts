import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  itemForm!: FormGroup;
  items: any = ['hello', 'world', 'i', 'am', 'ahad'];
  count: number = 0;

  ngOnInit(): void {
    this.count = this.items.length;
    this.itemForm = new FormGroup({
      text: new FormControl(' ', Validators.required)
    })
  }

  addItem() {
    if (this.itemForm.invalid) {
      alert('Invalid input.');
    }
    else {
      let ctrl = this.itemForm.controls;
      console.log(ctrl['text'].getRawValue());
      this.items.push(ctrl['text'].getRawValue());
      this.itemForm.reset();
      this.count++;
    }
  }

  deleteItem(index: any) {
    this.items.splice(index, 1);
    this.count--;
  }

  getColor() {
    let str = `rgb(${Math.floor(Math.random() * 255)},
    ${Math.floor(Math.random() * 255)},
    ${Math.floor(Math.random() * 255)}`; 
    return str;
  }

}
