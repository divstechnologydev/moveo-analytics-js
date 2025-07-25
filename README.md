# Moveo One Analytics JavaScript SDK

<div align="center">
  <img src="https://www.moveo.one/assets/og_white.png" alt="Moveo Analytics Logo" width="200" />
</div>

## Table of Contents

- [Introduction](#introduction)
- [Quick Start Guide](#quick-start-guide)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Library Initialization](#library-initialization)
  - [Setup](#setup)
  - [Metadata and Additional Metadata](#metadata-and-additional-metadata)
  - [Track Data](#track-data)
- [Event Types and Actions](#event-types-and-actions)
- [Comprehensive Example Usage](#comprehensive-example-usage)
- [Obtain API Key](#obtain-api-key)
- [Dashboard Access](#dashboard-access)
- [Support](#support)

## Introduction

Moveo One Analytics is a user cognitive-behavioral analytics tool that provides deep insights into user interactions and behavior patterns. This SDK offers a pure JavaScript implementation that can be seamlessly integrated into any JavaScript environment, from web applications to React components.

## Quick Start Guide

### Prerequisites

- A valid Moveo One API key

### Installation

```bash
npm install moveo-one-analytics-js
# or
yarn add moveo-one-analytics-js
```

### Library Initialization

```javascript
import { MoveoOne } from "moveo-one-analytics-js";

// Initialize with your API token
const analytics = MoveoOne.getInstance("<YOUR_API_TOKEN>");
```

### Setup

```javascript
// Enable logging for debugging (optional)
analytics.setLogging(true);

// Set custom flush interval (optional, default: 10 seconds)
analytics.setFlushInterval(5000);
```

### Metadata and Additional Metadata

#### Session Metadata

Session metadata should split sessions by information that influences content or creates visually different variations of the same application. Sessions split by these parameters will be analyzed separately by our UX analyzer.

**Session metadata examples:**
```javascript
sessionMetadata.put("test", "a");
sessionMetadata.put("locale", "eng");
```

#### Additional Metadata

Additional metadata is used for data enrichment and enables specific queries or analysis by the defined split.

**Additional metadata examples:**
```javascript
additionalMetadata.put("user_country", "US");
additionalMetadata.put("company", "example_company");
additionalMetadata.put("user_role", "admin"); // or "user", "manager", "viewer"
additionalMetadata.put("acquisition_channel", "organic"); // or "paid", "referral", "direct"
additionalMetadata.put("device_category", "mobile"); // or "desktop", "tablet"
additionalMetadata.put("subscription_plan", "pro"); // or "basic", "enterprise"
additionalMetadata.put("has_purchased", "true"); // or "false"
```

### Track Data

#### Understanding start() Calls and Context

**Single Session, Single Start**

You **do not need multiple start() calls for multiple contexts**. The `start()` method is called only **once at the beginning of a session** and must be called before any `track()` or `tick()` calls.

#### When to Use Each Tracking Method

**Use `track()` when:**
- You want to explicitly specify the event context
- You need to change context between events
- You want to use different context than the one specified in the start method

**Use `tick()` when:**
- You're tracking events within the same context
- You want tracking without explicitly defining context
- You want to track events in the same context specified in the start method

#### Context Definition

- **Context** represents large, independent parts of the application and serves to divide the app into functional units that can exist independently of each other
- Examples: `onboarding`, `main_app_flow`, `checkout_process`

#### Semantic Groups

- **Semantic groups** are logical units **within a context** that group related elements
- Depending on the application, this could be a group of elements or an entire screen (most common)
- Examples: `navigation`, `user_input`, `content_interaction`

#### Tracking Examples

```javascript
// Start the session
analytics.start("checkout_flow", {
  version: "1.0.0",
  environment: "production"
});

// Track an event with explicit context
analytics.track("checkout_flow", {
  semanticGroup: "payment",
  id: "submit_button",
  type: "button",
  action: "click",
  value: "complete"
});

// Track an event in the same context (using tick)
analytics.tick({
  semanticGroup: "navigation",
  id: "back_button",
  type: "button",
  action: "click",
  value: "go_back"
});
```

## Event Types and Actions

### Available Event Types
- `button` - Interactive buttons and controls
- `input` - Form inputs and text fields
- `text` - Static text content
- `image` - Images and media content
- `link` - Hyperlinks and navigation elements
- `form` - Form containers and submissions
- `container` - Content containers and sections
- `navigation` - Navigation elements and menus

### Available Event Actions
- `click` - User clicks on an element
- `view` - Element comes into view
- `edit` - User modifies input content
- `submit` - Form submission
- `hover` - User hovers over an element
- `scroll` - Scrolling interactions
- `focus` - Element receives focus
- `blur` - Element loses focus

## Comprehensive Example Usage

```javascript
import { MoveoOne } from "moveo-one-analytics-js";

// Initialize analytics
const analytics = MoveoOne.getInstance("your-api-token-here");
analytics.setLogging(true);

// Start session with metadata
sessionMetadata.put("test", "a");
sessionMetadata.put("locale", "eng");
additionalMetadata.put("app_version", "2.1.0");

// Set additional metadata
additionalMetadata.put("user_country", "US");
additionalMetadata.put("company", "example_company");
additionalMetadata.put("user_role", "admin");
additionalMetadata.put("acquisition_channel", "organic");
additionalMetadata.put("device_category", "mobile");
additionalMetadata.put("subscription_plan", "pro");
additionalMetadata.put("has_purchased", "true");

// Track user interactions
function handleProductClick(productId) {
  analytics.track("ecommerce_app", {
    semanticGroup: "product_catalog",
    id: `product_${productId}`,
    type: "button",
    action: "click",
    value: "view_product"
  });
}

function handleAddToCart(productId) {
  analytics.track("ecommerce_app", {
    semanticGroup: "shopping_cart",
    id: `add_to_cart_${productId}`,
    type: "button",
    action: "click",
    value: "add_item"
  });
}

function handleFormInput(fieldName) {
  analytics.tick({
    semanticGroup: "user_input",
    id: fieldName,
    type: "input",
    action: "edit",
    value: "text_update"
  });
}

// Update session metadata when user changes preferences
function updateUserPreferences(preferences) {
  sessionMetadata.put("test", "a");
  sessionMetadata.put("locale", "eng");
}
```

## Obtain API Key

To get your API key, visit [Moveo One Application](https://app.moveo.one/) and create a new project.

## Dashboard Access

Once your data is being tracked, you can access your analytics through the [Moveo One Dashboard](https://app.moveo.one/).

## Support

For any issues or support, feel free to:
- Open an **issue** on our [GitHub repository](https://github.com/divstechnologydev/moveoone-flutter/issues)
- Email us at [**info@moveo.one**](mailto:info@moveo.one)
