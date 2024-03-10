export type PostData = {
  title: string;
  date: string;
  description: string;
  image: {
      url: string;
      alt: string;
  };
  tags: string[];
};