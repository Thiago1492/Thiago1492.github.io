var colors = ['color-0', 'color-1', 'color-2', 'color-3', 'color-4', 'color-5', 'color-6', 'color-7', 'color-8', 'color-9'];

function changeColor(band, direction) {
    var bandElement = document.getElementById(band);
    var currentColorClass = bandElement.className.split(' ')[1];
    var currentIndex = colors.indexOf(currentColorClass);

    var newIndex = (currentIndex + direction + colors.length) % colors.length;
    bandElement.className = 'color-dot ' + colors[newIndex];

    // Mueve la bolita a la posición correcta
    bandElement.style.top = (newIndex * 30) + 'px'; // Mueve la bolita por cada color
}

function calculate() {
    var band1Color = document.getElementById('band1').className.split(' ')[1].split('-')[1];
    var band2Color = document.getElementById('band2').className.split(' ')[1].split('-')[1];
    var multiplierColor = document.getElementById('multiplier').className.split(' ')[1].split('-')[1];
    var toleranceColor = document.getElementById('tolerance').className.split(' ')[1].split('-')[1];

    var band1 = parseInt(band1Color);
    var band2 = parseInt(band2Color);
    var multiplier = Math.pow(10, parseInt(multiplierColor));
    var tolerance = parseInt(toleranceColor) * 10; // Cambia este valor si tienes otros valores de tolerancia

    var resistance = (band1 * 10 + band2) * multiplier;
    var resultText = resistance + " ohms ±" + tolerance + "%";

    document.getElementById("result").innerText = resultText;
}
