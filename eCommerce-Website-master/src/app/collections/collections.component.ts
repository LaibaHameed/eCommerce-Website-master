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
    private _Router:Router,
    private _NonVolatileService:NonVolatileService,
    private _MessengerService:MessengerService
  ) { }

  ngOnInit(): void {
    this.GetDataFromMyComponent();
  }

  GetDataFromMyComponent(){
    
    this.MyDataArray = this._DataService.GetData();
    
    console.log(this.MyDataArray);

  }

  GoToViewProduct(Id: any) {
    // arugment zaroor dena ha with type
    // console.log(Id);
      //3nd step: 4
    this._NonVolatileService.SetDataFromLocalStorage(Id);
    this._MessengerService.SendDataWithMessage(Id);
    // 2sry page mai jain gy 
    this._Router.navigate(['view-cart'])
  }

}
