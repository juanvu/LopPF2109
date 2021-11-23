
function footToMeter(foot) {
    foot = parseFloat(foot);
    document.getElementById("meters").value = 0.305 * foot;
}

function meterToFoot(meter) {
    meter = parseFloat(meter);
    document.getElementById("feet").value = 3.279 * meter;
}
