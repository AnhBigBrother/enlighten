import { CircleCheck, TriangleAlert } from "lucide-react";

export const FormSuccess = ({ message }: { message: string }) => {
  if (!message) return null;
  return (
    <div className="flex items-center gap-x-2 rounded-md bg-emerald-500/15 p-3 text-emerald-500">
      <CircleCheck className="h-5 w-5" />
      <p>{message}</p>
    </div>
  );
};

export function FormError({ message }: { message: string | undefined }) {
  if (!message) return null;
  return (
    <div className="flex items-center gap-x-2 rounded-md bg-destructive/15 p-3 text-destructive">
      <TriangleAlert className="h-5 w-5" />
      <p>{message}</p>
    </div>
  );
}
