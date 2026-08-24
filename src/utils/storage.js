export const readArray = (key) => {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

export const writeArray = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(Array.isArray(value) ? value : []));
  } catch {
    // storage full or unavailable — ignore
  }
};

export const readNumber = (key) => {
  try {
    const raw = localStorage.getItem(key);
    const parsed = raw ? JSON.parse(raw) : 0;
    return typeof parsed === "number" && !Number.isNaN(parsed) ? parsed : 0;
  } catch {
    return 0;
  }
};
