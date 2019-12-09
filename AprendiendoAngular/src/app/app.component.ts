import { Component } from '@angular/core';
@Component({
   selector: 'pm-root',
   template: `<div><h1>{{PageTitle}}</h1></div>
        <div>
        <pm-products></pm-products>
        </div>`

})
export class AppComponent {
  PageTitle: string = 'Acme Product Management';

}
