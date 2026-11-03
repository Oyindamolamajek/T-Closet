# T-CLOSET Project Documentation

## Executive Summary

T-CLOSET is a fashion storefront prototype designed to help people move from broad product browsing to a smaller, more relevant set of clothing and accessory ideas. It combines a sample catalog with category filters, search, sorting, product details, a four-question style finder, favorites, a shopping bag, and Supabase-based account flows.

The current build is a front-end prototype, not a live retail operation. Catalog information is sample data; checkout does not submit orders or take payment; and customer email delivery still requires a production email provider. The project has not yet been evaluated with shoppers, so its benefits are design goals and hypotheses rather than measured outcomes.

## Project Idea

The central idea is that fashion discovery can start with how a person wants to feel, what they are dressing for, and what they find comfortable, rather than asking them to know a product name first. T-CLOSET uses a short style finder to rank catalog items against those preferences, while keeping the full catalog available for direct browsing.

The experience is intended to be inclusive and exploratory: style preferences are treated as suggestions for discovery, not rules about what a person should wear.

## Problem Being Addressed

Online fashion catalogs can require shoppers to translate personal goals such as "something relaxed for travel" or "a polished look for an event" into product categories, search terms, and filters. A shopper who does not yet know the exact item they want may need to browse many unrelated products before finding a useful starting point.

T-CLOSET addresses this discovery problem with two complementary paths:

- Direct browsing for shoppers who already know what category or product they want.
- A style finder for shoppers who want recommendations based on aesthetic, occasion, fit preference, and color palette.

This is a product hypothesis, not a demonstrated market finding for T-CLOSET. The prototype has not been tested with a representative group of shoppers.

## What Contributes to the Problem

Several factors motivate the design:

- Large assortments can take effort to compare. Research on choice overload suggests that a larger choice set can sometimes reduce follow-through, although the effect depends on context and the classic study was not about fashion shopping.
- Fashion preferences are contextual. The same person may want different clothing for work, travel, an event, or everyday wear.
- General-purpose filters organize items by catalog attributes, but do not always translate a shopper's taste into useful product suggestions.
- Fit, sizing, color, and image accuracy matter in apparel. This prototype does not resolve these retail problems: its variants and product data are examples and must be confirmed against real inventory.

## Research and Design Rationale

This documentation uses desk research and inspection of the current code. It does not report interviews, surveys, usability studies, conversion metrics, or experiments conducted for T-CLOSET.

Iyengar and Lepper's experiments on choice assortment found that a larger display could attract more attention while producing less purchase follow-through than a smaller display in one setting. This provides a useful reason to test guided discovery, but it does not prove that a four-question fashion quiz will improve shopping outcomes. T-CLOSET should test that assumption with users.

McKinsey's 2021 personalization article reports that 71 percent of surveyed consumers expected personalized interactions and 76 percent said they felt frustrated when those expectations were not met. These are broad consumer figures reported in 2021, not current fashion-specific measurements and not evidence about T-CLOSET users.

The design implication is modest: personalization may be useful when it is relevant and easy to control. T-CLOSET therefore keeps direct browsing available and presents quiz results as recommendations rather than replacing the catalog.

## Existing Approaches and Related Work

### Stitch Fix

Stitch Fix describes a flow in which a style quiz creates a profile of taste, fit, and price preferences. A stylist and fit technology use that profile to curate a shipment; customers try items at home and keep or return them. This is a more service-intensive model combining software, human styling, logistics, and returns.

### Common retail storefront patterns

Fashion storefronts commonly combine product catalogs with search, category navigation, sorting, product pages, saved items, and shopping bags. These tools are effective when shoppers can describe the product they are looking for, but are less directly oriented toward shoppers who begin with a mood, occasion, or general aesthetic.

### How T-CLOSET differs in this prototype

T-CLOSET's current distinction is its implementation approach, not a claim that the market has no similar product:

- It offers immediate self-service recommendations inside a regular storefront instead of a stylist-curated shipment.
- It combines the style finder and full product catalog, so shoppers can switch from recommendations to direct browsing.
- It asks about style, occasion, fit, and color, then ranks existing catalog entries using transparent keyword rules.
- It uses Nigerian naira formatting (`NGN`) and clothing and accessory sample data that can be replaced with locally verified inventory.

Unlike Stitch Fix, the prototype does not offer a stylist, try-at-home service, returns processing, or learned personalization from purchase history. The comparison is between publicly described service models and this prototype, not a controlled feature evaluation.

## Goals and Non-Goals

### Goals

- Make product discovery possible through both direct navigation and preference-led recommendations.
- Keep category, search, sort, product detail, favorites, and shopping bag interactions in one storefront.
- Make account creation and sign-in use a real authentication service rather than a local fake login.
- Keep demo and production capabilities clearly distinguished.

### Non-goals of the current build

- Processing payments, confirming stock, calculating shipping, or creating merchant orders.
- Giving medical, body-shape, or guaranteed fit advice.
- Proving that recommendations increase conversion, reduce returns, or outperform other stores.
- Replacing a human stylist or learning from a shopper's purchase history.

## How the Application Works

### Storefront and catalog

`tcloset.html` defines the page and its interface sections. `styles.css` provides the visual design and responsive behavior. `script.js` contains a local JavaScript catalog of 46 sample products and the interaction logic. Images and web fonts are loaded from external services.

The catalog can be browsed by category, searched by product text and metadata, and sorted by featured order, price, or name. Product detail views show an image and let the shopper select color and size. Some catalog entries contain explicit variants; missing variants receive category-based demo options. Those defaults are not inventory commitments.

### Style finder and recommendation logic

The style finder asks four questions:

1. Which look would you reach for first?
2. Where would you wear your next favorite?
3. How do you like your clothes to fit?
4. What colors do you love?

The current recommender is a deterministic keyword-scoring heuristic, not machine learning. It checks product style tags and older style fields, occasion descriptions, fit text, and color text. A style match contributes 6 points, an occasion match 4, and fit and color matches 2 each. It returns up to six positively scored items, ordered by score with product ID as a stable tie-breaker.

The catalog contains two data shapes: earlier products use fields such as `style`, `occasion`, and `fit` arrays; later additions use keyword `tags` and descriptive text. The recommender supports both shapes, but recommendation quality depends on the accuracy and consistency of those tags.

### Favorites and shopping bag

Favorites and cart contents are held in JavaScript memory in the current page. Shoppers can save favorites, add products with selected variants, adjust quantities, remove items, and see an NGN subtotal. These values do not persist across reloads or devices.

### Accounts and authentication

The account interface uses Supabase Auth for email/password signup, email confirmation, password login, and a user-requested passwordless sign-in link. Signup stores the chosen username as user metadata. The magic-link request sets `shouldCreateUser: false`, so it is intended for existing accounts rather than creating new ones.

The site uses a Supabase project URL and browser-safe publishable key. Email confirmation and sign-in redirects must be allowed in Supabase's URL settings. Custom SMTP is not configured in the current project, so email templates and customer-scale delivery are not ready for public launch. Configuration details are in [AUTH_SETUP.md](AUTH_SETUP.md).

### Checkout and newsletter

The checkout screen displays item images, variants, quantities, and totals as an order preview. It does not send the form to a server, persist customer data, create an order, or take payment. The newsletter form displays a demo response and does not subscribe the email address to a mailing list.

## Technology and Project Structure

- `tcloset.html`: page structure and forms.
- `styles.css`: responsive layout and component styles.
- `script.js`: sample product data, rendering, filters, quiz scoring, cart, checkout preview, and Supabase Auth integration.
- `supabase-config.js`: Supabase project URL and browser-safe publishable key.
- `AUTH_SETUP.md`: Auth, redirect, SMTP, and email-template setup notes.

The app has no package build step. It can be served as static files. Third-party dependencies and images are fetched from the internet.

## Evaluation Status

Implemented and checked in the current code:

- 46 sample catalog entries and product browsing controls.
- Style finder with keyword scoring across both catalog data formats.
- Product details, demo color/size selection, favorites, cart, and checkout preview.
- Supabase email/password and optional magic-link code paths.

Previously completed checks include JavaScript syntax checks, editor diagnostics, and manual answer-combination checks of the recommender. A browser page has loaded the storefront and the Supabase Auth settings endpoint has responded successfully. No end-to-end account, email-delivery, payment, or user-usability study has been completed.

Recommended evaluation before launch:

- Ask representative shoppers to complete product-finding tasks with and without the quiz.
- Measure task completion, time to a relevant product, quiz abandonment, and shopper-rated relevance.
- Compare quiz recommendations with a simple category/filter baseline.
- Test real inventory, variants, mobile behavior, email verification, passwordless login, and failure states.
- Avoid collecting unnecessary personal information; document consent, retention, privacy, and account deletion behavior.

## Limitations and Risks

- Product names, images, descriptions, prices, colors, sizes, and stock are sample or illustrative data and need verification.
- Several product images and fonts are remotely hosted; availability and rights for commercial use must be confirmed before launch.
- Category-based color and size defaults can mislead if presented as real stock. Replace them with verified SKU-level variants.
- Cart and favorites are not persistent or account-specific.
- The checkout preview is not a purchase flow; no order or payment is processed.
- Custom SMTP is off, and the default Supabase sender is restricted and intended for testing.
- The style finder uses hand-authored keywords and has not been checked for demographic, cultural, or catalog bias.
- No production monitoring, rate-limit strategy, anti-abuse controls, privacy review, or deployment configuration is documented in the prototype.

## Future Work

1. Replace sample product records with verified inventory, SKU-level size/color options, approved photography, and accurate prices.
2. Configure a verified email sender, production HTTPS redirect URLs, and personalized signup and magic-link templates.
3. Add a secure commerce backend for persistent carts, stock validation, order creation, shipping rules, and payment-provider integration.
4. Add account recovery, account deletion, and clear privacy and consent handling.
5. Conduct usability research and compare recommendation quality against non-personalized browsing.
6. Improve catalog tags and recommendation explanations, then measure whether changes actually help shoppers.
7. Test responsive behavior, accessibility, email deliverability, and security before public release.

## References

1. Iyengar, S. S., & Lepper, M. R. (2000). "When choice is demotivating: Can one desire too much of a good thing?" *Journal of Personality and Social Psychology, 79*(6), 995-1006. https://doi.org/10.1037/0022-3514.79.6.995. The study is a general choice-assortment result, not a fashion-specific T-CLOSET evaluation.
2. Arora, N. et al. (2021, November 12). "The value of getting personalization right - or wrong - is multiplying." McKinsey & Company. https://www.mckinsey.com/capabilities/growth-marketing-and-sales/our-insights/the-value-of-getting-personalization-right-or-wrong-is-multiplying. The reported consumer expectations are broad and from 2021.
3. Stitch Fix. "How Stitch Fix works." Official service description. https://www.stitchfix.com/how-it-works.
4. Supabase. "Email Templates." Official Auth template variables and customization documentation. https://supabase.com/docs/guides/auth/auth-email-templates.
