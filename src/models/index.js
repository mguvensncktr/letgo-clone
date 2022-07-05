// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Category, User, Product } = initSchema(schema);

export {
  Category,
  User,
  Product
};