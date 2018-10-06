import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProfileService } from '../shared/profile.service';
import { Profile } from '../shared/models/profile.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileID: string;
  profile: Profile;
  constructor(private router: ActivatedRoute, private profileService: ProfileService) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.profileID = params.profileID;
      if (!this.profileID) {
        // fer servir authService per posar-te el teu
      }
      console.log('visiting ' + this.profileID + '\'s profile');
    });
    this.profileService.getProfile(this.profileID).subscribe(profile => {
      this.profile = profile;
      console.log('profile: ' + JSON.stringify(profile));
    });
  }

}
