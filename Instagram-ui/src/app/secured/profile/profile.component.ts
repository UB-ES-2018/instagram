import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProfileService } from '../shared/profile.service';
import { Profile } from '../shared/models/profile.model';
import { UserService } from '../../service/user.service';
import { User } from '../../model/User';
import { authService } from '../../service/auth.service';
import { FollowService } from '../../service/follow.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})


export class ProfileComponent implements OnInit {
  @ViewChild('modalFollowed') modalFollowed: ElementRef;

  profileID: string;
  user: User;
  followers: number;
  followeds: number;
  posts: number;

  constructor(private router: ActivatedRoute, private userService: UserService,
    private ruta: Router, private authenticationService: authService,
    private followService: FollowService, private modalService: NgbModal) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.profileID = params.profileID;
      this.loadUser();
    });
  }
  private loadUser() {
    this.userService.getProfile(this.profileID).subscribe(user => {
      this.user = user;
      this.loadUserInfo();
    }, error => {
      console.error('error retrieving user data ' + error);
      this.ruta.navigate(['not-found']);
    });
  }
  private loadUserInfo() {
    this.userService.getAmountFolloweds(this.user.id).subscribe(followeds => {
      this.followeds = followeds;
    }, error => console.error('error retrieving followeds data ' + error));
    this.userService.getAmountFollowers(this.user.id).subscribe(followers => {
      this.followers = followers;
    }, error => console.error('error retrieving followers data ' + error));
    this.userService.getAmountPost(this.user.id).subscribe(posts => {
      this.posts = posts;
    }, error => console.error('error retrieving post data ' + error));
  }
  isAuthUser() {
    // console.log(this.authenticationService.logUser.username +"------"+this.user.username);
    if (this.authenticationService.logUser && this.user) {
      return this.authenticationService.logUser.username === this.user.username;
    }
    return false;
  }

  sendFollow() {
    this.followService.requestFollow(8, 7).subscribe();
    console.log(8 + ' Sending follow to ' + 7);
  }
  popUp(){
    this.modalService.open(this.modalFollowed, {centered: true})
  }
  
}
