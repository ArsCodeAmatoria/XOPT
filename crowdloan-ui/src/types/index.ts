import { InjectedAccount } from '@polkadot/extension-inject/types'

export interface WalletState {
  accounts: InjectedAccount[]
  isConnecting: boolean
}

export interface CrowdloanFormData {
  amount: number
  address: string
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any
    }
  }
} 