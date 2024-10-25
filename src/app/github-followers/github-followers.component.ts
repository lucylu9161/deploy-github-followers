import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { GithubFollowersService } from './github-followers.service';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css'],
})
export class GithubFollowersComponent implements OnInit {
  followers: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private service: GithubFollowersService
  ) {}

  ngOnInit() {
    combineLatest([this.route.paramMap, this.route.queryParamMap])
      .pipe(
        switchMap(([paramMap, queryParamMap]) => {
          const id = paramMap.get('id');
          const page = queryParamMap.get('page');
          return this.service.getFollowers();
        })
      )
      .subscribe((followers: any) => (this.followers = followers));
  }
}
