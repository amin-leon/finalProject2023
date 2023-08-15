import { Badge, Button } from "@material-tailwind/react";
 
export function NewIssueNotifications() {
  return (
    <Badge content="5">
      <Button color="blue" className="text-white">New Issues</Button>
    </Badge>
  );
}