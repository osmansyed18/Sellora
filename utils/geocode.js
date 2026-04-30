const axios = require("axios");

async function geocodeLocation(locationText) {
  const apiKey = process.env.GEOAPIFY_API_KEY;

  // Return null gracefully if no API key - geocoding is optional
  if (!apiKey) {
    console.log("GEOAPIFY_API_KEY not set - skipping geocoding for:", locationText);
    return null;
  }

  const url = "https://api.geoapify.com/v1/geocode/search";

  try {
    const res = await axios.get(url, {
      params: {
        text: locationText,
        format: "json",
        limit: 1,
        apiKey: apiKey,
      },
      timeout: 6000,
    });

    // Geoapify returns results in res.data.results[]
    const results = res.data?.results || [];

    if (!results.length) return null;

    const place = results[0];

    // Geoapify uses lon/lat
    return {
      lat: place.lat,
      lon: place.lon,
      formatted: place.formatted,
      confidence: place.rank?.confidence ?? null,
    };
  } catch (err) {
    console.log("Geocoding failed:", err.message);
    return null;
  }
}

module.exports = { geocodeLocation };
