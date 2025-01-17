export type Status =
  | "props"
  | "estado"
  | "eventos"
  | "key"
  | "refs"
  | "fragmentos";
export interface Data {
  id: number;
  content: string;
  status: Status;
}
