import { queryAllLocations } from "@/api/queryAllLocations";
import { css } from "styled-system/css";
import { Grid } from "@/components/Grid";
import { MotionWrapper } from "@/components/MotionWrapper";

export default async function Home() {
  const locations = await queryAllLocations();

  return (
    <div>
      <div className={css({ display: "flex", position: "relative" })}>
        <div className={css({ width: "40vw" })}>
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
              Wandel
              <span>Woensdag</span>
            </h1>
          </MotionWrapper>
        </div>
      </div>
    </div>
  );
}
