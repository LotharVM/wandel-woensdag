import { queryAllLocations } from '@/api/queryAllLocations';
import { Map } from '@/components/Map';
import React from 'react';

interface PageProps {}

export default async function Page() {
  const locations = await queryAllLocations();
  return (
    <div className="sticky top-0 z-10 h-[100dvh] w-full p-2 md:w-[50vw] md:p-4 md:pl-0">
      <div className="h-full overflow-hidden rounded-xl">
        <Map locations={locations} />
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return [];
}

export async function generateMetadata() {
  return {
    title: 'Map - Wandel Woensdag',
  };
}
