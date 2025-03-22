import { PROXY_URL } from "../../config";
import { compileCyberSecureRecorders } from "../../lib/helpers";

export default async function getCsVideoRecorders(req, res) {
  const url = PROXY_URL + "cs-video-recorders";

  try {
    const response = await fetch(url);
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
