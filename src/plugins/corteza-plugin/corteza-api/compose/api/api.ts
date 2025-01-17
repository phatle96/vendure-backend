export * from './attachments.service';
import { AttachmentsService } from './attachments.service';
export * from './charts.service';
import { ChartsService } from './charts.service';
export * from './composeAutomationScripts.service';
import { ComposeAutomationScriptsService } from './composeAutomationScripts.service';
export * from './dataPrivacy.service';
import { DataPrivacyService } from './dataPrivacy.service';
export * from './modules.service';
import { ModulesService } from './modules.service';
export * from './namespaces.service';
import { NamespacesService } from './namespaces.service';
export * from './notifications.service';
import { NotificationsService } from './notifications.service';
export * from './pages.service';
import { PagesService } from './pages.service';
export * from './permissions.service';
import { PermissionsService } from './permissions.service';
export * from './records.service';
import { RecordsService } from './records.service';
export const APIS = [AttachmentsService, ChartsService, ComposeAutomationScriptsService, DataPrivacyService, ModulesService, NamespacesService, NotificationsService, PagesService, PermissionsService, RecordsService];
