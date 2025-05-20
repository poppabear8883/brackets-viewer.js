import { Match, GroupType, MatchGame } from 'brackets-model';
import { RankingHeader, Ranking, RankingFormula, RankingItem, Side, MatchWithMetadata } from './types';
/**
 * Splits an array of objects based on their values at a given key.
 *
 * @param objects The array to split.
 * @param key The key of T.
 */
export declare function splitBy<T extends Record<string, unknown>, K extends keyof T, U extends Record<K, string | number>>(objects: U[], key: K): U[][];
/**
 * Splits an array of objects based on their values at a given key.
 * Objects without a value at the given key will be set under a `-1` index.
 *
 * @param objects The array to split.
 * @param key The key of T.
 */
export declare function splitByWithLeftovers<T extends Record<string, unknown>, K extends keyof T, U extends Record<K, string | number>>(objects: U[], key: K): U[][];
/**
 * Sorts the objects in the given array by a given key.
 *
 * @param array The array to sort.
 * @param key The key of T.
 */
export declare function sortBy<T extends Record<string, unknown>, K extends keyof T, U extends Record<K, number>>(array: U[], key: K): U[];
/**
 * Finds the root element
 *
 * @param selector An optional selector to select the root element.
 */
export declare function findRoot(selector?: string): HTMLElement;
/**
 * Completes a list of matches with blank matches based on the next matches.
 *
 * Toornament can generate first rounds with an odd number of matches and the seeding is partially distributed in the second round.
 * This function adds a blank match in the first round as if it was the source match of a seeded match of the second round.
 *
 * @param bracketType Type of the bracket.
 * @param matches The list of first round matches.
 * @param nextMatches The list of second round matches.
 */
export declare function completeWithBlankMatches(bracketType: GroupType, matches: MatchWithMetadata[], nextMatches?: MatchWithMetadata[]): {
    matches: (MatchWithMetadata | null)[];
    fromToornament: boolean;
};
/**
 * Returns the abbreviation for a participant origin.
 *
 * @param matchLocation Location of the match.
 * @param skipFirstRound Whether to skip the first round.
 * @param roundNumber Number of the round.
 * @param side Side of the participant.
 */
export declare function getOriginAbbreviation(matchLocation: GroupType, skipFirstRound: boolean, roundNumber?: number, side?: Side): string | null;
/**
 * Indicates whether a round is major.
 *
 * @param roundNumber Number of the round.
 */
export declare function isMajorRound(roundNumber: number): boolean;
/**
 * Returns the header for a ranking property.
 *
 * @param itemName Name of the ranking property.
 */
export declare function rankingHeader(itemName: keyof RankingItem): RankingHeader;
/**
 * Calculates the ranking based on a list of matches and a formula.
 *
 * @param matches The list of matches.
 * @param formula The points formula to apply.
 */
export declare function getRanking(matches: Match[], formula?: RankingFormula): Ranking;
/**
 * Indicates whether the input is a match.
 *
 * @param input A match or a match game.
 */
export declare function isMatch(input: Match | MatchGame): input is Match;
/**
 * Indicates whether the input is a match game.
 *
 * @param input A match or a match game.
 */
export declare function isMatchGame(input: Match | MatchGame): input is MatchGame;
