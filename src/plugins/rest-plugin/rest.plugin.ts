
import { PluginCommonModule, VendurePlugin } from '@vendure/core';
import { AdminNotificationsController } from './admin-notification.controller';

@VendurePlugin({
  imports: [PluginCommonModule],
  controllers: [AdminNotificationsController],
  compatibility: '^3.0.0',
})
export class RestPlugin {}