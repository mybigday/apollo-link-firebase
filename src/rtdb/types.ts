import { database } from 'firebase'

export interface ResolverContext {
  database: database.Database
  exportVal: any
  findType: (directives: { [key: string]: DirectiveArgs }) => string
}

export interface MutationResolverContext extends ResolverContext {
  mutationRef?: string
}

export interface ResolverRoot {
  __typename?: string
  __snapshot?: database.DataSnapshot
  rootSnapshot?: database.DataSnapshot
}

export interface MutationResolverRoot {
  __typename?: string
  __pushKey?: string
  payload?: any
}

export interface DirectiveArgs {
  [argName: string]: any
}

export interface SubDirectiveArgs extends DirectiveArgs {
  event: database.EventType
}
