import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
// BehaviorSubject: This is a special type of Subject from the rxjs library that holds a current value and can emit new values to its subscribers.
// It's useful when you want to provide an initial value or always have the most recent value available for subscribers.

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  messages$ = new BehaviorSubject<string[]>([]);
  // messages$: This is a variable where the $ at the end usually indicates that it's about rxjs
  // new BehaviorSubject<string[]>([]): This creates a new BehaviorSubject, which is a type of Subject in RxJS. A BehaviorSubject always has a current value and will emit the latest value to any new subscribers.

  // private messages = signal<string[]>([]);
  private messages: string[] = [];

  // allMessages = this.messages.asReadonly();
  get allMessages() {
    return [...this.messages];
  }

  addMessage(message: string) {
    // this.messages.update((prevMessages) => [...prevMessages, message]);
    this.messages = [...this.messages, message];
    // this.messages$.next(this.messages);  
    this.messages$.next([...this.messages]);  
  }
}
