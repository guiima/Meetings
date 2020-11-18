import {Collaborators} from '../collaborators';

export interface Meetings {
  id?: number;
  title: string;
  description?: string;
  date: Date;
  startAt: Date;
  endAt: Date;
  collaborators: Collaborators[];
}
