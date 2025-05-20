import { InMemoryDatabase } from 'brackets-memory-db';
import { BracketsManager } from 'brackets-manager';
import { BracketsViewer } from './main';
import { convertData } from './toornament';

window.bracketsViewer = new BracketsViewer();
window.inMemoryDatabase = new InMemoryDatabase();
window.bracketsManager = new BracketsManager(window.inMemoryDatabase);
window.convertData = convertData;

export { BracketsViewer };
export { ToI18nKey } from './lang';
export {
    Config,
    MatchClickCallback,
    Placement,
    ViewerData,
    ParticipantImage,
    RoundNameInfo,
    MatchWithMetadata,
    Connection,
    ConnectionType,
    OriginHint,
} from './types';

// Export Toornament functionality
export { convertData };
