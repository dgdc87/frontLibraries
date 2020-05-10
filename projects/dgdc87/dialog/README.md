# Dialog - Used with angular material dialog.

I use this component to show an angular material dialog to the user. The dialog can be:

- Simple: it has only one button to close the modal.

  ![Image of simpleDialog](https://raw.githubusercontent.com/dgdc87/frontLibraries/master/projects/dgdc87/dialog/assets/images/simpleDialog.png)

- Confirmation: it has two buttons, one to close and the other one return true if the user accept.

  ![Image of confirmationDialog](https://raw.githubusercontent.com/dgdc87/frontLibraries/master/projects/dgdc87/dialog/assets/images/confirmationDialog.png)


The messages that are shown are tranlated using ngx-translate.

## Installation
------

  ```
  npm install @dgdc87/dialog
  ```

## Project requisites
------

  This service is designed to use inside a project which uses:

  ```
      "@ngx-translate/core": "^12.1.2",
      "@ngx-translate/http-loader": "^4.0.0",
  ```

  Inside json's files in the i18n folder of your project, you must have the translation to these literals:

  ```
  "common.no"
  "common.yes"
  "common.close"
  ```

  en.json:
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




