let deposits=[];

export default function handler(req,res){

const {depositId}=req.body;

const deposit=
deposits.find(
x=>x.id==depositId
);

if(!deposit){

return res.json({
status:false,
message:'Deposit tidak ditemukan'
});

}

deposit.status='success';

res.json({
status:true,
message:'Deposit berhasil di ACC'
});

}
