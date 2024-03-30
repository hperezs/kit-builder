export function CompileCameras(products, isCyberSecure = false) {
  const getHousingStyle = (product) => {
    let value = product.custom_attributes.find(
      (attribute) => attribute.attribute_code == "housing_style",
    ).value;
    switch (value) {
      case "5521":
        return "dome";
      case "5522":
        return "bullet";
      case "5523":
        return "ptz";
      default:
        throw `housing_style attribute not set for ${product.sku}`;
    }
  };

  const getCameraLens = (product) => {
    let value = product.custom_attributes.find(
      (attribute) => attribute.attribute_code == "lens",
    ).value;
    switch (value) {
      case "5535":
        return "360° Panoramic";
      case "5470":
        return "2.8mm fixed";
      case "5467":
        return "2.8-12mm manual";
      case "5469":
        return "2.8-12mm motorized";
      case "5525":
        return "2.8-8mm motorized";
      case "5524":
        return "2.7-13.5mm motorized";
      case "5520":
        return "5-50mm motorized";
      case "5471":
        return "3.6mm fixed";
      case "5514":
        return "4-84mm motorized";
      case "5515":
        return "4-94mm motorized";
      case "5516":
        return "5.5-110mm motorized";
      case "5517":
        return "4.3-129mm motorized";
      default:
        throw `lens attribute not set for ${product.sku}`;
    }
  };

  const getNightVision = (product) => {
    let value = product.custom_attributes.find(
      (attribute) => attribute.attribute_code == "night_vision",
    ).value;
    switch (value) {
      case "5490":
        return "30ft";
      case "5497":
        return "60ft";
      case "5498":
        return "70ft";
      case "5502":
        return "90ft";
      case "5513":
        return "75ft";
      case "5483":
        return "100ft";
      case "5485":
        return "120ft";
      case "5486":
        return "150ft";
      case "5487":
        return "180ft";
      case "5488":
        return "240ft";
      case "5489":
        return "300ft";
      case "5491":
        return "360ft";
      case "5518":
        return "400ft";
      case "5493":
        return "450ft";
      case "5527":
        return "200ft";
      default:
        throw `night_vision attribute not set for ${product.sku}`;
    }
  };

  const getResolution = (product) => {
    let attribute = product.custom_attributes.find(
      (attribute) => attribute.attribute_code == "recording_resolution",
    );
    switch (attribute?.value) {
      case "5477":
        return "1080p";
      case "5478":
        return "2K";
      case "5480":
        return "3K";
      case "5481":
        return "4K";
      default:
        throw `recording_resolution attribute not set for ${product.sku}`;
    }
  };

  const getAudio = (product) => {
    let attribute = product.custom_attributes.find(
      (attribute) => attribute.attribute_code == "audio",
    );
    switch (attribute?.value) {
      case "5431":
        return "2-Way Audio";
      case "5432":
        return "Built-in Microphone";
      case "5433":
        return "No Audio";
      case "5526":
        return "Built-in Speaker";
      default:
        throw `audio attribute not set for ${product.sku}`;
    }
  };

  const getComparePrice = (product) => {
    return (
      product.custom_attributes.find(
        (attribute) => attribute.attribute_code == "compare_price",
      )?.value | "--"
    );
  };

  const getProductLink = (product) => {
    let url_key = product.custom_attributes.find(
      (attribute) => attribute.attribute_code == "url_key",
    ).value;
    return "/" + url_key + ".html";
  };

  const getCameraMounts = (product) => {
    const values = product.custom_attributes.find(
      (a) => a.attribute_code === "mounts",
    )?.value;
    const skus = values?.split(",")?.map((code) => mountValues[code]);
    return skus;
  };

  let mapped_products = products.map((product) => {
    try {
      return {
        name: product.name.replace(" - Zoom Lens", ""),
        id: product.id,
        sku: product.sku,
        housingStyle: getHousingStyle(product),
        imageLink:
          "/pub/media/catalog/product" +
          product?.media_gallery_entries[0]?.file,
        cameraLens: getCameraLens(product),
        nightVision: getNightVision(product),
        resolution: getResolution(product),
        audio: getAudio(product),
        price: { $numberDecimal: product.price },
        productLink: getProductLink(product),
        isCyberSecure,
        mounts: getCameraMounts(product),
      };
    } catch (error) {
      console.error(error);
      return null;
    }
  });

  return mapped_products.filter((product) => product !== null);
}

export function compileCyberSecureRecorders(products) {
  // Compile object scheme to match the rest of the app
  let compiled = products
    // Ensure only Cyber Secure recorders are included
    .filter((product) => product.sku.startsWith("CS"))
    .map((product) => ({
      id: product.id,
      sku: product.sku,
      price: { $numberDecimal: parseFloat(product.price).toFixed(2) },
      channelCount: product.sku.split("CS")[1].split("-")[0],
      productLink:
        "/" +
        product.custom_attributes.find(
          (attribute) => attribute.attribute_code == "url_key",
        ).value +
        ".html",
      isCyberSecure: true,
    }));
  // Sort by price
  let sorted = compiled.sort(
    (a, b) => a.price.$numberDecimal - b.price.$numberDecimal,
  );

  return sorted;
}

const mountValues = {
  5536: "B170-GRAY",
  5537: "B310",
  5538: "B320",
  5539: "B220A",
  5540: "B173",
  5541: "6T35-Corner-Mount",
  5542: "Pro-Pole-Mount",
  5543: "ProPTZ-4K-Ceiling Mount",
  5544: "M5",
  5545: "M5B-Universal-Mount",
  5546: "CXH-N",
  5547: "CXH-N-G",
  5548: "CXH-I",
  5549: "B170-WHITE",
  5550: "CS-M1",
  5551: "CS-M2",
  5552: "CS-M3",
  5553: "CS-M4",
  5554: "CS-M6-1",
  5555: "CS-M7",
  5556: "CS-POLE",
  5557: "CS-WALL",
  5558: "CS-BB",
  5559: "CS-Corner",
  5560: "CS-Ceiling",
};
