const myColor = ['Red', 'Green', 'White', 'Black']
document.getElementById("beginArr").innerHTML = `<div id="beginArr"> ['Red', 'Green', 'White', 'Black']</div>`

function start() {
    let strColor = myColor.toString();
    // let strColor = myColor.join();// Mặc định là ,
    document.getElementById("result").innerHTML = `<div id="result"> ${strColor}</div>`
}