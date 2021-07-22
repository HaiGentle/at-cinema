import React, { useRef } from 'react'
import './style.scss'
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import logo from '../../assets/image/logo.png'
import Logo from '../../components/logo'
import Input from '../../components/input'
import Button from '../../components/button'

export default function Header() {
    const searchRef = useRef("");
    const history = useHistory();

    const handleClickBackHome = () => {
        history.push('');
    }
    const handleClickButtonSearch = () => {
        searchRef.current.value && history.push(`/search?name=${searchRef.current.value}`);
    }
    const handleOnchange = (e) => {
        e.preventDefault();
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleClickButtonSearch();
        }
    }

    return (
        <div className="ctn-header">
            <Logo logo={logo} onClick={handleClickBackHome} />
            <Input
                suffix={
                    <Button onClick={handleClickButtonSearch}>
                        <FontAwesomeIcon icon={faSearch} />
                    </Button>
                }
                onChange={(e) => handleOnchange(e)}
                searchRef={searchRef}
                onKeyPress={(e) => handleKeyPress(e)}
            />
        </div>
    )
}