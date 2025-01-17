import { OnModuleInit } from '@nestjs/common';
import { Novu } from '@novu/node';
import { EventBus, PluginCommonModule, VendurePlugin, ProductVariantPriceEvent } from '@vendure/core';
import axios from 'axios';
import { ApiModule as CortezaSystemApi, AuthenticationClientsService } from './corteza-api/system';
import { ComposeNamespaceNamespaceIDModuleModuleIDRecordRecordIDPostRequest, ApiModule as CortezaRecordApi, RecordsService } from './corteza-api/compose';

@VendurePlugin({
    imports: [PluginCommonModule, CortezaSystemApi, CortezaRecordApi],
    compatibility: '^3.0.0',
})
export class CortezaPlugin implements OnModuleInit {
    constructor(
        private eventBus: EventBus,
        private authenticationClientsService: AuthenticationClientsService,
        private recordService: RecordsService
    ) { }

    novu = new Novu(process.env.NOVU_API_KEY || '');


    onModuleInit() {

        this.eventBus.ofType(ProductVariantPriceEvent).subscribe(
            async (event) => {
                console.log('ProductVariantPriceEvent', event);

                // TODO: Replace with your Corteza API Gateway URL
                const uri = 'http://192.46.224.41:18080/api/gateway/user/authenticate';
                const body = {
                    data: {
                        cortezaClient: "420838497746681857",
                        cortezaSecret: "Ghfi5WG6hyZA5dvwlhJ7nnRCVDPXlMEtUik1Z2Zzrseff4xOnsg7kaihDX4CBlLf",
                        authUrl: "http://192.46.224.41:18080"
                    }
                }

                try {
                    const token = await axios.post(uri, body);
                    console.log(token.data)
                    if (token.data) {


                        console.log("🚀 ~ CortezaPlugin ~ activeUserId:", event.ctx.activeUserId)
                        console.log("🚀 ~ CortezaPlugin ~ sessionUserId:", event.ctx.session?.user?.id)


                        // switch (event.type) {
                        //     case 'created':
                        //         console.log('created');
                        //         break;

                        //     case 'updated':
                        //         console.log('updated');
                        //         const payload = {
                        //             // TODO: Replace with your namespaceID and moduleID
                        //             namespaceID: '423799963210809345',
                        //             moduleID: '424736063529943041',
                        //             query: `vendure_id LIKE ${event.entity[0].id}`,
                        //             limit: 10
                        //         }
                        //         this.recordService.defaultHeaders = { Authorization: `Bearer ${token.data.token}` };
                        //         this.recordService.composeNamespaceNamespaceIDModuleModuleIDRecordGet(payload.namespaceID, payload.moduleID, payload.query)
                        //             .subscribe((record) => {
                        //                 console.log("🚀 ~ CortezaPlugin ~ .subscribe ~ record:", record.data.response.set)
                        //                 const recordsResponse = record.data.response.set;
                        //                 console.log("🚀 ~ CortezaPlugin ~ .subscribe ~ recordsResponse:", recordsResponse[0].values)
                        //                 if (recordsResponse.length == 1 &&
                        //                     (recordsResponse[0].values.price !== event.entity[0].price ||
                        //                         recordsResponse[0].values.currencyCode !== event.entity[0].currencyCode ||
                        //                         recordsResponse[0].values.channelId !== event.entity[0].channelId)) {
                        //                     const recordID = recordsResponse[0].recordID;
                        //                     console.log("🚀 ~ CortezaPlugin ~ .subscribe ~ recordID:", recordID)
                        //                     const recordData: ComposeNamespaceNamespaceIDModuleModuleIDRecordRecordIDPostRequest = {
                        //                         values: [
                        //                             {
                        //                                 name: 'price',
                        //                                 value: String(event.entity[0].price)
                        //                             },
                        //                             {
                        //                                 name: 'currencyCode',
                        //                                 value: event.entity[0].currencyCode
                        //                             },
                        //                             {
                        //                                 name: 'channelId',
                        //                                 value: String(event.entity[0].channelId)
                        //                             },
                        //                             {
                        //                                 name: 'vendure_id',
                        //                                 value: String(event.entity[0].id)
                        //                             },
                        //                             {
                        //                                 name: 'variantId',
                        //                                 value: String(event.entity[0].id)
                        //                             }
                        //                         ]
                        //                     }

                        //                     console.log("🚀 ~ CortezaPlugin ~ .subscribe ~ entity:", event.entity[0].variant)
                        //                     console.log("🚀 ~ CortezaPlugin ~ .subscribe ~ recordData:", recordData)

                        //                     this.recordService.composeNamespaceNamespaceIDModuleModuleIDRecordRecordIDPost(payload.namespaceID, payload.moduleID, recordID, recordData)
                        //                         .subscribe((updatedRecord) => {
                        //                             console.log("🚀 ~ CortezaPlugin ~ .subscribe ~ updatedRecord:", updatedRecord.data)
                        //                         })
                        //                 }
                        //             });
                        //         break;

                        //     case 'deleted':
                        //         console.log('deleted');
                        //         break;
                        // }

                    }
                } catch (error) {
                    console.error(error);
                }

            }
        )
    }
}