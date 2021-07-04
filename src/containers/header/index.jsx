import React from 'react'
import './style.scss'
import logo from '../../assets/image/logo.png'
import Logo from '../../components/logo'
import Input from '../../components/Input/index'
import Button from '../../components/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function Header(props) {
    return (
        <div className="ctn-header">
            <Logo logo={logo} />
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