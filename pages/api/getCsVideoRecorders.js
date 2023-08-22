import { BACKSTREET_URL } from "../../config";
import { compileCyberSecureRecorders } from "../../lib/helpers";
const bearerToken = process.env.BEARER_TOKEN;

export default async function getCsVideoRecorders(req, res) {
  const url =
    BACKSTREET_URL +
    "?searchCriteria[filterGroups][0][filters][0][field]=is_cybersecure&searchCriteria[filterGroups][0][filters][0][conditionType]=eq&searchCriteria[filterGroups][0][filters][0][value]=1&searchCriteria[filterGroups][1][filters][0][field]=is_nvr&searchCriteria[filterGroups][1][filters][0][conditionType]=eq&searchCriteria[filterGroups][1][filters][0][value]=1";

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + bearerToken,
      },
    });
    if (!response.ok) throw response.statusText;

    const data = await response.json();
    // Sort by price
    const cs_video_recorders = compileCyberSecureRecorders(data.items);

    res.status(200).json({
      cs_video_recorders,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}
