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
import { Configuration } from '../configuration';
import { COLLECTION_FORMATS } from '../variables';


@Injectable()
export class AttachmentsService {

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
     * Delete attachment
     * 
     * @param kind Kind
     * @param attachmentID Attachment ID
     * @param sign Signature
     * @param userID User ID
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public systemAttachmentKindAttachmentIDDelete(kind: string, attachmentID: string, sign?: string, userID?: string, ): Observable<AxiosResponse<any>>;
    public systemAttachmentKindAttachmentIDDelete(kind: string, attachmentID: string, sign?: string, userID?: string, ): Observable<any> {
        if (kind === null || kind === undefined) {
            throw new Error('Required parameter kind was null or undefined when calling systemAttachmentKindAttachmentIDDelete.');
        }

        if (attachmentID === null || attachmentID === undefined) {
            throw new Error('Required parameter attachmentID was null or undefined when calling systemAttachmentKindAttachmentIDDelete.');
        }

        let queryParameters = new URLSearchParams();
        if (sign !== undefined && sign !== null) {
            queryParameters.append('sign', <any>sign);
        }
        if (userID !== undefined && userID !== null) {
            queryParameters.append('userID', <any>userID);
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

                return this.httpClient.delete<any>(`${this.basePath}/system/attachment/${encodeURIComponent(String(kind))}/${encodeURIComponent(String(attachmentID))}`,
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
     * Attachment details
     * 
     * @param kind Kind
     * @param attachmentID Attachment ID
     * @param sign Signature
     * @param userID User ID
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public systemAttachmentKindAttachmentIDGet(kind: string, attachmentID: string, sign?: string, userID?: string, ): Observable<AxiosResponse<any>>;
    public systemAttachmentKindAttachmentIDGet(kind: string, attachmentID: string, sign?: string, userID?: string, ): Observable<any> {
        if (kind === null || kind === undefined) {
            throw new Error('Required parameter kind was null or undefined when calling systemAttachmentKindAttachmentIDGet.');
        }

        if (attachmentID === null || attachmentID === undefined) {
            throw new Error('Required parameter attachmentID was null or undefined when calling systemAttachmentKindAttachmentIDGet.');
        }

        let queryParameters = new URLSearchParams();
        if (sign !== undefined && sign !== null) {
            queryParameters.append('sign', <any>sign);
        }
        if (userID !== undefined && userID !== null) {
            queryParameters.append('userID', <any>userID);
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

                return this.httpClient.get<any>(`${this.basePath}/system/attachment/${encodeURIComponent(String(kind))}/${encodeURIComponent(String(attachmentID))}`,
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
     * Serves attached file
     * 
     * @param kind Kind
     * @param attachmentID Attachment ID
     * @param name File name
     * @param sign Signature
     * @param userID User ID
     * @param download Force file download
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public systemAttachmentKindAttachmentIDOriginalNameGet(kind: string, attachmentID: string, name: string, sign?: string, userID?: string, download?: boolean, ): Observable<AxiosResponse<any>>;
    public systemAttachmentKindAttachmentIDOriginalNameGet(kind: string, attachmentID: string, name: string, sign?: string, userID?: string, download?: boolean, ): Observable<any> {
        if (kind === null || kind === undefined) {
            throw new Error('Required parameter kind was null or undefined when calling systemAttachmentKindAttachmentIDOriginalNameGet.');
        }

        if (attachmentID === null || attachmentID === undefined) {
            throw new Error('Required parameter attachmentID was null or undefined when calling systemAttachmentKindAttachmentIDOriginalNameGet.');
        }

        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling systemAttachmentKindAttachmentIDOriginalNameGet.');
        }

        let queryParameters = new URLSearchParams();
        if (sign !== undefined && sign !== null) {
            queryParameters.append('sign', <any>sign);
        }
        if (userID !== undefined && userID !== null) {
            queryParameters.append('userID', <any>userID);
        }
        if (download !== undefined && download !== null) {
            queryParameters.append('download', <any>download);
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

                return this.httpClient.get<any>(`${this.basePath}/system/attachment/${encodeURIComponent(String(kind))}/${encodeURIComponent(String(attachmentID))}/original/${encodeURIComponent(String(name))}`,
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
     * Serves preview of an attached file
     * 
     * @param kind Kind
     * @param attachmentID Attachment ID
     * @param ext Preview extension/format
     * @param sign Signature
     * @param userID User ID
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public systemAttachmentKindAttachmentIDPreviewExtGet(kind: string, attachmentID: string, ext: string, sign?: string, userID?: string, ): Observable<AxiosResponse<any>>;
    public systemAttachmentKindAttachmentIDPreviewExtGet(kind: string, attachmentID: string, ext: string, sign?: string, userID?: string, ): Observable<any> {
        if (kind === null || kind === undefined) {
            throw new Error('Required parameter kind was null or undefined when calling systemAttachmentKindAttachmentIDPreviewExtGet.');
        }

        if (attachmentID === null || attachmentID === undefined) {
            throw new Error('Required parameter attachmentID was null or undefined when calling systemAttachmentKindAttachmentIDPreviewExtGet.');
        }

        if (ext === null || ext === undefined) {
            throw new Error('Required parameter ext was null or undefined when calling systemAttachmentKindAttachmentIDPreviewExtGet.');
        }

        let queryParameters = new URLSearchParams();
        if (sign !== undefined && sign !== null) {
            queryParameters.append('sign', <any>sign);
        }
        if (userID !== undefined && userID !== null) {
            queryParameters.append('userID', <any>userID);
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

                return this.httpClient.get<any>(`${this.basePath}/system/attachment/${encodeURIComponent(String(kind))}/${encodeURIComponent(String(attachmentID))}/preview.${encodeURIComponent(String(ext))}`,
                    {
                        params: queryParameters,
                        withCredentials: this.configuration.withCredentials,
                        headers: headers
                    }
                );
            })
        );
    }
}
