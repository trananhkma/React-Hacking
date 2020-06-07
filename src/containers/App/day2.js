import React from 'react';
import './day2.css';
import { faMicrophone, faHeart, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function PropsState() {
  const Desc = props => (
    <div hidden={props.a}>
      <p>{props.children}</p>
      <p>{props.abc || "default"}</p>
      <button>buttonnnn</button>
    </div>
    );

  const [hidden, setHidden] = React.useState(false);

  return (
    <span>
    <Desc abc="1">xxxxxx</Desc>
    <Desc abc="2">yyyyyy</Desc>
    <Desc>qqqqq</Desc>

    <Desc a={hidden}/>
    <button onClick={() => setHidden(!hidden)}>hidden</button>

    </span>
  );
}


function BaiTapDay2() {
  const Container = props => (
    <div class="bg-color">
      <div class="container">{props.children}</div>
    </div>
  )

  const ButtonIcon = props => (
    <button type="button" class="btn btn-sm icon">
      <FontAwesomeIcon icon={props.icon}/>
    </button>
  )

  const Item = props => (
    <div class="row bor-bottom">
      <div class="col-1">
        <span class="order" style={props.color||{color:"white"}}>{props.order}</span>
      </div>
      <div class="col-1">
        <img class="thumb pull-left" src={props.src} />
      </div>
      <div class="col-5">
        <div class="title">{props.title}</div>
        <div class="artist">{props.artist}</div>
      </div>
      <div class="col-4">
        <span class="time">{props.time}</span>
      </div>
      <div class="col">
        <ButtonIcon icon={faMicrophone}/>
        <ButtonIcon icon={faHeart}/>
        <ButtonIcon icon={faEllipsisH}/>
      </div>
    </div>
  )

  return(
    <Container>
        <Item order="1" color={{color:"blue"}} title="Chỉ Cần Anh Giả Vờ" artist="Chi Dân" time="04:15" src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/c/f/8/7/cf87ec212f04804d4799837e4ab26089.jpg"/>
        <Item order="2" color={{color:"green"}} title="Cướp Đi Cả Thế Giới" artist="Bảo Yến Rosie" time="05:07" src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/d/d/f/c/ddfc0c54f8c99b517539cc11c24f6b88.jpg"/>
        <Item order="3" color={{color:"red"}} title="Khóc Giữa Trời Mưa" artist="Cao Thái Sơn" time="05:50" src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/0/0/8/a/008a5d5aa708f8fb041041e25db6b7d4.jpg"/>
        <Item order="4" title="Chán! Làm Lại" artist="Trung Tự" time="02:51" src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/1/b/d/8/1bd8cec0a4414e35ebdf196173b7ddcb.jpg"/>
        <Item order="5" title="Bạn Tình Ơi 2" artist="YuniBoo, Goctoi Mixer" time="04:44" src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/c/0/c/b/c0cbcf26e675d698dc2446ed6d48a2b6.jpg"/>
        <Item order="6" title="Em Khác Gì Hoa" artist="Lil Zpoet" time="03:16" src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/6/2/7/7/6277052e09fdb5094c84366d00eb3165.jpg"/>
        <Item order="7" title="Không Thể Cùng Nhau Suốt Kiếp" artist="Hòa Minzy, Đức Phúc, ERIK" time="05:12" src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/b/d/f/1/bdf1fb9689b9412cf01b7cc265b22bbf.jpg"/>
        <Item order="8" title="Quy Tắc 3 Giây" artist="Nguyễn Hữu Thành" time="04:34" src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/0/3/2/4/03243a079b358f99ecbad219e55c2c7b.jpg"/>
        <Item order="9" title="Tình Anh" artist="Đinh Dũng, ACV" time="04:52" src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/f/6/a/b/f6ab94cda33ac9c190a7ac8cd0315270.jpg"/>
        <Item order="10" title="Mặt Trời Bé Con" artist="H2K, KN" time="03:26" src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/d/a/b/c/dabc503fb0131422c86a9660a415803f.jpg"/>
        <Item order="10" title="Mặt Trời Bé Con" artist="H2K, KN" time="03:26" src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/d/a/b/c/dabc503fb0131422c86a9660a415803f.jpg"/>
        <Item order="10" title="Mặt Trời Bé Con" artist="H2K, KN" time="03:26" src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/d/a/b/c/dabc503fb0131422c86a9660a415803f.jpg"/>
    </Container>
  )
}

export default BaiTapDay2;
