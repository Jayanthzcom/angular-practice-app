import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { APIResponseModal, IRole } from '../../model/interface/roles';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit {

  private http = inject(HttpClient);
  firstName: string = "Angular Tutorial";
  angularVersion = "Version 18.2.11";
  version: number = 18;
  isActive: boolean = false;
  currentDate : Date = new Date();
  inputType: string = 'button'
  selectedState: string = '';
  roleList: IRole[] = [];


  ngOnInit(): void {
    this.getAllRoles();
  }

  getAllRoles(){
    this.http.get<APIResponseModal>('https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles').subscribe((res: APIResponseModal) => {
      this.roleList = res.data;
      console.log(this.roleList);
    })
  }

  showWelcomeAlert(){
    alert("Welcome to angular 18 Tutorial");
  }

  showMessage(message: string){
    alert(message);
  }

}
