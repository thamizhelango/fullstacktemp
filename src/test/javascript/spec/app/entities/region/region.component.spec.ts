/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { FullstacktempTestModule } from '../../../test.module';
import { RegionComponent } from '../../../../../../main/webapp/app/entities/region/region.component';
import { RegionService } from '../../../../../../main/webapp/app/entities/region/region.service';
import { Region } from '../../../../../../main/webapp/app/entities/region/region.model';

describe('Component Tests', () => {

    describe('Region Management Component', () => {
        let comp: RegionComponent;
        let fixture: ComponentFixture<RegionComponent>;
        let service: RegionService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [FullstacktempTestModule],
                declarations: [RegionComponent],
                providers: [
                    RegionService
                ]
            })
            .overrideTemplate(RegionComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(RegionComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(RegionService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN
                const headers = new HttpHeaders().append('link', 'link;link');
                spyOn(service, 'query').and.returnValue(Observable.of(new HttpResponse({
                    body: [new Region(123)],
                    headers
                })));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.query).toHaveBeenCalled();
                expect(comp.regions[0]).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
