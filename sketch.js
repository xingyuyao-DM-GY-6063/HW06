let inflationData;
let countries = [];
let currentYear = 1970;
let startYear = 1970;
let endYear = 2022;
let yearSpeed = 0.2;
let maxInflation = 50; // Maximum inflation rate to scale the circles

function preload() {
  // Load the data from a CSV file
  inflationData = loadTable("Global-Inflation.csv", "csv", "header");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(16);
  textAlign(CENTER, CENTER);

  // Process the data
  for (let i = 0; i < inflationData.getRowCount(); i++) {
    let country = inflationData.getString(i, "country");
    let inflationRates = [];

    // Load inflation rates from 1970 to 2022
    for (let year = startYear; year <= endYear; year++) {
      let rate = inflationData.getString(i, String(year));
      if (rate !== "") {
        inflationRates.push(float(rate));
      } else {
        inflationRates.push(null); // Handle missing data
      }
    }

    // Store country and its inflation rates
    countries.push({
      name: country,
      inflationRates: inflationRates,
      x: random(width),
      y: random(height),
      color: [random(100, 255), random(100, 255), random(100, 255)], //randomize the color
    });
  }
}

function draw() {
  background(20);

  // Loop through each country and draw their inflation circles
  for (let i = 0; i < countries.length; i++) {
    let country = countries[i];
    let inflationRate = getInflationForYear(country, int(currentYear));

    // Skip countries with no inflation data for the current year
    if (inflationRate === null) continue;

    // Map the inflation rate to a circle size
    let circleSize = map(inflationRate, 0,maxInflation, 10, 200);

    // Draw the inflation circle
    fill(country.color);
    noStroke();
    ellipse(country.x, country.y, circleSize);

    // Display country name
    fill(255);
    textSize(12);
    text(country.name, country.x, country.y);
  }

  // Display current year
  fill(255);
  textSize(32);
  text("Year: " + int(currentYear), width / 2, height / 2);
  // Increment the year for the animation
  currentYear += yearSpeed;
  if (currentYear > endYear) {
    currentYear = startYear;
  }
}

// create a function to get the inflation rate for a country in a specific year
function getInflationForYear(country, year) {
  let index = year - startYear;
  if (index >= 0 && index < country.inflationRates.length) {
    return country.inflationRates[index];
  }
  return null;
}
