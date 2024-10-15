import { Injectable } from '@nestjs/common';
import { IBulkEvents, Novu } from '@novu/node';
import { ID, ProductVariant, RequestContext, TransactionalConnection } from '@vendure/core';

@Injectable()
export class AdminNotiService {

    constructor(
        private connection: TransactionalConnection,
    ) { }

    novu = new Novu(process.env.NOVU_API_KEY || '');


    async sendNotifications(userId: string[], message: string) {

        const payload: IBulkEvents[] = []

        userId.forEach((id) => {
            payload.push({
                name: "server-notification",
                to: {
                    subscriberId: id,
                },
                payload: {
                    message: message
                },
                bridgeUrl: process.env.NOVU_BRIDGE_TUNNEL
            })
        })
        console.log("🚀 ~ AdminNotificationsController ~ userIdentifiers.forEach ~ payload:", payload)

        if (payload.length) {
            const response = await this.novu.events.bulkTrigger(payload)
            if (response.status == 200 || response.status == 201) {
                return true
            } else {
                return false
            }
        } else {
            return false
        }

    }
}