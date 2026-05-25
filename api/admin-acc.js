import {supabase} from './supabase'
export default async function handler(req,res){
const {depositId}=req.body;
await supabase.from('deposits').update({status:'success'}).eq('id',depositId);
res.json({status:true,message:'Deposit berhasil di ACC'})
}
