import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import * as fromApp from './store/app.reducer';
import { HomeEffects } from './pages/people-list/store/home.effects';
import { FormRegisterComponent } from './pages/person-register/form-register.component';

@NgModule({
  declarations: [	
    AppComponent,
    FormRegisterComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot(fromApp.appReducer),
    EffectsModule.forRoot([HomeEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
