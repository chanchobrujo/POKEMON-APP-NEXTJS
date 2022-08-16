export interface PokeApiResponse {
  count?: number;
  next?: string;
  previous?: object;
  results: PokemonShortResponse[];
}

export interface PokemonRequiredPropsResponse {
  id: number;
  name: string;
}

export interface PokemonShortResponse extends PokemonRequiredPropsResponse {
  url: string;
}

export interface PokemonLongResponse extends PokemonRequiredPropsResponse {
  sprites: Sprites;
  abilities: Ability[];
  base_experience?: number;
  forms?: Species[];
  game_indices?: GameIndex[];
  height?: number;
  held_items?: any[];
  is_default?: boolean;
  location_area_encounters?: string;
  moves?: Move[];
  order?: number;
  past_types?: any[];
  species?: Species;
  stats?: Stat[];
  types?: Type[];
  weight?: number;
}

export interface Ability {
  ability?: Species;
  is_hidden?: boolean;
  slot?: number;
}

export interface Species {
  name?: string;
  url?: string;
}

export interface GameIndex {
  game_index?: number;
  version?: Species;
}

export interface Move {
  move?: Species;
  version_group_details?: VersionGroupDetail[];
}

export interface VersionGroupDetail {
  level_learned_at?: number;
  move_learn_method?: Species;
  version_group?: Species;
}

export interface Versions {
  'generation-i'?: GenerationI;
  'generation-ii'?: GenerationIi;
  'generation-iii'?: GenerationIii;
  'generation-iv'?: GenerationIv;
  'generation-v'?: GenerationV;
  'generation-vi'?: {[key: string]: Home};
  'generation-vii'?: GenerationVii;
  'generation-viii'?: GenerationViii;
}

export interface Sprites {
  back_default: string;
  back_female?: string;
  back_shiny: string;
  back_shiny_female?: string;
  front_default: string;
  front_female?: string;
  front_shiny: string;
  front_shiny_female?: string;
  other: Other;
  versions?: Versions;
  animated?: Sprites;
}

export interface Other {
  'home'?: Home;
  'dream_world'?: DreamWorld;
  'official-artwork': OfficialArtwork;
}

export interface Home {
  front_default?: string;
  front_female?: string;
  front_shiny?: string;
  front_shiny_female?: string;
}

export interface DreamWorld {
  front_default?: string;
  front_female?: string;
}

export interface OfficialArtwork {
  front_default: string;
}

export interface Stat {
  base_stat?: number;
  effort?: number;
  stat?: Species;
}

export interface Type {
  slot?: number;
  type?: Species;
}

//generations
export interface GenerationI {
  'red-blue'?: RedBlue;
  'yellow'?: RedBlue;
}

export interface GenerationIi {
  crystal?: Crystal;
  gold?: Gold;
  silver?: Gold;
}

export interface GenerationIii {
  'emerald'?: Emerald;
  'firered-leafgreen'?: Gold;
  'ruby-sapphire'?: Gold;
}

export interface GenerationIv {
  'diamond-pearl'?: Sprites;
  'heartgold-soulsilver'?: Sprites;
  'platinum'?: Sprites;
}

export interface GenerationV {
  'black-white'?: Sprites;
}

export interface GenerationVi {
  'omegaruby-alphasapphire'?: OmegarubyAlphasapphire;
  'x-y'?: XY;
}

export interface GenerationVii {
  'icons'?: DreamWorld;
  'ultra-sun-ultra-moon'?: Home;
}

export interface GenerationViii {
  icons?: DreamWorld;
}

//games-versions
export interface RedBlue {
  back_default?: string;
  back_gray?: string;
  back_transparent?: string;
  front_default?: string;
  front_gray?: string;
  front_transparent?: string;
}

export interface Crystal {
  back_default?: string;
  back_shiny?: string;
  back_shiny_transparent?: string;
  back_transparent?: string;
  front_default?: string;
  front_shiny?: string;
  front_shiny_transparent?: string;
  front_transparent?: string;
}

export interface Gold {
  back_default?: string;
  back_shiny?: string;
  front_default?: string;
  front_shiny?: string;
  front_transparent?: string;
}

export interface Emerald {
  front_default?: string;
  front_shiny?: string;
}

export interface OmegarubyAlphasapphire extends Home {}

export interface XY extends Home {}
