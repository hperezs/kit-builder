import { PROXY_URL } from "../../config";

export default async function getIndoorCables(req, res) {
  const url = PROXY_URL + "indoor-cables";

  try {
    const response = await fetch(url);
    if (!response.ok) throw response.statusText;

    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}
