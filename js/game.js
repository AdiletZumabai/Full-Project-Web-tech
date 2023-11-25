//game
document.addEventListener("DOMContentLoaded", function() {
    let success = false;
    let wordsDroppedCount = 0;

    const words = shuffle([
        { word: "TOR", image: "src/image-2023-10-26-T182819-950.webp" },
        { word: "Burkit", image: "src/1697190516-6.webp" },
        { word: "Trolls 3", image: "src/700x1000-trolli3.webp" }
    ]);
    
    const imagesContainer = document.getElementById("images-container");
    const wordsContainer = document.getElementById("words-container");

    words.forEach(item => {
        const imageDiv = document.createElement("div");
        imageDiv.className = "image";
        imageDiv.setAttribute("data-word", item.word);
        const image = document.createElement("img");
        image.src = item.image;
        image.alt = item.word;
        imageDiv.appendChild(image);
        imagesContainer.appendChild(imageDiv);

        const wordDiv = document.createElement("div");
        wordDiv.className = "word";
        wordDiv.setAttribute("data-target", item.word);
        wordDiv.innerText = item.word;
        wordsContainer.appendChild(wordDiv);
    });

    wordsContainer.querySelectorAll(".word").forEach(word => {
        word.draggable = true;

        word.addEventListener("dragstart", function(event) {
            event.dataTransfer.setData("text/plain", event.target.innerText);
        });
    });

    imagesContainer.querySelectorAll(".image").forEach(image => {
        image.addEventListener("dragover", function(event) {
            event.preventDefault();
        });

        image.addEventListener("drop", function(event) {
            event.preventDefault();
            const draggedWord = event.dataTransfer.getData("text/plain");
            const targetWord = image.getAttribute("data-word");

            if (draggedWord === targetWord && !image.classList.contains("matched")) {
                image.style.backgroundColor = "green";
                image.classList.add("matched");
                wordsDroppedCount++;

                if (wordsDroppedCount === words.length) {
                    success = true;
                }
            }
        });
    });

    const verifyButton = document.getElementById("verify-button");
verifyButton.addEventListener("click", function() {
        if (success) {
     
sessionStorage.setItem('captchaPassed', 'true');



            window.location.href = "index.html";
        } else {
            alert("Please make sure all words are dragged to the correct images.");
        }
    });
function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
});



//question
const quizData = [
    "What is your favorite movie?",
    "Who is your favorite actor or actress?",
    "Which movie genre do you prefer?",
    "Which movie impressed you the most?",
    "Do you have a favorite director?",
    "How often do you go to the movies?",
    "What was the last movie you watched?",
    "Which movie emotionally touched you the most?",
    "Do you have a list of movies you definitely want to watch?",
    "Which movie would you recommend to your friends?"
];

const quizContainer = document.getElementById("quiz");
const resultMessage = document.getElementById("resultMessage");

function buildQuiz() {
    quizData.forEach((question, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("form-group");
        
        const label = document.createElement("label");
        label.innerText = `${index + 1}. ${question}`;

        const answerInput = document.createElement("input");
        answerInput.type = "text";
        answerInput.classList.add("form-control");
        answerInput.placeholder = "Enter your answer";
        answerInput.id = `answer${index}`;

        questionDiv.appendChild(label);
        questionDiv.appendChild(answerInput);
        quizContainer.appendChild(questionDiv);
    });
}

function submitQuiz() {
    let answeredAll = true;

    quizData.forEach((question, index) => {
        const userAnswer = document.getElementById(`answer${index}`).value.trim();
        if (userAnswer === "") {
            answeredAll = false;
        }
    });

    if (answeredAll) {
        resultMessage.style.display = "block";
        quizContainer.style.display = "none";
    } else {
        alert("Please answer all questions.");
    }
}


buildQuiz();