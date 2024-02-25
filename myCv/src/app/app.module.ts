import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvFooterComponent } from './components/cv-footer/cv-footer.component';
import { CvHeaderComponent } from './components/cv-header/cv-header.component';
import { CvMainComponent } from './components/cv-main/cv-main.component';

@NgModule({
  declarations: [
    AppComponent,
    CvFooterComponent,
    CvHeaderComponent,
    CvMainComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
