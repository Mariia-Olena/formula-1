import supabase from './supabase';

interface ChampionApiInterface {
  [key: number]: {
    name: string;
    constructor: string;
  };
}

export interface ChampionInterface {
  year: number;
  name: string;
  constructor: string;
}

function transformChampions(arr: ChampionApiInterface[]): ChampionInterface[] {
  return arr.map((item) => {
    const key = +Object.keys(item)[0];
    return { ...item[key], year: key };
  });
}

export async function getChampions() {
  const { data, error } = await supabase.from('champions').select('*');

  if (error) {
    console.error(error);
    throw new Error('Champions could not be loaded');
  }

  const champions: ChampionInterface[] = transformChampions([
    ...data[0].champions!,
  ]);

  return champions;
}
