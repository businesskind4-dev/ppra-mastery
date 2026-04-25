// ===== PPRA MASTERY - Quiz Logic with Animations =====

let currentPart = 1;
let currentQuestionIndex = 0;
let userAnswers = [];
let testQuestions = [];
let testStarted = false;

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    checkUrlForPart();
    setupEventListeners();
});

function checkUrlForPart() {
    const urlParams = new URLSearchParams(window.location.search);
    const part = urlParams.get('part');
    if (part) {
        document.getElementById('partSelect').value = part;
        startTest();
    }
}

function setupEventListeners() {
    document.getElementById('startTestBtn').addEventListener('click', startTest);
    document.getElementById('prevQuestionBtn').addEventListener('click', prevQuestion);
    document.getElementById('nextQuestionBtn').addEventListener('click', nextQuestion);
    document.getElementById('submitTestBtn').addEventListener('click', submitTest);
    document.getElementById('retakeTestBtn').addEventListener('click', retakeTest);
}

// ===== START TEST =====
function startTest() {
    currentPart = parseInt(document.getElementById('partSelect').value);
    const partData = quizQuestions['part' + currentPart];
    
    if (!partData || !partData.questions || partData.questions.length === 0) {
        alert('Questions for this part are not yet available. Please check back later.');
        return;
    }
    
    testQuestions = partData.questions;
    currentQuestionIndex = 0;
    userAnswers = new Array(testQuestions.length).fill(null);
    testStarted = true;
    
    // Show test area, hide selector and results
    document.getElementById('partSelector').style.display = 'none';
    document.getElementById('activeTest').style.display = 'block';
    document.getElementById('resultsArea').style.display = 'none';
    
    document.getElementById('testPartTitle').textContent = partData.title;
    document.getElementById('testPartSections').textContent = partData.sections;
    
    loadQuestion(currentQuestionIndex);
    updateProgress();
    updateNavButtons();
    
    // Animate entrance
    animateTestEntrance();
    
    // Log activity
    addActivity('📝', 'Started test for Part ' + currentPart + ': ' + partData.title);
}

function animateTestEntrance() {
    // Test header fades in
    anime({
        targets: '#testHeader',
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 500,
        easing: 'easeOutQuad'
    });
    
    // Question card fades in after a short delay
    anime({
        targets: '#questionCard',
        opacity: [0, 1],
        translateY: [15, 0],
        duration: 400,
        delay: 200,
        easing: 'easeOutQuad'
    });
    
    // Action buttons fade in
    anime({
        targets: '#testActions',
        opacity: [0, 1],
        duration: 400,
        delay: 400,
        easing: 'easeOutQuad'
    });
}

// ===== LOAD QUESTION =====
function loadQuestion(index) {
    const question = testQuestions[index];
    const card = document.getElementById('questionCard');
    
    let optionsHtml = '';
    question.options.forEach((option, i) => {
        const checked = userAnswers[index] === i ? 'checked' : '';
        const selectedClass = userAnswers[index] === i ? 'selected' : '';
        optionsHtml += `
            <div class="option-item ${selectedClass}" data-option="${i}">
                <input type="radio" name="question" value="${i}" id="opt${i}" ${checked}>
                <label for="opt${i}">${option}</label>
            </div>
        `;
    });
    
    card.innerHTML = `
        <div class="question-number">Question ${index + 1} of ${testQuestions.length}</div>
        <div class="question-text">${question.question}</div>
        <div class="options-list">
            ${optionsHtml}
        </div>
    `;
    
    // Add click handlers
    document.querySelectorAll('.option-item').forEach(item => {
        item.addEventListener('click', function() {
            const optionIndex = parseInt(this.dataset.option);
            selectOption(optionIndex);
        });
    });
    
    // Subtle fade-in animation for the new question
    anime({
        targets: '#questionCard',
        opacity: [0, 1],
        translateY: [10, 0],
        duration: 300,
        easing: 'easeOutQuad'
    });
}

function selectOption(optionIndex) {
    userAnswers[currentQuestionIndex] = optionIndex;
    
    // Update UI selection
    document.querySelectorAll('.option-item').forEach((item, i) => {
        item.classList.toggle('selected', i === optionIndex);
        item.querySelector('input[type="radio"]').checked = (i === optionIndex);
    });
    
    updateNavButtons();
    
    // Tiny feedback
    anime({
        targets: '.option-item.selected',
        scale: [1, 1.02, 1],
        duration: 200,
        easing: 'easeInOutQuad'
    });
}

// ===== NAVIGATION =====
function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion(currentQuestionIndex);
        updateProgress();
        updateNavButtons();
    }
}

function nextQuestion() {
    if (currentQuestionIndex < testQuestions.length - 1) {
        currentQuestionIndex++;
        loadQuestion(currentQuestionIndex);
        updateProgress();
        updateNavButtons();
    }
}

function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / testQuestions.length) * 100;
    anime({
        targets: '#testProgressBar',
        width: progress + '%',
        duration: 300,
        easing: 'easeOutQuad',
        update: function() {
            document.getElementById('testProgressBar').textContent = Math.round(progress) + '%';
        }
    });
    document.getElementById('questionCounter').textContent = 'Question ' + (currentQuestionIndex + 1) + ' of ' + testQuestions.length;
}

function updateNavButtons() {
    document.getElementById('prevQuestionBtn').disabled = (currentQuestionIndex === 0);
    
    const isLast = currentQuestionIndex === testQuestions.length - 1;
    const allAnswered = userAnswers.every(a => a !== null);
    
    document.getElementById('nextQuestionBtn').style.display = isLast ? 'none' : 'block';
    document.getElementById('submitTestBtn').style.display = isLast ? 'block' : 'none';
    document.getElementById('submitTestBtn').disabled = !allAnswered;
}

// ===== SUBMIT TEST =====
function submitTest() {
    let correctCount = 0;
    const results = [];
    
    testQuestions.forEach((q, i) => {
        const isCorrect = userAnswers[i] === q.answer;
        if (isCorrect) correctCount++;
        results.push({
            question: q.question,
            userAnswer: userAnswers[i],
            correctAnswer: q.answer,
            isCorrect: isCorrect,
            explanation: q.explanation,
            options: q.options
        });
    });
    
    const score = Math.round((correctCount / testQuestions.length) * 100);
    const isMastered = score >= 70;
    
    saveScore(currentPart, score);
    displayResults(score, isMastered, results);
    
    addActivity(isMastered ? '✅' : '📊', 'Completed Part ' + currentPart + ' test with score: ' + score + '%');
}

function saveScore(part, score) {
    const scores = JSON.parse(localStorage.getItem('ppra_scores') || '{}');
    scores['part' + part] = score;
    localStorage.setItem('ppra_scores', JSON.stringify(scores));
}

function displayResults(score, isMastered, results) {
    document.getElementById('activeTest').style.display = 'none';
    document.getElementById('resultsArea').style.display = 'block';
    
    const resultsCard = document.getElementById('resultsCard');
    // Reset opacity for animation
    resultsCard.style.opacity = '0';
    resultsCard.style.transform = 'translateY(20px)';
    
    // Animate score counting up
    const scoreEl = document.getElementById('finalScore');
    scoreEl.textContent = '0%';
    anime({
        targets: { val: 0 },
        val: score,
        round: 1,
        duration: 1200,
        easing: 'easeOutQuad',
        update: function(anim) {
            scoreEl.textContent = Math.round(anim.animations[0].currentValue) + '%';
        },
        complete: function() {
            // Bounce if mastered
            if (isMastered) {
                anime({
                    targets: scoreEl,
                    scale: [1, 1.2, 1],
                    duration: 500,
                    easing: 'easeInOutQuad'
                });
            }
        }
    });
    
    const statusDiv = document.getElementById('scoreStatus');
    if (isMastered) {
        statusDiv.innerHTML = '<span class="status-mastered">✅ PART MASTERED!</span>';
        statusDiv.className = 'score-status status-mastered';
    } else {
        statusDiv.innerHTML = '<span class="status-failed">⚠️ Not yet mastered (70% required)</span>';
        statusDiv.className = 'score-status status-failed';
    }
    
    // Breakdown
    const correctCount = results.filter(r => r.isCorrect).length;
    const incorrectCount = results.length - correctCount;
    
    document.getElementById('breakdownList').innerHTML = `
        <div class="breakdown-item">
            <span>✅ Correct</span>
            <span class="correct">${correctCount}</span>
        </div>
        <div class="breakdown-item">
            <span>❌ Incorrect</span>
            <span class="incorrect">${incorrectCount}</span>
        </div>
        <div class="breakdown-item">
            <span>📊 Total Questions</span>
            <span>${results.length}</span>
        </div>
    `;
    
    // Review missed
    const missedQuestions = results.filter(r => !r.isCorrect);
    let reviewHtml = '<h3 style="margin: 2rem 0 1rem 0;">Review Incorrect Answers</h3>';
    
    if (missedQuestions.length === 0) {
        reviewHtml += '<p style="color: var(--success);">🎉 Perfect score! No questions missed.</p>';
    } else {
        missedQuestions.forEach((r, i) => {
            reviewHtml += `
                <div class="explanation-box">
                    <p><strong>Question:</strong> ${r.question}</p>
                    <p style="color: var(--danger); margin-top: 0.5rem;">
                        Your answer: ${r.options[r.userAnswer] || 'Not answered'}
                    </p>
                    <p style="color: var(--success);">
                        Correct answer: ${r.options[r.correctAnswer]}
                    </p>
                    <p style="margin-top: 0.5rem; color: var(--gray-600);">
                        <em>${r.explanation}</em>
                    </p>
                </div>
            `;
        });
    }
    
    document.getElementById('reviewSection').innerHTML = reviewHtml;
    
    // Animate results card entrance
    anime({
        targets: resultsCard,
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 600,
        easing: 'easeOutQuad'
    });
}

// ===== RETAKE TEST =====
function retakeTest() {
    document.getElementById('resultsArea').style.display = 'none';
    startTest();
}

// ===== ACTIVITY LOGGING =====
function addActivity(icon, text) {
    const activities = JSON.parse(localStorage.getItem('ppra_activities') || '[]');
    activities.unshift({
        icon: icon,
        text: text,
        time: new Date().toISOString()
    });
    if (activities.length > 20) activities.pop();
    localStorage.setItem('ppra_activities', JSON.stringify(activities));
}