import { StringMap, TOptions } from 'i18next';
import { Stage, Status, FinalType, GroupType, StageType } from 'brackets-model';
import { OriginHint, RoundNameInfo } from './types';
export declare const locales: {
    en: {
        "origin-hint": {
            seed: string;
            "winner-bracket": string;
            "winner-bracket-semi-final": string;
            "winner-bracket-final": string;
            "consolation-final": string;
            "grand-final": string;
            "double-elimination-consolation-final-opponent-1": string;
            "double-elimination-consolation-final-opponent-2": string;
        };
        "match-label": {
            default: string;
            "winner-bracket": string;
            "loser-bracket": string;
            "standard-bracket": string;
            "standard-bracket-semi-final": string;
            "standard-bracket-final": string;
            "double-elimination": string;
            "double-elimination-semi-final": string;
            "double-elimination-final": string;
            "consolation-final": string;
            "grand-final-single": string;
            "grand-final": string;
            "match-game": string;
        };
        "match-status": {
            locked: string;
            waiting: string;
            ready: string;
            running: string;
            completed: string;
            archived: string;
        };
        abbreviations: {
            win: string;
            loss: string;
            forfeit: string;
            position: string;
            seed: string;
            "winner-bracket": string;
            "loser-bracket": string;
            match: string;
            "grand-final": string;
        };
        ranking: {
            rank: {
                text: string;
                tooltip: string;
            };
            id: {
                text: string;
                tooltip: string;
            };
            played: {
                text: string;
                tooltip: string;
            };
            wins: {
                text: string;
                tooltip: string;
            };
            draws: {
                text: string;
                tooltip: string;
            };
            losses: {
                text: string;
                tooltip: string;
            };
            forfeits: {
                text: string;
                tooltip: string;
            };
            scoreFor: {
                text: string;
                tooltip: string;
            };
            scoreAgainst: {
                text: string;
                tooltip: string;
            };
            scoreDifference: {
                text: string;
                tooltip: string;
            };
            points: {
                text: string;
                tooltip: string;
            };
        };
        common: {
            bye: string;
            "best-of-x": string;
            consolation: string;
            "group-name": string;
            "group-name-winner-bracket": string;
            "group-name-loser-bracket": string;
            "round-name": string;
            "round-name-final": string;
            "round-name-winner-bracket": string;
            "round-name-winner-bracket-final": string;
            "round-name-loser-bracket": string;
            "round-name-loser-bracket-final": string;
        };
        "form-creator": {
            "stage-name-label": string;
            "stage-name-placeholder": string;
            "stage-selector-label": string;
            "team-label": string;
            "team-label-placeholder": string;
            "team-count": string;
            "team-count-placeholder": string;
            "group-label": string;
            "group-placeholder": string;
            "seed-order-label": string;
            "double-elimination-seed-order-placeholder": string;
            "round-robin-mode-label": string;
            "consolation-final-label": string;
            "skip-first-round-label": string;
            "grand-final-type-label": string;
            submit: string;
        };
    };
    fr: {
        "origin-hint": {
            seed: string;
            "winner-bracket": string;
            "winner-bracket-semi-final": string;
            "winner-bracket-final": string;
            "consolation-final": string;
            "grand-final": string;
            "double-elimination-consolation-final-opponent-1": string;
            "double-elimination-consolation-final-opponent-2": string;
        };
        "match-label": {
            default: string;
            "winner-bracket": string;
            "loser-bracket": string;
            "standard-bracket": string;
            "standard-bracket-semi-final": string;
            "standard-bracket-final": string;
            "double-elimination": string;
            "double-elimination-semi-final": string;
            "double-elimination-final": string;
            "consolation-final": string;
            "grand-final-single": string;
            "grand-final": string;
            "match-game": string;
        };
        "match-status": {
            locked: string;
            waiting: string;
            ready: string;
            running: string;
            completed: string;
            archived: string;
        };
        abbreviations: {
            win: string;
            loss: string;
            forfeit: string;
            position: string;
            seed: string;
            "winner-bracket": string;
            "loser-bracket": string;
            match: string;
            "grand-final": string;
        };
        ranking: {
            rank: {
                text: string;
                tooltip: string;
            };
            id: {
                text: string;
                tooltip: string;
            };
            played: {
                text: string;
                tooltip: string;
            };
            wins: {
                text: string;
                tooltip: string;
            };
            draws: {
                text: string;
                tooltip: string;
            };
            losses: {
                text: string;
                tooltip: string;
            };
            forfeits: {
                text: string;
                tooltip: string;
            };
            scoreFor: {
                text: string;
                tooltip: string;
            };
            scoreAgainst: {
                text: string;
                tooltip: string;
            };
            scoreDifference: {
                text: string;
                tooltip: string;
            };
            points: {
                text: string;
                tooltip: string;
            };
        };
        common: {
            bye: string;
            "best-of-x": string;
            consolation: string;
            "group-name": string;
            "group-name-winner-bracket": string;
            "group-name-loser-bracket": string;
            "round-name": string;
            "round-name-final": string;
            "round-name-winner-bracket": string;
            "round-name-winner-bracket-final": string;
            "round-name-loser-bracket": string;
            "round-name-loser-bracket-final": string;
        };
        "form-creator": {
            "stage-name-label": string;
            "stage-name-placeholder": string;
            "stage-selector-label": string;
            "team-label": string;
            "team-placeholder": string;
            "team-count": string;
            "team-count-placeholder": string;
            "group-label": string;
            "group-placeholder": string;
            "seed-order-label": string;
            "double-elimination-seed-order-placeholder": string;
            "round-robin-mode-label": string;
            "consolation-final-label": string;
            "skip-first-round-label": string;
            "grand-final-type-label": string;
            submit: string;
        };
    };
};
export type Locale = typeof locales['en'];
/**
 * Adds a locale to the available i18n bundles.
 *
 * @param name Name of the locale.
 * @param locale Contents of the locale.
 */
export declare function addLocale(name: string, locale: Locale): Promise<void>;
/**
 * Returns an internationalized version of a locale key.
 *
 * @param key A locale key.
 * @param options Data to pass to the i18n process.
 */
export declare function t<Scope extends keyof Locale, SubKey extends string & keyof Locale[Scope], T extends TOptions>(key: `${Scope}.${SubKey}`, options?: T): T['returnObjects'] extends true ? StringMap : string;
export type Translator = typeof t;
export type ToI18nKey<S extends string> = S extends `${infer A}_${infer B}` ? `${A}-${B}` : never;
/**
 * Converts a type to a valid i18n key.
 *
 * @param key The key to convert.
 */
export declare function toI18nKey<S extends `${string}_${string}`>(key: S): ToI18nKey<S>;
/**
 * Returns an origin hint function based on rounds information.
 *
 * @param roundNumber Number of the round.
 * @param roundCount Count of rounds.
 * @param skipFirstRound Whether to skip the first round.
 * @param matchLocation Location of the match.
 */
export declare function getOriginHint(roundNumber: number, roundCount: number, skipFirstRound: boolean, matchLocation: GroupType): OriginHint | undefined;
/**
 * Returns an origin hint function for a match in final.
 *
 * @param stageType Type of the stage.
 * @param finalType Type of the final.
 * @param roundNumber Number of the round.
 */
export declare function getFinalOriginHint(stageType: StageType, finalType: FinalType, roundNumber: number): OriginHint | undefined;
/**
 * Returns the label of a match.
 *
 * @param matchNumber Number of the match.
 * @param roundNumber Number of the round.
 * @param roundCount Count of rounds.
 * @param matchLocation Location of the match.
 */
export declare function getMatchLabel(matchNumber: number, roundNumber?: number, roundCount?: number, matchLocation?: GroupType): string;
/**
 * Returns the label of a match in final.
 *
 * @param finalType Type of the final.
 * @param roundNumber Number of the round.
 * @param roundCount Count of rounds.
 */
export declare function getFinalMatchLabel(finalType: FinalType, roundNumber: number, roundCount: number): string;
/**
 * Returns the status of a match.
 *
 * @param status The match status.
 */
export declare function getMatchStatus(status: Status): string;
/**
 * Returns the name of a group.
 *
 * @param groupNumber Number of the group.
 */
export declare function getGroupName(groupNumber: number): string;
/**
 * Returns the name of the bracket.
 *
 * @param stage The current stage.
 * @param type Type of the bracket.
 */
export declare function getBracketName(stage: Stage, type: GroupType): string | undefined;
/**
 * Returns the name of a round.
 */
export declare function getRoundName({ roundNumber, roundCount }: RoundNameInfo, t: Translator): string;
/**
 * Returns the name of a round in the winner bracket of a double elimination stage.
 */
export declare function getWinnerBracketRoundName({ roundNumber, roundCount }: RoundNameInfo, t: Translator): string;
/**
 * Returns the name of a round in the loser bracket of a double elimination stage.
 */
export declare function getLoserBracketRoundName({ roundNumber, roundCount }: RoundNameInfo, t: Translator): string;
