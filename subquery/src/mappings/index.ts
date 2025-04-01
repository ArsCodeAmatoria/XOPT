import { SubstrateEvent } from '@subql/types';
import { Option, Vault, Liquidation, Price, Proposal, Vote, _Meta_ } from '../types';
import { getMeta } from './meta';

// Options Events
export async function handleOptionCreated(event: SubstrateEvent): Promise<void> {
  const [creator, optionId, strike, expiry, premium, type] = event.event.data.toJSON();
  
  const option = new Option(optionId.toString());
  option.creator = creator.toString();
  option.strike = BigInt(strike);
  option.expiry = BigInt(expiry);
  option.premium = BigInt(premium);
  option.type = type.toString();
  option.status = 'active';
  option.createdAt = BigInt(event.block.timestamp.getTime());
  option.updatedAt = BigInt(event.block.timestamp.getTime());
  option.blockNumber = BigInt(event.block.block.header.number.toNumber());
  
  await option.save();
  
  const meta = await getMeta();
  meta.totalOptions = meta.totalOptions + BigInt(1);
  await meta.save();
}

export async function handleOptionExercised(event: SubstrateEvent): Promise<void> {
  const [optionId, holder, exercisePrice] = event.event.data.toJSON();
  
  const option = await Option.get(optionId.toString());
  if (option) {
    option.holder = holder.toString();
    option.exercisePrice = BigInt(exercisePrice);
    option.status = 'exercised';
    option.updatedAt = BigInt(event.block.timestamp.getTime());
    await option.save();
  }
}

export async function handleOptionSettled(event: SubstrateEvent): Promise<void> {
  const [optionId, settlementPrice] = event.event.data.toJSON();
  
  const option = await Option.get(optionId.toString());
  if (option) {
    option.settlementPrice = BigInt(settlementPrice);
    option.status = 'settled';
    option.updatedAt = BigInt(event.block.timestamp.getTime());
    await option.save();
  }
}

// Vault Events
export async function handleVaultCreated(event: SubstrateEvent): Promise<void> {
  const [owner, vaultId, collateral, ratio] = event.event.data.toJSON();
  
  const vault = new Vault(vaultId.toString());
  vault.owner = owner.toString();
  vault.collateral = BigInt(collateral);
  vault.ratio = BigInt(ratio);
  vault.status = 'active';
  vault.createdAt = BigInt(event.block.timestamp.getTime());
  vault.updatedAt = BigInt(event.block.timestamp.getTime());
  vault.blockNumber = BigInt(event.block.block.header.number.toNumber());
  
  await vault.save();
  
  const meta = await getMeta();
  meta.totalVaults = meta.totalVaults + BigInt(1);
  await meta.save();
}

export async function handleVaultLiquidated(event: SubstrateEvent): Promise<void> {
  const [vaultId, liquidator, collateralSeized, debtRepaid] = event.event.data.toJSON();
  
  const vault = await Vault.get(vaultId.toString());
  if (vault) {
    vault.status = 'liquidated';
    vault.updatedAt = BigInt(event.block.timestamp.getTime());
    await vault.save();
    
    const liquidation = new Liquidation(`${vaultId}-${event.block.block.header.number.toNumber()}`);
    liquidation.vault = vault;
    liquidation.liquidator = liquidator.toString();
    liquidation.collateralSeized = BigInt(collateralSeized);
    liquidation.debtRepaid = BigInt(debtRepaid);
    liquidation.timestamp = BigInt(event.block.timestamp.getTime());
    liquidation.blockNumber = BigInt(event.block.block.header.number.toNumber());
    
    await liquidation.save();
  }
}

// Oracle Events
export async function handlePriceUpdated(event: SubstrateEvent): Promise<void> {
  const [asset, price] = event.event.data.toJSON();
  
  const priceEntity = new Price(`${asset}-${event.block.block.header.number.toNumber()}`);
  priceEntity.asset = asset.toString();
  priceEntity.price = BigInt(price);
  priceEntity.timestamp = BigInt(event.block.timestamp.getTime());
  priceEntity.blockNumber = BigInt(event.block.block.header.number.toNumber());
  
  await priceEntity.save();
}

// Governance Events
export async function handleGovernanceProposed(event: SubstrateEvent): Promise<void> {
  const [creator, proposalId, title, description, startBlock, endBlock] = event.event.data.toJSON();
  
  const proposal = new Proposal(proposalId.toString());
  proposal.creator = creator.toString();
  proposal.title = title.toString();
  proposal.description = description.toString();
  proposal.startBlock = BigInt(startBlock);
  proposal.endBlock = BigInt(endBlock);
  proposal.status = 'active';
  proposal.executed = false;
  proposal.createdAt = BigInt(event.block.timestamp.getTime());
  proposal.updatedAt = BigInt(event.block.timestamp.getTime());
  proposal.blockNumber = BigInt(event.block.block.header.number.toNumber());
  
  await proposal.save();
  
  const meta = await getMeta();
  meta.totalProposals = meta.totalProposals + BigInt(1);
  await meta.save();
}

export async function handleGovernanceVoted(event: SubstrateEvent): Promise<void> {
  const [proposalId, voter, support, votingPower] = event.event.data.toJSON();
  
  const vote = new Vote(`${proposalId}-${voter}`);
  vote.proposal = await Proposal.get(proposalId.toString());
  vote.voter = voter.toString();
  vote.support = support as boolean;
  vote.votingPower = BigInt(votingPower);
  vote.blockNumber = BigInt(event.block.block.header.number.toNumber());
  
  await vote.save();
  
  const meta = await getMeta();
  meta.totalVotes = meta.totalVotes + BigInt(1);
  await meta.save();
}

export async function handleGovernanceExecuted(event: SubstrateEvent): Promise<void> {
  const [proposalId] = event.event.data.toJSON();
  
  const proposal = await Proposal.get(proposalId.toString());
  if (proposal) {
    proposal.status = 'executed';
    proposal.executed = true;
    proposal.executionBlock = BigInt(event.block.block.header.number.toNumber());
    proposal.updatedAt = BigInt(event.block.timestamp.getTime());
    await proposal.save();
  }
} 