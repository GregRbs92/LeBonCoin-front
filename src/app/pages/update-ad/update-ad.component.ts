import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { AdService } from 'src/app/services/ad.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Ad } from 'src/app/interface/Ad';

@Component({
  selector: 'app-update-ad',
  templateUrl: './update-ad.component.html',
  styleUrls: ['../login/login.component.scss', './update-ad.component.scss']
})
export class UpdateAdComponent implements OnInit {

  ad: Ad;
  form: FormGroup;

  constructor(
    private adService: AdService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const adId = +this.route.snapshot.paramMap.get('id');
    this.adService.getAd(adId)
    .subscribe(ad => {
      this.ad = ad;
      this.prefillForm();
    });
  }

  updateAd() {
    if (!this.form.valid) {
      alert('Invalid form');
    }

    this.adService.updateAd(this.ad.id, this.form.value)
    .subscribe(() => this.router.navigateByUrl('/ads'));
  }

  private prefillForm() {
    this.form = new FormGroup({
      title: new FormControl(this.ad.title, Validators.required),
      content: new FormControl(this.ad.content, Validators.required)
    });

    switch (this.ad.category.name) {
      case 'job':
        this.form.addControl('contractType', new FormControl(this.ad.contractType));
        this.form.addControl('salary', new FormControl(this.ad.salary));
        break;
      case 'vehicle':
        this.form.addControl('fuelType', new FormControl(this.ad.fuelType));
        this.form.addControl('price', new FormControl(this.ad.price));
        break;
      case 'property':
        this.form.addControl('surface', new FormControl(this.ad.surface));
        this.form.addControl('price', new FormControl(this.ad.price));
        break;
      default:
        break;
    }
  }
}
