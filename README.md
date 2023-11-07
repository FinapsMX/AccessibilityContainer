## AccessibilityContainer
A Mendix Pluggable Widget usable as a container with extra options for accessibility features.

<img src="https://github.com/FinapsMX/AccessibilityContainer/assets/103512027/abbf8940-deb2-418f-a0f7-201ecfc904da" width="600" />

## Features
 - `aria-label` to summarise the content.
 - `aria-description` to provide a detailed description of the content.
 - `aria-disabled` for containers acting as a 'fake' button.
 - `role` to allow screen readers to determine the functionality of the element.
 - `aria-hidden` is automatically added to all children elements.

## Usage
 - Add the widget `.mpk` to your project's `widgets` folder.
 - Synchronize app directory (F4).
 - Drag the widget onto pages from the toolbox. 

## Issues, suggestions and feature requests
[Issues page](https://github.com/FinapsMX/AccessibilityContainer/issues)

## Development and contribution

1. Install NPM package dependencies by using: `npm install`. If you use NPM v7.x.x, which can be checked by executing `npm -v`, execute: `npm install --legacy-peer-deps`.
1. Run `npm start` to watch for code changes. On every change:
    - the widget will be bundled;
    - the bundle will be included in a `dist` folder in the root directory of the project;
    - the bundle will be included in the `deployment` and `widgets` folder of the Mendix test project.
