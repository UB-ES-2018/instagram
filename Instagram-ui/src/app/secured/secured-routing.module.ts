import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Profile } from 'selenium-webdriver/firefox';
import { SecuredComponent } from './secured.component';
import { ProfileComponent } from './profile/profile.component';
import { ExploreComponent } from './explore/explore.component';
import { FeedComponent } from './feed/feed.component';
import { AuthGuard } from '../shared';

const routes: Routes = [
    {
        path: '',
        component: SecuredComponent,
        children: [
            {
                path: 'accounts', loadChildren: './edit-user-profile/edit-user-profile.module#EditUserProfileModule',
                canActivate: [AuthGuard]
            },
            { path: '', component: FeedComponent, canActivate: [AuthGuard] },
            { path: 'explore', component: ExploreComponent, canActivate: [AuthGuard] },
            { path: ':profileID', component: ProfileComponent }

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SecuredRoutingModule { }
