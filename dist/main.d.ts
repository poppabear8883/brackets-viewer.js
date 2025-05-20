import './style.scss';
import { Id } from 'brackets-model';
import { Locale } from './lang';
import { ToornamentStage, ToornamentMatch, Match } from './toornament';
import { Config, ViewerData, ParticipantImage, MatchClickCallback } from './types';
export declare class BracketsViewer {
    readonly participantRefs: Record<Id, HTMLElement[]>;
    private participants;
    private participantImages;
    private stage;
    private config;
    private skipFirstRound;
    private alwaysConnectFirstRound;
    private popover;
    private getRoundName;
    private _onMatchClick;
    private _onMatchLabelClick;
    /**
     * @deprecated Use `onMatchClick` in the `config` parameter of `viewer.render()`.
     * @param callback A callback to be called when a match is clicked.
     */
    set onMatchClicked(callback: MatchClickCallback);
    /**
     * Renders data generated with `brackets-manager.js`. If multiple stages are given, they will all be displayed.
     *
     * Stages won't be discriminated visually based on the tournament they belong to.
     *
     * @param data The data to display.
     * @param config An optional configuration for the viewer.
     */
    render(data: ViewerData, config?: Partial<Config>): Promise<void>;
    /**
     * Updates the results of an existing match.
     *
     * @param match The match to update.
     */
    updateMatch(match: Match): void;
    /**
     * Sets the images which will be rendered for every participant.
     *
     * @param images The participant images.
     */
    setParticipantImages(images: ParticipantImage[]): void;
    /**
     * Renders data from Toornament API.
     *
     * @param data The data from Toornament API.
     * @param config An optional configuration for the viewer.
     */
    renderToornament(data: {
        tournament_id: number;
        stages: ToornamentStage[];
        matches: ToornamentMatch[];
    }, config?: Partial<Config>): Promise<void>;
    /**
     * Adds a locale to the available i18n bundles.
     *
     * @param name Name of the locale.
     * @param locale Contents of the locale.
     */
    addLocale(name: string, locale: Locale): Promise<void>;
    /**
     * Renders a stage (round-robin, single or double elimination).
     *
     * @param root The root element.
     * @param data The data to display.
     */
    private renderStage;
    /**
     * Renders a round-robin stage.
     *
     * @param root The root element.
     * @param stage The stage to render.
     * @param matchesByGroup A list of matches for each group.
     */
    private renderRoundRobin;
    /**
     * Renders an elimination stage (single or double).
     *
     * @param root The root element.
     * @param stage The stage to render.
     * @param matchesByGroup A list of matches for each group.
     */
    private renderElimination;
    /**
     * Renders a list of consolation matches.
     *
     * @param root The root element.
     * @param stage The stage to render.
     * @param matchesByGroup A list of matches for each group.
     */
    private renderConsolationMatches;
    /**
     * Renders a single elimination stage.
     *
     * @param container The container to render into.
     * @param matchesByGroup A list of matches for each group.
     */
    private renderSingleElimination;
    /**
     * Renders a double elimination stage.
     *
     * @param container The container to render into.
     * @param matchesByGroup A list of matches for each group.
     */
    private renderDoubleElimination;
    /**
     * Returns information about the final group in single elimination.
     *
     * @param matchesByGroup A list of matches for each group.
     */
    private getFinalInfoSingleElimination;
    /**
     * Returns information about the final group in double elimination.
     *
     * @param matchesByGroup A list of matches for each group.
     */
    private getFinalInfoDoubleElimination;
    /**
     * Renders a bracket.
     *
     * @param container The container to render into.
     * @param matchesByRound A list of matches for each round.
     * @param getRoundName A function giving a round's name based on its number.
     * @param bracketType Type of the bracket.
     * @param connectFinal Whether to connect the last match of the bracket to the first match of the final group.
     */
    private renderBracket;
    /**
     * Renders a final group.
     *
     * @param container The container to render into.
     * @param finalType Type of the final.
     * @param matches Matches of the final.
     */
    private renderFinal;
    /**
     * Creates a ranking table based on matches of a round-robin stage.
     *
     * @param matches The list of matches.
     */
    private createRanking;
    /**
     * Creates a row of the ranking table.
     *
     * @param item Item of the ranking.
     */
    private createRankingRow;
    /**
     * Creates a match in a bracket.
     *
     * @param match Information about the match.
     */
    private createBracketMatch;
    /**
     * Creates a match in a final.
     *
     * @param finalType Type of the final.
     * @param match Information about the match.
     */
    private createFinalMatch;
    /**
     * Creates a hidden empty match to act as a placeholder.
     */
    private skipBracketMatch;
    /**
     * Creates a match based on its results.
     *
     * @param match Results of the match.
     * @param propagateHighlight Whether to highlight participants in other matches.
     */
    private createMatch;
    /**
     * Creates a participant for a match.
     *
     * @param participant Information about the participant.
     * @param propagateHighlight Whether to highlight the participant in other matches.
     * @param side Side of the participant.
     * @param originHint Origin hint for the match.
     * @param matchLocation Location of the match.
     * @param roundNumber Number of the round.
     */
    private createParticipant;
    /**
     * Renders a participant.
     *
     * @param containers Containers for the participant.
     * @param participant The participant result.
     * @param side Side of the participant.
     * @param originHint Origin hint for the match.
     * @param matchLocation Location of the match.
     * @param roundNumber Number of the round.
     */
    private renderParticipant;
    /**
     * Renders a participant image.
     *
     * @param nameContainer The name container.
     * @param participantId ID of the participant.
     */
    private renderParticipantImage;
    /**
     * Renders a match label.
     *
     * @param opponents The opponents container.
     * @param match Results of the match.
     */
    private renderMatchLabel;
    /**
     * Show a popover to display the games of a match.
     *
     * @param match The parent match.
     */
    private showPopover;
    /**
     * Renders an origin hint for a participant.
     *
     * @param nameContainer The name container.
     * @param participant The participant result.
     * @param originHint Origin hint for the participant.
     * @param matchLocation Location of the match.
     */
    private renderHint;
    /**
     * Renders a participant's origin.
     *
     * @param nameContainer The name container.
     * @param participant The participant result.
     * @param side Side of the participant.Side of the participant.
     * @param matchLocation Location of the match.
     * @param roundNumber Number of the round.
     */
    private renderParticipantOrigin;
    /**
     * Sets mouse hover events for a participant.
     *
     * @param participantId ID of the participant.
     * @param element The dom element to add events to.
     * @param propagateHighlight Whether to highlight the participant in other matches.
     */
    private setupMouseHover;
    /**
     * Clears any previous popover selections.
     */
    private clearPreviousPopoverSelections;
}
