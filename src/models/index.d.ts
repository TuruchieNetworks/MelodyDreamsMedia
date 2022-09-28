import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type MelodyDreamsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class MelodyDreams {
  readonly id: string;
  readonly username?: string | null;
  readonly followers?: number | null;
  readonly follow?: boolean | null;
  readonly like?: string | null;
  readonly image?: string | null;
  readonly likes?: number | null;
  readonly about?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<MelodyDreams, MelodyDreamsMetaData>);
  static copyOf(source: MelodyDreams, mutator: (draft: MutableModel<MelodyDreams, MelodyDreamsMetaData>) => MutableModel<MelodyDreams, MelodyDreamsMetaData> | void): MelodyDreams;
}