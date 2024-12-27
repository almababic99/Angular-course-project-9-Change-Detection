import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { MessagesListComponent } from './messages-list/messages-list.component';
import { NewMessageComponent } from './new-message/new-message.component';

@Component({
  selector: 'app-messages',
  standalone: true,
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css',
  imports: [MessagesListComponent, NewMessageComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,  // Angular performs change detection on every component when a change occurs, either from a user action (such as a click) or from an event (like a timer or HTTP request).
  // Change detection in Angular ensures that the view (DOM) stays updated when the application's state changes. By default, Angular checks all components for changes on any event (like user actions or HTTP responses).
  // ChangeDetectionStrategy.OnPush optimizes this by limiting checks to specific situations:
  // Input Property Changes: If the component’s input properties change.
  // Events: When the component triggers events (e.g., button clicks).
  // Signal/Observable Changes: When signals or observables emit new values.
  // Manual Trigger: When manually triggering change detection.
  // In MessagesComponent, OnPush ensures Angular only checks the component when the messages signal updates or events occur (e.g., adding a message). This reduces unnecessary checks and improves performance.
})
export class MessagesComponent {
  // messages = signal<string[]>([]);

  get debugOutput() {
    console.log('[Messages] "debugOutput" binding re-evaluated.');
    return 'Messages Component Debug Output';
  }

  // onAddMessage(message: string) {
  //   this.messages.update((oldMessages) => [...oldMessages, message]);
  // }
}
