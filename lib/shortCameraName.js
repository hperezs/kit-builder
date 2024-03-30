/**
 * Extracts the camera name from the full camera name.
 * Cyber Secure cameras contain a large name, so this extracts the sku-like name.
 * Ex. (Pro90-4K) 4K Outdoor Security Camera with Audio -> Pro90-4K
 */
export const shortCameraName = (name) => {
  // Regular expression to match anything within parentheses
  const regExp = /\(([^)]+)\)/;
  const matches = regExp.exec(name);

  // If a match is found, return the value within parentheses
  if (matches && matches[1]) {
    return matches[1];
  }
  // If no match is found, return the full name
  return name;
};
