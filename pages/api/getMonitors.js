import { BACKSTREET_URL } from "../../config";
const bearerToken = process.env.BEARER_TOKEN;

export default async function getMonitors(req, res) {
  const url =
    BACKSTREET_URL +
    "?searchCriteria[filterGroups][0][filters][0][field]=sku&searchCriteria[filterGroups][0][filters][0][conditionType]=like&searchCriteria[filterGroups][0][filters][0][value]=MON%25&searchCriteria[filterGroups][0][filters][1][field]=sku&searchCriteria[filterGroups][0][filters][1][conditionType]=equals&searchCriteria[filterGroups][0][filters][1][value]=HDMI-Cable";

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + bearerToken,
      },
    });
    if (!response.ok) throw response.statusText;

    const data = await response.json();
    data.items.sort((a, b) => a.price - b.price);
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}
