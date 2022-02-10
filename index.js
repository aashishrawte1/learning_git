// var m=10,n=10 ;
// console.log(m,n);

// if(m>n) {
//     console.log('m is greater than n');
// }  else if( m ==n) {
//     console.log( 'm is equal to n');
// } else {
//     console.log('m is less than n');
// }

// var n=12;
// for(let i=2; i<6; i++) {
//     if(n%i == 0) {
//         console.log(`${i}: yes`);
//     } else {
//         console.log(`${i}: no`);
//     }
// }

// for(let i = 1; i <=15; i++) {
//     if(i%5==0){
//         console.log('hello');
//     } else {
//         console.log(`${i}`)
//     }
// }
// var n = 4;
// for(let i=1; i<=n; i++) {
//     if(i%2==0){
//         console.log(`${i}: even`);
//     } else {
//         console.log(`${i}: odd`);
//     }
// }

// var n=10;
// for(i=1; i<=n; i++){
//     if(n%i==0){
//         console.log(`${i}`);
//     }
// }

// var n = 5;
// for(i=1; i<=n; i++){
//     let square = i*i;
//     if(square%2==0){
//       console.log(`Square of ${i} = ${square}: even`);
//     } else {
//         console.log(`Square of ${i} = ${square}: odd`);
//     }

// }

// var n=40;
// if(n>=75){
//     console.log('good');
// } else if (n>=50 && n<75) {
//     console.log('average');
// } else {
//     console.log('poor');
// }

// var n;
// if(n>=90 && n<=100) {
//     console.log('grade a');
// } else if (n>=75 && n<90) {
//     console.log('grade b');
// } else if(n>=50 && n<75){
//     console.log('grade c');
// } else {
//     console.log('grade d');
// }

// var n=5;
// for(let i=1;i<=n;i++){
//     for(let j=1; j<=i;j++){
//         if(j==1){
//             console.log('x');
//         } else {
//             if (j>1){
//                 if(j%2==0){
//                     console.log('y');
//                 } else {
//                     console.log('x')
//                 }
//             }
//         }

//     }
//      console.log('\n');
// }

// var n=6;
// var s = '';
// var a=0;
// for( let i = 1; i <= n; i++ ) {
//     if(i%2==0) {
//         s =  s + `+${i}`;
//         a+=i;
//     } else {
//         s+=`-${i}`;
//         a-=i
//     }
// }
// console.log(a);
// s+=`=${a}`;
// console.log(s);

// var n = 7;
// var s = '';
// for(let i = n; i>=1; i--) {
//     if(i%3==0) {
//         s+='x'
//         // console.log('X')
//     }else {
//         s+=`${i}`
//     //    console.log(`${i}`);
//     }
// }
// console.log(s);

// var n = 2456;
// var result = 0;
// var reminder = 0;
// for(result = 0; n>0; n=(n-reminder)/10){
//     reminder = n%10; // 6
//     result = result + reminder; // 0+6
// }
// console.log(result);

// var n = 'Eduf';
// if(n.length > 5){
//     console.log('long');
// } else {
//     console.log('short');
// }

// let str = 'mmmMMM';
// let len = str.length;
// var count1 = 0;
// var count2 = 0;
// for(let i=0;i<len;i++){
// if(str[i]== 'x'){
//     count1++;
// }
// else if(str[i]=='y'){
// count2++;
// }
// }

//     console.log(`x= ${count1}`);
//     console.log(`y= ${count2}`);

// var str = "zoom";
// for (let i = 0; i < str.length; i++) {
//   if (str[i] == "z") {
//     str[i] = "x";
//   } else {
//       console.log(str);
//   }
// }
// console.log(str);

// var str = 'my#mother';
// var chars = str.slice(0, str.search('m'));
// var numbs = str.replace(chars, '');

// console.log(chars, numbs);

// var str='01234';
// var s = '';
// for(let i = 0; i < str.length; i++) {
//   if(i%2==0){
//     s+=`${str[i]}`;
//   }
// }
// console.log(s);

// var str = 'qw23BN**45g';
// var num = '1234567890';
// var s = '';

// for( let i=0; i<str.length; i++){
//   for( let j=0; j<num.length; j++) {
//     if(str[i]==num[j]){
//       s+=`${str[i]}`;
//     }
//   }
// }
// console.log(`Digits=${s}`);

// var arr = [5, 18, 26, 30, 49, 6];
// var count = 0;
// var result = [];
// for(let i = 0; i < arr.length; i++) {
//     if(arr[i] > 21){
//         count++;
//         result.push(arr[i]);
//     }
// }
// console.log(count);
// console.log(result);

// var arr = [5, 18, 26, 30, 49, 6];
// for(let i = 0; i < arr.length; i++){
//     arr[i] = 'hello'+arr[i];
// }
// console.log(arr);

// var a  = [5, 18, 26, 30];
// var b = [101, 102];
// var result = [];
// for(let i = 0; i < a.length + b.length; i++){
      
//           for(let j = 0; j < a.length; j++){
//               if(i%2== 0){
//                 result.push(a[j]);
//             } else {
//                 result.push(b[j-1]);
//             } 

//       }
// }
// console.log(result);

// details = {
//     name: "mark",
//     email: "mark@example.com",
//     salary: "7000"
// }

// console.log(details.email);

// something = {};

// Array
// var arr = [a,b,c,d];

// json 

// var arr = {
//     key: "value",
//     no: 1,
//     value: "something"
// }



// arr = {
//     billid: 45661,
//     amount: 2500
// }

// arr['amount'] = 2700
// console.log(arr);

// arr1 = {
//     billid: 401,
//     amount: 400
// }

// arr2 = {
//     billid: 402,
//     amount: 500
// }

// arr3 = {};

// arr3['amount'] = arr1.amount + arr2.amount;
// console.log(arr3);

// arr = {};
// arr['id'] = 1;
// arr['email'] = 'abc@gmail.com';
// arr['company'] = 'microsoft';

// console.log(arr);