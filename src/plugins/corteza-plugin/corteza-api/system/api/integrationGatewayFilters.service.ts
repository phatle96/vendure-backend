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
import { SystemApigwFilterPutRequest } from '../model/systemApigwFilterPutRequest';
import { Configuration } from '../configuration';
import { COLLECTION_FORMATS } from '../variables';


@Injectable()
export class IntegrationGatewayFiltersService {

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
     * Filter definitions
     * 
     * @param kind Filter filters by kind
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public systemApigwFilterDefGet(kind?: string, ): Observable<AxiosResponse<any>>;
    public systemApigwFilterDefGet(kind?: string, ): Observable<any> {
        let queryParameters = new URLSearchParams();
        if (kind !== undefined && kind !== null) {
            queryParameters.append('kind', <any>kind);
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

                return this.httpClient.get<any>(`${this.basePath}/system/apigw/filter/def`,
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
     * Remove filter
     * 
     * @param filterID Filter ID
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public systemApigwFilterFilterIDDelete(filterID: string, ): Observable<AxiosResponse<any>>;
    public systemApigwFilterFilterIDDelete(filterID: string, ): Observable<any> {
        if (filterID === null || filterID === undefined) {
            throw new Error('Required parameter filterID was null or undefined when calling systemApigwFilterFilterIDDelete.');
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

                return this.httpClient.delete<any>(`${this.basePath}/system/apigw/filter/${encodeURIComponent(String(filterID))}`,
                    {
                        withCredentials: this.configuration.withCredentials,
                        headers: headers
                    }
                );
            })
        );
    }
    /**
     * Read filter details
     * 
     * @param filterID Filter ID
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public systemApigwFilterFilterIDGet(filterID: string, ): Observable<AxiosResponse<any>>;
    public systemApigwFilterFilterIDGet(filterID: string, ): Observable<any> {
        if (filterID === null || filterID === undefined) {
            throw new Error('Required parameter filterID was null or undefined when calling systemApigwFilterFilterIDGet.');
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

                return this.httpClient.get<any>(`${this.basePath}/system/apigw/filter/${encodeURIComponent(String(filterID))}`,
                    {
                        withCredentials: this.configuration.withCredentials,
                        headers: headers
                    }
                );
            })
        );
    }
    /**
     * Update filter details
     * 
     * @param filterID Filter ID
     * @param systemApigwFilterPutRequest 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public systemApigwFilterFilterIDPost(filterID: string, systemApigwFilterPutRequest?: SystemApigwFilterPutRequest, ): Observable<AxiosResponse<any>>;
    public systemApigwFilterFilterIDPost(filterID: string, systemApigwFilterPutRequest?: SystemApigwFilterPutRequest, ): Observable<any> {
        if (filterID === null || filterID === undefined) {
            throw new Error('Required parameter filterID was null or undefined when calling systemApigwFilterFilterIDPost.');
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

                return this.httpClient.post<any>(`${this.basePath}/system/apigw/filter/${encodeURIComponent(String(filterID))}`,
                    systemApigwFilterPutRequest,
                    {
                        withCredentials: this.configuration.withCredentials,
                        headers: headers
                    }
                );
            })
        );
    }
    /**
     * Undelete filter
     * 
     * @param filterID Filter ID
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public systemApigwFilterFilterIDUndeletePost(filterID: string, ): Observable<AxiosResponse<any>>;
    public systemApigwFilterFilterIDUndeletePost(filterID: string, ): Observable<any> {
        if (filterID === null || filterID === undefined) {
            throw new Error('Required parameter filterID was null or undefined when calling systemApigwFilterFilterIDUndeletePost.');
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

                return this.httpClient.post<any>(`${this.basePath}/system/apigw/filter/${encodeURIComponent(String(filterID))}/undelete`,
                    null,
                    {
                        withCredentials: this.configuration.withCredentials,
                        headers: headers
                    }
                );
            })
        );
    }
    /**
     * List filters
     * 
     * @param routeID Filter by route ID
     * @param deleted Exclude (0, default), include (1) or return only (2) deleted filters
     * @param disabled Exclude (0, default), include (1) or return only (2) disabled filters
     * @param limit Limit
     * @param pageCursor Page cursor
     * @param sort Sort items
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public systemApigwFilterGet(routeID: string, deleted?: string, disabled?: string, limit?: string, pageCursor?: string, sort?: string, ): Observable<AxiosResponse<any>>;
    public systemApigwFilterGet(routeID: string, deleted?: string, disabled?: string, limit?: string, pageCursor?: string, sort?: string, ): Observable<any> {
        if (routeID === null || routeID === undefined) {
            throw new Error('Required parameter routeID was null or undefined when calling systemApigwFilterGet.');
        }

        let queryParameters = new URLSearchParams();
        if (routeID !== undefined && routeID !== null) {
            queryParameters.append('routeID', <any>routeID);
        }
        if (deleted !== undefined && deleted !== null) {
            queryParameters.append('deleted', <any>deleted);
        }
        if (disabled !== undefined && disabled !== null) {
            queryParameters.append('disabled', <any>disabled);
        }
        if (limit !== undefined && limit !== null) {
            queryParameters.append('limit', <any>limit);
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

                return this.httpClient.get<any>(`${this.basePath}/system/apigw/filter/`,
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
     * Proxy auth definitions
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public systemApigwFilterProxyAuthDefGet(): Observable<AxiosResponse<any>>;
    public systemApigwFilterProxyAuthDefGet(): Observable<any> {
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

                return this.httpClient.get<any>(`${this.basePath}/system/apigw/filter/proxy_auth/def`,
                    {
                        withCredentials: this.configuration.withCredentials,
                        headers: headers
                    }
                );
            })
        );
    }
    /**
     * Create filter
     * 
     * @param systemApigwFilterPutRequest 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public systemApigwFilterPut(systemApigwFilterPutRequest?: SystemApigwFilterPutRequest, ): Observable<AxiosResponse<any>>;
    public systemApigwFilterPut(systemApigwFilterPutRequest?: SystemApigwFilterPutRequest, ): Observable<any> {
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

                return this.httpClient.put<any>(`${this.basePath}/system/apigw/filter`,
                    systemApigwFilterPutRequest,
                    {
                        withCredentials: this.configuration.withCredentials,
                        headers: headers
                    }
                );
            })
        );
    }
}
