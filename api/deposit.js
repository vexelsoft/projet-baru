let deposits=[];

export default async function handler(req,res){

if(req.method!=="POST"){
return res.status(405).json({
status:false
});
}

const {userId,nominal,metode,bukti}=req.body;

const deposit={
id:Date.now(),
userId,
nominal:Number(nominal),
metode,
bukti,
status:"pending"
};

deposits.push(deposit);

res.json({
status:true,
message:"Deposit menunggu ACC"
});

}
