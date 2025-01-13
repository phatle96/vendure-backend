// products.controller.ts
import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';
import { Ctx, ProductVariantService, RequestContext } from '@vendure/core';


@Controller('products')
export class RestForCortezaController {
    constructor(
        private productVariantService: ProductVariantService,
    ) {
    }


    @Post('update-product-variant')
    async updateProductVariants(@Ctx() ctx: RequestContext, @Body() body: any) {
        // Call your service to handle the update logic
        const variantId = body.id
        const price = body.price
        const channelId = body.channelId
        const currencyCode = body.currencyCode
        return await this.productVariantService.createOrUpdateProductVariantPrice(ctx, variantId, price, channelId, currencyCode);
    }

    @Get('get-product-variant-price')
    async getProductVariantPrice(@Ctx() ctx: RequestContext, @Query() id: any) {
        // Call your service to handle the update logic
        const variantId = id.id as string
        return await this.productVariantService.getProductVariantPrices(ctx, variantId);
    }



}