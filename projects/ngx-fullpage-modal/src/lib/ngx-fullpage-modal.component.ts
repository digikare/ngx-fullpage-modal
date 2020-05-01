import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
export type AnimationModalType = 'slideUp'

@Component({
  selector: 'ngx-fullpage-modal',
  templateUrl: `./ngx-fullpage-modal.component.html`,
  styleUrls: ['./ngx-fullpage-modal.component.scss'],
  animations: [
    trigger('changeState', [
      state('slideUp', style({
        backgroundColor: '#fff',
        transform: 'scale(1)',
        height: '100%',
      })),
      state('state2', style({
        backgroundColor: 'red',
        transform: 'scale(1.5)'
      })),
      transition('*=>slideUp',
        animate('300ms', keyframes([
          style({
            transform: `translateY(${window.innerHeight}px)`,
            backgroundColor: '#fff',
            height: '100%',
          }),
          style({
            transform: 'translateY(0px)',
            height: '100%',
          })
        ]))),
      transition('*=>state2', animate('2000ms'))
    ])
  ]
})
export class NgxFullpageModalComponent implements OnInit {
  @Input() animation: AnimationModalType = 'slideUp';
  @Input() closeText: string = 'Close';
  @Output() onClose = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }

}
