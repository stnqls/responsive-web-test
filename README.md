# 반응형 웹페이지 만들어 보기

## PC버전 완성된 페이지

## MOBILE버전 완성된 페이지

---
### navigation bar 선택시 나타나는 효과
```css
header nav ul a:hover {
  color: #fff;
}
header nav ul a::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: -.125rem;
  height: .15rem;
  background-color: #fff;
  transition: all .3s;
  transform: translateY(.5rem);
  opacity: 0;
}
header nav ul a:hover::after {
  transition: all .3s; 
  transform: translateY(0);
  opacity: 1;
}
```