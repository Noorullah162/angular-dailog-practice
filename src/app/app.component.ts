import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { NgForm, FormControl, Validators } from '@angular/forms';
import { DailogBoxComponent } from './dailog-box/dailog-box.component';
export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sample';
  animal!: string;
  name!: string;
  result = null;
  constructor(public dialog: MatDialog) {

  }
  // button click function to open dailog with form
  openDialog() {
    const dialogRef = this.dialog.open(DailogBoxComponent,
      {
        height: '400px',
        width: '400px',
        // disableClose:true,
        data: { 'rollno': '1212' }
      });

    dialogRef.afterClosed().subscribe(
      (data)=>{
        this.result = data;
      }
    )
  }
}
