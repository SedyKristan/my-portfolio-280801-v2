export const groupedElements = ({ data }) => {
  return data.reduce((acc, record) => {
    const type = record.type;

    if (!acc[type]) {
      acc[type] = [];
    }

    acc[type].push(record);
    return acc;
  }, {});
};
