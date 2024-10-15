import { compileUiExtensions } from '@vendure/ui-devkit/compiler';
import * as path from 'path';
import { CustomUiPlugin } from './plugins/custom-ui-plugin/custom-ui.plugin';

compileUiExtensions({
    outputPath: path.join(__dirname, '../admin-ui'),
    extensions: [
        CustomUiPlugin.ui
    ],
})
    .compile?.()
    .then(() => {
        process.exit(0);
    });