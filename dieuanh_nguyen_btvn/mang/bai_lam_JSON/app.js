$(document).ready(function(){
    var jqxhr = $.getJSON("generated.json",{
        format: "json"
    }).done(function(data){
        showUsersBananaFavorite(data);
        showUsersWithGreatestFriendsNumber(data);
        showUserMen30WithMore2000dolars(data);
        showUserRegisteredBeforeData(data,new Date("2019-10-10"));
        showUserEmailDomains(data);
    }).fail(function(error){
        alert("Khong the tai du lieu json !")
    });
});

function showNumberAndDetail(blockId, users){
    $("#"+blockId+" .number").text(users.length);
    users.forEach(function (user){
        $("#"+blockId+" .detail").append($("<li class='name'></li>").text(typeof user === "string"?user:user.name));
    });
}

function showUsersBananaFavorite(data){
    const users = Array.isArray(data) ? data.filter(function(user){
        return typeof user === "object" && user.favoriteFruit === "banana";
    }):[];
    showNumberAndDetail("bananas",users);
}

function showUsersWithGreatestFriendsNumber(data){
    const maxNbFriends = Array.isArray(data) ?Math.max(...data.map(function(user){
        return (user.friends||[]).length;
    })):0;
    console.log(maxNbFriends);
    const users = Array.isArray(data) ?data.filter(function(user){
        return (user.friends||[]).length === maxNbFriends;
    }):[];
    showNumberAndDetail("friends",users);
    $("#friends .number-friends").text(maxNbFriends);
}

function showUserMen30WithMore2000dolars(data){
    const users = Array.isArray(data) ?data.filter(function(user){
        let balance = parseFloat(user.balance.replace(/\$|,/gi,""));
        if (isNaN(balance)){
            balance = 0;
        }
        return user.gender === "male" && balance > 2000 && user.age > 30;
    }):[];
    showNumberAndDetail("men",users);
}

function showUserRegisteredBeforeData(data,date){
    const users = Array.isArray(data) ?data.filter(function(user){
        console.log(user.registered);
        var regexp = /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}) (-|\\+)(\d{2}):(\d{2})/gi;
        const registeredDateArr = !!user.registered ? [...user.registered.matchAll(regexp)]:null;
        let registeredDate;
        let timezoneInMiliseconds = 0;
        if (registeredDateArr.length === 1 && registeredDateArr[0].length === 10){
            const registeredDateInfos = registeredDateArr[0];
            registeredDate = new Date(Date.UTC(registeredDateInfos[1], registeredDateInfos[2], registeredDateInfos[3], registeredDateInfos[4], registeredDateInfos[5], registeredDateInfos[6]));
            const timezoneHour = parseInt(registeredDateInfos[7]+registeredDateInfos[8]);
            const timezoneMinute = parseInt(registeredDateInfos[7]+registeredDateInfos[9]);
            timezoneInMiliseconds = ((!isNaN(timezoneHour)?timezoneHour:0)*3600+(!isNaN(timezoneMinute)?timezoneMinute:0)*60)*1000;
        }
        return registeredDate instanceof Date && registeredDate.getTime() + timezoneInMiliseconds < date.getTime();
    }):[];
    showNumberAndDetail("registeredDates",users);
}

function showUserEmailDomains(data){
    const userEmailDomains = (Array.isArray(data) ?data.filter(function(user){
        return !!user.email;
    }):[]).map(function(user){
        const emails = user.email.split("@");
        return emails[emails.length-1];
    }).filter(function(value, index, self) {
        return self.indexOf(value) === index;
      });
      showNumberAndDetail("emails",userEmailDomains); 
}

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }