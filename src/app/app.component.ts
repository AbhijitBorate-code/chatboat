import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { GeminiService } from './gemini.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  message: any[] = [];
  messageAI: any[] = [];
  myForm!: FormGroup;

  constructor(private fb: FormBuilder, private geminiService: GeminiService) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      text: [''],
    });
    this.messageAI = [];
    this.geminiService.getMessageHistory().subscribe((mesg) => {
      if(mesg != null )
        {
          this.messageAI.push(mesg);
        }
    });
  }

  onSubmit() {
    const textValue = this.myForm.controls['text'].value.trim();

    if (textValue !== '') {
      console.log(textValue);
      this.message.push(textValue);
      this.geminiService.generateText(textValue);
      this.myForm.reset();
    }
  }
}
