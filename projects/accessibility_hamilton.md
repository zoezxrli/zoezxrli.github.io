---
layout: page
title: "GGR377 Rising Rents and Senior Care in Hamilton"
permalink: /projects/accessibility_hamilton/
---

<!-- Wrap the entire content in a project-container div -->
<div class="project-container">

  <h1 class="project-title">GGR377 Assignment 2</h1>
  <h1 class="project-title">Displacement and Dementia Care: The Impact of Rising Housing Costs on Hamilton's Seniors</h1>
  <h3 class="map-subtitle">Project Summary</h3>
  <t class="description">This is a story map... <br></t>

  <t class="description"><br><strong>Project: </strong>GGR377 Assignment 2: Displacement and Dementia Care: The Impact of Rising Housing Costs on Hamilton's Seniors</t>
  <t class="description"><br><strong>Instructor: </strong>Karen Chapple</t>
  <t class="description"><br><strong>Author: </strong>Zhuoxinran(Zoe) Li</t>
  <t class="description"><br><strong>Time: </strong>2024, Nov to Dec (exp.)</t>
  <t><br><strong>Skills:</strong> ArcGIS Pro, Python, OpenStreetMap<br><br></t>

  <!-- Embed ArcGIS Dashboard -->
  <div class="map-section">
      <img 
          class="map-image" 
          src="/assets/images/health_care.jpg" 
          alt="accessibility_hamilton"
      >
  </div>
  <!-- Dashboard Description -->
  <h3 class="map-subtitle">Introduction</h3>
  <div class="description">
      <d>Hamilton is facing an affordable housing crisis that has hit low-income senior renters the hardest. Over the past decade, the city has lost nearly 16,000 rental units priced below $750 per month (Census 2011, 2016, 2021). For seniors living on fixed incomes, such as pensions or government support, this has left few affordable options. Many are being forced to move from central neighborhoods to the city’s outskirts, where they encounter limited access to healthcare services and inadequate public transit. This displacement not only isolates seniors socially and economically but also creates significant challenges to their overall well-being.</d>
      <img 
          class="map-image" 
          src="/assets/images/senior_compare.jpg" 
          alt="accessibility_hamilton"
      >
      <br>
      <d>(source: Statistics Canada, Census Tracts, 2021)<br></d>
      <d>Hamilton’s population includes a notable percentage of seniors compared to other cities in Ontario. Residents aged 65 and older make up 18.3% of the population, slightly below the provincial average of 18.5% but higher than Toronto’s 17.1%. Seniors aged 85 and older account for 2.6% of the city’s population, similar to provincial and Toronto averages. As this aging population grows, so does the need to address the unique challenges seniors face, particularly in housing and accessibility.<br>
      <br>This story map explores the ways rising rents and displacement are isolating Hamilton’s low-income senior renters. It focuses on three interconnected issues: the loss of affordable housing, access to dementia care facilities, and reliance on public transit. By examining these challenges, this project highlights the urgent need for policies that prioritize housing affordability and equitable urban planning. Through data-driven maps and analysis, this story map offers a clear understanding of the barriers facing seniors and proposes actionable solutions to ensure they remain connected to their communities.

</d>
  </div>
  <h3 class="map-subtitle">Step 2: Mapping Senior Renters and Vulnerable Wards</h3>
  <div class="description">
      <d>
      This step combines the visualization of senior renters' distribution and their socioeconomic vulnerability across Hamilton, presenting a cohesive analysis of the challenges they face. By integrating data on senior population density, renter occupancy, and vulnerability scores, we gain a clearer understanding of how housing unaffordability and displacement affect low-income senior renters.<br></d>
      <d><strong>Senior Renters' Distribution:</strong><br></d>
      <img 
          class="map-image" 
          src="/assets/images/census_senior.jpg" 
          alt="accessibility_hamilton"
      >
      (source: Statistis Canada, Census of Population 2021, Hamilton CMA)<br>
      <d>Using census data from 2021, we mapped the percentage of residents aged 65 and over across the Hamilton Census Metropolitan Area (CMA) at the census tract level. Although the map includes areas beyond the Hamilton Census Division (CD), such as Burlington and Grimsby, it offers valuable insights into the spatial distribution of seniors. The data reveals distinct patterns:<br></d>
      <d>1. High concentrations (≥21%) of seniors are primarily located in the west and south of the Hamilton urban core.<br>
      2. Moderate concentrations (17% to < 21%) form a transitional zone around the edges of the urban core, separating the densest senior populations in outer areas from younger demographics in the city center.<br>
      3. Lower concentrations (< 17%) are found in central urban areas, particularly around the downtown core and adjacent neighborhoods.<br>
      </d>
      <d>This urban-rural divide suggests that seniors are increasingly moving away from the city center, possibly due to affordability pressures or a preference for less densely populated suburban or rural areas. A comparison of senior distribution maps from 2016 to 2021 highlights this trend, showing a noticeable shift of senior populations toward peripheral areas over five years.
      </d>
      <img 
          class="map-image" 
          src="/assets/images/senior_distribution.jpg" 
          alt="accessibility_hamilton"
      >
      (source: City of Hamilton Open Data Portal, Census Data, 2016 and 2021)
      <br><br>
      <d><strong>Renter Occupancy and Housing Demands </strong><br></d>
      <d>Since detailed rental market data by age group is unavailable, we used renter occupancy rates to approximate rising rental housing demands. Comparing renter distribution maps from 2016 and 2021 shows a significant increase in tenant occupancy, particularly in peripheral wards. In 2021, the highest tenant occupancy range (55.21%–76.6%) surpassed the highest range in 2016 (32.31%–76.4%). This increase suggests a growing demand for rental housing, likely driven by migration to peripheral wards.</br></d>
      <img 
          class="map-image" 
          src="/assets/images/renter_distribution.jpg" 
          alt="accessibility_hamilton"
      >
      (source: City of Hamilton Open Data Portal, Housing Tenure, 2016 and 2021)
      <br>
      <d><strong>Vulnerability Scores</strong><br></d>
      <d>To assess the socioeconomic vulnerability of seniors across Hamilton’s 15 wards, we calculated weighted scores using the following indicators:<br>
      1. Senior Low-Income Measure (LIM) Rate (40%)<br>
      2. Tenant Unaffordability (20%)<br>
      3. Senior Population Distribution (20%)<br>
      4. Renter Occupancy (20%)<br>
      The vulnerability score for Hamilton’s wards increased from 84.7% in 2016 to 89.5% in 2021, indicating growing challenges for low-income senior renters. Vulnerability has shifted from the city center to peripheral areas, aligning with trends in senior migration and rising rental demand.
      </d>
      <img 
          class="map-image" 
          src="/assets/images/vulnerable_score.jpg" 
          alt="accessibility_hamilton"
      >
      <br><br>
      <d><strong>Housing Affordability and Unaffordability Trends</strong><br>
      <img 
          class="map-image" 
          src="/assets/images/hamilton_zone.jpg" 
          alt="accessibility_hamilton"
      ></d>
      (source: Rental Market Report - Hamilton CMA - Date Releases - 2020)<br>
      <img 
          class="map-image" 
          src="/assets/images/rent_compare.jpg" 
          alt="accessibility_hamilton"
      >
      (source: CMHC’s Rental Market Survey 2019 and 2023, Hamilton CMA, Private Row (Townhouse) and Apartment Average Rents ($), by Zone and Bedroom Type)<br>
      <d>According to CMHC’s Hamilton CMA rental market reports and maps, rental prices have increased steadily across zones. However, Zone 09 experienced the most dramatic increase, likely due to its larger area and higher prevalence of private row housing, which is costlier than apartments. The unaffordability rate comparison from 2016 to 2021 reveals a general improvement across the city:<br>
      1. Central wards (1–4) saw a significant decline in unaffordability, from 47.91%–54.50% in 2016 to 38.71%–40.40% in 2021.<br>
      2. Intermediate wards (5–7) also experienced a reduction, moving from 42.31%–44.40% in 2016 to 30.91%–35.30% in 2021.<br>
      3. Peripheral wards (8–10, 11–15) remained the most affordable, with unaffordability rates dropping from 39.40%–40.40% in 2016 to 28.60%–30.90% in 2021.<br> 
      4. However, some peripheral wards, such as Ward 13, saw a slight increase in unaffordability by 2021.<br>
      </d>
      <img 
          class="map-image" 
          src="/assets/images/unaffordable_rate.jpg" 
          alt="accessibility_hamilton"
      >
      (source: City of Hamilton Open Data Portal, Census Income, 2016 and 2021)
      <br><br>
      <d><strong>Implications for Senior Mobility</strong><br>
      The observed trends in affordability and vulnerability scores highlight the mobility challenges faced by low-income senior renters in Hamilton:<br>
      1. Central Wards: While unaffordability has decreased, central wards remain out of reach for many low-income seniors due to high rental costs relative to fixed incomes.<br>
      2. Intermediate Wards: These wards, with a balance between affordability and accessibility, may attract more seniors due to better transit connectivity and healthcare access.<br>
      3. Peripheral Wards: Despite being the most affordable, these areas often lack sufficient transit and healthcare infrastructure, creating challenges for seniors reliant on public transportation to access essential services.<br> 
      These patterns indicate a growing displacement of low-income seniors to peripheral areas, which could lead to overcrowding and strain on limited resources. This step sets the stage for examining how housing market trends and unaffordability exacerbate vulnerabilities, particularly for seniors dependent on transit and healthcare access.<br>
      
</d>
  </div>

  <h3 class="map-subtitle">Step 3: Accessibility to Dementia Care Facilities</h3>
  <div class="description">
      <d>
      As seniors are displaced to more affordable wards, their access to critical healthcare services diminishes. Long-term care homes and dementia care facilities are disproportionately concentrated in central wards such as Wards 2 and 3, leaving peripheral wards like Wards 11 and 15 underserved. This relocation increases travel distances and times for seniors, creating additional barriers to care.
      <d>Key Visualizations:</d>
      <d>Long-Term Care Facilities Overlayed on Vulnerable Scores: This map shows how high-vulnerability wards, such as Wards 11 and 12, have limited access to long-term care facilities, leaving displaced seniors at a significant disadvantage.</d>
      <img 
          class="map-image" 
          src="/assets/images/long_term_care.jpg" 
          alt="accessibility_hamilton"
      >
      <br>
      <d>The maps illustrate the mismatch between high-vulnerability areas and the availability of long-term care facilities. Seniors in peripheral wards face longer travel times and reduced access to specialized dementia care, exacerbating health inequities. These findings highlight the need for better distribution of healthcare resources across the city.

</d>
  </div>

  <h3 class="map-subtitle">Step 4: Transit Dependency and Mobility Challenges</h3>
  <div class="description">
      <d>
      Public transit plays a critical role in connecting seniors to healthcare facilities, yet its availability varies widely across Hamilton. Peripheral wards, such as 11, 12, and 15, have sparse bus stop distribution and limited transit routes, making it difficult for seniors to reach long-term care facilities and pharmacies. Displaced seniors, who are often reliant on public transportation, face significant mobility challenges in these areas.<br><br>
      Public Transit Accessibility Analysis<br>
      <d>Proximity to Long-Term Care Facilities: This map highlights the increased travel burden for seniors living in peripheral wards, where fewer healthcare resources are available.</d>
      <img 
          class="map-image" 
          src="/assets/images/bus.jpg" 
          alt="accessibility_hamilton"
      >
      <br>
      <d> The map reveals that transit infrastructure does not adequately support seniors in peripheral wards. For example, seniors in Wards 12 and 15 face longer and more complicated transit routes to reach healthcare facilities, increasing their reliance on community or family support. These gaps highlight the importance of enhancing public transit in underserved areas to ensure equitable access to essential services.
      </d>


</d>
  </div>

  <h3 class="map-subtitle">To Conclude</h3>
  <div class="description">
      <d>
      Hamilton’s rising housing costs are creating significant challenges for its aging population, particularly low-income senior renters. This analysis shows a clear pattern: seniors are being displaced from central wards, where rents have surged, to more affordable peripheral areas. However, these less expensive wards often lack the infrastructure and services needed to support seniors, creating new difficulties in their daily lives.<br>
      Displaced seniors face a range of challenges. Wards like 11, 12, and 15, while more affordable, have limited access to critical healthcare services, such as long-term care facilities and pharmacies. This results in longer travel distances and greater reliance on public transportation. For seniors with dementia, these barriers to care can lead to delays in receiving necessary treatment, worsening health outcomes and quality of life.<br>
      By expanding affordable housing options near essential services, improving transit infrastructure in affordable neighborhoods, and incentivizing the development of dementia care facilities, Hamilton can address these gaps. Ensuring that seniors—especially the most vulnerable—can age with dignity, independence, and access to care is essential for creating a more equitable and age-friendly city.<br>This research also reveals significant inequities in how healthcare and transit resources are distributed across Hamilton. Central wards, where rents have become increasingly unaffordable, remain hubs for healthcare facilities and transit networks. In contrast, peripheral wards with higher vulnerability scores lack the infrastructure needed to support the growing population of displaced seniors. This imbalance highlights systemic gaps that demand immediate attention.


</d>
  </div>


  <div class="description"><t>City of Chicago Data Portal. (2005-2023). Chicago Neighborhood Socioeconomic Data [Data sets: Crime, Health, Green Space, Education, Cultural Amenities, Population, Boundaries]. Retrieved from https://data.cityofchicago.org/</t>
  </div>
  <!-- Back to Projects Image Link -->
  <div class="back-to-projects">
      <a href="/projects/">
          <img src="/assets/images/back_button.png" alt="Back to Projects">
      </a>
  

</div>
