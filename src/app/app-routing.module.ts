import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShortLinkCreatorComponent } from './common/components/short-link-creator/short-link-creator.component';
import { ShortLinkResolverComponent } from './common/components/short-link-resolver/short-link-resolver.component';

const routes: Routes = [
  {path: '', component: ShortLinkCreatorComponent},
  {path: ':shortSlug', component: ShortLinkResolverComponent},
  {path: '**', redirectTo: '/'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
