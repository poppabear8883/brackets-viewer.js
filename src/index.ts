import { InMemoryDatabase } from 'brackets-memory-db';
import { BracketsManager } from 'brackets-manager';
import { BracketsViewer } from './main';
import { convertData } from './toornament';

// Create instances for export
const bracketsViewer = new BracketsViewer();
const inMemoryDatabase = new InMemoryDatabase();
const bracketsManager = new BracketsManager(inMemoryDatabase);

// Export the main functionality
export default bracketsViewer;

// Export classes and functions for advanced usage
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
export { inMemoryDatabase, bracketsManager };

// For backward compatibility with window-based usage
if (typeof window !== 'undefined') {
    window.bracketsViewer = bracketsViewer;
    window.inMemoryDatabase = inMemoryDatabase;
    window.bracketsManager = bracketsManager;
    window.convertData = convertData;
}
