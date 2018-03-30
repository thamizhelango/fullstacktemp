import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SERVER_API_URL } from '../../app.constants';

import { Job } from './job.model';
import { createRequestOption } from '../../shared';

export type EntityResponseType = HttpResponse<Job>;

@Injectable()
export class JobService {

    private resourceUrl =  SERVER_API_URL + 'api/jobs';

    constructor(private http: HttpClient) { }

    create(job: Job): Observable<EntityResponseType> {
        const copy = this.convert(job);
        return this.http.post<Job>(this.resourceUrl, copy, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    update(job: Job): Observable<EntityResponseType> {
        const copy = this.convert(job);
        return this.http.put<Job>(this.resourceUrl, copy, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<Job>(`${this.resourceUrl}/${id}`, { observe: 'response'})
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    query(req?: any): Observable<HttpResponse<Job[]>> {
        const options = createRequestOption(req);
        return this.http.get<Job[]>(this.resourceUrl, { params: options, observe: 'response' })
            .map((res: HttpResponse<Job[]>) => this.convertArrayResponse(res));
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response'});
    }

    private convertResponse(res: EntityResponseType): EntityResponseType {
        const body: Job = this.convertItemFromServer(res.body);
        return res.clone({body});
    }

    private convertArrayResponse(res: HttpResponse<Job[]>): HttpResponse<Job[]> {
        const jsonResponse: Job[] = res.body;
        const body: Job[] = [];
        for (let i = 0; i < jsonResponse.length; i++) {
            body.push(this.convertItemFromServer(jsonResponse[i]));
        }
        return res.clone({body});
    }

    /**
     * Convert a returned JSON object to Job.
     */
    private convertItemFromServer(job: Job): Job {
        const copy: Job = Object.assign({}, job);
        return copy;
    }

    /**
     * Convert a Job to a JSON which can be sent to the server.
     */
    private convert(job: Job): Job {
        const copy: Job = Object.assign({}, job);
        return copy;
    }
}
