import { Component } from '@angular/core';
@Component({
   selector: 'pm-root',
   template: `
     <nav class='navbar navbar-expand navbar-light bg-light'>
     <a class='navbar-brand'>{{PageTitle}}</a>
     <ul class='nav nav-pills'>
     <li><a class='nav-link' [routerLink]="['/welcome']">Home</a></li>
     <li><a class='nav-link'[routerLink]="['/product']">Product List</a></li>
     </ul>
     </nav>
     <div class='container'>
     <router-outlet></router-outlet>
     </div>
     `

})
export class AppComponent {
  PageTitle = 'Acme Product Management';

}
