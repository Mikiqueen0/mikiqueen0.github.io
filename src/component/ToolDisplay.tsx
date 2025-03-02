'use client';

interface ToolDisplayProps {
  name: string;
}

export default function ToolDisplay({ name }: ToolDisplayProps) {
  return (
    <div className="h-fit w-fit bg-[rgba(105,225,213,0.1)] rounded-3xl px-2 py-1 text-sm xl:text-base font-normal text-[rgb(105,225,213)]">
      {name}
    </div>
  )
};