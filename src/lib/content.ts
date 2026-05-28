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
