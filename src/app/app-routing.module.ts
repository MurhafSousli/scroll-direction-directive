import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExampleContentComponent } from './example-content/example-content.component';
import { ExampleCdkVirtualScrollComponent } from './example-cdk-virtual-scroll/example-cdk-virtual-scroll.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: ExampleContentComponent },
  { path: 'virtual-scroll', component: ExampleCdkVirtualScrollComponent },
  { path: '**', redirectTo: 'home' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
