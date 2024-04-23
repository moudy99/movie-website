module.exports = function (plop) {
  plop.setGenerator("component", {
    description: "Generate a React component with CSS file",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component name (PascalCase):",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.jsx",
        templateFile: "plop-templates/Component.jsx.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.css",
        templateFile: "plop-templates/Component.css.hbs",
      },
    ],
  });
};
