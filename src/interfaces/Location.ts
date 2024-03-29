export interface Location {
  _id: string;
  slug: { current: string };
  title: string;
  intro?: string;
  image: {
    asset: {
      _id: string;
      url: string;
      metadata: {
        lqip: string;
      };
    };
  };
  address: string;
  googleMaps?: {
    lat: number;
    lng: number;
  };
}
