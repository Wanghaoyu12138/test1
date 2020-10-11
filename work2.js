//1. 计算每队的平均分；
let JohnAvg = (89 + 120 +103) / 3;
let MikeAvg = (116 + 94 +123) / 3;let MaryAvg = (97 + 134 +105) / 3;
console.log("John的平均分是："+JohnAvg+"\n" +"Mike的平均分是："+MikeAvg+"\n"+"Mary的平均分是："+MaryAvg+"\n")
//2.4 决定哪支球队平均获胜（平均分最高），并将胜者打印到控制台。在输出中也包括平均分；
if((JohnAvg > MikeAvg) && (JohnAvg > MaryAvg)){    
console.log("John是获胜队伍！" + "John的平均分是："+JohnAvg);
}
else if ((MikeAvg>JohnAvg) && (MikeAvg>MaryAvg)){   
 console.log("Mike是获胜队伍！" + "Mike的平均分是："+MikeAvg);
 }
 else if((MaryAvg>JohnAvg) && (MaryAvg>MikeAvg)){  
   console.log("Mary是获胜队伍！" + "Mary的平均分是："+MaryAvg);
   }
   else{   
    console.log("平局！");
    }

//3、5 然后改变分数来显示不同的赢家。
let JohnAvg1 = (123 + 120 +93) / 3;
let MikeAvg1 = (126 + 99 +123) / 3;
let MaryAvg1 = (100 + 134 +105) / 3;
console.log("John的平均分是："+JohnAvg1+"\n" +"Mike的平均分是："+MikeAvg1+"\n"+"Mary的平均分是："+MaryAvg1+"\n")
if((JohnAvg1 > MikeAvg1) && (JohnAvg1 > MaryAvg1)){    
console.log("John是获胜队伍！" + "John的平均分是："+JohnAvg1);
}
else if ((MikeAvg1>JohnAvg1) && (MikeAvg1>MaryAvg1)){    
console.log("Mike是获胜队伍！" + "Mike的平均分是："+MikeAvg1);
}
else if((MaryAvg1>JohnAvg1) && (MaryAvg1>MikeAvg1)){    
console.log("Mary是获胜队伍！" + "Mary的平均分是："+MaryAvg1);
}
else{   
 console.log("平局！");
 }
 