import { IBulkEvents, Novu } from '@novu/node';


export class NovuService {

  novu = new Novu(process.env.NOVU_API_KEY || '');


  async bulkTrigger(userIdentifiers: { id: string, email: string }[], message: string) {

    const payload: IBulkEvents[] = []

    userIdentifiers.forEach(({ id, email }) => {
      payload.push({
        name: "server-notification",
        to: {
          subscriberId: id,
          email: email,
        },
        payload: {
          message: message
        }
      })
    })

    if (payload.length) {
      await this.novu.events.bulkTrigger(payload)
    }

  }


  async trigger(userId: string, userEmail: string) {
    await this.novu.trigger('welcome-onboarding-email', {
      to: {
        subscriberId: userId,
        email: userEmail
      },
      payload: {
        teamImage: 'https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/dca73b36-cf39-4e28-9bc7-8a0d0cd8ac70/standalone-gradient2x_2/w=128,quality=90,fit=scale-down',
        userImage: 'https://react-email-demo-48zvx380u-resend.vercel.app/static/vercel-user.png',
        arrowImage: 'https://react-email-demo-bdj5iju9r-resend.vercel.app/static/vercel-arrow.png',
      },
      bridgeUrl: 'https://e07e5e62-a4b1-48ae-bf4f-01a3b42e3604.novu.sh/api/novu'
    })
  }


}
