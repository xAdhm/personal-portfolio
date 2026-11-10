import type { ReactNode } from "react";

export default function Frame({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto min-h-dvh w-full max-w-[1240px] divide-y divide-line border-x border-line">
      {children}
    </div>
  );
}
