import { Component, OnInit } from '@angular/core';
import { IProducts } from '../../../products/interface/products.js';
import path from 'path';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  products: IProducts[] = [];
  constructor(){
  }

}
