import { nexusPrisma } from 'nexus-plugin-prisma'
import { makeSchema } from 'nexus'

import * as types from './domain'
import { isNodeEnvProduction } from '../utils/environment'

export const schema = makeSchema({
  types,
  plugins: [nexusPrisma({
    experimentalCRUD: true,
    shouldGenerateArtifacts: !isNodeEnvProduction()
  })],
  sourceTypes: {
    modules: [{ module: '.prisma/client', alias: 'PrismaClient' }],
  },
  outputs: {
    schema: `${__dirname}/generated/schema.graphql`,
    typegen: `${__dirname}/../node_modules/@types/nexus-typegen/index.d.ts`,
  },
  shouldExitAfterGenerateArtifacts: process.argv.includes('--nexus-exit'),
})