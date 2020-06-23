import React from 'react'
import styles from './style.module.css'


const Menu = () => (
  <div className={styles.dropdown}>
    <div className={styles.dropdownContent}>
      <a href="#add">Thêm vào danh sách phát</a>
      <a href="#next">Phát tiếp theo</a>
      <a href="#add2">Thêm vào playlist</a>
      <a href="#comment">Bình luận</a>
      <a href="#contribute">Đóng góp lời bài hát</a>
    </div>
  </div>
)
export default Menu