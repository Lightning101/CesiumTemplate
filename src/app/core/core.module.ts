import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CesiumComponent } from './components/cesium/cesium.component';

const components = 
[
  CesiumComponent
];



@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule
  ],
  exports: [...components]
})
export class CoreModule { }
