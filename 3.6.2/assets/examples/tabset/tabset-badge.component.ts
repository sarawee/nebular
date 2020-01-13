import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'nb-tabset-badge',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './tabset-badge.component.html',
  styles: [`
    :host nb-tab {
      padding: 1.25rem;
    }
  `],
})
export class TabsetBadgeComponent {
}