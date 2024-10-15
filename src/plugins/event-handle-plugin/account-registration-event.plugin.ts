import { OnModuleInit } from '@nestjs/common';
import { Novu } from '@novu/node';
import { EventBus, PluginCommonModule, VendurePlugin, AccountRegistrationEvent } from '@vendure/core';

@VendurePlugin({
    imports: [PluginCommonModule],
    compatibility: '^3.0.0',
})
export class AccountRegistrationEventPlugin implements OnModuleInit {
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
    }
}