import { BACKSTREET_URL } from "../../config";
import { CompileCameras } from "../../lib/helpers";
const bearerToken = process.env.BEARER_TOKEN;

export default async function getAllCameras(req, res) {
  const cameras_url =
    BACKSTREET_URL +
    "?searchCriteria[filterGroups][0][filters][0][field]=housing_style&searchCriteria[filterGroups][0][filters][0][conditionType]=eq&searchCriteria[filterGroups][0][filters][0][value]=5521&searchCriteria[filterGroups][0][filters][1][field]=housing_style&searchCriteria[filterGroups][0][filters][1][conditionType]=eq&searchCriteria[filterGroups][0][filters][1][value]=5522&searchCriteria[filterGroups][0][filters][2][field]=housing_style&searchCriteria[filterGroups][0][filters][2][conditionType]=eq&searchCriteria[filterGroups][0][filters][2][value]=5523&searchCriteria[filterGroups][1][filters][0][field]=is_cybersecure&searchCriteria[filterGroups][1][filters][0][value]=0&searchCriteria[filterGroups][1][filters][0][conditionType]=eq";

  const cybersecure_url =
    BACKSTREET_URL +
    "?searchCriteria[filterGroups][0][filters][0][field]=housing_style&searchCriteria[filterGroups][0][filters][0][conditionType]=eq&searchCriteria[filterGroups][0][filters][0][value]=5521&searchCriteria[filterGroups][0][filters][1][field]=housing_style&searchCriteria[filterGroups][0][filters][1][conditionType]=eq&searchCriteria[filterGroups][0][filters][1][value]=5522&searchCriteria[filterGroups][0][filters][2][field]=housing_style&searchCriteria[filterGroups][0][filters][2][conditionType]=eq&searchCriteria[filterGroups][0][filters][2][value]=5523&searchCriteria[filterGroups][1][filters][0][field]=is_cybersecure&searchCriteria[filterGroups][1][filters][0][value]=1&searchCriteria[filterGroups][1][filters][0][conditionType]=eq";

  try {
    const response = await fetch(cameras_url, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + bearerToken,
      },
    });
    if (!response.ok) throw response.statusText;

    const data = await response.json();
    const camera_products = CompileCameras(data.items);
    camera_products.sort(
      (a, b) => a.price.$numberDecimal - b.price.$numberDecimal
    );

    const cs_response = await fetch(cybersecure_url, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + bearerToken,
      },
    });
    const cs_data = await cs_response.json();
    const cs_cameras = CompileCameras(cs_data.items, true);
    cs_cameras.sort((a, b) => a.price.$numberDecimal - b.price.$numberDecimal);

    res.status(200).json({
      camera_products,
      cs_cameras,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}
