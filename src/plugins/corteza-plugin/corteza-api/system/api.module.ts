import { DynamicModule, Module, Global, Provider } from '@nestjs/common';
import { HttpModule, HttpService } from '@nestjs/axios';
import { AsyncConfiguration, Configuration, ConfigurationFactory } from './configuration';

import { ActionLogService } from './api/actionLog.service';
import { ApplicationsService } from './api/applications.service';
import { AttachmentsService } from './api/attachments.service';
import { AuthenticationService } from './api/authentication.service';
import { AuthenticationClientsService } from './api/authenticationClients.service';
import { DataAccessLayerConnectionsService } from './api/dataAccessLayerConnections.service';
import { DataAccessLayerDriversService } from './api/dataAccessLayerDrivers.service';
import { DataAccessLayerSensitivityLevelsService } from './api/dataAccessLayerSensitivityLevels.service';
import { DataPrivacyService } from './api/dataPrivacy.service';
import { DataPrivacyRequestService } from './api/dataPrivacyRequest.service';
import { DataPrivacyRequestCommentService } from './api/dataPrivacyRequestComment.service';
import { IntegrationGatewayFiltersService } from './api/integrationGatewayFilters.service';
import { IntegrationGatewayProfilerService } from './api/integrationGatewayProfiler.service';
import { IntegrationGatewayRoutesService } from './api/integrationGatewayRoutes.service';
import { LocaleService } from './api/locale.service';
import { MessagingQueuesService } from './api/messagingQueues.service';
import { PermissionsService } from './api/permissions.service';
import { RemindersService } from './api/reminders.service';
import { ReportsService } from './api/reports.service';
import { RolesService } from './api/roles.service';
import { SettingsService } from './api/settings.service';
import { StatisticsService } from './api/statistics.service';
import { SystemAutomationScriptsService } from './api/systemAutomationScripts.service';
import { TemplateService } from './api/template.service';
import { UsersService } from './api/users.service';

@Global()
@Module({
  imports:      [ HttpModule ],
  exports:      [
    ActionLogService,
    ApplicationsService,
    AttachmentsService,
    AuthenticationService,
    AuthenticationClientsService,
    DataAccessLayerConnectionsService,
    DataAccessLayerDriversService,
    DataAccessLayerSensitivityLevelsService,
    DataPrivacyService,
    DataPrivacyRequestService,
    DataPrivacyRequestCommentService,
    IntegrationGatewayFiltersService,
    IntegrationGatewayProfilerService,
    IntegrationGatewayRoutesService,
    LocaleService,
    MessagingQueuesService,
    PermissionsService,
    RemindersService,
    ReportsService,
    RolesService,
    SettingsService,
    StatisticsService,
    SystemAutomationScriptsService,
    TemplateService,
    UsersService
  ],
  providers: [
    ActionLogService,
    ApplicationsService,
    AttachmentsService,
    AuthenticationService,
    AuthenticationClientsService,
    DataAccessLayerConnectionsService,
    DataAccessLayerDriversService,
    DataAccessLayerSensitivityLevelsService,
    DataPrivacyService,
    DataPrivacyRequestService,
    DataPrivacyRequestCommentService,
    IntegrationGatewayFiltersService,
    IntegrationGatewayProfilerService,
    IntegrationGatewayRoutesService,
    LocaleService,
    MessagingQueuesService,
    PermissionsService,
    RemindersService,
    ReportsService,
    RolesService,
    SettingsService,
    StatisticsService,
    SystemAutomationScriptsService,
    TemplateService,
    UsersService
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
