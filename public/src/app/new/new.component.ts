import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  errors:any;
  newProduct = {name:"",price: '',image:""};
  constructor(private _httpService: HttpService,private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.newProduct = {name:"",price:'',image:""};
  }
  postOneProduct(){
    this._httpService.postOne(this.newProduct).subscribe(data=>{
      console.log(data);
      if(data['message']==='Error'){
        this.errors = data['data']['errors'];
      }else{
        this.newProduct = {name:"",price:'',image:""};
        this._router.navigate(['/products']);
      }
    });
  }

}
