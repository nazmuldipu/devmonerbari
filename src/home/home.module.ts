import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { IndexComponent } from './containers/index/index.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './containers/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrivacyPolicyComponent } from './containers/privacy-policy/privacy-policy.component';
import { TermsComponent } from './containers/terms/terms.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: IndexComponent },
      { path: 'privacy-policy', component: PrivacyPolicyComponent },
      { path: 'terms', component: TermsComponent },
      { path: 'login', component: LoginComponent },
    ]
  }
]

@NgModule({
  declarations: [HomeComponent, IndexComponent, NavbarComponent, FooterComponent, LoginComponent, PrivacyPolicyComponent, TermsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class HomeModule { }
