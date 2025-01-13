import { DynamicModule, Module, Global, Provider } from '@nestjs/common';
import { HttpModule, HttpService } from '@nestjs/axios';
import { AsyncConfiguration, Configuration, ConfigurationFactory } from './configuration';

import { AttachmentsService } from './api/attachments.service';
import { ChartsService } from './api/charts.service';
import { ComposeAutomationScriptsService } from './api/composeAutomationScripts.service';
import { DataPrivacyService } from './api/dataPrivacy.service';
import { ModulesService } from './api/modules.service';
import { NamespacesService } from './api/namespaces.service';
import { NotificationsService } from './api/notifications.service';
import { PagesService } from './api/pages.service';
import { PermissionsService } from './api/permissions.service';
import { RecordsService } from './api/records.service';

@Global()
@Module({
  imports:      [ HttpModule ],
  exports:      [
    AttachmentsService,
    ChartsService,
    ComposeAutomationScriptsService,
    DataPrivacyService,
    ModulesService,
    NamespacesService,
    NotificationsService,
    PagesService,
    PermissionsService,
    RecordsService
  ],
  providers: [
    AttachmentsService,
    ChartsService,
    ComposeAutomationScriptsService,
    DataPrivacyService,
    ModulesService,
    NamespacesService,
    NotificationsService,
    PagesService,
    PermissionsService,
    RecordsService
  ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): DynamicModule {
        return {
            module: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    /**
     * Register the module asynchronously.
     */
    static forRootAsync(options: AsyncConfiguration): DynamicModule {
        const providers = [...this.createAsyncProviders(options)];
        return {
            module: ApiModule,
            imports: options.imports || [],
            providers,
            exports: providers,
        };
    }

    private static createAsyncProviders(options: AsyncConfiguration): Provider[] {
        if (options.useClass) {
            return [
                this.createAsyncConfigurationProvider(options),
                {
                    provide: options.useClass,
                    useClass: options.useClass,
                },
            ];
        }
        return [this.createAsyncConfigurationProvider(options)];
    }

    private static createAsyncConfigurationProvider(
        options: AsyncConfiguration,
    ): Provider {
        if (options.useFactory) {
            return {
                provide: Configuration,
                useFactory: options.useFactory,
                inject: options.inject || [],
            };
        }
        return {
            provide: Configuration,
            useFactory: async (optionsFactory: ConfigurationFactory) =>
                await optionsFactory.createConfiguration(),
            inject: (options.useExisting && [options.useExisting]) || (options.useClass && [options.useClass]) || [],
        };
    }

    constructor( httpService: HttpService) { }
}
