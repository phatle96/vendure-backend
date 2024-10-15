import { PluginCommonModule, VendurePlugin } from '@vendure/core';
import { CustomProductService } from './services/custom-product.service';
import { customProductApiExtension } from './api/custom-product-api';
import { CustomProductResolver } from './api/custom-product.resolver';

@VendurePlugin({
    imports: [PluginCommonModule],
    providers: [CustomProductService],
    shopApiExtensions:{
        schema: customProductApiExtension,
        resolvers: [CustomProductResolver],
    },
    compatibility: '^3.0.0',
})
export class CustomProductPlugin {}