import { useState, useEffect } from 'react';

type UseLocalStorageIdsReturn = {
  ids: number[];
  addId: (id: number) => void;
  removeId: (id: number) => void;
  hasId: (id: number) => boolean;
};

const useLocalStorageIds = (key: string): UseLocalStorageIdsReturn => {
  const [ids, setIds] = useState<number[]>([]);

  useEffect(() => {
    const storedIds = localStorage.getItem(key);
    if (storedIds) {
      setIds(JSON.parse(storedIds));
    }
  }, [key]);

  const addId = (id: number) => {
    if (!ids.includes(id)) {
      const updatedIds = [...ids, id];
      setIds(updatedIds);
      localStorage.setItem(key, JSON.stringify(updatedIds));
    }
  };

  const removeId = (id: number) => {
    const updatedIds = ids.filter((storedId) => storedId !== id);
    setIds(updatedIds);
    localStorage.setItem(key, JSON.stringify(updatedIds));
  };

  const hasId = (id: number): boolean => {
    return ids.includes(id);
  };

  return { ids, addId, removeId, hasId };
};

export default useLocalStorageIds;
