import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'confirm-overlay',
  templateUrl: './confirm-overlay.component.html',
  styleUrls: ['./confirm-overlay.component.scss'],
})
export class ConfirmOverlayComponent {

    @ViewChild('confirmOverlay', { static: true })
    confirmOverlay: ElementRef;

    @Input()
    text?: string;

    @Input()
    hideButton?: boolean = false;

    @Input()
    buttonText?: string = 'OK';

    @Output()
    onClick?: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor( private elementRef: ElementRef) {
    }

    public onOkClick(): void {
        
        //this.animator.setType('fadeOut').hide(this.confirmOverlay.nativeElement);
        this.onClick.emit(true);
    }

    public reset(): void {

    }

}
