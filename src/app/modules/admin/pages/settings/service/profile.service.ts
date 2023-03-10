import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  user:any
  constructor(private http:HttpClient) { }

  updatePersonelInfo(body){
    return this.http.put(environment.backend_url+'api/user/profile',body,
    {
        headers: {"x-auth-token": `${localStorage.getItem("accessToken")}`}
     })
  }

  getPersonelInfo(){
    return this.http.get(environment.backend_url+'api/user/profile',{
    headers: {"x-auth-token": `${localStorage.getItem("accessToken")}`}
    })
  }
}
