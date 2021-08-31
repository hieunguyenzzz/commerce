export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any
  /** The `Long` scalar type represents 52-bit integers */
  Long: any
  /** A time string with format: HH:mm:ss.SSS */
  Time: any
  /** The `Upload` scalar type represents a file upload. */
  Upload: any
}

export type AdminUser = {
  __typename?: 'AdminUser'
  id: Scalars['ID']
  username?: Maybe<Scalars['String']>
  firstname: Scalars['String']
  lastname: Scalars['String']
}

export type Customer = {
  __typename?: 'Customer'
  id: Scalars['ID']
  created_at: Scalars['DateTime']
  updated_at: Scalars['DateTime']
  first_name?: Maybe<Scalars['String']>
  last_name?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  password?: Maybe<Scalars['String']>
  published_at?: Maybe<Scalars['DateTime']>
  orders?: Maybe<Array<Maybe<Order>>>
}

export type CustomerOrdersArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type CustomerAggregator = {
  __typename?: 'CustomerAggregator'
  count?: Maybe<Scalars['Int']>
  totalCount?: Maybe<Scalars['Int']>
}

export type CustomerConnection = {
  __typename?: 'CustomerConnection'
  values?: Maybe<Array<Maybe<Customer>>>
  groupBy?: Maybe<CustomerGroupBy>
  aggregate?: Maybe<CustomerAggregator>
}

export type CustomerConnectionCreated_At = {
  __typename?: 'CustomerConnectionCreated_at'
  key?: Maybe<Scalars['DateTime']>
  connection?: Maybe<CustomerConnection>
}

export type CustomerConnectionEmail = {
  __typename?: 'CustomerConnectionEmail'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<CustomerConnection>
}

export type CustomerConnectionFirst_Name = {
  __typename?: 'CustomerConnectionFirst_name'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<CustomerConnection>
}

export type CustomerConnectionId = {
  __typename?: 'CustomerConnectionId'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<CustomerConnection>
}

export type CustomerConnectionLast_Name = {
  __typename?: 'CustomerConnectionLast_name'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<CustomerConnection>
}

export type CustomerConnectionPassword = {
  __typename?: 'CustomerConnectionPassword'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<CustomerConnection>
}

export type CustomerConnectionPublished_At = {
  __typename?: 'CustomerConnectionPublished_at'
  key?: Maybe<Scalars['DateTime']>
  connection?: Maybe<CustomerConnection>
}

export type CustomerConnectionUpdated_At = {
  __typename?: 'CustomerConnectionUpdated_at'
  key?: Maybe<Scalars['DateTime']>
  connection?: Maybe<CustomerConnection>
}

export type CustomerGroupBy = {
  __typename?: 'CustomerGroupBy'
  id?: Maybe<Array<Maybe<CustomerConnectionId>>>
  created_at?: Maybe<Array<Maybe<CustomerConnectionCreated_At>>>
  updated_at?: Maybe<Array<Maybe<CustomerConnectionUpdated_At>>>
  first_name?: Maybe<Array<Maybe<CustomerConnectionFirst_Name>>>
  last_name?: Maybe<Array<Maybe<CustomerConnectionLast_Name>>>
  email?: Maybe<Array<Maybe<CustomerConnectionEmail>>>
  password?: Maybe<Array<Maybe<CustomerConnectionPassword>>>
  published_at?: Maybe<Array<Maybe<CustomerConnectionPublished_At>>>
}

export type CustomerInput = {
  first_name?: Maybe<Scalars['String']>
  last_name?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  password?: Maybe<Scalars['String']>
  orders?: Maybe<Array<Maybe<Scalars['ID']>>>
  published_at?: Maybe<Scalars['DateTime']>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type FileInfoInput = {
  name?: Maybe<Scalars['String']>
  alternativeText?: Maybe<Scalars['String']>
  caption?: Maybe<Scalars['String']>
}

export type FileInput = {
  name: Scalars['String']
  alternativeText?: Maybe<Scalars['String']>
  caption?: Maybe<Scalars['String']>
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  formats?: Maybe<Scalars['JSON']>
  hash: Scalars['String']
  ext?: Maybe<Scalars['String']>
  mime: Scalars['String']
  size: Scalars['Float']
  url: Scalars['String']
  previewUrl?: Maybe<Scalars['String']>
  provider: Scalars['String']
  provider_metadata?: Maybe<Scalars['JSON']>
  related?: Maybe<Array<Maybe<Scalars['ID']>>>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type I18NLocale = {
  __typename?: 'I18NLocale'
  id: Scalars['ID']
  created_at: Scalars['DateTime']
  updated_at: Scalars['DateTime']
  name?: Maybe<Scalars['String']>
  code?: Maybe<Scalars['String']>
}

export type InputId = {
  id: Scalars['ID']
}

export type LocaleInput = {
  name?: Maybe<Scalars['String']>
  code?: Maybe<Scalars['String']>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type Morph =
  | UsersPermissionsMe
  | UsersPermissionsMeRole
  | UsersPermissionsLoginPayload
  | UserPermissionsPasswordPayload
  | Customer
  | CustomerConnection
  | CustomerAggregator
  | CustomerGroupBy
  | CustomerConnectionId
  | CustomerConnectionCreated_At
  | CustomerConnectionUpdated_At
  | CustomerConnectionFirst_Name
  | CustomerConnectionLast_Name
  | CustomerConnectionEmail
  | CustomerConnectionPassword
  | CustomerConnectionPublished_At
  | CreateCustomerPayload
  | UpdateCustomerPayload
  | DeleteCustomerPayload
  | Note
  | NoteConnection
  | NoteAggregator
  | NoteGroupBy
  | NoteConnectionId
  | NoteConnectionCreated_At
  | NoteConnectionUpdated_At
  | NoteConnectionTitle
  | NoteConnectionContent
  | NoteConnectionSlug
  | NoteConnectionPublished_At
  | CreateNotePayload
  | UpdateNotePayload
  | DeleteNotePayload
  | Order
  | OrderConnection
  | OrderAggregator
  | OrderGroupBy
  | OrderConnectionId
  | OrderConnectionCreated_At
  | OrderConnectionUpdated_At
  | OrderConnectionCustomer
  | OrderConnectionPublished_At
  | CreateOrderPayload
  | UpdateOrderPayload
  | DeleteOrderPayload
  | Product
  | ProductConnection
  | ProductAggregator
  | ProductGroupBy
  | ProductConnectionId
  | ProductConnectionCreated_At
  | ProductConnectionUpdated_At
  | ProductConnectionTitle
  | ProductConnectionDescription
  | ProductConnectionPublished_At
  | CreateProductPayload
  | UpdateProductPayload
  | DeleteProductPayload
  | Tag
  | TagConnection
  | TagAggregator
  | TagGroupBy
  | TagConnectionId
  | TagConnectionCreated_At
  | TagConnectionUpdated_At
  | TagConnectionTitle
  | TagConnectionPublished_At
  | CreateTagPayload
  | UpdateTagPayload
  | DeleteTagPayload
  | I18NLocale
  | UploadFile
  | UploadFileConnection
  | UploadFileAggregator
  | UploadFileAggregatorSum
  | UploadFileAggregatorAvg
  | UploadFileAggregatorMin
  | UploadFileAggregatorMax
  | UploadFileGroupBy
  | UploadFileConnectionId
  | UploadFileConnectionCreated_At
  | UploadFileConnectionUpdated_At
  | UploadFileConnectionName
  | UploadFileConnectionAlternativeText
  | UploadFileConnectionCaption
  | UploadFileConnectionWidth
  | UploadFileConnectionHeight
  | UploadFileConnectionFormats
  | UploadFileConnectionHash
  | UploadFileConnectionExt
  | UploadFileConnectionMime
  | UploadFileConnectionSize
  | UploadFileConnectionUrl
  | UploadFileConnectionPreviewUrl
  | UploadFileConnectionProvider
  | UploadFileConnectionProvider_Metadata
  | DeleteFilePayload
  | UsersPermissionsPermission
  | UsersPermissionsRole
  | UsersPermissionsRoleConnection
  | UsersPermissionsRoleAggregator
  | UsersPermissionsRoleGroupBy
  | UsersPermissionsRoleConnectionId
  | UsersPermissionsRoleConnectionName
  | UsersPermissionsRoleConnectionDescription
  | UsersPermissionsRoleConnectionType
  | CreateRolePayload
  | UpdateRolePayload
  | DeleteRolePayload
  | UsersPermissionsUser
  | UsersPermissionsUserConnection
  | UsersPermissionsUserAggregator
  | UsersPermissionsUserGroupBy
  | UsersPermissionsUserConnectionId
  | UsersPermissionsUserConnectionCreated_At
  | UsersPermissionsUserConnectionUpdated_At
  | UsersPermissionsUserConnectionUsername
  | UsersPermissionsUserConnectionEmail
  | UsersPermissionsUserConnectionProvider
  | UsersPermissionsUserConnectionConfirmed
  | UsersPermissionsUserConnectionBlocked
  | UsersPermissionsUserConnectionRole
  | CreateUserPayload
  | UpdateUserPayload
  | DeleteUserPayload

export type Mutation = {
  __typename?: 'Mutation'
  createCustomer?: Maybe<CreateCustomerPayload>
  updateCustomer?: Maybe<UpdateCustomerPayload>
  deleteCustomer?: Maybe<DeleteCustomerPayload>
  createNote?: Maybe<CreateNotePayload>
  updateNote?: Maybe<UpdateNotePayload>
  deleteNote?: Maybe<DeleteNotePayload>
  createOrder?: Maybe<CreateOrderPayload>
  updateOrder?: Maybe<UpdateOrderPayload>
  deleteOrder?: Maybe<DeleteOrderPayload>
  createProduct?: Maybe<CreateProductPayload>
  updateProduct?: Maybe<UpdateProductPayload>
  deleteProduct?: Maybe<DeleteProductPayload>
  createTag?: Maybe<CreateTagPayload>
  updateTag?: Maybe<UpdateTagPayload>
  deleteTag?: Maybe<DeleteTagPayload>
  /** Delete one file */
  deleteFile?: Maybe<DeleteFilePayload>
  /** Create a new role */
  createRole?: Maybe<CreateRolePayload>
  /** Update an existing role */
  updateRole?: Maybe<UpdateRolePayload>
  /** Delete an existing role */
  deleteRole?: Maybe<DeleteRolePayload>
  /** Create a new user */
  createUser?: Maybe<CreateUserPayload>
  /** Update an existing user */
  updateUser?: Maybe<UpdateUserPayload>
  /** Delete an existing user */
  deleteUser?: Maybe<DeleteUserPayload>
  upload: UploadFile
  multipleUpload: Array<Maybe<UploadFile>>
  updateFileInfo: UploadFile
  login: UsersPermissionsLoginPayload
  register: UsersPermissionsLoginPayload
  forgotPassword?: Maybe<UserPermissionsPasswordPayload>
  resetPassword?: Maybe<UsersPermissionsLoginPayload>
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>
}

export type MutationCreateCustomerArgs = {
  input?: Maybe<CreateCustomerInput>
}

export type MutationUpdateCustomerArgs = {
  input?: Maybe<UpdateCustomerInput>
}

export type MutationDeleteCustomerArgs = {
  input?: Maybe<DeleteCustomerInput>
}

export type MutationCreateNoteArgs = {
  input?: Maybe<CreateNoteInput>
}

export type MutationUpdateNoteArgs = {
  input?: Maybe<UpdateNoteInput>
}

export type MutationDeleteNoteArgs = {
  input?: Maybe<DeleteNoteInput>
}

export type MutationCreateOrderArgs = {
  input?: Maybe<CreateOrderInput>
}

export type MutationUpdateOrderArgs = {
  input?: Maybe<UpdateOrderInput>
}

export type MutationDeleteOrderArgs = {
  input?: Maybe<DeleteOrderInput>
}

export type MutationCreateProductArgs = {
  input?: Maybe<CreateProductInput>
}

export type MutationUpdateProductArgs = {
  input?: Maybe<UpdateProductInput>
}

export type MutationDeleteProductArgs = {
  input?: Maybe<DeleteProductInput>
}

export type MutationCreateTagArgs = {
  input?: Maybe<CreateTagInput>
}

export type MutationUpdateTagArgs = {
  input?: Maybe<UpdateTagInput>
}

export type MutationDeleteTagArgs = {
  input?: Maybe<DeleteTagInput>
}

export type MutationDeleteFileArgs = {
  input?: Maybe<DeleteFileInput>
}

export type MutationCreateRoleArgs = {
  input?: Maybe<CreateRoleInput>
}

export type MutationUpdateRoleArgs = {
  input?: Maybe<UpdateRoleInput>
}

export type MutationDeleteRoleArgs = {
  input?: Maybe<DeleteRoleInput>
}

export type MutationCreateUserArgs = {
  input?: Maybe<CreateUserInput>
}

export type MutationUpdateUserArgs = {
  input?: Maybe<UpdateUserInput>
}

export type MutationDeleteUserArgs = {
  input?: Maybe<DeleteUserInput>
}

export type MutationUploadArgs = {
  refId?: Maybe<Scalars['ID']>
  ref?: Maybe<Scalars['String']>
  field?: Maybe<Scalars['String']>
  source?: Maybe<Scalars['String']>
  info?: Maybe<FileInfoInput>
  file: Scalars['Upload']
}

export type MutationMultipleUploadArgs = {
  refId?: Maybe<Scalars['ID']>
  ref?: Maybe<Scalars['String']>
  field?: Maybe<Scalars['String']>
  source?: Maybe<Scalars['String']>
  files: Array<Maybe<Scalars['Upload']>>
}

export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID']
  info: FileInfoInput
}

export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput
}

export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput
}

export type MutationForgotPasswordArgs = {
  email: Scalars['String']
}

export type MutationResetPasswordArgs = {
  password: Scalars['String']
  passwordConfirmation: Scalars['String']
  code: Scalars['String']
}

export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']
}

export type Note = {
  __typename?: 'Note'
  id: Scalars['ID']
  created_at: Scalars['DateTime']
  updated_at: Scalars['DateTime']
  title?: Maybe<Scalars['String']>
  content?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
  published_at?: Maybe<Scalars['DateTime']>
  tags?: Maybe<Array<Maybe<Tag>>>
}

export type NoteTagsArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type NoteAggregator = {
  __typename?: 'NoteAggregator'
  count?: Maybe<Scalars['Int']>
  totalCount?: Maybe<Scalars['Int']>
}

export type NoteConnection = {
  __typename?: 'NoteConnection'
  values?: Maybe<Array<Maybe<Note>>>
  groupBy?: Maybe<NoteGroupBy>
  aggregate?: Maybe<NoteAggregator>
}

export type NoteConnectionContent = {
  __typename?: 'NoteConnectionContent'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<NoteConnection>
}

export type NoteConnectionCreated_At = {
  __typename?: 'NoteConnectionCreated_at'
  key?: Maybe<Scalars['DateTime']>
  connection?: Maybe<NoteConnection>
}

export type NoteConnectionId = {
  __typename?: 'NoteConnectionId'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<NoteConnection>
}

export type NoteConnectionPublished_At = {
  __typename?: 'NoteConnectionPublished_at'
  key?: Maybe<Scalars['DateTime']>
  connection?: Maybe<NoteConnection>
}

export type NoteConnectionSlug = {
  __typename?: 'NoteConnectionSlug'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<NoteConnection>
}

export type NoteConnectionTitle = {
  __typename?: 'NoteConnectionTitle'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<NoteConnection>
}

export type NoteConnectionUpdated_At = {
  __typename?: 'NoteConnectionUpdated_at'
  key?: Maybe<Scalars['DateTime']>
  connection?: Maybe<NoteConnection>
}

export type NoteGroupBy = {
  __typename?: 'NoteGroupBy'
  id?: Maybe<Array<Maybe<NoteConnectionId>>>
  created_at?: Maybe<Array<Maybe<NoteConnectionCreated_At>>>
  updated_at?: Maybe<Array<Maybe<NoteConnectionUpdated_At>>>
  title?: Maybe<Array<Maybe<NoteConnectionTitle>>>
  content?: Maybe<Array<Maybe<NoteConnectionContent>>>
  slug?: Maybe<Array<Maybe<NoteConnectionSlug>>>
  published_at?: Maybe<Array<Maybe<NoteConnectionPublished_At>>>
}

export type NoteInput = {
  title?: Maybe<Scalars['String']>
  content?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
  tags?: Maybe<Array<Maybe<Scalars['ID']>>>
  published_at?: Maybe<Scalars['DateTime']>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type Order = {
  __typename?: 'Order'
  id: Scalars['ID']
  created_at: Scalars['DateTime']
  updated_at: Scalars['DateTime']
  customer?: Maybe<Customer>
  published_at?: Maybe<Scalars['DateTime']>
  products?: Maybe<Array<Maybe<Product>>>
}

export type OrderProductsArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type OrderAggregator = {
  __typename?: 'OrderAggregator'
  count?: Maybe<Scalars['Int']>
  totalCount?: Maybe<Scalars['Int']>
}

export type OrderConnection = {
  __typename?: 'OrderConnection'
  values?: Maybe<Array<Maybe<Order>>>
  groupBy?: Maybe<OrderGroupBy>
  aggregate?: Maybe<OrderAggregator>
}

export type OrderConnectionCreated_At = {
  __typename?: 'OrderConnectionCreated_at'
  key?: Maybe<Scalars['DateTime']>
  connection?: Maybe<OrderConnection>
}

export type OrderConnectionCustomer = {
  __typename?: 'OrderConnectionCustomer'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<OrderConnection>
}

export type OrderConnectionId = {
  __typename?: 'OrderConnectionId'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<OrderConnection>
}

export type OrderConnectionPublished_At = {
  __typename?: 'OrderConnectionPublished_at'
  key?: Maybe<Scalars['DateTime']>
  connection?: Maybe<OrderConnection>
}

export type OrderConnectionUpdated_At = {
  __typename?: 'OrderConnectionUpdated_at'
  key?: Maybe<Scalars['DateTime']>
  connection?: Maybe<OrderConnection>
}

export type OrderGroupBy = {
  __typename?: 'OrderGroupBy'
  id?: Maybe<Array<Maybe<OrderConnectionId>>>
  created_at?: Maybe<Array<Maybe<OrderConnectionCreated_At>>>
  updated_at?: Maybe<Array<Maybe<OrderConnectionUpdated_At>>>
  customer?: Maybe<Array<Maybe<OrderConnectionCustomer>>>
  published_at?: Maybe<Array<Maybe<OrderConnectionPublished_At>>>
}

export type OrderInput = {
  customer?: Maybe<Scalars['ID']>
  products?: Maybe<Array<Maybe<Scalars['ID']>>>
  published_at?: Maybe<Scalars['DateTime']>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type Product = {
  __typename?: 'Product'
  id: Scalars['ID']
  created_at: Scalars['DateTime']
  updated_at: Scalars['DateTime']
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  published_at?: Maybe<Scalars['DateTime']>
  images?: Maybe<Array<Maybe<UploadFile>>>
}

export type ProductImagesArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type ProductAggregator = {
  __typename?: 'ProductAggregator'
  count?: Maybe<Scalars['Int']>
  totalCount?: Maybe<Scalars['Int']>
}

export type ProductConnection = {
  __typename?: 'ProductConnection'
  values?: Maybe<Array<Maybe<Product>>>
  groupBy?: Maybe<ProductGroupBy>
  aggregate?: Maybe<ProductAggregator>
}

export type ProductConnectionCreated_At = {
  __typename?: 'ProductConnectionCreated_at'
  key?: Maybe<Scalars['DateTime']>
  connection?: Maybe<ProductConnection>
}

export type ProductConnectionDescription = {
  __typename?: 'ProductConnectionDescription'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<ProductConnection>
}

export type ProductConnectionId = {
  __typename?: 'ProductConnectionId'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<ProductConnection>
}

export type ProductConnectionPublished_At = {
  __typename?: 'ProductConnectionPublished_at'
  key?: Maybe<Scalars['DateTime']>
  connection?: Maybe<ProductConnection>
}

export type ProductConnectionTitle = {
  __typename?: 'ProductConnectionTitle'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<ProductConnection>
}

export type ProductConnectionUpdated_At = {
  __typename?: 'ProductConnectionUpdated_at'
  key?: Maybe<Scalars['DateTime']>
  connection?: Maybe<ProductConnection>
}

export type ProductGroupBy = {
  __typename?: 'ProductGroupBy'
  id?: Maybe<Array<Maybe<ProductConnectionId>>>
  created_at?: Maybe<Array<Maybe<ProductConnectionCreated_At>>>
  updated_at?: Maybe<Array<Maybe<ProductConnectionUpdated_At>>>
  title?: Maybe<Array<Maybe<ProductConnectionTitle>>>
  description?: Maybe<Array<Maybe<ProductConnectionDescription>>>
  published_at?: Maybe<Array<Maybe<ProductConnectionPublished_At>>>
}

export type ProductInput = {
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  images?: Maybe<Array<Maybe<Scalars['ID']>>>
  published_at?: Maybe<Scalars['DateTime']>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW',
}

export type Query = {
  __typename?: 'Query'
  customer?: Maybe<Customer>
  customers?: Maybe<Array<Maybe<Customer>>>
  customersConnection?: Maybe<CustomerConnection>
  note?: Maybe<Note>
  notes?: Maybe<Array<Maybe<Note>>>
  notesConnection?: Maybe<NoteConnection>
  order?: Maybe<Order>
  orders?: Maybe<Array<Maybe<Order>>>
  ordersConnection?: Maybe<OrderConnection>
  product?: Maybe<Product>
  products?: Maybe<Array<Maybe<Product>>>
  productsConnection?: Maybe<ProductConnection>
  tag?: Maybe<Tag>
  tags?: Maybe<Array<Maybe<Tag>>>
  tagsConnection?: Maybe<TagConnection>
  files?: Maybe<Array<Maybe<UploadFile>>>
  filesConnection?: Maybe<UploadFileConnection>
  role?: Maybe<UsersPermissionsRole>
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>
  rolesConnection?: Maybe<UsersPermissionsRoleConnection>
  user?: Maybe<UsersPermissionsUser>
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>
  usersConnection?: Maybe<UsersPermissionsUserConnection>
  me?: Maybe<UsersPermissionsMe>
}

export type QueryCustomerArgs = {
  id: Scalars['ID']
  publicationState?: Maybe<PublicationState>
}

export type QueryCustomersArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
  publicationState?: Maybe<PublicationState>
}

export type QueryCustomersConnectionArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type QueryNoteArgs = {
  id: Scalars['ID']
  publicationState?: Maybe<PublicationState>
}

export type QueryNotesArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
  publicationState?: Maybe<PublicationState>
}

export type QueryNotesConnectionArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type QueryOrderArgs = {
  id: Scalars['ID']
  publicationState?: Maybe<PublicationState>
}

export type QueryOrdersArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
  publicationState?: Maybe<PublicationState>
}

export type QueryOrdersConnectionArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type QueryProductArgs = {
  id: Scalars['ID']
  publicationState?: Maybe<PublicationState>
}

export type QueryProductsArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
  publicationState?: Maybe<PublicationState>
}

export type QueryProductsConnectionArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type QueryTagArgs = {
  id: Scalars['ID']
  publicationState?: Maybe<PublicationState>
}

export type QueryTagsArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
  publicationState?: Maybe<PublicationState>
}

export type QueryTagsConnectionArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type QueryFilesArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
  publicationState?: Maybe<PublicationState>
}

export type QueryFilesConnectionArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type QueryRoleArgs = {
  id: Scalars['ID']
  publicationState?: Maybe<PublicationState>
}

export type QueryRolesArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
  publicationState?: Maybe<PublicationState>
}

export type QueryRolesConnectionArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type QueryUserArgs = {
  id: Scalars['ID']
  publicationState?: Maybe<PublicationState>
}

export type QueryUsersArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
  publicationState?: Maybe<PublicationState>
}

export type QueryUsersConnectionArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type RoleInput = {
  name: Scalars['String']
  description?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>
  users?: Maybe<Array<Maybe<Scalars['ID']>>>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type Tag = {
  __typename?: 'Tag'
  id: Scalars['ID']
  created_at: Scalars['DateTime']
  updated_at: Scalars['DateTime']
  title?: Maybe<Scalars['String']>
  published_at?: Maybe<Scalars['DateTime']>
  notes?: Maybe<Array<Maybe<Note>>>
}

export type TagNotesArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type TagAggregator = {
  __typename?: 'TagAggregator'
  count?: Maybe<Scalars['Int']>
  totalCount?: Maybe<Scalars['Int']>
}

export type TagConnection = {
  __typename?: 'TagConnection'
  values?: Maybe<Array<Maybe<Tag>>>
  groupBy?: Maybe<TagGroupBy>
  aggregate?: Maybe<TagAggregator>
}

export type TagConnectionCreated_At = {
  __typename?: 'TagConnectionCreated_at'
  key?: Maybe<Scalars['DateTime']>
  connection?: Maybe<TagConnection>
}

export type TagConnectionId = {
  __typename?: 'TagConnectionId'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<TagConnection>
}

export type TagConnectionPublished_At = {
  __typename?: 'TagConnectionPublished_at'
  key?: Maybe<Scalars['DateTime']>
  connection?: Maybe<TagConnection>
}

export type TagConnectionTitle = {
  __typename?: 'TagConnectionTitle'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<TagConnection>
}

export type TagConnectionUpdated_At = {
  __typename?: 'TagConnectionUpdated_at'
  key?: Maybe<Scalars['DateTime']>
  connection?: Maybe<TagConnection>
}

export type TagGroupBy = {
  __typename?: 'TagGroupBy'
  id?: Maybe<Array<Maybe<TagConnectionId>>>
  created_at?: Maybe<Array<Maybe<TagConnectionCreated_At>>>
  updated_at?: Maybe<Array<Maybe<TagConnectionUpdated_At>>>
  title?: Maybe<Array<Maybe<TagConnectionTitle>>>
  published_at?: Maybe<Array<Maybe<TagConnectionPublished_At>>>
}

export type TagInput = {
  title?: Maybe<Scalars['String']>
  notes?: Maybe<Array<Maybe<Scalars['ID']>>>
  published_at?: Maybe<Scalars['DateTime']>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type UploadFile = {
  __typename?: 'UploadFile'
  id: Scalars['ID']
  created_at: Scalars['DateTime']
  updated_at: Scalars['DateTime']
  name: Scalars['String']
  alternativeText?: Maybe<Scalars['String']>
  caption?: Maybe<Scalars['String']>
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  formats?: Maybe<Scalars['JSON']>
  hash: Scalars['String']
  ext?: Maybe<Scalars['String']>
  mime: Scalars['String']
  size: Scalars['Float']
  url: Scalars['String']
  previewUrl?: Maybe<Scalars['String']>
  provider: Scalars['String']
  provider_metadata?: Maybe<Scalars['JSON']>
  related?: Maybe<Array<Maybe<Morph>>>
}

export type UploadFileRelatedArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type UploadFileAggregator = {
  __typename?: 'UploadFileAggregator'
  count?: Maybe<Scalars['Int']>
  totalCount?: Maybe<Scalars['Int']>
  sum?: Maybe<UploadFileAggregatorSum>
  avg?: Maybe<UploadFileAggregatorAvg>
  min?: Maybe<UploadFileAggregatorMin>
  max?: Maybe<UploadFileAggregatorMax>
}

export type UploadFileAggregatorAvg = {
  __typename?: 'UploadFileAggregatorAvg'
  width?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
  size?: Maybe<Scalars['Float']>
}

export type UploadFileAggregatorMax = {
  __typename?: 'UploadFileAggregatorMax'
  width?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
  size?: Maybe<Scalars['Float']>
}

export type UploadFileAggregatorMin = {
  __typename?: 'UploadFileAggregatorMin'
  width?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
  size?: Maybe<Scalars['Float']>
}

export type UploadFileAggregatorSum = {
  __typename?: 'UploadFileAggregatorSum'
  width?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
  size?: Maybe<Scalars['Float']>
}

export type UploadFileConnection = {
  __typename?: 'UploadFileConnection'
  values?: Maybe<Array<Maybe<UploadFile>>>
  groupBy?: Maybe<UploadFileGroupBy>
  aggregate?: Maybe<UploadFileAggregator>
}

export type UploadFileConnectionAlternativeText = {
  __typename?: 'UploadFileConnectionAlternativeText'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionCaption = {
  __typename?: 'UploadFileConnectionCaption'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionCreated_At = {
  __typename?: 'UploadFileConnectionCreated_at'
  key?: Maybe<Scalars['DateTime']>
  connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionExt = {
  __typename?: 'UploadFileConnectionExt'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionFormats = {
  __typename?: 'UploadFileConnectionFormats'
  key?: Maybe<Scalars['JSON']>
  connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionHash = {
  __typename?: 'UploadFileConnectionHash'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionHeight = {
  __typename?: 'UploadFileConnectionHeight'
  key?: Maybe<Scalars['Int']>
  connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionId = {
  __typename?: 'UploadFileConnectionId'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionMime = {
  __typename?: 'UploadFileConnectionMime'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionName = {
  __typename?: 'UploadFileConnectionName'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionPreviewUrl = {
  __typename?: 'UploadFileConnectionPreviewUrl'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionProvider = {
  __typename?: 'UploadFileConnectionProvider'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionProvider_Metadata = {
  __typename?: 'UploadFileConnectionProvider_metadata'
  key?: Maybe<Scalars['JSON']>
  connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionSize = {
  __typename?: 'UploadFileConnectionSize'
  key?: Maybe<Scalars['Float']>
  connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionUpdated_At = {
  __typename?: 'UploadFileConnectionUpdated_at'
  key?: Maybe<Scalars['DateTime']>
  connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionUrl = {
  __typename?: 'UploadFileConnectionUrl'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionWidth = {
  __typename?: 'UploadFileConnectionWidth'
  key?: Maybe<Scalars['Int']>
  connection?: Maybe<UploadFileConnection>
}

export type UploadFileGroupBy = {
  __typename?: 'UploadFileGroupBy'
  id?: Maybe<Array<Maybe<UploadFileConnectionId>>>
  created_at?: Maybe<Array<Maybe<UploadFileConnectionCreated_At>>>
  updated_at?: Maybe<Array<Maybe<UploadFileConnectionUpdated_At>>>
  name?: Maybe<Array<Maybe<UploadFileConnectionName>>>
  alternativeText?: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>
  caption?: Maybe<Array<Maybe<UploadFileConnectionCaption>>>
  width?: Maybe<Array<Maybe<UploadFileConnectionWidth>>>
  height?: Maybe<Array<Maybe<UploadFileConnectionHeight>>>
  formats?: Maybe<Array<Maybe<UploadFileConnectionFormats>>>
  hash?: Maybe<Array<Maybe<UploadFileConnectionHash>>>
  ext?: Maybe<Array<Maybe<UploadFileConnectionExt>>>
  mime?: Maybe<Array<Maybe<UploadFileConnectionMime>>>
  size?: Maybe<Array<Maybe<UploadFileConnectionSize>>>
  url?: Maybe<Array<Maybe<UploadFileConnectionUrl>>>
  previewUrl?: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>
  provider?: Maybe<Array<Maybe<UploadFileConnectionProvider>>>
  provider_metadata?: Maybe<Array<Maybe<UploadFileConnectionProvider_Metadata>>>
}

export type UserInput = {
  username: Scalars['String']
  email: Scalars['String']
  provider?: Maybe<Scalars['String']>
  password?: Maybe<Scalars['String']>
  resetPasswordToken?: Maybe<Scalars['String']>
  confirmationToken?: Maybe<Scalars['String']>
  confirmed?: Maybe<Scalars['Boolean']>
  blocked?: Maybe<Scalars['Boolean']>
  role?: Maybe<Scalars['ID']>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type UserPermissionsPasswordPayload = {
  __typename?: 'UserPermissionsPasswordPayload'
  ok: Scalars['Boolean']
}

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String']
  password: Scalars['String']
  provider?: Maybe<Scalars['String']>
}

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload'
  jwt?: Maybe<Scalars['String']>
  user: UsersPermissionsMe
}

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe'
  id: Scalars['ID']
  username: Scalars['String']
  email: Scalars['String']
  confirmed?: Maybe<Scalars['Boolean']>
  blocked?: Maybe<Scalars['Boolean']>
  role?: Maybe<UsersPermissionsMeRole>
}

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole'
  id: Scalars['ID']
  name: Scalars['String']
  description?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
}

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission'
  id: Scalars['ID']
  type: Scalars['String']
  controller: Scalars['String']
  action: Scalars['String']
  enabled: Scalars['Boolean']
  policy?: Maybe<Scalars['String']>
  role?: Maybe<UsersPermissionsRole>
}

export type UsersPermissionsRegisterInput = {
  username: Scalars['String']
  email: Scalars['String']
  password: Scalars['String']
}

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole'
  id: Scalars['ID']
  name: Scalars['String']
  description?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
  permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>
}

export type UsersPermissionsRolePermissionsArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type UsersPermissionsRoleUsersArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type UsersPermissionsRoleAggregator = {
  __typename?: 'UsersPermissionsRoleAggregator'
  count?: Maybe<Scalars['Int']>
  totalCount?: Maybe<Scalars['Int']>
}

export type UsersPermissionsRoleConnection = {
  __typename?: 'UsersPermissionsRoleConnection'
  values?: Maybe<Array<Maybe<UsersPermissionsRole>>>
  groupBy?: Maybe<UsersPermissionsRoleGroupBy>
  aggregate?: Maybe<UsersPermissionsRoleAggregator>
}

export type UsersPermissionsRoleConnectionDescription = {
  __typename?: 'UsersPermissionsRoleConnectionDescription'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<UsersPermissionsRoleConnection>
}

export type UsersPermissionsRoleConnectionId = {
  __typename?: 'UsersPermissionsRoleConnectionId'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<UsersPermissionsRoleConnection>
}

export type UsersPermissionsRoleConnectionName = {
  __typename?: 'UsersPermissionsRoleConnectionName'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<UsersPermissionsRoleConnection>
}

export type UsersPermissionsRoleConnectionType = {
  __typename?: 'UsersPermissionsRoleConnectionType'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<UsersPermissionsRoleConnection>
}

export type UsersPermissionsRoleGroupBy = {
  __typename?: 'UsersPermissionsRoleGroupBy'
  id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>
  name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>
  description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>
  type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>
}

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser'
  id: Scalars['ID']
  created_at: Scalars['DateTime']
  updated_at: Scalars['DateTime']
  username: Scalars['String']
  email: Scalars['String']
  provider?: Maybe<Scalars['String']>
  confirmed?: Maybe<Scalars['Boolean']>
  blocked?: Maybe<Scalars['Boolean']>
  role?: Maybe<UsersPermissionsRole>
}

export type UsersPermissionsUserAggregator = {
  __typename?: 'UsersPermissionsUserAggregator'
  count?: Maybe<Scalars['Int']>
  totalCount?: Maybe<Scalars['Int']>
}

export type UsersPermissionsUserConnection = {
  __typename?: 'UsersPermissionsUserConnection'
  values?: Maybe<Array<Maybe<UsersPermissionsUser>>>
  groupBy?: Maybe<UsersPermissionsUserGroupBy>
  aggregate?: Maybe<UsersPermissionsUserAggregator>
}

export type UsersPermissionsUserConnectionBlocked = {
  __typename?: 'UsersPermissionsUserConnectionBlocked'
  key?: Maybe<Scalars['Boolean']>
  connection?: Maybe<UsersPermissionsUserConnection>
}

export type UsersPermissionsUserConnectionConfirmed = {
  __typename?: 'UsersPermissionsUserConnectionConfirmed'
  key?: Maybe<Scalars['Boolean']>
  connection?: Maybe<UsersPermissionsUserConnection>
}

export type UsersPermissionsUserConnectionCreated_At = {
  __typename?: 'UsersPermissionsUserConnectionCreated_at'
  key?: Maybe<Scalars['DateTime']>
  connection?: Maybe<UsersPermissionsUserConnection>
}

export type UsersPermissionsUserConnectionEmail = {
  __typename?: 'UsersPermissionsUserConnectionEmail'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<UsersPermissionsUserConnection>
}

export type UsersPermissionsUserConnectionId = {
  __typename?: 'UsersPermissionsUserConnectionId'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<UsersPermissionsUserConnection>
}

export type UsersPermissionsUserConnectionProvider = {
  __typename?: 'UsersPermissionsUserConnectionProvider'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<UsersPermissionsUserConnection>
}

export type UsersPermissionsUserConnectionRole = {
  __typename?: 'UsersPermissionsUserConnectionRole'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<UsersPermissionsUserConnection>
}

export type UsersPermissionsUserConnectionUpdated_At = {
  __typename?: 'UsersPermissionsUserConnectionUpdated_at'
  key?: Maybe<Scalars['DateTime']>
  connection?: Maybe<UsersPermissionsUserConnection>
}

export type UsersPermissionsUserConnectionUsername = {
  __typename?: 'UsersPermissionsUserConnectionUsername'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<UsersPermissionsUserConnection>
}

export type UsersPermissionsUserGroupBy = {
  __typename?: 'UsersPermissionsUserGroupBy'
  id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>
  created_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreated_At>>>
  updated_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdated_At>>>
  username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>
  email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>
  provider?: Maybe<Array<Maybe<UsersPermissionsUserConnectionProvider>>>
  confirmed?: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmed>>>
  blocked?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBlocked>>>
  role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>
}

export type CreateCustomerInput = {
  data?: Maybe<CustomerInput>
}

export type CreateCustomerPayload = {
  __typename?: 'createCustomerPayload'
  customer?: Maybe<Customer>
}

export type CreateNoteInput = {
  data?: Maybe<NoteInput>
}

export type CreateNotePayload = {
  __typename?: 'createNotePayload'
  note?: Maybe<Note>
}

export type CreateOrderInput = {
  data?: Maybe<OrderInput>
}

export type CreateOrderPayload = {
  __typename?: 'createOrderPayload'
  order?: Maybe<Order>
}

export type CreateProductInput = {
  data?: Maybe<ProductInput>
}

export type CreateProductPayload = {
  __typename?: 'createProductPayload'
  product?: Maybe<Product>
}

export type CreateRoleInput = {
  data?: Maybe<RoleInput>
}

export type CreateRolePayload = {
  __typename?: 'createRolePayload'
  role?: Maybe<UsersPermissionsRole>
}

export type CreateTagInput = {
  data?: Maybe<TagInput>
}

export type CreateTagPayload = {
  __typename?: 'createTagPayload'
  tag?: Maybe<Tag>
}

export type CreateUserInput = {
  data?: Maybe<UserInput>
}

export type CreateUserPayload = {
  __typename?: 'createUserPayload'
  user?: Maybe<UsersPermissionsUser>
}

export type DeleteCustomerInput = {
  where?: Maybe<InputId>
}

export type DeleteCustomerPayload = {
  __typename?: 'deleteCustomerPayload'
  customer?: Maybe<Customer>
}

export type DeleteFileInput = {
  where?: Maybe<InputId>
}

export type DeleteFilePayload = {
  __typename?: 'deleteFilePayload'
  file?: Maybe<UploadFile>
}

export type DeleteNoteInput = {
  where?: Maybe<InputId>
}

export type DeleteNotePayload = {
  __typename?: 'deleteNotePayload'
  note?: Maybe<Note>
}

export type DeleteOrderInput = {
  where?: Maybe<InputId>
}

export type DeleteOrderPayload = {
  __typename?: 'deleteOrderPayload'
  order?: Maybe<Order>
}

export type DeleteProductInput = {
  where?: Maybe<InputId>
}

export type DeleteProductPayload = {
  __typename?: 'deleteProductPayload'
  product?: Maybe<Product>
}

export type DeleteRoleInput = {
  where?: Maybe<InputId>
}

export type DeleteRolePayload = {
  __typename?: 'deleteRolePayload'
  role?: Maybe<UsersPermissionsRole>
}

export type DeleteTagInput = {
  where?: Maybe<InputId>
}

export type DeleteTagPayload = {
  __typename?: 'deleteTagPayload'
  tag?: Maybe<Tag>
}

export type DeleteUserInput = {
  where?: Maybe<InputId>
}

export type DeleteUserPayload = {
  __typename?: 'deleteUserPayload'
  user?: Maybe<UsersPermissionsUser>
}

export type EditCustomerInput = {
  first_name?: Maybe<Scalars['String']>
  last_name?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  password?: Maybe<Scalars['String']>
  orders?: Maybe<Array<Maybe<Scalars['ID']>>>
  published_at?: Maybe<Scalars['DateTime']>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type EditFileInput = {
  name?: Maybe<Scalars['String']>
  alternativeText?: Maybe<Scalars['String']>
  caption?: Maybe<Scalars['String']>
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  formats?: Maybe<Scalars['JSON']>
  hash?: Maybe<Scalars['String']>
  ext?: Maybe<Scalars['String']>
  mime?: Maybe<Scalars['String']>
  size?: Maybe<Scalars['Float']>
  url?: Maybe<Scalars['String']>
  previewUrl?: Maybe<Scalars['String']>
  provider?: Maybe<Scalars['String']>
  provider_metadata?: Maybe<Scalars['JSON']>
  related?: Maybe<Array<Maybe<Scalars['ID']>>>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type EditLocaleInput = {
  name?: Maybe<Scalars['String']>
  code?: Maybe<Scalars['String']>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type EditNoteInput = {
  title?: Maybe<Scalars['String']>
  content?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
  tags?: Maybe<Array<Maybe<Scalars['ID']>>>
  published_at?: Maybe<Scalars['DateTime']>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type EditOrderInput = {
  customer?: Maybe<Scalars['ID']>
  products?: Maybe<Array<Maybe<Scalars['ID']>>>
  published_at?: Maybe<Scalars['DateTime']>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type EditProductInput = {
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  images?: Maybe<Array<Maybe<Scalars['ID']>>>
  published_at?: Maybe<Scalars['DateTime']>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type EditRoleInput = {
  name?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>
  users?: Maybe<Array<Maybe<Scalars['ID']>>>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type EditTagInput = {
  title?: Maybe<Scalars['String']>
  notes?: Maybe<Array<Maybe<Scalars['ID']>>>
  published_at?: Maybe<Scalars['DateTime']>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type EditUserInput = {
  username?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  provider?: Maybe<Scalars['String']>
  password?: Maybe<Scalars['String']>
  resetPasswordToken?: Maybe<Scalars['String']>
  confirmationToken?: Maybe<Scalars['String']>
  confirmed?: Maybe<Scalars['Boolean']>
  blocked?: Maybe<Scalars['Boolean']>
  role?: Maybe<Scalars['ID']>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type UpdateCustomerInput = {
  where?: Maybe<InputId>
  data?: Maybe<EditCustomerInput>
}

export type UpdateCustomerPayload = {
  __typename?: 'updateCustomerPayload'
  customer?: Maybe<Customer>
}

export type UpdateNoteInput = {
  where?: Maybe<InputId>
  data?: Maybe<EditNoteInput>
}

export type UpdateNotePayload = {
  __typename?: 'updateNotePayload'
  note?: Maybe<Note>
}

export type UpdateOrderInput = {
  where?: Maybe<InputId>
  data?: Maybe<EditOrderInput>
}

export type UpdateOrderPayload = {
  __typename?: 'updateOrderPayload'
  order?: Maybe<Order>
}

export type UpdateProductInput = {
  where?: Maybe<InputId>
  data?: Maybe<EditProductInput>
}

export type UpdateProductPayload = {
  __typename?: 'updateProductPayload'
  product?: Maybe<Product>
}

export type UpdateRoleInput = {
  where?: Maybe<InputId>
  data?: Maybe<EditRoleInput>
}

export type UpdateRolePayload = {
  __typename?: 'updateRolePayload'
  role?: Maybe<UsersPermissionsRole>
}

export type UpdateTagInput = {
  where?: Maybe<InputId>
  data?: Maybe<EditTagInput>
}

export type UpdateTagPayload = {
  __typename?: 'updateTagPayload'
  tag?: Maybe<Tag>
}

export type UpdateUserInput = {
  where?: Maybe<InputId>
  data?: Maybe<EditUserInput>
}

export type UpdateUserPayload = {
  __typename?: 'updateUserPayload'
  user?: Maybe<UsersPermissionsUser>
}

export type GetAllProductsQueryVariables = Exact<{
  first?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
}>

export type GetAllProductsQuery = { __typename?: 'Query' } & {
  products?: Maybe<
    Array<
      Maybe<
        { __typename?: 'Product' } & Pick<
          Product,
          'id' | 'title' | 'description'
        > & {
            images?: Maybe<
              Array<
                Maybe<
                  { __typename?: 'UploadFile' } & Pick<
                    UploadFile,
                    | 'width'
                    | 'height'
                    | 'url'
                    | 'previewUrl'
                    | 'formats'
                    | 'alternativeText'
                    | 'caption'
                  >
                >
              >
            >
          }
      >
    >
  >
}
