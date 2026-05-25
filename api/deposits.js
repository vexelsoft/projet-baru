import { supabase } from "./supabase.js";

export default async function handler(req,res){

try{

const { data, error } =
await supabase
.from("deposits")
.select("*");

if(error){

return res.status(500).json({
status:false,
message:error.message
});

}

return res.status(200).json({
status:true,
data:data || []
});

}catch(err){

return res.status(500).json({
status:false,
message:err.message
});

}

}
