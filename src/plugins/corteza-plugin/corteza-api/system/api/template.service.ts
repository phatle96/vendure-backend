/**
 * Corteza system API
 * Corteza system REST API definition
 *
 * The version of the OpenAPI document: 2022.9
 * Contact: info@cortezaproject.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Injectable, Optional } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Observable, from, of, switchMap } from 'rxjs';
import { SystemTemplatePostRequest } from '../model/systemTemplatePostRequest';
import { SystemTemplateTemplateIDRenderFilenameExtPostRequest } from '../model/systemTemplateTemplateIDRenderFilenameExtPostRequest';
import { Configuration } from '../configuration';
import { COLLECTION_FORMATS } from '../variables';


@Injectable()
export class TemplateService {

    protected basePath = 'http://localhost';
    public defaultHeaders: Record<string,string> = {};
    public configuration = new Configuration();
    protected httpClient: HttpService;

    constructor(httpClient: HttpService, @Optional() configuration: Configuration) {
        this.configuration = configuration || this.configuration;
        this.basePath = configuration?.basePath || this.basePath;
        this.httpClient = configuration?.httpClient || httpClient;
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        return consumes.includes(form);
    }

    /**
     * List templates
     * 
     * @param query Query
     * @param handle Handle
     * @param type Type
     * @param ownerID OwnerID
     * @param partial Show partial templates
     * @param deleted Exclude (0, default), include (1) or return only (2) deleted templates
     * @param labels Labels
     * @param limit Limit
     * @param incTotal Include total counter
     * @param pageCursor Page cursor
     * @param sort Sort items
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public systemTemplateGet(query?: string, handle?: string, type?: string, ownerID?: string, partial?: boolean, deleted?: string, labels?: string, limit?: string, incTotal?: boolean, pageCursor?: string, sort?: string, ): Observable<AxiosResponse<any>>;
    public systemTemplateGet(query?: string, handle?: string, type?: string, ownerID?: string, partial?: boolean, deleted?: string, labels?: string, limit?: string, incTotal?: boolean, pageCursor?: string, sort?: string, ): Observable<any> {
        let queryParameters = new URLSearchParams();
        if (query !== undefined && query !== null) {
            queryParameters.append('query', <any>query);
        }
        if (handle !== undefined && handle !== null) {
            queryParameters.append('handle', <any>handle);
        }
        if (type !== undefined && type !== null) {
            queryParameters.append('type', <any>type);
        }
        if (ownerID !== undefined && ownerID !== null) {
            queryParameters.append('ownerID', <any>ownerID);
        }
        if (partial !== undefined && partial !== null) {
            queryParameters.append('partial', <any>partial);
        }
        if (deleted !== undefined && deleted !== null) {
            queryParameters.append('deleted', <any>deleted);
        }
        if (labels !== undefined && labels !== null) {
            queryParameters.append('labels', <any>labels);
        }
        if (limit !== undefined && limit !== null) {
            queryParameters.append('limit', <any>limit);
        }
        if (incTotal !== undefined && incTotal !== null) {
            queryParameters.append('incTotal', <any>incTotal);
        }
        if (pageCursor !== undefined && pageCursor !== null) {
            queryParameters.append('pageCursor', <any>pageCursor);
        }
        if (sort !== undefined && sort !== null) {
            queryParameters.append('sort', <any>sort);
        }

        let headers = {...this.defaultHeaders};

        let accessTokenObservable: Observable<any> = of(null);

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers['Accept'] = httpHeaderAcceptSelected;
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];
        return accessTokenObservable.pipe(
            switchMap((accessToken) => {
                if (accessToken) {
                    headers['Authorization'] = `Bearer ${accessToken}`;
                }

                return this.httpClient.get<any>(`${this.basePath}/system/template/`,
                    {
                        params: queryParameters,
                        withCredentials: this.configuration.withCredentials,
                        headers: headers
                    }
                );
            })
        );
    }
    /**
     * Create template
     * 
     * @param systemTemplatePostRequest 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public systemTemplatePost(systemTemplatePostRequest?: SystemTemplatePostRequest, ): Observable<AxiosResponse<any>>;
    public systemTemplatePost(systemTemplatePostRequest?: SystemTemplatePostRequest, ): Observable<any> {
        let headers = {...this.defaultHeaders};

        let accessTokenObservable: Observable<any> = of(null);

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers['Accept'] = httpHeaderAcceptSelected;
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json',
            'application/x-www-form-urlencoded'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers['Content-Type'] = httpContentTypeSelected;
        }
        return accessTokenObservable.pipe(
            switchMap((accessToken) => {
                if (accessToken) {
                    headers['Authorization'] = `Bearer ${accessToken}`;
                }

                return this.httpClient.post<any>(`${this.basePath}/system/template/`,
                    systemTemplatePostRequest,
                    {
                        withCredentials: this.configuration.withCredentials,
                        headers: headers
                    }
                );
            })
        );
    }
    /**
     * Render drivers
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public systemTemplateRenderDriversGet(): Observable<AxiosResponse<any>>;
    public systemTemplateRenderDriversGet(): Observable<any> {
        let headers = {...this.defaultHeaders};

        let accessTokenObservable: Observable<any> = of(null);

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers['Accept'] = httpHeaderAcceptSelected;
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];
        return accessTokenObservable.pipe(
            switchMap((accessToken) => {
                if (accessToken) {
                    headers['Authorization'] = `Bearer ${accessToken}`;
                }

                return this.httpClient.get<any>(`${this.basePath}/system/template/render/drivers`,
                    {
                        withCredentials: this.configuration.withCredentials,
                        headers: headers
                    }
                );
            })
        );
    }
    /**
     * Delete template
     * 
     * @param templateID ID
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public systemTemplateTemplateIDDelete(templateID: string, ): Observable<AxiosResponse<any>>;
    public systemTemplateTemplateIDDelete(templateID: string, ): Observable<any> {
        if (templateID === null || templateID === undefined) {
            throw new Error('Required parameter templateID was null or undefined when calling systemTemplateTemplateIDDelete.');
        }

        let headers = {...this.defaultHeaders};

        let accessTokenObservable: Observable<any> = of(null);

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers['Accept'] = httpHeaderAcceptSelected;
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];
        return accessTokenObservable.pipe(
            switchMap((accessToken) => {
                if (accessToken) {
                    headers['Authorization'] = `Bearer ${accessToken}`;
                }

                return this.httpClient.delete<any>(`${this.basePath}/system/template/${encodeURIComponent(String(templateID))}`,
                    {
                        withCredentials: this.configuration.withCredentials,
                        headers: headers
                    }
                );
            })
        );
    }
    /**
     * Read template
     * 
     * @param templateID ID
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public systemTemplateTemplateIDGet(templateID: string, ): Observable<AxiosResponse<any>>;
    public systemTemplateTemplateIDGet(templateID: string, ): Observable<any> {
        if (templateID === null || templateID === undefined) {
            throw new Error('Required parameter templateID was null or undefined when calling systemTemplateTemplateIDGet.');
        }

        let headers = {...this.defaultHeaders};

        let accessTokenObservable: Observable<any> = of(null);

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers['Accept'] = httpHeaderAcceptSelected;
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];
        return accessTokenObservable.pipe(
            switchMap((accessToken) => {
                if (accessToken) {
                    headers['Authorization'] = `Bearer ${accessToken}`;
                }

                return this.httpClient.get<any>(`${this.basePath}/system/template/${encodeURIComponent(String(templateID))}`,
                    {
                        withCredentials: this.configuration.withCredentials,
                        headers: headers
                    }
                );
            })
        );
    }
    /**
     * Update template
     * 
     * @param templateID ID
     * @param systemTemplatePostRequest 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public systemTemplateTemplateIDPut(templateID: string, systemTemplatePostRequest?: SystemTemplatePostRequest, ): Observable<AxiosResponse<any>>;
    public systemTemplateTemplateIDPut(templateID: string, systemTemplatePostRequest?: SystemTemplatePostRequest, ): Observable<any> {
        if (templateID === null || templateID === undefined) {
            throw new Error('Required parameter templateID was null or undefined when calling systemTemplateTemplateIDPut.');
        }

        let headers = {...this.defaultHeaders};

        let accessTokenObservable: Observable<any> = of(null);

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers['Accept'] = httpHeaderAcceptSelected;
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json',
            'application/x-www-form-urlencoded'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers['Content-Type'] = httpContentTypeSelected;
        }
        return accessTokenObservable.pipe(
            switchMap((accessToken) => {
                if (accessToken) {
                    headers['Authorization'] = `Bearer ${accessToken}`;
                }

                return this.httpClient.put<any>(`${this.basePath}/system/template/${encodeURIComponent(String(templateID))}`,
                    systemTemplatePostRequest,
                    {
                        withCredentials: this.configuration.withCredentials,
                        headers: headers
                    }
                );
            })
        );
    }
    /**
     * Render template
     * 
     * @param templateID Render template to use
     * @param filename Filename to use
     * @param ext Export format
     * @param systemTemplateTemplateIDRenderFilenameExtPostRequest 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public systemTemplateTemplateIDRenderFilenameExtPost(templateID: string, filename: string, ext: string, systemTemplateTemplateIDRenderFilenameExtPostRequest?: SystemTemplateTemplateIDRenderFilenameExtPostRequest, ): Observable<AxiosResponse<any>>;
    public systemTemplateTemplateIDRenderFilenameExtPost(templateID: string, filename: string, ext: string, systemTemplateTemplateIDRenderFilenameExtPostRequest?: SystemTemplateTemplateIDRenderFilenameExtPostRequest, ): Observable<any> {
        if (templateID === null || templateID === undefined) {
            throw new Error('Required parameter templateID was null or undefined when calling systemTemplateTemplateIDRenderFilenameExtPost.');
        }

        if (filename === null || filename === undefined) {
            throw new Error('Required parameter filename was null or undefined when calling systemTemplateTemplateIDRenderFilenameExtPost.');
        }

        if (ext === null || ext === undefined) {
            throw new Error('Required parameter ext was null or undefined when calling systemTemplateTemplateIDRenderFilenameExtPost.');
        }

        let headers = {...this.defaultHeaders};

        let accessTokenObservable: Observable<any> = of(null);

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers['Accept'] = httpHeaderAcceptSelected;
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json',
            'application/x-www-form-urlencoded'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers['Content-Type'] = httpContentTypeSelected;
        }
        return accessTokenObservable.pipe(
            switchMap((accessToken) => {
                if (accessToken) {
                    headers['Authorization'] = `Bearer ${accessToken}`;
                }

                return this.httpClient.post<any>(`${this.basePath}/system/template/${encodeURIComponent(String(templateID))}/render/${encodeURIComponent(String(filename))}.${encodeURIComponent(String(ext))}`,
                    systemTemplateTemplateIDRenderFilenameExtPostRequest,
                    {
                        withCredentials: this.configuration.withCredentials,
                        headers: headers
                    }
                );
            })
        );
    }
    /**
     * Undelete template
     * 
     * @param templateID Template ID
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public systemTemplateTemplateIDUndeletePost(templateID: string, ): Observable<AxiosResponse<any>>;
    public systemTemplateTemplateIDUndeletePost(templateID: string, ): Observable<any> {
        if (templateID === null || templateID === undefined) {
            throw new Error('Required parameter templateID was null or undefined when calling systemTemplateTemplateIDUndeletePost.');
        }

        let headers = {...this.defaultHeaders};

        let accessTokenObservable: Observable<any> = of(null);

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers['Accept'] = httpHeaderAcceptSelected;
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];
        return accessTokenObservable.pipe(
            switchMap((accessToken) => {
                if (accessToken) {
                    headers['Authorization'] = `Bearer ${accessToken}`;
                }

                return this.httpClient.post<any>(`${this.basePath}/system/template/${encodeURIComponent(String(templateID))}/undelete`,
                    null,
                    {
                        withCredentials: this.configuration.withCredentials,
                        headers: headers
                    }
                );
            })
        );
    }
}
