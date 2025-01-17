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
import { ComposeNamespaceNamespaceIDModuleModuleIDRecordPostRequestValuesInner } from './composeNamespaceNamespaceIDModuleModuleIDRecordPostRequestValuesInner';


export interface ComposeNamespaceNamespaceIDModuleModuleIDRecordPostRequestRecordsInner { 
    recordID?: string;
    moduleID?: string;
    namespaceID?: string;
    values?: Array<ComposeNamespaceNamespaceIDModuleModuleIDRecordPostRequestValuesInner>;
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: string;
    ownedBy?: string;
    createdBy?: string;
    updatedBy?: string;
    deletedBy?: string;
}

