import { Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { APIResponseModal, IEmployee, IProject } from '../../model/interface/roles';
import { Client } from '../../model/class/client';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';
import { AlertComponent } from '../../reusableComponents/alert/alert.component';

@Component({
  selector: 'app-client-project',
  standalone: true,
  imports: [ReactiveFormsModule, DatePipe, AlertComponent],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css'
})
export class ClientProjectComponent implements OnInit {


 firstName = signal('Angular 18');
 clientService = inject(ClientService);
 employeeList: IEmployee[] = [];
 clientList: Client[]= [];
 projectList = signal<IProject[]>([]);

  ngOnInit(): void{
      this.getAllEmployee();
      this.getAllClient();
      this.getAllClientProjects();

  }

  update(){
    this.firstName.set("react 18");
  }

  getAllEmployee(){
    this.clientService.getAllEmployee().subscribe((res: APIResponseModal) => {
      this.employeeList = res.data;
    })
  }

  getAllClientProjects(){
    this.clientService.getAllClientProjects().subscribe((res: APIResponseModal) => {
      this.projectList.set(res.data);
    })
  }


  getAllClient(){
    this.clientService.getAllClients().subscribe((res: APIResponseModal) => {
      this.clientList = res.data;
    })
  }


  clientProjectList!: any[][];
  projectForm : FormGroup = new FormGroup({
    clientProjectId: new FormControl(0),
    projectName:new FormControl("",[Validators.required,Validators.minLength(4)]),
    startDate: new FormControl(""),
    expectedEndDate: new FormControl(""),
    leadByEmpId: new FormControl(""),
    completedDate: new FormControl(""),
    contactPerson: new FormControl(""),
    contactPersonContactNo: new FormControl(""),
    totalEmpWorking: new FormControl(""),
    projectCost: new FormControl(""),
    projectDetails: new FormControl(""),
    contactPersonEmailId: new FormControl(""),
    clientId: new FormControl("")
  })


  onSaveProject(){
    const formValue = this.projectForm.value;
    this.clientService.addUpdateClientProject(formValue).subscribe((res:APIResponseModal) =>{
      if(res.result){
        alert(res.message);
      }
      else{
        alert(res.message);
      }
    })
  }
}
