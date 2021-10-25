import { HexString } from "@ckb-lumos/base";
import { BlockParameter } from "../methods/types";

export interface FilterObject {
  address?: HexString;
  fromBlock?: BlockParameter;
  toBlock?: BlockParameter;
  topics?: FilterTopic[];
  blockHash?: HexString;
}

export type FilterTopic = HexString | null | HexString[];

export enum FilterFlag {
  blockFilter = 1,
  pendingTransaction = 2,
}

export type FilterType = FilterObject | FilterFlag; // 1: block filter 2: pending transaction filter
