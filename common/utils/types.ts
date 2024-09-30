import { ReactNode } from "react";

export interface MenuItemProps {
  name: string;
  href: string;
  icon: ReactNode;
}

export interface BlogItemProps {
  title: string;
  category: string;
  image: string;
  views: number;
  date: string;
  content: string;
  slug: string;
}

export interface BlogProps {
  blogs: BlogItemProps[];
}

// services/types.ts

export interface BestDay {
  date: string;
  text: string;
}

export interface Language {
  name: string;
  total_seconds: number;
}

export interface Editor {
  name: string;
  total_seconds: number;
}

export interface ReadStats {
  last_update: string;
  start_date: string;
  end_date: string;
  categories: string[];
  best_day: BestDay;
  human_readable_daily_average: string;
  human_readable_total: string;
  languages: Language[];
  editors: Editor[];
}

export interface AllTimeStats {
  text: string;
  total_seconds: number;
}

export interface WakatimeResponse {
  status: number;
  data: ReadStats | AllTimeStats | {};
}
