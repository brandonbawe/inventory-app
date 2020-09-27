import { Product } from './product.model';
import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[];

  constructor() {
    this.products = [
      new Product(
        'MYSHOES',
        'Black Running Shoes',
        '/assets/images/products/red-shoes.jpg',
        ['Men', 'Shoes', 'Shoes'],
        109.99),
      new Product(
        '24KGOLDCHAIN',
        'Gold Chain',
        '/assets/images/products/gold-chain.jpg',
        ['Men', 'Apparel', 'Chains'],
        238.99),
      new Product(
        'NICEHAT',
        'A Nice Grey Hat',
        '/assets/images/products/hat.jpg',
        ['Men', 'Accessories', 'Hats'],
        29.99),
        new Product(
          'SMARTWATCH',
          'An Exclusive Smart Watch',
          '/assets/images/products/watch.jpg',
          ['Unisex', 'Accessories', 'Watch'],
          56.99),
        new Product(
          'SMARTWATCH',
          'Limited Edition Designer shades',
          '/assets/images/products/shades.jpg',
          ['Men', 'Accessories', 'Glasses'],
          166.99)
    ];
  }
  productWasSelected(product: Product): void {
    console.log("Product clicked: ", product);
}
}
