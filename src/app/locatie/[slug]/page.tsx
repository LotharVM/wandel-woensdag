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
    <div className="fixed left-0 top-0 z-10 h-[100dvh] w-full overflow-auto">
      <div className="w-full">
        <div className="relative flex flex-col items-start justify-between md:mr-4 md:flex-row md:pt-4">
          <div className="w-full bg-primary md:w-[50vw]">
            <LocationContent data={data} />
          </div>
          <div className="-order-1 flex-1 md:order-1">
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
