import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: `/placeholder`,
    pathMatch: 'full',
  },
  { path: 'placeholder', loadChildren: () => import('./placeholder/placeholder.module').then((m) => m.PlaceholderModule) },
  { path: '**', redirectTo: `/user` },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
