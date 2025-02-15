import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { SafeComponent } from './safe/safe.component';
import { RootComponent } from './root/root.component';
import { VdayComponent } from './vday/vday.component';
import { DjComponent } from './dj/dj.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    AboutComponent,
    ExperienceComponent,
    CarouselComponent,
    ProjectsComponent,
    ContactComponent,
    SafeComponent,
    RootComponent,
    VdayComponent,
    DjComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot([
      {path: 'a', component: SafeComponent},
      {path: '', component: RootComponent},
      {path: 'iloveyou', component: VdayComponent},
      {path: 'dj', component: DjComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
