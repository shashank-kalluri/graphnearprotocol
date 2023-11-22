import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  Approval,
  ConsumedProof,
  NearToEthTransferFinalised,
  Transfer,
  TransferToNearInitiated
} from "../generated/eNear/eNear"

export function createApprovalEvent(
  owner: Address,
  spender: Address,
  value: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return approvalEvent
}

export function createConsumedProofEvent(_receiptId: Bytes): ConsumedProof {
  let consumedProofEvent = changetype<ConsumedProof>(newMockEvent())

  consumedProofEvent.parameters = new Array()

  consumedProofEvent.parameters.push(
    new ethereum.EventParam(
      "_receiptId",
      ethereum.Value.fromFixedBytes(_receiptId)
    )
  )

  return consumedProofEvent
}

export function createNearToEthTransferFinalisedEvent(
  amount: BigInt,
  recipient: Address
): NearToEthTransferFinalised {
  let nearToEthTransferFinalisedEvent = changetype<NearToEthTransferFinalised>(
    newMockEvent()
  )

  nearToEthTransferFinalisedEvent.parameters = new Array()

  nearToEthTransferFinalisedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  nearToEthTransferFinalisedEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )

  return nearToEthTransferFinalisedEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  value: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return transferEvent
}

export function createTransferToNearInitiatedEvent(
  sender: Address,
  amount: BigInt,
  accountId: string
): TransferToNearInitiated {
  let transferToNearInitiatedEvent = changetype<TransferToNearInitiated>(
    newMockEvent()
  )

  transferToNearInitiatedEvent.parameters = new Array()

  transferToNearInitiatedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  transferToNearInitiatedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  transferToNearInitiatedEvent.parameters.push(
    new ethereum.EventParam("accountId", ethereum.Value.fromString(accountId))
  )

  return transferToNearInitiatedEvent
}
