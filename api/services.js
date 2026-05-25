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

        const result =
        await response.json();

        return res.status(200).json(result);

    } catch(err) {

        return res.status(500).json({

            status:false,

            message:err.message

        });

    }

}
