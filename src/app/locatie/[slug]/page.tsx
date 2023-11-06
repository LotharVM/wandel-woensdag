import { queryLocation } from '@/api/queryLocation';
import { Animate } from '@/components/Animate';
import { MotionImage } from '@/components/MotionImage';
import { MotionWrapper } from '@/components/MotionWrapper';
import Link from 'next/link';
import { css } from 'styled-system/css';

type PageProps = {
  params: {
    slug: string;
  };
};

export default async function PageLocationDetail({ params }: PageProps) {
  const { slug } = params;
  const data = await queryLocation({ slug });

  return (
    <div className="fixed bottom-4 left-0 right-4 top-4 flex max-h-[100dvh] justify-between overflow-hidden">
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
    </div>
  );
}
