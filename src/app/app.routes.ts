import { Routes } from '@angular/router';

import { ArticleFormPageComponent } from './article-form-page/article-form-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SingInPageComponent } from './sing-in-page/sing-in-page.component';
import { SingUpPageComponent } from './sing-up-page/sing-up-page.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomePageComponent },
  { path: 'sign-in', component: SingInPageComponent },
  { path: 'sign-up', component: SingUpPageComponent },
  { path: 'article/form', component: ArticleFormPageComponent },
];
