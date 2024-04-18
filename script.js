
    function updateDefaults() {
      let selectedOption = document.getElementById('vehicleSegment').selectedOptions[0];
      document.getElementById('co2EmissionFactor').value = parseFloat(selectedOption.getAttribute('data-co2-factor'));
      document.getElementById('electricityCo2Factor').value = parseFloat(selectedOption.getAttribute('data-electricity-co2-factor'));
      document.getElementById('evBatteryCapacity').value = parseFloat(selectedOption.getAttribute('data-ev-battery-capacity'));
      document.getElementById('evRange').value = parseFloat(selectedOption.getAttribute('data-ev-range'));
    }

    function calculateAnnualJourneyDistance() {
      let journeyDistance = parseFloat(document.getElementById('journeyDistance').value);
      let journeyFrequency = document.getElementById('journeyFrequency').value;
      let annualJourneyDistance = 0;
      switch (journeyFrequency) {
        case 'Daily':
          annualJourneyDistance = journeyDistance * 365;
          break;
        case 'Weekly':
          annualJourneyDistance = journeyDistance * 52 + 1;
          break;
        case 'Monthly':
          annualJourneyDistance = journeyDistance * 12;
          break;
      }
      document.getElementById('annualJourneyDistance').value = annualJourneyDistance;
    }

    function calculateEmissions() {
      
      let annualJourneyDistance = parseFloat(document.getElementById('annualJourneyDistance').value);
      let co2EmissionFactor = parseFloat(document.getElementById('co2EmissionFactor').value);
      let evBatteryCapacity = parseFloat(document.getElementById('evBatteryCapacity').value);
      let evRange = parseFloat(document.getElementById('evRange').value);
      let electricityCo2Factor = parseFloat(document.getElementById('electricityCo2Factor').value);

      // Perform calculations
      let currentVehicleEmissions = annualJourneyDistance * co2EmissionFactor;
      let evEmissions = (annualJourneyDistance / evRange) * evBatteryCapacity * electricityCo2Factor;

      // Display results
      let result = document.getElementById('result');
      result.style.visibility='visible'
      result.innerHTML = `<div>You can save ${(currentVehicleEmissions.toFixed(2) - evEmissions.toFixed(2))/100} kg of CO<sub>2</sub> Emission Annually</div> <div><h3>!!Be The Change!!</h3></div>`
    }

    // Initialize default values
    updateDefaults();