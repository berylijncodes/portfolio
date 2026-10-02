// helper function for server-side validation

export const validateString = (
  value: unknown,
  maxLength: number,
): value is string => {
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return false;
  }
  return true;
};

// turns display text into a lowercase, dash-separated label.
export const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[\s+]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
};

// helper function for error handling
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
