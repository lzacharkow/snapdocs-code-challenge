This is my boilerplate for the Snapdocs code challenge.

# Setup & Running it
```
yarn install && yarn start
```

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
- Filters. (this would take more time than the total 2 hours allows)
- Add new employee button.
- Pagination

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
- Application-wide error banner communicates if there was a problem getting employee data.

_🕓 Features for later:_
- Account & admin links in the header.
