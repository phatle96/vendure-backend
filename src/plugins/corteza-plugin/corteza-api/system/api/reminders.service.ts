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
import { SystemReminderPostRequest } from '../model/systemReminderPostRequest';
import { SystemReminderReminderIDSnoozePatchRequest } from '../model/systemReminderReminderIDSnoozePatchRequest';
import { Configuration } from '../configuration';
import { COLLECTION_FORMATS } from '../variables';


@Injectable()
export class RemindersService {

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
     * List/read reminders
     * 
     * @param reminderID Filter by reminder ID
     * @param resource Only reminders of a specific resource
     * @param assignedTo Only reminders for a given user
     * @param scheduledFrom Only reminders from this time (included)
     * @param scheduledUntil Only reminders up to this time (included)
     * @param scheduledOnly Only scheduled reminders
     * @param excludeDismissed Filter out dismissed reminders
     * @param includeDeleted Includes deleted reminders
     * @param limit Limit
     * @param pageCursor Page cursor
     * @param sort Sort items
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public systemReminderGet(reminderID?: Array<string>, resource?: string, assignedTo?: string, scheduledFrom?: string, scheduledUntil?: string, scheduledOnly?: boolean, excludeDismissed?: boolean, includeDeleted?: boolean, limit?: string, pageCursor?: string, sort?: string, ): Observable<AxiosResponse<any>>;
    public systemReminderGet(reminderID?: Array<string>, resource?: string, assignedTo?: string, scheduledFrom?: string, scheduledUntil?: string, scheduledOnly?: boolean, excludeDismissed?: boolean, includeDeleted?: boolean, limit?: string, pageCursor?: string, sort?: string, ): Observable<any> {
        let queryParameters = new URLSearchParams();
        if (reminderID) {
            reminderID.forEach((element) => {
                queryParameters.append('reminderID', <any>element);
            })
        }
        if (resource !== undefined && resource !== null) {
            queryParameters.append('resource', <any>resource);
        }
        if (assignedTo !== undefined && assignedTo !== null) {
            queryParameters.append('assignedTo', <any>assignedTo);
        }
        if (scheduledFrom !== undefined && scheduledFrom !== null) {
            queryParameters.append('scheduledFrom', (<any>scheduledFrom).toISOString());
        }
        if (scheduledUntil !== undefined && scheduledUntil !== null) {
            queryParameters.append('scheduledUntil', (<any>scheduledUntil).toISOString());
        }
        if (scheduledOnly !== undefined && scheduledOnly !== null) {
            queryParameters.append('scheduledOnly', <any>scheduledOnly);
        }
        if (excludeDismissed !== undefined && excludeDismissed !== null) {
            queryParameters.append('excludeDismissed', <any>excludeDismissed);
        }
        if (includeDeleted !== undefined && includeDeleted !== null) {
            queryParameters.append('includeDeleted', <any>includeDeleted);
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

                return this.httpClient.get<any>(`${this.basePath}/system/reminder/`,
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
     * Add new reminder
     * 
     * @param systemReminderPostRequest 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public systemReminderPost(systemReminderPostRequest?: SystemReminderPostRequest, ): Observable<AxiosResponse<any>>;
    public systemReminderPost(systemReminderPostRequest?: SystemReminderPostRequest, ): Observable<any> {
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

                return this.httpClient.post<any>(`${this.basePath}/system/reminder/`,
                    systemReminderPostRequest,
                    {
                        withCredentials: this.configuration.withCredentials,
                        headers: headers
                    }
                );
            })
        );
    }
    /**
     * Delete reminder
     * 
     * @param reminderID Reminder ID
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public systemReminderReminderIDDelete(reminderID: string, ): Observable<AxiosResponse<any>>;
    public systemReminderReminderIDDelete(reminderID: string, ): Observable<any> {
        if (reminderID === null || reminderID === undefined) {
            throw new Error('Required parameter reminderID was null or undefined when calling systemReminderReminderIDDelete.');
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

                return this.httpClient.delete<any>(`${this.basePath}/system/reminder/${encodeURIComponent(String(reminderID))}`,
                    {
                        withCredentials: this.configuration.withCredentials,
                        headers: headers
                    }
                );
            })
        );
    }
    /**
     * Dismiss reminder
     * 
     * @param reminderID reminder ID
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public systemReminderReminderIDDismissPatch(reminderID: string, ): Observable<AxiosResponse<any>>;
    public systemReminderReminderIDDismissPatch(reminderID: string, ): Observable<any> {
        if (reminderID === null || reminderID === undefined) {
            throw new Error('Required parameter reminderID was null or undefined when calling systemReminderReminderIDDismissPatch.');
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

                return this.httpClient.patch<any>(`${this.basePath}/system/reminder/${encodeURIComponent(String(reminderID))}/dismiss`,
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
     * Read reminder by ID
     * 
     * @param reminderID Reminder ID
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public systemReminderReminderIDGet(reminderID: string, ): Observable<AxiosResponse<any>>;
    public systemReminderReminderIDGet(reminderID: string, ): Observable<any> {
        if (reminderID === null || reminderID === undefined) {
            throw new Error('Required parameter reminderID was null or undefined when calling systemReminderReminderIDGet.');
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

                return this.httpClient.get<any>(`${this.basePath}/system/reminder/${encodeURIComponent(String(reminderID))}`,
                    {
                        withCredentials: this.configuration.withCredentials,
                        headers: headers
                    }
                );
            })
        );
    }
    /**
     * Update reminder
     * 
     * @param reminderID Reminder ID
     * @param systemReminderPostRequest 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public systemReminderReminderIDPut(reminderID: string, systemReminderPostRequest?: SystemReminderPostRequest, ): Observable<AxiosResponse<any>>;
    public systemReminderReminderIDPut(reminderID: string, systemReminderPostRequest?: SystemReminderPostRequest, ): Observable<any> {
        if (reminderID === null || reminderID === undefined) {
            throw new Error('Required parameter reminderID was null or undefined when calling systemReminderReminderIDPut.');
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

                return this.httpClient.put<any>(`${this.basePath}/system/reminder/${encodeURIComponent(String(reminderID))}`,
                    systemReminderPostRequest,
                    {
                        withCredentials: this.configuration.withCredentials,
                        headers: headers
                    }
                );
            })
        );
    }
    /**
     * Snooze reminder
     * 
     * @param reminderID reminder ID
     * @param systemReminderReminderIDSnoozePatchRequest 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public systemReminderReminderIDSnoozePatch(reminderID: string, systemReminderReminderIDSnoozePatchRequest?: SystemReminderReminderIDSnoozePatchRequest, ): Observable<AxiosResponse<any>>;
    public systemReminderReminderIDSnoozePatch(reminderID: string, systemReminderReminderIDSnoozePatchRequest?: SystemReminderReminderIDSnoozePatchRequest, ): Observable<any> {
        if (reminderID === null || reminderID === undefined) {
            throw new Error('Required parameter reminderID was null or undefined when calling systemReminderReminderIDSnoozePatch.');
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

                return this.httpClient.patch<any>(`${this.basePath}/system/reminder/${encodeURIComponent(String(reminderID))}/snooze`,
                    systemReminderReminderIDSnoozePatchRequest,
                    {
                        withCredentials: this.configuration.withCredentials,
                        headers: headers
                    }
                );
            })
        );
    }
}