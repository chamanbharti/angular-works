import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../model/product';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  product: Product;
  id;
  sub;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private productService: ProductService) { }



   ngOnInit() {

  //using snapshot
  //   //this still works but it is deprecated
  //   // this.id = this.activatedRoute.snapshot.params['id'];
  //   this.id = this.activatedRoute.snapshot.params["id"];
  //   console.log('ID:',this.id);
  //   let products = this.productService.getProducts();
  //   this.product = products.find(p=> p.productId == this.id);
  //   console.log('product:',this.product);

   // using subscribe
  // this.sub = this.activatedRoute.paramMap.subscribe(
    this.sub = this.activatedRoute.params.subscribe(
    params => {
      console.log('params:',params);
      this.id = params.get('id');
      let products = this.productService.getProducts();
      console.log('products:',products);
      this.product = products.find(p=>p.productId==this.id);
      console.log('product:',this.product);
    }
  );

  // This params is deprecated

    // this.sub=this.activatedRoute.params.subscribe(params => {
    //    this.id = params['id'];
    //    let products=this.productService.getProducts();
    //    this.product=products.find(p => p.productId==this.id);

    // });

   }

  ngOnDestroy() {
    console.log('sub inside destroy:',this.sub);
    this.sub.unsubscribe();

  }
  onBack(): void {
    this.router.navigate(['product']);
    // this.router.navigateByUrl('product');
  }
}
