import { queryAllLocations } from '@/api/queryAllLocations';
import { Grid } from '@/components/Grid';
import { MotionWrapper } from '@/components/MotionWrapper';

export default async function Home() {
  const locations = await queryAllLocations();

  return (
    <div className="w-full">
      <div className="relative flex">
        <div className="w-[40%] p-4">
          <Grid items={locations} />
        </div>
        <div className="sticky top-4 flex h-[calc(100dvh-32px)] flex-1 justify-center">
          <MotionWrapper>
            <h1 className="flex h-full w-full flex-col justify-between text-center text-[128px] uppercase ">
              wandel
              <span>Woensdag</span>
            </h1>
          </MotionWrapper>
        </div>
      </div>
    </div>
  );
}
