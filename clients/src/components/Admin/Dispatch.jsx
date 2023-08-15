import React , {useState} from "react";
import { RiArrowGoForwardFill} from "react-icons/ri";




import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Select,
   Option,
  Textarea,
} from "@material-tailwind/react";
 
 const MessageDialog=()=> {
  const [open, setOpen] = useState(false);
 
  const handleOpen = () => setOpen(!open);
 
  return (
    <>
       <RiArrowGoForwardFill onClick={handleOpen}/>
      <Dialog open={open} handler={handleOpen}>
        <div className="flex items-center justify-between">
          <DialogHeader>Assign Issue to</DialogHeader>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-3 h-5 w-5"
            onClick={handleOpen}
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <DialogBody divider>
          <div className="grid gap-6">
            <input type="text " placeholder="Select staff" />
            <Textarea label="Your comment" />
          </div>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="outlined" color="red" onClick={handleOpen}>
            close
          </Button>
          <Button variant="gradient" color="blue" onClick={handleOpen}>
            Assign
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export default MessageDialog