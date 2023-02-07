const convertBtn = document.getElementById("convert-btn");
const inputEl = document.getElementById("input-el");
const lengthResultEl = document.getElementById("length-result");
const volumeResultEl = document.getElementById("volume-result");
const massResultEl = document.getElementById("mass-result");
convertBtn.addEventListener("click", ()=>{
  renderConversions();
});

const feetToMeters = (feet) => feet * 0.3048;
const gallonToLiter = (gal) => gal * 3.785410;
const poundToKilogram = (lb) => lb * 0.453592;

const metersToFeet = (meter) => meter * 3.28084;
const literToGallon = (liter) => liter * 0.264172;
const kilogramToPound = (kg) => kg * 2.20462;

function renderConversions(){
  let inputVal = inputEl.value;

  let imperialLengthResult = feetToMeters(inputVal).toFixed(3);
  let imperialVolumeResult = gallonToLiter(inputVal).toFixed(4);
  let imperialMassResult = poundToKilogram(inputVal).toFixed(5);

  let metricLengthResult = metersToFeet(inputVal).toFixed(3);
  let metricVolumeResult = literToGallon(inputVal).toFixed(4);
  let metricMassResult = kilogramToPound(inputVal).toFixed(5);

  lengthResultEl.textContent = `${inputVal} feet = ${imperialLengthResult} meters | ${inputVal} meters = ${metricLengthResult} feet`
  volumeResultEl.textContent = `${inputVal} gallons = ${imperialVolumeResult} liters | ${inputVal} liters = ${metricVolumeResult} gallons`
  massResultEl.textContent = `${inputVal} pounds = ${imperialMassResult} kilograms | ${inputVal} kilograms = ${metricMassResult} pounds`
}