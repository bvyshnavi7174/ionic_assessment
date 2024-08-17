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
      image: 'assets/img/product1.jpg'
    },
    {
      id: 2,
      title: 'Product 2',
      description: 'This is the description for product 2.',
      image: 'assets/img/product2.jpg'
    },
    {
      id: 3,
      title: 'Product 3',
      description: 'This is the description for product 3.',
      image: 'assets/img/product3.jpg'
    }
  ];

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/login']);
    }
  }
}
