# react-headband

> A simple controller for your document titles

[![NPM](https://img.shields.io/npm/v/react-headband.svg)](https://www.npmjs.com/package/react-headband) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-headband
```

## Description

`react-headband` allows you to easily set your document's titles for different routes.

## Usage

In-order to use `react-headband`, simply import it into your project, then wrap each route declaration with Headband, while setting the desired title as a parameter.

You can add the optional `scrollToTop` parameter if you wish for that behavior when navigating to the route.

**Example:**

```tsx
import React from "react";

import Headband from "react-headband";

import Page1 from "pages/page1";
import Page2 from "pages/page2";

function App() {
  return (
    <Headband title="Page no. 1">
      <Page1 />
    </Headband>
    <Headband title="Page no. 2" scrollToTop>
      <Page2 />
    </Headband>
  );
}
```

## Notes

- To avoid mismatch between titles and routes, make sure to use Headband on all routes.

## License

MIT © [tomleb3](https://github.com/tomleb3)
