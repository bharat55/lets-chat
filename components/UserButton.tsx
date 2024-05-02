"use client"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import UserAvatar from "./UserAvatar"
import { Session } from "inspector"
import { Button } from "./ui/button"
import { signIn, signOut } from "next-auth/react"

function UserButton({
  session,
}: {session: Session | null }) {

  if (!session){
    return (
     <Button variant={"outline"} onClick={() => signIn()}>Sign In</Button>
    )
  }
    
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar name="Bharat Rathor" image="https://github.com/shadcn.png"/>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Welcome Bharat Rathor!</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={()=> signOut()}>Sign Out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserButton