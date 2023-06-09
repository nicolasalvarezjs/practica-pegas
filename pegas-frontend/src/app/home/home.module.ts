import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { HomeComponent } from './home.component';
import { HomeRoutes } from './home.routing';
import { GenderPipe } from './pipes/gender.pipe';
import { booleanToSpanish } from './pipes/booleanToSpanish.pipe';
import { homeReducer } from './store/home.reducer';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutes,
    StoreModule.forFeature('home', homeReducer)
  ],
  declarations: [		
      HomeComponent,
      GenderPipe,
      booleanToSpanish
   ]
})
export class HomeModule { }
