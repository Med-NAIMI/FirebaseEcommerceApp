import { Injectable } from '@angular/core';
import { AngularFireDatabase, SnapshotAction } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { Product } from '../models/product';
import { CategoryService } from './category.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase) { }

  create(product: any){
    return this.db.list('/products').push(product)
  }

  getAll(){
    /*this.db.list('/products').snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, value:c.payload.val() as Product }))
      )
    ).subscribe(productOb =>productOb.map(product=>console.log(product)));*/

    return this.db.list('/products').snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, value:c.payload.val() as Product }))
      ),map(productOb=> {return productOb.map( pr=> pr)})
    );
  }

  getProductById(productId: any){
    /*this.db.list('/products').snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, value:c.payload.val() as Product }))
      )
    ).subscribe(productOb =>productOb.map(product=>console.log(product)));
    this.db.list('/products/'+productId).valueChanges()
    .pipe(map(data=> ({category:data[0], imageUrl:data[1], price:data[2], title:data[3]}))).subscribe(p=>console.log(p.imageUrl));*/

    return this.db.list('/products/'+productId).valueChanges()
    .pipe(map(data=> ({category:data[0], url:data[1], price:data[2], title:data[3]})));
  }


}
