function showBands() {
    var numBands = document.getElementById("band-number").value;

    document.querySelectorAll(".band-option").forEach(function(div) {
        div.style.display = "none";
    });

    
    if (numBands) {
        document.getElementById("bands-" + numBands).style.display = "block";
    }
}
document.addEventListener("DOMContentLoaded", function() {
    showBands();
});



function calculate() {
    var numBands = document.getElementById("band-number").value;
    var resistance = 0;
    var resultText = "";

    if (numBands == 4) {
            var band1 = parseFloat(document.getElementById('band1-4').value);

        var band2 = parseFloat(document.getElementById('band2-4').value);
        var multiplier = parseFloat(document.getElementById('multiplier-4').value);
        var tolerance = document.getElementById('tolerance-4').value;

        resistance = (band1 * 10 + band2) * multiplier;
        resultText = resistance + " ohms ±" + tolerance + "%";
    } else if (numBands == 5) {
        var band1 = parseFloat(document.getElementById('band1-5').value);
        var band2 = parseFloat(document.getElementById('band2-5').value);
        var band3 = parseFloat(document.getElementById('band3-5').value);
        var multiplier = parseFloat(document.getElementById('multiplier-5').value);
        var tolerance = document.getElementById('tolerance-5').value;

        resistance = (band1 * 100 + band2 * 10 + band3) * multiplier;
        resultText = resistance + " ohms ±" + tolerance + "%";
    } else if (numBands == 6) {
        var band1 = parseFloat(document.getElementById('band1-6').value);
        var band2 = parseFloat(document.getElementById('band2-6').value);
        var band3 = parseFloat(document.getElementById('band3-6').value);
        var band4 = parseFloat(document.getElementById('band4-6').value);
        var multiplier = parseFloat(document.getElementById('multiplier-6').value);
        var tolerance = document.getElementById('tolerance-6').value;
        
        resistance = (band1 * 1000 + band2 * 100 + band3 * 10 + band4) * multiplier;
        resultText = resistance + " ohms ±" + tolerance + "%" + band4 + " ppm/C°";

    }   
    
   
    document.getElementById("result").innerText = resultText;

}

