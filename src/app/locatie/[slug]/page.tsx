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
    <div className="fixed right-0 top-0 z-10 h-[100dvh] w-[100vw]">
      <div className="w-full">
        <div className="relative mr-4 flex items-start justify-between pt-4">
          <div className="w-[50vw] bg-primary">
            <LocationContent data={data} />
          </div>
          <div className="flex-1">
            <div className="max-h-[calc(100vh-32px)]">
              <LocationImage image={data.image} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return [];
}
