import { IonicModule } from '@ionic/angular';
import { EmptyScreenComponent } from './empty-screen/empty-screen.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [EmptyScreenComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [EmptyScreenComponent]
})
export class ComponentsModule { }
