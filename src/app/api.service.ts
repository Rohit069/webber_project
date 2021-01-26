import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private  http : HttpClient) { }
  public url="http://localhost:3000/restaurants";
  getData(){
   
    return this.http.get(this.url);
  }

  addData(data: any){
    return this.http.post(this.url,data);
  }

  deleteRestro(id:number){
    return this.http.delete(`${this.url}/${id}`)
  }
}
