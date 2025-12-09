import { LucideIcon } from "lucide-react";

export interface Plan {
  id: string;
  name: string;
  duration: string;
  price: string;
  oldPrice?: string;
  featured: boolean;
  benefits: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}