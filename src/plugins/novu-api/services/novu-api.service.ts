import { Inject, Injectable } from '@nestjs/common';
import { ID, Product, RequestContext, TransactionalConnection } from '@vendure/core';
import { NOVU_API_PLUGIN_OPTIONS } from '../constants';

import { PluginInitOptions } from '../types';

import { ChatProviderIdEnum, Novu, PushProviderIdEnum } from '@novu/node';
import { IChannelCredentials } from '@novu/shared';


@Injectable()
export class NovuApiService {

    // Init Novu API instance
    novu = new Novu(process.env.NOVU_API_KEY || '');

    constructor(private connection: TransactionalConnection, @Inject(NOVU_API_PLUGIN_OPTIONS) private options: PluginInitOptions) { }

    async exampleMethod(ctx: RequestContext, id: ID) {
        // Add your method logic here
        const result = await this.connection.getRepository(ctx, Product).findOne({ where: { id } });
        return result;
    }

    async myNewQuery(ctx: RequestContext, id: ID): Promise<boolean> {
        return true;
    }

    async myNewMutation(ctx: RequestContext, id: ID): Promise<boolean> {
        return true;
    }

    async subscriberQuery(ctx: RequestContext, id: ID): Promise<any> {

        const response = await this.novu.subscribers.get(id as string);

        if (response && response.data.data) {
            return response.data.data
        } else {
            return { id: 'ERROR' }
        }
    }

    async subscriberCredentialsMutation(
        ctx: RequestContext, id: ID, providerId: ChatProviderIdEnum | PushProviderIdEnum, credentials: IChannelCredentials
    ): Promise<any> {
        const response = await this.novu.subscribers.setCredentials(id as string, providerId, credentials)
        if (response && response.data.data) {
            return response.data.data
        } else {
            return {
                id: "ERROR"
            }
        }
    }
}
