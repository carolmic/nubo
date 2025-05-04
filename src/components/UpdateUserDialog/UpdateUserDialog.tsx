import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogDescription,
  } from "@/components/ui/dialog";
  
  interface UpdateUserDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    title: string;
    description: string;
  }
  
  export function UpdateUserDialog({ open, onOpenChange, title, description }: UpdateUserDialogProps) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-lg rounded-2xl p-8 border border-gray-200 shadow-md">
          <DialogTitle className="text-2xl font-bold text-[#0b3a53]">{title}</DialogTitle>
          <DialogDescription className="text-md text-[#0b3a53]">
            {description}
          </DialogDescription>
        </DialogContent>
      </Dialog>
    );
  }