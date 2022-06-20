import { BACKSTREET_URL } from "../../config";
const bearerToken = process.env.BEARER_TOKEN;

export default async function getFreeProducts(req, res) {
  const url =
    BACKSTREET_URL +
    "?searchCriteria[filterGroups][0][filters][0][field]=name&searchCriteria[filterGroups][0][filters][0][conditionType]=like&searchCriteria[filterGroups][0][filters][0][value]=%25FREE - %25&searchCriteria[filterGroups][2][filters][0][field]=sku&searchCriteria[filterGroups][2][filters][0][conditionType]=neq&searchCriteria[filterGroups][2][filters][0][value]=FREE COAX STRIPPER&searchCriteria[filterGroups][3][filters][0][field]=sku&searchCriteria[filterGroups][3][filters][0][conditionType]=neq&searchCriteria[filterGroups][3][filters][0][value]=5-year -extended-warranty";

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + bearerToken,
      },
    });
    if (!response.ok) throw response.statusText;

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}
