import { PROXY_URL } from "../../config";

export default async function getPOE(req, res) {
  const url = PROXY_URL + "poe";

  try {
    const response = await fetch(url);
    if (!response.ok) throw response.statusText;

    const data = await response.json();
    data.items.sort((a, b) => a.price - b.price);
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}
