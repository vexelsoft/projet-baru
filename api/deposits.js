import { supabase } from "./supabase.js";

export default async function handler(req,res){

const { data,error } =
await supabase
.from("deposits")
.select("*")
.eq(
"status",
"pending"
);

res.json({
status:true,
data:data||[]
});

}
