import { RESTDataSource } from "@apollo/datasource-rest";

export class TracksAPI extends RESTDataSource {
  constructor(baseURL) {
    super();
    this.baseURL = baseURL;
  }

  getTracksForHome = async (parent, args, context, info) => {
    // console.log("parent: ", parent);
    // console.log("args: ", args);
    // console.log("context: ", context);
    // console.log("info: ", info);

    const tracks = await this.get("tracks");
    // tracksWithAuthors
    return tracks.map(async ({ id, title, authorId, thumbnail }) => {
      const author = await this.get(`author/${authorId}`);

      return {
        id,
        title,
        author,
        thumbnail,
      };
    });
  };
}
