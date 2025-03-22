import { PROXY_URL } from "../../config";
import { CompileCameras } from "../../lib/helpers";

export default async function getAllCameras(req, res) {
  const cameras_url = PROXY_URL + "cameras";
  const cybersecure_url = PROXY_URL + "cs-cameras";

  try {
    const response = await fetch(cameras_url);
    if (!response.ok) throw response.statusText;

    const data = await response.json();
    const camera_products = CompileCameras(data.items);
    camera_products.sort(
      (a, b) => a.price.$numberDecimal - b.price.$numberDecimal,
    );

    const cs_response = await fetch(cybersecure_url);
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
