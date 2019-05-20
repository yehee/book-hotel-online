import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { HomeComponent } from './components/home/home.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { AvailableComponent } from './components/available/available.component';
import { RoomComponent } from './components/room/room.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FooterComponent } from './components/footer/footer.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    HomeComponent,
    PagenotfoundComponent,
    AvailableComponent,
    RoomComponent,
    ConfirmationComponent,
    NavbarComponent,
    FooterComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'rooms',
        component: RoomsComponent
      },
      {
        path: 'user',
        component: ProfileComponent
      },
      {
        path: 'rooms/:id',
        component: RoomComponent
      },
      {
        path: 'available',
        component: AvailableComponent
      },
      {
        path: 'confirmation',
        component: ConfirmationComponent
      },
      {
        path: '**',
        component: PagenotfoundComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
