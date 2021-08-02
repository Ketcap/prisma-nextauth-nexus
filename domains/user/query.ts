import { extendType } from "nexus";

export const UserQueries = extendType({
  type:'Query',
  definition(t) {
    t.crud.user();
    t.crud.users();
  }
})