import { ICompetitions, IGroup, IMonthlyTop, IPlayer } from "../Interfaces";
import { CONFIG } from "../Utilities/Environment";
import { HandleError, HandleResponse } from "../Utilities/HelperFunctions";

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

/**
 * Gets the clan's monthly top player.
 */
export async function GetMonthlyTopPlayer(): Promise<IMonthlyTop> {
  try {
    const response = await fetch(
      `${baseUrl}/groups/${OSParadiseId}/monthly-top`
    );
    return HandleResponse(response);
  } catch (error: any) {
    HandleError(error);
  }

  return {} as IMonthlyTop;
}
