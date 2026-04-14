"use client";

import { useState } from "react";

interface Option {
  value: string;
  label: string;
}

export function RosterSelector({
  options,
  value,
  onChange,
}: {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const current = options.find((o) => o.value === value);

  return (
    <div
      className="relative inline-block"
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) {
          setOpen(false);
        }
      }}
    >
      <button
        onClick={() => setOpen((prev) => !prev)}
        onKeyDown={(e) => {
          if (e.key === "Escape") setOpen(false);
        }}
        aria-expanded={open}
        aria-haspopup="listbox"
        className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 font-heading text-sm uppercase tracking-wider text-white transition-colors hover:border-brand-red hover:text-brand-red active:border-brand-red active:text-brand-red"
      >
        {current?.label}
        <svg
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div
          role="listbox"
          onKeyDown={(e) => {
            if (e.key === "Escape") setOpen(false);
          }}
          className="absolute left-0 top-full z-50 mt-2 min-w-[160px] overflow-hidden rounded-lg border border-white/10 bg-brand-black shadow-xl"
        >
          {options.map((option) => (
            <button
              key={option.value}
              role="option"
              aria-selected={option.value === value}
              onClick={() => {
                onChange(option.value);
                setOpen(false);
              }}
              className={`block w-full px-4 py-3 text-left font-heading text-sm uppercase tracking-wider transition-colors hover:bg-white/10 ${
                option.value === value ? "text-brand-red" : "text-white"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
