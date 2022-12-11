/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "nameservice.nameservice";

export interface MsgBuyName {
  creator: string;
  name: string;
  bid: string;
}

export interface MsgBuyNameResponse {
}

export interface MsgSetName {
  creator: string;
  name: string;
  value: string;
}

export interface MsgSetNameResponse {
}

export interface MsgDeleteName {
  creator: string;
  name: string;
}

export interface MsgDeleteNameResponse {
}

function createBaseMsgBuyName(): MsgBuyName {
  return { creator: "", name: "", bid: "" };
}

export const MsgBuyName = {
  encode(message: MsgBuyName, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.bid !== "") {
      writer.uint32(26).string(message.bid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBuyName {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBuyName();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.bid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBuyName {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      name: isSet(object.name) ? String(object.name) : "",
      bid: isSet(object.bid) ? String(object.bid) : "",
    };
  },

  toJSON(message: MsgBuyName): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    message.bid !== undefined && (obj.bid = message.bid);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBuyName>, I>>(object: I): MsgBuyName {
    const message = createBaseMsgBuyName();
    message.creator = object.creator ?? "";
    message.name = object.name ?? "";
    message.bid = object.bid ?? "";
    return message;
  },
};

function createBaseMsgBuyNameResponse(): MsgBuyNameResponse {
  return {};
}

export const MsgBuyNameResponse = {
  encode(_: MsgBuyNameResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBuyNameResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBuyNameResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgBuyNameResponse {
    return {};
  },

  toJSON(_: MsgBuyNameResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBuyNameResponse>, I>>(_: I): MsgBuyNameResponse {
    const message = createBaseMsgBuyNameResponse();
    return message;
  },
};

function createBaseMsgSetName(): MsgSetName {
  return { creator: "", name: "", value: "" };
}

export const MsgSetName = {
  encode(message: MsgSetName, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.value !== "") {
      writer.uint32(26).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetName {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetName();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetName {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      name: isSet(object.name) ? String(object.name) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: MsgSetName): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetName>, I>>(object: I): MsgSetName {
    const message = createBaseMsgSetName();
    message.creator = object.creator ?? "";
    message.name = object.name ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseMsgSetNameResponse(): MsgSetNameResponse {
  return {};
}

export const MsgSetNameResponse = {
  encode(_: MsgSetNameResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetNameResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetNameResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgSetNameResponse {
    return {};
  },

  toJSON(_: MsgSetNameResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetNameResponse>, I>>(_: I): MsgSetNameResponse {
    const message = createBaseMsgSetNameResponse();
    return message;
  },
};

function createBaseMsgDeleteName(): MsgDeleteName {
  return { creator: "", name: "" };
}

export const MsgDeleteName = {
  encode(message: MsgDeleteName, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteName {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteName();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteName {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: MsgDeleteName): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteName>, I>>(object: I): MsgDeleteName {
    const message = createBaseMsgDeleteName();
    message.creator = object.creator ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseMsgDeleteNameResponse(): MsgDeleteNameResponse {
  return {};
}

export const MsgDeleteNameResponse = {
  encode(_: MsgDeleteNameResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteNameResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteNameResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteNameResponse {
    return {};
  },

  toJSON(_: MsgDeleteNameResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteNameResponse>, I>>(_: I): MsgDeleteNameResponse {
    const message = createBaseMsgDeleteNameResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  BuyName(request: MsgBuyName): Promise<MsgBuyNameResponse>;
  SetName(request: MsgSetName): Promise<MsgSetNameResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  DeleteName(request: MsgDeleteName): Promise<MsgDeleteNameResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.BuyName = this.BuyName.bind(this);
    this.SetName = this.SetName.bind(this);
    this.DeleteName = this.DeleteName.bind(this);
  }
  BuyName(request: MsgBuyName): Promise<MsgBuyNameResponse> {
    const data = MsgBuyName.encode(request).finish();
    const promise = this.rpc.request("nameservice.nameservice.Msg", "BuyName", data);
    return promise.then((data) => MsgBuyNameResponse.decode(new _m0.Reader(data)));
  }

  SetName(request: MsgSetName): Promise<MsgSetNameResponse> {
    const data = MsgSetName.encode(request).finish();
    const promise = this.rpc.request("nameservice.nameservice.Msg", "SetName", data);
    return promise.then((data) => MsgSetNameResponse.decode(new _m0.Reader(data)));
  }

  DeleteName(request: MsgDeleteName): Promise<MsgDeleteNameResponse> {
    const data = MsgDeleteName.encode(request).finish();
    const promise = this.rpc.request("nameservice.nameservice.Msg", "DeleteName", data);
    return promise.then((data) => MsgDeleteNameResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
