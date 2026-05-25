import { createClient } from "@supabase/supabase-js";

export default function handler(req,res){

res.status(200).json({
status:true,
message:"Supabase package terbaca"
});

}
