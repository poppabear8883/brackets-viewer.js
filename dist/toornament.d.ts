import { Participant as BaseParticipant, ParticipantResult, RoundRobinMode, StageSettings, StageType, Status, GrandFinalType, Match as BaseMatch, MatchGame, Result, Stage } from 'brackets-model';
export interface Participant extends BaseParticipant {
    custom_user_identifier?: string;
}
export interface Match extends BaseMatch {
    metadata?: {
        original_match_id?: string;
        [key: string]: any;
    };
}
export interface ConvertResult {
    database: Database;
    mappings: Record<string, Mapping>;
}
export interface Database {
    stage: Stage[];
    match: Match[];
    match_game: MatchGame[];
    participant: Participant[];
}
export type Mapping = {
    [id: string]: number;
};
export type ToornamentPairingMethod = 'manual' | 'standard' | 'double_standard';
export type ToornamentStageType = 'single_elimination' | 'double_elimination' | 'pools';
export type ToornamentStatus = 'pending' | 'running' | 'completed';
export interface ToornamentStageSettings {
    size: number;
    nb_groups: number;
    pairing_method: ToornamentPairingMethod;
    grand_final: GrandFinalType;
    third_decider?: boolean;
    skip_round1?: boolean;
}
export interface ToornamentStage {
    id: string;
    number: number;
    name: string;
    type: ToornamentStageType;
    settings: ToornamentStageSettings;
}
export interface ToornamentParticipant {
    id: string;
    name: string;
    custom_user_identifier?: string;
    custom_fields?: any[];
}
export interface ToornamentOpponent {
    number: number;
    position: number;
    participant: ToornamentParticipant | null;
    result: Result | null;
    forfeit: boolean;
    score?: number | null;
    source_node_id?: string | null;
}
export interface ToornamentMatch {
    id: string;
    stage_id: string;
    group_id: string;
    round_id: string;
    number: number;
    type: string;
    status: ToornamentStatus;
    opponents: ToornamentOpponent[];
}
/**
 * Converts a Toornament stage type.
 *
 * @param type Type of the stage.
 */
export declare function convertStageType(type: ToornamentStageType): StageType;
/**
 * Converts Toornament stage settings.
 *
 * @param settings Settings of the stage.
 */
export declare function convertStageSettings(settings: ToornamentStageSettings): StageSettings;
/**
 * Converts a Toornament round-robin mode.
 *
 * @param method Pairing method.
 */
export declare function convertRoundRobinMode(method: ToornamentPairingMethod): RoundRobinMode | undefined;
/**
 * Converts a Toornament match status.
 *
 * @param status Status of the match.
 */
export declare function convertMatchStatus(status: ToornamentStatus): Status;
/**
 * Converts a Toornament participant.
 *
 * @param id ID of the participant.
 * @param participant Toornament participant.
 */
export declare function convertParticipant(id: number, participant: ToornamentParticipant): Participant;
/**
 * Converts a Toornament participant result.
 *
 * @param id ID of the participant.
 * @param source Source of the participant.
 * @param result Result of the participant.
 */
export declare function convertParticipantResult(id: number | null, source: number | undefined, result: ToornamentOpponent): ParticipantResult;
/**
 * Creates an ID factory, which returns the existing ID or a new incremental ID corresponding to a Toornament ID.
 */
export declare function idFactory(): {
    (id: string): number;
    getMapping: () => Mapping;
};
/**
 * Converts Toornament data to brackets-viewer data.
 *
 * @param data Data coming from Toornament put in a single object.
 * @param data.tournament_id ID of the tournament.
 * @param data.stages List of stages.
 * @param data.matches List of matches.
 */
export declare function convertData(data: {
    tournament_id: number;
    stages: ToornamentStage[];
    matches: ToornamentMatch[];
}): ConvertResult;
