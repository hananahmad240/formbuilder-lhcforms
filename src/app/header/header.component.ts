import { Component, OnInit, Input } from '@angular/core';
import { LoginService, UserProfile } from '../services/login.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'lfb-header',
  template: `
    <mat-toolbar id="header">
      <mat-icon id="logo" svgIcon="home" aria-label="Home"></mat-icon>
      <div id="siteNameBox">
        <a mat-button id="siteName" href="/">NLM Form Builder</a>
      </div>
      <div class="float-lg-right" *ngIf="isFirebaseEnabled">
        <div *ngIf="!isUserSignedIn">
          <button mat-button color="primary" (click)="showSignInDialog()">
            <button class="btn border-0 m-0 p-0" matTooltip="Login with OAuth authenticators">Sign in</button>
          </button>
        </div>
        <div *ngIf="isUserSignedIn">
          <span>{{userProfile.displayName}}</span>
          <button mat-button color="primary" (click)="signOut()">
            <button class="btn border-0 m-0 p-0"
                  [ngbTooltip]="userProfile.displayName + userProfile.email ? (' : ' + userProfile.email) : ''">Sign out</button>
          </button>
        </div>
        <div *ngIf="loginError">{{loginError.message}}</div>
      </div>
    </mat-toolbar>
  `,
  styles: [`
    #header {
      /* margin-bottom: 20px; */
      position: relative;
      /* font-size: 12px;*/
      font-family: 'Droid Sans', Arial, Helvetica, sans-serif;
      color: #202020;
      border-top: 2px solid #0BACB6;
      border-bottom: 7px solid #17b4e3;
      /*line-height: normal;*/
      height: 84px;
      background: transparent;
      align-items: center;
    }

    #header a {
      color: #1E4193;
      text-decoration: none;
    }

    #logo {
      float: left;
      width: 72px;
      height: 72px;
      margin: 0 20px 0 20px;
    }

    #logo {
      display: block;
    }

    #logo .site-name-slogan {
      font-size: 14px;
      position: relative;
      top: 10px;
      left: -2px;
    }

    #logo .site-name-slogan span {
      display: block;
      font-size: 24px;
      position: relative;
      left: -2px;
    }

    #logo .site-name-slogan .slogan {
      color: #202020;
      font-size: 12px;
      position: relative;
      left: 1px;
    }

    #siteNameBox {
      flex: 1 1 auto;
    }

    #siteName {
      font-size: 125%;
    }
  `]
})
export class HeaderComponent implements OnInit {

  userProfile: UserProfile = {};
  isUserSignedIn = false;
  @Input()
  isFirebaseEnabled = false;
  loginError: any = null;

  constructor(private loginService: LoginService,
              private iconRegistry: MatIconRegistry,
              private sanitizer: DomSanitizer) {
    // Register our icon(s)
    this.iconRegistry.addSvgIcon('home',
      this.sanitizer.bypassSecurityTrustResourceUrl('../../assets/images/lhncbc.svg'));
  }


  /**
   * Initialize login service
   */
  ngOnInit(): void {
    this.loginService.service().subscribe((loginEvent) => {
      if (loginEvent.event === 'signedIn') {
        this.userProfile = loginEvent.userProfile;
        this.isUserSignedIn = true;
      } else if (loginEvent.event === 'signedOut') {
        this.userProfile = {};
        this.isUserSignedIn = false;
      }
    });
  }


  /**
   * Logout
   */
  signOut() {
    this.loginService.logOut(this.userProfile);
  }

  showSignInDialog() {

  }

}
