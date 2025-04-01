import { Entity, Column, PrimaryColumn, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class Option {
  @PrimaryColumn()
  id: string;

  @Column()
  creator: string;

  @Column({ nullable: true })
  holder: string;

  @Column('bigint')
  strike: bigint;

  @Column('bigint')
  expiry: bigint;

  @Column('bigint')
  premium: bigint;

  @Column()
  type: string;

  @Column()
  status: string;

  @Column('bigint', { nullable: true })
  exercisePrice: bigint;

  @Column('bigint', { nullable: true })
  settlementPrice: bigint;

  @Column('bigint')
  createdAt: bigint;

  @Column('bigint')
  updatedAt: bigint;

  @Column('bigint')
  blockNumber: bigint;
}

@Entity()
export class Vault {
  @PrimaryColumn()
  id: string;

  @Column()
  owner: string;

  @Column('bigint')
  collateral: bigint;

  @Column('bigint')
  ratio: bigint;

  @Column()
  status: string;

  @OneToMany(() => Liquidation, liquidation => liquidation.vault)
  liquidations: Liquidation[];

  @Column('bigint')
  createdAt: bigint;

  @Column('bigint')
  updatedAt: bigint;

  @Column('bigint')
  blockNumber: bigint;
}

@Entity()
export class Liquidation {
  @PrimaryColumn()
  id: string;

  @ManyToOne(() => Vault, vault => vault.liquidations)
  vault: Vault;

  @Column()
  liquidator: string;

  @Column('bigint')
  collateralSeized: bigint;

  @Column('bigint')
  debtRepaid: bigint;

  @Column('bigint')
  timestamp: bigint;

  @Column('bigint')
  blockNumber: bigint;
}

@Entity()
export class Price {
  @PrimaryColumn()
  id: string;

  @Column()
  asset: string;

  @Column('bigint')
  price: bigint;

  @Column('bigint')
  timestamp: bigint;

  @Column('bigint')
  blockNumber: bigint;
}

@Entity()
export class Proposal {
  @PrimaryColumn()
  id: string;

  @Column()
  creator: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column('bigint')
  startBlock: bigint;

  @Column('bigint')
  endBlock: bigint;

  @Column()
  status: string;

  @Column('bigint', { nullable: true })
  executionBlock: bigint;

  @Column()
  executed: boolean;

  @OneToMany(() => Vote, vote => vote.proposal)
  votes: Vote[];

  @Column('bigint')
  createdAt: bigint;

  @Column('bigint')
  updatedAt: bigint;

  @Column('bigint')
  blockNumber: bigint;
}

@Entity()
export class Vote {
  @PrimaryColumn()
  id: string;

  @ManyToOne(() => Proposal, proposal => proposal.votes)
  proposal: Proposal;

  @Column()
  voter: string;

  @Column()
  support: boolean;

  @Column('bigint')
  votingPower: bigint;

  @Column('bigint')
  blockNumber: bigint;
}

@Entity()
export class _Meta_ {
  @PrimaryColumn()
  id: string;

  @Column('bigint')
  lastProcessedBlock: bigint;

  @Column('bigint')
  lastProcessedTimestamp: bigint;

  @Column('bigint')
  totalOptions: bigint;

  @Column('bigint')
  totalVaults: bigint;

  @Column('bigint')
  totalProposals: bigint;

  @Column('bigint')
  totalVotes: bigint;
} 