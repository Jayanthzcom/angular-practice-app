import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/class/client';
import { environment } from '../environments/environment.development';
import { APIResponseModal } from '../model/interface/roles';
import { Constant } from '../constants/constant';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  getAllClients(): Observable<APIResponseModal>{
    return this.http.get<APIResponseModal>( environment.API_URl + '/' + Constant.API_METHOD.GET_ALL_CLIENT);
  }

  getAllEmployee(): Observable<APIResponseModal>{
    return this.http.get<APIResponseModal>( environment.API_URl + '/' + Constant.API_METHOD.GET_ALL_EMP);
  }

  addUpdate(obj: Client): Observable<APIResponseModal>{
    return this.http.post<APIResponseModal>( environment.API_URl + '/' + Constant.API_METHOD.ADD_UPDATE_CLIENT, obj);
  }

  addUpdateClientProject(obj: Client): Observable<APIResponseModal>{
    return this.http.post<APIResponseModal>( environment.API_URl + '/', Constant.API_METHOD.UPDATE_CLIENT_PROJECT);
  }

  DeleteClientById(id: number): Observable<APIResponseModal>{
    return this.http.delete<APIResponseModal>( environment.API_URl + '/DeleteClientByClientId?clentId='+id);
  }

  getAllUser(): Observable<any>{
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }

  getAllClientProjects(): Observable<APIResponseModal>{
    return this.http.get<APIResponseModal>( environment.API_URl + '/' + Constant.API_METHOD.GET_ALL_CLIENT_PROJECT);
  }
}
