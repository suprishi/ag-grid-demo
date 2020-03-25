import 'hammerjs';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { LicenseManager } from 'ag-grid-enterprise';

if (environment.production) {
  enableProdMode();
}

// tslint:disable-next-line:max-line-length
LicenseManager.setLicenseKey('SoftwareONE_Deutschland_on_behalf_of_Kuehne_+_Nagel_(AG_&_Co.)_KG_KN_Freightnet_FCL_Intra_Asia_3Devs_1Deployment_25_October_2020__MTYwMzU4MDQwMDAwMA==01b5b6ecfafd4ff2de6c2c0a726121af');

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
