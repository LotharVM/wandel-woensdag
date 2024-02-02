import { ANIMATION_DEFAULT } from '@/constants/animations';
import React from 'react';
import { MotionDiv } from '../Motion';

interface LocationContentProps {
  data: any;
}

export const LocationContent = ({ data }: LocationContentProps) => {
  const { taste, vibe, design, temperature, service } = data;

  const ratings = [
    {
      title: 'Smaak',
      score: taste,
    },
    {
      title: 'Vibe',
      score: vibe,
    },
    {
      title: 'Design',
      score: design,
    },
    {
      title: 'Service',
      score: service,
    },
    {
      title: 'Temperatuur',
      score: temperature,
    },
  ];

  const averageRating =
    ratings.map(({ score }) => score).reduce((acc, value) => acc + value) / ratings.length;

  return (
    <MotionDiv
      initial={{ opacity: 0, scale: 0.975 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ ...ANIMATION_DEFAULT, duration: 0.75 }}
      className="flex h-full flex-col gap-12 md:justify-between md:gap-0"
    >
      <div>
        <h1 className="-mt-3 max-w-[70%] text-ellipsis text-6xl uppercase leading-none md:text-[120px]">
          {data.title}
        </h1>
        <div className="heading-xs mt-3 flex justify-between md:gap-6">
          <div className="w-full md:w-0 md:flex-1">
            <p>eerste van der helstraat 57, 1073 ad amsterdam</p>
          </div>
          <div className="w-full text-right md:w-0 md:flex-1 md:text-left">
            <p>nummer 4 ( 18 )</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-wrap items-start gap-12 md:flex-row md:gap-6">
        <div className="w-full md:w-0 md:flex-1">
          <h2 className="heading-xs mb-2">Review</h2>
          <p className="whitespace-pre-wrap text-justify text-lg leading-normal">{data.intro}</p>
        </div>
        <div className="w-full md:w-0 md:flex-1 ">
          <h2 className="heading-xs mb-2">Beoordeling</h2>
          <div className="flex flex-col gap-3">
            {ratings?.map(rating => {
              if (!rating.score) return;
              return (
                <h3 key={rating.title} className="flex justify-between text-4xl">
                  <span>{rating.title}</span>
                  <span>{rating.score.toFixed(1)}</span>
                </h3>
              );
            })}
          </div>
        </div>
      </div>
      <div className="mt-12 flex w-full items-end justify-between md:mt-0 ">
        <p className="text-md heading-xs flex gap-5 md:gap-14">
          {data.instagram && (
            <a href={data.instagram} target="_blank" rel="noopener nofollow">
              Instagram
            </a>
          )}
          <a href="/">Route</a>
        </p>
        <h4 className="-mb-4 text-9xl">{averageRating}</h4>
      </div>
      {/* </div> */}
    </MotionDiv>
  );
};
