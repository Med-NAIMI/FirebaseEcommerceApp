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
  product:any={};
  id: any;
  
  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService, 
    private productSerevice: ProductService) {

    this.categories$=categoryService.getCategories();
    this.id=this.route.snapshot.paramMap.get('id');

    if(this.id) this.productSerevice.getProductById(this.id).pipe(take(1)).subscribe(product=> this.product=product);
   }

   save(product: any){
     if(this.id) 
     {this.productSerevice.update(this.id, product);}
     else 
     {this.productSerevice.create(product);}

     this.router.navigate(['/admin/products']);
   }

   delete(){
    if(!confirm('Are you sure you want to delete this item!')) return;

    this.productSerevice.delete(this.id);
    this.router.navigate(['/admin/products']);
   }

  ngOnInit(): void {
  }



}
