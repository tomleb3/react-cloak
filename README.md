# react-cloak

> An offline manager

[![NPM](https://img.shields.io/npm/v/react-cloak.svg)](https://www.npmjs.com/package/react-cloak) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-cloak
```

## Description

`react-cloak` allows you to display an indication whenever the user goes offline or back online,  
or simply to act upon a change in the connectivity status.

## Usage

`react-cloak` offers 2 exported assets: a component and a hook.

The component allows you to render children based on desired status.

It accepts the following parameters:

- **onOffline**:  
  Type: callback (optional)  
  Description: If passed, this callback will be called when the user goes offline.

- **onOnline**:  
  Type: callback (optional)  
  Description: If passed, this callback will be called when the user goes online.

- **renderWhen**:  
  Type: online | offline (optional - "offline" by default)  
  Description: Lets you choose when to render the component, default is when offline, can be set to opposite.

The hook returns a boolean value, the value of which is `true` when the user is offline, and `false` when the is online.

It accepts the following parameters:

- **onOffline**:  
  Type: callback (optional)  
  Description: If passed, this callback will be called when the user goes offline.

- **onOnline**:  
  Type: callback (optional)  
  Description: If passed, this callback will be called when the user goes online.

<br />

In-order to use the assets, simply import them into your project, then use it to display whichever indication suits your needs.

## Example:

```tsx
import React from "react";

import Cloak, { useCloak } from "react-cloak";

import Page1 from "pages/page1";
import Page2 from "pages/page2";

function App() {
  const onOffline = () => console.log('offline');
  const onOnline = () => console.log('online');

  // Hook without parameters:
  const isOffline = useCloak();

  // Hook with parameters:
  useCloak({
    onOffline,
    onOnline,
  });

  return (
    // Component without parameters:
    <Cloak>
      <div>You are currently offline. Some of the features may not work as intended.</div>
    </Cloak>

    // Component with parameters:
    <Cloak
      onOffline={onOffline}
      onOnline={onOnline}
      renderWhen='online'
    >
      <div>You are currently online. Most features should work as intended.</div>
    </Cloak>

    <Page1 />
    <Page2 />
  );
}
```

## License

MIT © [tomleb3](https://github.com/tomleb3)
