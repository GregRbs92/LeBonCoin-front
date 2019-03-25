import { Component, OnInit } from '@angular/core';
import { AdService } from 'src/app/services/ad.service';
import { Ad } from 'src/app/interface/Ad';

@Component({
  selector: 'app-list-ads',
  templateUrl: './list-ads.component.html',
  styleUrls: ['./list-ads.component.scss']
})
export class ListAdsComponent implements OnInit {

  ads: Ad[] = [];

  constructor(private adService: AdService) { }

  ngOnInit() {
    this.adService.getAds()
    .subscribe(ads => this.ads = ads);
  }

  deleteAd(id: number) {
    this.adService.deleteAd(id)
    .subscribe(ads => this.ads = ads);
  }
}
