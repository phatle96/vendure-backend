import * as path from 'path';
import { PluginCommonModule, Type, VendurePlugin } from '@vendure/core';
import { AdminUiExtension } from '@vendure/ui-devkit/compiler';

@VendurePlugin({
    imports: [PluginCommonModule],
    compatibility: '^3.0.0',
})
export class CustomUiPlugin {

    static ui: AdminUiExtension = {
        id: 'custom-ui',
        extensionPath: path.join(__dirname, 'ui'),
        providers: ['providers.ts'],
    };
}