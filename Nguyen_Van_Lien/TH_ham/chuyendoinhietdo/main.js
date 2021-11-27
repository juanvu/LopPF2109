function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById('outputCelsius').innerHTML = (valNum - 32) / 1.8;
}