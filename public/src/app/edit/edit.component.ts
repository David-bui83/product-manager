import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  product_id:any;
  product:any;
  errors:any;
  constructor(private _httpService: HttpService,private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe((params:Params)=>{
      this.product_id = params['id'];
    });
    console.log("product id from edit: ",this.product_id);
    this.getOneProduct();
  }
  getOneProduct(){
    this._httpService.getOne(this.product_id).subscribe(data=>{
      this.product=data['data'];
      console.log
    })
  };
  updateOneProduct(id){
    console.log('from update: ',id);
    this._httpService.updateOne(id,this.product).subscribe(data=>{
      if(data['message']==='Error'){
        this.errors=data['data']['errors'];
      }else{
        this._router.navigate(['/products']);
      }
    })
  }
  destroyOneProduct(id){
    this._httpService.destroy(id).subscribe(data=>{
      this._router.navigate(['/products']);
      this.ngOnInit()
    });
  };
}
