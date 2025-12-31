// 11 GRADE 

let marks = 85;
if(marks >= 90){
    console.log('A');
}else if(marks>= 80){
    console.log('B');
}else if(marks >= 70){
    console.log('C');
}else if(marks >= 60){
    console.log('D');
}else{
    console.log('F');
}


// 12 LENGTH AND WIDTH

let lenght = 5;
let width = 10;
let area = lenght * width;
let perimeter = 2 * (lenght + width);

console.log(area);
console.log(perimeter);


// 13 LEAP YEAR

    // sorry sir, I could not solve this.


    // 14 DIVISABLE
    
    let number2 = 47;
    if(number2 / 3 == 0 && number2 / 5 == 0){
        console.log('divisisable by both 3 and 5');
    }else if (number2 / 3 == 0){
        console.log('divisible by only 3');
    }else if(number2 / 5 == 0){
        console.log('divisable by only 5');
    }else{
        console.log('not divisable by 3 or 5');
    }

    // 15 AVERAGE MARK

    let subject1 = 78;
    let subject2 = 85;
    let subject3 = 92;
    let average = (subject1 + subject2 + subject3) / 3;
    if(average >= 90){
       console.log('excellent') 
    }else if(average >= 75){
       console.log('good'); 
    }else if(average >= 60){
        console.log('average');
    }else{
        console.log('need to improve');
    }