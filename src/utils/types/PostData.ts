export type PostData = {
  title: string;
  language: string;
  date: Date;
  description: string;
  image: string;
  tags: string[];
};

export interface PostCollectionElement {
  id: string;
  slug: string;
  body: string;
  collection: string;
  data: PostData;
  render: () => Promise<string>;
}