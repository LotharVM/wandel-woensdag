import { Grid } from '@/components/Grid';
import { Location } from '@/interfaces/Location';
import { HomepageBrand } from './HomepageBrand';

interface IHomepage {
  locations: Location[];
}

export const Homepage = ({ locations }: IHomepage) => {
  return (
    <div className="h-[100dvh] w-full overflow-auto" id="home">
      <div className="relative flex flex-col md:flex-row">
        <div className="z-10 flex-1 p-3 md:w-0 md:p-4">
          <Grid items={locations} />
        </div>
        <div className="md:-w0 sticky top-4 -order-1 flex flex-1 justify-center py-10 md:order-1 md:h-[calc(100dvh-32px)] md:py-0">
          <HomepageBrand locationsAmount={locations.length} />
        </div>
      </div>
    </div>
  );
};
