import React from "react"
import { useSession, signOut } from "next-auth/client";
import { Position, Menu, PeopleIcon, CircleArrowRightIcon, EditIcon, TrashIcon, Avatar, Popover } from "evergreen-ui"

export const UserMenu = () => {
  const [session] = useSession();
  return (
    <Popover
      position={Position.BOTTOM_LEFT}
      content={
        <Menu>
          <Menu.Group>
            <Menu.Item icon={PeopleIcon}>{session?.user?.email}</Menu.Item>
          </Menu.Group>
          <Menu.Divider />
          <Menu.Group>
            <Menu.Item intent="danger" onClick={() => signOut()}>
              Logout
            </Menu.Item>
          </Menu.Group>
        </Menu>
      }
    >
      <Avatar name={session?.user?.name} src={session?.user?.image} size={40} />
    </Popover>
  )
}