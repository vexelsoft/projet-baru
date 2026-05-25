import { supabase } from "./supabase";

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
} = req.body;

const { data, error } =
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

return res.status(200).json({
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
