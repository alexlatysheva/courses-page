import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import {FormsModule} from '@angular/forms'; 
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { SearchPanelComponent } from './components/search-panel/search-panel.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LogoComponent,
    FooterComponent,
    BreadcrumbsComponent,
    SearchComponent,
    SearchPanelComponent
  ],
  imports: [
    CommonModule, 
    ButtonModule,
    CardModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    FormsModule
  ],
  exports: [
    HeaderComponent, 
    FooterComponent,
    BreadcrumbsComponent,
    SearchPanelComponent
  ]
})
export class CoreModule { }
