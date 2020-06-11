import React from 'react'
import styles from './style.module.css'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {faMicrophone, faHeart, faEllipsisH} from '@fortawesome/free-solid-svg-icons';

import ButtonIcon from './Button'
import Menu from './Menu'


const Song = props => {
  const [openMenu, setOpenMenu] = React.useState(false);
  return (
    <Row className={`${styles.borBottom} ${styles.item}`}>
      <Col xs='1'>
        <span className={styles.order} style={props.color||{color:"white"}}>{props.order}</span>
      </Col>
      <Col xs='1'>
        <img className={`${styles.thumb} pull-left`} src={props.src} />
      </Col>
      <Col xs='4'>
        <div className={styles.title}>{props.title}</div>
        <div className={styles.artist}>{props.artist}</div>
      </Col>
      <Col xs='4'>
       <span className={styles.timer}>{props.timer}</span>
      </Col>
      <Col>
        <ButtonIcon icon={faMicrophone} onClick={() => setOpenMenu(false)} onBlur={() => setOpenMenu(false)}/>
        <ButtonIcon icon={faHeart} onClick={() => setOpenMenu(false)} onBlur={() => setOpenMenu(false)}/>
        <ButtonIcon icon={faEllipsisH} onClick={() => setOpenMenu(!openMenu)} onBlur={() => setOpenMenu(false)}/>
      </Col>
      {openMenu && <Menu/>}
    </Row>
  )
}

export default Song