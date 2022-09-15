import React, { useEffect } from "react";
import {useNavigate} from 'react-router-dom'

const Profile = (props) => {

    const isAuth = props.state.auth.isAuth
    const navigate = useNavigate();
    useEffect(() => {
        if(!isAuth) {
            navigate('/login')
        }
    })

        return(

            <div className="profile">
                Profile
            </div>
        )
}

export default Profile