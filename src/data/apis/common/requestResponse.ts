import AppData from '@src/types/appData';

export default interface RequestResponse<T> extends AppData<T> {
  status: number | null;
}
