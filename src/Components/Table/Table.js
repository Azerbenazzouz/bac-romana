import React,{useMemo} from 'react'
import makeData from '../../data/data.json'
import "./table.css"

function Table() {
    const data = useMemo(()=>makeData,[])
    
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Movies</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((req,i) =>{
                        return (
                            <tr key={i}>
                                <td>{i+1}</td>
                                <td>{req.Name}</td>
                                <td>{req.Movies}</td>
                            </tr>
                        )
                    })}
                    
                </tbody>
            </table>
        </div>
    )
}

export default Table
