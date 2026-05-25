import { supabase } from "./supabase.js";

export default async function handler(req,res){

try{

const { depositId } = req.body;

const { data:deposit, error } =
await supabase
.from("deposits")
.select("*")
.eq("id", depositId)
.single();

if(error || !deposit){

return res.json({
status:false,
message:"Deposit tidak ditemukan"
});

}

await supabase
.from("deposits")
.update({
status:"success"
})
.eq("id", depositId);

await supabase.rpc(
"tambah_saldo",
{
user_name: deposit.username,
jumlah: deposit.nominal
}
);

return res.json({
status:true,
message:"Deposit berhasil di ACC"
});

}catch(err){

return res.status(500).json({
status:false,
message:err.message
});

}

}
