import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { APIResponseModal } from '../../model/interface/roles';
import { CommonModule, DatePipe, JsonPipe, UpperCasePipe } from '@angular/common';
import { FormsModule,  } from '@angular/forms';
import { Client } from '../../model/class/client';
import { ClientService } from '../../services/client.service';
import { Observable } from 'rxjs';
import { Constant } from '../../constants/constant'
import { AlertComponent } from '../../reusableComponents/alert/alert.component';
import { MyButtonComponent } from '../../reusableComponents/my-button/my-button.component';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [CommonModule, FormsModule, UpperCasePipe, DatePipe, JsonPipe, AlertComponent, MyButtonComponent],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {
  reqError = Constant.VALIDATION_MESSAGE.REQUIRED;
  currentDate: Date = new Date();
  clientObj: Client = new Client();
  clientList : Client[] = [];
  userList$: Observable<any> = new Observable<any>;
  
private clientService = inject(ClientService);

  ngOnInit(): void {
    this.loadClient();
    this.userList$ = this.clientService.getAllUser();
  }

  loadClient(){
    this.clientService.getAllClients().subscribe((res: APIResponseModal) => {
      this.clientList = res.data;
      console.log("the clients",this.clientList)
    });
  }

  onSaveClient(data: any){
    console.log(data.dataOutput);
   // debugger;
    this.clientService.addUpdate(this.clientObj).subscribe((res: APIResponseModal) =>{
      if(res.result){
        alert("Cleint created successfully");
        this.loadClient();
        this.clientObj = new Client();
      }
      else{
        alert(res.message);
      }
    })

  }

  onDelete(id: number){
    const isDelete = confirm("Are you sure you want to detele the id");
    if(isDelete){
      this.clientService.DeleteClientById(id).subscribe((res: APIResponseModal) =>{
        if(res.result){
          alert("Cleint deleted successfully");
          this.loadClient();
        }
        else{
          alert(res.message);
        }
      })
    }
   
  }

  onEdit(item: Client){
    this.clientObj = item;
  }

  clearAll(){
    
  }

}
