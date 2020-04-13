import json from '../../../../../config/settings_data.json';
import { Feature } from '../models/feature';

export function isActive(featureName: string) {
  if (json == null) {
    throw new Error("Couldn't obtain settings file.");
  }

  if (json.features == null) {
    throw new Error("Features section not specified in the settings file.")
  }

  // eslint-disable-next-line
  const untypedJson = json as any;

  const feature = untypedJson.features[featureName] as Feature;
  if (feature == null) {
    return false;
  }

  // todo: here should be hard if-else logics
  // todo: implement tests

  return feature.IsActive;
}


