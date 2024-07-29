import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ServiceSectionComponent } from './components/service-section/service-section.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { UiUxComponent } from './pages/ui-ux/ui-ux.component';
import { ConsultingComponent } from './pages/consulting/consulting.component';
import { DesignComponent } from './pages/design/design.component';
import { DevelopmentComponent } from './pages/development/development.component';
import { Web3Component } from './pages/web3/web3.component';
import { AiComponent } from './pages/ai/ai.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WorkSectionComponent } from './components/work-section/work-section.component';
import { RouterModule } from '@angular/router';
import { WaveComponent } from './components/wave/wave.component';
import { ChooseUsComponent } from './components/choose-us/choose-us.component';
import { ReferencesComponent } from './components/references/references.component';
import { ContactComponent } from './components/contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { API_KEY, GoogleSheetsDbService } from 'ng-google-sheets-db';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ServiceSectionComponent,
    HeroSectionComponent,
    FooterComponent,
    AboutUsComponent,
    UiUxComponent,
    ConsultingComponent,
    DesignComponent,
    DevelopmentComponent,
    Web3Component,
    AiComponent,
    WorkSectionComponent,
    WaveComponent,
    ChooseUsComponent,
    ReferencesComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forRoot([], { // Add this line
      scrollPositionRestoration: 'enabled' // Enable scroll restoration
    })

  ],
  providers: [
    {
      provide: API_KEY,
      useValue: environment.googleApiKey,
    },
    GoogleSheetsDbService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
