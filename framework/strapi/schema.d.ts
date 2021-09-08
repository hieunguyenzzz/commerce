export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
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

export type Collection = {
  __typename?: 'Collection'
  id: Scalars['ID']
  created_at: Scalars['DateTime']
  updated_at: Scalars['DateTime']
  title?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
  published_at?: Maybe<Scalars['DateTime']>
  products?: Maybe<Array<Maybe<Product>>>
}

export type CollectionProductsArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type CollectionAggregator = {
  __typename?: 'CollectionAggregator'
  count?: Maybe<Scalars['Int']>
  totalCount?: Maybe<Scalars['Int']>
}

export type CollectionConnection = {
  __typename?: 'CollectionConnection'
  values?: Maybe<Array<Maybe<Collection>>>
  groupBy?: Maybe<CollectionGroupBy>
  aggregate?: Maybe<CollectionAggregator>
}

export type CollectionConnectionCreated_At = {
  __typename?: 'CollectionConnectionCreated_at'
  key?: Maybe<Scalars['DateTime']>
  connection?: Maybe<CollectionConnection>
}

export type CollectionConnectionId = {
  __typename?: 'CollectionConnectionId'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<CollectionConnection>
}

export type CollectionConnectionPublished_At = {
  __typename?: 'CollectionConnectionPublished_at'
  key?: Maybe<Scalars['DateTime']>
  connection?: Maybe<CollectionConnection>
}

export type CollectionConnectionSlug = {
  __typename?: 'CollectionConnectionSlug'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<CollectionConnection>
}

export type CollectionConnectionTitle = {
  __typename?: 'CollectionConnectionTitle'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<CollectionConnection>
}

export type CollectionConnectionUpdated_At = {
  __typename?: 'CollectionConnectionUpdated_at'
  key?: Maybe<Scalars['DateTime']>
  connection?: Maybe<CollectionConnection>
}

export type CollectionGroupBy = {
  __typename?: 'CollectionGroupBy'
  id?: Maybe<Array<Maybe<CollectionConnectionId>>>
  created_at?: Maybe<Array<Maybe<CollectionConnectionCreated_At>>>
  updated_at?: Maybe<Array<Maybe<CollectionConnectionUpdated_At>>>
  title?: Maybe<Array<Maybe<CollectionConnectionTitle>>>
  slug?: Maybe<Array<Maybe<CollectionConnectionSlug>>>
  published_at?: Maybe<Array<Maybe<CollectionConnectionPublished_At>>>
}

export type CollectionInput = {
  title?: Maybe<Scalars['String']>
  products?: Maybe<Array<Maybe<Scalars['ID']>>>
  slug?: Maybe<Scalars['String']>
  published_at?: Maybe<Scalars['DateTime']>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type ComponentProductConfiguration = {
  __typename?: 'ComponentProductConfiguration'
  id: Scalars['ID']
  option?: Maybe<Array<Maybe<ComponentProductOption>>>
}

export type ComponentProductConfigurationInput = {
  option?: Maybe<Array<Maybe<ComponentProductOptionInput>>>
}

export type ComponentProductOption = {
  __typename?: 'ComponentProductOption'
  id: Scalars['ID']
  label?: Maybe<Scalars['String']>
  variant?: Maybe<Array<Maybe<ComponentProductVariant>>>
}

export type ComponentProductOptionInput = {
  label?: Maybe<Scalars['String']>
  variant?: Maybe<Array<Maybe<ComponentProductVariantInput>>>
}

export type ComponentProductQuoteVariant = {
  __typename?: 'ComponentProductQuoteVariant'
  id: Scalars['ID']
  sku?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  image?: Maybe<UploadFile>
  requiresShipping?: Maybe<Scalars['Boolean']>
  price?: Maybe<Scalars['Float']>
  listPrice?: Maybe<Scalars['Float']>
}

export type ComponentProductQuoteVariantInput = {
  sku?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  image?: Maybe<Scalars['ID']>
  requiresShipping?: Maybe<Scalars['Boolean']>
  price?: Maybe<Scalars['Float']>
  listPrice?: Maybe<Scalars['Float']>
}

export type ComponentProductVariant = {
  __typename?: 'ComponentProductVariant'
  id: Scalars['ID']
  title?: Maybe<Scalars['String']>
  price?: Maybe<Scalars['Float']>
  swatch_image?: Maybe<UploadFile>
}

export type ComponentProductVariantInput = {
  title?: Maybe<Scalars['String']>
  price?: Maybe<Scalars['Float']>
  swatch_image?: Maybe<Scalars['ID']>
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

export enum Enum_Global_Currency {
  Usd = 'USD',
  Vnd = 'VND',
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

export type Global = {
  __typename?: 'Global'
  id: Scalars['ID']
  created_at: Scalars['DateTime']
  updated_at: Scalars['DateTime']
  Currency?: Maybe<Enum_Global_Currency>
  published_at?: Maybe<Scalars['DateTime']>
}

export type GlobalInput = {
  Currency?: Maybe<Enum_Global_Currency>
  published_at?: Maybe<Scalars['DateTime']>
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
  | Collection
  | CollectionConnection
  | CollectionAggregator
  | CollectionGroupBy
  | CollectionConnectionId
  | CollectionConnectionCreated_At
  | CollectionConnectionUpdated_At
  | CollectionConnectionTitle
  | CollectionConnectionSlug
  | CollectionConnectionPublished_At
  | CreateCollectionPayload
  | UpdateCollectionPayload
  | DeleteCollectionPayload
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
  | Global
  | UpdateGlobalPayload
  | DeleteGlobalPayload
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
  | ProductAggregatorSum
  | ProductAggregatorAvg
  | ProductAggregatorMin
  | ProductAggregatorMax
  | ProductGroupBy
  | ProductConnectionId
  | ProductConnectionCreated_At
  | ProductConnectionUpdated_At
  | ProductConnectionTitle
  | ProductConnectionDescription
  | ProductConnectionPrice
  | ProductConnectionSlug
  | ProductConnectionVariants
  | ProductConnectionPublished_At
  | CreateProductPayload
  | UpdateProductPayload
  | DeleteProductPayload
  | QuoteItem
  | QuoteItemConnection
  | QuoteItemAggregator
  | QuoteItemAggregatorSum
  | QuoteItemAggregatorAvg
  | QuoteItemAggregatorMin
  | QuoteItemAggregatorMax
  | QuoteItemGroupBy
  | QuoteItemConnectionId
  | QuoteItemConnectionCreated_At
  | QuoteItemConnectionUpdated_At
  | QuoteItemConnectionProductId
  | QuoteItemConnectionQuantity
  | QuoteItemConnectionName
  | QuoteItemConnectionVariantId
  | QuoteItemConnectionPath
  | QuoteItemConnectionQuote
  | QuoteItemConnectionVariant
  | QuoteItemConnectionPublished_At
  | CreateQuoteItemPayload
  | UpdateQuoteItemPayload
  | DeleteQuoteItemPayload
  | Quote
  | QuoteConnection
  | QuoteAggregator
  | QuoteAggregatorSum
  | QuoteAggregatorAvg
  | QuoteAggregatorMin
  | QuoteAggregatorMax
  | QuoteGroupBy
  | QuoteConnectionId
  | QuoteConnectionCreated_At
  | QuoteConnectionUpdated_At
  | QuoteConnectionCustomer
  | QuoteConnectionEmail
  | QuoteConnectionCurrency
  | QuoteConnectionTaxesIncluded
  | QuoteConnectionLineItemsSubtotalPrice
  | QuoteConnectionSubtotalPrice
  | QuoteConnectionTotalPrice
  | QuoteConnectionActive
  | CreateQuotePayload
  | UpdateQuotePayload
  | DeleteQuotePayload
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
  | ComponentProductConfiguration
  | ComponentProductOption
  | ComponentProductQuoteVariant
  | ComponentProductVariant

export type Mutation = {
  __typename?: 'Mutation'
  createCollection?: Maybe<CreateCollectionPayload>
  updateCollection?: Maybe<UpdateCollectionPayload>
  deleteCollection?: Maybe<DeleteCollectionPayload>
  createCustomer?: Maybe<CreateCustomerPayload>
  updateCustomer?: Maybe<UpdateCustomerPayload>
  deleteCustomer?: Maybe<DeleteCustomerPayload>
  updateGlobal?: Maybe<UpdateGlobalPayload>
  deleteGlobal?: Maybe<DeleteGlobalPayload>
  createNote?: Maybe<CreateNotePayload>
  updateNote?: Maybe<UpdateNotePayload>
  deleteNote?: Maybe<DeleteNotePayload>
  createOrder?: Maybe<CreateOrderPayload>
  updateOrder?: Maybe<UpdateOrderPayload>
  deleteOrder?: Maybe<DeleteOrderPayload>
  createProduct?: Maybe<CreateProductPayload>
  updateProduct?: Maybe<UpdateProductPayload>
  deleteProduct?: Maybe<DeleteProductPayload>
  createQuoteItem?: Maybe<CreateQuoteItemPayload>
  updateQuoteItem?: Maybe<UpdateQuoteItemPayload>
  deleteQuoteItem?: Maybe<DeleteQuoteItemPayload>
  createQuote?: Maybe<CreateQuotePayload>
  updateQuote?: Maybe<UpdateQuotePayload>
  deleteQuote?: Maybe<DeleteQuotePayload>
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

export type MutationCreateCollectionArgs = {
  input?: Maybe<CreateCollectionInput>
}

export type MutationUpdateCollectionArgs = {
  input?: Maybe<UpdateCollectionInput>
}

export type MutationDeleteCollectionArgs = {
  input?: Maybe<DeleteCollectionInput>
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

export type MutationUpdateGlobalArgs = {
  input?: Maybe<UpdateGlobalInput>
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

export type MutationCreateQuoteItemArgs = {
  input?: Maybe<CreateQuoteItemInput>
}

export type MutationUpdateQuoteItemArgs = {
  input?: Maybe<UpdateQuoteItemInput>
}

export type MutationDeleteQuoteItemArgs = {
  input?: Maybe<DeleteQuoteItemInput>
}

export type MutationCreateQuoteArgs = {
  input?: Maybe<CreateQuoteInput>
}

export type MutationUpdateQuoteArgs = {
  input?: Maybe<UpdateQuoteInput>
}

export type MutationDeleteQuoteArgs = {
  input?: Maybe<DeleteQuoteInput>
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
  price?: Maybe<Scalars['Float']>
  slug?: Maybe<Scalars['String']>
  variants?: Maybe<ComponentProductConfiguration>
  published_at?: Maybe<Scalars['DateTime']>
  images?: Maybe<Array<Maybe<UploadFile>>>
  relate_products?: Maybe<Array<Maybe<Product>>>
  collections?: Maybe<Array<Maybe<Collection>>>
}

export type ProductImagesArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type ProductRelate_ProductsArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type ProductCollectionsArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type ProductAggregator = {
  __typename?: 'ProductAggregator'
  count?: Maybe<Scalars['Int']>
  totalCount?: Maybe<Scalars['Int']>
  sum?: Maybe<ProductAggregatorSum>
  avg?: Maybe<ProductAggregatorAvg>
  min?: Maybe<ProductAggregatorMin>
  max?: Maybe<ProductAggregatorMax>
}

export type ProductAggregatorAvg = {
  __typename?: 'ProductAggregatorAvg'
  price?: Maybe<Scalars['Float']>
}

export type ProductAggregatorMax = {
  __typename?: 'ProductAggregatorMax'
  price?: Maybe<Scalars['Float']>
}

export type ProductAggregatorMin = {
  __typename?: 'ProductAggregatorMin'
  price?: Maybe<Scalars['Float']>
}

export type ProductAggregatorSum = {
  __typename?: 'ProductAggregatorSum'
  price?: Maybe<Scalars['Float']>
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

export type ProductConnectionPrice = {
  __typename?: 'ProductConnectionPrice'
  key?: Maybe<Scalars['Float']>
  connection?: Maybe<ProductConnection>
}

export type ProductConnectionPublished_At = {
  __typename?: 'ProductConnectionPublished_at'
  key?: Maybe<Scalars['DateTime']>
  connection?: Maybe<ProductConnection>
}

export type ProductConnectionSlug = {
  __typename?: 'ProductConnectionSlug'
  key?: Maybe<Scalars['String']>
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

export type ProductConnectionVariants = {
  __typename?: 'ProductConnectionVariants'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<ProductConnection>
}

export type ProductGroupBy = {
  __typename?: 'ProductGroupBy'
  id?: Maybe<Array<Maybe<ProductConnectionId>>>
  created_at?: Maybe<Array<Maybe<ProductConnectionCreated_At>>>
  updated_at?: Maybe<Array<Maybe<ProductConnectionUpdated_At>>>
  title?: Maybe<Array<Maybe<ProductConnectionTitle>>>
  description?: Maybe<Array<Maybe<ProductConnectionDescription>>>
  price?: Maybe<Array<Maybe<ProductConnectionPrice>>>
  slug?: Maybe<Array<Maybe<ProductConnectionSlug>>>
  variants?: Maybe<Array<Maybe<ProductConnectionVariants>>>
  published_at?: Maybe<Array<Maybe<ProductConnectionPublished_At>>>
}

export type ProductInput = {
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  images?: Maybe<Array<Maybe<Scalars['ID']>>>
  relate_products?: Maybe<Array<Maybe<Scalars['ID']>>>
  price?: Maybe<Scalars['Float']>
  slug?: Maybe<Scalars['String']>
  variants?: Maybe<ComponentProductConfigurationInput>
  collections?: Maybe<Array<Maybe<Scalars['ID']>>>
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
  collection?: Maybe<Collection>
  collections?: Maybe<Array<Maybe<Collection>>>
  collectionsConnection?: Maybe<CollectionConnection>
  customer?: Maybe<Customer>
  customers?: Maybe<Array<Maybe<Customer>>>
  customersConnection?: Maybe<CustomerConnection>
  global?: Maybe<Global>
  note?: Maybe<Note>
  notes?: Maybe<Array<Maybe<Note>>>
  notesConnection?: Maybe<NoteConnection>
  order?: Maybe<Order>
  orders?: Maybe<Array<Maybe<Order>>>
  ordersConnection?: Maybe<OrderConnection>
  product?: Maybe<Product>
  products?: Maybe<Array<Maybe<Product>>>
  productsConnection?: Maybe<ProductConnection>
  quoteItem?: Maybe<QuoteItem>
  quoteItems?: Maybe<Array<Maybe<QuoteItem>>>
  quoteItemsConnection?: Maybe<QuoteItemConnection>
  quote?: Maybe<Quote>
  quotes?: Maybe<Array<Maybe<Quote>>>
  quotesConnection?: Maybe<QuoteConnection>
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

export type QueryCollectionArgs = {
  id: Scalars['ID']
  publicationState?: Maybe<PublicationState>
}

export type QueryCollectionsArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
  publicationState?: Maybe<PublicationState>
}

export type QueryCollectionsConnectionArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
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

export type QueryGlobalArgs = {
  publicationState?: Maybe<PublicationState>
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

export type QueryQuoteItemArgs = {
  id: Scalars['ID']
  publicationState?: Maybe<PublicationState>
}

export type QueryQuoteItemsArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
  publicationState?: Maybe<PublicationState>
}

export type QueryQuoteItemsConnectionArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type QueryQuoteArgs = {
  id: Scalars['ID']
  publicationState?: Maybe<PublicationState>
}

export type QueryQuotesArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
  publicationState?: Maybe<PublicationState>
}

export type QueryQuotesConnectionArgs = {
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

export type Quote = {
  __typename?: 'Quote'
  id: Scalars['ID']
  created_at: Scalars['DateTime']
  updated_at: Scalars['DateTime']
  customer?: Maybe<Customer>
  email?: Maybe<Scalars['String']>
  currency?: Maybe<Scalars['JSON']>
  taxesIncluded?: Maybe<Scalars['Boolean']>
  lineItemsSubtotalPrice?: Maybe<Scalars['Float']>
  subtotalPrice?: Maybe<Scalars['Float']>
  totalPrice?: Maybe<Scalars['Float']>
  active?: Maybe<Scalars['Boolean']>
  lineItems?: Maybe<Array<Maybe<QuoteItem>>>
}

export type QuoteLineItemsArgs = {
  sort?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
  where?: Maybe<Scalars['JSON']>
}

export type QuoteAggregator = {
  __typename?: 'QuoteAggregator'
  count?: Maybe<Scalars['Int']>
  totalCount?: Maybe<Scalars['Int']>
  sum?: Maybe<QuoteAggregatorSum>
  avg?: Maybe<QuoteAggregatorAvg>
  min?: Maybe<QuoteAggregatorMin>
  max?: Maybe<QuoteAggregatorMax>
}

export type QuoteAggregatorAvg = {
  __typename?: 'QuoteAggregatorAvg'
  lineItemsSubtotalPrice?: Maybe<Scalars['Float']>
  subtotalPrice?: Maybe<Scalars['Float']>
  totalPrice?: Maybe<Scalars['Float']>
}

export type QuoteAggregatorMax = {
  __typename?: 'QuoteAggregatorMax'
  lineItemsSubtotalPrice?: Maybe<Scalars['Float']>
  subtotalPrice?: Maybe<Scalars['Float']>
  totalPrice?: Maybe<Scalars['Float']>
}

export type QuoteAggregatorMin = {
  __typename?: 'QuoteAggregatorMin'
  lineItemsSubtotalPrice?: Maybe<Scalars['Float']>
  subtotalPrice?: Maybe<Scalars['Float']>
  totalPrice?: Maybe<Scalars['Float']>
}

export type QuoteAggregatorSum = {
  __typename?: 'QuoteAggregatorSum'
  lineItemsSubtotalPrice?: Maybe<Scalars['Float']>
  subtotalPrice?: Maybe<Scalars['Float']>
  totalPrice?: Maybe<Scalars['Float']>
}

export type QuoteConnection = {
  __typename?: 'QuoteConnection'
  values?: Maybe<Array<Maybe<Quote>>>
  groupBy?: Maybe<QuoteGroupBy>
  aggregate?: Maybe<QuoteAggregator>
}

export type QuoteConnectionActive = {
  __typename?: 'QuoteConnectionActive'
  key?: Maybe<Scalars['Boolean']>
  connection?: Maybe<QuoteConnection>
}

export type QuoteConnectionCreated_At = {
  __typename?: 'QuoteConnectionCreated_at'
  key?: Maybe<Scalars['DateTime']>
  connection?: Maybe<QuoteConnection>
}

export type QuoteConnectionCurrency = {
  __typename?: 'QuoteConnectionCurrency'
  key?: Maybe<Scalars['JSON']>
  connection?: Maybe<QuoteConnection>
}

export type QuoteConnectionCustomer = {
  __typename?: 'QuoteConnectionCustomer'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<QuoteConnection>
}

export type QuoteConnectionEmail = {
  __typename?: 'QuoteConnectionEmail'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<QuoteConnection>
}

export type QuoteConnectionId = {
  __typename?: 'QuoteConnectionId'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<QuoteConnection>
}

export type QuoteConnectionLineItemsSubtotalPrice = {
  __typename?: 'QuoteConnectionLineItemsSubtotalPrice'
  key?: Maybe<Scalars['Float']>
  connection?: Maybe<QuoteConnection>
}

export type QuoteConnectionSubtotalPrice = {
  __typename?: 'QuoteConnectionSubtotalPrice'
  key?: Maybe<Scalars['Float']>
  connection?: Maybe<QuoteConnection>
}

export type QuoteConnectionTaxesIncluded = {
  __typename?: 'QuoteConnectionTaxesIncluded'
  key?: Maybe<Scalars['Boolean']>
  connection?: Maybe<QuoteConnection>
}

export type QuoteConnectionTotalPrice = {
  __typename?: 'QuoteConnectionTotalPrice'
  key?: Maybe<Scalars['Float']>
  connection?: Maybe<QuoteConnection>
}

export type QuoteConnectionUpdated_At = {
  __typename?: 'QuoteConnectionUpdated_at'
  key?: Maybe<Scalars['DateTime']>
  connection?: Maybe<QuoteConnection>
}

export type QuoteGroupBy = {
  __typename?: 'QuoteGroupBy'
  id?: Maybe<Array<Maybe<QuoteConnectionId>>>
  created_at?: Maybe<Array<Maybe<QuoteConnectionCreated_At>>>
  updated_at?: Maybe<Array<Maybe<QuoteConnectionUpdated_At>>>
  customer?: Maybe<Array<Maybe<QuoteConnectionCustomer>>>
  email?: Maybe<Array<Maybe<QuoteConnectionEmail>>>
  currency?: Maybe<Array<Maybe<QuoteConnectionCurrency>>>
  taxesIncluded?: Maybe<Array<Maybe<QuoteConnectionTaxesIncluded>>>
  lineItemsSubtotalPrice?: Maybe<Array<Maybe<QuoteConnectionLineItemsSubtotalPrice>>>
  subtotalPrice?: Maybe<Array<Maybe<QuoteConnectionSubtotalPrice>>>
  totalPrice?: Maybe<Array<Maybe<QuoteConnectionTotalPrice>>>
  active?: Maybe<Array<Maybe<QuoteConnectionActive>>>
}

export type QuoteInput = {
  customer?: Maybe<Scalars['ID']>
  lineItems?: Maybe<Array<Maybe<Scalars['ID']>>>
  email?: Maybe<Scalars['String']>
  currency?: Maybe<Scalars['JSON']>
  taxesIncluded?: Maybe<Scalars['Boolean']>
  lineItemsSubtotalPrice?: Maybe<Scalars['Float']>
  subtotalPrice?: Maybe<Scalars['Float']>
  totalPrice?: Maybe<Scalars['Float']>
  active?: Maybe<Scalars['Boolean']>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type QuoteItem = {
  __typename?: 'QuoteItem'
  id: Scalars['ID']
  created_at: Scalars['DateTime']
  updated_at: Scalars['DateTime']
  productId?: Maybe<Product>
  quantity?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['String']>
  variantId?: Maybe<Scalars['Int']>
  path?: Maybe<Scalars['String']>
  quote?: Maybe<Quote>
  variant?: Maybe<ComponentProductQuoteVariant>
  published_at?: Maybe<Scalars['DateTime']>
}

export type QuoteItemAggregator = {
  __typename?: 'QuoteItemAggregator'
  count?: Maybe<Scalars['Int']>
  totalCount?: Maybe<Scalars['Int']>
  sum?: Maybe<QuoteItemAggregatorSum>
  avg?: Maybe<QuoteItemAggregatorAvg>
  min?: Maybe<QuoteItemAggregatorMin>
  max?: Maybe<QuoteItemAggregatorMax>
}

export type QuoteItemAggregatorAvg = {
  __typename?: 'QuoteItemAggregatorAvg'
  quantity?: Maybe<Scalars['Float']>
  variantId?: Maybe<Scalars['Float']>
}

export type QuoteItemAggregatorMax = {
  __typename?: 'QuoteItemAggregatorMax'
  quantity?: Maybe<Scalars['Float']>
  variantId?: Maybe<Scalars['Float']>
}

export type QuoteItemAggregatorMin = {
  __typename?: 'QuoteItemAggregatorMin'
  quantity?: Maybe<Scalars['Float']>
  variantId?: Maybe<Scalars['Float']>
}

export type QuoteItemAggregatorSum = {
  __typename?: 'QuoteItemAggregatorSum'
  quantity?: Maybe<Scalars['Float']>
  variantId?: Maybe<Scalars['Float']>
}

export type QuoteItemConnection = {
  __typename?: 'QuoteItemConnection'
  values?: Maybe<Array<Maybe<QuoteItem>>>
  groupBy?: Maybe<QuoteItemGroupBy>
  aggregate?: Maybe<QuoteItemAggregator>
}

export type QuoteItemConnectionCreated_At = {
  __typename?: 'QuoteItemConnectionCreated_at'
  key?: Maybe<Scalars['DateTime']>
  connection?: Maybe<QuoteItemConnection>
}

export type QuoteItemConnectionId = {
  __typename?: 'QuoteItemConnectionId'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<QuoteItemConnection>
}

export type QuoteItemConnectionName = {
  __typename?: 'QuoteItemConnectionName'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<QuoteItemConnection>
}

export type QuoteItemConnectionPath = {
  __typename?: 'QuoteItemConnectionPath'
  key?: Maybe<Scalars['String']>
  connection?: Maybe<QuoteItemConnection>
}

export type QuoteItemConnectionProductId = {
  __typename?: 'QuoteItemConnectionProductId'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<QuoteItemConnection>
}

export type QuoteItemConnectionPublished_At = {
  __typename?: 'QuoteItemConnectionPublished_at'
  key?: Maybe<Scalars['DateTime']>
  connection?: Maybe<QuoteItemConnection>
}

export type QuoteItemConnectionQuantity = {
  __typename?: 'QuoteItemConnectionQuantity'
  key?: Maybe<Scalars['Int']>
  connection?: Maybe<QuoteItemConnection>
}

export type QuoteItemConnectionQuote = {
  __typename?: 'QuoteItemConnectionQuote'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<QuoteItemConnection>
}

export type QuoteItemConnectionUpdated_At = {
  __typename?: 'QuoteItemConnectionUpdated_at'
  key?: Maybe<Scalars['DateTime']>
  connection?: Maybe<QuoteItemConnection>
}

export type QuoteItemConnectionVariant = {
  __typename?: 'QuoteItemConnectionVariant'
  key?: Maybe<Scalars['ID']>
  connection?: Maybe<QuoteItemConnection>
}

export type QuoteItemConnectionVariantId = {
  __typename?: 'QuoteItemConnectionVariantId'
  key?: Maybe<Scalars['Int']>
  connection?: Maybe<QuoteItemConnection>
}

export type QuoteItemGroupBy = {
  __typename?: 'QuoteItemGroupBy'
  id?: Maybe<Array<Maybe<QuoteItemConnectionId>>>
  created_at?: Maybe<Array<Maybe<QuoteItemConnectionCreated_At>>>
  updated_at?: Maybe<Array<Maybe<QuoteItemConnectionUpdated_At>>>
  productId?: Maybe<Array<Maybe<QuoteItemConnectionProductId>>>
  quantity?: Maybe<Array<Maybe<QuoteItemConnectionQuantity>>>
  name?: Maybe<Array<Maybe<QuoteItemConnectionName>>>
  variantId?: Maybe<Array<Maybe<QuoteItemConnectionVariantId>>>
  path?: Maybe<Array<Maybe<QuoteItemConnectionPath>>>
  quote?: Maybe<Array<Maybe<QuoteItemConnectionQuote>>>
  variant?: Maybe<Array<Maybe<QuoteItemConnectionVariant>>>
  published_at?: Maybe<Array<Maybe<QuoteItemConnectionPublished_At>>>
}

export type QuoteItemInput = {
  productId?: Maybe<Scalars['ID']>
  quantity?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['String']>
  variantId?: Maybe<Scalars['Int']>
  path?: Maybe<Scalars['String']>
  quote?: Maybe<Scalars['ID']>
  variant?: Maybe<ComponentProductQuoteVariantInput>
  published_at?: Maybe<Scalars['DateTime']>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
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

export type CreateCollectionInput = {
  data?: Maybe<CollectionInput>
}

export type CreateCollectionPayload = {
  __typename?: 'createCollectionPayload'
  collection?: Maybe<Collection>
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

export type CreateQuoteInput = {
  data?: Maybe<QuoteInput>
}

export type CreateQuoteItemInput = {
  data?: Maybe<QuoteItemInput>
}

export type CreateQuoteItemPayload = {
  __typename?: 'createQuoteItemPayload'
  quoteItem?: Maybe<QuoteItem>
}

export type CreateQuotePayload = {
  __typename?: 'createQuotePayload'
  quote?: Maybe<Quote>
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

export type DeleteCollectionInput = {
  where?: Maybe<InputId>
}

export type DeleteCollectionPayload = {
  __typename?: 'deleteCollectionPayload'
  collection?: Maybe<Collection>
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

export type DeleteGlobalPayload = {
  __typename?: 'deleteGlobalPayload'
  global?: Maybe<Global>
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

export type DeleteQuoteInput = {
  where?: Maybe<InputId>
}

export type DeleteQuoteItemInput = {
  where?: Maybe<InputId>
}

export type DeleteQuoteItemPayload = {
  __typename?: 'deleteQuoteItemPayload'
  quoteItem?: Maybe<QuoteItem>
}

export type DeleteQuotePayload = {
  __typename?: 'deleteQuotePayload'
  quote?: Maybe<Quote>
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

export type EditCollectionInput = {
  title?: Maybe<Scalars['String']>
  products?: Maybe<Array<Maybe<Scalars['ID']>>>
  slug?: Maybe<Scalars['String']>
  published_at?: Maybe<Scalars['DateTime']>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type EditComponentProductConfigurationInput = {
  id?: Maybe<Scalars['ID']>
  option?: Maybe<Array<Maybe<EditComponentProductOptionInput>>>
}

export type EditComponentProductOptionInput = {
  id?: Maybe<Scalars['ID']>
  label?: Maybe<Scalars['String']>
  variant?: Maybe<Array<Maybe<EditComponentProductVariantInput>>>
}

export type EditComponentProductQuoteVariantInput = {
  id?: Maybe<Scalars['ID']>
  sku?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  image?: Maybe<Scalars['ID']>
  requiresShipping?: Maybe<Scalars['Boolean']>
  price?: Maybe<Scalars['Float']>
  listPrice?: Maybe<Scalars['Float']>
}

export type EditComponentProductVariantInput = {
  id?: Maybe<Scalars['ID']>
  title?: Maybe<Scalars['String']>
  price?: Maybe<Scalars['Float']>
  swatch_image?: Maybe<Scalars['ID']>
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

export type EditGlobalInput = {
  Currency?: Maybe<Enum_Global_Currency>
  published_at?: Maybe<Scalars['DateTime']>
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
  relate_products?: Maybe<Array<Maybe<Scalars['ID']>>>
  price?: Maybe<Scalars['Float']>
  slug?: Maybe<Scalars['String']>
  variants?: Maybe<EditComponentProductConfigurationInput>
  collections?: Maybe<Array<Maybe<Scalars['ID']>>>
  published_at?: Maybe<Scalars['DateTime']>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type EditQuoteInput = {
  customer?: Maybe<Scalars['ID']>
  lineItems?: Maybe<Array<Maybe<Scalars['ID']>>>
  email?: Maybe<Scalars['String']>
  currency?: Maybe<Scalars['JSON']>
  taxesIncluded?: Maybe<Scalars['Boolean']>
  lineItemsSubtotalPrice?: Maybe<Scalars['Float']>
  subtotalPrice?: Maybe<Scalars['Float']>
  totalPrice?: Maybe<Scalars['Float']>
  active?: Maybe<Scalars['Boolean']>
  created_by?: Maybe<Scalars['ID']>
  updated_by?: Maybe<Scalars['ID']>
}

export type EditQuoteItemInput = {
  productId?: Maybe<Scalars['ID']>
  quantity?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['String']>
  variantId?: Maybe<Scalars['Int']>
  path?: Maybe<Scalars['String']>
  quote?: Maybe<Scalars['ID']>
  variant?: Maybe<EditComponentProductQuoteVariantInput>
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

export type UpdateCollectionInput = {
  where?: Maybe<InputId>
  data?: Maybe<EditCollectionInput>
}

export type UpdateCollectionPayload = {
  __typename?: 'updateCollectionPayload'
  collection?: Maybe<Collection>
}

export type UpdateCustomerInput = {
  where?: Maybe<InputId>
  data?: Maybe<EditCustomerInput>
}

export type UpdateCustomerPayload = {
  __typename?: 'updateCustomerPayload'
  customer?: Maybe<Customer>
}

export type UpdateGlobalInput = {
  data?: Maybe<EditGlobalInput>
}

export type UpdateGlobalPayload = {
  __typename?: 'updateGlobalPayload'
  global?: Maybe<Global>
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

export type UpdateQuoteInput = {
  where?: Maybe<InputId>
  data?: Maybe<EditQuoteInput>
}

export type UpdateQuoteItemInput = {
  where?: Maybe<InputId>
  data?: Maybe<EditQuoteItemInput>
}

export type UpdateQuoteItemPayload = {
  __typename?: 'updateQuoteItemPayload'
  quoteItem?: Maybe<QuoteItem>
}

export type UpdateQuotePayload = {
  __typename?: 'updateQuotePayload'
  quote?: Maybe<Quote>
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

export type CreateQuoteItemMutationVariables = Exact<{
  productId: Scalars['ID']
  id?: Maybe<Scalars['ID']>
}>

export type CreateQuoteItemMutation = { __typename?: 'Mutation' } & {
  createQuoteItem?: Maybe<
    { __typename?: 'createQuoteItemPayload' } & {
      quoteItem?: Maybe<
        { __typename?: 'QuoteItem' } & Pick<QuoteItem, 'id'> & {
            quote?: Maybe<
              { __typename?: 'Quote' } & Pick<
                Quote,
                'id' | 'email' | 'active' | 'taxesIncluded' | 'lineItemsSubtotalPrice' | 'subtotalPrice' | 'totalPrice'
              > & {
                  customer?: Maybe<{ __typename?: 'Customer' } & Pick<Customer, 'last_name' | 'first_name' | 'id'>>
                  lineItems?: Maybe<
                    Array<
                      Maybe<
                        { __typename?: 'QuoteItem' } & Pick<
                          QuoteItem,
                          'id' | 'quantity' | 'name' | 'variantId' | 'path'
                        > & {
                            productId?: Maybe<
                              { __typename?: 'Product' } & Pick<
                                Product,
                                'id' | 'title' | 'description' | 'slug' | 'price'
                              > & {
                                  images?: Maybe<
                                    Array<
                                      Maybe<
                                        { __typename?: 'UploadFile' } & Pick<UploadFile, 'url' | 'width' | 'height'>
                                      >
                                    >
                                  >
                                }
                            >
                            variant?: Maybe<
                              { __typename?: 'ComponentProductQuoteVariant' } & Pick<
                                ComponentProductQuoteVariant,
                                'id' | 'sku' | 'name'
                              > & {
                                  image?: Maybe<
                                    { __typename?: 'UploadFile' } & Pick<UploadFile, 'url' | 'width' | 'height'>
                                  >
                                }
                            >
                          }
                      >
                    >
                  >
                }
            >
          }
      >
    }
  >
}

export type CreateQuoteMutationVariables = Exact<{ [key: string]: never }>

export type CreateQuoteMutation = { __typename?: 'Mutation' } & {
  createQuote?: Maybe<
    { __typename?: 'createQuotePayload' } & {
      quote?: Maybe<
        { __typename?: 'Quote' } & Pick<
          Quote,
          'id' | 'email' | 'active' | 'taxesIncluded' | 'lineItemsSubtotalPrice' | 'subtotalPrice' | 'totalPrice'
        > & {
            customer?: Maybe<{ __typename?: 'Customer' } & Pick<Customer, 'last_name' | 'first_name' | 'id'>>
            lineItems?: Maybe<
              Array<
                Maybe<
                  { __typename?: 'QuoteItem' } & Pick<QuoteItem, 'id' | 'quantity' | 'name' | 'variantId' | 'path'> & {
                      productId?: Maybe<
                        { __typename?: 'Product' } & Pick<
                          Product,
                          'id' | 'title' | 'description' | 'price' | 'slug'
                        > & {
                            images?: Maybe<
                              Array<Maybe<{ __typename?: 'UploadFile' } & Pick<UploadFile, 'url' | 'width' | 'height'>>>
                            >
                          }
                      >
                      variant?: Maybe<
                        { __typename?: 'ComponentProductQuoteVariant' } & Pick<
                          ComponentProductQuoteVariant,
                          'id' | 'sku' | 'name'
                        > & {
                            image?: Maybe<{ __typename?: 'UploadFile' } & Pick<UploadFile, 'url' | 'width' | 'height'>>
                          }
                      >
                    }
                >
              >
            >
          }
      >
    }
  >
}

export type GetQuoteQueryVariables = Exact<{
  id: Scalars['ID']
}>

export type GetQuoteQuery = { __typename?: 'Query' } & {
  quote?: Maybe<
    { __typename?: 'Quote' } & Pick<
      Quote,
      'id' | 'email' | 'active' | 'taxesIncluded' | 'lineItemsSubtotalPrice' | 'subtotalPrice' | 'totalPrice'
    > & {
        customer?: Maybe<{ __typename?: 'Customer' } & Pick<Customer, 'last_name' | 'first_name' | 'id'>>
        lineItems?: Maybe<
          Array<
            Maybe<
              { __typename?: 'QuoteItem' } & Pick<QuoteItem, 'id' | 'quantity' | 'name' | 'variantId' | 'path'> & {
                  productId?: Maybe<
                    { __typename?: 'Product' } & Pick<Product, 'id' | 'title' | 'slug' | 'description' | 'price'> & {
                        images?: Maybe<
                          Array<Maybe<{ __typename?: 'UploadFile' } & Pick<UploadFile, 'url' | 'width' | 'height'>>>
                        >
                      }
                  >
                  variant?: Maybe<
                    { __typename?: 'ComponentProductQuoteVariant' } & Pick<
                      ComponentProductQuoteVariant,
                      'id' | 'sku' | 'name'
                    > & { image?: Maybe<{ __typename?: 'UploadFile' } & Pick<UploadFile, 'url' | 'width' | 'height'>> }
                  >
                }
            >
          >
        >
      }
  >
}

export type DeleteQuoteItemMutationVariables = Exact<{
  id: Scalars['ID']
}>

export type DeleteQuoteItemMutation = { __typename?: 'Mutation' } & {
  deleteQuoteItem?: Maybe<
    { __typename?: 'deleteQuoteItemPayload' } & {
      quoteItem?: Maybe<
        { __typename?: 'QuoteItem' } & Pick<QuoteItem, 'id'> & {
            quote?: Maybe<
              { __typename?: 'Quote' } & Pick<
                Quote,
                'id' | 'email' | 'active' | 'taxesIncluded' | 'lineItemsSubtotalPrice' | 'subtotalPrice' | 'totalPrice'
              > & {
                  customer?: Maybe<{ __typename?: 'Customer' } & Pick<Customer, 'last_name' | 'first_name' | 'id'>>
                  lineItems?: Maybe<
                    Array<
                      Maybe<
                        { __typename?: 'QuoteItem' } & Pick<
                          QuoteItem,
                          'id' | 'quantity' | 'name' | 'variantId' | 'path'
                        > & {
                            productId?: Maybe<
                              { __typename?: 'Product' } & Pick<
                                Product,
                                'id' | 'title' | 'description' | 'slug' | 'price'
                              > & {
                                  images?: Maybe<
                                    Array<
                                      Maybe<
                                        { __typename?: 'UploadFile' } & Pick<UploadFile, 'url' | 'width' | 'height'>
                                      >
                                    >
                                  >
                                }
                            >
                            variant?: Maybe<
                              { __typename?: 'ComponentProductQuoteVariant' } & Pick<
                                ComponentProductQuoteVariant,
                                'id' | 'sku' | 'name'
                              > & {
                                  image?: Maybe<
                                    { __typename?: 'UploadFile' } & Pick<UploadFile, 'url' | 'width' | 'height'>
                                  >
                                }
                            >
                          }
                      >
                    >
                  >
                }
            >
          }
      >
    }
  >
}

export type UpdateQuoteItemMutationVariables = Exact<{
  id: Scalars['ID']
  quantity?: Maybe<Scalars['Int']>
}>

export type UpdateQuoteItemMutation = { __typename?: 'Mutation' } & {
  updateQuoteItem?: Maybe<
    { __typename?: 'updateQuoteItemPayload' } & {
      quoteItem?: Maybe<
        { __typename?: 'QuoteItem' } & Pick<QuoteItem, 'id'> & {
            quote?: Maybe<
              { __typename?: 'Quote' } & Pick<
                Quote,
                'id' | 'email' | 'active' | 'taxesIncluded' | 'lineItemsSubtotalPrice' | 'subtotalPrice' | 'totalPrice'
              > & {
                  customer?: Maybe<{ __typename?: 'Customer' } & Pick<Customer, 'last_name' | 'first_name' | 'id'>>
                  lineItems?: Maybe<
                    Array<
                      Maybe<
                        { __typename?: 'QuoteItem' } & Pick<
                          QuoteItem,
                          'id' | 'quantity' | 'name' | 'variantId' | 'path'
                        > & {
                            productId?: Maybe<
                              { __typename?: 'Product' } & Pick<
                                Product,
                                'id' | 'title' | 'description' | 'slug' | 'price'
                              > & {
                                  images?: Maybe<
                                    Array<
                                      Maybe<
                                        { __typename?: 'UploadFile' } & Pick<UploadFile, 'url' | 'width' | 'height'>
                                      >
                                    >
                                  >
                                }
                            >
                            variant?: Maybe<
                              { __typename?: 'ComponentProductQuoteVariant' } & Pick<
                                ComponentProductQuoteVariant,
                                'id' | 'sku' | 'name'
                              > & {
                                  image?: Maybe<
                                    { __typename?: 'UploadFile' } & Pick<UploadFile, 'url' | 'width' | 'height'>
                                  >
                                }
                            >
                          }
                      >
                    >
                  >
                }
            >
          }
      >
    }
  >
}

export type GetAllProductPathsQueryVariables = Exact<{
  first?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
}>

export type GetAllProductPathsQuery = { __typename?: 'Query' } & {
  global?: Maybe<{ __typename?: 'Global' } & Pick<Global, 'Currency'>>
  products?: Maybe<
    Array<
      Maybe<
        { __typename?: 'Product' } & Pick<Product, 'id' | 'title' | 'description' | 'price' | 'slug'> & {
            images?: Maybe<
              Array<
                Maybe<
                  { __typename?: 'UploadFile' } & Pick<
                    UploadFile,
                    'width' | 'height' | 'url' | 'previewUrl' | 'formats' | 'alternativeText' | 'caption'
                  >
                >
              >
            >
          }
      >
    >
  >
}

export type GetAllProductsQueryVariables = Exact<{
  first?: Maybe<Scalars['Int']>
  start?: Maybe<Scalars['Int']>
}>

export type GetAllProductsQuery = { __typename?: 'Query' } & {
  global?: Maybe<{ __typename?: 'Global' } & Pick<Global, 'Currency'>>
  products?: Maybe<
    Array<
      Maybe<
        { __typename?: 'Product' } & Pick<Product, 'id' | 'title' | 'description' | 'price' | 'slug'> & {
            images?: Maybe<
              Array<
                Maybe<
                  { __typename?: 'UploadFile' } & Pick<
                    UploadFile,
                    'width' | 'height' | 'url' | 'previewUrl' | 'formats' | 'alternativeText' | 'caption'
                  >
                >
              >
            >
          }
      >
    >
  >
}

export type GetProductQueryVariables = Exact<{
  slug?: Maybe<Scalars['String']>
}>

export type GetProductQuery = { __typename?: 'Query' } & {
  global?: Maybe<{ __typename?: 'Global' } & Pick<Global, 'Currency'>>
  products?: Maybe<
    Array<
      Maybe<
        { __typename?: 'Product' } & Pick<Product, 'id' | 'title' | 'description' | 'price' | 'slug'> & {
            images?: Maybe<
              Array<
                Maybe<
                  { __typename?: 'UploadFile' } & Pick<
                    UploadFile,
                    'width' | 'height' | 'url' | 'previewUrl' | 'formats' | 'alternativeText' | 'caption'
                  >
                >
              >
            >
            variants?: Maybe<
              { __typename?: 'ComponentProductConfiguration' } & Pick<ComponentProductConfiguration, 'id'> & {
                  option?: Maybe<
                    Array<
                      Maybe<
                        { __typename?: 'ComponentProductOption' } & Pick<ComponentProductOption, 'id' | 'label'> & {
                            variant?: Maybe<
                              Array<
                                Maybe<
                                  { __typename?: 'ComponentProductVariant' } & Pick<
                                    ComponentProductVariant,
                                    'id' | 'title' | 'price'
                                  > & {
                                      swatch_image?: Maybe<
                                        { __typename?: 'UploadFile' } & Pick<UploadFile, 'width' | 'height' | 'url'>
                                      >
                                    }
                                >
                              >
                            >
                          }
                      >
                    >
                  >
                }
            >
          }
      >
    >
  >
}

export type GetSiteInfoQueryVariables = Exact<{ [key: string]: never }>

export type GetSiteInfoQuery = { __typename?: 'Query' } & {
  global?: Maybe<{ __typename?: 'Global' } & Pick<Global, 'Currency'>>
  collections?: Maybe<Array<Maybe<{ __typename?: 'Collection' } & Pick<Collection, 'id' | 'title' | 'slug'>>>>
}

export type GetAllSearchQueryVariables = Exact<{ [key: string]: never }>

export type GetAllSearchQuery = { __typename?: 'Query' } & {
  global?: Maybe<{ __typename?: 'Global' } & Pick<Global, 'Currency'>>
  products?: Maybe<
    Array<
      Maybe<
        { __typename?: 'Product' } & Pick<Product, 'id' | 'title' | 'description' | 'price' | 'slug'> & {
            images?: Maybe<
              Array<
                Maybe<
                  { __typename?: 'UploadFile' } & Pick<
                    UploadFile,
                    'width' | 'height' | 'url' | 'previewUrl' | 'formats' | 'alternativeText' | 'caption'
                  >
                >
              >
            >
          }
      >
    >
  >
  collections?: Maybe<
    Array<
      Maybe<
        { __typename?: 'Collection' } & Pick<Collection, 'id' | 'title' | 'slug'> & {
            products?: Maybe<
              Array<
                Maybe<
                  { __typename?: 'Product' } & Pick<Product, 'id' | 'title' | 'description' | 'price' | 'slug'> & {
                      images?: Maybe<
                        Array<
                          Maybe<
                            { __typename?: 'UploadFile' } & Pick<
                              UploadFile,
                              'width' | 'height' | 'url' | 'previewUrl' | 'formats' | 'alternativeText' | 'caption'
                            >
                          >
                        >
                      >
                    }
                >
              >
            >
          }
      >
    >
  >
}
