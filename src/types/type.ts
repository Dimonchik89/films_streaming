export interface CarouselCategoryButton extends ButtonDefault<"movie" | "tv"> {}

export type MovieHeaderButtonPath = "now_playing" | "popular" | "top_rated";
export interface MovieHeaderButtonType
  extends ButtonDefault<MovieHeaderButtonPath> {}

interface ButtonDefault<T> {
  title: string;
  path: T;
}
