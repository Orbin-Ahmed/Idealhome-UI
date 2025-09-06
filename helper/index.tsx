import { N8nResponse } from "@/types";

export const getOutput = (data: any): string => {
  if (Array.isArray(data)) return data[0]?.output ?? "";
  return (data as { output?: string })?.output ?? "";
};

export const extractDriveId = (url: string): string | null => {
  try {
    const m1 = url.match(/\/file\/d\/([^/]+)\//);
    if (m1?.[1]) return m1[1];
    const u = new URL(url);
    const idParam = u.searchParams.get("id");
    if (idParam) return idParam;
    return null;
  } catch {
    return null;
  }
};

export const toDirectImageUrl = (url: string): string => {
  const id = extractDriveId(url);
  return id ? `https://drive.google.com/uc?export=view&id=${id}` : url;
};

export const toThumbnailUrl = (url: string): string => {
  const id = extractDriveId(url);
  return id ? `https://drive.google.com/thumbnail?id=${id}&sz=w1000` : url;
};
