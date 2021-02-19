import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../model/product';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.css']
})
export class ProductOverviewComponent implements OnInit, OnDestroy {

  product:Product;
  id;
  sub;

  constructor(private activatedRoute:ActivatedRoute,
              private router:Router,
              private productService:ProductService){
  }
  ngOnInit() {

     this.sub=this.activatedRoute.parent.params
     .subscribe(params => {
         this.id = params['id'];
         let products=this.productService.getProducts();
         this.product=products.find(p => p.productId==this.id);
     });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
