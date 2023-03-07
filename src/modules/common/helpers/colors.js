export function colors (type) {
  const listColors = {
    normal: {
      primary: '#919AA2',
      secondary: '#919AA2',
      third: '#919AA2',
    },
    fighting: {
      primary: '#919AA2',
      secondary: '#919AA2',
      third: '#919AA2',
    },
    flying: {
      primary: '#919AA2',
      secondary: '#919AA2',
      third: '#919AA2',
    },
    poison: {
      primary: '#919AA2',
      secondary: '#919AA2',
      third: '#919AA2',
    },
    rock: {
      primary: 'tomato',
      secondary: 'tomato',
      third: 'tomato',
    },
    bug: {
      primary: 'green',
      secondary: 'green',
      third: 'green',
    },
    ghost: {
      primary: 'gray',
      secondary: 'gray',
      third: 'gray',
    },
    steel: {
      primary: '#919AA2',
      secondary: '#919AA2',
      third: '#919AA2',
    },
    fire: {
      primary: 'red',
      secondary: 'red',
      third: 'red',
    },
    water: {
      primary: 'blue',
      secondary: 'blue',
      third: 'blue',
    },
  }

  return listColors[''] || listColors.normal;
}