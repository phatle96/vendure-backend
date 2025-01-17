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


export interface SystemUsersPostRequest { 
    /**
     * Email
     */
    email: string;
    /**
     * Name
     */
    name?: string;
    /**
     * Handle
     */
    handle?: string;
    /**
     * Kind (normal, bot)
     */
    kind?: string;
    /**
     * Labels
     */
    labels?: string;
}

