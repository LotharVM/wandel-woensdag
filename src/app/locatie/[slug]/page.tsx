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
    <div className="min-h-[200dvh]">
      <StickyWrapper className="relative mr-4 flex items-start justify-between pt-4">
        <div className="w-[50%]">
          <MotionWrapper>
            <h1 className="px-4 text-[120px] uppercase">{data.title}</h1>
          </MotionWrapper>
          <Link href="/" className="px-4">
            TERUG
          </Link>
        </div>
        <div className="flex-1">
          <MotionImage asset={data.image.asset} isActive />
        </div>
      </StickyWrapper>
    </div>
  );
}
