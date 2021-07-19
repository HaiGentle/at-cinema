import React from 'react'
import './style.scss'
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import logo from '../../assets/image/logo.png'
import Logo from '../../components/logo'
import Input from '../../components/input'
import Button from '../../components/button'

export default function Header() {
    let history = useHistory();
  
    function handleClickBackHome() {
        history.push('');
    }
    
    return (
        <div className="ctn-header">
            <Logo logo={logo} onClick={handleClickBackHome} />
            <Input
                suffix={
                    <Button>
                        <FontAwesomeIcon icon={faSearch} />
                    </Button>
                }
            />
        </div>
    )
}