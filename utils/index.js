export function hex_is_light(color) {
  const DARKNESS_THRESHOLD = 155;
  const NORMALIZATION_CONSTANT = 1000;
  const RED_RELATIVE_LUMINANCE = 299;
  const GREEN_RELATIVE_LUMINANCE = 587;
  const BLUE_RELATIVE_LUMINANCE = 114;
  const hex = color.replace("#", "");

  const c_r = parseInt(hex.substr(0, 2), 16);

  const c_g = parseInt(hex.substr(2, 2), 16);

  const c_b = parseInt(hex.substr(4, 2), 16);

  const brightness = (c_r * RED_RELATIVE_LUMINANCE + c_g * GREEN_RELATIVE_LUMINANCE + c_b * BLUE_RELATIVE_LUMINANCE) / NORMALIZATION_CONSTANT;
  
  return brightness > DARKNESS_THRESHOLD;
}

export const TRADEMARK_TYPES = {
  PUMA: "puma",
  CONVERSE: "converse",
  NIKE: "nike",
};
