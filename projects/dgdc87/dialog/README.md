# Dialog - Used with angular material dialog.

I use this component to show an angular material dialog to the user. The dialog can be:

- Simple: it has only one button to close the modal.

  ![Image of simpleDialog](https://raw.githubusercontent.com/dgdc87/frontLibraries/master/projects/dgdc87/dialog/assets/images/simpleDialog.png)

- Confirmation: it has two buttons, one to close and the other one return true if the user accept.

  ![Image of confirmationDialog](https://raw.githubusercontent.com/dgdc87/frontLibraries/master/projects/dgdc87/dialog/assets/images/confirmationDialog.png)


The messages that are shown are tranlated using ngx-translate.

## Demo
------

View demo: [Stackblitz](https://stackblitz.com/edit/demo-dgdc87-dialog)



## Installation
------

  ```
  npm install @dgdc87/dialog
  ```

## Project requisites
------

  This service is designed to use inside a project which uses:

  ```
    "@angular/material": "9.2.3",
    "@ngx-translate/core": "^12.1.2",
    "@ngx-translate/http-loader": "^4.0.0",
  ```

  You have to import the MatDialogModule, the MatButtonModule and the BrowserAnimationsModule inside your AppModule:

  ```
  import { MatButtonModule } from '@angular/material/button';
  import { MatDialogModule } from '@angular/material/dialog';
  import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
  import {TranslateHttpLoader} from '@ngx-translate/http-loader';
  import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

  @NgModule({
  imports:      [ 
      ....
      HttpClientModule,
      MatDialogModule,
      MatButtonModule,,
      BrowserAnimationsModule,
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: []
        }
      })
    ],
    declarations: [ AppComponent, HelloComponent ],
    bootstrap:    [ AppComponent ]
  })
  export class AppModule { }
  ```

  For the translations you need to set inside the json's files in the i18n folder of your project, the translation to these literals:

  ```
  "common.no"
  "common.yes"
  "common.close"
  ```

  File en.json:
  ```
  {
    "common":{
      "no": "No",
      "yes": "Yes",
      "close": "Close",
    }
  }
  ```

## Methods:
------

* openSimpleDialog:

  | Parameter     | Type      | Expects               | Examples               |
  | ------------- | --------- | --------------------- | ---------------------- |
  | width         | string    | Dialog's width        | '65%', '300px', 'auto' |  
  | messages      | string[ ] | Messages to translate | ['common.alert']       |  



* openConfirmationDialog:

  | Parameter     | Type      | Expects               | Examples               |
  | ------------- | --------- | --------------------- | ---------------------- |
  | width         | string    | Dialog's width        | '65%', '300px', 'auto' |  
  | messages      | string[ ] | Messages to translate | ['common.alert']       |  

  Return: Promise < boolean > 


## Example / how to use:
------

  Import the DialogService in your component and use one of the two functions.

  ```
  import { DialogService } from '@dgdc87/dialog';
  ....

  constructor(private dialogService: DialogService,... 
  ) {
  ...

  this.dialogService.openSimpleDialog('350px', ['common.success-operation']);


  this.dialogService.openConfirmationDialog('60%', ['common.more-than-one-items-selected', 'common.ask-for-confirmation']).then( result => {
    if(result){
      // do something
    }
  }).catch(error => {
    // do something
  });

  ```




