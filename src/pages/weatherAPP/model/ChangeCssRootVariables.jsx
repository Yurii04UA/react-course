export function changeCssRootVariables(theme) {
   const root = document.querySelector(":root");
    const components = [
      "--components-backround-",
      "--card-backround-",
      "--text-color-",
      "--shadow-color-",
    ];
    components.forEach((elem) => {
      root.style.setProperty(
        `${elem}default`,
        `var(${elem}${theme})`
      );
    });
}