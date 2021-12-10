import {
  useTable,
  useAsyncDebounce,
  useGlobalFilter,
  useFilters,
  usePagination,
} from "react-table";
import React, { useEffect } from "react";
import { SVGIcon } from "../../../shared/component/SvgIcon";
import { useDispatch, useSelector } from "react-redux";
import "./ListHandCase.css";
import { ACTIONS } from "../../../redux/actions/caseActions";
import { Pagination } from "../../../shared/component/Pagination/Pagination";
import { Loading } from "../../../shared/component/Loading/Loading";
import { ErrorScreen } from "../../../shared/component/ErrorScreen/ErrorScreen";
function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = React.useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <div className="globalInputFilterWrapper">
      <SVGIcon
        name="magnifying"
        style={{ fill: "#a0a5b1", position: "absolute", top: 7 }}
        width={20}
        height={20}
      />
      <input
        value={value || ""}
        className="globalInputFilter"
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={"Search..."}
        style={{
          fontSize: "1.1rem",
          border: "0",
        }}
      />
    </div>
  );
}

const ListHandCase = (props) => {
  const dispatch = useDispatch();

  const listCase = useSelector((state) => state.case.listCase);
  const loading = useSelector((state) => state.case.loading);
  const data = React.useMemo(
    () =>
      listCase.map((_case) => ({
        idCase: _case.idCase,
        caseNameResult: _case.caseNameResult,
        directionOfPalmAndFingerName:
          _case._directionOfPalmsAndFinger?.directionOfPalmAndFingerName ||
          "Không",
        nameFingerOpening: _case._fingerOpening?.nameFingerOpening || "Không",
        nameFingerShape: _case._fingerShape?.nameFingerShape || "Không",
        nameHandMovement: _case._handMovement?.nameHandMovement || "Không",
        nameHandShape: _case._handShape?.nameHandShape || "Không",
      })),

    [listCase]
  );

  const columns = React.useMemo(
    () => [
      // {
      //   Header: "Id",
      //   accessor: "idCase",
      // },
      {
        Header: "Kí tự",
        accessor: "caseNameResult",
      },
      {
        Header: "Hướng của lòng bàn tay và ngón tay",
        accessor: "directionOfPalmAndFingerName",
      },
      {
        Header: "Độ mở ngón tay",
        accessor: "nameFingerOpening",
      },
      {
        Header: "Hình dạng ngón tay",
        accessor: "nameFingerShape",
      },
      {
        Header: "Độ dịch chuyển bàn tay",
        accessor: "nameHandMovement",
      },
      {
        Header: "Hình dạng bàn tay",
        accessor: "nameHandShape",
      },
    ],
    []
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    state,
    prepareRow,
    page,
    setGlobalFilter,
    preGlobalFilteredRows,
    pageCount,
    gotoPage,
    state: { pageIndex, pageSize },
  } = useTable(
    { columns, data, initialState: { pageSize: 8, pageIndex: 0 } },
    useFilters,
    useGlobalFilter,
    usePagination
  );
  useEffect(() => {
    dispatch({ type: ACTIONS.FETCH_LIST_CASE_START });
  }, []);

  if (loading === "idle" || loading === "loading") return <Loading />;

  if (loading === "failed") return <ErrorScreen />;

  return (
    <section className="listHandCaseContainer">
      <div className="searchContainer">
        <h2>Danh sách case</h2>

        <div>
          <GlobalFilter
            preGlobalFilteredRows={preGlobalFilteredRows}
            globalFilter={state.globalFilter}
            setGlobalFilter={setGlobalFilter}
          />
        </div>
      </div>
      <div className="wrapTable">
        <table {...getTableProps()} className="listCaseTable">
          <thead className="listCaseTableHead">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Pagination
        itemPerPage={pageSize}
        totalRecord={rows.length}
        siblingCount={0}
        boundaryCount={1}
        page={pageIndex}
        onChange={gotoPage}
      />
    </section>
  );
};
export default ListHandCase;
