import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-chip',
    templateUrl: './chip.component.html',
    styleUrls: ['./chip.component.css'],
})
export class ChipComponent {
  @Input() public text: string = '';
  @Input() public color: string = 'var(--color-accent)';
  @Input() public iconClasses?: string = '';
}
