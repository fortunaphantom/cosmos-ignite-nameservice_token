/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import { Whois } from "./whois";

export const protobufPackage = "nameservice.nameservice";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetWhoisRequest {
  index: string;
}

export interface QueryGetWhoisResponse {
  whois: Whois | undefined;
}

export interface QueryAllWhoisRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllWhoisResponse {
  whois: Whois[];
  pagination: PageResponse | undefined;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseQueryGetWhoisRequest(): QueryGetWhoisRequest {
  return { index: "" };
}

export const QueryGetWhoisRequest = {
  encode(message: QueryGetWhoisRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetWhoisRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetWhoisRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetWhoisRequest {
    return { index: isSet(object.index) ? String(object.index) : "" };
  },

  toJSON(message: QueryGetWhoisRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetWhoisRequest>, I>>(object: I): QueryGetWhoisRequest {
    const message = createBaseQueryGetWhoisRequest();
    message.index = object.index ?? "";
    return message;
  },
};

function createBaseQueryGetWhoisResponse(): QueryGetWhoisResponse {
  return { whois: undefined };
}

export const QueryGetWhoisResponse = {
  encode(message: QueryGetWhoisResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.whois !== undefined) {
      Whois.encode(message.whois, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetWhoisResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetWhoisResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.whois = Whois.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetWhoisResponse {
    return { whois: isSet(object.whois) ? Whois.fromJSON(object.whois) : undefined };
  },

  toJSON(message: QueryGetWhoisResponse): unknown {
    const obj: any = {};
    message.whois !== undefined && (obj.whois = message.whois ? Whois.toJSON(message.whois) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetWhoisResponse>, I>>(object: I): QueryGetWhoisResponse {
    const message = createBaseQueryGetWhoisResponse();
    message.whois = (object.whois !== undefined && object.whois !== null) ? Whois.fromPartial(object.whois) : undefined;
    return message;
  },
};

function createBaseQueryAllWhoisRequest(): QueryAllWhoisRequest {
  return { pagination: undefined };
}

export const QueryAllWhoisRequest = {
  encode(message: QueryAllWhoisRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllWhoisRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllWhoisRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllWhoisRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllWhoisRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllWhoisRequest>, I>>(object: I): QueryAllWhoisRequest {
    const message = createBaseQueryAllWhoisRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllWhoisResponse(): QueryAllWhoisResponse {
  return { whois: [], pagination: undefined };
}

export const QueryAllWhoisResponse = {
  encode(message: QueryAllWhoisResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.whois) {
      Whois.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllWhoisResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllWhoisResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.whois.push(Whois.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllWhoisResponse {
    return {
      whois: Array.isArray(object?.whois) ? object.whois.map((e: any) => Whois.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllWhoisResponse): unknown {
    const obj: any = {};
    if (message.whois) {
      obj.whois = message.whois.map((e) => e ? Whois.toJSON(e) : undefined);
    } else {
      obj.whois = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllWhoisResponse>, I>>(object: I): QueryAllWhoisResponse {
    const message = createBaseQueryAllWhoisResponse();
    message.whois = object.whois?.map((e) => Whois.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a Whois by index. */
  Whois(request: QueryGetWhoisRequest): Promise<QueryGetWhoisResponse>;
  /** Queries a list of Whois items. */
  WhoisAll(request: QueryAllWhoisRequest): Promise<QueryAllWhoisResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.Whois = this.Whois.bind(this);
    this.WhoisAll = this.WhoisAll.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("nameservice.nameservice.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  Whois(request: QueryGetWhoisRequest): Promise<QueryGetWhoisResponse> {
    const data = QueryGetWhoisRequest.encode(request).finish();
    const promise = this.rpc.request("nameservice.nameservice.Query", "Whois", data);
    return promise.then((data) => QueryGetWhoisResponse.decode(new _m0.Reader(data)));
  }

  WhoisAll(request: QueryAllWhoisRequest): Promise<QueryAllWhoisResponse> {
    const data = QueryAllWhoisRequest.encode(request).finish();
    const promise = this.rpc.request("nameservice.nameservice.Query", "WhoisAll", data);
    return promise.then((data) => QueryAllWhoisResponse.decode(new _m0.Reader(data)));
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
