import { queryAllLocations } from "@/api/queryAllLocations";
import { css } from "styled-system/css";
import { Grid } from "@/components/Grid";
import { MotionWrapper } from "@/components/MotionWrapper";

export default async function Home() {
  const locations = await queryAllLocations();

  return (
    <div
      className={css({
        pos: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        width: "100%",
        maxH: "100dvh",
        overflow: "auto",
      })}
    >
      <div className={css({ display: "flex", position: "relative" })}>
        <div className={css({ width: "40vw", p: 4 })}>
          <Grid items={locations} />
        </div>
        <div
          className={css({
            position: "sticky",
            top: "16px",
            display: "flex",
            flex: 1,
            height: "calc(100dvh - 32px)",
            justifyContent: "center",
          })}
        >
          <MotionWrapper>
            <h1
              className={css({
                h: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                fontSize: "128px",
                w: "100%",
                textAlign: "center",
                textTransform: "uppercase",
                lineHeight: 1,
              })}
            >
              wandel
              <span>Woensdag</span>
            </h1>
          </MotionWrapper>
        </div>
      </div>
    </div>
  );
}
