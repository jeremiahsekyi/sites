export interface Statement { bind(...values:unknown[]):Statement; first<T>():Promise<T|null>; all<T>():Promise<{results:T[]}>; run():Promise<unknown>; }
export interface PilotDatabase { prepare(sql:string):Statement; batch(statements:Statement[]):Promise<unknown[]>; }
export function getPilotDb(env:{DB?:PilotDatabase}) { if(!env.DB)throw new Error("Pilot registration storage unavailable");return env.DB; }
