export type Service = {
  id: number;
  name: string;
  position: {
    lat: number;
    lng: number;
  };
};

export type SearchResult = {
  id: number;
  name: string;
  position: {
    lat: number;
    lng: number;
  };
  distance: string;
  score: number;
};

export type SearchResponse = {
  totalHits: number;
  totalDocuments: number;
  results: SearchResult[];
};
