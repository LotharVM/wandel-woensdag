import { Drawer } from '@/components/Drawer';
import MovingImages from '@/components/MovingImages';
import { getDaysUntilWednesday } from '@/utils/getDaysUntilWednesday';

type PageProps = {
  params: {
    slug: string;
  };
};

export default async function PageManifest({ params }: PageProps) {
  const daysUntilWednesday = getDaysUntilWednesday();
  const leftText = ['Nog', '(', `${daysUntilWednesday}`, ')', 'dagen', 'tot'];
  const rightText = ['©', 'Wandel', 'Woensdag', new Date().getFullYear()];

  return (
    <div className="fixed inset-0 z-50">
      <Drawer>
        <div className="mb-6 text-primary md:mb-[3vw]">
          <h1 className="mb-6 text-center text-6xl uppercase md:mb-[3vw] md:mt-[1vw] md:text-7xl">
            Manifest
          </h1>
          <div className="text-justify text-xl leading-tight md:text-6xl md:leading-[1.1]">
            <p className="first-letter:pl-10 md:first-letter:pl-20">
              Een vijfkoppige club van kritische en rechtvaardige wandelaars, gedreven door een
              onstilbare hunkering naar een straf bakkie koffie
              <p className="mt-[1lh] first-letter:pl-10 md:first-letter:pl-20">
                Als vijf gepassioneerde wandelaars en koffieliefhebbers zijn we vastberaden om de
                beste koffiezaken in Amsterdam te ontdekken. Elke nieuwe wandeling leidt tot
                ontdekkingen en beoordelingen, die we graag met jou delen.
              </p>
            </p>
          </div>
        </div>
        <MovingImages />
        <div className="mt-6 flex flex-wrap justify-center gap-2 uppercase text-primary md:mt-[3vw] md:justify-between md:gap-0">
          <p className="flex gap-4">
            {leftText.map(word => (
              <span key={word}>{word}</span>
            ))}
          </p>
          <p className="order-1 flex gap-4">
            {rightText.map(word => (
              <span key={word}>{word}</span>
            ))}
          </p>
          <p className="flex w-full translate-y-0 justify-between text-[8vw] leading-none md:order-1">
            <span>Wandel</span>
            <span> Woensdag</span>
          </p>
        </div>
      </Drawer>
    </div>
  );
}

export async function generateStaticParams() {
  // const locations = await queryAllLocations();
  // const params = locations.map(({ slug }) => ({ slug: slug.current }));
  // return params;
}
