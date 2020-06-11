import React from 'react'
import styles from './style.module.css'


const Menu = () => (
  <div className={styles.dropdown}>
    <div className={styles.dropdownContent}>
      <a href="#">Thêm vào danh sách phát</a>
      <a href="#">Phát tiếp theo</a>
      <a href="#">Thêm vào playlist</a>
      <a href="#">Bình luận</a>
      <a href="#">Đóng góp lời bài hát</a>
    </div>
  </div>
)
export default Menu