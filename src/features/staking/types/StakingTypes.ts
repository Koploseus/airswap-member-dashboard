import { TransactionReceipt } from "viem";
import { useQuery } from "wagmi";

export enum TxType {
  STAKE = "stake",
  UNSTAKE = "unstake",
}

export type Status = ReturnType<typeof useQuery>["status"];
export type TransactionStatusLookup = { [key: string]: Status };

export type TransactionHashLookup = {
  [key: string]: TransactionReceipt | undefined;
};
export type TransactionErrorLookup = {
  [key: string]: boolean;
};

export enum ChainId {
  Mainnet = 1,
  Sepolia = 11155111,
}

export enum ContractVersion {
  "LATEST",
  "V4",
}

export type ApprovalLogType = {
  address?: string;
  args?: {
    owner?: `0x${string}`;
    spender?: `0x${string}`;
    value?: bigint;
  };
  blockHash?: `0x${string}` | null;
  blockNumber?: bigint | null;
  data: `0x${string}`;
  eventName?: string;
  logIndex?: number | null;
  removed?: boolean;
  topics: [] | [signature: `0x${string}`, ...args: `0x${string}`[]]; // Allow empty array or populated array
  transactionHash?: `0x${string}` | null;
  transactionIndex?: number | null;
};
