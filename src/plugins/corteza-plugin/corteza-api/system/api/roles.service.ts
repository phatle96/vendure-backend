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
import { SystemRolesPostRequest } from '../model/systemRolesPostRequest';
import { SystemRolesPostRequest1 } from '../model/systemRolesPostRequest1';
import { SystemRolesRoleIDMergePostRequest } from '../model/systemRolesRoleIDMergePostRequest';
import { SystemRolesRoleIDMovePostRequest } from '../model/systemRolesRoleIDMovePostRequest';
import { SystemRolesRoleIDTriggerPostRequest } from '../model/systemRolesRoleIDTriggerPostRequest';
import { Configuration } from '../configuration';
import { COLLECTION_FORMATS } from '../variables';


@Injectable()
export class RolesService {

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
     * List roles
     * 
     * @param query Search query
     * @param memberID Search roles for member
     * @param deleted Exclude (0, default), include (1) or return only (2) deleted roles
     * @param archived Exclude (0, default), include (1) or return only (2) archived roles
     * @param labels Labels
     * @param limit Limit
     * @param incTotal Include total counter
     * @param pageCursor Page cursor
     * @param sort Sort items
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public systemRolesGet(query?: string, memberID?: string, deleted?: string, archived?: string, labels?: string, limit?: string, incTotal?: boolean, pageCursor?: string, sort?: string, ): Observable<AxiosResponse<any>>;
    public systemRolesGet(query?: string, memberID?: string, deleted?: string, archived?: string, labels?: string, limit?: string, incTotal?: boolean, pageCursor?: string, sort?: string, ): Observable<any> {
        let queryParameters = new URLSearchParams();
        if (query !== undefined && query !== null) {
            queryParameters.append('query', <any>query);
        }
        if (memberID !== undefined && memberID !== null) {
            queryParameters.append('memberID', <any>memberID);
        }
        if (deleted !== undefined && deleted !== null) {
            queryParameters.append('deleted', <any>deleted);
        }
        if (archived !== undefined && archived !== null) {
            queryParameters.append('archived', <any>archived);
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

                return this.httpClient.get<any>(`${this.basePath}/system/roles/`,
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
     * Update role details
     * 
     * @param systemRolesPostRequest 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public systemRolesPost(systemRolesPostRequest?: SystemRolesPostRequest, ): Observable<AxiosResponse<any>>;
    public systemRolesPost(systemRolesPostRequest?: SystemRolesPostRequest, ): Observable<any> {
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

                return this.httpClient.post<any>(`${this.basePath}/system/roles/`,
                    systemRolesPostRequest,
                    {
                        withCredentials: this.configuration.withCredentials,
                        headers: headers
                    }
                );
            })
        );
    }
    /**
     * Archive role
     * 
     * @param roleID Role ID
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public systemRolesRoleIDArchivePost(roleID: string, ): Observable<AxiosResponse<any>>;
    public systemRolesRoleIDArchivePost(roleID: string, ): Observable<any> {
        if (roleID === null || roleID === undefined) {
            throw new Error('Required parameter roleID was null or undefined when calling systemRolesRoleIDArchivePost.');
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

                return this.httpClient.post<any>(`${this.basePath}/system/roles/${encodeURIComponent(String(roleID))}/archive`,
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
     * Remove role
     * 
     * @param roleID Role ID
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public systemRolesRoleIDDelete(roleID: string, ): Observable<AxiosResponse<any>>;
    public systemRolesRoleIDDelete(roleID: string, ): Observable<any> {
        if (roleID === null || roleID === undefined) {
            throw new Error('Required parameter roleID was null or undefined when calling systemRolesRoleIDDelete.');
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

                return this.httpClient.delete<any>(`${this.basePath}/system/roles/${encodeURIComponent(String(roleID))}`,
                    {
                        withCredentials: this.configuration.withCredentials,
                        headers: headers
                    }
                );
            })
        );
    }
    /**
     * Read role details and memberships
     * 
     * @param roleID Role ID
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public systemRolesRoleIDGet(roleID: string, ): Observable<AxiosResponse<any>>;
    public systemRolesRoleIDGet(roleID: string, ): Observable<any> {
        if (roleID === null || roleID === undefined) {
            throw new Error('Required parameter roleID was null or undefined when calling systemRolesRoleIDGet.');
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

                return this.httpClient.get<any>(`${this.basePath}/system/roles/${encodeURIComponent(String(roleID))}`,
                    {
                        withCredentials: this.configuration.withCredentials,
                        headers: headers
                    }
                );
            })
        );
    }
    /**
     * Remove member from a role
     * 
     * @param roleID Source Role ID
     * @param userID User ID
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public systemRolesRoleIDMemberUserIDDelete(roleID: string, userID: string, ): Observable<AxiosResponse<any>>;
    public systemRolesRoleIDMemberUserIDDelete(roleID: string, userID: string, ): Observable<any> {
        if (roleID === null || roleID === undefined) {
            throw new Error('Required parameter roleID was null or undefined when calling systemRolesRoleIDMemberUserIDDelete.');
        }

        if (userID === null || userID === undefined) {
            throw new Error('Required parameter userID was null or undefined when calling systemRolesRoleIDMemberUserIDDelete.');
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

                return this.httpClient.delete<any>(`${this.basePath}/system/roles/${encodeURIComponent(String(roleID))}/member/${encodeURIComponent(String(userID))}`,
                    {
                        withCredentials: this.configuration.withCredentials,
                        headers: headers
                    }
                );
            })
        );
    }
    /**
     * Add member to a role
     * 
     * @param roleID Source Role ID
     * @param userID User ID
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public systemRolesRoleIDMemberUserIDPost(roleID: string, userID: string, ): Observable<AxiosResponse<any>>;
    public systemRolesRoleIDMemberUserIDPost(roleID: string, userID: string, ): Observable<any> {
        if (roleID === null || roleID === undefined) {
            throw new Error('Required parameter roleID was null or undefined when calling systemRolesRoleIDMemberUserIDPost.');
        }

        if (userID === null || userID === undefined) {
            throw new Error('Required parameter userID was null or undefined when calling systemRolesRoleIDMemberUserIDPost.');
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

                return this.httpClient.post<any>(`${this.basePath}/system/roles/${encodeURIComponent(String(roleID))}/member/${encodeURIComponent(String(userID))}`,
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
     * Returns all role members
     * 
     * @param roleID Source Role ID
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public systemRolesRoleIDMembersGet(roleID: string, ): Observable<AxiosResponse<any>>;
    public systemRolesRoleIDMembersGet(roleID: string, ): Observable<any> {
        if (roleID === null || roleID === undefined) {
            throw new Error('Required parameter roleID was null or undefined when calling systemRolesRoleIDMembersGet.');
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

                return this.httpClient.get<any>(`${this.basePath}/system/roles/${encodeURIComponent(String(roleID))}/members`,
                    {
                        withCredentials: this.configuration.withCredentials,
                        headers: headers
                    }
                );
            })
        );
    }
    /**
     * Merge one role into another
     * 
     * @param roleID Source Role ID
     * @param systemRolesRoleIDMergePostRequest 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public systemRolesRoleIDMergePost(roleID: string, systemRolesRoleIDMergePostRequest?: SystemRolesRoleIDMergePostRequest, ): Observable<AxiosResponse<any>>;
    public systemRolesRoleIDMergePost(roleID: string, systemRolesRoleIDMergePostRequest?: SystemRolesRoleIDMergePostRequest, ): Observable<any> {
        if (roleID === null || roleID === undefined) {
            throw new Error('Required parameter roleID was null or undefined when calling systemRolesRoleIDMergePost.');
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

                return this.httpClient.post<any>(`${this.basePath}/system/roles/${encodeURIComponent(String(roleID))}/merge`,
                    systemRolesRoleIDMergePostRequest,
                    {
                        withCredentials: this.configuration.withCredentials,
                        headers: headers
                    }
                );
            })
        );
    }
    /**
     * Move role to different organisation
     * 
     * @param roleID Role ID
     * @param systemRolesRoleIDMovePostRequest 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public systemRolesRoleIDMovePost(roleID: string, systemRolesRoleIDMovePostRequest?: SystemRolesRoleIDMovePostRequest, ): Observable<AxiosResponse<any>>;
    public systemRolesRoleIDMovePost(roleID: string, systemRolesRoleIDMovePostRequest?: SystemRolesRoleIDMovePostRequest, ): Observable<any> {
        if (roleID === null || roleID === undefined) {
            throw new Error('Required parameter roleID was null or undefined when calling systemRolesRoleIDMovePost.');
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

                return this.httpClient.post<any>(`${this.basePath}/system/roles/${encodeURIComponent(String(roleID))}/move`,
                    systemRolesRoleIDMovePostRequest,
                    {
                        withCredentials: this.configuration.withCredentials,
                        headers: headers
                    }
                );
            })
        );
    }
    /**
     * Update role details
     * 
     * @param roleID Role ID
     * @param systemRolesPostRequest1 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public systemRolesRoleIDPut(roleID: string, systemRolesPostRequest1?: SystemRolesPostRequest1, ): Observable<AxiosResponse<any>>;
    public systemRolesRoleIDPut(roleID: string, systemRolesPostRequest1?: SystemRolesPostRequest1, ): Observable<any> {
        if (roleID === null || roleID === undefined) {
            throw new Error('Required parameter roleID was null or undefined when calling systemRolesRoleIDPut.');
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

                return this.httpClient.put<any>(`${this.basePath}/system/roles/${encodeURIComponent(String(roleID))}`,
                    systemRolesPostRequest1,
                    {
                        withCredentials: this.configuration.withCredentials,
                        headers: headers
                    }
                );
            })
        );
    }
    /**
     * Clone permission settings to a role
     * 
     * @param roleID Role ID
     * @param cloneToRoleID Clone set of rules to roleID
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public systemRolesRoleIDRulesClonePost(roleID: string, cloneToRoleID: Array<string>, ): Observable<AxiosResponse<any>>;
    public systemRolesRoleIDRulesClonePost(roleID: string, cloneToRoleID: Array<string>, ): Observable<any> {
        if (roleID === null || roleID === undefined) {
            throw new Error('Required parameter roleID was null or undefined when calling systemRolesRoleIDRulesClonePost.');
        }

        if (cloneToRoleID === null || cloneToRoleID === undefined) {
            throw new Error('Required parameter cloneToRoleID was null or undefined when calling systemRolesRoleIDRulesClonePost.');
        }

        let queryParameters = new URLSearchParams();
        if (cloneToRoleID) {
            cloneToRoleID.forEach((element) => {
                queryParameters.append('cloneToRoleID', <any>element);
            })
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

                return this.httpClient.post<any>(`${this.basePath}/system/roles/${encodeURIComponent(String(roleID))}/rules/clone`,
                    null,
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
     * Fire system:role trigger
     * 
     * @param roleID ID
     * @param systemRolesRoleIDTriggerPostRequest 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public systemRolesRoleIDTriggerPost(roleID: string, systemRolesRoleIDTriggerPostRequest?: SystemRolesRoleIDTriggerPostRequest, ): Observable<AxiosResponse<any>>;
    public systemRolesRoleIDTriggerPost(roleID: string, systemRolesRoleIDTriggerPostRequest?: SystemRolesRoleIDTriggerPostRequest, ): Observable<any> {
        if (roleID === null || roleID === undefined) {
            throw new Error('Required parameter roleID was null or undefined when calling systemRolesRoleIDTriggerPost.');
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

                return this.httpClient.post<any>(`${this.basePath}/system/roles/${encodeURIComponent(String(roleID))}/trigger`,
                    systemRolesRoleIDTriggerPostRequest,
                    {
                        withCredentials: this.configuration.withCredentials,
                        headers: headers
                    }
                );
            })
        );
    }
    /**
     * Unarchive role
     * 
     * @param roleID Role ID
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public systemRolesRoleIDUnarchivePost(roleID: string, ): Observable<AxiosResponse<any>>;
    public systemRolesRoleIDUnarchivePost(roleID: string, ): Observable<any> {
        if (roleID === null || roleID === undefined) {
            throw new Error('Required parameter roleID was null or undefined when calling systemRolesRoleIDUnarchivePost.');
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

                return this.httpClient.post<any>(`${this.basePath}/system/roles/${encodeURIComponent(String(roleID))}/unarchive`,
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
     * Undelete role
     * 
     * @param roleID Role ID
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public systemRolesRoleIDUndeletePost(roleID: string, ): Observable<AxiosResponse<any>>;
    public systemRolesRoleIDUndeletePost(roleID: string, ): Observable<any> {
        if (roleID === null || roleID === undefined) {
            throw new Error('Required parameter roleID was null or undefined when calling systemRolesRoleIDUndeletePost.');
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

                return this.httpClient.post<any>(`${this.basePath}/system/roles/${encodeURIComponent(String(roleID))}/undelete`,
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
