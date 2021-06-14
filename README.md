# 반응형 웹페이지 만들어 보기

## PC버전 완성된 페이지
<img width="70%" src="https://user-images.githubusercontent.com/81519415/121848642-49c40800-cd25-11eb-9df4-fdab1aa63e99.PNG"/>
## MOBILE버전 완성된 페이지
<img width="70%" src="https://user-images.githubusercontent.com/81519415/121848659-4f215280-cd25-11eb-87eb-3fac7a0590aa.png"/>


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
