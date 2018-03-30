import { Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { RegionComponent } from './region.component';
import { RegionDetailComponent } from './region-detail.component';
import { RegionPopupComponent } from './region-dialog.component';
import { RegionDeletePopupComponent } from './region-delete-dialog.component';

export const regionRoute: Routes = [
    {
        path: 'region',
        component: RegionComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'fullstacktempApp.region.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'region/:id',
        component: RegionDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'fullstacktempApp.region.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const regionPopupRoute: Routes = [
    {
        path: 'region-new',
        component: RegionPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'fullstacktempApp.region.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'region/:id/edit',
        component: RegionPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'fullstacktempApp.region.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'region/:id/delete',
        component: RegionDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'fullstacktempApp.region.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
