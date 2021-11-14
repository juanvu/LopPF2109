function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}
 
//usage:
let arrayData = [];
readTextFile('person.json', function(text){
    let datas = JSON.parse(text);
    // console.log(data);
    for(let data of datas) {
        arrayData.push(data)
    }
    // Xử lý các yêu cầu
    // arrayFav(arrayData);
    // findMostFriend(arrayData);
    // arrayManMoney(arrayData);
    // registeredName(arrayData);
    showDiffEmail(arrayData);
});

// Sở thích
function arrayFav(arrayData) {
    const resultFavs = arrayData.filter(fav => fav.favoriteFruit == 'banana');
    console.log(`Những người có cùng sở thích là chuối là:`)
    for(let resultFav of resultFavs) {
        console.log(resultFav.name)
    }
}

// Người có nhiều bạn nhất
function findMostFriend(arrayData) {
    const length = arrayData.length;
    let mostFiriend = arrayData[0].name;
    for(let i = 0 ; i < length-1 ; i++) {
        if(arrayData[i].friends.length < arrayData[i+1].friends.length) {
            mostFiriend = arrayData[i+1].name
        }
    }
    console.log(`Người có bạn nhiều nhất là ${mostFiriend}`);
}

// Những người đàn ông trên 30 tuổi có số tiền trên 2000$
function arrayManMoney(arrayData) {
    let manMoney = [];
    let nameMan = [];
    const men = arrayData.filter(male => male.gender == "male" && male.age > 30);
    for(let man of men) {
        manMoney.push(man.balance.replaceAll('$', '').replaceAll(',', ''));
        nameMan.push(man.name);
    }
    // console.log(manMoney);
    // console.log(nameMan);
    let resultMan = [];
    for(let i = 0 ; i < nameMan.length ; i++) {
        if(manMoney[i] > 2000) {
            resultMan.push(nameMan[i]);
        }
    }
     console.log("Những người đàn ông trên 30 tuổi có số tiền trên 2000$ là : ");
    for(let res of resultMan) {
        console.log(res);
    }
}

// Những người đăng ký trước ngày 2019-10-10
function registeredName(arrayData) {
    let regDay = [];
    let regName = []
    for(let reg of arrayData) {
        regDay.push(reg.registered.replaceAll('-', '')); 
        regName.push(reg.name);
    }

    const shortDay = regDay.map(day => day.substring(0,8))
    // console.log(shortReg)

    let resultReg = [];
    for(let i  = 0 ; i < regName.length ; i++) {
        if(shortDay[i] <= 20191010) {
            resultReg.push(regName[i]);
        }
    }
    console.log(`Số người đăng kí trước ngày 2019-10-10: ${resultReg.length}`);
    for(let name of resultReg) {
        console.log(name);
    }
}

// Tìm các tên miền domain khác nhau trong chuỗi json
function showDiffEmail(arrayData) {
    let arrayEmail = [];
    for(let emailN of arrayData) {
        arrayEmail.push(emailN.email)
    }

    let arrayDomain = [];
    for(let email of arrayEmail) {
        for(let i = 0 ; i < email.length ; i++) {
            if(email[i] == "@") {
                arrayDomain.push(email.slice(i+1), email.length);
                // arrayDomain.push(email.substring(i+1), email.length);
                break;
            }
        }
    }
    let arrayDomainV1 = []
    for(let i = 0 ; i < arrayDomain.length ; i++) {
        if(i%2 != 0) {
            continue;
        }
        arrayDomainV1.push(arrayDomain[i]);
    }
    let arrayResult = [];
    
    for(let i = 0 ; i < arrayDomainV1.length ; i++) {
        let isCheck = true;
        for(let j = i+1 ; j < arrayDomainV1.length ; j++) {
            if(arrayDomainV1[i] == arrayDomainV1[j]) {
                isCheck = false;
            }
        }
        if(isCheck) {
            arrayResult.push(arrayEmail[i]); 
        }
    }  
    console.log(`Có ${arrayResult.length} tên miền khác nhau trong danh sách là: `);
    for(let res of arrayResult) {
        console.log(res);
    }
}






