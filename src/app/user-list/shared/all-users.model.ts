export interface Post {
  id: string;
  email: string;
  name: string;
}

export interface Query {
  allUsers: Post[];
}
