import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'; // If you're using input elements inside <mat-form-field>
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule ,  FormsModule} from '@angular/forms';
import { GeminiService } from './gemini.service';
import { MarkdownModule } from 'ngx-markdown';

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
    FormsModule,
    MarkdownModule.forRoot({
      markedOptions: {
        provide: 'markedOptions',
        useValue: {
          gfm: true, // GitHub Flavored Markdown
          breaks: true // Automatically create line breaks in text
        }
      }
    })
  ],
  providers: [GeminiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
