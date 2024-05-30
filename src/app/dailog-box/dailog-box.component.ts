import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { DialogData } from '../app.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dailog-box',
  standalone: true,
  imports: [MatDialogActions, MatDialogClose, FormsModule],
  templateUrl: './dailog-box.component.html',
  styleUrl: './dailog-box.component.css'
})
export class DailogBoxComponent implements OnInit{
email: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogref: MatDialogRef<DailogBoxComponent>,) {}
  ngOnInit(): void {
      console.log(this.data);
  }

  okManullay(){
    this.dialogref.close(this.email)
  }
}
