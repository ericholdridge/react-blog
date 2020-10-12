import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import blog from "./blog";
import image from "./image";
import featuredImage from "./featuredPosts";
import recommended from "./recommened";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([blog, image, featuredImage, recommended]),
});
