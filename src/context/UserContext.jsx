import { createContext } from 'react';

// Solo define y exporta el contexto (sin componentes) para evitar conflictos con Fast Refresh
export const UserContext = createContext(null);