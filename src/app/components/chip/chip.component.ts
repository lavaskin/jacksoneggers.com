import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.css']
})
export class ChipComponent implements OnInit {
  @Input()
  text: string = '';
  @Input()
  color: string = 'var(--color-accent)';
  @Input()
  iconClasses?: string = '';

  constructor() { }

  ngOnInit(): void { }
}