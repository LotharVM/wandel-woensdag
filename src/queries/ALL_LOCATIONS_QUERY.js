import { gql } from "graphql-request";

export const ALL_LOCATIONS_QUERY = gql`
  query allLocations {
    allLocation {
      ... on Location {
        _id
        slug {
          current
        }
        title
        intro
        image {
          ... on Image {
            asset {
              _id
              url
            }
          }
        }
      }
    }
  }
`;
