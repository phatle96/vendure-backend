import { Injectable } from '@angular/core';
import {NotificationService} from '@vendure/admin-ui/core'
import { ApolloClient, InMemoryCache, gql, HttpLink } from '@apollo/client';



@Injectable({ providedIn: 'root' })
export class AdminNotificationService {



    constructor(
        private notificationService: NotificationService
    ) {
        // setTargetOrigin('http://localhost:4200');
    }


    client = new ApolloClient({
        link: new HttpLink({
            uri: 'http://localhost:3000/admin-api',
        }),
        cache: new InMemoryCache(),
    });

    sendNotificationsQuery(ids: string[], message: string) {

        return gql`
        mutation {
            sendNotifications(userId: ${JSON.stringify(ids)}, message: ${JSON.stringify(message)})
            }
        `
    };


    async sendNotification(ids: string[], message: string) {
        try {
            await this.client.mutate({
                mutation: this.sendNotificationsQuery(ids, message),
            }).then(res => {
                if (res.data.sendNotifications) {
                    this.notificationService.success('Notification sent successfully')
                    console.log("🚀 ~ AdminNotificationService ~ sendNotification ~ result:", res)
                }
            })
        } catch (error) {
            console.error('Error sending notification:', error);
        }
    }

    async sendBulkNotification(selection, message: string) {

        if (selection.length < 100) {
            const usersSelected = selection.map((c) => { return c.id });
            console.log("🚀 ~ AdminNotificationService ~ sendBulkNotification ~ usersSelected:", usersSelected)
            this.sendNotification(usersSelected, message)
        }

    }

}
