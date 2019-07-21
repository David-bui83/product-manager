import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private _httpService: HttpService,private _route: ActivatedRoute,
    private _router: Router) { }
  products = []

  ngOnInit() {
    this.getAllProducts();
  }
  getAllProducts(){
    this._httpService.getAll().subscribe(data=>{
      this.products=data['data'];
      console.log(this.products);
    });
  };
  destroyOneProduct(id){
    this._httpService.destroy(id).subscribe(data=>{
      this.ngOnInit()
    });
  };

}
