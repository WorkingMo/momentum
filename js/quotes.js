const quotes = [
    {
        quote:"“교회 중심”, “성경읽기”, “기도하기”는 손흥민이 리프팅 연습하듯 평생 가꿔야 하는 기본기이다.",
        date: "22.6.1",
        title: "<예수 그리스도는 실로암이다>",
        service: "수요",
    },
    {
        quote: "우리는 고난에 대해서 인간 대 인간으로, 위로함으로 접근해야 한다. 하나님인 것처럼, 답을 안다고 교만하게 접근하면 안 된다.",
        date: "22.4.13",
        title: "<욥기 결론 II - 위로>",
        service: "수요"
    },
    {
        quote: "우리 중에 탁월한 의로움이 있기도 하고, 거룩한 삶을 추구해야 하는 것도 맞지만, 그것이 자랑이나 구원의 도구가 될 수는 없다.",
        date: "22.4.20",
        title: "<욥은 의인인가?>",
        service: "수요",
    },
    {
        quote: "일찍 하는 성공은 외줄타기와 같다. 모든 사람은 영적 지혜를 필요로 한다.",
        date: "22.4.2",
        title: "<영적 지혜를 쌓아가는 길>",
        service: "새깨가",
    },
    {
        quote: "하나님이 나를 부르셨던 그 부르심은 무엇이었을까? 그것을 회복하라.",
        date: "22.3.26",
        title: "<가장 좋은 것은 아직 오지 않았다>",
        service: "뉴송",
    },
    {
        quote: "이 땅에서 우리의 시선을, 마지막 때에 두어야 한다. 이 땅에서의 삶이 아니라, 그 후의 모습에 우리가 소망을 둘 때, 이 땅에서의 근심이 사라진다.",
        date: "22.2.26",
        title: "<주님 만날 날을 준비하라>",
        service: "뉴송",
    },
    {
        quote: "왜 이 시대에, 나의 삶에 하나님께서 코로나를 허락하셨을까? 우리가 답을 얻지 못하더라도 하나님께 물어봐야 한다. 단순히 지나가기만을 기다리지 말고!",
        date: "22.2.9",
        title: "<하나님 앞에서 입을 가리는 욥>",
        service: "수요",
    },
    {
        quote: "순종에 관하여. 이해 되니까 하는 것일까? 그런 것은 수긍이라고 한다. 전적인 순종이란, 이해되지 않아도 따르는 것이다.",
        date: "22.6.4",
        title: "<피함의 영성 - 거룩한 삶>",
        service: "뉴송",
    },
    {
        quote: "우리가 잘못되게 영광 받으면, 거부할 줄 알아야 한다. 특히 리더라면. 하나님이 받으실 영광을 빼앗으면 안 된다!",
        date: "22.6.19",
        title: "<여호와께서 너희를 다스리시리라>",
        service: "저녁",
    },
    {
        quote: "어떤 직업이냐가 아니라, 그 자리에서 어떻게 일할 것인지가 중요하다. 골로새서 3:22 본문처럼 일해야 한다.",
        date: "22.7.3",
        title: "<일터에서 지키는 영성>",
        service: "낮",
    }
];

const quote = document.querySelector("#quote span:first-child");
const dateTitleService = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote
dateTitleService.innerText = `${todaysQuote.date} ${todaysQuote.service}, ${todaysQuote.title}` 