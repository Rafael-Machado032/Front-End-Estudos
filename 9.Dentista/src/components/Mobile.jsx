import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// Importe o ícone específico que você deseja usar
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Mobile() {
  return (
    <div className='block lg:hidden'>
        {/* Passe o ícone importado diretamente para a prop icon */}
        <FontAwesomeIcon icon={faBars} style={{color: "rgb(255, 255, 255)"}} size='2xl' />
    </div>
  )
}

