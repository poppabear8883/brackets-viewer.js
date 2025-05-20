# brackets-viewer.js

[![npm](https://img.shields.io/npm/v/brackets-viewer.svg)](https://www.npmjs.com/package/brackets-viewer)
[![Downloads](https://img.shields.io/npm/dt/brackets-viewer.svg)](https://www.npmjs.com/package/brackets-viewer)
[![jsDelivr](https://data.jsdelivr.com/v1/package/npm/brackets-viewer/badge?style=rounded)](https://www.jsdelivr.com/package/npm/brackets-viewer)
[![Package Quality](https://packagequality.com/shield/brackets-viewer.svg)](https://packagequality.com/#?package=brackets-viewer)

A simple library to display tournament brackets (round-robin, single elimination, double elimination)

It contains all the logic needed to display tournaments.

### Features

- Supports translation ([i18next](https://www.i18next.com/)), which also allows you to change the vocabulary
- It was developed in vanilla JS, so you can [use it in any framework](https://github.com/Drarig29/brackets-viewer.js/discussions/74)
- A full working example of creating and displaying brackets (see [`./demo/with-ui.html`](demo/with-ui.html))
- Themes supported, with CSS variables (see [`./demo/themes`](/demo/themes))
- Display participant images next to their name ([example](https://github.com/Drarig29/brackets-viewer.js/blob/668aae1ed9db41ab21665459635cd6b71cad247c/demo/with-api.html#L34-L38))
- Do actions when a match is clicked ([example](https://github.com/Drarig29/brackets-viewer.js/blob/ed31fc4fc43336d3543411f802a8b1d9d592d467/demo/with-api.html#L53), [feature request](https://github.com/Drarig29/brackets-viewer.js/discussions/80))
- Custom round names: do you want to say "Semi Finals" instead of "Round 2"? ([example](https://github.com/Drarig29/brackets-viewer.js/blob/ed31fc4fc43336d3543411f802a8b1d9d592d467/demo/with-api.html#L46-L52), [feature request](https://github.com/Drarig29/brackets-viewer.js/discussions/93))
- Direct support for Toornament API data

![Screenshot](screenshot.png)

## Installation

### NPM Installation

Install the package using npm:

```bash
npm install brackets-viewer
```

### CDN Usage

Import the library using [jsDelivr](https://www.jsdelivr.com/) (you can replace `@latest` to lock a specific version):

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/brackets-viewer@latest/dist/brackets-viewer.min.css" />
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/brackets-viewer@latest/dist/brackets-viewer.min.js"></script>
```

Or from GitHub with (you can replace `@master` by any branch name, tag name or commit id):

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Drarig29/brackets-viewer.js@master/dist/brackets-viewer.min.css" />
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/Drarig29/brackets-viewer.js@master/dist/brackets-viewer.min.js"></script>
```

Now, you can use it with data generated using [brackets-manager](https://github.com/Drarig29/brackets-manager.js) or with crafted data following the [brackets-model](https://github.com/Drarig29/brackets-model).

## Usage

### Browser Usage (CDN)

When using the library via CDN, the library is available through the global `window` object:

```js
window.bracketsViewer.render({
  stages: data.stage,
  matches: data.match,
  matchGames: data.match_game,
  participants: data.participant,
});
```

If you want to clear the container's content before rendering again, use this:

```js
window.bracketsViewer.render({
  stages: data.stage,
  matches: data.match,
  matchGames: data.match_game,
  participants: data.participant,
}, {
  clear: true,
});
```

If you have multiple elements with a `.brackets-viewer` class, you must provide a `selector`:

```js
window.bracketsViewer.render({
  stages: data.stage,
  matches: data.match,
  matchGames: data.match_game,
  participants: data.participant,
}, {
  selector: '#example',
});
```

### ES Module Usage (NPM)

When using the library as an ES module, you can import it in different ways:

#### Method 1: Using the default export

```js
// Import the default instance
import bracketsViewer from 'brackets-viewer';
// Import the CSS
import 'brackets-viewer/dist/brackets-viewer.min.css';

// Use the default instance
bracketsViewer.render({
  stages: data.stage,
  matches: data.match,
  matchGames: data.match_game,
  participants: data.participant,
}, {
  selector: '#tournament-brackets',
  clear: true
});
```

#### Method 2: Creating your own instance

```js
// Import the BracketsViewer class
import { BracketsViewer } from 'brackets-viewer';
// Import the CSS
import 'brackets-viewer/dist/brackets-viewer.min.css';

// Create your own instance
const viewer = new BracketsViewer();
viewer.render({
  stages: data.stage,
  matches: data.match,
  matchGames: data.match_game,
  participants: data.participant,
}, {
  selector: '#tournament-brackets',
  clear: true
});
```

See the [full documentation](https://drarig29.github.io/brackets-docs/reference/viewer/interfaces/Config.html) for the `render()` configuration.

### Using Toornament API Data

The Toornament functionality is fully integrated into the main codebase, providing seamless support for Toornament API data.

#### Browser Usage (CDN)

You can directly use data from the Toornament API:

```js
// Data from Toornament API
const toornamentData = {
  tournament_id: 123456,
  stages: [/* Array of Toornament stages */],
  matches: [/* Array of Toornament matches */]
};

// Render using Toornament data
window.bracketsViewer.renderToornament(toornamentData, {
  selector: '#example',
  clear: true,
});

// Alternatively, you can convert the data manually
// The convertData function is available on the window object
const convertedData = window.convertData(toornamentData);
window.bracketsViewer.render({
  stages: convertedData.database.stage,
  matches: convertedData.database.match,
  matchGames: convertedData.database.match_game,
  participants: convertedData.database.participant,
});
```

#### ES Module Usage (NPM)

When using as an ES module:

```js
import bracketsViewer, { convertData } from 'brackets-viewer';
import 'brackets-viewer/dist/brackets-viewer.min.css';

// Data from Toornament API
const toornamentData = {
  tournament_id: 123456,
  stages: [/* Array of Toornament stages */],
  matches: [/* Array of Toornament matches */]
};

// Method 1: Use renderToornament directly
bracketsViewer.renderToornament(toornamentData, {
  selector: '#example',
  clear: true,
});

// Method 2: Convert the data manually and use render
const convertedData = convertData(toornamentData);
bracketsViewer.render({
  stages: convertedData.database.stage,
  matches: convertedData.database.match,
  matchGames: convertedData.database.match_game,
  participants: convertedData.database.participant,
});
```


#### Converting Toornament Data with Node.js

If you need to convert Toornament data to brackets-viewer format in a Node.js environment, you can use the provided utility script:

1. Build the project first: `npm run build`
2. Create an `input` directory and place your Toornament data in a file named `input/toornament.json`
3. Run the conversion script: `node scripts/convert-toornament.js`
4. The converted data will be saved to `output/db.json` and `output/mappings.json`

The script will automatically handle the conversion process and save the results to the output files.

## Demos

To quickly test, you can also try the demos by visiting `./demo/index.html`.

### Running the Demo Server

The project uses JSON Server to simulate an API for testing:

```bash
npm run db
```

This serves the demo data from `demo/db.json` at `http://localhost:3000/db`.

Alternatively, you can use a `db.json` file generated by unit tests in the `brackets-manager` project:

```bash
npx json-server --watch path/to/brackets-manager/db.json
```

### Creating Custom Test Pages

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

## Development

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
  - `brackets-viewer.min.js` (UMD build)
  - `brackets-viewer.esm.js` (ES Module build)
  - `brackets-viewer.min.css`
  - `stage-form-creator.min.js`
  - TypeScript declaration files

### Testing
Since the project doesn't have a formal testing framework, testing is primarily done through:

1. **Manual testing with demo pages**:
   - Open any of the HTML files in the `demo/` directory in a browser
   - The main demo page is at `demo/index.html`

2. **Watch demo files during development**:
   ```bash
   npm run watch-demo
   ```
   This will start a browser-sync server that watches for changes in the `dist` directory.

### Linting
Run ESLint to check for code quality issues:
```bash
npm run lint
```

### Localization
The project uses i18next for translations. You can add custom translations:

```js
// Browser usage
window.bracketsViewer.addLocale('ru', {
    "common": {
        "round-name": "раунд {{roundNumber}}",
    }
});

// ES Module usage
import bracketsViewer from 'brackets-viewer';
bracketsViewer.addLocale('ru', {
    "common": {
        "round-name": "раунд {{roundNumber}}",
    }
});
```

### Browser Compatibility
The project targets modern browsers and explicitly does not support IE 11 (see browserslist in package.json).

## Credits

This library has been created to be used by the [Nantarena](https://nantarena.net/).

It has been inspired by:

- [Toornament](https://www.toornament.com/en_US/) (design inspiration)
- [Responsive Tournament Bracket](https://codepen.io/jimmyhayek/full/yJkdEB) (connection between matches in plain CSS)
