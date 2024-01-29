import { Column, TableOptions, useTable } from "react-table"


function TableHOC<T extends Object>( columns: Column<T>[], data: T[], containerClassName: string ) {
    return function HOC() {
        const tableOptions:TableOptions<T> = {
            columns,
            data
        }
        const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = useTable(tableOptions);

        return <div className={containerClassName}>
            <table className="table" {...getTableProps()}>
                <thead>
                    {
                        headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {
                                    headerGroup.headers.map((column) => (
                                        <th {...column.getHeaderProps()}>
                                            {
                                                column.render('Header')
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
                        rows.map(row => {
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
        </div>
    }
}

export default TableHOC;
