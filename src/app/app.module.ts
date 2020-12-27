import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClipboardModule } from 'ngx-clipboard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShortLinkCreatorComponent } from './common/components/short-link-creator/short-link-creator.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ShortLinkResolverComponent } from './common/components/short-link-resolver/short-link-resolver.component';

@NgModule({
  declarations: [
    AppComponent,
    ShortLinkCreatorComponent,
    ShortLinkResolverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    ClipboardModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
