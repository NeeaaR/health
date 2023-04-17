
//call API
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom"
import { useSelector ,useDispatch } from 'react-redux';
import { getUserById } from '../../actions/profile';


export default function APITEST() {

    //get id from url
    const { id } = useParams();

    const {
        profile: { profile, loading },
        auth
    } = useSelector(state => state);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserById(id));
    }, [dispatch, id]);

    console.log(profile)

    return (
        <div>
        <h1>APITEST</h1>
        </div>
    )
}

