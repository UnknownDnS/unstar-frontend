import { Dispatch, SetStateAction, useCallback, useState, ChangeEvent } from 'react';

type ReturnTypes<T> = [T, (e: ChangeEvent<HTMLInputElement>) => void, Dispatch<SetStateAction<T>>];

const useInput = <T,>(initialData: T): ReturnTypes<T> => {
  const [value, setValue] = useState(initialData);
  const eventHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value as unknown as T);
  }, []);
  return [value, eventHandler, setValue];
};

export default useInput;
