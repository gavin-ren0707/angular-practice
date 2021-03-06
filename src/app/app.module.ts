import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ArticlesComponent } from './articles/articles.component';
import { TagsComponent } from './tags/tags.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FilterarticlePipe } from './filterarticle.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ArticlesComponent,
    TagsComponent,
    FooterComponent,
    FilterarticlePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
