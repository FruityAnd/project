// 랜덤 OX(true or false) Quiz 

// (1) 퀴즈 데이터 생성
let quizData = [
    {   
        //quizData[0]
        q: "20~40대거나, 아무 증상없이 건강하다면<br> 대장내시경 검사를 받지 않아도 된다.",
        option: [true, false],
        answer: false
    },
    {   
        //quizData[1]
        q: "피가 섞인 혈변을 보면<br> 대장암에 걸린 것이다.",
        option: [true, false],
        answer: false
    },
    {   
        //quizData[2]
        q: "대장 내에서 용종이 발견되면<br> 반드시 제거해야 한다.",
        option: [true, false],
        answer: true
    },
    {   
        //quizData[3]
        q: "대장암 가족력이 없는 경우,<br> 대장암에 걸릴 확률이 거의 없다.",
        option: [true, false],
        answer: false
    },
    {   
        //quizData[4]
        q: "대장내시경은 대장암의 진단에 효과적이지<br> 대장암 예방에는 도움이되지 않는다.",
        option: [true, false],
        answer: false
    }
]
// console.log(quizData);
// console.log(quizData[0]);

const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const homeBox = document.querySelector(".home-box");
const quizBox = document.querySelector(".quiz-box");
const resultBox = document.querySelector(".result-box");
const answerBox = document.querySelector(".answer-box");
const answerSelect = document.querySelectorAll(".answer-select");

let countQuestion = 0;
let currentQuestion;
let Questions = []; //배열 변수 선언
let correctAnswer;

// (2) 퀴즈 질문번호 설정
function setQuestions(){
    const totalQuestion = quizData.length; // 5
    // console.log(quizData.length); 
    for(let i=0; i<totalQuestion; i++) {
        Questions.push(quizData[i]) //push() 메서드 마지막 배열 추가
    }
};

// (3) 새로운 퀴즈 취득
function getNewQuestion(){
    //퀴즈 질문번호 출력
    questionNumber.innerHTML = `Question ${countQuestion + 1} / ${quizData.length}`;

    //퀴즈내용 랜덤 적용 및 출력
    currentQuestion = Questions[Math.floor(Math.random() * Questions.length)] //퀴즈 index number 0이상 5미만 중 하나 랜덤생성 
    questionText.innerHTML = currentQuestion.q;
    // console.log(currentQuestion);

    //퀴즈내용 중복 출력 방지
    const stopDuplication = Questions.indexOf(currentQuestion);
    Questions.splice(stopDuplication, 1);
    console.log(currentQuestion);
    console.log(Questions);

    //퀴즈 질문번호 증가
    countQuestion++;
};

// (4) 퀴즈 결과..........? 얻기.......?.
function getSelectAnswer(){
    for(let i=0; i<answerSelect.length; i++) { //answerSelect.lenght = 2
        if(answerSelect[i].checked == true){ //사용자가 answerSelect를 체크했을 때
           if(answerSelect[i].value == true){ 
            //체크한 answerSelect의 value값이 true면 실행
                console.log("O")
           }
           else {
            //체크한 answerSelect의 value값이 false면 실행
                console.log("X")
           }
        }
    }
};
// console.log(answerSelect)
// console.log(answerSelect.length)

// 클릭 이벤트
function next(){
    if(countQuestion === quizData.length){
        console.log("quiz over")
        quizOver();
    } 
    else {
        getNewQuestion();
    }
};

function quizOver(){ //퀴즈 끝나면
    quizBox.classList.add("hide"); //퀴즈 화면 숨김
    resultBox.classList.remove("hide"); //퀴즈 결과화면 보임
};

function resetQuiz(){
    countQuestion = 0;
};

function returnToQuiz(){ //처음으로 버튼 누르면
    resultBox.classList.add("hide"); //퀴즈 결과화면 숨김
    answerBox.classList.add("hide"); //퀴즈 정답 및 해설 숨김
    homeBox.classList.remove("hide"); //퀴즈 시작화면 보임
    //퀴즈 리셋
    resetQuiz();
};

function checkTheAnswer(){ //정답확인 버튼 누르면
    answerBox.classList.toggle("hide");
};

function startQuiz(){ //시작버튼 누르면
    homeBox.classList.add("hide"); //퀴즈 시작화면 숨김
    quizBox.classList.remove("hide"); //퀴즈 화면 보임

    setQuestions();
    getNewQuestion();
};

// window.onload = function() {
//     setQuestions();
//     getNewQuestion();
// };
