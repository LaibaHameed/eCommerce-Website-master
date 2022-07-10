import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  _Subject = new ReplaySubject(1);

  constructor() { }

  SendDataWithMessage(Product_id:boolean){
    this._Subject.next(Product_id);
  }

  GetDataWithMessege(){
  return  this._Subject.asObservable();
  }
}
