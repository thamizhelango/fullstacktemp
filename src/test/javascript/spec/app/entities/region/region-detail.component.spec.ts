/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { FullstacktempTestModule } from '../../../test.module';
import { RegionDetailComponent } from '../../../../../../main/webapp/app/entities/region/region-detail.component';
import { RegionService } from '../../../../../../main/webapp/app/entities/region/region.service';
import { Region } from '../../../../../../main/webapp/app/entities/region/region.model';

describe('Component Tests', () => {

    describe('Region Management Detail Component', () => {
        let comp: RegionDetailComponent;
        let fixture: ComponentFixture<RegionDetailComponent>;
        let service: RegionService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [FullstacktempTestModule],
                declarations: [RegionDetailComponent],
                providers: [
                    RegionService
                ]
            })
            .overrideTemplate(RegionDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(RegionDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(RegionService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                spyOn(service, 'find').and.returnValue(Observable.of(new HttpResponse({
                    body: new Region(123)
                })));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.find).toHaveBeenCalledWith(123);
                expect(comp.region).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
