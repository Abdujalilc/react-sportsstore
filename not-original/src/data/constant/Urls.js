import { DataTypes } from "./Types";

const RestUrls = {
  [DataTypes.PRODUCTS]: `http://localhost:3500/api/products`,
  [DataTypes.CATEGORIES]: `http://localhost:3500/api/categories`,
  [DataTypes.ORDERS]: `http://localhost:3500/api/orders`,
};

const GraphQLUrl = `/graphql`;
const authUrl = `/login`;

export { RestUrls, GraphQLUrl, authUrl };
