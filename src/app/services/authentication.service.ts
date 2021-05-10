import { Injectable } from '@angular/core';
import { Platform, AlertController } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoadingService } from './loading.service';
import { ProviderService } from './provider.service';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  authenticationState = new BehaviorSubject(false);

  constructor(
    private storage: StorageService,
    private plt: Platform,
    private router: Router,
    private http: HttpClient,
    public alertCtrl: AlertController,
    public loadingSvc: LoadingService,
    private providerSvc: ProviderService
  ) {
    this.plt.ready().then(() => {
      this.ifLoggedIn();
    });
  }

  ifLoggedIn() {
    // Can be check Token
    this.storage.get('USER_INFO').then((res) => {
      if (res) {
        this.authenticationState.next(true);
      }
    });
  }

  login(email: string, password: string) {
    this.loadingSvc.presentLoading();
    const dataPost = new FormData();
    dataPost.append('inputemail', email);
    dataPost.append('inputpass', password);

    const url: string = this.providerSvc.loginURL;

    const data: Observable<any> = this.http.post(url, dataPost);

    data.subscribe((res) => {
      console.log(res);
      // eslint-disable-next-line eqeqeq
      if (res[0] == 0) {
        this.loadingSvc.dismissLoading();
        this.authenticationState.next(true);
        this.alertPopUp(
          'Attention',
          'Email & Password Incorrect!',
          'Try Again'
        );
      } else {
        this.loadingSvc.dismissLoading();
        return this.storage.set('USER_INFO', res).then((_) => {
          this.router.navigateByUrl('tabs/home');
          this.authenticationState.next(true);
        });
      }
    });
  }

  logout() {
    this.storage.remove('USER_INFO').then(() => {
      this.router.navigate(['login']);
      this.authenticationState.next(false);
    });
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }

  async alertPopUp(hdr: string, msg: string, btn: string) {
    const alert = await this.alertCtrl.create({
      header: hdr,
      subHeader: msg,
      buttons: [btn],
    });
    await alert.present();
  }
}
