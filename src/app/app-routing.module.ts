import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { UserDetailsComponent } from './user-details/user-details.component';
import { RatingsComponent } from './ratings/ratings.component';
import { StepsComponent } from './steps/steps.component';
import { SignInComponent } from './sign-in/sign-in.component';
// import { CarousalCardsComponent } from './carousal-cards/carousal-cards.component';

const routes: Routes = [
  {path:"home", component: HomeComponent},
  {path: "", redirectTo: "home", pathMatch:"full"},

  {path: "choose-template", component: ChooseTemplateComponent},
  {path: "build-resume", component: BuildResumeComponent},
  {path: "personal-info", component: PersonalInfoComponent},
  {path: "experience", component: ExperienceComponent},
  {path: "school", component: SchoolComponent},
  {path: "skills", component: SkillsComponent},
  {path: "summary", component: ProfessionalSummaryComponent},
  {path: "chat", component: ChattingComponent},
  {path: "user-details", component: UserDetailsComponent},
  {path: "save", component: SaveComponent},
  {path: "ratings", component: RatingsComponent},
  {path: "steps", component: StepsComponent},
  // {path: "login", component: HomeComponent}
  {path: "user-details", component: UserDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
