import { BACKSTREET_URL } from "../../config";
import { CompileCameras } from "../../lib/helpers";
const bearerToken = process.env.BEARER_TOKEN;

export default async function getVideoRecorders(req, res) {
  const url =
    BACKSTREET_URL +
    "?searchCriteria[filterGroups][0][filters][0][field]=sku&searchCriteria[filterGroups][0][filters][0][value]=%25NVR&searchCriteria[filterGroups][0][filters][0][conditionType]=like";

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + bearerToken,
      },
    });
    if (!response.ok) throw response.statusText;

    const data = await response.json();
    const compiled = data.items.map((product) => ({
      id: product.id,
      sku: product.sku,
      price: { $numberDecimal: parseFloat(product.price).toFixed(2) },
      channelCount: product.sku.split("PRO")[1].split("NVR")[0],
      productLink:
        "/" +
        product.custom_attributes.find(
          (attribute) => attribute.attribute_code == "url_key",
        ).value +
        ".html",
    }));
    // Sort by price
    const video_recorders = compiled.sort(
      (a, b) => a.price.$numberDecimal - b.price.$numberDecimal,
    );

    res.status(200).json({
      video_recorders,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}
