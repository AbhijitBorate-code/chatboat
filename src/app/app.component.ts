import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { GeminiService } from './gemini.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, AfterViewChecked {
  @ViewChild('chatContainer') private chatContainer!: ElementRef;

  message: any[] = [];
  myForm!: FormGroup;

  constructor(private fb: FormBuilder, private geminiService: GeminiService) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      text: [''],
    });
    this.geminiService.getMessageHistory().subscribe((mesg) => {
      if (mesg != null) {
        this.message.push({ text: mesg, sender: 'ai' });;
        this.scrollToBottom();
      }
    });
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    try {
      this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
    } catch (err) {
      console.error('Scroll error:', err);
    }
  }

  onSubmit() {
    const textValue = this.myForm.controls['text'].value.trim();
    if (textValue !== '') {
      console.log(textValue);
      this.message.push({ text: textValue, sender: 'user' });  // Add user message
      this.geminiService.generateText(textValue)
      this.scrollToBottom();
      this.myForm.reset();
    }
  }
}
