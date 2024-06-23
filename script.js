function convertTemperature() {
    const fahrenheitInput = document.getElementById("fahrenheit");
    const celsiusInput = document.getElementById("celsius");
    const fahrenheitValue = parseFloat(fahrenheitInput.value);
  
    if (!isNaN(fahrenheitValue)) {
      const celsiusValue = (fahrenheitValue - 32) * 5 / 9;
      celsiusInput.value = celsiusValue.toFixed(2);
    } else {
      celsiusInput.value = "";
      alert("Please enter a valid number for Fahrenheit.");
    }
  }
  