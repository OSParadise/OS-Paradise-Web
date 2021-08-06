import { ICompetitions } from "../Interfaces/ICompetition";
import { IGroup } from "../Interfaces/IGroup";
import { IPlayer } from "../Interfaces/IPlayer";
import { HandleError, HandleResponse } from "../Utilities/HelperFunctions";

const baseUrl = "https://api.wiseoldman.net";
const OSParadiseId = 332;

/**
 * Gets the competitions associated with the group's Id.
 */
export async function GetGroupCompetitions(): Promise<ICompetitions[]> {
  try {
    const response = await fetch(
      `${baseUrl}/groups/${OSParadiseId}/competitions`
    );
    return HandleResponse(response);
  } catch (error: any) {
    HandleError(error);
  }

  return [];
}

/**
 * Gets details associated with the group's Id.
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

/**
 * Gets a list of players associated with the group's Id.
 */
export async function GetGroupMembers(): Promise<IPlayer[]> {
  try {
    const response = await fetch(`${baseUrl}/groups/${OSParadiseId}/members`);
    return HandleResponse(response);
  } catch (error: any) {
    HandleError(error);
  }

  return [];
}
