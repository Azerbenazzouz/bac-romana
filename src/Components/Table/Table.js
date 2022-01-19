import React,{useMemo} from 'react'
import makeData from '../../data/data.json'
import "./table.css"

function Table() {
    const data = useMemo(()=>makeData,[])
    console.log(data)
    return (
        <table>
            <thead>
                <tr>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr key="1">
                   <td></td>
                </tr>
            </tbody>
        </table>
    )
}

export default Table
