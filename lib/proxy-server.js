const express = require("express");
const app = express();
const BEARER_TOKEN = "6n0259ed3or1qpgbraqb277kmp7530yb";

const BACKSTREET_URL =
  "https://backstreet-surveillance.com/rest/default/V1/products";

app.get("/cameras", async (req, res) => {
  const cameras_url =
    BACKSTREET_URL +
    "?searchCriteria[filterGroups][0][filters][0][field]=housing_style&searchCriteria[filterGroups][0][filters][0][conditionType]=eq&searchCriteria[filterGroups][0][filters][0][value]=5521&searchCriteria[filterGroups][0][filters][1][field]=housing_style&searchCriteria[filterGroups][0][filters][1][conditionType]=eq&searchCriteria[filterGroups][0][filters][1][value]=5522&searchCriteria[filterGroups][0][filters][2][field]=housing_style&searchCriteria[filterGroups][0][filters][2][conditionType]=eq&searchCriteria[filterGroups][0][filters][2][value]=5523&searchCriteria[filterGroups][1][filters][0][field]=is_cybersecure&searchCriteria[filterGroups][1][filters][0][value]=0&searchCriteria[filterGroups][1][filters][0][conditionType]=eq";

  try {
    const response = await fetch(cameras_url, {
      method: "GET",
      headers: { Authorization: "Bearer " + BEARER_TOKEN },
    });
    if (!response.ok) throw response.statusText;

    const data = await response.json();
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

app.get("/cs-cameras", async (req, res) => {
  const cybersecure_url =
    BACKSTREET_URL +
    "?searchCriteria[filterGroups][0][filters][0][field]=housing_style&searchCriteria[filterGroups][0][filters][0][conditionType]=eq&searchCriteria[filterGroups][0][filters][0][value]=5521&searchCriteria[filterGroups][0][filters][1][field]=housing_style&searchCriteria[filterGroups][0][filters][1][conditionType]=eq&searchCriteria[filterGroups][0][filters][1][value]=5522&searchCriteria[filterGroups][0][filters][2][field]=housing_style&searchCriteria[filterGroups][0][filters][2][conditionType]=eq&searchCriteria[filterGroups][0][filters][2][value]=5523&searchCriteria[filterGroups][1][filters][0][field]=is_cybersecure&searchCriteria[filterGroups][1][filters][0][value]=1&searchCriteria[filterGroups][1][filters][0][conditionType]=eq";

  try {
    const response = await fetch(cybersecure_url, {
      method: "GET",
      headers: { Authorization: "Bearer " + BEARER_TOKEN },
    });
    if (!response.ok) throw response.statusText;

    const data = await response.json();
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

app.get("/cs-video-recorders", async (req, res) => {
  const url =
    BACKSTREET_URL +
    "?searchCriteria[filterGroups][0][filters][0][field]=is_cybersecure&searchCriteria[filterGroups][0][filters][0][conditionType]=eq&searchCriteria[filterGroups][0][filters][0][value]=1&searchCriteria[filterGroups][1][filters][0][field]=is_nvr&searchCriteria[filterGroups][1][filters][0][conditionType]=eq&searchCriteria[filterGroups][1][filters][0][value]=1";

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: { Authorization: "Bearer " + BEARER_TOKEN },
    });
    if (!response.ok) throw response.statusText;

    const data = await response.json();
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

app.get("/free-products", async (req, res) => {
  const url =
    BACKSTREET_URL +
    "?searchCriteria[filterGroups][0][filters][0][field]=name&searchCriteria[filterGroups][0][filters][0][conditionType]=like&searchCriteria[filterGroups][0][filters][0][value]=%25FREE - %25&searchCriteria[filterGroups][2][filters][0][field]=sku&searchCriteria[filterGroups][2][filters][0][conditionType]=neq&searchCriteria[filterGroups][2][filters][0][value]=FREE COAX STRIPPER&searchCriteria[filterGroups][3][filters][0][field]=sku&searchCriteria[filterGroups][3][filters][0][conditionType]=neq&searchCriteria[filterGroups][3][filters][0][value]=5-year -extended-warranty";

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: { Authorization: "Bearer " + BEARER_TOKEN },
    });
    if (!response.ok) throw response.statusText;

    const data = await response.json();
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

app.get("/hard-drives", async (req, res) => {
  const url =
    BACKSTREET_URL +
    "?searchCriteria[filterGroups][0][filters][0][field]=sku&searchCriteria[filterGroups][0][filters][0][conditionType]=like&searchCriteria[filterGroups][0][filters][0][value]=%25T-HD";

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: { Authorization: "Bearer " + BEARER_TOKEN },
    });
    if (!response.ok) throw response.statusText;

    const data = await response.json();
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

app.get("/indoor-cables", async (req, res) => {
  const url =
    BACKSTREET_URL +
    "?searchCriteria[filterGroups][0][filters][0][field]=sku&searchCriteria[filterGroups][0][filters][0][conditionType]=like&searchCriteria[filterGroups][0][filters][0][value]=cat6-%25";

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: { Authorization: "Bearer " + BEARER_TOKEN },
    });
    if (!response.ok) throw response.statusText;

    const data = await response.json();
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

app.get("/monitors", async (req, res) => {
  const url =
    BACKSTREET_URL +
    "?searchCriteria[filterGroups][0][filters][0][field]=sku&searchCriteria[filterGroups][0][filters][0][conditionType]=like&searchCriteria[filterGroups][0][filters][0][value]=MON%25&searchCriteria[filterGroups][0][filters][1][field]=sku&searchCriteria[filterGroups][0][filters][1][conditionType]=equals&searchCriteria[filterGroups][0][filters][1][value]=HDMI-Cable";

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: { Authorization: "Bearer " + BEARER_TOKEN },
    });
    if (!response.ok) throw response.statusText;

    const data = await response.json();
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

app.get("/mounts", async (req, res) => {
  const url =
    BACKSTREET_URL +
    "?searchCriteria[filterGroups][0][filters][0][field]=category_bullet_points&searchCriteria[filterGroups][0][filters][0][value]=%25Mounting %25for:%25&searchCriteria[filterGroups][0][filters][0][conditionType]=like&searchCriteria[filterGroups][0][filters][1][field]=name&searchCriteria[filterGroups][0][filters][1][value]=M5%25 Universal Mount&searchCriteria[filterGroups][0][filters][1][conditionType]=like";

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: { Authorization: "Bearer " + BEARER_TOKEN },
    });
    if (!response.ok) throw response.statusText;

    const data = await response.json();
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

app.get("/outdoor-cables", async (req, res) => {
  const url =
    BACKSTREET_URL +
    "?searchCriteria[filterGroups][0][filters][0][field]=sku&searchCriteria[filterGroups][0][filters][0][conditionType]=like&searchCriteria[filterGroups][0][filters][0][value]=db-cat6-%25";

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: { Authorization: "Bearer " + BEARER_TOKEN },
    });
    if (!response.ok) throw response.statusText;

    const data = await response.json();
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

app.get("/poe", async (req, res) => {
  const url =
    BACKSTREET_URL +
    "?searchCriteria[filterGroups][0][filters][0][field]=sku&searchCriteria[filterGroups][0][filters][0][conditionType]=like&searchCriteria[filterGroups][0][filters][0][value]=%25POE-1%25";

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: { Authorization: "Bearer " + BEARER_TOKEN },
    });
    if (!response.ok) throw response.statusText;

    const data = await response.json();
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

app.get("/self-made-cables", async (req, res) => {
  const url =
    BACKSTREET_URL +
    "?searchCriteria[filterGroups][0][filters][0][field]=sku&searchCriteria[filterGroups][0][filters][0][conditionType]=like&searchCriteria[filterGroups][0][filters][0][value]=%25CAT6-500&searchCriteria[filterGroups][0][filters][1][field]=sku&searchCriteria[filterGroups][0][filters][1][conditionType]=like&searchCriteria[filterGroups][0][filters][1][value]=%25CAT6-1000&searchCriteria[filterGroups][0][filters][2][field]=sku&searchCriteria[filterGroups][0][filters][2][value]=C208&searchCriteria[filterGroups][0][filters][3][field]=sku&searchCriteria[filterGroups][0][filters][3][value]=VDV226-011-SEN";

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: { Authorization: "Bearer " + BEARER_TOKEN },
    });
    if (!response.ok) throw response.statusText;

    const data = await response.json();
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

app.get("/video-recorders", async (req, res) => {
  const url =
    BACKSTREET_URL +
    "?searchCriteria[filterGroups][0][filters][0][field]=sku&searchCriteria[filterGroups][0][filters][0][value]=%25NVR&searchCriteria[filterGroups][0][filters][0][conditionType]=like";

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: { Authorization: "Bearer " + BEARER_TOKEN },
    });
    if (!response.ok) throw response.statusText;

    const data = await response.json();
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running 🚀");
});
