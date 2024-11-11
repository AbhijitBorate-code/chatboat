import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'; // If you're using input elements inside <mat-form-field>
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule ,  FormsModule} from '@angular/forms';
import { GeminiService } from './gemini.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [GeminiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
