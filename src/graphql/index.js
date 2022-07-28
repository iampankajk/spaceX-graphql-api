import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GET_SPACE_MISSION } from "./queries";
export const client = new ApolloClient({
  uri: "https://api.spacex.land/graphql/",
  cache: new InMemoryCache(),
});

class SpaceService {
  async getSpaceMission(limit = 10) {
    try {
      const res = await client.query({
        query: GET_SPACE_MISSION,
        variables: { limit },
      });

      if (!res || !res.data) throw new Error("Something went wrong...");
      return res.data.launchesPast;
    } catch (error) {
      throw error;
    }
  }
}

export default new SpaceService();
