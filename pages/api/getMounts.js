import { PROXY_URL } from "../../config";

export default async function getMounts(req, res) {
  const url = PROXY_URL + "mounts";

  try {
    const response = await fetch(url);
    if (!response.ok) throw response.statusText;

    const data = await response.json();
    const hash = {};
    data.items.forEach((p) => {
      hash[p.sku] = p;
    });

    res.status(200).json(hash);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}
