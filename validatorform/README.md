## Form component with versatile validators

I saw inspiration on this on reddit somewhere but couldnt find it since.
The basic idea is a react component i can drop into projects if needed
where i can customize what inputs go in and what validators to have on each
input.

## What technologies did i use?

This is pure react.

## How can i try this out myself?

I've made it pretty simple. Clone the repo and follow these steps:

- cd into /validatorform
- run npm i to install react dependencies
- run npm start
- Now you can type into the input fields to test.

## How can i customise to use in my project?

**button/form submitting functionality**
The button tells you whever the form is overall valid or not. To change this -

- in app.js there is a formHandler function. Ive set up outputs for valid/invalid overall form, you can customize these sections to change what happens.
