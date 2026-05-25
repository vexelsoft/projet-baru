import { supabase } from "./supabase.js";

export default async function handler(req,res){

try{

if(req.method !== "POST"){

return res.status(405).json({
status:false,
message:"Method tidak diizinkan"
});

}

const {
nominal,
metode,
bukti
}=req.body;

if(!nominal){

return res.json({
status:false,
message:"Nominal kosong"
});

}

const { error } =
await supabase
.from("deposits")
.insert([{
nominal:Number(nominal),
metode,
bukti,
status:"pending"
}]);

if(error){

return res.status(500).json({
status:false,
message:error.message
});

}

return res.json({
status:true,
message:"Deposit menunggu ACC"
});

}catch(err){

return res.status(500).json({
status:false,
message:err.message
});

}

}
