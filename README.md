# App Analytics Custom Logger

A framework for logging App Analytics Custom Interactions and organizing enums.

## Goals

- Establish an approach to easily log custom interactions in LWC's
- Create a way to update the list of Enums for LWC custom interactions
- Demonstrate the behavior with custom components
- Offer Apex example of custom interaction logging

## Installation

`sf project deploy start`

Drag `exampleLwc` to any Record, App, or Home page.

Turn on Apex Debug and refresh page containing `exampleLwc` component. Debug logs will contain `APP_ANALYTICS` rows. In an unpackaged state, you should expect to see the following message- this means it is working correctly.

`APP_ANALYTICS_FINE [External]IsvPartners.AppAnalytics.logCustomInteraction was called, but not from an installed managed package. This means that the code is ready to be packaged.`

In your browser console, console messages are published denoting parts of the LWC rendering lifecycle.

## Updating the Enum List

As teams add new custom LWC's, they will have to create corresponding enum entries in `AppAnalyticsLogger.cls`. This script aims to decrease that burden by producing a valid list of enum values for each LWC that extends the `CustomInteractionLogger` JavaScript class. Script outputs a list to the console which can be copy and pasted into the `AppAnalyticsLogger` apex class.

`npm run enumUpdate`
