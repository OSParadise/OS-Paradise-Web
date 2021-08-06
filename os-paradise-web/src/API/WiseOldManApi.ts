import { ICompetitions } from "../Interfaces/ICompetition";
import { IGroup } from "../Interfaces/IGroup";
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

/**
 * Gets details associated with a group's Id.
 */
 export async function GetGroupDetails(): Promise<IGroup> {
    try {
        const response = await fetch(`${baseUrl}/groups/${OSParadiseId}`);
        return HandleResponse(response);
    } catch (error: any) {
        HandleError(error);
    }
    
    return {} as IGroup;
}