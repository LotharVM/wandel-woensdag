import { queryLocation } from "@/api/queryLocation";
import { Animate } from "@/components/Animate";
import { MotionImage } from "@/components/MotionImage";
import { MotionWrapper } from "@/components/MotionWrapper";
import Link from "next/link";
import { css } from "styled-system/css";

type PageProps = {
  params: {
    slug: string;
  };
};

export default async function PageLocationDetail({ params }: PageProps) {
  const { slug } = params;
  const data = await queryLocation({ slug });

  return (
    <div
      className={css({
        pos: "fixed",
        top: 4,
        bottom: 4,
        left: 0,
        right: 4,
        display: "flex",
        justifyContent: "space-between",
        maxH: "100dvh",
        overflow: "hidden",
      })}
    >
      <div
        className={css({
          w: "50%",
        })}
      >
        <MotionWrapper>
          <h1
            className={css({
              fontSize: "120px",
              textTransform: "uppercase",
              lineHeight: 1,
              px: 4,
            })}
          >
            {data.title}
          </h1>
        </MotionWrapper>
        <Link href="/" className={css({ px: 4 })}>
          TERUG
        </Link>
      </div>
      <div
        className={css({
          flex: 1,
        })}
      >
        <MotionImage asset={data.image.asset} isActive />
      </div>
    </div>
  );
}
