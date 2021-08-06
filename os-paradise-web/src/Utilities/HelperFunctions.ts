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