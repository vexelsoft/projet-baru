export default async function handler(req,res){

return res.status(200).json({
status:true,
url: process.env.SUPABASE_URL,
keyExists: !!process.env.SUPABASE_ANON_KEY
});

}
