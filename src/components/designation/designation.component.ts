import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { IDesignation } from '../../model/interface/designation';
import { CommonModule } from '@angular/common';
import { APIResponseModal } from '../../model/interface/roles';

@Component({
  selector: 'app-designation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit {
  masterService = inject(MasterService);
  designationList: IDesignation[] = [];
  isLoader: boolean = true;

  ngOnInit(): void {
     this.masterService.getAllDesignations().subscribe((res: APIResponseModal) => {
      this.designationList = res.data;
      this.isLoader = false;
      console.log("designation",res.data);
    },error =>{
      console.log(error);
      this.isLoader = false;
    })
  }

}
