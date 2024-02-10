# Valentine's Day Experiment 💖

Love is in the air, and so is code! 💻


<img width="647" alt="Valentines" src="https://github.com/dikshikaaa/Valentines-Day/assets/91119764/c0c7ec60-2059-4e25-951d-67a17adfab37">


## Description

This React application is a Valentine's Day experiment featuring a cute bear and an invitation to be your Valentine. 

Trust me when I say your crush won't say NO!

It displays a playful question: "Will you be my Valentine?" accompanied by two response options: a "Yes" button and a "No" button. If the user tries to press "No," the button insists and cleverly avoids being clicked by saying changing no to a new response like "Are you sure" or"You're breaking my heart" and more, encouraging the user to eventually click "Yes." Upon agreeing, the webpage celebrates the acceptance with a cute GIF. Share some love and enjoy the animations!

## Contributions
Contributions to improve the project are welcome. Please follow these steps to contribute:

Fork the repository.
- Create a new branch for your feature (git checkout -b feature/SomethingNew).
- Commit your changes (git commit -m 'Add some SomethingNew').
- Push to the branch (git push origin feature/SomethingNew).
- Open a Pull Request.

### React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
