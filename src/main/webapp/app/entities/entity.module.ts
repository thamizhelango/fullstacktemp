import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { FullstacktempRegionModule } from './region/region.module';
import { FullstacktempCountryModule } from './country/country.module';
import { FullstacktempLocationModule } from './location/location.module';
import { FullstacktempDepartmentModule } from './department/department.module';
import { FullstacktempTaskModule } from './task/task.module';
import { FullstacktempEmployeeModule } from './employee/employee.module';
import { FullstacktempJobModule } from './job/job.module';
import { FullstacktempJobHistoryModule } from './job-history/job-history.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        FullstacktempRegionModule,
        FullstacktempCountryModule,
        FullstacktempLocationModule,
        FullstacktempDepartmentModule,
        FullstacktempTaskModule,
        FullstacktempEmployeeModule,
        FullstacktempJobModule,
        FullstacktempJobHistoryModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FullstacktempEntityModule {}
