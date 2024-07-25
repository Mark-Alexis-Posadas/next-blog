export interface PostTypes {
  id?: number;
  title: string;
  author: string;
  content: string;
  date: string;
  likes: number;
  comments: { user: string; comment: string }[];
}
