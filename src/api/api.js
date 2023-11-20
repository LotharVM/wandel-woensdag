import { GraphQLClient } from 'graphql-request';

const client = new GraphQLClient(process.env.NEXT_PUBLIC_API_URL, {
  next: { revalidate: 10 },
  fetch,
});

export const fetchData = async ({ query, variables }) => {
  try {
    return client.request(query, variables);
  } catch (error) {
    return { error };
  }
};
