export default async function handler(req,res){

if(req.method!=="POST"){
return res.status(405).json({
status:false,
message:"Method tidak diizinkan"
});
}

try{

const {
nominal,
metode,
bukti
}=req.body;

if(!nominal || !bukti){

return res.json({
status:false,
message:"Data belum lengkap"
});

}

return res.json({
status:true,
message:"Deposit berhasil dikirim"
});

}catch(err){

return res.status(500).json({
status:false,
message:err.message
});

}

}
