import {supabase} from './supabase.js'
export default async function handler(req,res){
const {data}=await supabase.from('deposits').select('*').eq('status','pending');
res.json({data:data||[]})
}
