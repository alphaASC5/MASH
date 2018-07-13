function getHome(){
    let decimal1 = Math.random();
    let times6 = decimal1 * 6;
    let result2 = Math.floor(times6);
    return homeArr[result2];
}

function getChildrenCount(){
    let decimal2 = Math.random();
    let times100 = decimal2 * 100;
    let result = Math.floor(times100);
    let userCount = process.argv[3];
    let decimal4 = Math.random();
    let times50 = decimal4 * 50;
    let result2 = Math.floor(times50);
    if(result2 > 25){
        return userCount
    } else {
        return result
    }
}

function mash(){
    console.log('You will live in a ' + home + ' and you will have ' + children + " kids, and you'll drive a " + car + ". You will marry " + spouse + ' and your salary will be ' + salary + '. You will live until ' + lifespan + ' years old and you will be a ' + career + '.');
}


function getCar(){
    let decimal3 = Math.random();
    let times6 = decimal3 * 6;
    let result7 = Math.floor(times6);
    return carArr[result7];
}

function getSpouse(){
    let decimal4 = Math.random();
    let times5 = decimal4 * 5;
    let result8 = Math.floor(times5);
    return spouseArr[result8];
}

function getSalary(){
    let decimal5 = Math.random();
    let times7 = decimal5 * 100000;
    let times8 = decimal5 * 50;
    let r = Math.floor(times8);
    if(r > 25){
        let result3 = times7 * -1;
        let result4 = Math.floor(result3);
        return result4;
    }else {
        let result5 = Math.floor(times7);
        return result5;
    }
}

function getLifespan(){
    let decimal6 = Math.random();
    let times9 = decimal6 * 100;
    let result9 = Math.floor(times9);
    return result9;
}

function getCareer(){
    let decimal7 = Math.random();
    let times1 = decimal7 * careerArr.length;
    let result10 = Math.floor(times1);
    return careerArr[result10];
}

let spouseArr = ['Olivia', 'Kathy', 'Jennifer', 'Vannessa', 'Ruby'];
let homeArr = ['Mansion', 'Apartment', 'Shack', 'House', process.argv[2], 'Hell'];
let carArr = ['lambo', 'convertible', 'box with wheels', 'truck', 'cart', process.argv[4]];
let careerArr = ['architect', 'coder', 'engineer', 'doctor', 'teacher', 'garbage man', 'hobo'];

let career = getCareer();
let lifespan = getLifespan();
let salary = getSalary();
let car = getCar();
let children = getChildrenCount();
let home = getHome();
let spouse = getSpouse();

if(process.argv[2] === undefined || process.argv[3] === undefined || process.argv[4] === undefined ){
    console.log('You need to enter a House, child number, or/and a car.');
}else {
    let result1 = mash();
}

