This is my boilerplate for the Snapdocs code challenge.

**Contents:**
* [Setup & Running it](#setup--running-it)
* [Boilerplate](#boilerplate-info)
* [The prompt](#the-prompt)
* [Taking it further](#taking-it-further)
	* [Step 1: Who is this for?](#step-1-who-is-this-for)
	* [Step 2: Define design goals.](#step-2-define-design-goals)
	* [Step 3: Design!](#step-3-design)
	* [Step 4: Build common components](#step-4-build-common-components)
	* [Step 5: Assemble the pages.](#step-5-assemble-the-pages)

# Setup & Running it
* Setup: `yarn install`
* Running it: `yarn start`
* Running storybook (to see the components): `yarn run build-css && yarn run storybook`

# Boilerplate info
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

I added these integrations:
- SCSS & base styles
- Redux & thunks
- React-router
- Firebase

# The prompt
Build an HR tool that lists employees within a company and has the ability to view the details of a single employee. The employee list should support filtering by attributes such as "active/inactive".

_Note: I removed the sticky header from the prompt because I didn't think it added anything useful to the app. Fixed headers/footers are great when they hold important links or information that persist across pages (like a shopping cart on an e-commerce site that guides customers to checkout). But for this app in its current scale, I felt it wasn't necessary. I added breadcrumbs for navigation and account links into a relatively positioned header as you'll see later..._

## What we finished on Thursday
- Integrated Redux with Firebase so that the app would instantly update with the latest database information.
- Set up routes for the employee list and employee page.
- Created basic components for each page that connect with the redux store to grab the data they need.

# Taking it further...
While there are many directions I could take the project over the weekend (advanced filtering, writing to the database, integrating tests), I focused on building out the UI of the application.

I began the way I like to begin every design project—by setting user-centered design goals. Here's my design process.

## Step 1: Who is this for?
My decision-making framework always centers around _**who**_ the product is intended for. For example: What are they trying to do (e.g., Are they looking for specific bits of information or overall trends)? What's their mental model of the information we're presenting to them (e.g., Do they organize employees by name or team)? What are external factors are at play (e.g., Do their superiors evaluate them on quality or speed)?

I'd begin by asking the above questions and many more to the product manager, designer, or directly to a few target users (if it was possible). For our purposes, let's pretend I did that, and I came to the following assumptions about our target user, an HR Representative:

### HR Representative persona
* **What major tasks do they need to accomplish with our tool?**
	* Add, edit, and look up employee information many times on a daily basis.
* **How do they usually search for employees?**
	* By name.
* **What common issues do they experience?**
	* Finding a specific employee quickly becomes difficult when the list of past and current employees gets really long. Sometimes, inactive employees are confused with active ones.

## Step 2: Define design goals.
Based on the information we know about our target user, here are the design goals that will inform the design language of the application:

1. Display lots of information in an easily digestible and scannable way.
2. Make everything feel fast and snappy—this is a task-driven tool, not a browsing/casual experience.
3. Surface important information so that the user doesn't have to dig for it (e.g., Clearly show if an employee is active or not).

## Step 3: Design!
I like designing outside of code when I have the time. This lets me focus on the big picture instead of unintentionally making design decisions based on programming constraints.

Here's the design I made in Sketch. You can find all of the mockups and source files in the [design folder](/designs).

_Note: My fake app is called "Employee World" and has an intentionally bad logo._

### Employee list
#### Default
![Employee List](/designs/Employee%20List/Default.png)

#### With filters shown
![With filters shown](/designs/Employee%20List/Filters%20shown.png)

#### With filters collapsed and applied
![With filters collapsed and applied](/designs/Employee%20List/Filters%20applied.png)

#### ✅ Features implemented in code:
- Inactive employees take inactive styles.

_🕓 Features for later:_
- Filters.
- Add new employee button.
- Pagination.

### Employee profile

#### Default (active employee)
![Employee - active](/designs/Employee%20Profile/Active.png)

#### Not active
![Employee - not active](/designs/Employee%20Profile/Not%20active.png)

#### ✅ Features implemented in code:
- Inactive banner quickly communicates active/inactive.
- Breadcrumbs

_🕓 Features for later:_
- Edit mode.

### Global
![Header and Notification](/designs/Global/Header%20and%20Notification.png)

#### ✅ Features implemented in code:
- Static header

_🕓 Features for later:_
- Error banner synced with Firebase. (I made an error banner that you can see when you run storybook but I didn't hook it up to any real error events.)
- Authentication

## Step 4: Build common components
A few patterns/components emerge from the designs:
- Status banners (built)
- Buttons (built)
- Breadcrumbs (built)
- Text Inputs
- Checkboxes

I leveraged [Storybook](https://storybook.js.org/) to build a few of these and test all the states.

**To see the components,** compile the styles `yarn run watch-css` then run storybook `yarn run storybook`.

## Step 5: Assemble the pages.
To see it, run it! `yarn start`.

### Some thoughts that drove the way I built it...
- **Connected components instead of passed props.** I like making components that talk directly to Redux to get the information they need. This ensures that every component has fresh data coming straight from the source. I've been burnt in the past from passing props from one child to another until the props end up getting semantically abstracted and confusing, or they don't update as expected because somewhere up the chain there was a problem. Connected components feel "flatter" to me, and therefore behave more reliably.
- **ITCSS style organization.** I organized my boilerplate design system (`styles/design-system`) using [ITCSS (Inverted Triangle CSS)](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/) methodology, which organizes styles according to the cascade. This ensures that elemental pieces like variables and mixins are defined before they're used by larger elements like objects and components.
- **BEM css naming conventions.** Just like I mentioned that I like connected components because they feel "flat" and behave more reliably, I like [BEM (Block, Element, Modifier)](http://getbem.com/) CSS because it allows flat but semantically clear class names. And I've gotten great feedback from my CSS-averse peers who've said BEM class names make it easy to de-bug CSS.
- **A light but flexible design system.** There are two main problems I've come across working with design systems that I've attempted to solve here:
	1. _Issue:_ Design systems result in style duplication when imported by many different components.
		* _Solution:_ This design system only includes SCSS variables, mixins, and placeholders. When used alone, these things don't compile to any real CSS—they need to be referenced or extended to compile. Therefore, the component only uses what it needs and compiles just enough CSS.
	2. _Issue:_ Inheritance issues arise when many classes leverage but modify the same styles.
		* _Solution:_ Because this design system declares sharable styles as [placeholders](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#Placeholder_Selectors___foo) which are `@extend`-ed by BEM-style name-spaced classes on each component, inheritance issues are avoided. If a class needs to be shared across many components, it can go in `styles/base-styles`, which are imported once at the root of the project in `App.js` and available without declaration to all child elements.
- **White-label ready.** If you change the `$client-primary-color` variable in the styles you'll see all of the colors change in the app. (Admittedly, this doesn't hold up if you use light colors... but you get the idea!)

## What I'd do next
1. Build more functionality like filters and pagination. To make filters, I would dispatch actions from the filter components and store the current selections in redux, then I would filter the employee list by those selections in [`EmployeeListContainer`](https://github.com/lzacharkow/snapdocs-code-challenge/blob/master/src/components/EmployeesList/EmployeesListContainer.js), where I'm already mapping the employees to a list form.
2. Write unit tests where they're useful.
