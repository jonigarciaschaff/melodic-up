const musicalNotes = [
  'DO',
  'RE',
  'MI',
  'FA',
  'SOL',
  'LA',
  'SI',
]

const americanMusicalNotes = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G'
]

const sharps = [
  'DO#',
  'RE#',
  'FA#',
  'SOL#',
  'LA#',
]

const americanSharps = [
  'C#',
  'D#',
  'F#',
  'G#',
  'A#',
]

const flats = [
  'REb',
  'MIb',
  'SOLb',
  'LAb',
  'SIb',
]

const americanFlats = [
  'Db',
  'Eb',
  'Gb',
  'Ab',
  'Bb',
]

export const getRandomMusicalNotes = (
  MN, AMN, S, AS, F, AF
) => {
  let result = []

  if(MN){
    result = result.concat(musicalNotes)
  }

  if(AMN){
    result = result.concat(americanMusicalNotes)
  }

  if(S){
    result = result.concat(sharps)
  }

  if(AS){
    result = result.concat(americanSharps)
  }

  if(F){
    result = result.concat(flats)
  }

  if(AF){
    result = result.concat(americanFlats)
  }

  const randomIndex = Math.floor(Math.random() * (result.length - 0) + 0);

  return result[randomIndex]
  
}