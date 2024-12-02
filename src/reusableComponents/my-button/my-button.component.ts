import { Component, Input, Output, EventEmitter, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-my-button',
  standalone: true,
  imports: [],
  templateUrl: './my-button.component.html',
  styleUrl: './my-button.component.css'
})
export class MyButtonComponent {

  constructor(private location:Location){}
  currentUrl!:string;
  @Input() buttonText:string = '';
  @Input() buttonClass:string = '';
  @Input() isDisabled: boolean = true;
  @Output() onBtnClicked = new EventEmitter<any>();

  ngOnInit(): void {
   // this.currentUrl = this.router.url; // Get current URL
    this.currentUrl = this.location.path();
  }

  onClick(){
    debugger;
    this.onBtnClicked.emit({dataOutput: 'ramesh', button: this.buttonText, url: this.currentUrl});
  }
   
}
