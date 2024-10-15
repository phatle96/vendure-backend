import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Ctx, RequestContext } from '@vendure/core';
import { AdminNotiService } from './admin-noti.service';

@Resolver()
export class AdminNotiResolver {

    constructor(
        private adminNotiService: AdminNotiService
    ) { }

    @Mutation()
    sendNotifications(@Ctx() ctx: RequestContext, @Args() { userId, message }: { userId: string[], message: string }) {
        // return this.adminNotiService.sendNotifications(ctx, collectionId)
        return this.adminNotiService.sendNotifications(userId, message)
    }
}