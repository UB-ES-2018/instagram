import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProfileService } from '../shared/profile.service';
import { Profile } from '../shared/models/profile.model';
import { UserService } from '../../service/user.service';
import { User } from '../../model/User';
import { Follow } from '../../model/Follow';
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
  @ViewChild('modalFollowers') modalFollowers: ElementRef;

  profileID: string;
  user: User;
  followers: number;
  followeds: number;
  follower_list: User[];
  followed_list: User[];
  self_followed_list: User[];
  follow_check: Follow = Follow.createDummy();
  posts: number;

  constructor(private router: ActivatedRoute, private userService: UserService,
    private ruta: Router, private authenticationService: authService,
    private followService: FollowService, private modalService: NgbModal) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.profileID = params.profileID;
      this.loadUser();
      this.selfFollowedList();
    });
  }
  private loadUser() {
    this.userService.getProfile(this.profileID).subscribe(user => {
      this.user = user;
      this.loadUserInfo();
      this.checkFollowStatus(this.user.id)
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

    this.userService.getFolloweds(this.user.id).subscribe(followed_list => {
      this.followed_list = followed_list;
    }, error => console.error('Error retrieving the followed list ' + error));
    this.userService.getFollowers(this.user.id).subscribe(follower_list => {
      this.follower_list = follower_list;
    }, error => console.error('Error retrieving the follower list ' + error));

    //this.userService.getAmountPost(this.user.id).subscribe(posts => {
    //  this.posts = posts;
    //}, error => console.error('error retrieving post data ' + error));
  }
  isAuthUser() {
    // console.log(this.authenticationService.logUser.username +"------"+this.user.username);
    if (this.authenticationService.logUser && this.user) {
      return this.authenticationService.logUser.username === this.user.username;
    }
    return false;
  }

  isLogged(){
    if(this.authenticationService.logUser){
      return true;
    }else{
      return false;
    }
  }

  sendFollow(followed_id: number) {
    this.followService.requestFollow(this.authenticationService.logUser.id, followed_id).subscribe(
      response=> {
        this.checkFollowStatus(this.user.id);
        this.selfFollowedList();
        this.loadUserInfo();
      }
    );
    console.log(this.authenticationService.logUser.id + ' Sending follow to ' + followed_id);
  }
  followedPopUp(){
    if(this.authenticationService.logUser && this.user){
      this.modalService.open(this.modalFollowed, {centered: true, size:'lg', windowClass: 'modal-cs'})
    }else{
      this.ruta.navigate(['login']);
    }    
  }

  followersPopUp(){
    if(this.authenticationService.logUser && this.user){
      this.modalService.open(this.modalFollowers, {centered: true, size:'lg', windowClass: 'modal-cs'})
    }else{
      this.ruta.navigate(['login']);
    }    
  }
  
  // Profile button check, called on init
  checkFollowStatus(followed:number) {   
    this.followService.checkFollow(followed,this.authenticationService.logUser.id).subscribe(follow_check => {
      this.follow_check = follow_check;
    }, error => console.error('error checking follow ' + error)); 
  }

  selfFollowCheck(id: number){
    if(id != this.authenticationService.logUser.id){
      return true;
    }else{
      return false;
    }
  }  
  // Follower status checking, will use auth user followers
  checkFollowedStatus(followed_id: number){
    if(this.self_followed_list.filter(user => (user.id === followed_id)).length > 0){
      return true;
    }else{
      return false;
    }
  }
  
  //
  selfFollowedList(){
    this.userService.getFolloweds(this.authenticationService.logUser.id).subscribe(self_followed_list => {
      this.self_followed_list = self_followed_list;
    }, error => console.error('Error retrieving the self followed list ' + error));
  }
}
