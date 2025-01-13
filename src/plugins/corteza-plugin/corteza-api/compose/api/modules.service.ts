/**
 * Corteza compose API
 * Corteza compose REST API definition
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
import { ComposeNamespaceNamespaceIDModuleModuleIDPostRequest } from '../model/composeNamespaceNamespaceIDModuleModuleIDPostRequest';
import { ComposeNamespaceNamespaceIDModulePostRequest } from '../model/composeNamespaceNamespaceIDModulePostRequest';
import { ComposeNamespaceNamespaceIDTranslationPatchRequest } from '../model/composeNamespaceNamespaceIDTranslationPatchRequest';
import { ComposeNamespaceNamespaceIDTriggerPostRequest } from '../model/composeNamespaceNamespaceIDTriggerPostRequest';
import { Configuration } from '../configuration';
import { COLLECTION_FORMATS } from '../variables';


@Injectable()
export class ModulesService {

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
     * List modules
     * 
     * @param namespaceID Namespace ID
     * @param query Search query
     * @param name Search by name
     * @param handle Search by handle
     * @param limit Limit
     * @param incTotal Include total counter
     * @param pageCursor Page cursor
     * @param labels Labels
     * @param sort Sort items
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public composeNamespaceNamespaceIDModuleGet(namespaceID: string, query?: string, name?: string, handle?: string, limit?: string, incTotal?: boolean, pageCursor?: string, labels?: string, sort?: string, ): Observable<AxiosResponse<any>>;
    public composeNamespaceNamespaceIDModuleGet(namespaceID: string, query?: string, name?: string, handle?: string, limit?: string, incTotal?: boolean, pageCursor?: string, labels?: string, sort?: string, ): Observable<any> {
        if (namespaceID === null || namespaceID === undefined) {
            throw new Error('Required parameter namespaceID was null or undefined when calling composeNamespaceNamespaceIDModuleGet.');
        }

        let queryParameters = new URLSearchParams();
        if (query !== undefined && query !== null) {
            queryParameters.append('query', <any>query);
        }
        if (name !== undefined && name !== null) {
            queryParameters.append('name', <any>name);
        }
        if (handle !== undefined && handle !== null) {
            queryParameters.append('handle', <any>handle);
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
        if (labels !== undefined && labels !== null) {
            queryParameters.append('labels', <any>labels);
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

                return this.httpClient.get<any>(`${this.basePath}/compose/namespace/${encodeURIComponent(String(namespaceID))}/module/`,
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
     * Delete module
     * 
     * @param namespaceID Namespace ID
     * @param moduleID Module ID
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public composeNamespaceNamespaceIDModuleModuleIDDelete(namespaceID: string, moduleID: string, ): Observable<AxiosResponse<any>>;
    public composeNamespaceNamespaceIDModuleModuleIDDelete(namespaceID: string, moduleID: string, ): Observable<any> {
        if (namespaceID === null || namespaceID === undefined) {
            throw new Error('Required parameter namespaceID was null or undefined when calling composeNamespaceNamespaceIDModuleModuleIDDelete.');
        }

        if (moduleID === null || moduleID === undefined) {
            throw new Error('Required parameter moduleID was null or undefined when calling composeNamespaceNamespaceIDModuleModuleIDDelete.');
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

                return this.httpClient.delete<any>(`${this.basePath}/compose/namespace/${encodeURIComponent(String(namespaceID))}/module/${encodeURIComponent(String(moduleID))}`,
                    {
                        withCredentials: this.configuration.withCredentials,
                        headers: headers
                    }
                );
            })
        );
    }
    /**
     * Read module
     * 
     * @param namespaceID Namespace ID
     * @param moduleID Module ID
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public composeNamespaceNamespaceIDModuleModuleIDGet(namespaceID: string, moduleID: string, ): Observable<AxiosResponse<any>>;
    public composeNamespaceNamespaceIDModuleModuleIDGet(namespaceID: string, moduleID: string, ): Observable<any> {
        if (namespaceID === null || namespaceID === undefined) {
            throw new Error('Required parameter namespaceID was null or undefined when calling composeNamespaceNamespaceIDModuleModuleIDGet.');
        }

        if (moduleID === null || moduleID === undefined) {
            throw new Error('Required parameter moduleID was null or undefined when calling composeNamespaceNamespaceIDModuleModuleIDGet.');
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

                return this.httpClient.get<any>(`${this.basePath}/compose/namespace/${encodeURIComponent(String(namespaceID))}/module/${encodeURIComponent(String(moduleID))}`,
                    {
                        withCredentials: this.configuration.withCredentials,
                        headers: headers
                    }
                );
            })
        );
    }
    /**
     * Update module
     * 
     * @param namespaceID Namespace ID
     * @param moduleID Module ID
     * @param composeNamespaceNamespaceIDModuleModuleIDPostRequest 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public composeNamespaceNamespaceIDModuleModuleIDPost(namespaceID: string, moduleID: string, composeNamespaceNamespaceIDModuleModuleIDPostRequest?: ComposeNamespaceNamespaceIDModuleModuleIDPostRequest, ): Observable<AxiosResponse<any>>;
    public composeNamespaceNamespaceIDModuleModuleIDPost(namespaceID: string, moduleID: string, composeNamespaceNamespaceIDModuleModuleIDPostRequest?: ComposeNamespaceNamespaceIDModuleModuleIDPostRequest, ): Observable<any> {
        if (namespaceID === null || namespaceID === undefined) {
            throw new Error('Required parameter namespaceID was null or undefined when calling composeNamespaceNamespaceIDModuleModuleIDPost.');
        }

        if (moduleID === null || moduleID === undefined) {
            throw new Error('Required parameter moduleID was null or undefined when calling composeNamespaceNamespaceIDModuleModuleIDPost.');
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

                return this.httpClient.post<any>(`${this.basePath}/compose/namespace/${encodeURIComponent(String(namespaceID))}/module/${encodeURIComponent(String(moduleID))}`,
                    composeNamespaceNamespaceIDModuleModuleIDPostRequest,
                    {
                        withCredentials: this.configuration.withCredentials,
                        headers: headers
                    }
                );
            })
        );
    }
    /**
     * List moudle translation
     * 
     * @param namespaceID Namespace ID
     * @param moduleID ID
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public composeNamespaceNamespaceIDModuleModuleIDTranslationGet(namespaceID: string, moduleID: string, ): Observable<AxiosResponse<any>>;
    public composeNamespaceNamespaceIDModuleModuleIDTranslationGet(namespaceID: string, moduleID: string, ): Observable<any> {
        if (namespaceID === null || namespaceID === undefined) {
            throw new Error('Required parameter namespaceID was null or undefined when calling composeNamespaceNamespaceIDModuleModuleIDTranslationGet.');
        }

        if (moduleID === null || moduleID === undefined) {
            throw new Error('Required parameter moduleID was null or undefined when calling composeNamespaceNamespaceIDModuleModuleIDTranslationGet.');
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

                return this.httpClient.get<any>(`${this.basePath}/compose/namespace/${encodeURIComponent(String(namespaceID))}/module/${encodeURIComponent(String(moduleID))}/translation`,
                    {
                        withCredentials: this.configuration.withCredentials,
                        headers: headers
                    }
                );
            })
        );
    }
    /**
     * Update module translation
     * 
     * @param namespaceID Namespace ID
     * @param moduleID ID
     * @param composeNamespaceNamespaceIDTranslationPatchRequest 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public composeNamespaceNamespaceIDModuleModuleIDTranslationPatch(namespaceID: string, moduleID: string, composeNamespaceNamespaceIDTranslationPatchRequest?: ComposeNamespaceNamespaceIDTranslationPatchRequest, ): Observable<AxiosResponse<any>>;
    public composeNamespaceNamespaceIDModuleModuleIDTranslationPatch(namespaceID: string, moduleID: string, composeNamespaceNamespaceIDTranslationPatchRequest?: ComposeNamespaceNamespaceIDTranslationPatchRequest, ): Observable<any> {
        if (namespaceID === null || namespaceID === undefined) {
            throw new Error('Required parameter namespaceID was null or undefined when calling composeNamespaceNamespaceIDModuleModuleIDTranslationPatch.');
        }

        if (moduleID === null || moduleID === undefined) {
            throw new Error('Required parameter moduleID was null or undefined when calling composeNamespaceNamespaceIDModuleModuleIDTranslationPatch.');
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

                return this.httpClient.patch<any>(`${this.basePath}/compose/namespace/${encodeURIComponent(String(namespaceID))}/module/${encodeURIComponent(String(moduleID))}/translation`,
                    composeNamespaceNamespaceIDTranslationPatchRequest,
                    {
                        withCredentials: this.configuration.withCredentials,
                        headers: headers
                    }
                );
            })
        );
    }
    /**
     * Fire compose:module trigger
     * 
     * @param namespaceID Namespace ID
     * @param moduleID ID
     * @param composeNamespaceNamespaceIDTriggerPostRequest 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public composeNamespaceNamespaceIDModuleModuleIDTriggerPost(namespaceID: string, moduleID: string, composeNamespaceNamespaceIDTriggerPostRequest?: ComposeNamespaceNamespaceIDTriggerPostRequest, ): Observable<AxiosResponse<any>>;
    public composeNamespaceNamespaceIDModuleModuleIDTriggerPost(namespaceID: string, moduleID: string, composeNamespaceNamespaceIDTriggerPostRequest?: ComposeNamespaceNamespaceIDTriggerPostRequest, ): Observable<any> {
        if (namespaceID === null || namespaceID === undefined) {
            throw new Error('Required parameter namespaceID was null or undefined when calling composeNamespaceNamespaceIDModuleModuleIDTriggerPost.');
        }

        if (moduleID === null || moduleID === undefined) {
            throw new Error('Required parameter moduleID was null or undefined when calling composeNamespaceNamespaceIDModuleModuleIDTriggerPost.');
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

                return this.httpClient.post<any>(`${this.basePath}/compose/namespace/${encodeURIComponent(String(namespaceID))}/module/${encodeURIComponent(String(moduleID))}/trigger`,
                    composeNamespaceNamespaceIDTriggerPostRequest,
                    {
                        withCredentials: this.configuration.withCredentials,
                        headers: headers
                    }
                );
            })
        );
    }
    /**
     * Create module
     * 
     * @param namespaceID Namespace ID
     * @param composeNamespaceNamespaceIDModulePostRequest 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public composeNamespaceNamespaceIDModulePost(namespaceID: string, composeNamespaceNamespaceIDModulePostRequest?: ComposeNamespaceNamespaceIDModulePostRequest, ): Observable<AxiosResponse<any>>;
    public composeNamespaceNamespaceIDModulePost(namespaceID: string, composeNamespaceNamespaceIDModulePostRequest?: ComposeNamespaceNamespaceIDModulePostRequest, ): Observable<any> {
        if (namespaceID === null || namespaceID === undefined) {
            throw new Error('Required parameter namespaceID was null or undefined when calling composeNamespaceNamespaceIDModulePost.');
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

                return this.httpClient.post<any>(`${this.basePath}/compose/namespace/${encodeURIComponent(String(namespaceID))}/module/`,
                    composeNamespaceNamespaceIDModulePostRequest,
                    {
                        withCredentials: this.configuration.withCredentials,
                        headers: headers
                    }
                );
            })
        );
    }
}