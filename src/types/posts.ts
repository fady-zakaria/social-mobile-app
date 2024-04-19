export type posts = PostType[];

export interface PostType {
  id: number;
  user_id: number;
  title: string;
  body: string;
}
