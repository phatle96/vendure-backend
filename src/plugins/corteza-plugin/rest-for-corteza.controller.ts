// products.controller.ts
import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';
import { AuthService, Ctx, ProductVariantService, RequestContext, RequestContextService, SessionService, User } from '@vendure/core';



@Controller('products')
export class RestForCortezaController {
    constructor(
        private productVariantService: ProductVariantService,
        private authService: AuthService,
        private requestContextService: RequestContextService,
        private sessionService: SessionService
    ) {
    }


    @Post('login')
    async login(@Ctx() ctx: RequestContext, @Body() body: any) {
        const requestContext = await this.requestContextService.create({ apiType: 'admin' })
        // Call your service to handle the login logic
        return await this.authService.authenticate(requestContext, "admin", "native", { username: body.username, password: body.password }).then(response => console.log(response));

        // return await this.authService.authenticate(ctx, "admin", "native", { username: "corteza", password: "corteza" }).then(response => console.log(response));
    }

    @Post('logout')
    async logout(@Ctx() ctx: RequestContext, @Body() body: any) {
        return await this.authService.destroyAuthenticatedSession(ctx, body.token).then(response => console.log(response));
    }

    @Post('get-session')
    async getSession(@Body() body: any) {
        return await this.sessionService.getSessionFromToken(body.token).then(response => console.log(response));
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