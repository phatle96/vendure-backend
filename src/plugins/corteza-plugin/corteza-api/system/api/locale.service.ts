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
import { SystemLocaleResourcePostRequest } from '../model/systemLocaleResourcePostRequest';
import { SystemLocaleResourcePostRequest1 } from '../model/systemLocaleResourcePostRequest1';
import { Configuration } from '../configuration';
import { COLLECTION_FORMATS } from '../variables';


@Injectable()
export class LocaleService {

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
     * List all available languages
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public systemLocaleGet(): Observable<AxiosResponse<any>>;
    public systemLocaleGet(): Observable<any> {
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

                return this.httpClient.get<any>(`${this.basePath}/system/locale/`,
                    {
                        withCredentials: this.configuration.withCredentials,
                        headers: headers
                    }
                );
            })
        );
    }
    /**
     * List all available translation in a language for a specific webapp
     * 
     * @param lang Language
     * @param application Application name
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public systemLocaleLangApplicationGet(lang: string, application: string, ): Observable<AxiosResponse<any>>;
    public systemLocaleLangApplicationGet(lang: string, application: string, ): Observable<any> {
        if (lang === null || lang === undefined) {
            throw new Error('Required parameter lang was null or undefined when calling systemLocaleLangApplicationGet.');
        }

        if (application === null || application === undefined) {
            throw new Error('Required parameter application was null or undefined when calling systemLocaleLangApplicationGet.');
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

                return this.httpClient.get<any>(`${this.basePath}/system/locale/${encodeURIComponent(String(lang))}/${encodeURIComponent(String(application))}`,
                    {
                        withCredentials: this.configuration.withCredentials,
                        headers: headers
                    }
                );
            })
        );
    }
    /**
     * List resources translations
     * 
     * @param lang Language
     * @param resource Resource
     * @param resourceType Resource type
     * @param ownerID OwnerID
     * @param deleted Exclude (0, default), include (1) or return only (2) deleted resource translations
     * @param limit Limit
     * @param pageCursor Page cursor
     * @param sort Sort items
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public systemLocaleResourceGet(lang?: string, resource?: string, resourceType?: string, ownerID?: string, deleted?: string, limit?: string, pageCursor?: string, sort?: string, ): Observable<AxiosResponse<any>>;
    public systemLocaleResourceGet(lang?: string, resource?: string, resourceType?: string, ownerID?: string, deleted?: string, limit?: string, pageCursor?: string, sort?: string, ): Observable<any> {
        let queryParameters = new URLSearchParams();
        if (lang !== undefined && lang !== null) {
            queryParameters.append('lang', <any>lang);
        }
        if (resource !== undefined && resource !== null) {
            queryParameters.append('resource', <any>resource);
        }
        if (resourceType !== undefined && resourceType !== null) {
            queryParameters.append('resourceType', <any>resourceType);
        }
        if (ownerID !== undefined && ownerID !== null) {
            queryParameters.append('ownerID', <any>ownerID);
        }
        if (deleted !== undefined && deleted !== null) {
            queryParameters.append('deleted', <any>deleted);
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

                return this.httpClient.get<any>(`${this.basePath}/system/locale/resource`,
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
     * Create resource translation
     * 
     * @param systemLocaleResourcePostRequest 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public systemLocaleResourcePost(systemLocaleResourcePostRequest?: SystemLocaleResourcePostRequest, ): Observable<AxiosResponse<any>>;
    public systemLocaleResourcePost(systemLocaleResourcePostRequest?: SystemLocaleResourcePostRequest, ): Observable<any> {
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

                return this.httpClient.post<any>(`${this.basePath}/system/locale/resource`,
                    systemLocaleResourcePostRequest,
                    {
                        withCredentials: this.configuration.withCredentials,
                        headers: headers
                    }
                );
            })
        );
    }
    /**
     * Remove resource translation
     * 
     * @param translationID ID
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public systemLocaleResourceTranslationIDDelete(translationID: string, ): Observable<AxiosResponse<any>>;
    public systemLocaleResourceTranslationIDDelete(translationID: string, ): Observable<any> {
        if (translationID === null || translationID === undefined) {
            throw new Error('Required parameter translationID was null or undefined when calling systemLocaleResourceTranslationIDDelete.');
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

                return this.httpClient.delete<any>(`${this.basePath}/system/locale/resource/${encodeURIComponent(String(translationID))}`,
                    {
                        withCredentials: this.configuration.withCredentials,
                        headers: headers
                    }
                );
            })
        );
    }
    /**
     * Read resource translation details
     * 
     * @param translationID ID
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public systemLocaleResourceTranslationIDGet(translationID: string, ): Observable<AxiosResponse<any>>;
    public systemLocaleResourceTranslationIDGet(translationID: string, ): Observable<any> {
        if (translationID === null || translationID === undefined) {
            throw new Error('Required parameter translationID was null or undefined when calling systemLocaleResourceTranslationIDGet.');
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

                return this.httpClient.get<any>(`${this.basePath}/system/locale/resource/${encodeURIComponent(String(translationID))}`,
                    {
                        withCredentials: this.configuration.withCredentials,
                        headers: headers
                    }
                );
            })
        );
    }
    /**
     * Update resource translation
     * 
     * @param translationID ID
     * @param systemLocaleResourcePostRequest1 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public systemLocaleResourceTranslationIDPut(translationID: string, systemLocaleResourcePostRequest1?: SystemLocaleResourcePostRequest1, ): Observable<AxiosResponse<any>>;
    public systemLocaleResourceTranslationIDPut(translationID: string, systemLocaleResourcePostRequest1?: SystemLocaleResourcePostRequest1, ): Observable<any> {
        if (translationID === null || translationID === undefined) {
            throw new Error('Required parameter translationID was null or undefined when calling systemLocaleResourceTranslationIDPut.');
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

                return this.httpClient.put<any>(`${this.basePath}/system/locale/resource/${encodeURIComponent(String(translationID))}`,
                    systemLocaleResourcePostRequest1,
                    {
                        withCredentials: this.configuration.withCredentials,
                        headers: headers
                    }
                );
            })
        );
    }
    /**
     * Undelete resource translation
     * 
     * @param translationID ID
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public systemLocaleResourceTranslationIDUndeletePost(translationID: string, ): Observable<AxiosResponse<any>>;
    public systemLocaleResourceTranslationIDUndeletePost(translationID: string, ): Observable<any> {
        if (translationID === null || translationID === undefined) {
            throw new Error('Required parameter translationID was null or undefined when calling systemLocaleResourceTranslationIDUndeletePost.');
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

                return this.httpClient.post<any>(`${this.basePath}/system/locale/resource/${encodeURIComponent(String(translationID))}/undelete`,
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
