import { Match, ParticipantResult, FinalType, GroupType, Id, MatchGame } from 'brackets-model';
import { Connection, Placement, Ranking } from './types';
/**
 * Creates the title of the viewer.
 *
 * @param title The title to set.
 */
export declare function createTitle(title: string): HTMLElement;
/**
 * Creates the title of a popover.
 *
 * @param title The title to set.
 */
export declare function createPopoverTitle(title: string): HTMLElement;
/**
 * Creates a container which contains a round-robin stage.
 *
 * @param stageId ID of the stage.
 */
export declare function createRoundRobinContainer(stageId: Id): HTMLElement;
/**
 * Creates a container which contains an elimination stage.
 *
 * @param stageId ID of the stage.
 */
export declare function createEliminationContainer(stageId: Id): HTMLElement;
/**
 * Creates a container which contains one bracket of a single or double elimination stage.
 *
 * @param groupId ID of the group.
 * @param title Title of the group.
 */
export declare function createBracketContainer(groupId?: Id, title?: string): HTMLElement;
/**
 * Creates a container which contains a group for round-robin stages.
 *
 * @param groupId ID of the group.
 * @param title Title of the group.
 */
export declare function createGroupContainer(groupId: Id, title: string): HTMLElement;
/**
 * Creates a container which contains a list of rounds.
 */
export declare function createRoundsContainer(): HTMLElement;
/**
 * Creates a container which contains a round.
 *
 * @param roundId ID of the round.
 * @param title Title of the round.
 */
export declare function createRoundContainer(roundId: Id, title: string): HTMLElement;
/**
 * Creates a container which contains a match.
 *
 * @param match A match or a match game.
 */
export declare function createMatchContainer(match?: Match | MatchGame): HTMLElement;
/**
 * Creates a container which contains the label of a match.
 *
 * @param label The label of the match.
 * @param status The status to set as tooltip.
 * @param onClick Called when the label is clicked.
 */
export declare function createMatchLabel(label: string | undefined, status: string, onClick?: (event: MouseEvent) => void): HTMLElement;
/**
 * Creates a container which contains the child count label of a match.
 *
 * @param label The child count label of the match.
 * @param onClick Called when the label is clicked.
 */
export declare function createChildCountLabel(label: string, onClick?: (event: MouseEvent) => void): HTMLElement;
/**
 * Creates a container which contains the opponents of a match.
 *
 * @param onClick Called when the match is clicked.
 */
export declare function createOpponentsContainer(onClick?: () => void): HTMLElement;
/**
 * Creates a container which contains a participant.
 *
 * @param participantId ID of the participant.
 */
export declare function createParticipantContainer(participantId: Id | null): HTMLElement;
/**
 * Creates a container which contains the name of a participant.
 */
export declare function createNameContainer(): HTMLElement;
/**
 * Creates a container which contains the result of a match for a participant.
 */
export declare function createResultContainer(): HTMLElement;
/**
 * Creates a table.
 */
export declare function createTable(): HTMLElement;
/**
 * Creates a table row.
 */
export declare function createRow(): HTMLElement;
/**
 * Creates a table cell.
 *
 * @param data The data in the cell.
 */
export declare function createCell(data: string | number): HTMLElement;
/**
 * Creates the headers for a ranking table.
 *
 * @param ranking The object containing the ranking.
 */
export declare function createRankingHeaders(ranking: Ranking): HTMLElement;
/**
 * Sets a hint on a name container.
 *
 * @param nameContainer The name container.
 * @param hint The hint to set.
 */
export declare function setupHint(nameContainer: HTMLElement, hint: string): void;
/**
 * Sets a BYE on a name container.
 *
 * @param nameContainer The name container.
 */
export declare function setupBye(nameContainer: HTMLElement): void;
/**
 * Sets a win for a participant.
 *
 * @param participantContainer The participant container.
 * @param resultContainer The result container.
 * @param participant The participant result.
 */
export declare function setupWin(participantContainer: HTMLElement, resultContainer: HTMLElement, participant: ParticipantResult): void;
/**
 * Sets a loss for a participant.
 *
 * @param participantContainer The participant container.
 * @param resultContainer The result container.
 * @param participant The participant result.
 */
export declare function setupLoss(participantContainer: HTMLElement, resultContainer: HTMLElement, participant: ParticipantResult): void;
/**
 * Adds the participant origin to a name.
 *
 * @param nameContainer The name container.
 * @param text The text to set (origin).
 * @param placement The placement of the participant origin.
 */
export declare function addParticipantOrigin(nameContainer: HTMLElement, text: string, placement: Placement): void;
/**
 * Adds the participant image to a name.
 *
 * @param nameContainer The name container.
 * @param src Source of the image.
 */
export declare function addParticipantImage(nameContainer: HTMLElement, src: string): void;
/**
 * Returns the connection for a given round in a bracket.
 *
 * @param alwaysConnectFirstRound Whether to always connect the first round with the second round.
 * @param roundNumber Number of the round.
 * @param roundCount Count of rounds.
 * @param match The match to connect to other matches.
 * @param matchLocation Location of the match.
 * @param connectFinal Whether to connect to the final.
 */
export declare function getBracketConnection(alwaysConnectFirstRound: boolean, roundNumber: number, roundCount: number, match: Match, matchLocation?: GroupType, connectFinal?: boolean): Connection;
/**
 * Returns the connection for a given round in the final.
 *
 * @param finalType Type of final.
 * @param roundNumber Number of the round.
 * @param matchCount The count of matches.
 */
export declare function getFinalConnection(finalType: FinalType, roundNumber: number, matchCount: number): Connection;
/**
 * Sets the connection a match containers.
 *
 * @param opponentsContainer The opponents container.
 * @param matchContainer The match container.
 * @param connection The connection to set.
 */
export declare function setupConnection(opponentsContainer: HTMLElement, matchContainer: HTMLElement, connection: Connection): void;
