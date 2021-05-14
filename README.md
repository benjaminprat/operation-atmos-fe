# Operation Atmos
###### Find fresh air for your outdoor activities.
---
## Table of Contents
* [Introduction](#Introduction)
* [Technologies](#Technologies)
* [Deployment](#Deployment)
* [Features](#Features)
* [Learning Process](#Learning-Process)
* [Author](#Author)

## Introduction
Last summer, as wildfires were raging across the western United States, residents who live and recreate nearby were often faced with the decision of whether to be active outdoors in the first place, and if so, where to go. Hikers, runners, cyclists, dog walkers, and more could have used an app that brings in up-to-date weather and air quality information by location to help make that decision.

[Operation Atmos](https://github.com/benjaminprat/operation-atmos-fe) solves this problem by tapping into data from the [IQAir AirVisual API](https://www.iqair.com/us/). Users can view data for their current location, add and remove other locations, get advice on whether it's safe to recreate outdoors given the AQI for that area, and click to view trail recommendations for each location on [AllTrails](https://www.alltrails.com/). 

## Technologies
JavaScript, Vue, RESTful APIs, Cypress, Local Storage, HTML, CSS

---

## Deployment
[Deployment Link](https://operation-atmos-fe.vercel.app/)

**To run locally:**
1. Clone down this repo
2. `npm install`
3. `npm run start`

---

## Features
* [Display Current Location](#Display-Current-Location)
* [Display Other Locations](#Display-Other-Locations)
* [Activity Recommendations](#Activity-Recommendations)
* [View Trails](#View-Trails)


#### Display Current Location
When the site loads, the you'll see a form with options to get info for your current location or to choose a location from a dropdown list of available cities and states. If you click "Nearest Location," a card will show up and persist on refresh with the latest data so you can stay up to date with the AQI and weather for where you are.
<p align = "center">
<img width="450" alt="Display Current Location" src="https://media.giphy.com/media/foFXwtRlWiZFIg8zc9/giphy.gif">
</p>
 

#### Display Other Locations
To see what the AQI and weather looks like in other areas, you can choose supported cities and states from the dropdown menus in the form. Once a new location has been added, it's automatically saved so that you can come back to it later on. You can also delete a location if you no longer want to view it. Each card can be individually refreshed to view the latest weather and AQI data.
<p align = "center">
<img width="450" alt="Display Other Locations" src="https://media.giphy.com/media/sdjoeSFQPEEHGNAzv0/giphy.gif">
</p>
 
#### Activity Recommendations
To make the app directly relevant to our active/outdoorsy target audience, messages are displayed with specific recommendations for outdoor activity based on a location's given AQI and what [AirNow.gov](https://www.airnow.gov/) suggests is safe.
<p align = "center">
<img width="450" alt="AQI Activity Recommendations" src="https://media.giphy.com/media/9zPnSHTh7EbgLdTGB0/giphy.gif">
</p>
  
#### View Trails
Taking the activity recommendations a step further, I added a button to each location card that sends users to the trails page for that location on AllTrails.
<p align = "center">
<img width="450" alt="AllTrails" src="https://media.giphy.com/media/bXzUUBzuHlmPAShKGe/giphy.gif">
</p>
  

### Accessibility and Responsive Design
This app was built with all users in mind. I used Lighthouse and [WAVE](https://wave.webaim.org/) to work towards including as broad of an audience as I could. Of course, as I am committed to including all users, I am ready to make future edits to address any areas that I may have missed.
<img width="250" alt="DesertTrail" src="https://media.giphy.com/media/8rEEzRU1HtG8rHSCDN/giphy.gif">

### Future Improvements
- Allow a user to login to see their saved locations (rather than using local storage). I'd love to dive into Firebase for this as another new "stretch" technology for me.
- Bring in AQI rankings, interactive maps, or other data visualizations

---

## Challenges

I had decided to bring in our data from the API calls early on in the process because I wasn't sure how long it would take me to figure it out in the new framework. But in the future, I would likely try to hold out on implementing the API calls for as long as possible and bring in my data from our mock data file to speed up my development & QA testing process.

---

## Authors
<table>
    <tr>
        <td> Ben Prat <a href="https://github.com/benjaminprat">GH</td>
    </tr>
</table>
