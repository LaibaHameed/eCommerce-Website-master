import { Injectable } from '@angular/core';
import  userInfo  from '../data.json';
import {} from '../public.json';

@Injectable({
  providedIn: 'root'
})
export class DataServicesService {

  DummyData = userInfo;



  constructor() { }

  GetData(){
    return (this.DummyData);
  }
}
