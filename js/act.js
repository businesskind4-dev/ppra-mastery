// ===== PPRA MASTERY - Act Viewer Logic =====

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

let currentPart = 1;
let actContent = {};

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    loadTableOfContents();
    loadActContent();
    loadPart(currentPart);
    setupEventListeners();
});

// ===== TABLE OF CONTENTS =====
function loadTableOfContents() {
    const tocList = document.getElementById('tocList');
    
    partsData.forEach(part => {
        const li = document.createElement('li');
        li.className = 'toc-item';
        li.innerHTML = `
            <a href="#" class="toc-link" data-part="${part.number}">
                <span class="toc-part">Part ${part.number}: ${part.title}</span>
                <span class="toc-sections">(ss ${part.sections})</span>
            </a>
        `;
        tocList.appendChild(li);
    });
    
    document.querySelectorAll('.toc-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const part = parseInt(this.dataset.part);
            loadPart(part);
            updateActiveTocLink(part);
        });
    });
}

function updateActiveTocLink(part) {
    document.querySelectorAll('.toc-link').forEach(link => {
        link.classList.remove('active');
        if (parseInt(link.dataset.part) === part) {
            link.classList.add('active');
        }
    });
}

// ===== LOAD PART CONTENT =====
function loadPart(part) {
    currentPart = part;
    
    const partData = partsData[part - 1];
    const displayDiv = document.getElementById('currentPartDisplay');
    const partIndicator = document.getElementById('partIndicator');
    const testBtn = document.getElementById('takeTestBtn');
    
    partIndicator.textContent = 'Part ' + part + ' of XVI';
    testBtn.href = 'test.html?part=' + part;
    
    document.getElementById('prevPartBtn').disabled = (part === 1);
    document.getElementById('nextPartBtn').disabled = (part === 16);
    
    if (actContent['part' + part]) {
        displayDiv.innerHTML = actContent['part' + part];
    } else {
        displayDiv.innerHTML = '<p style="color: var(--gray-600); padding: 2rem; text-align: center;">Content loading...</p>';
    }
    
    updateActiveTocLink(part);
    document.getElementById('actContent').scrollTop = 0;
}

// ===== NAVIGATION =====
function setupEventListeners() {
    document.getElementById('prevPartBtn').addEventListener('click', function() {
        if (currentPart > 1) loadPart(currentPart - 1);
    });
    
    document.getElementById('nextPartBtn').addEventListener('click', function() {
        if (currentPart < 16) loadPart(currentPart + 1);
    });
    
    const searchInput = document.getElementById('searchInput');
    let debounceTimer;
    
    searchInput.addEventListener('input', function() {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            performSearch(this.value);
        }, 300);
    });
}

// ===== SEARCH FUNCTIONALITY =====
function performSearch(query) {
    const resultsDiv = document.getElementById('searchResults');
    
    if (!query || query.length < 3) {
        resultsDiv.innerHTML = '';
        return;
    }
    
    query = query.toLowerCase();
    const results = [];
    
    for (let part = 1; part <= 16; part++) {
        const content = actContent['part' + part];
        if (!content) continue;
        
        const textContent = content.replace(/<[^>]*>/g, ' ').toLowerCase();
        
        if (textContent.includes(query)) {
            const index = textContent.indexOf(query);
            const start = Math.max(0, index - 60);
            const end = Math.min(textContent.length, index + query.length + 60);
            let preview = textContent.substring(start, end);
            
            if (start > 0) preview = '...' + preview;
            if (end < textContent.length) preview = preview + '...';
            
            results.push({
                part: part,
                title: partsData[part - 1].title,
                preview: preview,
                query: query
            });
        }
    }
    
    displaySearchResults(results, query);
}

function displaySearchResults(results, query) {
    const resultsDiv = document.getElementById('searchResults');
    
    if (results.length === 0) {
        resultsDiv.innerHTML = '<p class="no-results">No results found for "' + query + '"</p>';
        return;
    }
    
    let html = '<p style="font-size: 0.8rem; color: var(--gray-600); margin-bottom: 0.5rem;">Found ' + results.length + ' match' + (results.length === 1 ? '' : 'es') + '</p>';
    
    results.forEach(result => {
        html += `
            <div class="search-result-item" data-part="${result.part}">
                <div class="search-result-title">Part ${result.part}: ${result.title}</div>
                <div class="search-result-preview">${highlightText(result.preview, result.query)}</div>
            </div>
        `;
    });
    
    resultsDiv.innerHTML = html;
    
    document.querySelectorAll('.search-result-item').forEach(item => {
        item.addEventListener('click', function() {
            const part = parseInt(this.dataset.part);
            loadPart(part);
            document.getElementById('searchInput').value = '';
            resultsDiv.innerHTML = '';
            setTimeout(() => { highlightInContent(query); }, 100);
        });
    });
}

function highlightText(text, query) {
    const regex = new RegExp('(' + query + ')', 'gi');
    return text.replace(regex, '<span class="highlight">$1</span>');
}

function highlightInContent(query) {
    const contentDiv = document.getElementById('currentPartDisplay');
    let html = contentDiv.innerHTML;
    const regex = new RegExp('(' + query + ')(?![^<]*>)', 'gi');
    html = html.replace(regex, '<span class="highlight">$1</span>');
    contentDiv.innerHTML = html;
}

// ===== LOAD ACT CONTENT (ALL 16 PARTS) =====
function loadActContent() {
    
    // PART I - PRELIMINARY (Sections 1-5)
    actContent.part1 = `
        <div class="section-content">
            <h3>PART I — Preliminary (Sections 1-5)</h3>
            
            <h4>1. Short title and commencement</h4>
            <p>This Act may be cited as the Public Procurement Act, 2021, and shall come into operation on such date as the Minister may, by Order published in the Gazette, appoint.</p>
            
            <h4>2. Interpretation</h4>
            <p>In this Act, unless the context otherwise requires—</p>
            <p class="subsection">"Accounting Officer" means a person who is responsible for the administration and day-to-day management of the affairs of a procuring entity, and any other person, who may be designated as such by the Minister under this Act;</p>
            <p class="subsection">"any combination thereof, however classified" means, in relation to works, services and supplies, a turnkey project or any arrangement in this genre, which may include management, maintenance, testing, commissioning or training;</p>
            <p class="subsection">"Authority" means the Public Procurement Regulatory Authority continued under section 6;</p>
            <p class="subsection">"bid" means a written offer in the form determined by an instruction, in response to an invitation for the procurement of works, services or supplies to submit an offer, including an unsolicited bid;</p>
            <p class="subsection">"bidder" means a contractor who responds to an invitation to bid by submitting an offer in procurement proceedings;</p>
            <p class="subsection">"bidding package" includes an invitation to tender, solicitation documents, a statement of requirements or any other documents inviting bidders to participate in procurement proceedings, including documents inviting potential bidders for prequalification;</p>
            <p class="subsection">"Board" means the Public Procurement Regulatory Authority Board established under section 12;</p>
            <p class="subsection">"Chief Executive Officer" means the Chief Executive Officer of the Authority appointed under section 26;</p>
            <p class="subsection">"citizen contractor" means a natural person or an incorporated company wholly owned and controlled by persons who are citizens of Botswana;</p>
            <p class="subsection">"code of conduct" means a code of conduct of contractors provided for under section 99;</p>
            <p class="subsection">"common use items" includes works, services or supplies that are usable by a procuring entity irrespective of type or category, and items as may be prescribed;</p>
            <p class="subsection">"competent authority" means a person, body of persons, organ or agency competent to take action as may be referred to or directed to it by the Authority, or any other person authorised, under this Act;</p>
            <p class="subsection">"consultancy services" means activities of an intellectual and advisory nature that do not lead to a measurable physical output and include design, supervision, training, advisory, auditing, software development and similar services;</p>
            <p class="subsection">"contract" means an agreement between a procuring entity and a contractor resulting from the application of the appropriate and approved procurement procedures and proceedings, and concluded in pursuance of a bid award decision;</p>
            <p class="subsection">"contractor" or "service provider" means a natural person or an incorporated body licensed by a competent authority to undertake works, services, supplies or any combination thereof, however classified;</p>
            <p class="subsection">"Contractors' Register" means a Contractors' Register kept and maintained by the Authority in accordance with Part XIII;</p>
            <p class="subsection">"cooling-off period" means the period which starts from the time of the publication of an award decision to a bidder for a period provided under section 104(1)(a);</p>
            <p class="subsection">"day" means a day of the week other than Saturday, Sunday or a public holiday under the Public Holidays Act;</p>
            <p class="subsection">"Department" means a public entity, extra ministerial body or a subdivision of the central Government, including state-owned entities, local authorities, Land Boards, parastatals, schools and hospitals that derive their regular funding from the Consolidated Fund;</p>
            <p class="subsection">"emergency" means a natural disaster, epidemic, pandemic, riot, war, fire, flood or any other situation that may result in the threat to (a) life; or (b) health, welfare or safety of the public, which requires immediate action;</p>
            <p class="subsection">"eProcurement" means the process of procurement using electronic medium;</p>
            <p class="subsection">"Evaluation Committee" means an ad hoc committee set up by the Accounting Officer to review and evaluate proposals submitted in response to an invitation to bid and make selection recommendation;</p>
            <p class="subsection">"framework contract" means a contractual arrangement which allows a procuring entity to procure goods, services or works that are needed continuously or repeatedly at an agreed price over an agreed period of time through placement of orders and when the need arises;</p>
            <p class="subsection">"immediate family member" has the same meaning assigned to it under the Corruption and Economic Crime Act;</p>
            <p class="subsection">"industry standards" means best practices, and include practices and standards which (a) are safe and environmentally friendly; (b) are innovative and increase efficiency; (c) save time and costs; (d) relate to materials, processes, methods, designs, equipment, products, services and practices; and (e) are defined and coded by internationally recognised contractors' associations and professional bodies in the concerned fields;</p>
            <p class="subsection">"integrity agreement" means an agreement between a procuring entity and a contractor which regulates ethical behaviour and integrity during a bidding process and execution of a contract;</p>
            <p class="subsection">"local authority" means a city council, town council, township authority, district council, sub district council or an administrative authority;</p>
            <p class="subsection">"local contractor" means a contractor whose operation is based in Botswana, irrespective of the contractor's nationality or domicile;</p>
            <p class="subsection">"member" means a member of the Board;</p>
            <p class="subsection">"model structure" means a structure that is provided by the Authority for standardisation to ensure that (a) a procuring entity has the appropriate structure according to its capacity and matters it handles; and (b) proper segregation of duties is in place;</p>
            <p class="subsection">"National Archives and Records Services" has the same meaning assigned to it under the National Archives and Records Services Act;</p>
            <p class="subsection">"National eProcurement System" means the end-to-end electronic procurement system established under section 55;</p>
            <p class="subsection">"pre-qualification" means a screening process designed to ensure that invitations to bid are confined to capable contractors;</p>
            <p class="subsection">"procurement" means the acquisition in the public interest by any means, including purchase, rental, lease, hire-purchase, licence, tenancy, franchise, auction, reverse auction, public private partnership, of any type of works, services or supplies of any combination thereof, however classified, and includes management, maintenance, testing, training and commissioning;</p>
            <p class="subsection">"procurement agent" means a natural person or an incorporated company engaged by a procuring entity to perform or carry out a procurement activity on behalf of the procuring entity in accordance with the provisions of this Act;</p>
            <p class="subsection">"procurement practitioner" means any person or a procurement personnel who provides input in whatsoever form or contribution, in part or in full, or has been or will be involved in the process of public procurement, directly or indirectly;</p>
            <p class="subsection">"procuring entity" means any Ministry or Department duly authorised to engage in public procurement, and includes (a) all entities of the central and local Government, and local authority which are involved in public procurement, whether they are located abroad or within Botswana; (b) every public body, unless specifically exempted from the application of this Act by the Minister, under section 3; and (c) any other body or entity that is the recipient of public funds and uses the said funds for public procurement purposes;</p>
            <p class="subsection">"public body" means any office, organisation, establishment or body created by or under any enactment or under powers conferred by any enactment; or any organisation, trust, company or body where public moneys are used and includes (a) any Ministry or Department; (b) a local authority; (c) land board; (d) statutory body; and (e) a company registered under the Companies Act being a company in which the Government or an agency of the Government through holding of shares or otherwise, is in a position to direct the operations of that company;</p>
            <p class="subsection">"public funds" means monetary resources appropriated to a procuring entity through budgetary processes, and includes the Consolidated Fund provided under the Public Finance Management Act, grant, loan and credit put at the disposal of the procuring entity by a local or foreign donor, and revenue generated by such procuring entity;</p>
            <p class="subsection">"Public Oversight Agencies" means the Auditor-General's Office, the Directorate on Corruption and Economic Crime, the Financial Intelligence Agency, Competition and Consumer Protection Authority, the office of the Ombudsman and any other institution charged with the responsibility to oversee the activities of other Departments;</p>
            <p class="subsection">"public private partnership" has the same meaning assigned to it under the Public Finance Management Act;</p>
            <p class="subsection">"registered contractor" means a contractor registered by the Authority in accordance with this Act;</p>
            <p class="subsection">"repealed Act" means the Public Procurement and Asset Disposal Act repealed under section 151;</p>
            <p class="subsection">"retroactive approval" means a formal approval of a bid or invitation to tender made effective or operative as of a date prior to a procurement process;</p>
            <p class="subsection">"reverse auction" means a purchasing technique utilised by a procuring entity to select a successful submission, which involves the presentation by a supplier or contractor of a successively lowered bid during a scheduled period of time and the evaluation of the bids;</p>
            <p class="subsection">"sensitive procurement" means procurement of highly sensitive works, services, supplies and properties, or any combination thereof, however classified, which may require confidentiality or secrecy;</p>
            <p class="subsection">"services" means all services, other than works and supplies, including banking services, insurance coverage services, travel services, cleaning services, and includes consultancy services, management, maintenance and commissioning;</p>
            <p class="subsection">"specifications" means the national standards specifications, and includes (a) a generic or functional description of the qualities required of a procurement item; (b) the relevant industry standards of approaching and executing the assignment in question; and (c) the appropriate good practice tests that are to be used to verify the specified quality and performance of the procured item before delivery, on delivery, during installation and in the course of operation as applicable and the use of which shall be mandatory in all bidding packages;</p>
            <p class="subsection">"supplies" means goods, raw materials, products, equipment or objects of any kind and description in solid, liquid or gaseous form, and in the form of electricity, as well as services incidental to the provision of such supplies;</p>
            <p class="subsection">"Tender Notice" means any invitation to eligible contractors to submit written offers to provide works, services and supplies, or any combination thereof, however classified;</p>
            <p class="subsection">"Tribunal" means the Public Procurement Tribunal established under section 114;</p>
            <p class="subsection">"unsolicited bid" means a proposal that demonstrates substantial, technical or financial innovation, or meets an unidentified need submitted to a procuring entity for consideration in the absence of an invitation by the procuring entity; and</p>
            <p class="subsection">"works" means any work associated with the construction, reconstruction, demolition, repair or renovation of a building or structure, on the surface or underground, on or under water, and includes the preparation, excavation, erection, assembly, installation, testing and commissioning of any plant, equipment or materials, decoration and finishing, as well as services incidental to or independent of the foregoing works such as drilling, mapping, satellite photography, seismic investigations, similar services, and any combination thereof, however classified, provided pursuant to a contract.</p>
            
            <h4>3. Application of Act in public procurement</h4>
            <p>This Act shall apply to—</p>
            <p class="subsection">(a) a Department;</p>
            <p class="subsection">(b) a public body, parastatal and statutory body, except where exempted by the Minister by Order published in the Gazette;</p>
            <p class="subsection">(c) the procurement of assets acquired through (i) purchase, (ii) rental, (iii) lease, (iv) hire-purchase, (v) licence, (vi) tenancy, or (vii) franchise;</p>
            <p class="subsection">(d) the procurement of all works, services, supplies, or any combination thereof, however classified; and</p>
            <p class="subsection">(e) the sensitive procurement of works, services, supplies, or any combination thereof, however classified.</p>
            
            <h4>4. Application of Act in public private partnership</h4>
            <p>(1) This Act shall apply to an approved procurement activity under a public private partnership.</p>
            <p>(2) The Minister may prescribe a structural arrangement, procedure and processes relating to a procurement activity under a public private partnership under this Act.</p>
            
            <h4>5. Conflict with other laws</h4>
            <p>In the event of any conflict or inconsistency between the provisions of this Act and any other law on public procurement, the provisions of this Act shall take precedence.</p>
        </div>
    `;

    // PART II - ESTABLISHMENT OF AUTHORITY AND BOARD (Sections 6-19)
    actContent.part2 = `
        <div class="section-content">
            <h3>PART II — Establishment of Public Procurement Regulatory Authority and Board (Sections 6-19)</h3>
            
            <h4>6. Continuation of Authority</h4>
            <p>(1) The Public Procurement and Asset Disposal Board established under section 10 of the repealed Act repealed under this Act is hereby continued under the new name of the Public Procurement Regulatory Authority and shall continue as if established under this Act.</p>
            <p>(2) The Authority shall be a body corporate capable of suing and being sued in its own name and, subject to the provisions of this Act, of performing such acts as bodies corporate may, by law, perform including to—</p>
            <p class="subsection">(a) acquire and sell such movable and immovable property as may be necessary for the efficient operation of the Authority; and</p>
            <p class="subsection">(b) enter into such contracts as may be required under the seal, and for the efficient operation, of the Authority.</p>
            
            <h4>7. Objectives of Authority</h4>
            <p>(1) The Authority shall be responsible for the implementation and enforcement of this Act.</p>
            <p>(2) Notwithstanding the generality of subsection (1), the Authority shall—</p>
            <p class="subsection">(a) set standards and practices for the public procurement system;</p>
            <p class="subsection">(b) regulate and control the public procurement system;</p>
            <p class="subsection">(c) ensure the application of fair, equitable, competitive, transparent, accountable, efficient, non-discriminatory, honest, value for money and public confidence in procurement standards and practices;</p>
            <p class="subsection">(d) monitor and enforce compliance with this Act and any relevant law by a procuring entity;</p>
            <p class="subsection">(e) monitor the performance of a procuring entity in procurement activity; and</p>
            <p class="subsection">(f) provide and support capacity building of all procuring entities and stakeholders in the procurement system.</p>
            
            <h4>8. Functions of Authority</h4>
            <p>(1) The Authority shall—</p>
            <p class="subsection">(a) monitor, assess, review and report on the performance of the public procurement system to the Minister and advise on desirable changes;</p>
            <p class="subsection">(b) issue standardised bidding documents to a procuring entity;</p>
            <p class="subsection">(c) issue a model structure for a procuring entity taking into account the separation of duties, efficiency, transparency, good corporate governance, and any other principle of public procurement;</p>
            <p class="subsection">(d) conduct periodic inspections of the records and proceedings of a procuring entity to ensure compliance with this Act;</p>
            <p class="subsection">(e) institute periodically, in respect of any procurement—(i) a procurement audit during a tender process, (ii) a contract audit in the course of execution of an awarded tender, (iii) a performance audit after the completion of a contract, and (iv) an investigation at any stage of a procurement process;</p>
            <p class="subsection">(f) develop and maintain a system for the publication of annual performance plans, data on public procurement opportunities, awards and any other information of public interest as may be determined by the Authority;</p>
            <p class="subsection">(g) advise the Government and any entity that falls within the scope of this Act on the procurement principles and practices;</p>
            <p class="subsection">(h) register, monitor and discipline contractors, and keep and maintain an up to date Contractors' Register;</p>
            <p class="subsection">(i) undertake research and conduct surveys, nationally and internationally, on procurement matters;</p>
            <p class="subsection">(j) issue of a code of conduct, guidelines, standards, directives, procedures, instructions and manuals for the implementation of this Act;</p>
            <p class="subsection">(k) promote the training and professional development of any person engaged in public procurement in accordance with this Act, including contractors, to ensure adherence to ethical standards;</p>
            <p class="subsection">(l) ensure the implementation of a preference and reservation scheme by a procuring entity in respect of a procurement matter that falls within the scope of this Act;</p>
            <p class="subsection">(m) determine the policies relating to, and terms and conditions of service of the employees of the Authority;</p>
            <p class="subsection">(n) determine the financial arrangements and any ancillary management issue relating to the Authority;</p>
            <p class="subsection">(o) issue administrative sanctions and enforcement procedures, as may be prescribed, to ensure compliance with the provisions of this Act; and</p>
            <p class="subsection">(p) carry out any other functions as are conferred by the law.</p>
            <p>(2) The Authority shall periodically, and in consultation with a procuring entity, contractor and Public Oversight Agencies, make recommendations to the Minister on any policy matter the Government may adopt involving public procurement.</p>
            
            <h4>9. Functions of Authority in professionalisation of procurement personnel</h4>
            <p>(1) The Authority shall establish and set up an appropriate structure to regulate and register procurement personnel, and oversee any other matter relating to the professionalisation of procurement personnel.</p>
            <p>(2) Notwithstanding the generality of subsection (1), the Authority shall—</p>
            <p class="subsection">(a) establish, develop and implement a public procurement professional training program;</p>
            <p class="subsection">(b) establish, monitor and publish standards for a procurement professional;</p>
            <p class="subsection">(c) undertake accreditation and registration of a procurement practitioner;</p>
            <p class="subsection">(d) establish requirements for, and monitoring of, continuous professional education or development programs;</p>
            <p class="subsection">(e) establish, publish and review a code of professional conduct and ethics for public procurement practitioners which shall be consistent with international best practice;</p>
            <p class="subsection">(f) determine practical training requirements for the purpose of registration of a procurement practitioner;</p>
            <p class="subsection">(g) inquire into any professional misconduct of any procurement practitioner;</p>
            <p class="subsection">(h) determine the appropriate entry category and qualification requirement for registration as a procurement practitioner;</p>
            <p class="subsection">(i) debar, de-register, take disciplinary measures or suspend a procurement practitioner for a breach of code of professional conduct and ethics; and</p>
            <p class="subsection">(j) perform such other functions as may be necessary for the professionalisation of procurement personnel under this Act.</p>
            <p>(3) The Authority may delegate its functions in professionalisation under this section to any self-regulatory body that it may determine.</p>
            
            <h4>10. Powers of Authority</h4>
            <p>(1) The Authority shall have the power to—</p>
            <p class="subsection">(a) require any information, document, record or report in respect of any aspect of a public procurement process;</p>
            <p class="subsection">(b) summon a witness, call for the production of books of accounts, plans, documents and examine a witness and any party concerned under oath;</p>
            <p class="subsection">(c) commission or undertake an investigation; and</p>
            <p class="subsection">(d) request for any professional or technical assistance from any appropriate body or person in Botswana or elsewhere.</p>
            <p>(2) The Authority shall not incur any liability towards a procuring entity or any other entity or person interested in a tender under review or investigation.</p>
            <p>(3) The Authority may, after conducting an investigation and being reasonably satisfied that there is a contravention of any provision of this Act, take any remedial action as may be prescribed.</p>
            <p>(4) The Authority shall in its Annual Performance Evaluation Report include the complaints investigated and its findings, recommendations on corrective measures, and responses and actions taken.</p>
            
            <h4>11. Delegation of functions and powers of Authority</h4>
            <p>(1) The Authority may, in writing, delegate any of its functions or powers to a (a) committee or subcommittee; (b) procurement agent; (c) private entity; or (d) consultant.</p>
            <p>(2) A delegation shall not prevent the Authority from exercising the delegated functions or powers.</p>
            
            <h4>12. Public Procurement Board</h4>
            <p>(1) There is established a body to be known as the Public Procurement Board which shall be the governing body of the Authority and shall be responsible for the direction of the affairs of the Authority.</p>
            <p>(2) The Board shall give general policy direction to the Authority.</p>
            <p>(3) The Minister may give the Board written directions of a general or specific nature, which shall not be inconsistent with this Act or the contractual or other obligations of the Authority.</p>
            
            <h4>13. Membership of Board</h4>
            <p>(1) The Board shall consist of nine non-executive members appointed by the Minister, in writing.</p>
            <p>(2) Members shall be persons of good standing with not less than 10 years experience in procurement, supply chain management, finance, accounting, audit, law, engineering, commerce or any other relevant area.</p>
            <p>(3) The Chief Executive Officer shall be an ex officio member and shall not vote.</p>
            <p>(4) The Minister shall appoint the Chairperson from amongst the members.</p>
            <p>(5) The Vice Chairperson shall be elected by the members from amongst their number.</p>
            
            <h4>14. Tenure of office and conditions of service</h4>
            <p>(1) A member shall be appointed for a period not exceeding four years and is eligible for re-appointment for one further term not exceeding four years.</p>
            
            <h4>15. Disqualification, suspension and removal</h4>
            <p>(1) A person shall not qualify if they have been adjudged bankrupt, convicted of a criminal offence within the preceding ten years, or are a councillor, member of the National Assembly or Ntlo ya Dikgosi.</p>
            <p>(2) The Minister may suspend a member against whom criminal proceedings are instituted for an offence carrying imprisonment without option of a fine.</p>
            <p>(3) The Minister shall remove a member who becomes subject to disqualification, fails to comply with sections 21 or 22, or is convicted and sentenced to six months or more imprisonment.</p>
            
            <h4>16. Vacation of office</h4>
            <p>A member shall vacate office upon disqualification, bankruptcy, death, removal by the Minister, resignation, incapacity, conviction, or summary dismissal for contravening this Act.</p>
            
            <h4>17. Resignation from Board</h4>
            <p>A member may resign by giving one month's notice in writing to the Minister.</p>
            
            <h4>18. Filling of vacancy in Board</h4>
            <p>Where a vacancy occurs, the Minister shall appoint another person within four months, who shall serve on a new or full term.</p>
            
            <h4>19. Remuneration of members of Board</h4>
            <p>A member shall be paid such remuneration and allowances as the Minister may determine from the funds of the Authority.</p>
        </div>
    `;

    // PARTS 3-16 — Condensed but substantive summaries
    actContent.part3 = `
        <div class="section-content">
            <h3>PART III — Meetings and Proceedings of Board (Sections 20-25)</h3>
            <h4>20. Meetings of Board</h4>
            <p>The Board may regulate its own proceedings. It shall meet at least twice a year. Meetings may be held virtually or in person. Seven days' notice is required, unless urgent. The Chairperson, Vice Chairperson, or an elected member presides. Quorum is five members. Decisions are by majority vote; the Chairperson has a casting vote. Proper minutes must be kept.</p>
            <h4>21. Disclosure of interest</h4>
            <p>A member must immediately disclose any direct or indirect private interest in a matter before the Board and shall not participate unless the Board directs otherwise. Non-disclosure voids the decision to the extent it benefits the member or family. Failure to disclose is an offence punishable by a fine up to P500,000 or imprisonment up to five years.</p>
            <h4>22. Confidentiality</h4>
            <p>Members and persons assisting the Board must preserve confidentiality even after termination of office. Confidential information shall not be disclosed unless required by law. Former members cannot use information for personal advantage for two years after leaving. Contravention is an offence.</p>
            <h4>23. Committees of Board</h4>
            <p>The Board may establish committees or sub-committees for finance and audit, risk management, and compliance and monitoring. Sections 19, 21 and 22 apply to committee members.</p>
            <h4>24. Signification of documents</h4>
            <p>All documents and decisions of the Board shall be signified under the hand of the Chairperson or any two members specifically authorised.</p>
            <h4>25. Co-option of advisory panel</h4>
            <p>The Board may co-opt persons to attend meetings or undertake assignments. Co-opted persons have no right to vote and are remunerated at the rate set by the Board. Sections 21 and 22 apply to them.</p>
        </div>
    `;

    actContent.part4 = `
        <div class="section-content">
            <h3>PART IV — Chief Executive Officer and Other Employees of Authority (Sections 26-32)</h3>
            <h4>26. Chief Executive Officer</h4>
            <p>The CEO is appointed by the Minister on the recommendation of the Board. The CEO manages the day-to-day affairs of the Authority, organises employees, manages funds, implements Board decisions, and reports directly to the Board. The CEO may delegate functions in writing to a senior officer.</p>
            <h4>27. Tenure of office</h4>
            <p>The CEO holds office for a term not exceeding five years, eligible for one further term not exceeding five years, before attaining 60 years of age. The Minister may terminate on the Board's recommendation for conduct undermining integrity, prolonged incapacity, or incompetence.</p>
            <h4>28. Appointment of Secretary of Board</h4>
            <p>The Board appoints the Secretary, qualified in the legal discipline, on the recommendation of the CEO.</p>
            <h4>29. Functions of Secretary</h4>
            <p>The Secretary advises the Board on legal and procedural issues, records proceedings, handles legal business, and serves as liaison officer between the Authority and the Tribunal. The Secretary has no right to vote.</p>
            <h4>30. Accountability to Authority</h4>
            <p>The Secretary is accountable to the Authority for his or her functions and responsibilities.</p>
            <h4>31. Conditions of service</h4>
            <p>The Board sets the Secretary's conditions of service and remuneration on the CEO's recommendation.</p>
            <h4>32. Appointment of employees</h4>
            <p>The Board appoints senior employees on the CEO's recommendation. The CEO appoints other employees as necessary for the proper discharge of the Authority's functions.</p>
        </div>
    `;

    actContent.part5 = `
        <div class="section-content">
            <h3>PART V — Financial and Administrative Provisions (Sections 33-38)</h3>
            <h4>33. Funds of Authority</h4>
            <p>Funds come from moneys appropriated by the National Assembly, fees and levies, and any other sources. The Authority maintains a designated bank account for all funds.</p>
            <h4>34. Financial year</h4>
            <p>The financial year runs from 1st April to 31st March.</p>
            <h4>35. Financial report</h4>
            <p>The Authority keeps proper accounts. Accounts are audited within three months of the year-end by an auditor appointed by the Board. The auditor's report and audited accounts are forwarded to the Authority within 14 days of completion.</p>
            <h4>36. Annual report</h4>
            <p>The Authority submits a comprehensive annual report to the Minister within six months of the year-end. The Minister lays it before the National Assembly within 30 days.</p>
            <h4>37. Annual and medium term plans</h4>
            <p>The Authority submits an Annual Management Plan setting out previous year's results, current year objectives, and required resources.</p>
            <h4>38. Pension and other funds</h4>
            <p>The Authority may establish pension, superannuation, provident or other funds for its employees and contract with insurance companies for their administration.</p>
        </div>
    `;

    actContent.part6 = `
        <div class="section-content">
            <h3>PART VI — Procuring Entities and Accounting Officers (Sections 39-44)</h3>
            <h4>39. Composition of procuring entities</h4>
            <p>A procuring entity consists of the Accounting Officer, procurement oversight unit, procurement unit, ad hoc Evaluation Committee, user Department, or any other appropriate structure.</p>
            <h4>40. Functions of procuring entities</h4>
            <p>Procuring entities manage procurement activities, ensure equity and transparency, use electronic processes, standardise and aggregate items, ensure open competition, consider accountability and sustainability, and take into account total lifecycle costs. Functions shall be carried out by qualified persons independently.</p>
            <h4>41. Functions of Accounting Officers</h4>
            <p>Accounting Officers have overall responsibility for procurement execution, including establishing structures, adjudicating and awarding tenders, cancelling tender processes (without compensating bidders), rejecting bid recommendations, handling complaints, submitting reports to the Authority, and managing awarded contracts.</p>
            <h4>42. Functions in contract management</h4>
            <p>Accounting Officers ensure effective contract management systems are in place, aimed at ensuring performance and timely measures for non-performance.</p>
            <h4>43. Delegation of functions</h4>
            <p>Accounting Officers may delegate procurement functions in writing to subdivisions, other procuring entities, or procurement agents. Delegation does not divest accountability. The Accounting Officer remains responsible for delegated decisions.</p>
            <h4>44. Procurement agents</h4>
            <p>Accounting Officers may appoint procurement agents, who must be appointed in accordance with the Act and comply with the Act. The Accounting Officer remains accountable for the agent's decisions.</p>
        </div>
    `;

    actContent.part7 = `
        <div class="section-content">
            <h3>PART VII — Procurement Oversight Units, Ad Hoc Evaluation Committees, User Departments and Central Agencies (Sections 45-51)</h3>
            <h4>45. Establishment of procurement oversight units</h4>
            <p>Accounting Officers shall establish procurement oversight units with qualified employees at the appropriate level.</p>
            <h4>46. Functions of oversight units</h4>
            <p>The unit is the principal advisor to the Accounting Officer on procurement matters, ensures compliance with the Act, and is responsible for pre-adjudication, adjudication and recommendation of awards. Independence relates to segregation of duties, not separation from the Accounting Officer's supervision.</p>
            <h4>47-48. Procurement units</h4>
            <p>Accounting Officers shall establish procurement units responsible for acquisition, planning, preparing statements of requirements and tender documents, maintaining supplier lists, evaluating bids, preparing and issuing contracts, managing contracts, arranging payments, and keeping records.</p>
            <h4>49. Ad hoc Evaluation Committees</h4>
            <p>Accounting Officers shall establish ad hoc Evaluation Committees to evaluate bids and submit recommendations to procurement units. Composition and procedures are as prescribed.</p>
            <h4>50. User Departments</h4>
            <p>User Department functions are as prescribed and shall be exercised independently subject to the Act.</p>
            <h4>51. Central agency for common use items</h4>
            <p>The Minister may designate a central agency as a Government Procurement Office to determine common use items, develop and manage framework contracts, issue guidelines, and ensure proper implementation of procurement regulations.</p>
        </div>
    `;

    actContent.part8 = `
        <div class="section-content">
            <h3>PART VIII — Methods and Selection of Procurement (Sections 52-55)</h3>
            <h4>52. Methods of procurement</h4>
            <p>A procuring entity may conduct procurement by open domestic bidding, open international bidding, restricted domestic bidding, restricted international bidding, request for quotations, micro procurement, request for proposals with competitive negotiations, competitive dialogue, reverse auction, direct procurement, unsolicited bid, best and final offer, negotiated procedure, expression of interest, or any other method the Minister may prescribe.</p>
            <h4>53. Selection of procurement method</h4>
            <p>Except as otherwise prescribed, procurement shall be by open domestic bidding. Other methods require justification approved by the Accounting Officer. Procurement shall not be split to avoid formal procurement.</p>
            <h4>54. Procurement of highly sensitive works, services or supplies</h4>
            <p>Sensitive procurement is done in accordance with the Act, managed on a dual list basis covering open and restricted items. The procuring entity agrees annually with the Authority on restricted items. The restricted list is subject to a classified audit by the Auditor General.</p>
            <h4>55. National eProcurement System</h4>
            <p>The Minister shall establish a National eProcurement System as an end-to-end electronic one-stop portal for all public procurement covering registration, tender preparation, advertising, submission, evaluation, award, contract signing, payment, complaint handling, and supplier management.</p>
        </div>
    `;

    actContent.part9 = `
        <div class="section-content">
            <h3>PART IX — Standardised Bidding Packages and Bidding Processes (Sections 56-62)</h3>
            <h4>56. Standardised bidding packages</h4>
            <p>The Authority shall develop and issue standardised bidding packages to be used on a mandatory basis. Procuring entities shall enter into integrity agreements with contractors. A bidder fee shall be charged as prescribed.</p>
            <h4>57. National standards specifications</h4>
            <p>The Authority shall issue national standards specifications. Where not yet issued, the Authority determines which country's or institution's standards shall be used.</p>
            <h4>58. Derogation from national standards specifications</h4>
            <p>A procuring entity may apply to the Authority for derogation in exceptional cases, with supporting documentation and justification.</p>
            <h4>59. Legal status of bid package correspondence</h4>
            <p>From the time a Tender Notice is issued, correspondence between bidder and procuring entity and communication with the awarded bidder shall form part of the contract and have legal validity.</p>
            <h4>60. Electronic procurement</h4>
            <p>The transmitter is responsible for the confidentiality, completeness, integrity and timeliness of data and documents transmitted.</p>
            <h4>61. Validity period of tenders</h4>
            <p>The period of validity of a tender shall be the period specified in the tender document.</p>
            <h4>62. Medium of communication</h4>
            <p>English is the official language of communication, except where the Authority determines otherwise or the bidding package provides otherwise. Communications shall be in writing, but electronic communication is permitted for certain purposes.</p>
        </div>
    `;

    actContent.part10 = `
        <div class="section-content">
            <h3>PART X — Evaluation and Adjudication Procedure (Sections 63-71)</h3>
            <h4>63. Evaluation of bid packages and adjudication procedure</h4>
            <p>A procuring entity shall provide evaluation criteria, weights, and methodology in the bid package instructions. Only substantially compliant bids shall be considered for comparison, evaluation, adjudication and award. Non-compliant procurement activity is invalid.</p>
            <h4>64. Use of industry standards</h4>
            <p>Evaluators shall not consider factors outside the stated specifications or evaluation procedure unless an extenuating reason exists to use an industry standard. Bidders must be advised in advance.</p>
            <h4>65. Alterations to awarded bids</h4>
            <p>Alterations to awarded bids require prior written approval of the Accounting Officer if they impact evaluation ranking or amend the contract's nature. Normal variations within the contingency sum do not require approval.</p>
            <h4>66. Changes in bidder's circumstances</h4>
            <p>Bidders must immediately inform the Accounting Officer of any changes in circumstances that could materially affect their capacity to deliver.</p>
            <h4>67. Inclusion of all relevant clauses</h4>
            <p>Bidding packages shall include standard clauses on assurance, warranty, bond, insurance, and penalty clauses. Good practice provisions shall not be waived. Government shall not be exposed to unnecessary commercial risk.</p>
            <h4>68. Retroactive approval</h4>
            <p>Accounting Officers shall not approve retroactive bids except when justified by an urgent requirement or emergency. Action shall be taken against persons responsible for unjustifiable retroactive approvals.</p>
            <h4>69. Availability of funds</h4>
            <p>A procuring entity shall not invite a bid if funds are inadequate or not available, or without written confirmation of fund availability.</p>
            <h4>70. End of activity report</h4>
            <p>A procuring entity shall submit an end of activity report to the Authority not later than the date of final payment, including cost data, changes, performance indicators, variations, and contractor performance.</p>
            <h4>71. Annual strategic procurement plans</h4>
            <p>Procuring entities shall prepare and publish annual strategic procurement plans at the beginning of each financial year. Plans shall not be divided to avoid the Act.</p>
        </div>
    `;

    actContent.part11 = `
        <div class="section-content">
            <h3>PART XI — Reservation and Preferential Treatment (Sections 72-81)</h3>
            <h4>72. Economic and social objectives</h4>
            <p>The Government shall introduce reservation and preferential procurement schemes for citizen contractors, consistent with its external obligations and macro-economic framework.</p>
            <h4>73. Empowerment of citizen contractors</h4>
            <p>Citizen contractors shall be treated fairly and equitably. Procurement activities shall be distributed equitably. Preference shall be proportional to assessed capacity. Awards shall be competitive among contractors of the same grade. Tenders may be unbundled to promote citizen participation.</p>
            <h4>74-75. Process and certification</h4>
            <p>Procuring entities shall comply with reservation and preferential schemes when preparing bidding packages. Contractors must attach certification or proof of eligibility.</p>
            <h4>76. Reserved schemes</h4>
            <p>Except as otherwise provided, all procurement shall be reserved for citizen contractors. Reservation schemes apply to micro, small and medium enterprises, locally manufactured goods, services provided by citizen contractors, locality-based contractors, targeted citizens, and activities promoting innovation and skills transfer.</p>
            <h4>77. Preference schemes</h4>
            <p>The Minister may prescribe procurement reservation and preference schemes, which must be expressly provided for in the evaluation criteria. A bidding package issued without applicable preference provisions is invalid.</p>
            <h4>78. Scale of preference</h4>
            <p>Preference is applied in descending order: joint ventures between citizen contractors, sole citizen contractors, joint ventures between citizen and local contractors with majority citizen shares, and association arrangements between citizen subcontractors and local contractors.</p>
            <h4>79. Ranking of bids</h4>
            <p>Procuring entities shall apply applicable percentage preferences to eligible bids for ranking and comparison only.</p>
            <h4>80. Preference for supplies</h4>
            <p>Preference may apply to any product produced in Botswana and may vary according to the percentage of value addition or local content.</p>
            <h4>81. Primary contractors and subcontractors</h4>
            <p>Primary contractors using citizen subcontractors shall append subcontracting agreements to their bidding packages detailing the key operational principles governing the contract.</p>
        </div>
    `;

    actContent.part12 = `
        <div class="section-content">
            <h3>PART XII — Accountability and Transparency: Records and Ethics (Sections 82-90)</h3>
            <h4>82. Maintenance of records</h4>
            <p>The Authority, procuring entities, and entities within the scope of this Act shall keep and maintain detailed records and preserve, maintain and safeguard all relevant documents issued and received.</p>
            <h4>83. Access to documentation and databases</h4>
            <p>The Authority shall issue a price guide providing indicative prices for commonly procured goods, works and services. The public shall have access to standard bidding packages, forms, national standards specifications, annual reports, and databases including the contractors' register, specification providers, test and certification contractors, insurance and intermodal transport operations, documentation collection, contractors' prices and construction price index, professional register, and price guide.</p>
            <h4>84-85. Advertising and publicity</h4>
            <p>The Authority shall make Contractor Register information available to applicants including grades and codes. Decisions on de-registration, debarring and suspension shall be published. Procuring entities and the Tribunal shall publicise complaint decisions.</p>
            <h4>86. Code of ethical behaviour</h4>
            <p>All persons involved in procurement shall sign and adhere to a code of ethical behaviour as prescribed.</p>
            <h4>87. Classification of information</h4>
            <p>Bid submissions and pre-qualification applications remain confidential and only available to Public Oversight Agencies during investigation, appeal, or court process.</p>
            <h4>88. Rights of review and research</h4>
            <p>Once a pre-qualification list is approved or bid awarded and contract signed, or registration approved, communication shall be declassified and available to the public subject to section 87.</p>
            <h4>89. Declassification of information</h4>
            <p>Communication on bids and registration shall be declassified after two years, except where a project is in progress or disclosure would be prejudicial, in which case it may be retained longer.</p>
            <h4>90. Transmission of documents</h4>
            <p>The Authority shall transmit records in existence for five years or more to the National Archives and Records Services, except where an awarded bid is still under implementation, dispute, or investigation.</p>
        </div>
    `;

    actContent.part13 = `
        <div class="section-content">
            <h3>PART XIII — Registration of Contractors (Sections 91-103)</h3>
            <h4>91. Contractors' Register</h4>
            <p>The Authority shall keep and maintain an up-to-date Contractors' Register in works, services and supplies. The register is open for public inspection upon payment of prescribed fees. The Authority shall enter the contractor's name, addresses, representative, contact details, grade and code, class, registration date and number, and expiry date.</p>
            <h4>92. Registration requirements</h4>
            <p>A contractor who intends to bid must be licensed or incorporated under the laws of Botswana and domiciled in Botswana. Registration is valid for five years.</p>
            <h4>93. Registration and pre-qualification</h4>
            <p>The Contractors' Register is not a pre-qualification list. Registered contractors must satisfy additional pre-qualification conditions specified for each bid.</p>
            <h4>94. Non-registered contractors</h4>
            <p>Non-registered contractors are disqualified from tendering except where the bidding package and Tender Notice explicitly state registration is not required.</p>
            <h4>95. Classification of contractors</h4>
            <p>Registration is by classification, grades and codes, and types of business associations, based on criteria set and revised by the Authority.</p>
            <h4>96-97. Review and renewal</h4>
            <p>The Authority reviews the Register every five years. Contractors must apply for renewal within three months of the certificate's expiry date.</p>
            <h4>98-103. De-listing, suspension, and conduct</h4>
            <p>The Authority may de-list or suspend contractors for contravening the code of conduct or underperforming contracts. Contractors convicted of corruption are not eligible to participate. Suspended contractors cannot register new entities. Defaulting shareholders joining other contractors cause those contractors to be debarred until the suspension lapses.</p>
        </div>
    `;

    actContent.part14 = `
        <div class="section-content">
            <h3>PART XIV — Complaints and Dispute Resolution (Sections 104-113)</h3>
            <h4>104. Lodging of complaints</h4>
            <p>A procuring entity shall allow a cooling-off period of 10 days after publication of an award decision and shall not enter into a contract before its expiration. Aggrieved contractors shall first lodge a complaint before the Accounting Officer. An Accounting Officer shall not entertain a complaint after a contract has entered into force.</p>
            <h4>105. Frivolous or vexatious complaints</h4>
            <p>An Accounting Officer may dismiss a complaint that lacks arguable basis in law or fact, where the complainant has no interest, or agreed resolution procedures have not been followed. Such complaints may be referred to the Tribunal.</p>
            <h4>106. Timelines for submission</h4>
            <p>An aggrieved person shall submit a complaint in writing to the Accounting Officer within 10 days from the publication of the award decision.</p>
            <h4>107. Suspension of procurement process</h4>
            <p>The Accounting Officer may suspend the procurement process pending resolution, except for emergency procurement. Public Oversight Agencies may not suspend procurement without the Authority's prior written approval.</p>
            <h4>108-110. Notification, decision, and review panel</h4>
            <p>The Accounting Officer shall notify other bidders of the complaint, deliver a written decision within the prescribed period, and may constitute an independent review panel from the same or another procuring entity.</p>
            <h4>111. Public officers and employees of public bodies</h4>
            <p>Public officers, employees of public bodies, and their immediate family members shall not participate as bidders in procurement activities involving the officer's or employee's employer.</p>
            <h4>112. Appeals to Tribunal</h4>
            <p>A contractor aggrieved by an Accounting Officer's decision may appeal to the Tribunal within 14 days. The Tribunal may suspend procurement or contract performance pending determination. A concluded contract is irrevocable and execution proceeds without interruption, but may be revoked if it would cause substantial loss to the public revenue or prejudicially affect public interest.</p>
            <h4>113. Exhaustion of dispute resolution processes</h4>
            <p>A complainant shall exhaust the dispute resolution processes provided in this Act before referring the complaint to a court.</p>
        </div>
    `;

    actContent.part15 = `
        <div class="section-content">
            <h3>PART XV — Public Procurement Tribunal (Sections 114-138)</h3>
            <h4>114. Establishment of Tribunal</h4>
            <p>There is established a body independent of the Public Procurement Regulatory Authority, known as the Public Procurement Tribunal.</p>
            <h4>115. Jurisdiction of Tribunal</h4>
            <p>The Tribunal adjudicates over appeals from Authority or Accounting Officer decisions, registration or disciplinary processes, complaints by the Authority against procuring entities, disputes on interpretation of the Act, breach or termination of procurement contracts, and petitions from the public on procurement matters of public interest.</p>
            <h4>116-118. Composition and tenure</h4>
            <p>The Minister appoints a President (a retired High Court judge or qualifying legal practitioner), a Vice President, and five other persons with knowledge in commerce, industry, or procurement. Members serve four years, renewable once.</p>
            <h4>119-121. Disqualification, vacation, and filling of vacancies</h4>
            <p>Sections 15, 16, and 18 apply with necessary modifications to Tribunal members.</p>
            <h4>122-138. Proceedings, decisions, and appeals</h4>
            <p>The Tribunal meets at least once every three months. It regulates its own proceedings. Persons appear in person or virtually, not by legal representation. Decisions are binding unless appealed to the High Court, and have the same force and effect as a court judgment. The Registrar is appointed by the Minister for five years. Funds come from grants, donations, and fees. The financial year is 1st April to 31st March. The Tribunal submits annual reports and audited accounts to the Minister.</p>
        </div>
    `;

    actContent.part16 = `
        <div class="section-content">
            <h3>PART XVI — General Provisions (Sections 139-152)</h3>
            <h4>139. Decision by courts in procurement matters</h4>
            <p>Courts may suspend procurement processes or contract performance where contracts have not been concluded. Where a contract has been concluded, courts may not suspend execution but may order it to proceed without interruption. Courts may still suspend, interdict or revoke where execution would cause substantial loss to public revenue or prejudicially affect public interest.</p>
            <h4>140-141. External obligations</h4>
            <p>Where a treaty or agreement to which Botswana is a party contains provisions favourable to citizens and local contractors, full advantage shall be taken. Contributions from Botswana's own resources for external obligations shall be subject to the Act.</p>
            <h4>142. Derogation from provisions of Act</h4>
            <p>A procuring entity shall apply to the Authority for derogation in respect of external obligations, in the prescribed form with supporting documentation and justification.</p>
            <h4>143. Exemption from provisions of Act</h4>
            <p>The Minister may, by Order published in the Gazette, exempt any person, procuring entity or procurement activity from the provisions of this Act.</p>
            <h4>144. Contribution to other entities</h4>
            <p>Government contributions to entities such as parastatals, private entities, NGOs, charities or trusts which entail procurement activity shall be kept discrete and identifiable and subject to the applicable provisions of this Act.</p>
            <h4>145. Discrimination and underpricing</h4>
            <p>The Authority shall, in consultation with the Competition and Consumer Protection Authority, submit recommendations to the Minister on measures to compensate for discrimination against citizen-owned or Botswana-registered contractors or underpricing that places local contractors at a disadvantage.</p>
            <h4>146. Guidelines</h4>
            <p>The Authority may issue guidelines from time to time for the better carrying out of the objectives or any function under this Act.</p>
            <h4>147. Offences and penalties</h4>
            <p>A person shall not open sealed tenders before the appointed time, interfere with Authority employees or procuring entity officers, use their position dishonestly to gain advantage, enter into collusive agreements, influence procurement processes to obtain unfair advantage, commit fraudulent or corrupt acts, obstruct persons exercising functions under the Act, contravene lawful orders of the Authority or Tribunal, misrepresent contractor ownership, or alter procurement documents. A body corporate which commits an offence is liable to a fine not exceeding P1,500,000. Directors and managers who knowingly authorise or permit the offence are liable to a fine not exceeding P500,000 or imprisonment for a term not exceeding five years, or both.</p>
            <h4>148. Administrative actions</h4>
            <p>The Authority may give a written warning, issue a fine, recommend action to the person's supervisor, or direct a person to do or refrain from doing a specified act to remedy the contravention or prevent further contravention.</p>
            <h4>149. Immunity</h4>
            <p>No action shall be taken against employees of the Authority, members or Secretary of the Board, employees, members or Registrar of the Tribunal, committee or sub-committee members, or officials of a procuring entity for any act or omission, except insofar as it was done in bad faith.</p>
            <h4>150. Regulations</h4>
            <p>The Minister may make regulations for any matter which is to be prescribed or which is necessary or convenient for the better carrying out of the objects and purposes of this Act, including procedures for procurement methods, tender submission and evaluation, preference schemes, contract management, investigations, complaints and appeals, eProcurement, professionalisation, and contractor registration.</p>
            <h4>151. Repeal of Cap. 42:08</h4>
            <p>The Public Procurement and Asset Disposal Act is hereby repealed.</p>
            <h4>152. Savings and transitional provisions</h4>
            <p>Subsidiary legislation made under the repealed Act continues in force if consistent with this Act. All rights, obligations, assets and liabilities of the former Board pass to the Authority. Pending disciplinary proceedings, legal proceedings, and appeals continue under the new Act. Tender Notices and decisions made under the repealed Act are deemed made under this Act. Former Board members and Independent Complaints Review Committee members' terms are terminated at commencement of this Act.</p>
        </div>
    `;

    // Reload current part to show content
    loadPart(currentPart);
}

// ===== UTILITY =====
function addActivity(icon, text) {
    const activities = JSON.parse(localStorage.getItem('ppra_activities') || '[]');
    activities.unshift({ icon: icon, text: text, time: new Date().toISOString() });
    if (activities.length > 20) activities.pop();
    localStorage.setItem('ppra_activities', JSON.stringify(activities));
}

addActivity('', 'Viewed the Public Procurement Act');