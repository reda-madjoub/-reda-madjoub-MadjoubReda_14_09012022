import DataTables from "datatables-plugin-react";
import { Labels, exampleData } from "../constant/data";

export const DataTable = () => <DataTables labels={Labels} data={exampleData} />