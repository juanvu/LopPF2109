function tinh() {
    let R = document.getElementById("r").value;
    const Pi = 3.14;
    let C = 2 * R * Pi;
    let S = R * R * Pi;
    document.getElementById("C").innerHTML = C;
    document.getElementById("S").innerHTML = S;
}