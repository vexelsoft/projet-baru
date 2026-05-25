import { supabase } from "./supabase.js";

export default async function handler(req,res){

try{

const result =
await supabase
.from("deposits")
.select("*");

return res.status(200).json({
status:true,
debug:result
});

}catch(err){

return res.status(500).json({
status:false,
message:err.message,
stack:err.stack
});

}

}
