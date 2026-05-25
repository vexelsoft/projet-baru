import {supabase} from './supabase'
export default async function handler(req,res){
if(req.method!=='POST') return res.status(405).end();
const {nominal,metode,bukti}=req.body;
const {error}=await supabase.from('deposits').insert({nominal,metode,bukti,status:'pending'});
res.json({status:!error,message:error?error.message:'Deposit menunggu ACC'})
}
