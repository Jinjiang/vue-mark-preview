# vue-mark-preview

A web app to preview a markdown URL as slides, which is based on [`vue-mark-display`](https://github.com/Jinjiang/vue-mark-display).

## Usage

### Build

```
yarn
yarn build
```

The web app will be built into static files in `dist` folder.

### Preview a Markdown File

Open the web app in a browser with a markdown URL as the search string.

For example, we assume that you have a static web server which host the `dist` folder. So you can access the web app through `http://localhost:8000/`. Then we have a markdown file at `dist/foo.md`. If we would like to preview this markdown file, just open `http://localhost:8000/?/foo.md` in a browser.

## How to Contribute

### Compiles and hot-reloads for development

```
yarn run serve
```

### Lints and fixes files
```
yarn run lint
```
