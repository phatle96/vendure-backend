import { PluginCommonModule, VendurePlugin } from '@vendure/core';
import { RestForCortezaController } from './rest-for-corteza.controller';

@VendurePlugin({
  imports: [PluginCommonModule],
  controllers: [RestForCortezaController],
})
export class RestForCortezaPlugin {}