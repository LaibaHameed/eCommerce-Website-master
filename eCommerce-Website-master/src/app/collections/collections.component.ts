import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServicesService } from '../sharedPortal/Services/data-services.service';
import { MessengerService } from '../sharedPortal/Services/messenger.service';
import { NonVolatileService } from '../sharedPortal/Services/non-volatile.service';



@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {

  MyDataArray:any = [];

  constructor(
    private _DataService:DataServicesService,
    private _NonVolatileService:NonVolatileService,
    private _MessengerService:MessengerService,
    private _Router:Router
  ) { }

  ngOnInit(): void {
    this.GetDataFromMyComponent();
  }

  GetDataFromMyComponent(){
    
    this.MyDataArray = this._DataService.GetData();
    
    console.log(this.MyDataArray);

  }
  
  GoToViewcart(id:any){
    this._NonVolatileService.SetDataFromLocalStorage(id);
    this._MessengerService.SendDataWithMessage(id);
    this._Router.navigate(['view-cart']);
  }

}