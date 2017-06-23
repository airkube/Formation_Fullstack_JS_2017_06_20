import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    ContactsRoutingModule
  ],
  declarations: [ContactsListComponent],
  exports: [
    ContactsListComponent
  ]
})
export class ContactsModule { }
