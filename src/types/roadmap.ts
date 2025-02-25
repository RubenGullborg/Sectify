export interface RoadmapItem {
  title: string;
  description: string;
  status: "planned" | "in-progress" | "completed";
  date: string;
}