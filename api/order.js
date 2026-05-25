export default async function handler(req, res) {

    if(req.method !== 'POST') {

        return res.status(405).json({

            status:false,
            message:'Method not allowed'

        });

    }

    try {

        const {
            service,
            target,
            quantity
        } = req.body;

        /*
        ==============================
        ENV VERCEL
        ==============================
        */

        const api_id =
        process.env.API_ID;

        const api_key =
        process.env.API_KEY;

        /*
        ==============================
        FORM DATA
        ==============================
        */

        const formData =
        new URLSearchParams();

        formData.append(
            'api_id',
            api_id
        );

        formData.append(
            'api_key',
            api_key
        );

        formData.append(
            'service',
            service
        );

        formData.append(
            'target',
            target
        );

        formData.append(
            'quantity',
            quantity
        );

        /*
        ==============================
        REQUEST API
        ==============================
        */

        const response = await fetch(

            'https://fayupedia.id/api/order',

            {

                method:'POST',

                headers:{

                    'Content-Type':
                    'application/x-www-form-urlencoded'

                },

                body:formData.toString()

            }

        );

        const data =
        await response.json();

        /*
        ==============================
        RESPONSE
        ==============================
        */

        return res.status(200).json({

            status:true,

            data:data

        });

    } catch(err) {

        return res.status(500).json({

            status:false,

            message:'Server Error',

            error:err.message

        });

    }

}
