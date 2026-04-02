import { USER_CONFIG } from "@/lib/constants.ts";

export function AvailabilityBadge({
  isAvailable = USER_CONFIG.status.isAvailable,
}: {
  isAvailable?: boolean;
}) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-border bg-muted/30 px-3 py-1 text-sm text-muted-foreground shadow-sm">
      <span className="relative flex size-2">
        <span
          className={`absolute inline-flex size-full animate-ping rounded-full opacity-75 ${
            isAvailable ? "bg-emerald-400" : "bg-red-400"
          }`}
        ></span>
        <span
          className={`relative inline-flex size-2 rounded-full ${
            isAvailable ? "bg-emerald-500" : "bg-red-500"
          }`}
        ></span>
      </span>
      {isAvailable
        ? USER_CONFIG.status.message
        : USER_CONFIG.status.unavailableMessage}
    </div>
  );
}
