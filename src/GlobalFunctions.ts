export const generatePayload = (
   block?: number,
   floor?: number,
   room?: number,
): string => {
   const formatValue = (value?: number): string => {
      return (value && value < 10) || value == 0 ? `0${value}` : `${value}`;
   };

   const blockS = formatValue(block);
   const floorS = formatValue(floor);
   const roomS = formatValue(room);

   return `${blockS}${floorS}${roomS}`;
};
