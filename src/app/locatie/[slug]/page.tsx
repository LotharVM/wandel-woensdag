import { queryAllLocations } from '@/api/queryAllLocations';
import { queryLocation } from '@/api/queryLocation';
import { LocationContent } from '@/components/location/LocationContent';
import { LocationImage } from '@/components/location/LocationImage';

type PageProps = {
  params: {
    slug: string;
  };
};

export default async function PageLocationDetail({ params }: PageProps) {
  const { slug } = params;
  const data = await queryLocation({ slug });

  return (
    <div className="fixed inset-0 z-10 overflow-auto p-2 md:inset-4 md:overflow-hidden md:p-0">
      <div className="relative flex h-full flex-col items-start justify-between gap-4 md:flex-row">
        <div className="h-full w-full flex-1 bg-primary md:w-0">
          <LocationContent data={data} />
        </div>
        <div className="-order-1 h-full w-full flex-1 md:order-1 md:w-0">
          <div className="h-full max-h-[calc(100vh-32px)]">
            <LocationImage image={data.image} />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const locations = await queryAllLocations();
  const params = locations.map(({ slug }) => ({ slug: slug.current }));
  return params;
}
