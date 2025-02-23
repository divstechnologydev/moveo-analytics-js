# moveo-one-analytics

<div align="center">
  <img src="https://github.com/divstechnologydev/moveo-analytics-react-native/assets/6665139/3755d4fc-d4bc-47dd-a543-9c131a38772c" height="150"/>
</div>

## Table of Contents
- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)

## Introduction

Moveo One analytics is a user cognitive-behavioral analytics tool. This SDK provides a pure JavaScript implementation that can be used in any JavaScript environment.

## Installation

```bash
npm install moveo-one-analytics
# or
yarn add moveo-one-analytics
```

## Usage

```javascript
import { MoveoOne } from 'moveo-one-analytics';

// Initialize with your token
const analytics = MoveoOne.getInstance('<YOUR_TOKEN>');

// Identify user
analytics.identify('user123');

// Start tracking a context
analytics.start('checkout_flow', {
  version: '1.0.0',
  environment: 'production'
});

// Track an event
analytics.track('checkout_flow', {
  semanticGroup: 'payment',
  id: 'submit_button',
  type: 'button',
  action: 'click',
  value: 'complete',
  metadata: { amount: 99.99 }
});
```

## API Reference

### Core Methods

#### `MoveoOne.getInstance(token)`
Creates or returns the singleton instance of MoveoOne.

#### `identify(userId)`
Sets the user identifier for tracking.

#### `start(context, metadata?)`
Starts a new tracking session.

#### `track(context, data)`
Tracks a specific event.

#### `tick(data)`
Tracks a continuous event in the current context.

For more detailed documentation and support, please contact us at info@moveo.one

------------------

To install the Moveo One analytics library for web, please follow the instructions below:

1. Add the Moveo One analytics script to your HTML file:

```html
<script src="https://cdn.jsdelivr.net/npm/moveo-one-analytics@latest/dist/moveo-one.min.js"></script>
``` 

2. Initialize the Moveo One analytics instance:

```html
<!-- In the <head> section -->
<script src="https://moveoonestorage.blob.core.windows.net/000-scripts/moveo-one-script.min.js"></script>
<script>
  // Initialize MoveoOne with their token
  const moveo = MoveoOne.init('YOUR_TOKEN_HERE');
  
  // Optionally identify the user
  moveo.identify('user123');
</script>
``` 

