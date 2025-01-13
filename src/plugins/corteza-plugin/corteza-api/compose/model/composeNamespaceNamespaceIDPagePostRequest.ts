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


export interface ComposeNamespaceNamespaceIDPagePostRequest { 
    /**
     * Parent Page ID
     */
    selfID?: string;
    /**
     * Module ID
     */
    moduleID?: string;
    /**
     * Title
     */
    title: string;
    /**
     * Handle
     */
    handle?: string;
    /**
     * Description
     */
    description?: string;
    /**
     * Page tree weight
     */
    weight?: number;
    /**
     * Labels
     */
    labels?: string;
    /**
     * Visible in navigation
     */
    visible?: boolean;
    /**
     * Blocks JSON
     */
    blocks?: string;
    /**
     * Config JSON
     */
    config?: string;
}
