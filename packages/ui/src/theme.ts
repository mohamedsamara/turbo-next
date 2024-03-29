/* Button Component */
export type ButtonVariants =
  | "primary"
  | "secondary"
  | "basic"
  | "danger"
  | "none";
export type ButtonSizes = "sm" | "md" | "lg";

export const ButtonVariant = {
  primary:
    "bg-blue-500 hover:bg-blue-700 text-white font-normal rounded disabled:opacity-25",
  secondary:
    "bg-slate-200 hover:bg-slate-300 text-slate-700 font-normal rounded disabled:opacity-25",
  basic:
    "bg-gray-100 hover:bg-gray-200 text-gray-700 font-normal rounded disabled:opacity-25",
  danger:
    "bg-red-500 hover:bg-red-600 text-white font-normal rounded disabled:opacity-25",
  none: "bg-transparent hover:bg-gray-100 text-black font-normal rounded disabled:opacity-25",
};

export const ButtonSize = {
  sm: "h-10 py-1 px-4 text-xs",
  md: "h-12 py-3 px-6 text-base",
  lg: "h-13 py-4 px-8 text-lg",
};

/* Button Component */

/* Heading Component */
export type HeadingTypes = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export const HeadingType = {
  h1: "text-5xl font-extrabold",
  h2: "text-4xl font-bold",
  h3: "text-3xl font-bold",
  h4: "text-2xl font-bold",
  h5: "text-xl font-bold",
  h6: "text-lg font-bold",
};
/* Heading Component */

/* Spinner Component */
export type SpinnerVariants = "primary" | "secondary" | "basic";
export type SpinnerSizes = "sm" | "md" | "lg";

export const SpinnerVariant = {
  primary: "text-gray-200 animate-spin fill-blue-600",
  secondary: "text-gray-200 animate-spin fill-slate-600",
  basic: "text-gray-200 animate-spin fill-gray-400",
};

export const SpinnerSize = {
  sm: "w-4 h-4 text-xs",
  md: "w-6 h-6 text-base",
  lg: "w-8 h-8 text-lg",
};
/* Spinner Component */
