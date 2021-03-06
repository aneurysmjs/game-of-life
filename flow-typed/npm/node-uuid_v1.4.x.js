// flow-typed signature: 1c22a8c07f5233703efd793409d6890e
// flow-typed version: 35be246cc3/node-uuid_v1.4.x/flow_>=v0.28.x

declare module "node-uuid" {
  declare type V1Options = {
    node: Array<number>,
    clockseq: number,
    msecs: number,
    nsecs: number
  };

  declare type V4Options = {
    random: Array<number>,
    rng: () => Array<number>
  };

  declare type Uuid = {
    v1: (
      o?: V1Options | null,
      b?: Array<number> | Buffer,
      of?: number
    ) => string,
    v4: (
      o?: V4Options | null,
      b?: Array<number> | Buffer,
      of?: number
    ) => string,
    parse: (u: string, b?: Array<number>, o?: number) => Array<number>,
    unparse: (b: Array<number>, o?: number) => string,
    noConflict: () => Uuid
  };

  declare export default Uuid
}
