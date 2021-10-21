function convertMoney() {
    let fromMoney = document.getElementById("fromMoney").value;
    let toMoney = document.getElementById("toMoney").value;
    let money = document.getElementById("money").value;
    if(fromMoney == "VND" && toMoney == "USD") {
        let resultMoney = money/23000;
        document.getElementById("show").innerHTML = '<h3 id="show">'+ resultMoney +'</h3>';
    }
}
