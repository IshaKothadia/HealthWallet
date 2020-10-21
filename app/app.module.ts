

import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { LoginformComponent } from './loginform/loginform.component';
import { HomeComponent } from './home/home.component';
import { ConstructionComponent } from './construction/construction.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupformComponent,
    HeaderComponent,
    LoginformComponent
    LoginformComponent,
    HomeComponent,
    ConstructionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }