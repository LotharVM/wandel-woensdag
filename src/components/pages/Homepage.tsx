import { Grid } from '@/components/Grid';
import { MotionWrapper } from '@/components/MotionWrapper';
import Link from 'next/link';
import { ActiveMapLocationOrLogo } from '@/components/ActiveMapLocationOrLogo';
import { Location } from '@/interfaces/Location';
import { HomepageBrand } from './HomepageBrand';

interface IHomepage {
  locations: Location[];
}

export const Homepage = ({ locations }: IHomepage) => {
  return (
    <div className="h-[100dvh] w-full overflow-auto" id="home">
      <div className="relative flex flex-col md:flex-row">
        <div className="p-4 md:w-[50vw]">
          <Grid items={locations} />
        </div>
        <div className="sticky top-4 flex flex-1 justify-center pr-4 md:h-[calc(100dvh-32px)]">
          <HomepageBrand locationsAmount={locations.length} />
        </div>
      </div>
    </div>
  );
};
