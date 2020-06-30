import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Import font awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// Import ngx scroll
import { NgxParallaxScrollModule } from 'ngx-parallax-scroll';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProjectsComponent } from './projects/projects.component';
import { CallToEmailComponent } from './call-to-email/call-to-email.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjectsComponent,
    CallToEmailComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgxParallaxScrollModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
