
export const value = (resistorColors) => {
  let numberAsString = "";

  resistorColors.forEach((color)=> {
    numberAsString += COLORS.indexOf(color).toString();
  });

  return Number(numberAsString);
};

const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey", "white"];

