export const getYouTubeId = (url) => {
  if (!url || typeof url !== "string") return "";
  const cleanUrl = url.trim();
  if (cleanUrl.includes("v=")) {
    return cleanUrl.split("v=")[1]?.split("&")[0] || "";
  }
  if (cleanUrl.includes("youtu.be/")) {
    return cleanUrl.split("youtu.be/")[1]?.split(/[?&]/)[0] || "";
  }
  return cleanUrl.split("/").pop()?.split(/[?&]/)[0] || "";
};

export const getThumbnailUrl = (url, quality = "maxresdefault") =>
  url
    ? `https://img.youtube.com/vi/${getYouTubeId(url)}/${quality}.jpg`
    : "";

export const handleThumbError = (event) => {
  const img = event.currentTarget;
  if (!img.dataset.fallback) {
    img.dataset.fallback = "1";
    const id = getYouTubeId(img.src);
    img.src = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
  }
};
