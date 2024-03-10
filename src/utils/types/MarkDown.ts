export type PostDataType = {
  title: string;
  date: string;
  description: string;
  image: {
      url: string;
      alt: string;
  };
  tags: string[];
};