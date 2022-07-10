import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NonVolatileService {

  constructor() { }
  
  SetDataFromLocalStorage(id:any){
    localStorage.setItem('Product_id', JSON.stringify(id));
  }

  GetDataFromLocalStorage() {
    return JSON.parse(localStorage.getItem('product-id') || '{}');
  }
}
