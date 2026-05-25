let users=[
{
id:1,
saldo:0
}
];

export default function handler(req,res){

res.json({
saldo:users[0].saldo
});

}
