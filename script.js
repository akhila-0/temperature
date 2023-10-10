// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

document.addEventListener("DOMContentLoaded", function () {
    const celsiusInput = document.getElementById("celsiusInput");
    const convertButton = document.getElementById("convertButton");
    const resultText = document.getElementById("resultText");

    convertButton.addEventListener("click", function () {
        const celsius = parseFloat(celsiusInput.value);
        if (!isNaN(celsius)) {
            const fahrenheit = celsiusToFahrenheit(celsius);
            resultText.textContent = `Result: ${celsius}°C = ${fahrenheit.toFixed(2)}°F`;
        } else {
            resultText.textContent = "Please enter a valid temperature in Celsius.";
        }
    });
});
