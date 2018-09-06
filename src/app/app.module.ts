import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutes} from './app.route';
import {RouterModule} from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LeftBarComponent } from './pages/leftBar/left-bar.component';
import { MainSideComponent } from './pages/mainSide/main-side.components';
import { WelcomeMessageComp } from './pages/mainSide/welcomeMessage/welcome-message.components';
import { AboutComponents } from './pages/mainSide/About/about.components';
import { ResumeComponents } from './pages/mainSide/Resume/resume.components';
import { WorksComponents } from './pages/mainSide/Works/works.components';
import { ContactComponents } from './pages/mainSide/Contact/contact.components';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}


@NgModule({
  declarations: [
    AppComponent,
    LeftBarComponent,
    MainSideComponent,
    WelcomeMessageComp,
    AboutComponents,
    ResumeComponents,
    WorksComponents,
    ContactComponents
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes,{useHash: true}),
    HttpClientModule,
    FormsModule,
    HttpModule,
    TabsModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
