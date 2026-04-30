// public/js/map.js

const mapDiv = document.getElementById("map");

if (mapDiv) {
  let coords;

  try {
    coords = JSON.parse(mapDiv.dataset.coords); // [lng, lat]
  } catch (e) {
    console.error("Invalid coords data:", mapDiv.dataset.coords);
    coords = null;
  }

  if (!coords || coords.length !== 2) {
    console.error("Coordinates missing/invalid");
  } else {
    const title = mapDiv.dataset.title || "Listing Location";
    const location = mapDiv.dataset.location || "";

    const lng = coords[0];
    const lat = coords[1];

    if (typeof L === "undefined") {
      console.error("Leaflet not loaded!");
    } else {
      // Create map
      const map = L.map("map").setView([lat, lng], 12);

      // Add tiles
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors",
      }).addTo(map);

      // Marker
      L.marker([lat, lng])
        .addTo(map)
        .bindPopup(`<b>${title}</b><br>${location}`)
        .openPopup();
    }
  }
}
