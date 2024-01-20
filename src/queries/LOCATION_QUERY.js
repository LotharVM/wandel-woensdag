import { gql } from 'graphql-request';

export const LOCATION_QUERY = gql`
  query location($slug: String) {
    location: allLocation(where: { slug: { current: { eq: $slug } } }) {
      ... on Location {
        _id
        slug {
          current
        }
        title
        intro
        taste: ratingSaste
        vibe: ratingSibe
        design: ratingSesign
        temperature: ratingSemperature
        service: ratingService
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
