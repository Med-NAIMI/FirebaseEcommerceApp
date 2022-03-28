import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {
products:any[];
subscription: Subscription;
filteredProducts: any[];

  constructor(private productService: ProductService) {
    this.subscription= productService.getAll().subscribe(products=>this.filteredProducts=this.products=products);
   }

  filter(query:String){
    this.filteredProducts=(query) 
    ? this.products.filter(product=>product.value.title.toLowerCase().includes(query.toLocaleLowerCase())) 
    : this.products;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
  }

}
