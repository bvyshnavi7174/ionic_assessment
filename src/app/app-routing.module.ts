import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  loadComponent: () => import('./home/home.page').then((m) => m.HomePage) },
  { path: 'about-us', loadComponent: () => import('./about-us/about-us.page').then(m => m.AboutUsPage) },
  { path: 'products', loadComponent: () => import('./products/products.page').then(m => m.ProductsPage) },
  { path: 'login', loadComponent: () => import('./login/login.page').then(m => m.LoginPage) },
  { path: 'contact-us', loadComponent: () => import('./contact-us/contact-us.page').then(m => m.ContactUsPage) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
