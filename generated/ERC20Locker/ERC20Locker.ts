// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Locked extends ethereum.Event {
  get params(): Locked__Params {
    return new Locked__Params(this);
  }
}

export class Locked__Params {
  _event: Locked;

  constructor(event: Locked) {
    this._event = event;
  }

  get token(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get accountId(): string {
    return this._event.parameters[3].value.toString();
  }
}

export class Unlocked extends ethereum.Event {
  get params(): Unlocked__Params {
    return new Unlocked__Params(this);
  }
}

export class Unlocked__Params {
  _event: Unlocked;

  constructor(event: Unlocked) {
    this._event = event;
  }

  get amount(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get recipient(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class ERC20Locker extends ethereum.SmartContract {
  static bind(address: Address): ERC20Locker {
    return new ERC20Locker("ERC20Locker", address);
  }

  admin(): Address {
    let result = super.call("admin", "admin():(address)", []);

    return result[0].toAddress();
  }

  try_admin(): ethereum.CallResult<Address> {
    let result = super.tryCall("admin", "admin():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  minBlockAcceptanceHeight_(): BigInt {
    let result = super.call(
      "minBlockAcceptanceHeight_",
      "minBlockAcceptanceHeight_():(uint64)",
      []
    );

    return result[0].toBigInt();
  }

  try_minBlockAcceptanceHeight_(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "minBlockAcceptanceHeight_",
      "minBlockAcceptanceHeight_():(uint64)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  nearTokenFactory_(): Bytes {
    let result = super.call(
      "nearTokenFactory_",
      "nearTokenFactory_():(bytes)",
      []
    );

    return result[0].toBytes();
  }

  try_nearTokenFactory_(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "nearTokenFactory_",
      "nearTokenFactory_():(bytes)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  paused(): BigInt {
    let result = super.call("paused", "paused():(uint256)", []);

    return result[0].toBigInt();
  }

  try_paused(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("paused", "paused():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  prover_(): Address {
    let result = super.call("prover_", "prover_():(address)", []);

    return result[0].toAddress();
  }

  try_prover_(): ethereum.CallResult<Address> {
    let result = super.tryCall("prover_", "prover_():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  usedProofs_(param0: Bytes): boolean {
    let result = super.call("usedProofs_", "usedProofs_(bytes32):(bool)", [
      ethereum.Value.fromFixedBytes(param0)
    ]);

    return result[0].toBoolean();
  }

  try_usedProofs_(param0: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall("usedProofs_", "usedProofs_(bytes32):(bool)", [
      ethereum.Value.fromFixedBytes(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get nearTokenFactory(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get prover(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get minBlockAcceptanceHeight(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _admin(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get pausedFlags(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AdminDelegatecallCall extends ethereum.Call {
  get inputs(): AdminDelegatecallCall__Inputs {
    return new AdminDelegatecallCall__Inputs(this);
  }

  get outputs(): AdminDelegatecallCall__Outputs {
    return new AdminDelegatecallCall__Outputs(this);
  }
}

export class AdminDelegatecallCall__Inputs {
  _call: AdminDelegatecallCall;

  constructor(call: AdminDelegatecallCall) {
    this._call = call;
  }

  get target(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get data(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class AdminDelegatecallCall__Outputs {
  _call: AdminDelegatecallCall;

  constructor(call: AdminDelegatecallCall) {
    this._call = call;
  }

  get value0(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class AdminPauseCall extends ethereum.Call {
  get inputs(): AdminPauseCall__Inputs {
    return new AdminPauseCall__Inputs(this);
  }

  get outputs(): AdminPauseCall__Outputs {
    return new AdminPauseCall__Outputs(this);
  }
}

export class AdminPauseCall__Inputs {
  _call: AdminPauseCall;

  constructor(call: AdminPauseCall) {
    this._call = call;
  }

  get flags(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class AdminPauseCall__Outputs {
  _call: AdminPauseCall;

  constructor(call: AdminPauseCall) {
    this._call = call;
  }
}

export class AdminReceiveEthCall extends ethereum.Call {
  get inputs(): AdminReceiveEthCall__Inputs {
    return new AdminReceiveEthCall__Inputs(this);
  }

  get outputs(): AdminReceiveEthCall__Outputs {
    return new AdminReceiveEthCall__Outputs(this);
  }
}

export class AdminReceiveEthCall__Inputs {
  _call: AdminReceiveEthCall;

  constructor(call: AdminReceiveEthCall) {
    this._call = call;
  }
}

export class AdminReceiveEthCall__Outputs {
  _call: AdminReceiveEthCall;

  constructor(call: AdminReceiveEthCall) {
    this._call = call;
  }
}

export class AdminSendEthCall extends ethereum.Call {
  get inputs(): AdminSendEthCall__Inputs {
    return new AdminSendEthCall__Inputs(this);
  }

  get outputs(): AdminSendEthCall__Outputs {
    return new AdminSendEthCall__Outputs(this);
  }
}

export class AdminSendEthCall__Inputs {
  _call: AdminSendEthCall;

  constructor(call: AdminSendEthCall) {
    this._call = call;
  }

  get destination(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class AdminSendEthCall__Outputs {
  _call: AdminSendEthCall;

  constructor(call: AdminSendEthCall) {
    this._call = call;
  }
}

export class AdminSstoreCall extends ethereum.Call {
  get inputs(): AdminSstoreCall__Inputs {
    return new AdminSstoreCall__Inputs(this);
  }

  get outputs(): AdminSstoreCall__Outputs {
    return new AdminSstoreCall__Outputs(this);
  }
}

export class AdminSstoreCall__Inputs {
  _call: AdminSstoreCall;

  constructor(call: AdminSstoreCall) {
    this._call = call;
  }

  get key(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get value(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class AdminSstoreCall__Outputs {
  _call: AdminSstoreCall;

  constructor(call: AdminSstoreCall) {
    this._call = call;
  }
}

export class AdminTransferCall extends ethereum.Call {
  get inputs(): AdminTransferCall__Inputs {
    return new AdminTransferCall__Inputs(this);
  }

  get outputs(): AdminTransferCall__Outputs {
    return new AdminTransferCall__Outputs(this);
  }
}

export class AdminTransferCall__Inputs {
  _call: AdminTransferCall;

  constructor(call: AdminTransferCall) {
    this._call = call;
  }

  get token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get destination(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class AdminTransferCall__Outputs {
  _call: AdminTransferCall;

  constructor(call: AdminTransferCall) {
    this._call = call;
  }
}

export class LockTokenCall extends ethereum.Call {
  get inputs(): LockTokenCall__Inputs {
    return new LockTokenCall__Inputs(this);
  }

  get outputs(): LockTokenCall__Outputs {
    return new LockTokenCall__Outputs(this);
  }
}

export class LockTokenCall__Inputs {
  _call: LockTokenCall;

  constructor(call: LockTokenCall) {
    this._call = call;
  }

  get ethToken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get accountId(): string {
    return this._call.inputValues[2].value.toString();
  }
}

export class LockTokenCall__Outputs {
  _call: LockTokenCall;

  constructor(call: LockTokenCall) {
    this._call = call;
  }
}

export class UnlockTokenCall extends ethereum.Call {
  get inputs(): UnlockTokenCall__Inputs {
    return new UnlockTokenCall__Inputs(this);
  }

  get outputs(): UnlockTokenCall__Outputs {
    return new UnlockTokenCall__Outputs(this);
  }
}

export class UnlockTokenCall__Inputs {
  _call: UnlockTokenCall;

  constructor(call: UnlockTokenCall) {
    this._call = call;
  }

  get proofData(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get proofBlockHeight(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class UnlockTokenCall__Outputs {
  _call: UnlockTokenCall;

  constructor(call: UnlockTokenCall) {
    this._call = call;
  }
}