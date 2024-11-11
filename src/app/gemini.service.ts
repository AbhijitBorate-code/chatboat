import { Injectable } from '@angular/core';
import {GoogleGenerativeAI} from "@google/generative-ai"
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeminiService {


  private generativeAI : GoogleGenerativeAI;


  messageHistory: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor() {
    this.generativeAI = new GoogleGenerativeAI('AIzaSyC28I46eQ5W7XyD9UjO9Rz42mPmJ4E73jI')

   }

   async generateText(prompt: string) {
    const model = this.generativeAI.getGenerativeModel({ model: 'gemini-pro' });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
    this.messageHistory.next(text);
  }

  getMessageHistory(): Observable<any> {
    return this.messageHistory.asObservable()
  }


}


