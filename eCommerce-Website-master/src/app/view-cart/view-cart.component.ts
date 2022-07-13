import { Component, OnInit } from '@angular/core';
import { DataServicesService } from '../sharedPortal/Services/data-services.service';
import { MessengerService } from '../sharedPortal/Services/messenger.service';
import { NonVolatileService } from '../sharedPortal/Services/non-volatile.service';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit {

  DataRecieve:any;
  DataFromMyService: any = [];
  FilteredArray:any

  constructor(
    private _DataService:DataServicesService,
    private _NonVolatileService:NonVolatileService,
    private _MessengerService:MessengerService
  ) { }

  ngOnInit(): void {
    this._MessengerService.GetDataWithMessege().subscribe(
      (DataComingFromMyService:any)=>{
        this.DataRecieve = DataComingFromMyService
      });

      this.GetDataFromMyService();

      if(this.DataRecieve === undefined){
        const localStorageId = this._NonVolatileService.GetDataFromLocalStorage();
        this.FilteredArray = this.DataFromMyService().filter(
          (Result:any) => {
            return (Result._id === localStorageId);
          }
        );
      }

      this.FilteredArray = this.DataFromMyService().filter(
        (Result:any) => {
          return (Result._id === this.DataRecieve);
        }
      );
  }

  GetDataFromMyService(){
    this.DataFromMyService = this._DataService.GetData();
    console.log(this.DataFromMyService);
    
  }

}
