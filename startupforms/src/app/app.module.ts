import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { FormsComponent } from './forms/forms.component';
import { HeaderComponent } from './header/header.component';
import { NestedFormComponent } from './forms/nested-form/nested-form.component';
import { ReactiveSampleComponent } from './forms/reactive-sample/reactive-sample.component';
import { TemplateSampleComponent } from './forms/template-sample/template-sample.component';

import { Routes, RouterModule } from '@angular/router';
import { HighlightModule } from 'ngx-highlightjs';

import {FormsModule,ReactiveFormsModule}  from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ZipValidatorDirective } from './zip-validator.directive';

const routes : Routes = [
  {path:'', redirectTo:'template',pathMatch:'full'},
  {path: 'template', component: TemplateSampleComponent},
  {path: 'reactive', component: ReactiveSampleComponent},
  {path: 'nested', component: NestedFormComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    FormsComponent,
    HeaderComponent,
    NestedFormComponent,
    ReactiveSampleComponent,
    TemplateSampleComponent,
    ZipValidatorDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HighlightModule.forRoot({ theme: 'arduino-light'}),
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
