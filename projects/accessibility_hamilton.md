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
  <t class="description">This story map explores the intersection of housing affordability, accessibility to healthcare, and public transit availability for Hamilton's low-income senior renters. Between two census years, rising rents and the loss of affordable housing have displaced many seniors from central neighborhoods to peripheral areas, where they face limited access to essential services. The analysis reveals significant disparities in healthcare infrastructure, with central wards benefiting from higher densities of dementia care facilities, pharmacies, bus stops, and long-term care services, while peripheral wards remain underserved.<br>By integrating data-driven maps and socioeconomic indicators, the story map highlights how these disparities isolate seniors socially and economically, creating barriers to healthcare and mobility. It underscores the urgent need for equitable urban planning policies, including improved transit connectivity, expanded healthcare infrastructure, and affordable senior housing, to ensure Hamilton's aging population remains connected to their communities and essential resources. <br></t>

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
  <h2 class="map-subtitle">Introduction</h2>
  <div class="description">
      <d>Hamilton is facing an affordable housing crisis that has hit low-income senior renters the hardest. Over the past decade, the city has lost nearly 16,000 rental units priced below $750 per month (Census 2011, 2016, 2021). For seniors living on fixed incomes, such as pensions or government support, this has left few affordable options. Many are being forced to move from central neighborhoods to the city’s outskirts, where they encounter limited access to healthcare services and inadequate public transit. This displacement not only isolates seniors socially and economically but also creates significant challenges to their overall well-being.</d>
      <img 
          class="map-image" 
          src="/assets/images/senior_compare.jpg" 
          alt="accessibility_hamilton"
      >
      <z>Figure 1: Comparison of Senior Ratios Across Regions (source: Statistics Canada, Census Tracts, 2021)</z><br><br>
      <d>Hamilton’s population includes a notable percentage of seniors compared to other cities in Ontario. Figure 1. demonstrates residents aged 65 and older make up 18.3% of the population, slightly below the provincial average of 18.5% but higher than Toronto’s 17.1%. Seniors aged 85 and older account for 2.6% of the city’s population, similar to provincial and Toronto averages. As this aging population grows, so does the need to address the unique challenges seniors face, particularly in housing and accessibility.
      <br>This story map explores the ways rising rents and displacement are isolating Hamilton’s low-income senior renters. It focuses on three interconnected issues: the loss of affordable housing, access to dementia care facilities, and reliance on public transit. By examining these challenges, this project highlights the urgent need for policies that prioritize housing affordability and equitable urban planning. Through data-driven maps and analysis, this story map offers a clear understanding of the barriers facing seniors and proposes actionable solutions to ensure they remain connected to their communities.

</d>
  </div>
  <h2 class="map-subtitle">Mapping Senior Renters and Vulnerable Wards</h2>
  <div class="description">
      <d>
      This step combines the visualization of senior renters' distribution and their socioeconomic vulnerability across Hamilton, presenting a cohesive analysis of the challenges they face. By integrating data on senior population density, renter occupancy, and vulnerability scores, we gain a clearer understanding of how housing unaffordability and displacement affect low-income senior renters.<br></d>
      <d><strong>1. Senior Renters' Distribution:</strong><br></d>
      <img 
          class="map-image" 
          src="/assets/images/census_senior.jpg" 
          alt="accessibility_hamilton"
      ><z>Figure 2: Percentage of the population aged over 65 and over in Hamilton CMA, in 2021
      (source: Statistis Canada, Census of Population 2021, Hamilton CMA)</z><br><br>
      <d>Statistics Canada' 2021 census data (Figure 2), it maps the percentage of residents aged 65 and over across the Hamilton Census Metropolitan Area (CMA) at the census tract level. Although the map includes areas beyond the Hamilton Census Division (CD), such as Burlington and Grimsby, it offers valuable insights into the spatial distribution of seniors. The data reveals distinct patterns:<br></d>
      <ul>
        <d><strong>I.</strong> High concentrations (≥21%) of seniors are primarily located in the west and south of the Hamilton urban core.<br>
        <strong>II.</strong> Moderate concentrations (17% to < 21%) form a transitional zone around the edges of the urban core, separating the densest senior populations in outer areas from younger demographics in the city center.<br>
        <strong>III.</strong> Lower concentrations (< 17%) are found in central urban areas, particularly around the downtown core and adjacent neighborhoods.</d>
      </ul>
      <d>This urban-rural divide suggests that seniors are increasingly moving away from the city center, possibly due to affordability pressures or a preference for less densely populated suburban or rural areas. A comparison map (Figure 3) of senior distribution maps from 2016 to 2021 highlights this trend, showing a noticeable shift of senior populations toward peripheral areas over five years.
      </d>
      <img 
          class="map-image" 
          src="/assets/images/senior_distribution.jpg" 
          alt="accessibility_hamilton"
      ><z>Figure 3: Comparison of Senior Distribution of 2016 and 2021 in Hamilton CD
      (source: City of Hamilton Open Data Portal, Census Data, 2016 and 2021)
      </z><br>
      <d><strong>2. Renter Occupancy and Housing Demands </strong><br></d>
      <d>Since detailed rental market data by age group is unavailable, this step's analysis base on renter occupancy rates to approximate rising rental housing demands. Comparing renter distribution maps (Figure 4) from 2016 and 2021 shows a significant increase in tenant occupancy, particularly in peripheral wards. In 2021, the highest tenant occupancy range (55.21%–76.6%) surpassed the highest range in 2016 (32.31%–76.4%). This increase suggests a growing demand for rental housing, likely driven by migration to peripheral wards.</d>
      <img 
          class="map-image" 
          src="/assets/images/renter_distribution.jpg" 
          alt="accessibility_hamilton"
      ><z>Figure 4: Comparison of Renter Distribution of 2016 and 2021 in Hamilton CD
      (source: City of Hamilton Open Data Portal, Housing Tenure, 2016 and 2021)</z><br>
      <d><strong>3. Vulnerability Scores</strong><br></d>
      <d>To assess the socioeconomic vulnerability of seniors across Hamilton’s 15 wards, the weighted scores is calculated by using the following indicators:<br>
      <ul>
        <d><strong>I.</strong> Senior Low-Income Measure (LIM) Rate (40%)<br>
        <strong>II.</strong> Tenant Unaffordability (20%)<br>
        <strong>III.</strong> Senior Population Distribution (20%)<br>
        <strong>IV.</strong> Renter Occupancy (20%)</d>
      </ul>
      <d>The vulnerability score for Hamilton’s wards increased from 84.7% in 2016 to 89.5% in 2021 (Figure 5), indicating growing challenges for low-income senior renters. Vulnerability has shifted from the city center to peripheral areas, aligning with trends in senior migration and rising rental demand.
      </d>
      <img 
          class="map-image" 
          src="/assets/images/vulnerable_score.jpg" 
          alt="accessibility_hamilton"
      ><z>Figure 5: Comparison of Vulnerable Score of 2016 and 2021 in Hamilton CD</z><br>
      <d><strong>4. Housing Affordability and Unaffordability Trends</strong><br>
      <img 
          class="map-image" 
          src="/assets/images/hamilton_zone.jpg" 
          alt="accessibility_hamilton"
      ></d><z>Figure 6: Hamilton CMA Zone Distribution 2020
      (source: Rental Market Report - Hamilton CMA - Date Releases - 2020)</z><br>
      <img 
          class="map-image" 
          src="/assets/images/rent_compare.jpg" 
          alt="accessibility_hamilton"
      ><z>Chart 1: Comparison of Hamilton CMA Rent Prices by Zone 2019 to 2023 
      (source: CMHC’s Rental Market Survey 2019 and 2023, Hamilton CMA, Private Row (Townhouse) and Apartment Average Rents ($), by Zone and Bedroom Type)</z><br>
      <d>According to CMHC’s Hamilton CMA rental market reports and maps (Figure 6 and Chart 1), rental prices have increased steadily across zones. However, Zone 09 experienced the most dramatic increase, likely due to its larger area and higher prevalence of private row housing, which is costlier than apartments. The unaffordability rate comparison map (Figure 7) from 2016 to 2021 reveals a general improvement across the city:<br>
      <ul>
        <d><strong>I.</strong> Central wards (1–4) saw a significant decline in unaffordability, from 47.91%–54.50% in 2016 to 38.71%–40.40% in 2021.<br>
        <strong>II.</strong> Intermediate wards (5–7) also experienced a reduction, moving from 42.31%–44.40% in 2016 to 30.91%–35.30% in 2021.<br>
        <strong>III.</strong> Peripheral wards (8–10, 11–15) remained the most affordable, with unaffordability rates dropping from 39.40%–40.40% in 2016 to 28.60%–30.90% in 2021.<br>
        <strong>IV.</strong> However, some peripheral wards, such as Ward 13, saw a slight increase in unaffordability by 2021.</d>
      </ul>
      <img 
          class="map-image" 
          src="/assets/images/unaffordable_rate.jpg" 
          alt="accessibility_hamilton"
      ><z>Figure 7: Comparison of Unaffordability Rate of 2016 and 2021 in Hamilton CD
      (source: City of Hamilton Open Data Portal, Census Income, 2016 and 2021)
      </z><br>
      <d><strong>5. Implications for Senior Mobility</strong><br>
      The observed trends in affordability and vulnerability scores highlight the mobility challenges faced by low-income senior renters in Hamilton:<br>
      <ul>
        <d> <strong>I.</strong> Central Wards: While unaffordability has decreased, central wards remain out of reach for many low-income seniors due to high rental costs relative to fixed incomes.<br>
        <strong>II.</strong> Intermediate Wards: These wards, with a balance between affordability and accessibility, may attract more seniors due to better transit connectivity and healthcare access.<br>
        <strong>III.</strong> Peripheral Wards: Despite being the most affordable, these areas often lack sufficient transit and healthcare infrastructure, creating challenges for seniors reliant on public transportation to access essential services.
        </d>
      </ul> 
      These patterns indicate a growing displacement of low-income seniors to peripheral areas, which could lead to overcrowding and strain on limited resources. This step sets the stage for examining how housing market trends and unaffordability exacerbate vulnerabilities, particularly for seniors dependent on transit and healthcare access.<br>
      
</d>


  <h2 class="map-subtitle">Accessibility to Dementia Care Facilities</h2>
  <div class="description">
      <d>
      The accessibility analysis of dementia care facilities across Hamilton's wards reveals notable disparities, underscoring the uneven provision of healthcare services for elderly residents. Wards 15 and 13 exhibit the highest accessibility to dementia care facilities, suggesting that residents in these wards are in closer proximity to specialized dementia care. However, this advantage is not complemented by the availability of other essential healthcare-related infrastructure.
      <br>
      <img 
          class="map-image" 
          src="/assets/images/bus.jpg" 
          alt="accessibility_hamilton"
      ><z>Figure 8: Bus Stops and Dementia Health Service Point Distribution in Hamilton CD</z>
      <br>
      <d><strong>1. Combined Weighted Facility Density</strong><br>
      The combined weighted facility density map (Figure 9), which incorporates the distribution of long-term care facilities, pharmacies, and bus stops with respect to each ward's senior population ratio, provides a comprehensive view of overall service accessibility. Wards 2, 7, 8, and 14 show the highest combined facility density, indicating a concentration of supporting services in central areas. In contrast, Wards 11, 12, 13, and 15 have significantly lower combined facility densities, pointing to a lack of complementary facilities that would support elderly residents in accessing dementia care.<br>
      <img 
          class="map-image" 
          src="/assets/images/all_density.jpg" 
          alt="accessibility_hamilton"
      ><z>Figure 9: Long-Term Care, Pharmacy, and Bus Stops Distribution by Hamilton CD Wards</z><br>
      <strong>2. Individual Facility Density Analysis</strong><br>
      <ul><d><strong>Pharmacy Density (Figure 10):</strong> The pharmacy density analysis shows Ward 2 with the highest concentration of pharmacies, while suburban Wards 9, 11, 12, 13, and 15 have minimal availability, limiting residents' access to essential medications.<br></d></ul>
      <img 
          class="map-image" 
          src="/assets/images/pharmacy.jpg" 
          alt="accessibility_hamilton"
      ><z>Figure 10: Pharmacy Distribution by Hamilton CD Wards </z><br>
      <ul><d><strong>Bus Stop Density (Figure 11):</strong> Similarly, bus stop density is highest in Wards 2, 7, 8, and 14, supporting ease of transit in these areas. In contrast, Wards 9, 11, 12, 13, and 15 have limited public transit options, posing challenges for residents needing transportation to healthcare facilities.<br></d></ul>
      <img 
          class="map-image" 
          src="/assets/images/bus_den.png" 
          alt="accessibility_hamilton"
      ><z>Figure 11: Bus Stops Distribution by Hamilton CD Wards </z><br>
      <ul><d><strong>Long-Term Care Facility Densit (Figure 12):</strong> The density of long-term care facilities also varies significantly across wards. Ward 14 has the highest concentration of long-term care facilities, whereas Wards 11, 12, 13, and 15 are underserved in this regard.<br></d></ul>
      <img 
          class="map-image" 
          src="/assets/images/LTC.png" 
          alt="accessibility_hamilton"
      ><z>Figure 12: Long-Term Care Distribution by Hamilton CD Wards </z><br>
      <strong>3. Overall Findings and Recommendations</strong><br>
      <d>Overall, the findings emphasize that while Wards 15 and 13 may have better accessibility to dementia care facilities due to the proximity of bus stops, they lack the supporting infrastructure required for effective and convenient access, especially toward their peripheral areas. The combined weighted facility density map highlights the uneven distribution of critical services across Hamilton's wards, creating barriers for elderly residents in accessing necessary care. There is an urgent need for targeted interventions to address these disparities and ensure equitable access to healthcare services, particularly in underserved areas.<br><br>

</d>
</d>

  <h3 class="map-subtitle">To Conclude</h3>
  <div class="description">
      <d>
      The mapping and analysis reveal that while central wards such as Wards 2, 7, 8, and 14 have a higher concentration of essential facilities—pharmacies, bus stops, and long-term care homes—the peripheral wards, including Wards 11, 12, 13, and 15, remain underserved. Seniors displaced to these areas face limited access to pharmacies and healthcare services, compounded by a lack of public transit connectivity. Even in Wards 15 and 13, which have better accessibility to dementia care facilities, the supporting infrastructure is insufficient, particularly in their outer regions. These disparities in facility density and accessibility create significant barriers for vulnerable elderly populations, leaving many socially and economically isolated.<br>
      This analysis also underscores the interconnectedness of housing affordability, healthcare access, and public transit infrastructure. Seniors’ mobility and ability to remain engaged in their communities hinge on equitable access to these critical services. The ongoing loss of affordable rental units and the migration of seniors to less accessible areas pose a risk of further widening the gap in healthcare and social support for Hamilton’s aging population.<br>
      To address these challenges, targeted policy interventions are essential. These could include increasing investment in public transit infrastructure in underserved wards, incentivizing the development of healthcare facilities and pharmacies in peripheral areas, and prioritizing affordable housing initiatives to allow seniors to remain in centrally located, well-serviced neighborhoods. Additionally, integrating healthcare and transit planning into broader urban development strategies would ensure a more equitable distribution of services for seniors across all wards.


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
