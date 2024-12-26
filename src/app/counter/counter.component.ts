import { ChangeDetectionStrategy, Component, inject, NgZone, OnInit, signal } from '@angular/core';

import { InfoMessageComponent } from '../info-message/info-message.component';

@Component({
  selector: 'app-counter',
  standalone: true,
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
  imports: [InfoMessageComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent implements OnInit {
  private zone = inject(NgZone);
  // The NgZone service is injected into the component. NgZone is used to manage Angular's change detection system and allow us to execute code outside of Angular's zone when necessary, reducing unnecessary change detection cycles.

  count = signal(0);

  get debugOutput() {
    console.log('[Counter] "debugOutput" binding re-evaluated.');
    return 'Counter Component Debug Output';
  }

  ngOnInit() {
    setTimeout(() => {
      this.count.set(0);
    }, 4000);  
    //The setTimeout inside ngOnInit sets the count signal to 0 after 4 seconds. This will trigger any bindings to count to update in the UI.

    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        console.log('Timer expired!');
      }, 5000); 
    });
    // The second setTimeout runs a timer for 5 seconds, but it's executed outside Angular's zone using this.zone.runOutsideAngular(). This means Angular won't track the timer's completion, and no unnecessary change detection will run. 
    // The console log ('Timer expired!') will execute after 5 seconds without causing any Angular updates.
  }

  onDecrement() {
    this.count.update((prevCount) => prevCount - 1);
  }

  onIncrement() {
    this.count.update((prevCount) => prevCount + 1);
  }
}
