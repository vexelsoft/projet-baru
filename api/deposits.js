let deposits=[];

export default function handler(req,res){

res.json({
status:true,
data:deposits.filter(
x=>x.status==="pending"
)
});

}
