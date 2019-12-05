import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmOverlayComponent } from './confirm-overlay/confirm-overlay.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IonicModule } from '@ionic/angular';

@NgModule({
    declarations: [ConfirmOverlayComponent],
    exports: [ConfirmOverlayComponent],
    imports: [
        CommonModule,
        FlexLayoutModule,
        IonicModule
    ]
})
export class ConfirmOverlayModule {

}
