// 기본 font 추가
import { Inter, Lusitana } from 'next/font/google';

export const inter = Inter({subsets: ['latin']});

// secondary font 추가 -> App router에서 Google fonts를 최적화해서 불러오는 설정
export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin'] // subsets : 전체 글꼴 파일에서 사용하지 않는 글자를 제거하고 필요한 문자 집합만 가져와 용량을 줄이는 방식
})