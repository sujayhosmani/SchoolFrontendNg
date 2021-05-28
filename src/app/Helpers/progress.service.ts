import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProgressComponent } from './progress.component';

@Injectable()
export class ProgressService {
    public isDialogOpen: Boolean = false;
    constructor(public dialog: MatDialog) { }
    openDialog(data): any {
        if (this.isDialogOpen) {
            return false;
        }
        this.isDialogOpen = true;
        const dialogRef = this.dialog.open(ProgressComponent, {
            width: '150px',
            height: '130px',
            disableClose: true,
            data: data
        });

      

        dialogRef.afterClosed().subscribe(result => {
            this.isDialogOpen = false;
            let animal;
            animal = result;
        });
    }


    closeTheDialog(){
        this.dialog.closeAll();
    }
}