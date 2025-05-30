import { createContext, useContext, useState } from "react";

const DragDropContext = createContext([null, (_) => { }]);

export const DragDropProvider = ({ children }) => {
  const [type, setType] = useState(null);

  return (
    <DragDropContext.Provider value={[type, setType]}>
      {children}
    </DragDropContext.Provider>
  );
};

export default DragDropContext;

export const useDragDrop = () => {
  return useContext(DragDropContext);
};