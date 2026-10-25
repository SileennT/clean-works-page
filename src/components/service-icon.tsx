import type { ServiceIconName } from "@/data/site";

const iconPaths: Record<ServiceIconName, React.ReactNode> = {
  "paint-roof": (
    <>
      <path d="m3 12 9-7 9 7" />
      <path d="M6 10v9h12v-9M10 19v-5h4v5" />
      <path d="M15 5h4v2h-4zM17 7v2" />
    </>
  ),
  "wash-roof": (
    <>
      <path d="m3 14 9-7 9 7M6 12v7h12v-7" />
      <path d="M8 4c0 1.5-2 3.3-2 4.8a2 2 0 0 0 4 0C10 7.3 8 5.5 8 4ZM16 3c0 1.3-1.5 2.8-1.5 4a1.5 1.5 0 0 0 3 0C17.5 5.8 16 4.3 16 3Z" />
    </>
  ),
  "wash-facade": (
    <>
      <path d="M5 20V5h14v15M9 9h2m2 0h2m-6 4h2m2 0h2m-6 4h2m2 0h2" />
      <path d="M3 20h18M21 4c0 1.2-1.5 2.6-1.5 3.8a1.5 1.5 0 0 0 3 0C22.5 6.6 21 5.2 21 4Z" />
    </>
  ),
  "paint-facade": (
    <>
      <path d="M5 20V7h12v13M8 11h2m3 0h2m-7 4h2m3 0h2M3 20h18" />
      <path d="M14 3h7v3h-7zM17.5 6v2M14 8H9v2" />
    </>
  ),
};

export function ServiceIcon({ name }: { name: ServiceIconName }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {iconPaths[name]}
    </svg>
  );
}
