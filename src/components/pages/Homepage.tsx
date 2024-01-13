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
      <div className="relative flex">
        <div className="w-[50vw] p-4">
          <Grid items={locations} />
        </div>
        <div className="sticky top-4 flex h-[calc(100dvh-32px)] flex-1 justify-center pr-4">
          <HomepageBrand locationsAmount={locations.length} />
        </div>
      </div>
    </div>
  );
};
