
const dnaToRnaMap = {
  'G' : 'C',
  'C' : 'G',
  'T' : 'A',
  'A' : 'U'
}

function mapDnaToRnaNucleotide (dnaNucleotide){
  return dnaToRnaMap[dnaNucleotide];
}

export const toRna = (dnaNucleotides) => {
  return dnaNucleotides.split('').map(mapDnaToRnaNucleotide).join('');
}

