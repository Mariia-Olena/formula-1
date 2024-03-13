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

export interface WorldChampionInterface {
  id: number;
  name: string;
  numTitles: string;
  photo: string;
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

export async function getWorldChampions() {
  const { data, error } = await supabase.from('worldChampions').select('*');

  if (error) {
    console.error(error);
    throw new Error('Champions could not be loaded');
  }

  const worldChampions: WorldChampionInterface[] = data;

  return worldChampions;
}

function transformChampions(arr: ChampionApiInterface[]): ChampionInterface[] {
  return arr.map((item) => {
    const key = +Object.keys(item)[0];
    return { ...item[key], year: key };
  });
}
