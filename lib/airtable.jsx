import Airtable from "airtable";
import { parseAirtableData } from "./parseAirtableData";

export const sourceAirtable = async ({
  view,
  table,
  filter,
  baseId,
  isFormField,
}) => {
  let airtableBase = new Airtable({
    apiKey:
      "patTFv0jPyEV1j6t7.5d3291c7d7a975e8a420866d1cd55d80dc820ab8bf417c950ea7bac5d35fd161",
  }).base(baseId);
  let sourcedData = await airtableBase(table)
    ._selectRecords({
      view,
      ...(filter && { filterByFormula: filter }),
    })
    .all();
  let sourcedFields = sourcedData.map((record) => {
    return { ...record.fields, id: record.id };
  });
  sourcedFields = parseAirtableData({
    formFields: sourcedFields,
    isFormField,
  });
  return sourcedFields;
};
