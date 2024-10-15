import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Ctx, RequestContext } from '@vendure/core';
import { CustomProductService } from '../services/custom-product.service';

@Resolver()
export class CustomProductResolver {

    constructor(
        private customProductService: CustomProductService
    ) { }

    @Query()
    getProductsByCollection(@Ctx() ctx: RequestContext, @Args() { collectionId }: { collectionId: string }) {
        return this.customProductService.getProductsByCollection(ctx, collectionId)
    }
}