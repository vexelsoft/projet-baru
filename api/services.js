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

        const data =
        await response.json();

        /*
        =========================
        FORMAT DATA
        =========================
        */

        let services = [];

        if(Array.isArray(data)){

            services =
            data.map(service => {

                const price =
                Math.ceil(
                    Number(service.price) * 1.2
                );

                return {

                    id: service.id,

                    name: service.name,

                    min: service.min,

                    max: service.max,

                    price: price

                };

            });

        }

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
