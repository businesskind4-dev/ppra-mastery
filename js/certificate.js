// ===== PPRA MASTERY - Certificate Logic with Animations =====

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

document.addEventListener('DOMContentLoaded', function() {
    checkEligibility();
    setupPrintButton();
});

function checkEligibility() {
    const scores = getScores();
    const masteredParts = [];
    const missingParts = [];
    
    partsData.forEach(part => {
        const score = scores['part' + part.number];
        if (score && score >= 70) {
            masteredParts.push(Object.assign({}, part, { score: score }));
        } else {
            missingParts.push(Object.assign({}, part, { score: score || null }));
        }
    });
    
    const isEligible = masteredParts.length === 16;
    
    if (isEligible) {
        showCertificate(masteredParts);
    } else {
        showNotEligible(masteredParts.length, missingParts);
    }
}

function getScores() {
    const saved = localStorage.getItem('ppra_scores');
    return saved ? JSON.parse(saved) : {};
}

function showCertificate(masteredParts) {
    document.getElementById('certificateView').style.display = 'block';
    document.getElementById('notEligibleView').style.display = 'none';
    
    // Set user name
    const userName = localStorage.getItem('ppra_userName') || 'Procurement Professional';
    document.getElementById('certUserName').textContent = userName;
    
    // Set completion date
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    document.getElementById('completionDate').textContent = formattedDate;
    
    // Build scores table
    const tableBody = document.getElementById('scoresTable');
    let totalScore = 0;
    
    let tableHtml = `
        <thead>
            <tr>
                <th>Part</th>
                <th>Title</th>
                <th>Score</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
    `;
    
    masteredParts.forEach(part => {
        totalScore += part.score;
        tableHtml += `
            <tr>
                <td>Part ${part.number}</td>
                <td>${part.title}</td>
                <td>${part.score}%</td>
                <td>✅ Mastered</td>
            </tr>
        `;
    });
    
    const average = Math.round(totalScore / masteredParts.length);
    
    tableHtml += `
        </tbody>
        <tfoot>
            <tr style="font-weight: 700; background: var(--gray-100);">
                <td colspan="2">OVERALL AVERAGE</td>
                <td colspan="2">${average}%</td>
            </tr>
        </tfoot>
    `;
    
    tableBody.innerHTML = tableHtml;
    document.getElementById('overallAverage').textContent = average + '%';
    
    localStorage.setItem('ppra_certificateEarned', 'true');
    addActivity('🏆', 'Certificate of Competency earned!');
    
    // Animate certificate entrance
    animateCertificateEntrance();
}

function animateCertificateEntrance() {
    // Certificate card scales in with a slight bounce
    anime({
        targets: '#certificateCard',
        opacity: [0, 1],
        scale: [0.95, 1],
        duration: 800,
        easing: 'easeOutElastic(1, .6)',
        complete: function() {
            // Actions fade in after the card appears
            anime({
                targets: '#certificateActions',
                opacity: [0, 1],
                translateY: [10, 0],
                duration: 400,
                easing: 'easeOutQuad'
            });
        }
    });
}

function showNotEligible(masteredCount, missingParts) {
    document.getElementById('certificateView').style.display = 'none';
    document.getElementById('notEligibleView').style.display = 'block';
    
    const percentage = Math.round((masteredCount / 16) * 100);
    const progressBar = document.getElementById('eligibilityProgressBar');
    
    document.getElementById('masteredCount').textContent = masteredCount;
    
    // List missing parts
    const missingList = document.getElementById('missingPartsList');
    if (missingParts.length === 0) {
        missingList.innerHTML = '<li>🎉 All parts have been attempted! Just need scores ≥70%.</li>';
    } else {
        let html = '';
        missingParts.forEach(part => {
            const scoreText = part.score ? ' (Current: ' + part.score + '%)' : ' (Not started)';
            html += '<li style="padding: 0.5rem 0; border-bottom: 1px solid var(--gray-200);">📌 Part ' + part.number + ': ' + part.title + scoreText + '</li>';
        });
        missingList.innerHTML = html;
    }
    
    // Animate the not-eligible view
    anime({
        targets: '#notEligibleView',
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 600,
        easing: 'easeOutQuad',
        complete: function() {
            // Animate progress bar
            anime({
                targets: progressBar,
                width: percentage + '%',
                duration: 1000,
                easing: 'easeInOutQuad',
                update: function() {
                    const currentWidth = parseFloat(progressBar.style.width);
                    progressBar.textContent = Math.round(currentWidth) + '%';
                }
            });
            
            // Fade in action buttons
            anime({
                targets: '#notEligibleActions',
                opacity: [0, 1],
                translateY: [10, 0],
                duration: 400,
                easing: 'easeOutQuad'
            });
        }
    });
}

function setupPrintButton() {
    const printBtn = document.getElementById('printCertificateBtn');
    if (printBtn) {
        printBtn.addEventListener('click', function() {
            window.print();
        });
    }
}

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