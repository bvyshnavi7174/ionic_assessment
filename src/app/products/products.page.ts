import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
  standalone: true,
  imports: [ CommonModule, FormsModule, IonicModule]
})

export class ProductsPage implements OnInit {
  products = [
    {
      id: 1,
      title: 'Product 1',
      description: 'This is the description for product 1.',
      image: 'assets/products/product_1.jpg'
    },
    {
      id: 2,
      title: 'Product 2',
      description: 'This is the description for product 2.',
      image: 'assets/products/product_2.jpg'
    },
    {
      id: 3,
      title: 'Product 2',
      description: 'This is the description for product 2.',
      image: 'assets/products/product_3.jpg'
    },
    {
      id: 4,
      title: 'Product 2',
      description: 'This is the description for product 2.',
      image: 'assets/products/product_4.jpg'
    },
    {
      id: 5,
      title: 'Product 2',
      description: 'This is the description for product 2.',
      image: 'assets/products/product_5.jpg'
    }
  ];

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/login']);
    }
  }
}
