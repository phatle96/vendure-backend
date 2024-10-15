import { PluginCommonModule, VendurePlugin } from '@vendure/core';
import { AdminNotiResolver } from './admin-noti.resolver';
import { adminNotiApiExtension } from './admin-noti-api';
import { AdminNotiService } from './admin-noti.service';

@VendurePlugin({
    imports: [PluginCommonModule],
    providers: [AdminNotiService],
    adminApiExtensions:{
        schema: adminNotiApiExtension,
        resolvers: [AdminNotiResolver],
    },
    compatibility: '^3.0.0',
})
export class AdminNotiPlugin {}