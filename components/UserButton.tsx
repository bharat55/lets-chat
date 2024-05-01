import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import UserAvatar from "./UserAvatar"

function UserButton() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger><UserAvatar /></DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Welcome Bharat Rathor!</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Sign Out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserButton