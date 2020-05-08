import { NgModule } from '@angular/core';
import { DialogComponent } from './dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [DialogComponent],
  imports: [
    MatDialogModule,
    MatButtonModule
  ],
  exports: [DialogComponent]
})
export class DialogModule { }
