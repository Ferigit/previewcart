# Next.js(v.14) + Jest + TypeScript + Storybook + react-hook-form

Approach:

1. PreviewCart application is created in stack Next.js, TypeScript, Tailwindcss, Jest, react-testing-library, Storybook.
2. Marketplace (home page) is implemented and filters on projects list as query param is implemented.
3. Cart page is created and manage card is also implemented, so, user can see the cart and update every project's volume or remove the project from cart.(todo: we can get confirmation in modal)
4. Full dynamic form and validation which supports controlled and uncontrolled variants of unit components is implemented by react-hook-form and yup.
5. Unit components such as TextInput, Select, Button, Form, Image are implemented.(todo: we can complete the dynamic form to support all input types)
6. Unit tests for TextInput component is implemented.(todo:we can complete all our own use cases tests).
7. Storybook for TextInput and Button components are implemented.(todo:we can complete all our own use cases stories).
8. Toast notification is added.
9. Linter is configured.


## How to Use
> **Note:** Since Next.js version is v.14, so running platform should have Node.js version 18.17 or later.

[Node.js 18.17](https://nodejs.org/en) or later.


## Clone repo
```bash
git clone https://github.com/Ferigit/previewcart.git
```

## Setup and Run Locally
```bash

1. cd root dir
2. pull main branch
3. yarn (or npm install)
4. yarn dev (or npm run dev)

```
## Run the Storybook
```bash

1. cd root dir
2. pull main branch
3. yarn (or npm install)
4. yarn storybook (or npm run storybook)

```
## Run tests
```bash

1. cd root dir
2. pull main branch
3. yarn (or npm install)
4. yarn test (or npm run test)

```
## Build

```bash
1. cd root dir
3. yarn (or npm install)
3. yarn build (or npm run build)
```


