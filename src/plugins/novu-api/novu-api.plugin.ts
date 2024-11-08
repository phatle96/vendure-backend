import { PluginCommonModule, Type, VendurePlugin } from '@vendure/core';

import { NOVU_API_PLUGIN_OPTIONS } from './constants';
import { PluginInitOptions } from './types';
import { NovuApiService } from './services/novu-api.service';
import { NovuApiResolver } from './api/novu-api.resolver';
import { apiExtensions } from './api/api-extensions';

@VendurePlugin({
    imports: [PluginCommonModule],
    providers: [{ provide: NOVU_API_PLUGIN_OPTIONS, useFactory: () => NovuApiPlugin.options }, NovuApiService],
    configuration: config => {
        // Plugin-specific configuration
        // such as custom fields, custom permissions,
        // strategies etc. can be configured here by
        // modifying the `config` object.
        return config;
    },
    compatibility: '^3.0.0',
    // adminApiExtensions: {
    //     schema: apiExtensions,
    //     resolvers: [NovuApiResolver]
    // },
    shopApiExtensions: {
        schema: apiExtensions,
        resolvers: [NovuApiResolver]
    }
})
export class NovuApiPlugin {
    static options: PluginInitOptions;

    static init(options: PluginInitOptions): Type<NovuApiPlugin> {
        this.options = options;
        return NovuApiPlugin;
    }
}
