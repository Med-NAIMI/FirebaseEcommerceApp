import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$: Observable<any>;
  
  constructor(categoryService: CategoryService, private productSerevice: ProductService) {
    this.categories$=categoryService.getCategories();
   }

   save(product: any){
     this.productSerevice.create(product);
   }

  ngOnInit(): void {
  }

}
