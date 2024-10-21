---
layout: page
title: "Geolocation Project"
permalink: /projects/folium/
---

<div class="project-container">

  <h1 class="project-title">Peak Hour Traffic Flow: Mapping Key Routes and Congestion Hotspots in Porto </h1>
  <h3 class="map-subtitle">Project Summary</h3>
  <t class="description">This project analyzes taxi trips and traffic patterns in Porto, categorizing 10,001 taxi trip start points and visualizing traffic volumes during peak hours. Using tools like Folium and Matplotlib, it highlights key routes, congestion hotspots, and spatial movement trends, offering insights into urban mobility and transportation dynamics in the city.<br></t>

  <t class="description"><br><strong>Learning Source: </strong>This project was completed as part of the Coursera Project Network 'Geospatial Data Visualization using Python and Folium.'</t>
  <t class="description"><br><strong>Time: </strong>Create Date: 2024, March to April 2024; Last updated: 2024, October</t>
  <t><br><strong>Skills:</strong> python programming, Pandas, Data Visualiztion<br></t>

  <!-- Map 1 -->
  <div class="map-section">
      <iframe 
          class="map-container"
          src="/assets/maps/dot_map.html"
          allowfullscreen>
      </iframe>
  </div>

  <div class="description">
      <h3 class="map-subtitle">Categorizing Taxi Trip Start Points by Spatial Patterns in Porto</h3>
      <t>This map visualizes the start points of 10,001 taxi trips in the city of Porto, categorizing them into three distinct spatial patterns: widespread, clustered, and scattered. The color-coded representation helps distinguish these patterns, where blue dots indicate widespread start points, yellow represents clusters, and red highlights scattered points. The map provides a clear view of the spatial distribution of taxi trips throughout the week, offering insights into how taxi activity is distributed across different areas of Porto.</t>
  </div>

  <!-- Map 2 -->
  <div class="map-section">
      <iframe 
          class="map-container"
          src="/assets/maps/monday_day_map.html"
          allowfullscreen>
      </iframe>
  </div>

  <div class="description">
      <h3 class="map-subtitle">Visualizing Monday Taxi Trip Start and End Points in Porto (6 AM - 9 PM)</h3>
      <t>This map visualizes the extracted taxi trip data from Monday, between 6 AM and 9 PM, filtered using a lambda function to isolate the relevant time range. Both the start and end locations of the trips are displayed on an interactive Folium map. By focusing on this specific time window, the map offers a clear and detailed view of taxi movement patterns during the selected hours in the city of Porto.</t>
  </div>

  <!-- Map 5 -->
  <div class="map-section">
      <iframe 
          class="map-container"
          src="/assets/maps/q7_map.html"
          allowfullscreen>
      </iframe>
  </div>

  <div class="description">
      <h3 class="map-subtitle">Mapping Traffic Volumes and Key Routes During the 9 AM Peak Hour in Porto</h3>
      <t>This map visualizes traffic volumes during the 9 AM peak hour, focusing on identifying areas of high congestion and heavy traffic flow. Using Matplotlib, frequently used routes are highlighted, providing a detailed representation of the city’s traffic patterns at this critical time. This visualization pinpoints key corridors and intersections where traffic is most concentrated, offering valuable insights into urban mobility and transportation dynamics in Porto.</t>
  </div>

  <div class="back-to-projects">
      <a href="/projects/">
          <img src="/assets/images/back_button.png" alt="Back to Projects">
      </a>
  </div>

</div>
