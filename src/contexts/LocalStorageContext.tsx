import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';

interface LocalStorageContextType {
  ids: number[];
  addId: (id: number) => void;
  removeId: (id: number) => void;
}

const LocalStorageContext = createContext<LocalStorageContextType | null>(null);

interface LocalStorageProviderProps {
  children: ReactNode;
}

export const LocalStorageProvider: React.FC<LocalStorageProviderProps> = ({
  children,
}) => {
  const [ids, setIds] = useState<number[]>(() => {
    const storedIds = localStorage.getItem('favoriteArtworks');
    return storedIds ? JSON.parse(storedIds) : [];
  });

  useEffect(() => {
    const handleStorageChange = () => {
      const storedIds = localStorage.getItem('favoriteArtworks');
      if (storedIds) {
        setIds(JSON.parse(storedIds));
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('favoriteArtworks', JSON.stringify(ids));
  }, [ids]);

  const addId = (id: number) => {
    setIds((prevIds) => (prevIds.includes(id) ? prevIds : [...prevIds, id]));
  };

  const removeId = (id: number) => {
    setIds((prevIds) => prevIds.filter((storedId) => storedId !== id));
  };

  return (
    <LocalStorageContext.Provider value={{ ids, addId, removeId }}>
      {children}
    </LocalStorageContext.Provider>
  );
};

export const useLocalStorage = () => {
  const context = useContext(LocalStorageContext);
  if (!context) {
    throw new Error(
      'useLocalStorage must be used within a LocalStorageProvider'
    );
  }
  return context;
};
