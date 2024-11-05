import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Permission } from '@vendure/common/lib/generated-types';
import { ID } from '@vendure/common/lib/shared-types';
import { Allow, AnonymousSession, Ctx, RequestContext, Transaction } from '@vendure/core';
import { NovuApiService } from '../services/novu-api.service';
import { ChatProviderIdEnum, PushProviderIdEnum } from '@novu/node';
import { IChannelCredentials } from '@novu/shared';

@Resolver()
export class NovuApiResolver {
    constructor(private myService: NovuApiService) { }

    @Query()
    async myNewQuery(@Ctx() ctx: RequestContext, @Args() args: { id: ID }): Promise<boolean> {
        return this.myService.myNewQuery(ctx, args.id);
    }

    @Mutation()
    @Transaction()
    async myNewMutation(@Ctx() ctx: RequestContext, @Args() args: { id: ID }): Promise<boolean> {
        return this.myService.myNewMutation(ctx, args.id);
    }

    @Query()
    // @Allow(Permission.Authenticated)
    async subscriberQuery(@Ctx() ctx: RequestContext, @Args() args: { id: ID }): Promise<any> {
        return this.myService.subscriberQuery(ctx, args.id);
    }

    @Mutation()
    @Transaction()
    // @Allow(Permission.Authenticated)
    async subscriberCredentialsMutation(
        @Ctx() ctx: RequestContext,
        @Args() args: { id: ID, providerId: ChatProviderIdEnum | PushProviderIdEnum, credentials: IChannelCredentials }
    ): Promise<any> {
        return this.myService.subscriberCredentialsMutation(ctx, args.id, args.providerId, args.credentials);
    }

}
