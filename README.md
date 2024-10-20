# HW06

I chose Global Inflation (1970 - 2022):CSV.The dataset contains inflation data from different countries, with inflation rates listed for various years from 1970 to 2022. 


I want to make an **Inflation Burst Animation**: Each country's inflation rate could be visualized as expanding circles, where the size of the circle changes over time to reflect different years' inflation rates.

I also display  the current year and increase the year for the animation.
```
text("Year: " + int(currentYear), width / 2, height / 2);
  currentYear += yearSpeed;
  if (currentYear > endYear) {
    currentYear = startYear;
  }
```
![year](image.png)


In the process of writing the code, I had a couple of error reports due to the fact that there were countries that had no data for a particular year and there was missing data. So I used the condition statement to handle the missing data.
```
      if (rate !== "") {
        inflationRates.push(float(rate));
      } else {
        inflationRates.push(null); // Handle missing data
      }
```
```
    // Skip countries with no inflation data for the current year
    if (inflationRate === null) continue;
```
