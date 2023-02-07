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

// region Switches

// Simple css to style it like a toggle switch
// Tutorial:
// https://dev.to/ananyaneogi/create-a-dark-light-mode-switch-with-css-variables-34l8

const modeToggleSwitch = document.querySelector('#mode-checkbox');

const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'dark') {
    modeToggleSwitch.checked = true;
  }
}

modeToggleSwitch.addEventListener('change', switchTheme, false);

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark'); //add this
  }
  else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light'); //add this
  }
}
// endregion

function renderConversions(){
  let inputVal = inputEl.value;

  let imperialLengthResult = feetToMeters(inputVal).toFixed(3);
  let imperialVolumeResult = gallonToLiter(inputVal).toFixed(3);
  let imperialMassResult = poundToKilogram(inputVal).toFixed(3);

  let metricLengthResult = metersToFeet(inputVal).toFixed(3);
  let metricVolumeResult = literToGallon(inputVal).toFixed(3);
  let metricMassResult = kilogramToPound(inputVal).toFixed(3);

  lengthResultEl.textContent = `${inputVal} feet = ${imperialLengthResult} meters | ${inputVal} meters = ${metricLengthResult} feet`
  volumeResultEl.textContent = `${inputVal} gallons = ${imperialVolumeResult} liters | ${inputVal} liters = ${metricVolumeResult} gallons`
  massResultEl.textContent = `${inputVal} pounds = ${imperialMassResult} kilograms | ${inputVal} kilograms = ${metricMassResult} pounds`
}