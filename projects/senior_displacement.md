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
  <t class="description">This analysis looks at how rising housing costs affect low-income senior renters in Hamilton. 
  It also studies how this displacement impacts their access to long-term care related facilities. 
  The analysis uses data from 2016 to 2024. It combines maps, social indicators, and accessibility measures to show 
  differences across Hamilton’s wards.<br>The study finds that seniors are moving from central wards to outer areas. 
  This shift happens because rents are going up and affordable housing is hard to find. The report measures vulnerability 
  by looking at senior population size, renter numbers, and income levels. It also checks transit and healthcare 
  access in each ward. Then, the results show that central wards, like Wards 2 and 3, have better transit and healthcare 
  services. These areas are less affected by displacement. On the other hand, outer wards, such as Wards 9, 11, and 15, 
  have poor transit and fewer healthcare options. Seniors in these areas face more challenges.<br>The analysis finally 
  suggests that Hamilton should expand public transit and add more healthcare facilities in areas with poor access. It 
  also recommends creating affordable housing to help seniors stay close to services. These steps can reduce inequalities 
  and support Hamilton’s aging population.<br></t>


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
          alt="senior_displacement"
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
          <li><a href="#methods">Methods</a></li>
          <ul>
              <li><d>Population-Weighted Centroid</d></li>
              <li><d>Vulnerability Score</d></li>
              <li><d>Accessibility Score</d></li>
              <li><d>Synthesizing Trends</d></li>
          </ul>
        </ul>
        <li><a href="#results">Results</a></li>
        <ul>
          <li><a href="#senior_displacements">Senior Displacement Trends (2016-2021)</a></li>
          <li><a href="#vulnerability">Vulnerability (2019-2023)</a></li>
          <li><a href="#access_score">Accessibility Score (2024)</a></li>
          <li><a href="#synthesizing">Synthesizing Trends</a></li>
        </ul>
        <li><a href="#recommendation">Recommendation</a></li>
        <li><a href="#conclusion">Conclusion</a></li>
        <li><a href="#challenges">Challenges and Limitations</a></li>
        <li><a href="#discussion">Discussion</a></li>
        <li><a href="#references">Reference</a></li>
      </ul>
  

  <!-- Dashboard Description -->
  <h2 id="introduction" class="map-subtitle">Introduction</h2>
  <div class="description">
      <d>Affordable housing remains a pressing challenge for vulnerable groups in Canada, 
      particularly seniors. While Statistics Canada’s 2022 report shows some progress, 
      many households still struggle with unaffordable housing. Seniors, who often live on fixed incomes, 
      face unique challenges that make them especially vulnerable to displacement and housing insecurity.<br>
      In 2021, 3.8% of all households in Canada lived in social and affordable housing (SAH). However, 
      about 227,100 households were still on SAH waitlists, with nearly 65% waiting more than two years. 
      Among senior-led households, 1.8% were on waitlists, and most had been waiting for more than two 
      years. Meanwhile, housing costs have continued to rise. Between 2018 and 2021, average monthly 
      shelter costs, including rent, mortgages, utilities, property taxes, and condo fees, increased by 
      7.0% across the provinces. Senior renters, as one of the vulnerable groups. In 2021, nearly half 
      (49.0%) of lone senior renters faced unaffordable housing costs—three times higher than senior 
      homeowners living alone (18.8%). Among lone seniors in non-SAH housing, the situation was even 
      worse, with 55.0% living in unaffordable housing compared to 31.0% of those in SAH.<br>
      In Hamilton, rising rents have displaced seniors from central areas to suburban neighborhoods, 
      limiting their access to healthcare and social services. Older, low-income tenants, particularly 
      those living on public pensions, are often unable to keep up with rising housing costs. When rents 
      increase, they may face eviction or be forced to move. These moves can break social connections, 
      make it harder to access healthcare, and lead to social isolation and mental health issues (Simard, 2020). 
      Twigge Molecey (2023) refers to this process as “exclusionary displacement.” Seniors are pushed into 
      areas with fewer services and less access to the resources they need. This pattern worsens inequalities, 
      particularly for seniors who depend on transit and nearby healthcare facilities.<br>
      This study investigates how rising housing costs in Hamilton affect low-income senior renters. It 
      examines how seniors have been displaced from central areas to suburban or less-served regions. It 
      also looks at how this displacement affects their access to healthcare services, including long-term care facilities. 
      Past studies have shown that rising rents often lead to displacement among low-income populations. 
      This research will test whether similar trends exist in Hamilton. And this study applies ideas from 
      earlier research on displacement and housing affordability to Hamilton’s situation. It analyzes housing
       price trends, senior population movements, and access to transit and healthcare. By doing so, it 
       highlights how displacement worsens inequalities in healthcare access for seniors.<br>
       <strong>Research Question:</strong><br>
       This research asks two main questions: How do rising rents influence the displacement of low-income 
       senior renters in Hamilton? How does this displacement impact their access to long-term care 
       facilities? The study explores these issues to better understand the unique challenges seniors face 
       in this city.<br></d>
       </div>

<!-- Methods -->
  <h2 id="background" class="map-subtitle">Background</h2>
  <div class="description">
      <d><strong id="housing_market_trends">1. Housing Market Trends (2019-2023) </strong><br></d>
      <img 
          class="map-image" 
          src="/assets/images/hamilton/hamilton_zone.jpg" 
          alt="senior_displacement"
      ><z>Figure 1: Hamilton CMA Zone Distribution 2020 (source: Rental Market Report - Hamilton CMA - Date Releases - 2020)</z><br>
      <img 
          class="map-image" 
          src="/assets/images/hamilton/rent_compare.jpg" 
          alt="senior_displacement"
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
          src="/assets/images/hamilton/senior_distribution.jpg" 
          alt="senior_displacement"
      ><z>Figure 2: Comparison of Senior Distribution of 2016 and 2021 in Hamilton CD (source: City of Hamilton Open Data Portal, Census Data, 2016 and 2021)</z><br>
      <d><strong>Senior Population Growth Trends</strong><br>
      Hamilton has seen an overall increase in its senior population between 2016 and 2021. 
      Figure 2 illustrates senior distribution across the city during this period, showing both growth 
      and slight declines in specific areas.<br>
      <ul>
        <strong>Growth in Peripheral Wards</strong><br>
        <ul>
            <strong>Ward 13</strong> experienced the largest increase, with senior population density rising by <strong>31%</strong>.<br>
            <strong>Ward 10</strong> and <strong>Ward 12</strong>, both located on the outskirts of Hamilton, also saw growth of <strong>2.0%</strong> each.<br>
        </ul>
        <strong>Decline in Central Wards</strong><br>
        <ul>
            <strong>Ward 1</strong>, in the central part of the city, recorded a slight decline of <strong>-0.07%</strong>in senior population density.<br>
        </ul>
      </ul>
      The visualization suggests that seniors are moving from central areas to more affordable peripheral neighbouhoods.
      This shift may be due to rising rents in central wards, which exceed the financial capacity of seniors living on fixed
      income. Such displacement aligns with Twigge Molecey's (2023) concept of “exclusionary displacement.” 
      Seniors are often pushed into areas with fewer services and amenities, impacting their access to 
      essential healthcare, including dementia care facilities.<br>
      </d>
      <d><strong id="peripheral_access">3. Peripheral accessibility challenges </strong><br></d>
      <img 
          class="map-image" 
          src="/assets/images/hamilton/hamilton_custom_basemap_map.png" 
          alt="senior_displacement"
      ><z>Figure 3: Hamilton Bus Stops and Healthcare facility distribution. (source: City of Hamilton Open Data Portal, HSR Transit Feed, GTFS data 2024; Ontario GeoHub, Ministry of Health service provider locations, 2024)</z><br>
      <d> Figure 3 demonstrates the distribution of Bus stops and senior related Healthcare facilities across hamilton city. </d>
      <br><d><strong>Access to Healthcare Facilities</strong><br>
        The distribution of healthcare facilities across Hamilton shows clear gaps between central and 
        peripheral wards. Figure 3 maps the locations of bus stops and senior-related healthcare facilities, 
        revealing patterns of accessibility.<br>
        <ul>
            <strong>Better Access in Central Wards:</strong><br>
            <ul>
            - Central wards, such as Wards 1, 2, and 3, have a higher concentration of healthcare facilities, 
            including dementia care centers.<br>
            - Seniors in these areas benefit from relatively easy access to essential health services.<br>
            </ul>
            <strong>Limited Access in Peripheral Wards:</strong><br>
            <ul>
            - Peripheral wards, including Ward 13 (Ancaster/Dundas), Ward 12 (West End), and Ward 15 
            (Flamborough), have noticeably fewer healthcare facilities.<br>
            - Seniors in these wards face challenges accessing healthcare, especially those with mobility 
            limitations or frequent care needs.<br>
            - Traveling greater distances for specialized dementia care can be burdensome and costly for 
            seniors living in underserved areas.<br>
            </ul>
        </ul>
        <strong>Access to Public Transit</strong><br>
        The map also highlights significant differences in public transit coverage across Hamilton.<br>
        <ul>
            <strong>Better Transit Coverage in Central Wards:</strong><br>
            <ul>
            - Wards 1, 2, and 3 have a high density of bus stops, ensuring reliable public transit coverage.<br>
            - Seniors in these wards can more easily access healthcare facilities and other essential services.<br>
            </ul>
            <strong>Sparse Transit Coverage in Peripheral Wards:</strong><br>
            <ul>
            - Peripheral wards, such as Ward 13, 15, and 12, have far fewer bus stops and limited transit routes.<br>
            - Many neighborhoods in these areas are located far from the nearest bus stop, leaving seniors underserved.<br>
            - For example, Ward 13 has only a handful of bus stops spread across a large area, forcing seniors to rely 
            on private transportation or endure long travel times to reach healthcare services.<br>
            </ul>
        </ul>
        Peripheral wards face compounded challenges due to limited access to both healthcare and public 
        transit. Seniors in these areas must navigate long distances and fewer transportation options, 
        making it harder to maintain regular healthcare visits, especially for specialized dementia care. 
        Addressing these gaps requires targeted improvements to healthcare infrastructure and transit 
        networks in underserved areas.<br>
    </d>
  <h2 class="methodology" class="map-subtitle">Methodology</h2>
  <h3 id="data_source" class="map-subtitle">Data Source</h3>
  <div class="description">
       
  <d><strong>A. Census Data (2016 and 2021): </strong><br>
          This dataset provides information on senior population densities, renter occupancy rates, rent burden, and LIM rate across Hamilton’s wards. It captures historical trends over a five-year period, serving as the foundation for understanding shifts in senior population and vulnerability dynamics.</d><br>
  <d><strong>B. Housing Price Trends (2019–2023):</strong><br>
          Housing price data from the Canada Mortgage and Housing Corporation (CMHC) tracks affordability trends over the past five years. These data are aggregated by CMHC zones rather than wards, highlighting how evolving housing costs have influenced displacement and affordability issues during the recent housing market changes.</d><br>
  <d><strong>C. Transit and Healthcare Data (2024):</strong><br>
          This dataset includes the most up-to-date locations of General Transit Feed Specification (GTFS) bus stops and Ontario healthcare facilities focused on senior-related services in Hamilton and across Ontario. The healthcare facilities are categorized by specific service types to align with the needs of senior populations. The selected facility types are:
          <ul><strong>
            - Seniors Active Living Centres<br>
            - Retirement Homes<br>
            - Mental Health and Addiction Organizations<br>
            - Long-Term Care Homes<br>
            - Community Support Services<br></strong>         
          </ul>
          This data provides a detailed and updated view of the transit and healthcare infrastructure that supports seniors in Hamilton and Ontario. By integrating GTFS bus stops and healthcare facility locations, the dataset enables a comprehensive assessment of accessibility challenges faced by displaced seniors.
          </d>
  </div>
  <h2 id="methods" class="map-subtitle">Methods</h2>
  <div class="description">
  <d>Based on literature reviewing Hallisey et al. and Tan et al. ‘s articles on facilities accessible related analysis, this study choose to use the population weighted centroid of each ward as the focal point, to analysis the accessibility to bus stops with isochorne (400m, 600m, 800m) (Lindén, 2021), and then calculate the centroid of bus stops in each ward to find their accessible healthcare facilities with isochron (5min, 10 min 15 min)(Dijck, 2024). Combine with the vulnerable score (30% senior ration + 30% Renter occupancy + 20% rent burden + 20% low income measure (LIM)rate) of each ward, and Ward-level rent prices are integrated into the analysis to capture the affordability dimension. Combining rent data with vulnerability and accessibility scores, a final composite score is assigned to each ward, highlighting disparities in housing affordability, healthcare access, and transit connectivity.</d><br>
          <d><strong>A. Population weighted centroid: </strong><br>
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
         Formular:<br>
         <img 
          class="map-image" 
          src="/assets/images/hamilton/population_weighted.jpg" 
          alt="senior_displacement"><z>Figure 4: Population Weighted Centroid Formular</z><br>
         Population-Weighted Centroid Visualization:<br>
         <img 
          class="map-image" 
          src="/assets/images/hamilton/population_weighted_centroids.png" 
          alt="senior_displacement"><z>Figure 5: Population Weighted Centroid Visualization</z><br>
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
            - Forced Relocation: Renters face higher displacement risks due to eviction, redevelopment, or disaster (Lee & Van Zandt, 2019).<br></ul>
            3. <strong>Rent Burden (20%): </strong>Rent burden, defined as households spending over 30% of income on housing, exacerbates vulnerability by forcing renters to make trade-offs in essential expenses such as food, healthcare, and transportation. Severe rent burdens (>50% of income) amplify displacement risks, creating a cascading effect on living standards. Studies on rent affordability highlight its direct link to housing insecurity, justifying a 20% weight in the vulnerability score.<br>
            4. <strong>Low-Income Measure (LIM) Rate (20%): </strong>Income remains a fundamental driver of housing vulnerability. Low-income households lack the financial flexibility to absorb rising rents or relocation costs, leaving them at greater risk of displacement. Additionally, these households have fewer resources to advocate for affordable housing policies or adapt to market pressures. Incorporating the Low-Income Measure (LIM) captures the economic challenges faced by this group, supporting its inclusion as a 20% weighted indicator.<br>
         </ul>
         Data Sources: Data on senior ratios, renter occupancy, rent burdens, and LIM rates were collected for each ward in 2016 and 2021.<br>
         Standardization: Data on senior ratios, renter occupancy, rent burdens, and LIM rates were collected for each ward in 2016 and 2021.<br>
         <strong>Accessibility Score Methods:</strong><br>
         The Accessibility Score is designed to assess how well each ward in Hamilton facilitates seniors’ access to transit and healthcare services. The score is based on a combination of transit accessibility and healthcare accessibility, calculated using spatial analysis and weighted indicators. The following steps outline the methodology: <br>
         1. Transit Accesibility: <br>
         Objective: To measure how easily seniors can access bus stops within walking distance from population-weighted centroids in each ward.
         <ul>
          - Isochrone Calculation: <br>
            Isochrones of 400m, 600m, and 800m were generated from the population-weighted centroid of each ward using real-world walking distances.<br>
            <ul>
            - 400m: Represents a comfortable 5-minute walk.<br>
            - 600m: Represents a reasonable 7–8 minute walk.<br>
            - 800m: Represents a 10-minute walk for seniors able to walk longer distances.<br>
            </ul>
          - Reachable Bus Stops: The number of bus stops within each isochrone was counted for every ward. This count represents the accessibility of transit infrastructure for seniors who may rely heavily on public transport.<br>
          - Transit Accessibility Score: For each ward, the transit accessibility score was calculated as the normalized average count of reachable bus stops across the three isochrone distances.<br>
         </ul>
         2. Healthcare Accessibility: <br>
         Objective: To measure how easily seniors can access healthcare facilities from centralized bus stop locations within each ward.
         <ul>
          - Bus Stop Centroid Calculation: <br>
            The geometric centroid of all bus stops within each ward was calculated, representing the central transit hub for that ward.<br>
          - Isochrone Calculation: <br>
            Isochrones of 5 minutes, 10 minutes, and 15 minutes transit time were generated from each bus stop centroid. These isochrones represent the areas reachable by public transit for seniors dependent on buses.<br>
          - Reachable Healthcare Facilities: The number of healthcare facilities (including dementia care homes, pharmacies, and related centers) within each isochrone was counted for every ward.<br>
          - Healthcare Accessibility Score: For each ward, the healthcare accessibility score was calculated as the normalized average count of reachable healthcare facilities across the three transit isochrone distances.<br>
         </ul>
         3. Comprehensive Accessibility Score: <br>
         Objective: To provide a combined measure of how accessible transit and healthcare services are for seniors in each ward.
         <ul>
          - Normalization: Both transit accessibility and healthcare accessibility scores were normalized to a scale of 0–1 to ensure comparability.<br>
          - Weighted Formula:The comprehensive accessibility score was calculated as a weighted average of transit and healthcare accessibility scores:<br>
          <img 
          class="map-image" 
          src="/assets/images/hamilton/comprehensive.jpg" 
          alt="senior_displacement"><z>Comprehensive Accessibility Score Formular</z><br>
         </ul>
         <strong>Synthesizing Trends Methods:</strong><br>
         The synthesized trends combine housing price changes, vulnerability scores, and accessibility scores to provide a comprehensive understanding of how these factors interact across Hamilton's wards. The calculation integrates temporal data from different sources, standardizes the metrics, and visualizes relationships between housing affordability, vulnerability, and accessibility. This approach offers insights into patterns of displacement and service accessibility challenges for seniors. <br>
         Data Source: <br>
         <ul>
         - <strong>Vulnerability Data: </strong>Includes vulnerability scores and changes between 2016 and 2021. <br>
         - <strong>Accessibility Data: </strong>Comprehensive accessibility scores based on transit and healthcare availability for each ward.<br>
         - <strong>Housing Price Data: </strong>Changes in rent prices from 2019 to 2023.<br>
         - <strong>Geospatial Data: </strong>Ward boundary shapefiles for mapping and visualization.<br>
         </ul>
         Formulars for calculating the final Trends:
         <img 
          class="map-image" 
          src="/assets/images/hamilton/synthesis.jpg" 
          alt="senior_displacement"><z>Synthesizing Trends Formulars</z><br>
         Correlation Anlaysis: A scatter plot was created to analyze the relationship between vulnerability and accessibility scores. A linear regression model was fitted to the data to calculate the correlation coefficient (R^2) <br>
         <ul>
         - The scatter plot compared accessibility scores (X-axis) with vulnerability changes (Y-axis).<br>
         - A linear regression line was added to analyze the relationship between the two variables, along with the R^2 value to quantify the correlation.<br>
         </ul>
        </d>
  </div>
  <!--Results-->
  <h2 id="results" class="map-subtitle">Results</h2>
  <!--Senior Displacements-->
  <h3 id="senior_displacements" class="map-subtitle">Senior displacement trends (2016 - 2021)</h3>
  <div class="description">
         <img 
          class="map-image" 
          src="/assets/images/hamilton/senior_density_change_map_with_labels.png" 
          alt="senior_displacement"><z>Figure 3: Change in Senior Population Density by Ward in Hamilton (2016-2021). (source: City of Hamilton Open Data Portal, Census Population, Age and Gender)</z><br>
          <img 
          class="map-image" 
          src="/assets/images/hamilton/senior_density_change_barchart.png" 
          alt="senior_displacement"><z>Chart 2: Change in Senior Population Density by Ward (2016-2021) (source:City of Hamilton Open Data Portal, Census Population, Age and Gender)</z><br>
        <d>Key Observations with combine Figure 3 and Chart 2: <br>
        <ul>
          1. Wards with the Highest Increase in Senior Population Density:<br>
          <ul>
          - Ward 13 experienced the most significant increase in senior population density, reaching approximately 3.0%. This suggests that the ward has become a preferred location for seniors, potentially due to factors such as affordability, accessibility to healthcare, and availability of senior-friendly housing.<br>
          - Other wards with notable increases include Ward 10, Ward 12, and Ward 7, which all saw substantial growth in senior population density. These wards may be benefiting from favorable conditions for aging populations, such as proximity to essential services, transit accessibility, and suitable housing options.<br>
          </ul>
          2. Wards with Moderate to Minimal Increases:<br>
          <ul>
          - Ward 6, Ward 15, and Ward 3 displayed moderate increases in senior population density. These wards may be experiencing incremental growth due to their mixed housing options and moderate affordability.<br>
          - Wards 9 and 11 showed smaller increases, indicating a slower rate of senior population growth compared to other areas.<br>
          </ul>
          3. Wards with the Least Increase or Stability:<br>
          <ul>
          - Ward 8, Ward 2, and Ward 1 exhibited the least change in senior population density, reflecting relative stability or stagnation. These areas might face barriers to attracting seniors, such as higher housing costs, lack of specialized facilities, or limited transit access.<br>
          - Ward 1, in particular, shows negligible change, which could indicate an established population with minimal inflow or outflow of seniors.<br>
          </ul>
        </ul>
        With reading the Chart 2, the wards with higher increases in senior population density, such as Ward 13 and Ward 10, are primarily located in suburban areas, suggesting a trend of suburbanization among seniors. This may be driven by rising housing costs in central wards and the availability of more spacious or affordable housing in suburban locations. Wards closer to the urban core (e.g., Ward 1 and Ward 2) show less growth. This change trends suggest a displacement of seniors from central wards to suburban and peripheral areas. <br></d>
  </div>
  <!-- vulnerability score-->
  <h3 id="vulnerability" class="map-subtitle">Vulnerability (2019-2023)</h3>
  <div class="description">
         <img 
          class="map-image" 
          src="/assets/images/hamilton/Vulnerablity_change_16_21.jpg" 
          alt="senior_displacement"><z>Figure 4: Vulnerability Score by Ward 2016 and 2021</z><br>
          <img 
          class="map-image" 
          src="/assets/images/hamilton/vulnerability_change_map.png" 
          alt="senior_displacement"><z>Figure 5: Change in Vulnerability Score (2021- 2016)<z><br>
          <img 
          class="map-image" 
          src="/assets/images/hamilton/vulnerability_change_bar.png" 
          alt="senior_displacement"><z>Chart 3: Change in Vulnerability Score by Ward (2021-2016)<z><br>
        <d>The Vulnerability Score of each Ward is calculated based on the data of senior population ratio, renter occupancy rates,
        rent burden, and LIM rate. And visualization demonstrates 2016 and 2021, as well as the vulnerability change from 2016 to 2021.
        <d>Key Observations from Figure 5(a), (b), (c), and (d): <br>
        <ul>
          1.High Vulnerability Wards:<br>
          <ul>
          - 2016: Ward 2, Ward 5, Ward 1, and Ward 3 had the highest vulnerability scores, as indicated by both the bar chart and choropleth map. These wards, located centrally, likely had higher senior populations, higher renter occupancy, and rent burdens.<br>
          - 2021: Similar trends continued with Ward 2, Ward 1, and Ward 5 maintaining high vulnerability scores. This consistency highlights persistent challenges in these areas, particularly for low-income seniors.<br>
          </ul>
          2. Low Vulnerability Wards:<br>
          <ul>
          - In both years, Wards 9, 11, and 12 showed the lowest vulnerability scores. These wards, typically peripheral and less dense, may have lower proportions of renters or seniors.<br>
          </ul>
          3. Geographic Patterns:<br>
          <ul>
          - Central Wards (e.g., Wards 1, 2, 3, and 5) demonstrated higher vulnerability, while peripheral Wards (e.g., Wards 12, 13, and 11) showed lower scores. This pattern aligns with urban displacement pressures, where centrally located areas face greater affordability challenges.<br>
          </ul>
        </ul>
        Key Observations of Change in Vulnerability Scores (2016-2021) (Figure 5 and Chart 3) <br>
        <ul>
          1.Increasing Vulnerability:<br>
          <ul>
          - Wards 9, 12, 7, and 10 experienced the largest increases in vulnerability scores. Notably, Ward 9 shifted from being among the least vulnerable to one of the most vulnerable in terms of vulnerability change.<br>
          - This trend suggests that previously stable wards are now experiencing rising displacement pressures and worsening conditions for seniors.<br>
          </ul>
          2. Decreasing or Stable Vulnerability:<br>
          <ul>
          - Wards 2 and 5, despite being highly vulnerable in both years, showed minimal changes. This stability may indicate ongoing but relatively consistent conditions rather than worsening vulnerabilities.<br>
          </ul>
          3. Geographic Trends:<br>
          <ul>
          - Peripheral Wards like Wards 9 and 12 show increasing vulnerability, indicating that displacement pressures may be pushing vulnerable populations outward.<br>
          - Central Wards, such as Ward 2, remain consistently vulnerable but without major shifts.<br>
          </ul>
        </ul>
        </d>
   
  <!--Accessibility Score-->
  <h3 id="access_score" class="map-subtitle">Accessibility Score:</h3>
  <div class="description">
  <d><strong>Transit Accessibility:</strong><br>
         <img 
          class="map-image" 
          src="/assets/images/hamilton/transit_isochrone.png" 
          alt="senior_displacement"><z>Figure 6: Transit Accessibility: from population-weighted centroids of Ward to reachable Bus Stops with isochrone 400m, 600m, 800m.</z><br>
          The transit accessibility analysis evaluates the number of bus stops reachable within walking 
          distances from each ward's population-weighted centroid. Isochrones of 400m, 600m, and 800m were 
          used to assess access levels. Figure 6 visualizes these results, showing clear differences in 
          transit availability across Hamilton's wards.<br>
          <strong>Observations: </strong>
          <ul>
          <strong>1. High Accessibility in Central Wards:</strong>
              <ul>
              - Wards 2 and 3 have the highest transit accessibility.<br>
              - These wards offer greater bus stop density within comfortable walking distances, 
              ensuring better connectivity for seniors.<br>
              </ul>
          <strong>2. Low Accessibility in Peripheral Wards:</strong>
              <ul>
              - Wards 9, 11, and 15 demonstrate significantly lower transit accessibility.<br>
              - Many areas lack bus stops within walking distances, leaving seniors underserved and 
              more dependent on private transportation or long commutes.<br>
              </ul>
          </ul>
          The Isochrone map (Figure 6) highlights how central wards benefit from better transit 
          infrastructure, while peripheral wards experience gaps in coverage. This indicates that peripheral 
          wards face critical transit infrastructure challenges that could worsen mobility barriers for 
          vulnerable senior populations. Limited access to bus stops may increase isolation and reduce 
          seniors' ability to reach essential services, including healthcare facilities.<br>
          </d>
  <d><strong>Healthcare Accessibility:</strong><br>
         <img 
          class="map-image" 
          src="/assets/images/hamilton/health_isochrone.png" 
          alt="senior_displacement"><z>Figure 7: Healthcare Accessibility: from bus stop centroids of Ward to reachable Health care facility with isochrone 5minutes, 10 minutes, and 15 minutes.</z><br>
          Healthcare accessibility was analyzed using transit-based isochrones of <strong>5, 10, and 15 minutes</strong> 
          from bus stop centroids in each ward to nearby healthcare facilities. <br>
          <strong>Observations: </strong>
          <ul>
          <strong>1. Better Access in Central Wards:</strong>
              <ul>
              - Wards 2 and 3 have the highest healthcare accessibility.<br>
              - These wards provide more reachable healthcare facilities 
              within short transit times, ensuring better service availability for seniors.<br>
              </ul>
          <strong>2. Limited Access in Peripheral Wards:</strong>
              <ul>
              - Wards 9, 12, and 15 show minimal to no healthcare accessibility.<br>
              - Seniors in these wards face significant barriers due to sparse transit routes and fewer nearby 
              healthcare services.<br>
              </ul>
          </ul>
          The isochrone map (Figure 7) illustrates the differences in spatial distribution of healthcare access, 
          highlighting accessibility gaps in peripheral areas. This indicates that peripheral 
          wards face a compounded challenge of poor transit and limited healthcare facilities. 
          Seniors in these areas, who often rely on public transportation, may struggle to access 
          essential medical care, including dementia services. This highlights the urgent need to 
          expand healthcare infrastructure and improve transit links to better serve vulnerable 
          populations.<br>
          </d> 
          <d><strong>Comprehensive Accessibility Score:</strong><br>
         <img 
          class="map-image" 
          src="/assets/images/hamilton/comprehensive_table.jpg" 
          alt="senior_displacement"><z>Chart 4: Weighted Comprehensive Score</z><br>
          The comprehensive accessibility score combines transit and healthcare accessibility into a 
          single measure. Transit accessibility accounts for 60% of the weight, while healthcare 
          accessibility accounts for 40%. <br>
          <strong>Observation:</strong><br>
          <ul>
          <strong>1. Highest Scores in Central Wards:</strong>
              <ul>
              - Ward 2 (1.00) and Ward 3 (0.47) rank the highest, 
              reflecting their robust transit and healthcare accessibility.<br>
              - These wards have well-developed infrastructure, supporting mobility 
              and healthcare access for seniors.<br>
              </ul>
          <strong>2. Lowest Scores in Peripheral Wards:</strong>
              <ul>
              - Wards 9 (0.07), 11 (0.00), and 15 (0.01) report alarmingly low scores.<br>
              - Many peripheral wards show near-zero accessibility, indicating significant gaps in infrastructure.<br>
              </ul>
          <strong>3. Correlation Between Transit and Healthcare Accessibility:</strong>
              <ul>
              - Wards with high transit accessibility, such as Wards 2 and 3, also have higher 
              healthcare accessibility scores.<br>
              - This highlights the role of integrated infrastructure in improving access to essential 
              services for seniors, especailly for transit dependent seniors<br>
              - Peripheral wards with limited transit options, such as Wards 9, 11, and 15, 
              experience much lower healthcare accessibility.<br>
              </ul>
          </ul>
          Based on the visualization of service provision disparities, peripheral wards face severe transit 
          and healthcare accessibility challenges. Sparse transit routes and fewer healthcare facilities 
          leave seniors in these areas isolated and underserved. Seniors may experience delays in accessing 
          healthcare, face higher costs, and suffer from reduced quality of life. Limited infrastructure 
          can further intensify displacement trends, forcing seniors to relocate and disrupting social 
          networks that provide vital social and emotional support. These challenges highlight the urgent 
          need for targeted improvements in peripheral areas to address service gaps and support aging 
          populations.<br>
          Central wards, such as Wards 2 and 3, benefit from higher levels of transit and healthcare 
          accessibility due to concentrated infrastructure investments. These areas provide better 
          service availability and mobility for seniors. In contrast, peripheral wards, including 
          Wards 9, 11, and 15, face severe disadvantages due to poor transit networks and fewer 
          healthcare resources. These disparities reflect broader patterns of urban inequality,
           where peripheral areas remain underserved, leaving vulnerable populations with fewer 
           options and resources.<br>
          </d> 
  <!--Synthesizing Trends-->
  <h3 id="synthesizing" class="map-subtitle">Synthesizing Trends:</h3>
  <div class="description">
          <img 
          class="map-image" 
          src="/assets/images/hamilton/reversed_accessibility_vulnerability_map.png" 
          alt="senior_displacement"><z>Figure 8: Accessibility and Vulnerability Change with Rent Price Changes</z><br>
          <img 
          class="map-image" 
          src="/assets/images/hamilton/vulnerability_vs_accessibility_scatter.png" 
          alt="senior_displacement"><z>Chart 5: Correlation Between Vulnerability Change and Accessibility Scores</z><br>
          <d>The combined analysis highlights patterns of vulnerability, accessibility, and housing price changes 
          across Hamilton's wards. The findings emphasize the challenges faced by low-income senior renters who 
          depend on affordable housing and accessible services.<br> 
          <strong>Observation:</strong><br>
          <ul>
          <strong>1. Relationship Between Accessibility and Vulnerability:</strong>
              <ul>
              - The scatter plot demonstrates a negative correlation (R² = 0.27) 
              between accessibility scores and vulnerability changes.<br>
              - Wards with higher accessibility scores, such as Ward 2, show smaller increases in vulnerability.<br>
              - This suggests that better transit and healthcare infrastructure can reduce displacement risks by 
              enabling seniors to stay in their communities despite rising rents.<br>
              - In contrast, wards with lower accessibility scores tend to experience larger increases in 
              vulnerability. This indicates that limited infrastructure amplifies affordability pressures, 
              especially for seniors who rely heavily on nearby services.<br>
              </ul>
          <strong>2. Peripheral Wards at Risk:</strong>
              <ul>
              - Peripheral wards, including Wards 12, 13, and 15, report the highest vulnerability increases 
              alongside very low accessibility scores.<br>
              - These wards also experience some of the steepest rent price increases, exceeding 50% in some cases.<br>
              - This combination of affordability challenges and poor infrastructure places these wards 
              at the highest risk for senior displacement.<br>
              - Seniors in these areas face a dual burden—being pushed out of central neighborhoods due to rising rents and 
              finding limited resources to support their needs in the areas they move to. This creates major barriers to 
              accessing transit, healthcare, and other essential services.<br>
              </ul>
          <strong>3. Mixed Results in Central Wards:</strong>
              <ul>
              - Central wards, such as Ward 2 and Ward 3, show more favorable outcomes.<br>
              - These wards benefit from higher accessibility scores, which seem to offset some of the effects of rising housing prices.<br>
              - Vulnerability levels in these wards remain relatively stable despite moderate rent increases.<br>
              - The presence of accessible bus stops and healthcare facilities likely helps maintain affordability and 
              quality of life for seniors in these areas.<br>
              </ul>
          </ul>
          The data highlights that peripheral wards, especially Wards 12, 13, and 15, are particularly vulnerable to the combined 
          effects of rising rents and inadequate infrastructure. These areas face the greatest challenges in ensuring seniors have 
          access to affordable housing, transit, and healthcare services. Addressing these gaps through targeted improvements in 
          transit routes, expanded bus stops, and additional healthcare facilities can significantly reduce the risks faced by 
          low-income senior renters.<br>

<!--Recommendation-->
<h2 id="recommendation" class="map-subtitle">Recommendation:</h2>
  <div class="description">
  <d>
  1. Improve Transit Connectivity:<br>
  <ul>
    - Expand public transit services in peripheral wards, especially in Wards 9, 11, and 15, where transit accessibility is critically low.<br>
    - Prioritize the addition of bus stops and routes that connect these wards to healthcare facilities and central areas.<br>
    - Conduct transit planning that aligns with senior-specific mobility needs, such as shorter walking distances to stops and frequent services.<br>
  </ul>
  2. Enhance Healthcare Infrastructure:<br>
  <ul>
    - Invest in building dementia care and general healthcare facilities in underserved peripheral wards to address critical healthcare access gaps.<br>
    - Develop mobile or community-based healthcare solutions for seniors in wards with sparse healthcare facilities, such as Wards 9, 11, and 15.<br>
    - Collaborate with provincial and municipal health agencies to allocate resources for senior-specific healthcare services.<br>
  </ul>
  3. Increase Affordable Housing Supply:<br>
  <ul>
    - Focus on creating affordable rental housing in central and intermediate wards, such as Wards 2, 3, and 6, to prevent displacement.<br>
    - Implement inclusionary zoning policies requiring affordable housing in new developments.<br>
    - Provide rental assistance programs or subsidies for low-income seniors to mitigate rent burdens and housing insecurity.<br>
  </ul></d>
  </div>

<!--Conclusion-->
<h3 id="conclusion" class="map-subtitle">Conclusion</h3>
  <div class="description">
      <d>
      This study highlights the challenges that low-income senior renters in Hamilton face poor transit access, and limited healthcare services due to rising housing costs. Many seniors are being displaced from central wards, where services are more accessible, to peripheral wards with fewer resources. The results show large differences between wards. Peripheral areas like Wards 9, 11, and 15 face the most severe challenges, with poor accessibility and high vulnerability. This reveals growing inequality in Hamilton’s infrastructure, which has a strong impact on seniors who rely on nearby services and public transportation. <br>
      The findings show how transit and healthcare accessibility are closely linked to reducing displacement risks. Central wards, such as Wards 2 and 3, perform better because of strong transit networks and nearby healthcare services. These areas show lower increases in vulnerability, even with moderate housing price growth. On the other hand, peripheral wards with limited transit and healthcare services face major disadvantages. These challenges increase displacement risks and limit access to essential services for senior residents.<br>
      The results stress the need for policies that support vulnerable populations. To reduce displacement and improve quality of life, there must be better access to affordable housing, transit, and healthcare. Policies should focus on building affordable housing near transit hubs, expanding public transit in underserved areas, and providing senior-specific healthcare facilities. These actions can help address the growing disparities between central and peripheral wards.<br>
      This study also points to broader lessons for urban planning. Rising housing costs and demographic changes are common in many mid-sized cities. Hamilton’s challenges show how important it is to focus on vulnerable populations in urban development. The use of geospatial analysis in this study highlights its value in identifying inequalities and guiding policy. However, ongoing monitoring and updated data are needed to ensure that policies remain effective and respond to changing needs. Through targeted efforts, Hamilton can create a more inclusive and accessible city for its aging population.
  </div>
<!-- Challenges and Limitations-->
<h2 id="challenges" class="map-subtitle">Challenges and Limitations</h2>
  <div class="description">
  <d>
  1. Data Year Mismatch:<br>
  <ul>
  - The datasets used span different years (2016, 2021, 2024), which may affect the accuracy of trends and correlations. For example, housing price data from 2019–2023 does not align directly with the census data from 2016 and 2021.<br>
  The temporal gap between housing, transit, and healthcare data introduces challenges in drawing precise conclusions about current conditions.<br>
  </ul>
  2. Spatial Mismatch:<br>
  <ul>
  - Housing price data is aggregated by CMHC zones, while other data is ward-specific. This discrepancy complicates the alignment of trends and may dilute localized observations.<br>
  </ul>
  3. Lack of Senior Renter Data:<br>
  <ul>
  - The absence of specific data on senior renters necessitated the use of proxies, such as general senior population and renter occupancy rates. This approach may not fully capture the unique challenges faced by senior renters.<br>
  </ul>
  4. Limited Accessibility Metrics:<br>
  <ul>
  - The accessibility analysis primarily focuses on transit and healthcare facilities but does not include other critical services, such as grocery stores or community centers, that contribute to seniors’ quality of life.<br>
  </ul>
  5. Exclusion of Qualitative Data:<br>
  <ul>
  - The study lacks qualitative insights from seniors about their lived experiences, which could provide a deeper understanding of the challenges they face.<br>
  </ul>
  </d>
</div>
<!-- Discussion-->
<h2 id="discussion" class="map-subtitle">Discussion</h2>
  <div class="description">
  <d>
  This study explores the challenges faced by low-income senior renters in Hamilton, focusing on the links between housing affordability, transit accessibility, and healthcare availability. The findings show key patterns that need attention and further exploration.<br>
  There's a clear difference exists between central and peripheral wards. Central wards, like Wards 2 and 3, have better infrastructure, such as more bus stops and healthcare facilities. These wards also show smaller increases in vulnerability, even though housing prices have risen. This suggests that strong transit and healthcare infrastructure can reduce some of the negative effects of rising rents. Improving and maintaining these systems in central areas is essential for vulnerable populations. And in peripheral wards, such as Wards 9, 11, and 15, face more severe problems. These wards have fewer bus stops and healthcare services, while also experiencing higher rent increases. Vulnerable seniors in these areas have limited access to essential resources, which increases their risks of isolation and delayed care. The concept of “exclusionary displacement” is evident here, as seniors are forced to move to less accessible areas due to rising housing costs. This creates more challenges for those already struggling with mobility and healthcare needs.<br>
  Transit accessibility is closely linked to healthcare access. Wards with better transit systems, such as Wards 2 and 3, also perform better in healthcare accessibility. Public transit helps seniors move freely and access critical services, making it a key factor in improving quality of life. On the other hand, wards with poor transit systems show much lower healthcare access. Expanding transit networks in underserved areas can greatly improve healthcare access and reduce isolation for vulnerable seniors Housing affordability is another major issue driving displacement. Wards with higher rent increases, like Wards 12, 13, and 15, show the greatest shifts in vulnerability. Rising rents place more pressure on low-income seniors, who often live on fixed incomes. Policies that control housing price growth and increase affordable housing options are necessary to reduce these risks. Without these measures, seniors in Hamilton will continue to face displacement and reduced access to city services.<br>
  The findings also raise larger questions about urban inequality and aging populations. Hamilton serves as an example of how mid-sized cities struggle with these pressures. As cities grow older, they will need to adjust their infrastructure to meet the needs of senior populations. This study shows that geospatial methods can help identify problem areas and guide policies that target vulnerable groups. Other cities facing similar challenges could use this approach to address gaps in services and infrastructure. However, there are limitations to this study. The data comes from different years, which makes it harder to draw precise conclusions. Some metrics, like rent and population data, lack ward-specific details. The study also does not include qualitative factors, such as how seniors rely on social networks or choose where to live. These gaps suggest that future research should use more detailed data and include personal experiences to better understand displacement patterns.<br>
  Overall, the findings point to the need for targeted improvements in transit, healthcare, and affordable housing in Hamilton. The study highlights how these challenges interact, showing where support is most needed. Bridging the gap between central and peripheral wards is crucial to creating a city where all residents, especially seniors, have the resources they need to thrive.
  </d>
</div>

<!-- Reference-->
  <h3 id="references" class="map-subtitle">Citation</h3>
  <div class="description"><t>1. <strong>Canada Mortgage and Housing Corporation.</strong> (2019 & 2023). Rental market survey: Hamilton CMA, private row (townhouse) and apartment average rents ($), by zone and bedroom type.</t><br>
  <t>2. <strong>Canada Mortgage and Housing Corporation.</strong> (2020). Rental market report: Hamilton CMA.</t><br>
  <t>3. <strong>City of Hamilton.</strong> (2016 & 2021). Census data. City of Hamilton Open Data Portal.</t><br>
  <t>4. <strong>City of Hamilton.</strong> (2016 & 2021). Census income data. City of Hamilton Open Data Portal.</t><br>
  <t>5. <strong>Government of Canada.</strong> (2024). HSR bus stops. Open Hamilton. </t><br>
  <t>6. <strong>Government of Canada.</strong> (2020). Rental market Hamilton CMA, 2020. Canada Mortgage and Housing Corporation.</t><br>
  <t>7. <strong>Ministry of Health.</strong> (2023). Service provider locations. Ontario Geohub.</t><br>
  <t>8. <strong>Statistics Canada.</strong> (2016 & 2021). Census profile, 2021 Census of population: Hamilton, census division (CDR), Ontario. Government of Canada.</t>
  <t>9. Dijck, A. V. (2024). Public Transit and Health Access in Utrecht's 10-Minute City Vision (Master's thesis).<br>
  10. Hallisey, E., Tai, E., Berens, A., Wilt, G., Peipins, L., Lewis, B., ... & Lunsford, N. B. (2017). Transforming geographic scale: A comparison of combined population and areal weighting to other interpolation methods. International Journal of Health Geographics, 16, 1-16.<br>
  11. Lee, J. Y., & Van Zandt, S. (2019). Housing Tenure and Social Vulnerability to Disasters. Journal of Planning Literature, 34(2), 156–170. https://doi.org/10.1177/0885412218812080 <br>
  12. Lindén, P. (2021). Improving accessibility to the bus service: Building an accessibility measurement tool in QGIS.<br>
  13. Simard, J. (2020). Gentrification and aging in Montreal, Quebec: Housing insecurity and displacement among older tenants. Gentrification around the World, Volume I: Gentrifiers and the Displaced, 37-59.<br>
  14. Tan, M. H., Tan, K. W., & Lau, H. C. (2024). A data-driven approach for automated multi-site competitive facility location.<br>
  15. The Daily — Housing challenges remain for vulnerable populations in 2021. (n.d.). Retrieved December 19, 2024, from https://www150.statcan.gc.ca/n1/daily-quotidien/220721/dq220721b-eng.htm <br>
  20. Twigge-Molecey, A. (2013). Exploring resident experiences of displacement in a neighbourhood undergoing gentrification and mega-project development: A Montréal case study. Institut National de la Recherche Scientifique (Canada).</t>
  </div>
  <!-- Back to Projects Image Link -->
  <div class="back-to-projects">
      <a href="/projects/">
          <img src="/assets/images/back_button.png" alt="Back to Projects">
      </a>
  

</div>
