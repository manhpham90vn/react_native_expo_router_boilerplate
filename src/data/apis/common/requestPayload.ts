export default interface RequestPayload<T> {
  queryParameters?: T | null;
  body?: T | null;
  headers?: any;
  path: string;
}
