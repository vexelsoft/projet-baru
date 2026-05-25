import fs from "fs";
import path from "path";

export default function handler(req,res){

const filePath=
path.join(process.cwd(),
"data",
"deposits.json");

const deposits=
JSON.parse(
fs.readFileSync(
filePath,
"utf8"
)
);

if(req.method==="POST"){

const {
nominal,
metode,
bukti
}=req.body;

deposits.push({

id:Date.now(),
nominal,
metode,
bukti,
status:"pending"

});

fs.writeFileSync(
filePath,
JSON.stringify(
deposits,
null,
2
)
);

return res.json({
status:true
});

}

}
