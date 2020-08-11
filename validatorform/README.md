## Form component with versatile validators

I saw inspiration on this on reddit somewhere but couldnt find it since.
The basic idea is a react component i can drop into projects if needed
where i can customize what inputs go in and what validators to have on each
input.

## What technologies did i use?

This is a pure react component with [tabler icons](https://tablericons.com/)

## How can i try this out myself?

I've made it pretty simple. Clone the repo and follow these steps:

- cd into /validatorform
- run npm i to install react dependencies
- run npm start
- Now you can type into the input fields to test!

## How can i customise to use in my project?

**form title/theme colours**
In app.js you can change the form title and the theme colours for the form.
There are three colours at the moment with increasing shades -

- lightColour
- darkColour
- darkestColour

**validator icons**
To change incorrect/correct validation icons you can find the svg's stored in the src/static/ folder.
Replace with your own icons if you would like.

**adding more input fields?**
In app.js just insert more <ValidatorInput /> components. Pass the colour, label, and validator props to it.
If the label is password, the input field will be configured to not show what the user types(password field).
Validators prop is an array of validator names. The names are the components found in the validators folder.

**button/form submitting functionality**
The button for testing doesn't lead to anywhere and doesn't submit anywhere. To change this -

- in app.js there is a submitHandler function. Customize this to your needs.

**changing minLength's validation requirement**
Right now you have to manually enter the number in ValidatorInput.js and will apply to all minLength validations
