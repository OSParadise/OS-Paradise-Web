/**
 * Configuration to the application. Gets loaded in through window on page load.
 */
if (!window.CONFIG) {
  console.warn("Could not find the configuration variables.");
}

export const CONFIG = window.CONFIG ?? {};

/**
 * Get the application version.
 */
export const getVersion = (): string => {
  return process.env.VERSION ?? "";
};
