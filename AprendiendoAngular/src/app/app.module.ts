import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './Home/welcome.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BlogPostsComponent } from './blog-posts/blog-posts.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogPostAddEditComponent } from './blog-post-add-edit/blog-post-add-edit.component';




@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    BlogPostsComponent,
    BlogPostComponent,
    BlogPostAddEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,

    RouterModule.forRoot([

      { path: '', component: BlogPostsComponent, pathMatch: 'full' },
  { path: 'blogpost/:id', component: BlogPostComponent },
  { path: 'add', component: BlogPostAddEditComponent },
  { path: 'blogpost/edit/:id', component: BlogPostAddEditComponent },
  { path: '**', redirectTo: '/' }
      // { path: '', loadChildren: './Product/product.module#ProductModule' },
      // { path: 'blogpost/:id', component: BlogPostComponent },
      // { path: 'add', component: BlogPostAddEditComponent },
      //  { path: 'blogpost/edit/:id', component: BlogPostAddEditComponent },
      // { path: 'welcome', component: WelcomeComponent },
      // { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      // { path: '', component: BlogPostsComponent, pathMatch: 'full' },
      // { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
      // { path: '**', redirectTo: '/' }
    ])
  ],


  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
