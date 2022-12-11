/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "nameservice.nameservice";

export interface Whois {
  index: string;
  name: string;
  value: string;
  price: string;
  owner: string;
}

function createBaseWhois(): Whois {
  return { index: "", name: "", value: "", price: "", owner: "" };
}

export const Whois = {
  encode(message: Whois, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.value !== "") {
      writer.uint32(26).string(message.value);
    }
    if (message.price !== "") {
      writer.uint32(34).string(message.price);
    }
    if (message.owner !== "") {
      writer.uint32(42).string(message.owner);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Whois {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWhois();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.value = reader.string();
          break;
        case 4:
          message.price = reader.string();
          break;
        case 5:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Whois {
    return {
      index: isSet(object.index) ? String(object.index) : "",
      name: isSet(object.name) ? String(object.name) : "",
      value: isSet(object.value) ? String(object.value) : "",
      price: isSet(object.price) ? String(object.price) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
    };
  },

  toJSON(message: Whois): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.name !== undefined && (obj.name = message.name);
    message.value !== undefined && (obj.value = message.value);
    message.price !== undefined && (obj.price = message.price);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Whois>, I>>(object: I): Whois {
    const message = createBaseWhois();
    message.index = object.index ?? "";
    message.name = object.name ?? "";
    message.value = object.value ?? "";
    message.price = object.price ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
};

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
