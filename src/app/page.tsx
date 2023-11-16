import { queryAllLocations } from '@/api/queryAllLocations';
import { Grid } from '@/components/Grid';
import { MotionWrapper } from '@/components/MotionWrapper';
import WWLogo from '../../public/ww-logo.png';
import Image from 'next/image';

export default async function Home() {
  const locations = await queryAllLocations();

  return (
    <div className="w-full">
      <div className="relative flex">
        <div className="w-[40%] p-4">
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
                  Een vijfkoppig wandelcollectief van kritische & rechtvaardige wandelaars, gedreven
                  door een onstilbare hunkering naar een straffe bak koffie in amsterdam
                </p>
                <Image
                  className="absolute left-1/2 top-1/2 h-1/3 -translate-x-1/2 -translate-y-1/2 object-contain brightness-50"
                  src={WWLogo}
                  alt="Wandel Woensdag"
                />
              </div>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </div>
  );
}
