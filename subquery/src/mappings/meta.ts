import { _Meta_ } from '../types';

export async function getMeta(): Promise<_Meta_> {
  let meta = await _Meta_.get('meta');
  
  if (!meta) {
    meta = new _Meta_('meta');
    meta.lastProcessedBlock = BigInt(0);
    meta.lastProcessedTimestamp = BigInt(0);
    meta.totalOptions = BigInt(0);
    meta.totalVaults = BigInt(0);
    meta.totalProposals = BigInt(0);
    meta.totalVotes = BigInt(0);
    await meta.save();
  }
  
  return meta;
}

export async function updateMeta(blockNumber: bigint, timestamp: bigint): Promise<void> {
  const meta = await getMeta();
  meta.lastProcessedBlock = blockNumber;
  meta.lastProcessedTimestamp = timestamp;
  await meta.save();
} 