# Dialog - Used with angular material dialog.

I use this component to show an angular material dialog to the user. The dialog can be:

- Simple: it has only one button to close the modal.

![Image of simpleDialog](https://raw.githubusercontent.com/dgdc87/frontLibraries/master/projects/dgdc87/dialog/assets/images/simpleDialog.png)

- Confirmation: it has two button, one to close and the other one return true if the user accecpt.

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
    "@angular/material": "^9.2.0",

## How to use:

Import the DialogComponent into your app.module

```
import { DialogComponent } from '@dgdc87/dialog';
....

@NgModule({
  declarations: [
    ....
    DialogComponent,

    
```

Use the DialogComponent inside the angular material dialog function

```
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '@dgdc87/dialog';
....

constructor(public dialog: MatDialog,... 
) {
...

showDialog = () => {
  const dialogRef = this.dialog.open(DialogComponent, {
    width: 'auto', // Could be '60%', '300px'
    data: {
      message:[
        'alerts.ask-for-notifications-permission'
      ], 
      // message can be an unique message or an array with messages.
      type: 'confirmation' // type can be 'simple' or 'confirmation'
    }
  });

  //If it's confirmation you can subscribe to the result
  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      // do something if ok
    }
  });
}

```




