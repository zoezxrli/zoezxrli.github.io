---
layout: page
title: "Senior Displacement"
permalink: /projects/senior_displacement/
---

<!-- Wrap the entire content in a project-container div -->
<div class="project-container">

  <h1 class="project-title">Final Project</h1>
  <h1 class="project-title">Displacement and Dementia Care: The Impact of Rising Housing Costs on Hamilton's Seniors</h1>
  <h3 class="map-subtitle">Project Summary</h3>
  <t class="description"><strong>TBA</strong><br>By integrating data-driven maps and socioeconomic indicators, the story map highlights how these disparities isolate seniors socially and economically, creating barriers to healthcare and mobility. It underscores the urgent need for equitable urban planning policies, including improved transit connectivity, expanded healthcare infrastructure, and affordable senior housing, to ensure Hamilton's aging population remains connected to their communities and essential resources. <br></t>

  <t class="description"><br><strong>Project: </strong>GGR377 Final Report: Displacement and Dementia Care: The Impact of Rising Housing Costs on Hamilton's Seniors</t>
  <t class="description"><br><strong>Instructor: </strong>Karen Chapple</t>
  <t class="description"><br><strong>Author: </strong>Zhuoxinran(Zoe) Li</t>
  <t class="description"><br><strong>Time: </strong>2024, Nov to Dec (exp.)</t>
  <t><br><strong>Skills:</strong> ArcGIS Pro, Python, OpenStreetMap<br><br></t>

  <!-- Embed ArcGIS Dashboard -->
  <div class="map-section">
      <img 
          class="map-image" 
          src="/assets/images/map_hamilton.jpg" 
          alt="accessibility_hamilton"
      >
  </div>

  <!-- Table of Content -->
  <h2 class="map-subtitle">Table of Content</h2>
    <div class="toc">
      <ul>
        <li><a href="#introduction"><strong>Introduction</strong></a></li>
        <li><a href="#background"><strong>Background</strong></a></li>
        <ul>
          <li><a href="#housing_market_trends">Housing Market Trends (2019-2023)</a></li>
          <li><a href="#aging_population">Hamilton’s aging population (2016-2021)</a></li>
          <li><a href="#peripheral_access">Peripheral accessibility challenges (2024)</a></li>
          <li><a href="#tools">Tools and Models Utilized (TBA)</a></li>
        </ul>
        <li><a href="#methodology"><strong>Methodology</strong></a></li>
        <ul>
          <li><a href="#data_source">Data Source</a></li>
          <li><a href="#housing_demands">Methods</a></li>
          <ul>
              <li><a href="#renters_distribution">Population-Weighted Centroid</a></li>
              <li><a href="#housing_demands">Vulnerability Score</a></li>
              <li><a href="#housing_demands">Accessibility Score</a></li>
              <li><a href="#housing_demands">Synthesizing Trends</a></li>
          </ul>
        <li><a href="#vulnerability_scores">Results</a></li>
        <ul>
          <li><a href="#affordability_trends">Senior Displacement Trends (2016-2021)</a></li>
          <li><a href="#senior_mobility">Vulnerability (2019-2023)</a></li>
          <li><a href="#affordability_trends">Accessibility Score (2024)</a></li>
          <li><a href="#affordability_trends">Synthesizing Trends</a></li>
        </ul>
        <li><a href="#affordability_trends">Recommendation</a></li>
        <li><a href="#senior_mobility">Conclusion</a></li>
        <li><a href="#dementia_care">Challenges and Limitations</a></li>
        <li><a href="#combined_density">Reference</a></li>
      </ul>
    </div>

  <!-- Dashboard Description -->
  <h2 id="introduction" class="map-subtitle">Introduction</h2>
  <div class="description">
      <d>According to Statistics Canada’s 2022 report, “Housing Challenges Remain for Vulnerable Populations in 2021,” despite fewer Canadian households living in unaffordable housing in 2021, significant challenges remain for certain vulnerable groups. In 2021, 3.8% of all households in Canada’s 10 provinces lived in social and affordable housing (SAH), representing 11.9% of renter households. However, a substantial number of households—around 227,100—were still waiting for access to SAH. Among those on the waitlist, nearly twice as many households (148,200) reported waiting two years or longer, compared to those waiting less than two years (76,000). Notably, 1.8% of the 4.1 million senior-led households in Canada were on a waitlist for SAH, with roughly seven in ten waiting for more than two years. Between 2018 and 2021, average monthly shelter costs, including rent or mortgages, utilities, property taxes, and condo fees, increased by 7.0% across the provinces. Despite a decrease in the number of households living in unaffordable housing, vulnerable populations, including senior renters, continue to face significant affordability challenges.<br>
      Senior renters living alone, who make up a substantial portion of the aging population, are particularly vulnerable. In 2021, 49.0% of lone senior renters were living in unaffordable housing, a rate nearly three times higher than that of senior homeowners living alone (18.8%). Among lone seniors in non-SAH housing, the situation is even more acute, with 55.0% living in unaffordable housing, compared to 31.0% of those in SAH (The Daily — Housing Challenges Remain for Vulnerable Populations in 2021).<br>
      In cities like Montreal, older low-income tenants face increasing risks of being displaced. This happens because rents rise due to gentrification. Seniors often live on fixed incomes, such as public pensions. Many cannot afford these rising rents. When rents become too high, they may have to move out or face eviction. This causes many problems. Moving can disrupt their social networks and make it harder to access healthcare. It can also lead to feelings of isolation, which harms their mental health (Simard, 2020). Similar problems exist in Hamilton. Rising rents have pushed seniors out of central neighborhoods. Many are forced to move to areas further away that are more affordable. However, these areas often lack healthcare services. This makes it harder for seniors to access important services like dementia care (Simard, 2020). Twigge Molecey (2023) calls this “exclusionary displacement.” This term describes how seniors are pushed into areas with fewer services and less access to what they need.<br>
      This study focuses on how rising housing costs in Hamilton affect low-income senior renters. It looks at how these costs have displaced seniors from central areas to suburban or less-served regions. The study also examines the impact of this displacement on their ability to access healthcare services, including dementia care. Past research has shown that rising rents often lead to displacement among low-income populations. This study will test whether similar trends exist in Hamilton’s housing market.<br>
      Although many studies have examined how rising housing costs affect vulnerable groups, there is less focus on seniors in Hamilton. This study uses ideas from past research on displacement and housing affordability. It applies these ideas to Hamilton’s situation. The study analyzes housing price trends, senior population movements, and access to transit and healthcare. By doing so, it sheds light on how displacement deepens inequalities in access to care for seniors in Hamilton.<br>
      This research focuses on the question: <strong>How do rising rents influence the displacement of low-income senior rentals in Hamilton, and how does this displacement impact their accessibility to dementia care facilities? </strong>It explores these issues with the goal of understanding the unique challenges faced by seniors in this city.
  </div>
<!-- Methods -->
  <h2 id="background" class="map-subtitle">Background</h2>
  <div class="description">
      <d><strong id="housing_market_trends">1. Housing Market Trends (2019-2023) </strong><br></d>
      <img 
          class="map-image" 
          src="/assets/images/renter_distribution.jpg" 
          alt="accessibility_hamilton"
      ><z>Figure 1: Hamilton CMA Zone Distribution 2020 (source: Rental Market Report - Hamilton CMA - Date Releases - 2020)</z><br>
      <img 
          class="map-image" 
          src="/assets/images/renter_distribution.jpg" 
          alt="accessibility_hamilton"
      ><z>Chart 1: Comparison of Hamilton CMA Rent Prices by Zone 2019 to 2023 (source: CMHC’s Rental Market Survey 2019 and 2023, Hamilton CMA, Private Row (Townhouse) and Apartment Average Rents ($), by Zone and Bedroom Type)</z><br>
      <d>Between 2019 and 2023, Hamilton experienced clear rent increases across its nine zones, as shown in the graph and the zone map. The average rent prices rose significantly, reflecting growing affordability challenges across the city.<br>
        <ul>
          <d><strong>I. Zones with the Largest Rent Increases:</strong><br>
          <ul>
            <d>• Zone 09 (Ancaster/Dundas/Flamborough/Glanbrook) had the highest average rent price in 2023, reaching approximately $1,800, compared to around $1,200 in 2019.<br>
            • Zone 08 (Burlington) also saw a sharp increase, with rents rising from about $1,400 in 2019 to over $1,750 in 2023.<br></d>
          </ul>
          </d>
          <d><strong>II. Moderate Increases in Central Zones:</strong><br>
          <ul>
            <d>• In Zone 04 (Central) and Zone 01 (Downtown Core), average rents climbed to about $1,400 in 2023, up from around $1,000 in 2019.<br></d>
          </ul>
          </d>
          <d><strong>III. Affordability in Central East and East End:</strong><br>
          <ul>
            <d>• Zone 02 (Central East) and Zone 03 (East End) remained relatively lower in rent price but still increased by nearly $300–$400 on average.<br></d>
          </ul>
          </d>
        </ul>
      <d>These trends demonstrate that while central neighborhoods remain moderately priced, the peripheral zones such as <strong>Zone 09</strong> and <strong>Zone 08</strong> have seen the steepest increases, reflecting an affordability crisis.<br>
      <d><strong id="aging_population">2. Hamilton’s aging population (2016-2021) </strong><br></d>
      <img 
          class="map-image" 
          src="/assets/images/renter_distribution.jpg" 
          alt="accessibility_hamilton"
      ><z>Figure 2: Comparison of Senior Distribution of 2016 and 2021 in Hamilton CD (source: City of Hamilton Open Data Portal, Census Data, 2016 and 2021)</z><br>
      <d>From figure 1’s legend intervals, it could see that senior distribution across Hamilton city has increased, with the max ratio from 23.8% to 26.94% and min 10.88% to 11.43%. In comparison both year’s senior distribution, Ward 13 has grown by 31% from 2016 to 2021. Similarly, Ward 10 and Ward 12, both located on the outskirts of Hamilton, each saw an increase of 2.0%. In contrast, Ward 1, situated in the central part of the city, experienced a slight decline of -0.07% in senior population density. This suggests that some seniors in this area may have been displaced, likely due to rising rents that exceed the financial capacity of those living on fixed incomes.<br>
      This pattern aligns with the concept of “exclusionary displacement,” as described by Twigge Molecey (2023). Seniors unable to afford increasing rents in central areas are forced to move to less expensive neighborhoods, which often lack the services and amenities they previously relied on. While Hamilton’s overall senior population is growing, much of this growth is concentrated in peripheral wards. Central areas, where healthcare and other essential services are typically more accessible, show little to no growth.<br>
      This trend is critical to the study as it highlights the link between rising housing costs and senior displacement. Seniors relocating to peripheral areas face significant challenges, particularly in accessing dementia care facilities and essential healthcare services. Understanding these patterns helps illustrate how housing affordability issues affect seniors’ quality of life and underscores the importance of analyzing their access to healthcare and transit as part of the displacement process.<br>
      </d>
      <d><strong id="peripheral_access">3. Peripheral accessibility challenges </strong><br></d>
      <img 
          class="map-image" 
          src="/assets/images/renter_distribution.jpg" 
          alt="accessibility_hamilton"
      ><z>Figure 2: Hamilton Bus Stops and Healthcare facility distribution. (source: City of Hamilton Open Data Portal, HSR Transit Feed, GTFS data 2024; Ontario GeoHub, Ministry of Health service provider locations, 2024)</z><br>
      <d> Figure 2 demonstrates the distribution of Bus stops and senior related Healthcare facilities across hamilton city. </d>
      <ul>
        <d><strong>Access to Healthcare Facilities</strong><br>
        The distribution of healthcare facilities across Hamilton reveals significant gaps between central and peripheral wards. The map shows a dense cluster of healthcare facilities, including dementia care centers, in the central wards such as Wards 1, 2, and 3. These areas provide relatively better access to essential health services for seniors.<br>
        In contrast, peripheral wards such as Ward 13 (Ancaster/Dundas), Ward 12 (West End), and Ward 15 (Flamborough) have noticeably fewer healthcare facilities. The lack of healthcare services in these areas poses challenges for seniors who may have been displaced from central neighborhoods. Seniors living in these wards must travel greater distances to access healthcare, which can be particularly difficult for those with mobility limitations or those requiring frequent visits to specialized dementia care facilities.<br>
        <strong>Access to Public Transit</strong><br>
        The map also highlights the uneven distribution of bus stops across Hamilton. In central wards like Ward 1, 2, and 3, the density of bus stops is significantly higher, ensuring good public transit coverage. Seniors living in these areas have more reliable access to transportation, which helps them reach healthcare facilities and other services with relative ease.<br>
        However, transit coverage is much sparser in peripheral wards such as Ward 13, 15, and 12. These areas have far fewer bus stops, with many neighborhoods located far from the nearest public transit route. For example, Ward 13 has only a handful of bus stops scattered across a large area, leaving much of the ward underserved. This limited access to public transit further compounds the challenges seniors face, as they may have to rely on costly alternatives like private transportation or endure long travel times to access healthcare.<br></d>
      </ul>
    </d>
      <d><strong id="tools">4. Tools and Models Utilized </strong></d>
      <ul>
        <d><strong>• Data Analysis: pandas</strong> and <strong>geopandas</strong> for data manipulation.<br>
        <strong>• Spatial Joins: </strong> Conducted using <strong>geopandas</strong> to merge ward data with facilities and services.<br>
        <strong>• Network Analysis: osmnx</strong> and <strong>networkx</strong> for analyzing the street network and calculating shortest paths.<br>
        <strong>• Proximity Calculations: scipy.spatial</strong> for nearest-neighbor search via KD-Tree.<br>
        <strong>• Classification: Natural Breaks (Jenks)</strong> using <strong>mapclassify</strong> to classify facility densities.<br>
        <strong>• Data Visualization: matplotlib</strong> for plotting maps and charts, with <strong>contextily</strong> used for basemap integration.<br></d>
      </ul>
  <h2 class="methodology">Methodology</h2>
  <h2 id="data_source" class="map-subtitle">Data Source</h2>
  <div class="description">
        <ul>
          <d><strong>Census Data (2016 and 2021): </strong><br>
          This dataset provides information on senior population densities, renter occupancy rates, rent burden, and LIM rate across Hamilton’s wards. It captures historical trends over a five-year period, serving as the foundation for understanding shifts in senior population and vulnerability dynamics.</d><br>
          <d><strong>Housing Price Trends (2019–2023):</strong><br>
          Housing price data from the Canada Mortgage and Housing Corporation (CMHC) tracks affordability trends over the past five years. These data are aggregated by CMHC zones rather than wards, highlighting how evolving housing costs have influenced displacement and affordability issues during the recent housing market changes.</d><br>
          <d><strong>Transit and Healthcare Data (2024):</strong><br>
          This dataset includes the most up-to-date locations of General Transit Feed Specification (GTFS) bus stops and Ontario healthcare facilities focused on senior-related services in Hamilton and across Ontario. The healthcare facilities are categorized by specific service types to align with the needs of senior populations. The selected facility types are:
          <ul><strong>
            Seniors Active Living Centres<br>
            Retirement Homes<br>
            Mental Health and Addiction Organizations<br>
            Long-Term Care Homes<br>
            Community Support Services<br></strong>         
          </ul>
          This data provides a detailed and updated view of the transit and healthcare infrastructure that supports seniors in Hamilton and Ontario. By integrating GTFS bus stops and healthcare facility locations, the dataset enables a comprehensive assessment of accessibility challenges faced by displaced seniors.
          </d>
        </ul>
      <ul>
      <d>This step combines the visualization of senior renters' distribution and their socioeconomic vulnerability across Hamilton, presenting a cohesive analysis of the challenges they face. By integrating data on senior population density, renter occupancy, and vulnerability scores, we gain a clearer understanding of how housing unaffordability and displacement affect low-income senior renters.</d></ul>
  </div>
  <h2 id="methods" class="map-subtitle">Methods</h2>
  <div class="description">
  <d>Based on literature reviewing Hallisey et al. and Tan et al. ‘s articles on facilities accessible related analysis, this study choose to use the population weighted centroid of each ward as the focal point, to analysis the accessibility to bus stops with isochorne (400m, 600m, 800m) (Lindén, 2021), and then calculate the centroid of bus stops in each ward to find their accessible healthcare facilities with isochron (5min, 10 min 15 min)(Dijck, 2024). Combine witht the vulnerable score (30% senior ration + 30% Renter occupancy + 20% rent burden + 20% low income measure (LIM)rate) of each ward, and Ward-level rent prices are integrated into the analysis to capture the affordability dimension. Combining rent data with vulnerability and accessibility scores, a final composite score is assigned to each ward, highlighting disparities in housing affordability, healthcare access, and transit connectivity.</d>
          <d><strong>Population weighted centroid: </strong><br>
         The use of population-weighted centroids in this study reflects a key principle of spatial optimization: balancing demand and proximity to enhance equity and efficiency in resource allocation. Drawing on the methodologies outlined by Hallisey et al. and Tan et al., this approach focuses on public health and senior accessibility, highlighting geographic clusters where seniors face challenges in housing, healthcare, and transit accessibility. By emphasizing housing-related vulnerabilities, the methodology aligns with the study's goal of understanding and addressing disparities in accessibility for vulnerable senior populations. This method is choosen because:<br>
         <ul>
            1. <strong>Enhanced Accuracy: </strong>Unlike geometric centroids, which represent the geometric center of a polygon, population-weighted centroids account for the actual distribution of seniors within each ward. This makes them more relevant for analyses of accessibility and equity.<br>
            2. <strong>Resource Optimization: </strong>Inspired by competitive facility location principles, the population-weighted centroid ensures that resources such as healthcare and transit services are positioned closer to high-need populations, improving equity in service delivery.<br>
            3. <strong>Foundation for Isochrone Calculations: </strong>These centroids provide the starting points for creating walking and transit isochrones, ensuring that accessibility assessments reflect real-world population clusters rather than abstract geographic centers.<br>
         </ul>
         Data Sources:<br>
         <ul>
            1. <strong>Ward Boundaries: </strong> Geospatial data containing the boundaries of Hamilton's wards. <br>
            2. <strong>Population Data: </strong> A point-based dataset indicating the spatial distribution of seniors aged 65 and older, with each point linked to a population value.<br>
         </ul>
         Population-Weighted Centroids Formular:<br>
         <img 
          class="map-image" 
          src="/assets/images/renter_distribution.jpg" 
          alt="accessibility_hamilton"><z>Population Weighted Centroid Formular</z><br>
        </d>
        <d><strong>Vulnerability Score: </strong><br>
         The vulnerability score is a composite index developed to evaluate the relative risk of senior displacement and accessibility challenges across Hamilton’s wards. This score combines multiple indicators, each weighted to reflect its contribution to housing vulnerability. The methodology aims to provide a comprehensive measure of vulnerability by accounting for the economic, social, and housing-related pressures faced by seniors. Drawing on insights from Lee and Van Zandt (2019), the inclusion of these indicators highlights the multifaceted risks of displacement and resource inaccessibility, aligning with the study’s goals of identifying and addressing inequities in senior housing and care accessibility.<br>
         Indicators and Weights <br>
         <ul>
            1. <strong>Senior Ratio (30%): </strong> Seniors, particularly low-income seniors, are disproportionately vulnerable due to fixed incomes, limited mobility, and dependence on nearby healthcare and transit services. Lee and Van Zandt (2019) emphasize that seniors face heightened risks of displacement because they are less able to relocate in response to rising rents. Including this indicator ensures that wards with high senior populations are appropriately prioritized for assessment.<br>
            2. <strong>Renter Occupancy (30%): </strong>Renters are significantly more vulnerable than homeowners in most cases due to:<br>
            <ul>
            - Limited Financial Resources: Renters often lack savings or housing stability to cope with rising costs.<br>
            - Poor Housing Conditions: Rental units tend to be older and less resilient to economic or environmental shocks.<br>
            - Forced Relocation: Renters face higher displacement risks due to eviction, redevelopment, or disaster (Lee & Van Zandt, 2019).<br>
            3. <strong>Rent Burden (20%): </strong>Rent burden, defined as households spending over 30% of income on housing, exacerbates vulnerability by forcing renters to make trade-offs in essential expenses such as food, healthcare, and transportation. Severe rent burdens (>50% of income) amplify displacement risks, creating a cascading effect on living standards. Studies on rent affordability highlight its direct link to housing insecurity, justifying a 20% weight in the vulnerability score.<br>
            4. <strong>Low-Income Measure (LIM) Rate (20%): </strong>Income remains a fundamental driver of housing vulnerability. Low-income households lack the financial flexibility to absorb rising rents or relocation costs, leaving them at greater risk of displacement. Additionally, these households have fewer resources to advocate for affordable housing policies or adapt to market pressures. Incorporating the Low-Income Measure (LIM) captures the economic challenges faced by this group, supporting its inclusion as a 20% weighted indicator.<br>
         </ul>
         Data Sources: Data on senior ratios, renter occupancy, rent burdens, and LIM rates were collected for each ward in 2016 and 2021.<br>
         Standardization: Data on senior ratios, renter occupancy, rent burdens, and LIM rates were collected for each ward in 2016 and 2021.<br>
         <strong>Accessibility Score Methods</strong><br>
         <img 
          class="map-image" 
          src="/assets/images/renter_distribution.jpg" 
          alt="accessibility_hamilton"><z>Population Weighted Centroid Formular</z><br>
        </d>
      
          <d><strong>Housing Price Trends (2019–2023):</strong><br>
          Housing price data from the Canada Mortgage and Housing Corporation (CMHC) tracks affordability trends over the past five years. These data are aggregated by CMHC zones rather than wards, highlighting how evolving housing costs have influenced displacement and affordability issues during the recent housing market changes.</d><br>
          <d><strong>Transit and Healthcare Data (2024):</strong><br>
          This dataset includes the most up-to-date locations of General Transit Feed Specification (GTFS) bus stops and Ontario healthcare facilities focused on senior-related services in Hamilton and across Ontario. The healthcare facilities are categorized by specific service types to align with the needs of senior populations. The selected facility types are:
          <ul><strong>
            Seniors Active Living Centres<br>
            Retirement Homes<br>
            Mental Health and Addiction Organizations<br>
            Long-Term Care Homes<br>
            Community Support Services<br></strong>         
          </ul>
          This data provides a detailed and updated view of the transit and healthcare infrastructure that supports seniors in Hamilton and Ontario. By integrating GTFS bus stops and healthcare facility locations, the dataset enables a comprehensive assessment of accessibility challenges faced by displaced seniors.
          </d>
        </ul>
      <ul>
      <d>This step combines the visualization of senior renters' distribution and their socioeconomic vulnerability across Hamilton, presenting a cohesive analysis of the challenges they face. By integrating data on senior population density, renter occupancy, and vulnerability scores, we gain a clearer understanding of how housing unaffordability and displacement affect low-income senior renters.</d></ul>
  </div>
      <d><strong id="renters_distribution">1. Senior Renters' Distribution:</strong><br></d>
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
      <d><strong id="housing_demands">2. Renter Occupancy and Housing Demands </strong><br></d>
      <d>Since detailed rental market data by age group is unavailable, this step's analysis base on renter occupancy rates to approximate rising rental housing demands. Comparing renter distribution maps (Figure 4) from 2016 and 2021 shows a significant increase in tenant occupancy, particularly in peripheral wards. In 2021, the highest tenant occupancy range (55.21%–76.6%) surpassed the highest range in 2016 (32.31%–76.4%). This increase suggests a growing demand for rental housing, likely driven by migration to peripheral wards.</d>
      <img 
          class="map-image" 
          src="/assets/images/renter_distribution.jpg" 
          alt="accessibility_hamilton"
      ><z>Figure 4: Comparison of Renter Distribution of 2016 and 2021 in Hamilton CD
      (source: City of Hamilton Open Data Portal, Housing Tenure, 2016 and 2021)</z><br>
      <d><strong id="vulnerability_scores">3. Vulnerability Scores</strong><br></d>
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
      <d><strong id="affordability_trends">4. Housing Affordability and Unaffordability Trends</strong><br>
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
      <d><strong id="senior_mobility">5. Implications for Senior Mobility</strong><br>
      The observed trends in affordability and vulnerability scores highlight the mobility challenges faced by low-income senior renters in Hamilton:<br>
      <ul>
        <d> <strong>I.</strong> Central Wards: While unaffordability has decreased, central wards remain out of reach for many low-income seniors due to high rental costs relative to fixed incomes.<br>
        <strong>II.</strong> Intermediate Wards: These wards, with a balance between affordability and accessibility, may attract more seniors due to better transit connectivity and healthcare access.<br>
        <strong>III.</strong> Peripheral Wards: Despite being the most affordable, these areas often lack sufficient transit and healthcare infrastructure, creating challenges for seniors reliant on public transportation to access essential services.
        </d>
      </ul> 
      These patterns indicate a growing displacement of low-income seniors to peripheral areas, which could lead to overcrowding and strain on limited resources. This step sets the stage for examining how housing market trends and unaffordability exacerbate vulnerabilities, particularly for seniors dependent on transit and healthcare access.<br>
      
</d>


  <h2 id="dementia_care" class="map-subtitle">Accessibility to Dementia Care Facilities</h2>
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
      <d><strong id="combined_density">1. Combined Weighted Facility Density</strong><br>
      The combined weighted facility density map (Figure 9), which incorporates the distribution of long-term care facilities, pharmacies, and bus stops with respect to each ward's senior population ratio, provides a comprehensive view of overall service accessibility. Wards 2, 7, 8, and 14 show the highest combined facility density, indicating a concentration of supporting services in central areas. In contrast, Wards 11, 12, 13, and 15 have significantly lower combined facility densities, pointing to a lack of complementary facilities that would support elderly residents in accessing dementia care.<br>
      <img 
          class="map-image" 
          src="/assets/images/all_density.jpg" 
          alt="accessibility_hamilton"
      ><z>Figure 9: Long-Term Care, Pharmacy, and Bus Stops Distribution by Hamilton CD Wards</z><br>
      <strong id="individual_density">2. Individual Facility Density Analysis</strong><br>
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
      <strong id="findings">3. Overall Findings and Recommendations</strong><br>
      <d>Overall, the findings emphasize that while Wards 15 and 13 may have better accessibility to dementia care facilities due to the proximity of bus stops, they lack the supporting infrastructure required for effective and convenient access, especially toward their peripheral areas. The combined weighted facility density map highlights the uneven distribution of critical services across Hamilton's wards, creating barriers for elderly residents in accessing necessary care. There is an urgent need for targeted interventions to address these disparities and ensure equitable access to healthcare services, particularly in underserved areas.<br><br>

</d>
</d>

  <h3 id="conclusion" class="map-subtitle">To Conclude</h3>
  <div class="description">
      <d>
      The mapping and analysis reveal that while central wards such as Wards 2, 7, 8, and 14 have a higher concentration of essential facilities—pharmacies, bus stops, and long-term care homes—the peripheral wards, including Wards 11, 12, 13, and 15, remain underserved. Seniors displaced to these areas face limited access to pharmacies and healthcare services, compounded by a lack of public transit connectivity. Even in Wards 15 and 13, which have better accessibility to dementia care facilities, the supporting infrastructure is insufficient, particularly in their outer regions. These disparities in facility density and accessibility create significant barriers for vulnerable elderly populations, leaving many socially and economically isolated.<br>
      This analysis also underscores the interconnectedness of housing affordability, healthcare access, and public transit infrastructure. Seniors’ mobility and ability to remain engaged in their communities hinge on equitable access to these critical services. The ongoing loss of affordable rental units and the migration of seniors to less accessible areas pose a risk of further widening the gap in healthcare and social support for Hamilton’s aging population.<br>
      To address these challenges, targeted policy interventions are essential. These could include increasing investment in public transit infrastructure in underserved wards, incentivizing the development of healthcare facilities and pharmacies in peripheral areas, and prioritizing affordable housing initiatives to allow seniors to remain in centrally located, well-serviced neighborhoods. Additionally, integrating healthcare and transit planning into broader urban development strategies would ensure a more equitable distribution of services for seniors across all wards.<br>


</d>
  </div>

  <h3 id="references" class="map-subtitle">Citation</h3>
  <div class="description"><t>1. <strong>Canada Mortgage and Housing Corporation.</strong> (2019 & 2023). Rental market survey: Hamilton CMA, private row (townhouse) and apartment average rents ($), by zone and bedroom type.</t><br>
  <t>2. <strong>Canada Mortgage and Housing Corporation.</strong> (2020). Rental market report: Hamilton CMA.</t><br>
  <t>3. <strong>City of Hamilton.</strong> (2016 & 2021). Census data. City of Hamilton Open Data Portal.</t><br>
  <t>4. <strong>City of Hamilton.</strong> (2016 & 2021). Census income data. City of Hamilton Open Data Portal.</t><br>
  <t>5. <strong>Government of Canada.</strong> (2024). HSR bus stops. Open Hamilton. </t><br>
  <t>6. <strong>Government of Canada.</strong> (2020). Rental market Hamilton CMA, 2020. Canada Mortgage and Housing Corporation.</t><br>
  <t>7. <strong>Ministry of Health.</strong> (2023). Service provider locations. Ontario Geohub.</t><br>
  <t>8. <strong>Statistics Canada.</strong> (2016 & 2021). Census profile, 2021 Census of population: Hamilton, census division (CDR), Ontario. Government of Canada.</t>
  </div>
  <!-- Back to Projects Image Link -->
  <div class="back-to-projects">
      <a href="/projects/">
          <img src="/assets/images/back_button.png" alt="Back to Projects">
      </a>
  

</div>
