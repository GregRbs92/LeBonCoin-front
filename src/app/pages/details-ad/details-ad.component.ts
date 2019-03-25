import { Component, OnInit } from '@angular/core';
import { Ad } from 'src/app/interface/Ad';
import { ActivatedRoute } from '@angular/router';
import { AdService } from 'src/app/services/ad.service';

@Component({
  selector: 'app-details-ad',
  templateUrl: './details-ad.component.html',
  styleUrls: ['./details-ad.component.scss']
})
export class DetailsAdComponent implements OnInit {

  ad: Ad;

  constructor(
    private route: ActivatedRoute,
    private adService: AdService
  ) { }

  ngOnInit() {
    const adId = +this.route.snapshot.paramMap.get('id');
    this.adService.getAd(adId)
    .subscribe(ad => this.ad = ad);
  }

  getIcon() {
    const category = this.ad.category.name;
    return category === 'job'
    ? 'fas fa-suitcase'
    : category === 'vehicle'
    ? 'fas fa-car'
    : category === 'property'
    ? 'fas fa-home'
    : 'fas fa-ad';
  }
}
