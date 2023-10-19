import "./gradients.css";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

const PurpleGradient = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "absolute left-1/2 transform -translate-x-1/2 -translate-y-[60%] h-full w-full max-w-[100rem] opacity-100 rounded-[80%] gradients -z-10",
        className
      )}
    />
  );
};

export const SmallGradient = ({ className }: Props) => (
  <div
    className={cn(
      "transform h-full w-full opacity-100 rounded-[80%] gradients -z-10",
      className
    )}
  />
);

export default PurpleGradient;
