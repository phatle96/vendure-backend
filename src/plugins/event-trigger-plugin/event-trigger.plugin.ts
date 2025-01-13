import { OnModuleInit } from '@nestjs/common';
import { Novu } from '@novu/node';
import { EventBus, PluginCommonModule, VendurePlugin, AccountRegistrationEvent, ProductVariantPriceEvent } from '@vendure/core';
import axios from 'axios';

@VendurePlugin({
    imports: [PluginCommonModule],
    compatibility: '^3.0.0',
})
export class EventTriggerPlugin implements OnModuleInit {
    constructor(
        private eventBus: EventBus,
    ) { }

    novu = new Novu(process.env.NOVU_API_KEY || '');


    onModuleInit() {
        this.eventBus.ofType(AccountRegistrationEvent).subscribe(
            async (event) => {
                console.log('AccountRegistrationEvent', event.user);
                if (event.user.identifier) {
                    await this.novu.trigger('welcome-onboarding-email', {
                        to: {
                            subscriberId: event.user.id as string,
                            email: event.user.identifier
                        },
                        payload: {
                            teamImage: 'https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/dca73b36-cf39-4e28-9bc7-8a0d0cd8ac70/standalone-gradient2x_2/w=128,quality=90,fit=scale-down',
                            userImage: 'https://react-email-demo-48zvx380u-resend.vercel.app/static/vercel-user.png',
                            arrowImage: 'https://react-email-demo-bdj5iju9r-resend.vercel.app/static/vercel-arrow.png',
                        },
                        bridgeUrl: 'https://e07e5e62-a4b1-48ae-bf4f-01a3b42e3604.novu.sh/api/novu'
                    })
                }
            });

        this.eventBus.ofType(ProductVariantPriceEvent).subscribe(
            async (event) => {
                console.log('ProductVariantPriceEvent', event);

                const uri = 'http://192.46.224.41:18080/api/gateway/user/authenticate';
                const body = {
                    data: {
                        cortezaClient: "420838497746681857",
                        cortezaSecret: "v3XgT2xwE0GpKUwD6xTHlXpUKL7JkKXj7qKetggUpo5c8HphSYwwvUVh34ZWrRo4",
                        authUrl: "http://192.46.224.41:18080"
                    }
                }

                try {
                    const response = await axios.post(uri, body);
                    console.log(response.data)
                } catch (error) {
                    console.error(error);
                }


            }
        )
    }
}