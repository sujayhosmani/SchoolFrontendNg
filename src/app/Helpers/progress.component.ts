import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {
  title = 'Angular-Interceptor';
  datas:string;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.datas = this.data;
  }
      
}
