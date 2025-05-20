# Brackets Viewer Development Guidelines

This document provides essential information for developers working on the Brackets Viewer project.

## Build/Configuration Instructions

### Prerequisites
- Node.js (v14 or higher recommended)
- npm

### Setup
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Build Commands
- **Development build with watch mode**:
  ```bash
  npm run start
  ```
  This will start webpack in watch mode, automatically rebuilding when files change.

- **Production build**:
  ```bash
  npm run build
  ```
  This creates minified files in the `dist` directory:
  - `brackets-viewer.min.js`
  - `brackets-viewer.min.css`
  - `stage-form-creator.min.js`

### Project Structure
- `src/`: Source TypeScript files
- `dist/`: Compiled JavaScript and CSS files
- `demo/`: Example implementations
- `scripts/`: Utility scripts

## Testing Information

### Running the Demo Server
The project uses JSON Server to simulate an API for testing:

```bash
npm run db
```

This serves the demo data from `demo/db.json` at `http://localhost:3000/db`.

### Creating Tests
Since the project doesn't have a formal testing framework, testing is primarily done through:

1. **Manual testing with demo pages**:
   - Open any of the HTML files in the `demo/` directory in a browser
   - The main demo page is at `demo/index.html`

2. **Creating custom test pages**:
   Here's a minimal example to test the library:

   ```html
   <!DOCTYPE html>
   <html>
   <head>
       <meta charset="utf-8">
       <title>Brackets Viewer Test</title>
       <link rel="stylesheet" href="../dist/brackets-viewer.min.css" />
       <script type="text/javascript" src="../dist/brackets-viewer.min.js"></script>
   </head>
   <body>
       <div id="test-brackets" class="brackets-viewer"></div>

       <script>
           // Define your test data
           const testData = {
               participants: [
                   { id: 1, name: "Team A" },
                   { id: 2, name: "Team B" },
                   { id: 3, name: "Team C" },
                   { id: 4, name: "Team D" }
               ],
               stage: [
                   { id: 1, name: "Test Tournament", type: "single_elimination" }
               ],
               match: [
                   // Semi-finals
                   { id: 1, stage_id: 1, group_id: 1, round_id: 1, number: 1, status: 3, opponent1: { id: 1, score: 2 }, opponent2: { id: 2, score: 1 } },
                   { id: 2, stage_id: 1, group_id: 1, round_id: 1, number: 2, status: 3, opponent1: { id: 3, score: 0 }, opponent2: { id: 4, score: 2 } },
                   // Final
                   { id: 3, stage_id: 1, group_id: 1, round_id: 2, number: 1, status: 3, opponent1: { id: 1, score: 3 }, opponent2: { id: 4, score: 1 } }
               ],
               match_game: []
           };

           // Render the brackets
           window.bracketsViewer.render({
               stages: testData.stage,
               matches: testData.match,
               matchGames: testData.match_game,
               participants: testData.participants
           }, {
               selector: '#test-brackets',
               onMatchClick: match => console.log('Match clicked:', match)
           });
       </script>
   </body>
   </html>
   ```

3. **Documentation Testing**:
   The project uses TypeDoc to generate documentation and verify it:
   ```bash
   npm install typedoc
   npx typedoc src/index.ts --excludePrivate --excludeExternals --treatValidationWarningsAsErrors
   ```

### Linting
Run ESLint to check for code quality issues:
```bash
npm run lint
```

## Additional Development Information

### Code Style
- The project uses TypeScript with strict type checking
- ESLint is configured with specific rules:
  - Single quotes for strings
  - Semicolons required
  - Explicit function return types
  - JSDoc comments required for methods
  - Trailing commas in multiline arrays/objects

### Important Interfaces
The main interfaces to be aware of are:
- `ViewerData`: The data structure for rendering brackets
- `Config`: Configuration options for the viewer
- `Stage`, `Match`, `Participant`: Core data models from brackets-model

### Working with Toornament API Data
The library supports direct rendering of Toornament API data:

```js
// Using Toornament data
window.bracketsViewer.renderToornament(toornamentData, {
  selector: '#example',
  clear: true,
});

// Or convert manually
const convertedData = window.convertData(toornamentData);
```

For Node.js conversion:
1. Place Toornament data in `input/toornament.json`
2. Run `node scripts/convert-toornament.js`
3. Get converted data from `output/db.json`

### Localization
The project uses i18next for translations. Add custom translations:

```js
window.bracketsViewer.addLocale('ru', {
    "common": {
        "round-name": "раунд {{roundNumber}}",
    }
});
```

### Browser Compatibility
The project targets modern browsers and explicitly does not support IE 11 (see browserslist in package.json).