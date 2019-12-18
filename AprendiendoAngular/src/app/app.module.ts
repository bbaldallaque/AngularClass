import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { ProductListComponent } from './Product/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';

import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { ProductDetailComponent } from './product/product-detail.component';

import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './Home/welcome.component';
import { ProductDetailGuard } from './Product/product-detail.guard';



@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'product', component: ProductListComponent },
      { path: 'product/:id',
      canActivate : [ProductDetailGuard],
      component: ProductDetailComponent },
      { path: 'welcome', component: WelcomeComponent },
       {path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
    ])
  ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
