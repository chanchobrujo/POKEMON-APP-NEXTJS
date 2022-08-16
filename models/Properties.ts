import {PokemonRequiredPropsResponse} from './Response';

export interface PokemonDataProperties {
  val_fem: boolean;
  sprites_male: string[];
  sprites_female: string[];
  data: PokemonRequiredPropsResponse;
  sprites_default: string;
}

export interface PropertiesIcon {
  fill?: string | 'currentColor';
  filled: boolean;
  size?: string;
  height?: string;
  width?: string;
  label?: string;
}
