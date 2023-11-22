import {
  Approval as ApprovalEvent,
  ConsumedProof as ConsumedProofEvent,
  NearToEthTransferFinalised as NearToEthTransferFinalisedEvent,
  Transfer as TransferEvent,
  TransferToNearInitiated as TransferToNearInitiatedEvent
} from "../generated/eNear/eNear"
import {
  Approval,
  ConsumedProof,
  NearToEthTransferFinalised,
  Transfer,
  TransferToNearInitiated
} from "../generated/schema"

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleConsumedProof(event: ConsumedProofEvent): void {
  let entity = new ConsumedProof(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._receiptId = event.params._receiptId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNearToEthTransferFinalised(
  event: NearToEthTransferFinalisedEvent
): void {
  let entity = new NearToEthTransferFinalised(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.amount = event.params.amount
  entity.recipient = event.params.recipient

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransferToNearInitiated(
  event: TransferToNearInitiatedEvent
): void {
  let entity = new TransferToNearInitiated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.sender = event.params.sender
  entity.amount = event.params.amount
  entity.accountId = event.params.accountId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
