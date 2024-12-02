import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponseModal } from '../model/interface/roles';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { }


  getAllRoles(): Observable<APIResponseModal>{
    return this.http.get<APIResponseModal>('https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles');
  }

  getAllDesignations(): Observable<APIResponseModal>{
    return this.http.get<APIResponseModal>("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllDesignation");
  }


  getAllClients() :Observable<APIResponseModal>{
    return this.http.get<APIResponseModal>("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllClients");
  }

  addClient(req: any){
    const requestBody = req;
    console.log(req);
    return this.http.post("https://freeapi.miniprojectideas.com/api/ClientStrive/AddUpdateClient",requestBody);
  }

}
