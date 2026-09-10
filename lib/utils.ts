export const validateString = (
  value: unknown,
  maxLength: number
): value is string => {
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return false;
  }

  return true;
};

// Length alone said nothing about whether Resend could use this as a reply-to.
export const validateEmail = (value: unknown): value is string =>
  validateString(value, 320) && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);

export const getErrorMessage = (error: unknown): string => {
  let message: string;

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Something went wrong";
  }

  return message;
};

// Consistent brand colors per tech for project card badges.
// Keys are normalized (lowercased, non-alphanumeric except "." and "#" stripped),
// matching order matters: first match wins.
const techBadgeStyles: [RegExp, string][] = [
  [/react/, "bg-blue-500/10 text-blue-300 border-blue-500/40"],
  [/\.net/, "bg-purple-500/10 text-purple-300 border-purple-500/40"],
  [/c#/, "bg-purple-500/10 text-purple-300 border-purple-500/40"],
  [/python/, "bg-yellow-500/10 text-yellow-200 border-yellow-500/40"],
  [/^ai$|llm|openai|anthropic|nlp/, "bg-green-500/10 text-green-300 border-green-500/40"],
  [/node/, "bg-emerald-700/20 text-emerald-300 border-emerald-500/40"],
  [/typescript|tsx/, "bg-sky-500/10 text-sky-300 border-sky-500/40"],
  [/next/, "bg-gray-500/10 text-gray-200 border-gray-400/40"],
  [/mongodb|mongoose/, "bg-green-600/15 text-green-300 border-green-500/40"],
  [/sql|mssql|cosmos|postgres/, "bg-cyan-500/10 text-cyan-300 border-cyan-500/40"],
  [/docker/, "bg-sky-500/10 text-sky-300 border-sky-500/40"],
  [/azure/, "bg-indigo-500/10 text-indigo-300 border-indigo-500/40"],
  [/git/, "bg-slate-500/10 text-slate-200 border-slate-400/40"],
];

export function techBadgeClass(tech: string): string {
  const normalized = tech.toLowerCase().replace(/[^a-z0-9.#]/g, "");

  for (const [pattern, className] of techBadgeStyles) {
    if (pattern.test(normalized)) {
      return className;
    }
  }

  return "bg-slate-500/10 text-slate-300 border-slate-500/40";
};
