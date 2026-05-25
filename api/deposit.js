export default async function handler(req,res){

try{

return res.status(200).json({
status:true,
node:"jalan",
env:{
url: !!process.env.SUPABASE_URL,
key: !!process.env.SUPABASE_ANON_KEY
}
});

}catch(err){

return res.status(500).json({
status:false,
message:err.message
});

}

}
