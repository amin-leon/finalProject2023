import { Badge, Button } from "@material-tailwind/react";
import { IoNotificationsOutline } from "react-icons/io5";

export function NoticationBage() {
  return (
    <Badge content="5" withBorder>
      <Button className="bg-blue-500"><IoNotificationsOutline /></Button>
    </Badge>
  );
}
