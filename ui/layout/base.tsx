import React from "react";
import { Pane, Heading, Avatar } from "evergreen-ui";
import { UserMenu } from "../components/UserMenu";

interface Props {
  children: React.ReactNode;
}
export const Base = ({ children }: Props) => (
  <>
    <Pane display="flex" padding={16} background="tint2" borderRadius={3}>
      <Pane flex={1} alignItems="center" display="flex">
        <Heading size={600}>Next/Prisma/Auth/Nexus</Heading>
      </Pane>
      <Pane>
        <UserMenu />
      </Pane>
    </Pane>
    <Pane>
      {children}
    </Pane>
  </>
)