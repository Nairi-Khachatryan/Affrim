export const copyToClip = async (text: string | null) => {
  if (!text) {
    return;
  }
  return await navigator.clipboard.writeText(text);
};
