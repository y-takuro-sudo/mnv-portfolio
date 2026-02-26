export type MicroCMSImage = {
  url: string;
  height: number;
  width: number;
};

export type Work = {
  id: string;
  title: string;
  description?: string;
  thumbnail?: string;
  url?: string;
  tags?: string[];
  publishedAt: string;
};

export type MicroCMSWork = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  eyecatch?: MicroCMSImage;
  url?: string;
};

export type MicroCMSListResponse<T> = {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
};
