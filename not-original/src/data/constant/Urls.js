import { DataTypes } from "./Types";

const RestUrls = {
  [DataTypes.PRODUCTS]: `http://localhost:3500/api/products`,
  [DataTypes.CATEGORIES]: `http://localhost:3500/api/categories`,
  [DataTypes.ORDERS]: `http://localhost:3500/api/orders`,
};

const GraphQLUrl = `http://localhost:3500/graphql`;
const authUrl = `http://localhost:3500/login`;

export { RestUrls, GraphQLUrl, authUrl };
