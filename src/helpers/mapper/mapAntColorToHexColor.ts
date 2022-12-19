const antHexColors: {[key: string]: string} = {
  BLACK: '#222222',
  RED: '#f53d3d',
  SILVER: '#C0C0C0',
};
export const mapAntColorToHexColor = (antColor: string) => {
  return antHexColors[antColor];
};
