import { v4 as uuidv4 } from "uuid";
import { Country } from "../types/common";
import {
  CategoryTitle,
  ReviewCategoryFilterListType,
  ReviewSortEnum,
} from "./types";

export const BEERLOT_EMAIL = process.env.NEXT_PUBLIC_INQUIRY_EMAIL;

export const WELCOME_MESSAGE_FIRST = "👋 어서와요 ";
export const WELCOME_MESSAGE_SECOND = "오늘은 어떤 맥주를 마셔볼까요?";
export const POPULAR_BEER_TITLE = "🔥 인기맥주 TOP10 🔥 ";
export const RECOMMENDED_BEER_TITLE_1 = "🍻 ";
export const RECOMMENDED_BEER_TITLE_2 = " 님께 추천해요 🍻";
export const BEERLOT_TITLE = "🍺BEER LOT🍺";
export const orangeBright = "#FEA801";
export const SEARCH_BAR_PLACEHOLDER = "맥주 이름, 종류, 향 등을 검색해보세요!";

export const MOCK_FEED_FILTER_LIST: ReviewCategoryFilterListType[] = [
  {
    title: CategoryTitle.SORT_CRITERIA,
    tags: [
      ReviewSortEnum.RecentlyUpdated,
      ReviewSortEnum.HighRate,
      ReviewSortEnum.LowRate,
      ReviewSortEnum.MostLikes,
    ],
  },
];

export const ALL_FEED_MOCK = [
  {
    id: uuidv4(),
    nickname: "김누누",
    postingTime: "2시간 전",
    beerName: "버드와이저",
    ratingNumber: 4,
    imageSrc: "goat.png",
    postText:
      " 여윽시 내 최애 맥주.. 다시 미국 가고싶다ㅠㅠ 미국에서 먹었던 그 느낌을 다시 느끼고 싶을 때면 꼭 버드와이저를 찾게 되더라구요. 그리고 뭐니뭐니해도 버드와이저에는 감자칩이죠! 레이스랑 한 잔 하고 잡니다 :) 모두들 굿나잇!",
    thumbsUpNumber: 22,
  },
  {
    id: uuidv4(),
    nickname: "김태희",
    postingTime: "어제",
    beerName: "호가든",
    ratingNumber: 4,
    imageSrc: "goat.png",
    postText: "",
    thumbsUpNumber: 24,
  },
  {
    id: uuidv4(),
    nickname: "김누누",
    postingTime: "2시간 전",
    beerName: "버드와이저",
    ratingNumber: 4,
    imageSrc: "goat.png",
    postText:
      " 여윽시 내 최애 맥주.. 다시 미국 가고싶다ㅠㅠ 미국에서 먹었던 그 느낌을 다시 느끼고 싶을 때면 꼭 버드와이저를 찾게 되더라구요. 그리고 뭐니뭐니해도 버드와이저에는 감자칩이죠! 레이스랑 한 잔 하고 잡니다 :) 모두들 굿나잇!",
    thumbsUpNumber: 22,
  },
  {
    id: uuidv4(),
    nickname: "김태희",
    postingTime: "어제",
    beerName: "호가든",
    ratingNumber: 4,
    imageSrc: "goat.png",
    postText: " 여윽시 내 최애 맥주..",
    thumbsUpNumber: 24,
  },
];

export const MOCK_CATEGORY_FILTER_LIST = [
  // {
  //   title: CategoryTitle.BEER_TYPE,
  //   tags: ["IPA", "필스너", "스타우트"],
  // },
  { title: CategoryTitle.BEER_COUNTRY, tags: ["독일", "미국", "일본"] },
];
export const MOCK_CATEGORY_FILTER_TITLE = [
  CategoryTitle.SORT_CRITERIA,
  CategoryTitle.BEER_COUNTRY,
  CategoryTitle.BEER_TYPE,
  CategoryTitle.BEER_DEGREE,
];

export const textMain = "#000000";

export const getVh = (px: number) => {
  return Math.floor(765 / px);
};

export const enum CardType {
  POPULAR = "popular",
  RECOMMEND = "recommend",
}

export const MOCK_CARD_LIST = [
  {
    id: 0,
    beerName: "츄로스 랜드",
    img_src: "https://picsum.photos/id/237/200/300",
    sort: "IPA",
    country: "🌎",
  },
  {
    id: 1,
    beerName: "칠성사이다 제로",
    img_src: "https://picsum.photos/id/237/200/300",
    sort: "IPA",
    country: "🌎",
  },
  {
    id: 2,
    beerName: "펩시 제로",
    img_src: "https://picsum.photos/id/237/200/300",
    sort: "IPA",
    country: "🌎",
  },
  {
    id: 3,
    beerName: "맛소금",
    img_src: "https://picsum.photos/id/237/200/300",
    sort: "IPA",
    country: "🌎",
  },
  {
    id: 4,
    beerName: "오예스 미니",
    img_src: "https://picsum.photos/id/237/200/300",
    sort: "IPA",
    country: "🌎",
  },
];

export interface beerItemType {
  id: number;
  beerName: string;
  img_src: string;
  sort: string;
  country: string;
}

export enum ReviewStatic {
  numberOfMaxAttachedFile = 5,
  ReviewInputMaxLength = 2000,
}

export const MOCK_BEERS_SUGGESTION = {
  id: 0,
  name_ko: "오비라거",
  name_en: "OB LAGAR",
  description: "오비라거 입니다.",
  country: "KO",
  volume: 4.4,
  image_url: "https://picsum.photos/id/237/200/300",
  category: {
    id: 1,
    name_ko: "라거",
    name_en: "lagar",
    description: "this is lagar",
    parent: {
      id: 2,
      name_ko: "밀맥주",
      name_en: "wheat beer",
    },
  },
  tags: [
    {
      id: 2,
      name_ko: "밀맥주",
      name_en: "wheat beer",
    },
  ],
  like_count: 24,
  review_count: 3,
  rate: 4.1,
};

export const BeerDetailMock = {
  id: 0,
  city: "콜럼버스, 미국",
  brewary: "앤하이저-부시",
  calories: 350,
  suitableGlass: "파인트",
  desc: "미국을 대표하는 맥주로, 매년 미국에서 판매량 1위를 놓치지 않는 앤하이저부시의 대표적인 상품! ",
};

export const MAX_BEER_VOLUME_SLIDER = 10;
export const MIN_BEER_VOLUME_SLIDER = 0;

export const MIN_MAX_BEER_VOLUME_SLIDER = [
  MIN_BEER_VOLUME_SLIDER,
  MAX_BEER_VOLUME_SLIDER,
];

export const states = [
  { name: "알라바마", flag: "🇺🇸" },
  { name: "알래스카", flag: "🇺🇸" },
  { name: "아리조나", flag: "🇺🇸" },
  { name: "아칸소", flag: "🇺🇸" },
  { name: "캘리포니아", flag: "🇺🇸" },
  { name: "콜로라도", flag: "🇺🇸" },
  { name: "코네티컷", flag: "🇺🇸" },
  { name: "델라웨어", flag: "🇺🇸" },
  { name: "플로리다", flag: "🇺🇸" },
  { name: "조지아", flag: "🇺🇸" },
  { name: "하와이", flag: "🇺🇸" },
  { name: "아이다호", flag: "🇺🇸" },
  { name: "일리노이", flag: "🇺🇸" },
  { name: "인디애나", flag: "🇺🇸" },
  { name: "아이오와", flag: "🇺🇸" },
  { name: "캔자스", flag: "🇺🇸" },
  { name: "켄터키", flag: "🇺🇸" },
  { name: "루이지애나", flag: "🇺🇸" },
  { name: "메인", flag: "🇺🇸" },
  { name: "메릴랜드", flag: "🇺🇸" },
  { name: "매사추세츠", flag: "🇺🇸" },
  { name: "미시간", flag: "🇺🇸" },
  { name: "미네소타", flag: "🇺🇸" },
  { name: "미시시피", flag: "🇺🇸" },
  { name: "미주리", flag: "🇺🇸" },
  { name: "몬태나", flag: "🇺🇸" },
  { name: "네브래스카", flag: "🇺🇸" },
  { name: "네바다", flag: "🇺🇸" },
  { name: "뉴햄프셔", flag: "🇺🇸" },
  { name: "뉴저지", flag: "🇺🇸" },
  { name: "뉴멕시코", flag: "🇺🇸" },
  { name: "뉴욕", flag: "🇺🇸" },
  { name: "노스캐롤라이나", flag: "🇺🇸" },
  { name: "노스다코타", flag: "🇺🇸" },
  { name: "오하이오", flag: "🇺🇸" },
  { name: "오클라호마", flag: "🇺🇸" },
  { name: "오리건", flag: "🇺🇸" },
  { name: "펜실베이니아", flag: "🇺🇸" },
  { name: "로드아일랜드", flag: "🇺🇸" },
  { name: "사우스캐롤라이나", flag: "🇺🇸" },
  { name: "사우스다코타", flag: "🇺🇸" },
  { name: "테네시", flag: "🇺🇸" },
  { name: "텍사스", flag: "🇺🇸" },
  { name: "유타", flag: "🇺🇸" },
  { name: "버몬트", flag: "🇺🇸" },
  { name: "버지니아", flag: "🇺🇸" },
  { name: "워싱턴", flag: "🇺🇸" },
  { name: "웨스트버지니아", flag: "🇺🇸" },
  { name: "위스콘신", flag: "🇺🇸" },
  { name: "와이오밍", flag: "🇺🇸" },
];

export const countries: Country[] = [
  { name: "아프가니스탄", flag: "🇦🇫" },
  { name: "알바니아", flag: "🇦🇱" },
  { name: "알제리", flag: "🇩🇿" },
  { name: "안도라", flag: "🇦🇩" },
  { name: "앙골라", flag: "🇦🇴" },
  { name: "아르헨티나", flag: "🇦🇷" },
  { name: "아르메니아", flag: "🇦🇲" },
  { name: "오스트레일리아", flag: "🇦🇺" },
  { name: "오스트리아", flag: "🇦🇹" },
  { name: "아제르바이잔", flag: "🇦🇿" },
  { name: "바레인", flag: "🇧🇭" },
  { name: "방글라데시", flag: "🇧🇩" },
  { name: "바베이도스", flag: "🇧🇧" },
  { name: "벨라루스", flag: "🇧🇾" },
  { name: "벨기에", flag: "🇧🇪" },
  { name: "벨리즈", flag: "🇧🇿" },
  { name: "베냉", flag: "🇧🇯" },
  { name: "볼리비아", flag: "🇧🇴" },
  { name: "보스니아 헤르체고비나", flag: "🇧🇦" },
  { name: "봇스와나", flag: "🇧🇼" },
  { name: "브라질", flag: "🇧🇷" },
  { name: "브루나이", flag: "🇧🇳" },
  { name: "불가리아", flag: "🇧🇬" },
  { name: "부르키나파소", flag: "🇧🇫" },
  { name: "버마", flag: "🇲🇲" },
  { name: "부룬디", flag: "🇧🇮" },
  { name: "캄보디아", flag: "🇰🇭" },
  { name: "카메룬", flag: "🇨🇲" },
  { name: "캐나다", flag: "🇨🇦" },
  { name: "카보베르데", flag: "🇨🇻" },
  { name: "중앙아프리카 공화국", flag: "🇨🇫" },
  { name: "차드", flag: "🇹🇩" },
  { name: "칠레", flag: "🇨🇱" },
  { name: "중국", flag: "🇨🇳" },
  { name: "콜롬비아", flag: "🇨🇴" },
  { name: "코모로", flag: "🇰🇲" },
  { name: "코스타리카", flag: "🇨🇷" },
  { name: "코트디부아르", flag: "🇨🇮" },
  { name: "크로아티아", flag: "🇭🇷" },
  { name: "쿠바", flag: "🇨🇺" },
  { name: "키프로스", flag: "🇨🇾" },
  { name: "체코 공화국", flag: "🇨🇿" },
  { name: "덴마크", flag: "🇩🇰" },
  { name: "지부티", flag: "🇩🇯" },
  { name: "도미니카", flag: "🇩🇲" },
  { name: "도미니카 공화국", flag: "🇩🇴" },
  { name: "동티모르", flag: "🇹🇱" },
  { name: "에콰도르", flag: "🇪🇨" },
  { name: "이집트", flag: "🇪🇬" },
  { name: "엘살바도르", flag: "🇸🇻" },
  { name: "적도 기니", flag: "🇬🇶" },
  { name: "에리트레아", flag: "🇪🇷" },
  { name: "에스토니아", flag: "🇪🇪" },
  { name: "에스와티니", flag: "🇸🇿" },
  { name: "에티오피아", flag: "🇪🇹" },
  { name: "피지", flag: "🇫🇯" },
  { name: "핀란드", flag: "🇫🇮" },
  { name: "프랑스", flag: "🇫🇷" },
  { name: "가봉", flag: "🇬🇦" },
  { name: "감비아", flag: "🇬🇲" },
  { name: "조지아", flag: "🇬🇪" },
  { name: "독일", flag: "🇩🇪" },
  { name: "가나", flag: "🇬🇭" },
  { name: "그리스", flag: "🇬🇷" },
  { name: "그레나다", flag: "🇬🇩" },
  { name: "과테말라", flag: "🇬🇹" },
  { name: "기니", flag: "🇬🇳" },
  { name: "기니비사우", flag: "🇬🇼" },
  { name: "가이아나", flag: "🇬🇾" },
  { name: "아이티", flag: "🇭🇹" },
  { name: "온두라스", flag: "🇭🇳" },
  { name: "헝가리", flag: "🇭🇺" },
  { name: "아이슬란드", flag: "🇮🇸" },
  { name: "인도", flag: "🇮🇳" },
  { name: "인도네시아", flag: "🇮🇩" },
  { name: "이란", flag: "🇮🇷" },
  { name: "이라크", flag: "🇮🇶" },
  { name: "아일랜드", flag: "🇮🇪" },
  { name: "이스라엘", flag: "🇮🇱" },
  { name: "이탈리아", flag: "🇮🇹" },
  { name: "자메이카", flag: "🇯🇲" },
  { name: "일본", flag: "🇯🇵" },
  { name: "요르단", flag: "🇯🇴" },
  { name: "카자흐스탄", flag: "🇰🇿" },
  { name: "케냐", flag: "🇰🇪" },
  { name: "키리바시", flag: "🇰🇮" },
  { name: "코소보", flag: "🇽🇰" },
  { name: "쿠웨이트", flag: "🇰🇼" },
  { name: "키르기스스탄", flag: "🇰🇬" },
  { name: "라오스", flag: "🇱🇦" },
  { name: "라트비아", flag: "🇱🇻" },
  { name: "레바논", flag: "🇱🇧" },
  { name: "레소토", flag: "🇱🇸" },
  { name: "라이베리아", flag: "🇱🇷" },
  { name: "리비아", flag: "🇱🇾" },
  { name: "리히텐슈타인", flag: "🇱🇮" },
  { name: "리투아니아", flag: "🇱🇹" },
  { name: "룩셈부르크", flag: "🇱🇺" },
  { name: "마다가스카르", flag: "🇲🇬" },
  { name: "말라위", flag: "🇲🇼" },
  { name: "말레이시아", flag: "🇲🇾" },
  { name: "몰디브", flag: "🇲🇻" },
  { name: "말리", flag: "🇲🇱" },
  { name: "몰타", flag: "🇲🇹" },
  { name: "모리셔스", flag: "🇲🇺" },
  { name: "모리타니", flag: "🇲🇷" },
  { name: "멕시코", flag: "🇲🇽" },
  { name: "모나코", flag: "🇲🇨" },
  { name: "몽골", flag: "🇲🇳" },
  { name: "몬테네그로", flag: "🇲🇪" },
  { name: "모로코", flag: "🇲🇦" },
  { name: "모잠비크", flag: "🇲🇿" },
  { name: "나미비아", flag: "🇳🇦" },
  { name: "네팔", flag: "🇳🇵" },
  { name: "네덜란드", flag: "🇳🇱" },
  { name: "뉴질랜드", flag: "🇳🇿" },
  { name: "니카라과", flag: "🇳🇮" },
  { name: "니제르", flag: "🇳🇪" },
  { name: "나이지리아", flag: "🇳🇬" },
  { name: "노르웨이", flag: "🇳🇴" },
  { name: "오만", flag: "🇴🇲" },
  { name: "파키스탄", flag: "🇵🇰" },
  { name: "팔라우", flag: "🇵🇼" },
  { name: "파나마", flag: "🇵🇦" },
  { name: "파푸아뉴기니", flag: "🇵🇬" },
  { name: "파라과이", flag: "🇵🇾" },
  { name: "페루", flag: "🇵🇪" },
  { name: "필리핀", flag: "🇵🇭" },
  { name: "폴란드", flag: "🇵🇱" },
  { name: "포르투갈", flag: "🇵🇹" },
  { name: "카타르", flag: "🇶🇦" },
  { name: "루마니아", flag: "🇷🇴" },
  { name: "러시아", flag: "🇷🇺" },
  { name: "르완다", flag: "🇷🇼" },
  { name: "세인트키츠네비스", flag: "🇰🇳" },
  { name: "세인트루시아", flag: "🇱🇨" },
  { name: "세인트빈센트 그레나딘", flag: "🇻🇨" },
  { name: "사모아", flag: "🇼🇸" },
  { name: "산마리노", flag: "🇸🇲" },
  { name: "상투메 프린시페", flag: "🇸🇹" },
  { name: "사우디아라비아", flag: "🇸🇦" },
  { name: "세네갈", flag: "🇸🇳" },
  { name: "세르비아", flag: "🇷🇸" },
  { name: "세이셸", flag: "🇸🇨" },
  { name: "시에라리온", flag: "🇸🇱" },
  { name: "싱가포르", flag: "🇸🇬" },
  { name: "슬로바키아", flag: "🇸🇰" },
  { name: "슬로베니아", flag: "🇸🇮" },
  { name: "솔로몬 아일랜드", flag: "🇸🇧" },
  { name: "소말리아", flag: "🇸🇴" },
  { name: "남아프리카", flag: "🇿🇦" },
  { name: "대한민국", flag: "🇰🇷" },
  { name: "남수단", flag: "🇸🇸" },
  { name: "스페인", flag: "🇪🇸" },
  { name: "스리랑카", flag: "🇱🇰" },
  { name: "수단", flag: "🇸🇩" },
  { name: "수리남", flag: "🇸🇷" },
  { name: "스웨덴", flag: "🇸🇪" },
  { name: "스위스", flag: "🇨🇭" },
  { name: "시리아", flag: "🇸🇾" },
  { name: "타지키스탄", flag: "🇹🇯" },
  { name: "탄자니아", flag: "🇹🇿" },
  { name: "태국", flag: "🇹🇭" },
  { name: "토고", flag: "🇹🇬" },
  { name: "통가", flag: "🇹🇴" },
  { name: "트리니다드 토바고", flag: "🇹🇹" },
  { name: "튀니지", flag: "🇹🇳" },
  { name: "터키", flag: "🇹🇷" },
  { name: "투르크메니스탄", flag: "🇹🇲" },
  { name: "투발루", flag: "🇹🇻" },
  { name: "우간다", flag: "🇺🇬" },
  { name: "우크라이나", flag: "🇺🇦" },
  { name: "아랍에미리트", flag: "🇦🇪" },
  { name: "영국", flag: "🇬🇧" },
  { name: "미국", flag: "🇺🇸" },
  { name: "우루과이", flag: "🇺🇾" },
  { name: "우즈베키스탄", flag: "🇺🇿" },
  { name: "버누아투", flag: "🇻🇺" },
  { name: "바티칸 시티", flag: "🇻🇦" },
  { name: "베네수엘라", flag: "🇻🇪" },
  { name: "베트남", flag: "🇻🇳" },
  { name: "예멘", flag: "🇾🇪" },
  { name: "잠비아", flag: "🇿🇲" },
  { name: "짐바브웨", flag: "🇿🇼" },
  ...states,
];
