import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, inject, input, OnInit } from '@angular/core';
import { MessagesService } from '../messages.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-messages-list',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './messages-list.component.html',
  styleUrl: './messages-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessagesListComponent {
  // messages = input.required<string[]>();
  private messagesService = inject(MessagesService);

  // private cdRef = inject(ChangeDetectorRef);
  // ChangeDetectorRef: This is an Angular service that allows you to trigger change detection manually. It's commonly used when you need to manually update the view, for example, after some asynchronous operation (like fetching data) 
  // when Angular's automatic change detection may not be able to detect changes in the component's state.

  // private destroyRef = inject(DestroyRef);

  messages = this.messagesService.allMessages;
  // get messages() {
  //   return this.messagesService.allMessages;
  // }
  // messages: string[] = [];
  // messages$ = this.messagesService.messages$;

  // ngOnInit() {
  //   const subscription = this.messagesService.messages$.subscribe((messages) => {
  //     this.messages = messages;
  //     this.cdRef.markForCheck();
  //   });
  //   this.destroyRef.onDestroy(() => {
  //     subscription.unsubscribe();
  //   });
  // }

  get debugOutput() {
    console.log('[MessagesList] "debugOutput" binding re-evaluated.');
    return 'MessagesList Component Debug Output';
  }
}
