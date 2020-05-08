import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DialogComponent } from './dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { Subject } from 'rxjs';

export class Loader implements TranslateLoader {
  private translations = new Subject();
  $translations = this.translations.asObservable();
  getTranslation(lang: string) {
    return this.$translations;
  }
}

export function LoaderFactory() {
  return new Loader();
}

@NgModule({
  declarations: [DialogComponent],
  imports: [
    BrowserModule,
    MatDialogModule,
    MatButtonModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: LoaderFactory
      }
    }),
  ],
  exports: [
    DialogComponent,
    TranslateModule
  ]
})
export class DialogModule { }
