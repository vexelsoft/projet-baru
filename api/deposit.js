let deposits=[];

export default function handler(req,res){

if(req.method!=="POST"){
return res.status(405).json({status:false});
}

const {nominal,metode,bukti}=req.body;

deposits.push({
id:Date.now(),
nominal,
metode,
bukti,
status:'pending'
});

res.json({
status:true,
message:'Menunggu ACC admin'
});

}
