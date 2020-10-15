import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'lib-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  public messages: Array<string> = [];
  public type: string; // Expected: confirmation || simple || noButtons
  public timeout = 0;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    private translate: TranslateService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (Array.isArray(data.message)) {
      this.messages = data.message;
    } else {
      this.messages.push(data.message);
    }
    this.type = data.type;
    if(data.timeout){
      this.timeout = data.timeout;
    }
  }

  ngOnInit():void {
    if(this.timeout){
      setTimeout( () => this.onNoClick(), this.timeout);
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
