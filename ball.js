let mike=[89,120,103];
let john=[116,94,123];
let sum1=0;
let sum2=0;
for(let i in mike){
    let a=mike[i];//存储数据
    sum1=sum1+a   
}
mikeSum=sum1/mike.length
console.log("mike队的平均分是"+mikeSum);
for(let g in john){
    let a=john[g];
    sum2=sum2+a
    
}
johnSum=sum2/john.length//john.lenght数组长度
console.log("john队的平均分是"+johnSum);

let y=( johnSum > mikeSum ? "john队以"+johnSum +"的分获胜": "mike队以"+mikeSum+"的分获胜");
console.log(y);

// 判断
if(johnSum>mikeSum){
    console.log("john队获胜");
}else if(johnSum<mikeSum){
    console.log("mike队获胜");
}else{
    console.log("并列第一");
}

// mary的得分情况
let mary=[97,134,105];
let sum3=0;
for(let f in mike){
    let a=mike[f];
    sum3=sum1+a   
}
marySum=sum3/mary.length
console.log("mary队平均分是"+marySum);
if(johnSum>mikeSum&&johnSum>marySum){
    console.log("john队获胜");
}else if(mikeSum>johnSum&&mikeSum>marySum){
    console.log("mike队获胜");
}else if(marySum>johnSum&&marySum>mikeSum){
    console.log("mary队获胜");
}else if(johnSum=mikeSum=marySum){
    console.log("并列第一");
}else if(johnSum=mikeSum>marySum){
    console.log("john队和mike队并列第一");
}else if(johnSum=marySum>mikeSum){
    console.log("john队、mary队并列第一");
}else{
    console.log("mike队、mary队并列第一");
}
