import React from 'react'
import styles from './style.module.css'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {faMicrophone, faHeart, faEllipsisH} from '@fortawesome/free-solid-svg-icons';

import ButtonIcon from './Button'
import Menu from './Menu'
import {Order, Thumbnail, Title, Artist, Timer} from './Info'


const Song = () => {
  const [openMenu, setOpenMenu] = React.useState(false);
  const BtnMicrophone = () => (
    <ButtonIcon icon={faMicrophone} onClick={() => setOpenMenu(false)} onBlur={() => setOpenMenu(false)}/>
  )
  
  const BtnHeart = () => (
    <ButtonIcon icon={faHeart} onClick={() => setOpenMenu(false)} onBlur={() => setOpenMenu(false)}/>
  )
  
  const BtnMenu = () => (
    <ButtonIcon icon={faEllipsisH} onClick={() => setOpenMenu(!openMenu)} onBlur={() => setOpenMenu(false)}/>
  )

  return (
    <Row className={`${styles.borBottom} ${styles.item}`}>
      <Col xs='1'><Order/></Col>
      <Col xs='1'><Thumbnail/></Col>
      <Col xs='4'><Title/><Artist/></Col>
      <Col xs='4'><Timer/></Col>
      <Col><BtnMicrophone/><BtnHeart/><BtnMenu/></Col>
      {openMenu && <Menu/>}
    </Row>
  )
}

export default Song