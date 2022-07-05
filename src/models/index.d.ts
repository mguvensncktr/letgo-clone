import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type CategoryMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProductMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Category {
  readonly id: string;
  readonly name: string;
  readonly src: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Category, CategoryMetaData>);
  static copyOf(source: Category, mutator: (draft: MutableModel<Category, CategoryMetaData>) => MutableModel<Category, CategoryMetaData> | void): Category;
}

export declare class User {
  readonly id: string;
  readonly name: string;
  readonly rating: number;
  readonly photo: string;
  readonly lat: number;
  readonly long: number;
  readonly city: string;
  readonly products?: (Product | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class Product {
  readonly id: string;
  readonly image: string;
  readonly brand: string;
  readonly price: number;
  readonly rating?: number | null;
  readonly numReviews: number;
  readonly isFeatured: boolean;
  readonly name: string;
  readonly images?: string[] | null;
  readonly description?: string | null;
  readonly category?: Category | null;
  readonly countInStock?: number | null;
  readonly type: string;
  readonly time: number;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly productCategoryId?: string | null;
  constructor(init: ModelInit<Product, ProductMetaData>);
  static copyOf(source: Product, mutator: (draft: MutableModel<Product, ProductMetaData>) => MutableModel<Product, ProductMetaData> | void): Product;
}