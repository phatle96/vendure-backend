import { Injectable } from '@nestjs/common';
import { ID, ProductVariant, RequestContext, TransactionalConnection } from '@vendure/core';

@Injectable()
export class CustomProductService {

    constructor(
        private connection: TransactionalConnection,
    ) { }


    async getProductsByCollection(ctx: RequestContext, collectionId: ID): Promise<ProductVariant[]> {
        try {
            return await this.connection.getRepository(ctx, ProductVariant).find({
                where: {
                    collections: {
                        id: collectionId
                    }
                }
            });
        } catch (e: any) {
            return []
        }
    }
}