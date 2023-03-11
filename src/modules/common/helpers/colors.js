export function colors(type) {
  const listColors = {
    normal: {
      primary: "#919AA2",
      secondary: "#F1F2F3",
    },
    fighting: {
      primary: "#CE416B",
      secondary: "#F8E9EE",
    },
    flying: {
      primary: "#89AAE3",
      secondary: "#F1F4FA",
    },
    poison: {
      primary: "#B567CE",
      secondary: "#F5EDF8",
    },
    ground: {
      primary: "#D97845",
      secondary: "#F9EFEA",
    },
    rock: {
      primary: "#C5B78C",
      secondary: "#F7F5F1",
    },
    bug: {
      primary: "#91C12F",
      secondary: "#F1F6E8",

    },
    ghost: {
      primary: "#5269AD",
      secondary: "#EBEDF4",
    },
    steel: {
      primary: "#5A8EA2",
      secondary: "#ECF1F3",
    },
    fire: {
      primary: "#FF9D55",
      secondary: "#FCF3EB",
    },
    water: {
      primary: "#5090D6",
      secondary: "#EBF1F8",
    },
    grass: {
      primary: "#63BC5A",
      secondary: "#EDF6EC",
    },

    electric: {
      primary: "#F4D23C",
      secondary: "#FBF8E9",
    },
    psychic: {
      primary: "#FA7179",
      secondary: "#FCEEEF",
    },
    ice: {
      primary: "#73CEC0",
      secondary: "#F1FBF9",
    },
    dragon: {
      primary: "#0B6DC3",
      secondary: "#E4EEF6",
    },
    dark: {
      primary: "#5A5465",
      secondary: "#ECEBED",
    },
    fairy: {
      primary: "#EC8FE6",
      secondary: "#FBF1FA",
    },
    unknown: {
      primary: "blue",
      secondary: "blue",
    },
    shadow: {
      primary: "blue",
      secondary: "blue",
    },
  };

  return listColors[type] || listColors.normal;
}
