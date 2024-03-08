export interface Blog {
  postId: number;
  title: string;
  short_description: string;
  cover_picture: string;
  body: string;
  authorId: number;
  author_username: string;
  category: BlogCategory;
  createdAt: string;
  updatedAt: string | null;
  deletedAt: string | null;
}
export interface BlogCategory {
  category: string;
}
