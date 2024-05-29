import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ServiceCardComponent } from './components/service-card/service-card.component';
import { BlogCardComponent } from './components/blog-card/blog-card.component';
import { BlogSectionComponent } from './components/blog-section/blog-section.component';
import { ServiceSectionComponent } from './components/service-section/service-section.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { CursorComponent } from './components/cursor/cursor.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { SocialButtonsComponent } from './components/social-buttons/social-buttons.component';
import { GlowingButtonsComponent } from './components/glowing-buttons/glowing-buttons.component';
import { GlassButtonsComponent } from './components/glass-buttons/glass-buttons.component';
import { GlassDropdownComponent } from './components/glass-dropdown/glass-dropdown.component';
import { UiUxComponent } from './pages/ui-ux/ui-ux.component';
import { ConsultingComponent } from './pages/consulting/consulting.component';
import { DesignComponent } from './pages/design/design.component';
import { DevelopmentComponent } from './pages/development/development.component';
import { Web3Component } from './pages/web3/web3.component';
import { AiComponent } from './pages/ai/ai.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ServiceCardComponent,
    BlogCardComponent,
    BlogSectionComponent,
    ServiceSectionComponent,
    HeroSectionComponent,
    CursorComponent,
    FooterComponent,
    AboutUsComponent,
    SocialButtonsComponent,
    GlowingButtonsComponent,
    GlassButtonsComponent,
    GlassDropdownComponent,
    UiUxComponent,
    ConsultingComponent,
    DesignComponent,
    DevelopmentComponent,
    Web3Component,
    AiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
