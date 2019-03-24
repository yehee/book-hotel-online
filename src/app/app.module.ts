import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { HomeComponent } from './components/home/home.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { AvailableComponent } from './components/available/available.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    HomeComponent,
    PagenotfoundComponent,
    AvailableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
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
        path: 'available',
        component: AvailableComponent
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
