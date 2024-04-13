export type PostDataType = {
  title: string;
  date: string;
  description: string;
  image: {
      src: string;
      alt: string;
  };
  tags: string[];
};