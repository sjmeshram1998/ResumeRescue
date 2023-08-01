import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { CardsComponent } from './cards/cards.component';
import { SelectTemplateComponent } from './select-template/select-template.component';
import { ResumeRescueComponent } from './resume-rescue/resume-rescue.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ChooseTemplateComponent } from './choose-template/choose-template.component';
import { BuildResumeComponent } from './build-resume/build-resume.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { ExperienceComponent } from './experience/experience.component';
import { SchoolComponent } from './school/school.component';
import { SkillsComponent } from './skills/skills.component';
import { ProfessionalSummaryComponent } from './professional-summary/professional-summary.component';
import { SaveComponent } from './save/save.component';
import { ChattingComponent } from './chatting/chatting.component';
import { HistoryPageDirective } from './history-page.directive';
import { ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { RatingsComponent } from './ratings/ratings.component';
import { CarouselModule } from 'ngx-owl-carousel-o'; 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { StepsComponent } from './steps/steps.component'
// import { CarouselModule } from 'ngx-owl-carousel-o';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import { CarousalCardsComponent } from './carousal-cards/carousal-cards.component'
// firebase imports
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import {AngularFireDatabaseModule} from '@angular/fire/compat/database'
import { initializeApp } from 'firebase/app';
import {firebaseConfig} from '../environments/environments';
import { SignInComponent } from './sign-in/sign-in.component';
import { DatabaseService } from './database.service';
import { AuthService } from './auth.service';
import { ImgTemplateService } from './img-template.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    CardsComponent,
    SelectTemplateComponent,
    ResumeRescueComponent,
    FooterComponent,
    HomeComponent,
    ChooseTemplateComponent,
    BuildResumeComponent,
    PersonalInfoComponent,
    ExperienceComponent,
    SchoolComponent,
    SkillsComponent,
    ProfessionalSummaryComponent,
    SaveComponent,
    ChattingComponent,
    HistoryPageDirective,
    UserDetailsComponent,
    RatingsComponent,
    StepsComponent,
    SignInComponent,
    // CarousalCardsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CarouselModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule
    // BrowserAnimationsModule,
    // CarouselModule
    ],
  providers: [
    DatabaseService,
    AuthService,
    ImgTemplateService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
