import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleContentComponent } from './example-content/example-content.component';
import { ExampleCdkVirtualScrollComponent } from './example-cdk-virtual-scroll/example-cdk-virtual-scroll.component';
import { ScrollDirectionDirective } from './scroll-direction.directive';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [
    AppComponent,
    ExampleContentComponent,
    ExampleCdkVirtualScrollComponent,
    ScrollDirectionDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // Material
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
