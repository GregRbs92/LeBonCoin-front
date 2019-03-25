import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { AdService } from 'src/app/services/ad.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-ad',
  templateUrl: './create-ad.component.html',
  styleUrls: ['../login/login.component.scss', './create-ad.component.scss']
})
export class CreateAdComponent implements OnInit {

  title = new FormControl('', Validators.required);
  content = new FormControl('', Validators.required);
  category = new FormControl('', Validators.required);

  form = new FormGroup({
    title: this.title,
    content: this.content,
    category: this.category
  });

  constructor(private adService: AdService, private router: Router) { }

  ngOnInit() {
    this.category.valueChanges.subscribe(category => {
      this.updateFormFields(category);
    });
  }

  createAd() {
    if (!this.form.valid) {
      alert('Invalid form');
      return;
    }

    this.adService.createAd(this.form.value).subscribe(ad => {
      this.router.navigateByUrl('/ads');
    });
  }

  private updateFormFields(category: string) {
    this.removeUnusedFormFields();
    let newControls = [];
    switch (category) {
      case 'job':
        newControls = ['contractType', 'salary'];
        break;
      case 'vehicle':
        newControls = ['fuelType', 'price'];
        break;
      case 'property':
        newControls = ['surface', 'price'];
        break;
      default:
        break;
    }

    newControls.forEach(control => {
      this.form.addControl(control, new FormControl('', Validators.required));
    });
  }

  private removeUnusedFormFields() {
    const controls = Object.keys(this.form.controls);
    controls.forEach(control => {
      if (control !== 'title' && control !== 'content' && control !== 'category') {
        this.form.removeControl(control);
      }
    });
  }
}
