import React,{useState,useEffect} from 'react'
import "./table.css"
import Avatar from '@mui/material/Avatar';
import { collection , onSnapshot } from "firebase/firestore"; 
import db from "../../Firebase/firebase"

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

function Table() {
    const [data,setdata]=useState([])
    
    useEffect(()=>{
        onSnapshot(collection(db,"Liste des donateurs"),(snapshot)=>{
            setdata(snapshot.docs.map(doc => doc.data()));
        });
    })

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Img</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Valeur</th>
                        <th>réseaux sociaux</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((req,i) =>{
                        return (
                            <tr key={i}>
                                <td>{i+1}</td>
                                <td><Avatar alt={req.Nom} src={req.img} /></td>
                                <td>{req.Nom}</td>
                                <td>{req.date}</td>
                                <td>{req.value} TND</td>
                                <td>
                                    {
                                        req.sociaux.facebook==="" ? <span></span>:(
                                            <a target="_blank" href={req.sociaux.facebook}><FacebookIcon sx={{ fontSize: 30 }} style={{color:"#3b5998"}}/></a>
                                        )
                                    }
                                    {
                                        req.sociaux.instagram==="" ? <span></span>:(
                                            <a target="_blank" href={req.sociaux.instagram}><InstagramIcon sx={{ fontSize: 30 }} style={{color:"#c13584"}}/></a>
                                        )
                                    }
                                </td>
                            </tr>
                        )
                    })}
                    
                </tbody>
            </table>
        </div>
    )
}

export default Table
