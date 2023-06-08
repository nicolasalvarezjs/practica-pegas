import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutes } from './home.routing';
import { GenderPipe } from './pipes/gender.pipe';
import { booleanToSpanish } from './pipes/booleanToSpanish.pipe';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutes
  ],
  declarations: [		
      HomeComponent,
      GenderPipe,
      booleanToSpanish
   ]
})
export class HomeModule { }
