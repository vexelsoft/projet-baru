export default async function handler(req, res) {

    try {

        const api_id =
        process.env.API_ID;

        const api_key =
        process.env.API_KEY;

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

        /*
        =========================
        REQUEST API
        =========================
        */

        const response = await fetch(

            'https://fayupedia.id/api/services',

            {

                method:'POST',

                headers:{
                    'Content-Type':
                    'application/x-www-form-urlencoded'
                },

                body:formData.toString()

            }

        );

        const result =
        await response.json();

        /*
        =========================
        AMBIL ARRAY SERVICES
        =========================
        */

        const rawServices =
        result.data || result.services || result;

        /*
        =========================
        FORMAT DATA
        =========================
        */

        const services =
        rawServices.map(service => {

            const originalPrice =
            Number(
                service.rate ||
                service.price ||
                0
            );

            const sellPrice =
            Math.ceil(
                originalPrice * 1.2
            );

            return {

                id:
                service.service ||
                service.id,

                name:
                service.name,

                min:
                service.min,

                max:
                service.max,

                price:
                sellPrice

            };

        });

        return res.status(200).json({

            status:true,

            services:services

        });

    } catch(err) {

        return res.status(500).json({

            status:false,

            message:err.message

        });

    }

}
