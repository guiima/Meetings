export interface Meetings {
  title: string;
  description?: string;
  date: Date;
  startAt: Date;
  endAt: Date;
  collaborators: string[];
}
