import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CinemasRoutingModule } from './cinemas-routing.module';
import { ListComponent } from './list/list.component';
import { CinemaComponent } from './cinema/cinema.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import { CinemaDetailsComponent } from './cinema-details/cinema-details.component';
import { CreateScheduledMovieComponent } from './create-scheduled-movie/create-scheduled-movie.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {
  NgxMatDatetimePickerModule,
  NgxMatNativeDateModule,
  NgxMatTimepickerModule
} from "@angular-material-components/datetime-picker";
import {ReactiveFormsModule} from "@angular/forms";
import {MatNativeDateModule} from "@angular/material/core";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatTableModule} from "@angular/material/table";
import { CinemaSeatsComponent } from './cinema-seats/cinema-seats.component';
import { BookScheduledMovieComponent } from './book-scheduled-movie/book-scheduled-movie.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";


@NgModule({
    declarations: [
        ListComponent,
        CinemaComponent,
        CinemaDetailsComponent,
        CreateScheduledMovieComponent,
        CinemaSeatsComponent,
        BookScheduledMovieComponent
    ],
    imports: [
        CommonModule,
        CinemasRoutingModule,
        MatCardModule,
        MatButtonModule,
        MatFormFieldModule,
        MatDatepickerModule,
        NgxMatDatetimePickerModule,
        NgxMatTimepickerModule,
        NgxMatNativeDateModule,
        ReactiveFormsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatTableModule,
        MatProgressSpinnerModule
    ],
    providers: [
        MatDatepickerModule,
    ],
    exports: [
        CinemaSeatsComponent
    ]
})
export class CinemasModule { }
