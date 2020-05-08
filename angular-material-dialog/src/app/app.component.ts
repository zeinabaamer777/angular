import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './component/dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-material-dialog';


  // create constructor and invoke MatDialog
  constructor(public dialog : MatDialog){}

  //create variable for storage of the inputs from user
  name : string;
  animal : string;

  //create the openDialog method that invokes MatDialog and the DialogComponent
  openDialog(){
    const dialogRef = this.dialog.open(DialogComponent, {
      panelClass : 'panel',
      // invoking the data : 1 from user input & other from dialog input
      data : {name : this.name, animal : this.animal}
    })

    //subscribe to the user input data from dialog
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      //display the user input from dialog by setting it to storage variable
      this.animal = result;
    })
  }

}
