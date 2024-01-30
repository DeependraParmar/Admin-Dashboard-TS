import { FaSortDown, FaSortUp } from "react-icons/fa";
import { IoCaretBack, IoCaretForward, IoPlayBack, IoPlayForward } from "react-icons/io5";
import { Column, TableOptions, usePagination, useSortBy, useTable } from "react-table";


function TableHOC<T extends Object>( columns: Column<T>[], data: T[], containerClassName: string, showPagination: boolean = false ) {
    return function HOC() {
        const tableOptions:TableOptions<T> = {
            columns,
            data,
            initialState: {
                pageSize: 5,
            },
        }
        const {getTableProps, getTableBodyProps, headerGroups, page, prepareRow, nextPage, previousPage, canNextPage, canPreviousPage, pageCount, state: {pageIndex}, gotoPage} = useTable(tableOptions, useSortBy, usePagination);

        return <div className={containerClassName}>
            <table className="table" {...getTableProps()}>
                <thead>
                    {
                        headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {
                                    headerGroup.headers.map((column) => (
                                        <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                            {
                                                column.render('Header')
                                            }
                                            {
                                                column.isSorted ? (column.isSortedDesc ? <FaSortDown /> : <FaSortUp />) : ' '
                                            }
                                        </th>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                        page.map(row => {
                            prepareRow(row);
                            return <tr {...row.getRowProps()}>
                                {
                                    row.cells.map(cell => {
                                        return <td {...cell.getCellProps()}>
                                            {
                                                cell.render('Cell')
                                            }
                                        </td>
                                    })
                                }
                            </tr>
                        })
                    }
                </tbody>
            </table>

            {
                showPagination && <div className="tablePagination">
                    <button data-title="First Page" onClick={() => gotoPage(0)} disabled={!canPreviousPage}><IoPlayBack /></button>
                    <button data-title="Previous Page" onClick={previousPage} disabled={!canPreviousPage}><IoCaretBack /></button>
                    <span>{`${pageIndex+1} Page of ${pageCount}`}</span>
                    <button data-title="Next Page" onClick={nextPage} disabled={!canNextPage}><IoCaretForward /></button>
                    <button data-title="Last Page" onClick={() => gotoPage(pageCount-1)} disabled={!canNextPage}><IoPlayForward /></button>

                </div>
            }
        </div>
    }
}

export default TableHOC;
