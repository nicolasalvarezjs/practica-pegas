import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { HomeComponent } from './home.component';
import { HomeRoutes } from './home.routing';
import { GenderPipe } from './pipes/gender.pipe';
import { breastfeedingOrPregnantTransform } from './pipes/breastfeedingOrPregnantTransform.pipe';
import { homeReducer } from './store/home.reducer';
import { EffectsModule } from '@ngrx/effects';
import { HomeEffects } from './store/home.effects';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutes,
    EffectsModule.forFeature([HomeEffects]),
    StoreModule.forFeature('home', homeReducer)
  ],
  declarations: [		
      HomeComponent,
      GenderPipe,
      breastfeedingOrPregnantTransform
   ]
})
export class HomeModule { }
