import type { CollectionEntry } from "astro:content";

type BlogCollection = "notes" | "portfolio" | "reviews";

export type BlogEntry =
  | CollectionEntry<"notes">
  | CollectionEntry<"portfolio">
  | CollectionEntry<"reviews">;

export const formatDate = (date: Date) =>
  new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);

export const byDateDesc = <T extends { data: { date: Date } }>(a: T, b: T) =>
  b.data.date.valueOf() - a.data.date.valueOf();

export const isPublished = <T extends { data: { draft?: boolean } }>(entry: T) =>
  !entry.data.draft;

export const getEntryUrl = (collection: BlogCollection, id: string) =>
  `/${collection}/${id}/`;

export const getEntryFolder = (id: string) => {
  const segments = id.split("/").filter(Boolean);
  return segments.length > 1 ? segments.slice(0, -1).join("/") : "";
};

export const getEntryFolderLabel = (folder: string) => {
  if (!folder) return "未归档";
  const segments = folder.split("/").filter(Boolean);
  return segments.at(-1) ?? folder;
};

export const getNoteFolderUrl = (folder: string) =>
  folder ? `/notes/folders/${folder}/` : "/notes/";
