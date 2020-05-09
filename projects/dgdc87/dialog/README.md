# Dialog - Used with angular material dialog.

I use this component to show an angular material dialog to the user. The dialog can be:

- Simple: it has only one button to close the modal.

![Image of simpleDialog](https://raw.githubusercontent.com/dgdc87/frontLibraries/master/projects/dgdc87/dialog/assets/images/simpleDialog.png)

- Confirmation: it has two button, one to close and the other one return true if the user accept.

![Image of confirmationDialog](https://raw.githubusercontent.com/dgdc87/frontLibraries/master/projects/dgdc87/dialog/assets/images/confirmationDialog.png)


The messages that are shown ara tranlated using ngx-translate.

## Installation

```
npm install @dgdc87/dialog
```

## Project requisites

This component is designed to use inside a project with:

    "@ngx-translate/core": "^12.1.2",
    "@ngx-translate/http-loader": "^4.0.0",

## How to use:

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




