import { Injectable } from '@angular/core';
import { AngularFireDatabase, SnapshotAction } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Product } from '../models/product';

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
    ).subscribe(productOb =>productOb.map(product=>console.log(product)));*/

    return this.db.list('/products/'+productId).snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ value:c.payload.val() as Product }))
      ),map(productOb=> {return productOb.map( pr=> pr)})
    );
  }


}
