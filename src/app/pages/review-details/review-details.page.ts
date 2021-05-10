/* eslint-disable eqeqeq */
import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProviderService } from 'src/app/services/provider.service';

@Component({
  selector: 'app-review-details',
  templateUrl: './review-details.page.html',
  styleUrls: ['./review-details.page.scss'],
})
export class ReviewDetailsPage implements OnInit {
  @Input() public doctorID: string;

  patientID: string;
  items: any;
  countReviews: any;
  rate: any;
  countVote: any;
  totalReviewRate: number;
  img: string;

  fivestar = 0;
  fourstar = 0;
  threestar = 0;
  twostar = 0;
  onestar = 0;
  constructor(public modalCtrl: ModalController,
              private providerSvc: ProviderService) { }



  ngOnInit() {
    this.getDoctorReview();

    this.img = this.providerSvc.emptyURL;
  }

  getDoctorReview() {
    const postData = JSON.stringify({
      doctorID: this.doctorID
    });

    this.providerSvc.postData('review-details.php', postData).subscribe(data => {
      if (data != null) {
        this.items = data;
        this.countReviews = Object.keys(this.items).length;

        let totalRate = 0;

        let onecount = 0;
        let twocount = 0;
        let threecount = 0;
        let fourcount = 0;
        let fivecount = 0;

        for (let i = 0; i < this.countReviews; i++) {
          this.rate = parseInt(data[i].rating, 10);

          if (this.rate == 5) {
            fivecount++;
          } else if (this.rate == 4) {
            fourcount++;
          } else if (this.rate == 3){
            threecount++;
          } else if (this.rate == 2){
            twocount++;
          } else if (this.rate == 1){
            onecount++;
          }
          totalRate += parseInt(this.rate, 10);
        }

        this.fivestar = Math.round((fivecount / this.countReviews) * 100) / 100;
        this.fourstar = Math.round((fourcount / this.countReviews) * 100) / 100;
        this.threestar = Math.round((threecount / this.countReviews) * 100) / 100;
        this.twostar = Math.round((twocount / this.countReviews) * 100) / 100;
        this.onestar = Math.round((onecount / this.countReviews) * 100) / 100;

        const roundTotal = (5*fivecount + 4*fourcount + 3* threecount + 2*twocount + 1*onecount) / this.countReviews;
        this.totalReviewRate = Math.round( roundTotal * 10 ) / 10;
      } else {
        console.log('No Data Available');
      }
    }, error => {
      console.log(error);
    });
  }

  async closeModal() {
    await this.modalCtrl.dismiss();
  }

}
