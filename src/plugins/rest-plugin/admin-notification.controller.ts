// products.controller.ts
import { Body, Controller, Get, Post } from '@nestjs/common';
import { IBulkEvents, Novu } from '@novu/node';
import { Ctx, RequestContext } from '@vendure/core';

@Controller('notification')
export class AdminNotificationsController {
    constructor(
    ) {
    }

    novu = new Novu(process.env.NOVU_API_KEY || '');

    @Get()
    findAll(@Ctx() ctx: RequestContext) {
        return this.bulkTrigger([{ id: '9', email: 'nhoxty96@gmail.com' }], 'test')
    }


    @Post()
    async sendNotifications(
        @Body() body: {
            userIdentifiers: { id: string, email: string }[],
            message: string
        },
    ) {
        return this.bulkTrigger(body.userIdentifiers, body.message)
    }


    async bulkTrigger(userIdentifiers: { id: string, email: string }[], message: string) {

        const payload: IBulkEvents[] = []

        userIdentifiers.forEach(({ id, email }) => {
            payload.push({
                name: "server-notification",
                to: {
                    subscriberId: id,
                    email: email,
                },
                payload: {
                    message: message
                },
                bridgeUrl: process.env.NOVU_BRIDGE_TUNNEL
            })
        })
        console.log("🚀 ~ AdminNotificationsController ~ userIdentifiers.forEach ~ payload:", payload)

        if (payload.length) {
            await this.novu.events.bulkTrigger(payload)
        }

    }
}




