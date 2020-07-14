import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Import font awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// Import ngx scroll
import { NgxParallaxScrollModule } from 'ngx-parallax-scroll';
//Import ng smooth scroll
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProjectsComponent } from './projects/projects.component';
import { CallToEmailComponent } from './call-to-email/call-to-email.component';
import { FooterComponent } from './footer/footer.component';
import { Hover1Directive } from './hover-1.directive';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjectsComponent,
    CallToEmailComponent,
    FooterComponent,
    Hover1Directive
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgxParallaxScrollModule,
    ScrollToModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
