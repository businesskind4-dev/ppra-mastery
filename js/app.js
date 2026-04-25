// ===== PPRA MASTERY - Dashboard Logic (with Anime.js animations) =====

// Part definitions
const partsData = [
    { number: 1, title: "Preliminary", sections: "1-5" },
    { number: 2, title: "Establishment of Authority and Board", sections: "6-19" },
    { number: 3, title: "Meetings and Proceedings of Board", sections: "20-25" },
    { number: 4, title: "CEO and Other Employees", sections: "26-32" },
    { number: 5, title: "Financial and Administrative Provisions", sections: "33-38" },
    { number: 6, title: "Procuring Entities and Accounting Officers", sections: "39-44" },
    { number: 7, title: "Procurement Oversight Units", sections: "45-51" },
    { number: 8, title: "Methods and Selection of Procurement", sections: "52-55" },
    { number: 9, title: "Standardised Bidding Packages", sections: "56-62" },
    { number: 10, title: "Evaluation and Adjudication Procedure", sections: "63-71" },
    { number: 11, title: "Reservation and Preferential Treatment", sections: "72-81" },
    { number: 12, title: "Accountability and Transparency", sections: "82-90" },
    { number: 13, title: "Registration of Contractors", sections: "91-103" },
    { number: 14, title: "Complaints and Dispute Resolution", sections: "104-113" },
    { number: 15, title: "Public Procurement Tribunal", sections: "114-138" },
    { number: 16, title: "General Provisions", sections: "139-152" }
];

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    initializeDashboard();
    loadUserName();
    loadScores();
    loadActivity();
    updateCertificationStatus();
    animateDashboardEntrance();
});

// ===== ANIMATIONS =====
function animateDashboardEntrance() {
    // 1. Welcome section fades in
    anime({
        targets: '#welcomeSection',
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 600,
        easing: 'easeOutQuad'
    });

    // 2. Progress section fades in slightly after
    anime({
        targets: '#progressSection',
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 600,
        delay: 200,
        easing: 'easeOutQuad'
    });

    // 3. Part cards stagger in one by one
    anime({
        targets: '.part-card',
        opacity: [0, 1],
        translateY: [15, 0],
        duration: 400,
        delay: anime.stagger(50, { start: 400 }),
        easing: 'easeOutQuad'
    });

    // 4. Activity section fades in
    anime({
        targets: '#activitySection',
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 600,
        delay: 600,
        easing: 'easeOutQuad'
    });

    // 5. Quick action cards fade in
    anime({
        targets: '#actionsSection',
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 600,
        delay: 800,
        easing: 'easeOutQuad'
    });
}

// Animate progress bar to target percentage
function animateProgressBar(targetPercentage) {
    anime({
        targets: '#overallProgressBar',
        width: targetPercentage + '%',
        duration: 1000,
        easing: 'easeInOutQuad',
        update: function(anim) {
            const val = Math.round(anim.progress / 100 * targetPercentage);
            document.getElementById('overallProgressBar').textContent = val + '%';
        },
        complete: function() {
            document.getElementById('overallProgressBar').textContent = targetPercentage + '%';
        }
    });
}

// ===== USER NAME MANAGEMENT =====
function loadUserName() {
    const savedName = localStorage.getItem('ppra_userName');
    const nameDisplay = document.getElementById('userNameDisplay');
    if (savedName) {
        nameDisplay.textContent = savedName;
    }
    
    document.getElementById('saveNameBtn').addEventListener('click', function() {
        const newName = nameDisplay.textContent.trim();
        if (newName && newName !== 'Procurement Professional') {
            localStorage.setItem('ppra_userName', newName);
            addActivity('✏️', 'Updated profile name to ' + newName);
            anime({
                targets: '#saveNameBtn',
                scale: [1, 1.15, 1],
                duration: 300,
                easing: 'easeInOutQuad'
            });
            alert('Name saved! It will appear on your certificate.');
        }
    });
}

// ===== LOAD SCORES AND UPDATE UI =====
function loadScores() {
    const scores = getScores();
    const partsGrid = document.getElementById('partsGrid');
    let masteredCount = 0;
    
    partsGrid.innerHTML = '';
    
    partsData.forEach(part => {
        const score = scores['part' + part.number] || null;
        const status = getPartStatus(score);
        
        if (status === 'mastered') masteredCount++;
        
        const card = createPartCard(part, score, status);
        partsGrid.appendChild(card);
    });
    
    document.getElementById('partsCompleted').textContent = masteredCount;
    document.getElementById('totalParts').textContent = '16';
    
    const percentage = Math.round((masteredCount / 16) * 100);
    document.getElementById('overallProgressBar').style.width = '0%';
    document.getElementById('overallProgressBar').textContent = '0%';
    
    setTimeout(function() {
        animateProgressBar(percentage);
    }, 500);
}

function getScores() {
    const saved = localStorage.getItem('ppra_scores');
    return saved ? JSON.parse(saved) : {};
}

function getPartStatus(score) {
    if (score === null || score === undefined) return 'notstarted';
    if (score >= 70) return 'mastered';
    return 'progress';
}

function createPartCard(part, score, status) {
    const div = document.createElement('div');
    div.className = 'part-card';
    
    const statusText = {
        'mastered': 'Mastered',
        'progress': 'In Progress',
        'notstarted': 'Not Started'
    };
    
    const statusClass = {
        'mastered': 'status-mastered',
        'progress': 'status-progress',
        'notstarted': 'status-notstarted'
    };
    
    const scoreDisplay = score !== null ? score + '%' : '—';
    const actionText = status === 'notstarted' ? 'Start' : 
                       status === 'progress' ? 'Continue' : 'Retake';
    
    div.innerHTML = `
        <div class="part-info">
            <div class="part-title">Part ${part.number}: ${part.title}</div>
            <div class="part-sections">Sections ${part.sections}</div>
        </div>
        <div class="part-status">
            <span class="status-badge ${statusClass[status]}">${statusText[status]}</span>
            <span class="part-score">${scoreDisplay}</span>
            <a href="test.html?part=${part.number}" class="btn-icon">${actionText}</a>
        </div>
    `;
    
    return div;
}

// ===== ACTIVITY LOG =====
function addActivity(icon, text) {
    const activities = getActivities();
    activities.unshift({
        icon: icon,
        text: text,
        time: new Date().toISOString()
    });
    
    if (activities.length > 20) activities.pop();
    
    localStorage.setItem('ppra_activities', JSON.stringify(activities));
    loadActivity();
}

function getActivities() {
    const saved = localStorage.getItem('ppra_activities');
    return saved ? JSON.parse(saved) : [];
}

function loadActivity() {
    const activities = getActivities();
    const activityList = document.getElementById('activityList');
    
    if (activities.length === 0) {
        activityList.innerHTML = '<p class="empty-message">No activity yet. Take your first test!</p>';
        return;
    }
    
    activityList.innerHTML = '';
    activities.slice(0, 10).forEach(function(activity) {
        const item = document.createElement('div');
        item.className = 'activity-item';
        
        const time = new Date(activity.time);
        const timeStr = formatTimeAgo(time);
        
        item.innerHTML = `
            <span class="activity-icon">${activity.icon}</span>
            <div class="activity-details">
                <div class="activity-text">${activity.text}</div>
                <div class="activity-time">${timeStr}</div>
            </div>
        `;
        
        activityList.appendChild(item);
    });
}

function formatTimeAgo(date) {
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);
    
    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return diffMins + ' min' + (diffMins === 1 ? '' : 's') + ' ago';
    if (diffHours < 24) return diffHours + ' hour' + (diffHours === 1 ? '' : 's') + ' ago';
    if (diffDays < 7) return diffDays + ' day' + (diffDays === 1 ? '' : 's') + ' ago';
    
    return date.toLocaleDateString();
}

// ===== CERTIFICATION STATUS =====
function updateCertificationStatus() {
    const scores = getScores();
    const masteredCount = Object.values(scores).filter(function(s) { return s >= 70; }).length;
    const isEligible = masteredCount === 16;
    
    const certAction = document.getElementById('certificateAction');
    const certHint = document.getElementById('certificateHint');
    const certMessage = document.getElementById('certificationMessage');
    
    if (isEligible) {
        certAction.classList.remove('disabled');
        certAction.setAttribute('href', 'certificate.html');
        certHint.textContent = 'You earned it! Click to view and print';
        certMessage.innerHTML = '🎉 Congratulations! You have mastered all 16 Parts. Your certificate is ready!';
    } else {
        certAction.classList.add('disabled');
        certAction.removeAttribute('href');
        certHint.textContent = (16 - masteredCount) + ' part' + (16 - masteredCount === 1 ? '' : 's') + ' remaining';
        certMessage.innerHTML = '🔒 Complete all 16 Parts with 70% or higher to unlock your certificate (' + masteredCount + '/16 mastered)';
    }
}

// ===== CLEAR HISTORY =====
document.addEventListener('DOMContentLoaded', function() {
    const clearBtn = document.getElementById('clearHistoryBtn');
    if (clearBtn) {
        clearBtn.addEventListener('click', function() {
            if (confirm('Clear all activity history? This won\'t affect your test scores.')) {
                localStorage.removeItem('ppra_activities');
                loadActivity();
                addActivity('🧹', 'Cleared activity history');
            }
        });
    }
});

// ===== INITIALIZE DASHBOARD =====
function initializeDashboard() {
    if (!localStorage.getItem('ppra_initialized')) {
        localStorage.setItem('ppra_initialized', 'true');
        setTimeout(function() {
            addActivity('🎉', 'Welcome to PPRA Mastery! Start with Part I.');
        }, 100);
    }
}