const solution = (my_string) => Array.from(my_string).reverse().join('');


/*
* 해결법 *
- Array 메소드인 from() 은, 대상이 되는 값을 배열로 변환해주는 메소드이다.
- reverse 를 통하여, 역순으로 반환한다.

- Array 메소드인 join() 함수는, 배열의 모든 요소들을 연결해서 하나의 문자열로 리턴해준다.
.join(): 리스트 요소를, 문자 사이에 콤마를 넣어서, 전체를 하나의 문자열로 만들어준다.
.join(''): 리스트 요소를, 문자 사이에 콤마를 빼고, 전체를 하나의 문자열로 만들어준다.
.join('구분 기호'): 리스트 요소를, 문자 사이에 콤마 대신 구분 기호를 넣어서, 전체를 하나의 문자열로 만들어준다.
*/