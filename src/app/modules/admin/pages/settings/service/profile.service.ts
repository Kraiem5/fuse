import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient) { }

  updatePersonelInfo(body){
    return this.http.put(environment.backend_url+'api/user/profile',body,
    {
        headers: {"x-auth-token": `${localStorage.getItem("accessToken")}`}
     })
  }
}
