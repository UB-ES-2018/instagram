import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Profile } from 'selenium-webdriver/firefox';
import { SecuredComponent } from './secured.component';
import { ProfileComponent } from './profile/profile.component';
import { ExploreComponent } from './explore/explore.component';
import { FeedComponent } from './feed/feed.component';

const routes: Routes = [
    {
        path: '',
        component: SecuredComponent,
        children: [
            { path: '', component: FeedComponent},
            { path: 'explore', component: ExploreComponent},
            { path: ':profileID', component: ProfileComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SecuredRoutingModule { }
