import { ICompetitions } from "../Interfaces/ICompetition";
import { HandleError, HandleResponse } from "../Utilities/HelperFunctions";

const baseUrl = "https://api.wiseoldman.net";
const OSParadiseId = 332;

/**
 * Gets the competitions associated with a group's Id.
 */
export async function GetGroupCompetitions(): Promise<ICompetitions[]> {
    try {
        const response = await fetch(`${baseUrl}/groups/${OSParadiseId}/competitions`);
        return HandleResponse(response);
    } catch (error: any) {
        HandleError(error);
    }
    
    return [];
}