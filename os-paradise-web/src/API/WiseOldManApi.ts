import { ICompetitions, IGroup, IPlayer } from "../Interfaces";
import { HandleError, HandleResponse } from "../Utilities/HelperFunctions";
import { CONFIG } from "../Utilities/Environment";

const baseUrl = CONFIG.baseUrl;
const OSParadiseId = CONFIG.groupId;

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
