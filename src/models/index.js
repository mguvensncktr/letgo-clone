// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { FavouriteProducts, Product, Category, User } = initSchema(schema);

export {
  FavouriteProducts,
  Product,
  Category,
  User
};