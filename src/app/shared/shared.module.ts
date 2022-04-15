import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CinemasModule} from "../cinemas/cinemas.module";


@NgModule({
  declarations: [
  ],
    imports: [
        CommonModule,
        CinemasModule
    ]
})
export class SharedModule { }
