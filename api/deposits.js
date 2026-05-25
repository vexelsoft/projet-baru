import fs from "fs";
import path from "path";

export default function handler(req,res){

const filePath=
path.join(
process.cwd(),
"data",
"deposits.json"
);

const deposits=
JSON.parse(
fs.readFileSync(
filePath,
"utf8"
)
);

res.json({

status:true,

data:
deposits.filter(
x=>x.status==="pending"
)

});

}
