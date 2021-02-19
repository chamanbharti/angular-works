import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../model/product';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  pageNo=0;
  snapshotPageNo=0;
  products: Product[];
  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    // this.products = this.productService.getProducts();
    // console.log('products ',this.products )

    //the following code works but it is deprecated
    // this.snapshotPageNo = this.activatedRoute.snapshot.queryParams['pageNum'] || 0;

    // this.activatedRoute.queryParams
    // .subscribe(
    //   params => {
    //     this.pageNo = +params['pageNum'] || 0;
    //     console.log('query params',this.pageNo);
    //   }
    // );

    this.snapshotPageNo = +this.activatedRoute.snapshot.queryParamMap.get('pageNum') || 0;
    this.activatedRoute.queryParamMap
    .subscribe(
      params => {
        this.pageNo = +params.get('pageNum') || 0;
        console.log('Query params ',this.pageNo)
      }
    );
  }
  nextPage(){
    this.router.navigate(['product'], {queryParams: {pageNum: this.pageNo + 1}});
  }

}
