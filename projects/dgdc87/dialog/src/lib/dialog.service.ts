import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  public openSimpleDialog(width: string, messages: string[]): void {
    this.dialog.open(DialogComponent, {
      width: width,
      data: {
        message: messages,
        type: 'simple'
      }
    });
  }

  public openConfirmationDialog(width: string, messages: string[]): Promise<boolean> {
    const promise = new Promise<boolean>((resolve, reject) => {
      const dialogRef = this.dialog.open(DialogComponent, {
        width: width,
        data: {
          message: messages,
          type: 'confirmation'
        }
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          resolve(true)
        }else{
          resolve(false);
        }
      });
    });
    return promise;
  }
}
