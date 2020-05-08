import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'lib-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  public messages: Array<string> = [];
  public type: string; // Expected: confirmation || simple

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (Array.isArray(data.message)) {
      this.messages = data.message;
    } else {
      this.messages.push(data.message);
    }
    this.type = data.type;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
