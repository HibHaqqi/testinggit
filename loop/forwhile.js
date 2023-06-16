/*
for (let i  =1 ; i <= 5; i++)  {

    console.log(i);
}
*/

/*
let b =1 ;
while (b <=10 ){

    console.log(b);
    b++;
}
 // while loop melakukan pengecekan terlebih dahulu 
 //do while loop terlebih dahulu baru cek 
*/

let c= 1 ;
do{

    console.log(c);
    c++;
} while(c<11)

/*

function pencariankeyword(webpage){
   if(keywordfind){
    return;
   }
   else{
    pencariankeyword(webpage selanjutnya)
   }
}
recurse();
*/

function countDown(d){
   console.log(d);
   if(d<=0){
    return;
   }
   else{
    countDown(d-1);
   }
}

countDown(3);