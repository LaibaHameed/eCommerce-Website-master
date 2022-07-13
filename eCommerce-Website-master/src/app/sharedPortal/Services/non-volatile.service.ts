import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NonVolatileService {

  constructor() { }
  
  SetDataFromLocalStorage(Id:any){
    localStorage.setItem('product_id', JSON.stringify(Id));
  }

  GetDataFromLocalStorage() {
    return JSON.parse(localStorage.getItem('product-id') || '{}');
  }
}
