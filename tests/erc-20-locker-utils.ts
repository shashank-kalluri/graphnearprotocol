import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import { Locked, Unlocked } from "../generated/ERC20Locker/ERC20Locker"

export function createLockedEvent(
  token: Address,
  sender: Address,
  amount: BigInt,
  accountId: string
): Locked {
  let lockedEvent = changetype<Locked>(newMockEvent())

  lockedEvent.parameters = new Array()

  lockedEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  lockedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  lockedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  lockedEvent.parameters.push(
    new ethereum.EventParam("accountId", ethereum.Value.fromString(accountId))
  )

  return lockedEvent
}

export function createUnlockedEvent(
  amount: BigInt,
  recipient: Address
): Unlocked {
  let unlockedEvent = changetype<Unlocked>(newMockEvent())

  unlockedEvent.parameters = new Array()

  unlockedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  unlockedEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )

  return unlockedEvent
}
