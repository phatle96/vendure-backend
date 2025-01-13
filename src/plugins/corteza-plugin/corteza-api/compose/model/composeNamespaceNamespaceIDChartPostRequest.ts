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


export interface ComposeNamespaceNamespaceIDChartPostRequest { 
    /**
     * Chart JSON
     */
    config: string;
    /**
     * Chart name
     */
    name: string;
    /**
     * Chart handle
     */
    handle?: string;
    /**
     * Labels
     */
    labels?: string;
}

