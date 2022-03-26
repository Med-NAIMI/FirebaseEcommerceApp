import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$: Observable<any>;
  product:any;
  
  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService, 
    private productSerevice: ProductService) {

    this.categories$=categoryService.getCategories();
    let id=this.route.snapshot.paramMap.get('id');

    if(id) this.productSerevice.getProductById(id).pipe(take(1)).subscribe(product=> this.product=product);
   }

   save(product: any){
     this.productSerevice.create(product);
     this.router.navigate(['/admin/products']);
   }

  ngOnInit(): void {
  }

}
