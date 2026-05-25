export default async function handler(req, res) {

    if (req.method !== 'POST') {
        return res.status(405).json({
            status: false,
            message: 'Method not allowed'
        });
    }

    try {

        const {
            platform,
            target,
            jumlah
        } = req.body;

        /*
        ====================================
        GANTI SERVICE ID SESUAI PROVIDER
        ====================================
        */

        let service = '';

        if(platform === 'instagram') {
            service = '1';
        }

        if(platform === 'tiktok') {
            service = '2';
        }

        if(platform === 'youtube') {
            service = '3';
        }

        /*
        ====================================
        REQUEST API PROVIDER
        ====================================
        */

        const response = await fetch('https://fayupedia.id/api/order', {

            method: 'POST',

            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({

                api_key: process.env.API_KEY,

                service: service,

                target: target,

                quantity: jumlah

            })

        });

        const data = await response.json();

        /*
        ====================================
        RESPONSE KE WEBSITE
        ====================================
        */

        return res.status(200).json({

            status: true,

            data: data

        });

    } catch (err) {

        return res.status(500).json({

            status: false,

            message: 'Server Error'

        });

    }

}
