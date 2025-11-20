export const generateCloudinaryUrl = (publicId, type = "video", options = {}) => {
  const cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME || "YOUR_CLOUD_NAME"
  const baseUrl = `https://res.cloudinary.com/${cloudName}/${type}/upload`

  // Default optimization options
  const defaultOptions = {
    f_auto: true, // auto format
    q_auto: true, // auto quality
    ...options,
  }

  // Build query string from options
  const queryString = Object.entries(defaultOptions)
    .map(([key, value]) => {
      if (typeof value === "boolean" && value) return key
      if (typeof value !== "boolean") return `${key}_${value}`
      return null
    })
    .filter(Boolean)
    .join(",")

  return `${baseUrl}/${queryString}/${publicId}`
}

export const generateCloudinaryVideoUrl = (publicId, version, options = {}) => {
  const cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME || "YOUR_CLOUD_NAME"
  const baseUrl = `https://res.cloudinary.com/${cloudName}/video/upload`

  // Default video optimization
  const defaultOptions = {
    f: "auto", // auto format
    q: "auto", // auto quality
    ...options,
  }

  const queryString = Object.entries(defaultOptions)
    .map(([key, value]) => `${key}_${value}`)
    .join(",")

  return `${baseUrl}/${queryString}/v${version}/${publicId}.mp4`
}
