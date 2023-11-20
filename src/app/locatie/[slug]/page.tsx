import { queryLocation } from '@/api/queryLocation';
import { Animate } from '@/components/Animate';
import { MotionImage } from '@/components/MotionImage';
import { MotionWrapper } from '@/components/MotionWrapper';
import { StickyWrapper } from '@/components/StickyWrapper';
import Link from 'next/link';

type PageProps = {
  params: {
    slug: string;
  };
};

export default async function PageLocationDetail({ params }: PageProps) {
  const { slug } = params;
  const data = await queryLocation({ slug });

  return (
    <div className="min-h-[300dvh]">
      <StickyWrapper className="relative mr-4 flex items-start justify-between pt-4">
        <div className="w-[55%]">
          <MotionWrapper>
            <div className="px-4 ">
              <h1 className="text-[120px] uppercase leading-none">{data.title}</h1>
              <Link href="/">TERUG</Link>
              <p className="text-md mt-12 whitespace-pre">{data.intro}</p>
            </div>
          </MotionWrapper>
        </div>
        <div className="flex-1">
          <MotionImage asset={data.image.asset} isActive />
        </div>
      </StickyWrapper>
    </div>
  );
}
