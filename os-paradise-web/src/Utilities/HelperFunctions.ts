/**
 * Handles API call errors.
 *
 * @param error Error.
 */
export function HandleError(error: any): void {
  console.log("An error occurred while fetching data: ", error);
}

/**
 * Handles API responses by reading the response stream to completion and returning a promise that resolves with JSON.
 *
 * @param response API Response stream.
 */
export async function HandleResponse(response: Response): Promise<any> {
  return response.json();
}

/**
 * Capitalizes the first letter for any given string.
 *
 * @param string Input string.
 */
export function CapitalizeFirstLetter(string: string) {
  return (string && string.charAt(0).toUpperCase() + string.slice(1)) || "";
}

/**
 * Returns the comma formatted version of a number.
 * https://stackoverflow.com/a/2901298
 *
 * @param number Input number.
 */
export function NumberWithCommas(number: number | undefined) {
  return (
    number && number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
  );
}
