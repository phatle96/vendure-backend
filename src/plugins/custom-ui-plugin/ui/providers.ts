import { addActionBarItem, ModalService, registerBulkAction } from '@vendure/admin-ui/core';
import { AdminNotificationService } from './ui-service/admin-notification.service';
import { CustomDialog } from './components/custom-dialog/custom-dialog.component';

export default [
    AdminNotificationService,
    registerBulkAction({
        location: 'customer-list',
        label: 'Send Notification',
        icon: 'chat-bubble',
        onClick: ({ injector, selection }) => {
            const modalService = injector.get(ModalService);
            const notificationService = injector.get(AdminNotificationService);
            modalService.fromComponent(CustomDialog, { size: 'md', closable: true, verticalAlign: 'center' })
                .subscribe(response => {
                    if (response) {
                        console.log("🚀 ~ response:", response)
                        notificationService.sendBulkNotification(selection, response);
                    }
                })
        },
    }),
];