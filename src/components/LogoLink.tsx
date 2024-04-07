import { cn } from "../lib/utils";
import { LogoIcon } from "./icons/LogoIcon";

interface LogoLinkProps {
  className?: string;
}

export const LogoLink = ({ className }: LogoLinkProps) => {
  return (
    <div
      className={cn("flex items-center justify-center space-x-2", className)}
    >
      <LogoIcon className="size-6 font-bold" />
      <span className="text-2xl tracking-wider">Catalix</span>
    </div>
  );
};
