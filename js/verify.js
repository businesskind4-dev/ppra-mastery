// ===== PPRA MASTERY - Certificate Verification =====

document.addEventListener('DOMContentLoaded', function() {
    setupVerify();
    checkUrlParam();
});

function checkUrlParam() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    if (id) {
        document.getElementById('credentialInput').value = id;
        verifyCredential(id);
    }
}

function setupVerify() {
    document.getElementById('verifyBtn').addEventListener('click', function() {
        const id = document.getElementById('credentialInput').value.trim();
        if (!id) {
            alert('Please enter a credential ID.');
            return;
        }
        verifyCredential(id);
    });
    
    // Also verify on Enter key
    document.getElementById('credentialInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            document.getElementById('verifyBtn').click();
        }
    });
}

function verifyCredential(id) {
    const resultDiv = document.getElementById('verifyResult');
    
    // Check if this credential exists in localStorage
    const certificates = getStoredCertificates();
    const match = certificates.find(c => c.id === id);
    
    if (match) {
        resultDiv.className = 'verify-result verify-valid';
        resultDiv.innerHTML = `
            <p style="font-size: 1.25rem;">✅ <strong>Certificate Verified</strong></p>
            <p class="verify-name">${match.name}</p>
            <p class="verify-date">Issued: ${match.date}</p>
            <p class="verify-score">Overall Score: ${match.score}%</p>
            <p style="margin-top: 1rem; font-size: 0.85rem; color: #065f46;">
                This certificate was earned through the PPRA Mastery platform, an independent 
                study tool covering all 16 Parts of the Public Procurement Act, 2021.
            </p>
        `;
    } else {
        resultDiv.className = 'verify-result verify-invalid';
        resultDiv.innerHTML = `
            <p style="font-size: 1.1rem;">❌ <strong>Certificate Not Found</strong></p>
            <p style="margin-top: 0.5rem;">The credential ID <strong>"${id}"</strong> does not match any verified certificate.</p>
            <p style="margin-top: 0.5rem; font-size: 0.85rem;">
                Make sure the ID was entered correctly. Credential IDs are case-sensitive 
                and follow the format: PPRA-YYYYMMDD-XXXXXXXX.
            </p>
        `;
    }
}

function getStoredCertificates() {
    // In a real system, this would query a server database.
    // For this demo, certificates are stored in localStorage.
    // When a user earns a certificate on their device, it's saved here.
    const saved = localStorage.getItem('ppra_certificate_credentials');
    return saved ? JSON.parse(saved) : [];
}
