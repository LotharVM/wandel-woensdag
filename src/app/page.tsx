import { queryAllLocations } from '@/api/queryAllLocations';
import { Grid } from '@/components/Grid';
import { MotionWrapper } from '@/components/MotionWrapper';
import Link from 'next/link';
import { ActiveMapLocationOrLogo } from '@/components/ActiveMapLocationOrLogo';

export default async function Home() {
  const locations = await queryAllLocations();

  return (
    <div className="w-full">
      <div className="relative flex">
        <div className="w-[40vw] p-4">
          <Grid items={locations} />
        </div>
        <div className="sticky top-4 flex h-[calc(100dvh-32px)] flex-1 justify-center pr-4">
          <MotionWrapper>
            <div className="flex h-full w-full flex-col justify-between text-center">
              <div>
                <h1 className="text-[128px] uppercase leading-none">
                  wandel
                  <span className="absolute bottom-0 left-[50%] -translate-x-1/2">Woensdag</span>
                </h1>
                <p className="text-md text-balance max-w-xl uppercase leading-tight">
                  Vijf kritische, doch rechtvaardige wandelaars met een onstilbare dorst naar een
                  straffe bak koffie in amsterdam
                </p>
                <p className="text-md text-balance absolute bottom-36 w-full max-w-xl text-center uppercase leading-tight">
                  Lees ons manifest
                </p>
                <ActiveMapLocationOrLogo />
              </div>
              <div className="text-md absolute left-0 right-0 top-0 flex h-full w-full items-center p-4 uppercase">
                <div className="flex w-full justify-between">
                  <div>
                    <Link href={'/'}>Lijst</Link> / <Link href={'/map'}>Map</Link>
                  </div>
                  <div>( {locations.length} ) koffiezaken</div>
                </div>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return [];
}
