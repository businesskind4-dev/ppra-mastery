// ===== PPRA MASTERY - Complete Question Bank (All 16 Parts) =====

const quizQuestions = {

    // ============================================================
    // PART I - PRELIMINARY (Sections 1-5)
    // ============================================================
    part1: {
        title: "Part I — Preliminary",
        sections: "Sections 1-5",
        questions: [
            {
                question: "A regional health authority is facing a sudden cholera outbreak. They need to immediately procure water purification tablets and temporary treatment tents. Under the Public Procurement Act, which of the following BEST describes this situation?",
                options: [
                    "An urgent procurement that can bypass all normal procedures",
                    "An emergency procurement because the situation threatens public health and requires immediate action",
                    "A restricted domestic bidding situation since only local suppliers can respond quickly enough",
                    "A direct procurement because there is no time to invite any bids whatsoever"
                ],
                answer: 1,
                explanation: "Section 2 defines 'emergency' as a natural disaster, epidemic, pandemic, riot, war, fire, flood or any other situation that may result in the threat to life, or health, welfare or safety of the public, which requires immediate action. Cholera outbreak is an epidemic threatening public health."
            },
            {
                question: "Which of the following statements about the application of the Public Procurement Act is FALSE?",
                options: [
                    "It applies to the procurement of assets acquired through a tenancy agreement",
                    "It applies to all statutory bodies unless the Minister exempts them by Gazette",
                    "It does not apply to sensitive procurement because such procurement is secret",
                    "It applies to approved procurement activities under a public private partnership"
                ],
                answer: 2,
                explanation: "Section 3(e) explicitly includes sensitive procurement within the Act's scope. Section 54 provides for sensitive procurement to be conducted in accordance with the Act, taking into account its confidential nature."
            },
            {
                question: "A Ministry signs a 5-year lease for office equipment with a maintenance contract included. Does the Public Procurement Act apply to this transaction?",
                options: [
                    "No, because leasing is a financing arrangement, not procurement",
                    "Only to the maintenance portion; the lease is governed by the Public Finance Management Act",
                    "Yes, because procurement includes acquisition by lease of any type of works, services or supplies",
                    "Yes, but only if the total lease value exceeds the threshold for open bidding"
                ],
                answer: 2,
                explanation: "Section 2 defines 'procurement' as acquisition by any means including lease. Section 3(c)(iii) lists lease as a covered asset acquisition method."
            },
            {
                question: "An Accounting Officer of a parastatal notices that the parastatal's enabling Act contains a provision stating 'procurement shall be conducted in accordance with the Parastatal's internal procurement manual'. The Public Procurement Act requires open bidding for the same situation. Which Act takes precedence?",
                options: [
                    "The parastatal's enabling Act because it is more specific to the entity",
                    "The Public Procurement Act because it is the newer legislation",
                    "Neither—the Accounting Officer must seek a directive from the Minister of Finance",
                    "The Public Procurement Act because Section 5 gives it precedence in any conflict on procurement matters"
                ],
                answer: 3,
                explanation: "Section 5 states: 'In the event of any conflict or inconsistency between the provisions of this Act and any other law on public procurement, the provisions of this Act shall take precedence.'"
            },
            {
                question: "A company is 60% owned by a Botswana citizen and 40% by a foreign investor. Under the Act's definitions, is this company a 'citizen contractor'?",
                options: [
                    "Yes, because the majority of shares are held by a Botswana citizen",
                    "Yes, provided the Botswana citizen is the managing director of the company",
                    "No, because a citizen contractor must be wholly owned and controlled by citizens of Botswana",
                    "No, unless the foreign investor has been resident in Botswana for at least 10 years"
                ],
                answer: 2,
                explanation: "Section 2 defines 'citizen contractor' as a natural person or an incorporated company wholly owned and controlled by persons who are citizens of Botswana. 60% is not wholly owned."
            },
            {
                question: "A procuring entity publishes an award decision on 1st April. On 3rd April, a losing bidder files a complaint. The procuring entity wants to sign the contract immediately to avoid project delays. What does the Act require?",
                options: [
                    "The entity may sign because the complaint was filed after the cooling-off period ended",
                    "The entity must wait until the complaint is resolved before signing any contract",
                    "The entity must allow a cooling-off period of 10 days from the publication of the award decision before entering into a contract",
                    "The entity may sign if the Accounting Officer certifies that the complaint is frivolous"
                ],
                answer: 2,
                explanation: "Section 2 defines 'cooling-off period' as the period provided under section 104(1)(a). Section 104(1)(a) and (b) require a 10-day cooling-off period and prohibit entering into a contract before its expiration."
            },
            {
                question: "An international airport expansion project includes construction of a terminal building (works), installation of security scanning equipment (supplies), and a 3-year maintenance contract (services). How does the Act classify such a combined procurement?",
                options: [
                    "As three separate procurements each governed by its respective rules",
                    "As a 'works' procurement because the main component is construction",
                    "As a turnkey project falling under 'any combination thereof, however classified'",
                    "As a public private partnership because it involves multiple elements over time"
                ],
                answer: 2,
                explanation: "Section 2 defines 'any combination thereof, however classified' as a turnkey project or any arrangement in this genre, which may include management, maintenance, testing, commissioning or training."
            },
            {
                question: "Which of the following is NOT a method of acquisition listed in the definition of 'procurement' under Section 2?",
                options: [
                    "Purchase, rental, lease, hire-purchase, licence, tenancy, or franchise",
                    "Auction, reverse auction, or public private partnership",
                    "Donation, bequest, inheritance, or gift accepted by the Government",
                    "Acquisition of any type of works, services or supplies of any combination"
                ],
                answer: 2,
                explanation: "Section 2 defines 'procurement' as acquisition by any means, including purchase, rental, lease, hire-purchase, licence, tenancy, franchise, auction, reverse auction, public private partnership. Donation, bequest, inheritance, and gift are not listed."
            },
            {
                question: "A district council plans to procure school furniture using funds donated by an international NGO. The NGO's funding agreement states that procurement must follow the NGO's own procurement guidelines, which conflict with the Act on advertising requirements. What should the council do?",
                options: [
                    "Follow the NGO guidelines because the funds originate from the NGO",
                    "Follow the Public Procurement Act because Section 5 gives it precedence over conflicting procurement laws",
                    "Seek an exemption from the Minister under Section 3(b)",
                    "Apply the Public Procurement Act but ask the Authority for a derogation under Section 142"
                ],
                answer: 1,
                explanation: "Section 5 gives the Act precedence over any conflicting law on public procurement. The funds are 'public funds' under Section 2, and the council is a procuring entity bound by the Act."
            },
            {
                question: "A newly established public body plans to procure services. Their enabling legislation is silent on procurement. The Minister has not issued any exemption Order. Must this body comply with the Public Procurement Act?",
                options: [
                    "No, because the Act applies only to entities explicitly listed in Section 3",
                    "Yes, because Section 3 applies the Act to all public bodies unless specifically exempted by the Minister by Order published in the Gazette",
                    "Only if the body receives funding from the Consolidated Fund",
                    "Only after the Authority issues a directive specifically naming the body"
                ],
                answer: 1,
                explanation: "Section 3(b) applies this Act to public bodies, parastatals and statutory bodies, except where exempted by the Minister by Order published in the Gazette. No exemption means compliance is mandatory."
            }
        ]
    },

    // ============================================================
    // PART II - ESTABLISHMENT OF AUTHORITY AND BOARD (Sections 6-19)
    // ============================================================
    part2: {
        title: "Part II — Establishment of Authority and Board",
        sections: "Sections 6-19",
        questions: [
            {
                question: "The Authority discovers during a contract audit that a procuring entity awarded a tender to a contractor who did not meet mandatory qualification criteria. The Authority wishes to take remedial action. Under Section 10, which power enables this?",
                options: [
                    "The power to issue standardised bidding documents to all procuring entities",
                    "The power to conduct an investigation and take any remedial action as may be prescribed after being reasonably satisfied of a contravention",
                    "The power to delegate its functions to a procurement agent to handle the matter",
                    "The power to make recommendations to the Minister on policy changes"
                ],
                answer: 1,
                explanation: "Section 10(3) allows the Authority, after investigation and being reasonably satisfied of a contravention, to take any remedial action as may be prescribed, regardless of other written laws."
            },
            {
                question: "A Board member owns 15% shares in a company that has submitted a bid. The Board is discussing a policy that would affect how such tenders are evaluated. Under Section 21, what must the member do?",
                options: [
                    "Nothing, because the Board is not making an award decision on that specific tender",
                    "Disclose the interest and recuse themselves from the discussion only if the Chairperson directs",
                    "Immediately disclose the interest and not take part in any consideration or discussion unless the Board otherwise directs",
                    "Resign from the Board to avoid any appearance of conflict of interest"
                ],
                answer: 2,
                explanation: "Section 21(1) requires disclosure and non-participation in any matter in which the member or immediate family has a direct or indirect private interest, unless the Board otherwise directs. The policy discussion could affect the company's interests."
            },
            {
                question: "The Minister appoints a highly respected procurement expert to the Board for a term of 4 years. After 4 years, the Minister wishes to reappoint the same expert. Which of the following is correct under Section 14?",
                options: [
                    "The expert may be reappointed for one further term not exceeding 4 years, making a maximum of 8 years",
                    "The expert cannot be reappointed—Board membership is limited to a single 4-year term",
                    "The expert may be reappointed for unlimited 4-year terms as long as total service does not exceed 10 years",
                    "The expert may be reappointed only if they serve in a different capacity, such as Vice Chairperson"
                ],
                answer: 0,
                explanation: "Section 14(1) states a member is appointed for not more than 4 years and eligible for re-appointment for one further term not exceeding 4 years."
            },
            {
                question: "A Board member is convicted of a criminal offence and sentenced to 3 months' imprisonment without the option of a fine. The conviction is under appeal. What action must the Minister take under Section 15?",
                options: [
                    "Immediately remove the member from office regardless of the pending appeal",
                    "Suspend the member from office pending the outcome of the appeal, during which the member shall not carry out any functions or receive remuneration",
                    "Allow the member to continue serving because the conviction is not final until the appeal is decided",
                    "Issue a warning but take no further action unless the appeal is dismissed"
                ],
                answer: 1,
                explanation: "Section 15(2) empowers the Minister to suspend a member against whom criminal proceedings are instituted for an offence for which imprisonment without option of a fine may be imposed. The member is suspended and receives no remuneration. Removal only after appeal is exhausted (Section 15(3)(c))."
            },
            {
                question: "A person who served as a Board member 8 years ago applies for reappointment. The person is otherwise qualified and of good standing. Is this person eligible for appointment?",
                options: [
                    "No, because the person has already served one term and the Act limits membership to one term total",
                    "Yes, because the Act limits reappointment to one further term immediately following, not lifetime",
                    "No, because a cooling-off period of 10 years is required before reappointment",
                    "Yes, but only if appointed as Chairperson rather than as an ordinary member"
                ],
                answer: 1,
                explanation: "Section 14 allows one further term not exceeding four years. There's no lifetime ban or cooling-off period. The previous service was a separate appointment cycle."
            },
            {
                question: "The Board wishes to establish a sub-committee for compliance and monitoring. Five of the nine Board members are available and willing to serve on this sub-committee. Which of the following is correct regarding the sub-committee's establishment and membership?",
                options: [
                    "The Board may establish the sub-committee with those five members, and the sub-committee's decisions are binding on the Board",
                    "The Board cannot establish a sub-committee because the Act only permits committees, not sub-committees",
                    "The Board may establish the sub-committee, and the provisions on disclosure of interest and confidentiality apply to its members",
                    "The Board must seek the Minister's approval before establishing any sub-committee"
                ],
                answer: 2,
                explanation: "Section 23(1) permits establishment of committees or sub-committees. Section 23(3) applies sections 19, 21, and 22 (disclosure of interest and confidentiality) to sub-committee members."
            },
            {
                question: "A Board member learns during a meeting that a close friend's company is one of three bidders being discussed for debarment. The member's immediate family has no financial interest. Must this be disclosed under Section 21?",
                options: [
                    "No, because the disclosure requirement applies only to interests of the member or their immediate family, not friends",
                    "Yes, because any personal relationship that could create a perception of bias must be disclosed",
                    "Only if the member has received any financial benefit from the friend in the past 12 months",
                    "No, unless the member actively participated in the investigation that led to the debarment recommendation"
                ],
                answer: 0,
                explanation: "Section 21(1) requires disclosure only for matters in which the member or immediate family member has a direct or indirect interest in a private capacity. Friends are not covered. Best practice might suggest voluntary disclosure, but the legal requirement is limited."
            },
            {
                question: "The Chairperson of the Board resigns with one month's notice. The Vice Chairperson position is vacant. How is the vacancy in the Chairperson position filled?",
                options: [
                    "The Minister must immediately appoint a new Chairperson from among the remaining Board members",
                    "The remaining members must elect an acting Chairperson from among themselves until the Minister appoints a replacement",
                    "The Board cannot conduct any business until a new Chairperson is appointed by the Minister",
                    "The Minister must appoint a new Chairperson within 4 months of the vacancy occurring"
                ],
                answer: 3,
                explanation: "Section 18(1) requires the Minister to appoint a replacement within 4 months. Section 20(7) provides that in the absence of Chairperson and Vice Chairperson, members elect one among themselves to preside at a meeting."
            },
            {
                question: "An employee of the Authority discloses confidential information about a pending tender investigation to a journalist two years after leaving employment. The information was obtained during their tenure. Which of the following is true under the Act?",
                options: [
                    "The former employee cannot be prosecuted because they are no longer an employee",
                    "The former employee may be held liable because the duty of confidentiality subsists even after termination of employment",
                    "The disclosure is permissible after one year because the confidentiality obligation expires after 12 months",
                    "The disclosure is permissible because the Act's confidentiality provisions apply only to Board members, not employees"
                ],
                answer: 1,
                explanation: "Section 22(1) states the duty of confidentiality shall subsist even after the termination of the member's term of office or that person's mandate. Section 22(4) prescribes penalties for contravention."
            },
            {
                question: "The Minister issues a written direction to the Board regarding the exercise of its powers. The Board believes the direction is inconsistent with the Authority's contractual obligations to a service provider. What should the Board do?",
                options: [
                    "Comply with the direction because the Minister's directives are binding on the Board",
                    "Disregard the direction because Section 12(3) states that Ministerial directions shall not be inconsistent with contractual obligations",
                    "Seek a declaratory order from the High Court before implementing the direction",
                    "Implement the direction but note its disagreement in the Board minutes"
                ],
                answer: 1,
                explanation: "Section 12(3) states the Minister may give directions, but such directions shall not be inconsistent with the Act or with the contractual or other obligations of the Authority. If inconsistent, the Board is not bound."
            }
        ]
    },

    // ============================================================
    // PART III - MEETINGS AND PROCEEDINGS OF BOARD (Sections 20-25)
    // ============================================================
    part3: {
        title: "Part III — Meetings and Proceedings of Board",
        sections: "Sections 20-25",
        questions: [
            {
                question: "The Board has nine members. A meeting is called and seven members are present. One member has a conflict of interest on the main agenda item. What is the quorum for the Board to make a decision on that item?",
                options: [
                    "Four members, because the conflicted member is not counted for that item",
                    "Five members present and voting, as required by Section 20(8)",
                    "Six members, because a majority of the total Board membership is needed",
                    "Seven members, because all must vote on major decisions"
                ],
                answer: 1,
                explanation: "Section 20(8) sets quorum at five members present and voting at the meeting. Section 21(1) requires the conflicted member to not take part in consideration or vote unless the Board otherwise directs. If allowed to recuse, the remaining 6, still meet the quorum of 5."
            },
            {
                question: "The Chairperson receives a written request from the Minister to convene an urgent meeting within 24 hours to discuss a procurement emergency. What notice period is required under Section 20?",
                options: [
                    "Seven days' notice as standard",
                    "At least 24 hours because it is an urgent matter",
                    "The Chairperson may call a special meeting with less than seven days' notice if the matter is urgent",
                    "No notice is required for a meeting called by the Minister"
                ],
                answer: 2,
                explanation: "Section 20(6) provides that where a matter is urgent and does not permit the giving of seven days notice, the Chairperson may call a special meeting with a notice of less than seven days."
            },
            {
                question: "At a Board meeting, the members are equally divided on a procurement policy decision. The Chairperson has already voted. What happens next?",
                options: [
                    "The motion is defeated because there is no majority",
                    "The Chairperson has a casting vote in addition to the deliberative vote",
                    "The matter must be referred to the Minister for a final decision",
                    "The vote is postponed to the next meeting"
                ],
                answer: 1,
                explanation: "Section 20(9) states that in the event of an equality of votes, the Chairperson shall have a casting vote in addition to the Chairperson's deliberative vote."
            },
            {
                question: "A Board member's spouse is the majority shareholder of a company that is a subcontractor to one of the bidders being evaluated. The member did not know this until the meeting. What does Section 21 require?",
                options: [
                    "The member must immediately disclose the interest and not participate in the discussion or vote unless the Board otherwise directs",
                    "The member may participate because the spouse's company is only a subcontractor, not a direct bidder",
                    "The member must resign from the Board to avoid any appearance of impropriety",
                    "The member must disclose the interest only if the contract value exceeds the spouse's investment"
                ],
                answer: 0,
                explanation: "Section 21(1) requires disclosure of any matter in which the member or the member's immediate family member is directly or indirectly interested. 'Immediate family member' has the meaning under the Corruption and Economic Crime Act, which includes spouse. Disclosure and non-participation are mandatory unless the Board directs otherwise."
            },
            {
                question: "The Board fails to record a member's disclosure of interest in the minutes. Later, a decision benefiting that member's relative is challenged. What is the effect of the decision?",
                options: [
                    "The decision stands because the disclosure was made orally",
                    "The decision is void to the extent that it benefits the member or family member because the disclosure was not recorded",
                    "The decision can be ratified at the next meeting by properly recording the disclosure",
                    "The decision is voidable only if the member voted on the matter"
                ],
                answer: 1,
                explanation: "Section 21(2) requires disclosure to be recorded in the minutes. Section 21(3) states that if a person fails to disclose and a decision is made benefiting the member or family member, such decision shall be void to the extent that it benefits them."
            },
            {
                question: "A former Board member, six months after resignation, uses confidential information about a tender to help a company prepare a bid. Under Section 22, which statement is correct?",
                options: [
                    "There is no violation because the member has left the Board",
                    "This is a violation because confidentiality subsists even after termination of office, and the member cannot use information for personal advantage",
                    "This is a violation only if the information is still classified",
                    "The former member may use the information after one year has passed"
                ],
                answer: 1,
                explanation: "Section 22(1) states confidentiality shall subsist even after termination. Section 22(3) prohibits a former member from using to their personal advantage information acquired by virtue of association with the Board for a period of two years after leaving office."
            },
            {
                question: "The Board wishes to co-opt a procurement specialist from the private sector to advise on a complex tender evaluation methodology. Which of the following is correct under Section 25?",
                options: [
                    "The co-opted person has full voting rights and must be paid at the Minister's rate",
                    "The co-opted person has no right to vote and is remunerated at the rate set by the Board",
                    "The co-opted person cannot attend meetings but may submit a written report",
                    "The co-opted person automatically becomes a temporary Board member with full rights"
                ],
                answer: 1,
                explanation: "Section 25(2)(a) states a co-opted person shall have no right to vote, and (b) shall be remunerated at the rate set by the Board. Section 25(3) applies confidentiality and disclosure of interest provisions to co-opted persons."
            },
            {
                question: "The Board makes a decision to de-list a contractor. How must this decision be signified under Section 24?",
                options: [
                    "The decision must be signed by all members who voted in favour",
                    "The decision must be signified under the hand of the Chairperson or any two members specifically authorised by the Board",
                    "The decision must be published in the Gazette to be valid",
                    "The Chief Executive Officer must sign all Board decisions"
                ],
                answer: 1,
                explanation: "Section 24 states: 'All documents made by, and all decisions of the Board shall be signified under the hand of the Chairperson or any two members specifically authorised by the Board.'"
            },
            {
                question: "A Board meeting is held virtually. Five members are logged in, but one member's video connection drops during the vote on a critical item. The Chairperson proceeds with the vote. Is the decision valid?",
                options: [
                    "No, because virtual meetings are not permitted under the Act",
                    "Yes, if the member was present at the start of voting and the Chairperson determines good faith participation",
                    "Yes, because Section 20(4) permits virtual meetings, and quorum of five members present and voting was maintained",
                    "No, because all members must be physically present for a valid meeting"
                ],
                answer: 2,
                explanation: "Section 20(4) allows meetings to be held virtually or in person. If the member was present and participating until the vote began, and the remaining members still constitute the quorum of five, the decision is valid. The Act doesn't require continuous connection for every second."
            },
            {
                question: "The Board's Audit Committee reviews a matter and makes a recommendation. The full Board disagrees with the committee. Does the Board have authority to overrule its committee?",
                options: [
                    "No, because committees are independent and their decisions are final",
                    "Yes, because the Board is the governing body and committees carry out functions the Board may delegate, but delegation does not prevent the Board from exercising those functions itself",
                    "No, unless the committee has exceeded its mandate",
                    "Yes, but only with the Minister's approval"
                ],
                answer: 1,
                explanation: "Section 11(4) provides that a delegation shall not prevent the Authority from exercising the delegated functions or powers. Similarly, the Board, as the governing body, retains ultimate authority over its committees."
            }
        ]
    },

    // ============================================================
    // PART IV - CEO AND OTHER EMPLOYEES (Sections 26-32)
    // ============================================================
    part4: {
        title: "Part IV — CEO and Other Employees of Authority",
        sections: "Sections 26-32",
        questions: [
            {
                question: "The Chief Executive Officer is appointed by the Minister on the recommendation of the Board. The Minister wishes to appoint a candidate the Board did not recommend. Is this lawful?",
                options: [
                    "Yes, the Minister has sole discretion in appointing the CEO",
                    "No, the Minister must appoint on the recommendation of the Board",
                    "Yes, but only after consulting the Public Service Commission",
                    "No, unless the Board's recommendation is unanimous"
                ],
                answer: 1,
                explanation: "Section 26(1) states the CEO shall be appointed by the Minister on the recommendation of the Board. The Minister cannot act without a Board recommendation."
            },
            {
                question: "The CEO is approaching the end of their 5-year term. They are 58 years old. Can they be reappointed?",
                options: [
                    "Yes, for a further term not exceeding 5 years before the attainment of 60 years of age",
                    "Yes, but only for 2 years because they will turn 60 during the new term",
                    "No, because they are over 55 years old",
                    "Yes, for an indefinite term until retirement age"
                ],
                answer: 0,
                explanation: "Section 27(1) provides the CEO holds office for a term not exceeding 5 years and is eligible for reappointment for a further term not exceeding 5 years before attainment of 60 years of age, whichever comes first. Since they are 58, the term would end when they turn 60, effectively a shorter term."
            },
            {
                question: "The Board wishes to terminate the CEO's appointment for 'conduct which undermines the integrity of the Authority'. What is the correct procedure?",
                options: [
                    "The Board may terminate directly without Ministerial involvement",
                    "The Minister may terminate on the recommendation of the Board",
                    "The Board must first suspend the CEO and then hold a disciplinary hearing",
                    "Only the Public Service Commission may terminate the CEO"
                ],
                answer: 1,
                explanation: "Section 27(2) states: 'The Minister may, on the recommendation of the Board, terminate the appointment of the Chief Executive Officer for (a) conduct which undermines the integrity of the Authority; (b) prolonged or permanent incapacity; or (c) incompetence.'"
            },
            {
                question: "The Secretary of the Board must be 'suitably qualified and experienced in the legal discipline'. Who appoints the Secretary?",
                options: [
                    "The Minister, in consultation with the Chief Justice",
                    "The Board, with the recommendation of the Chief Executive Officer",
                    "The Chief Executive Officer alone",
                    "The Board, without any recommendation from the CEO"
                ],
                answer: 1,
                explanation: "Section 28 states: 'The Board shall, with the recommendation of the Chief Executive Officer, appoint a Secretary of the Board who shall be suitably qualified and experienced in the legal discipline to a level appropriate for the seniority of the position.'"
            },
            {
                question: "The Secretary of the Board is also designated as the liaison officer between the Authority and the Tribunal. Which section provides for this function?",
                options: [
                    "Section 28",
                    "Section 29",
                    "Section 30",
                    "Section 31"
                ],
                answer: 1,
                explanation: "Section 29(2) states: 'The Secretary of the Board shall be the liaison officer between the Authority and the Tribunal.'"
            },
            {
                question: "Who is responsible for appointing senior employees of the Authority, and on what basis?",
                options: [
                    "The CEO, independently",
                    "The Board, on the recommendation of the CEO, and on terms and conditions determined by the Board",
                    "The Minister, based on public service regulations",
                    "The Board, without any recommendation from the CEO"
                ],
                answer: 1,
                explanation: "Section 32(1) states: 'The Board shall, on the recommendation of the Chief Executive Officer and on terms and conditions determined by the Board, appoint senior employees of the Authority.'"
            },
            {
                question: "The Chief Executive Officer wishes to delegate some of their functions to a senior officer. Is this permitted, and under what conditions?",
                options: [
                    "No, the CEO's functions are non-delegable",
                    "Yes, the CEO may delegate in writing, subject to the provisions of the Act",
                    "Yes, but only with Board approval for each delegation",
                    "Yes, but the delegation must be to the Secretary of the Board specifically"
                ],
                answer: 1,
                explanation: "Section 26(4) provides: 'The Chief Executive Officer may, subject to the provisions of this Act, delegate in writing, the exercise of any of the Chief Executive Officer's functions under this Act, to a senior officer of the Authority.'"
            },
            {
                question: "To whom does the Chief Executive Officer report directly?",
                options: [
                    "The Minister",
                    "The Board",
                    "The Secretary of the Board",
                    "The Public Procurement Tribunal"
                ],
                answer: 1,
                explanation: "Section 26(3)(b) states: 'The Chief Executive Officer shall, subject to such directions on matters of policy as may be given by the Board — ... (b) report directly to the Board.'"
            },
            {
                question: "The conditions of service, including the remuneration package of the Secretary of the Board, are set by whom?",
                options: [
                    "The Minister",
                    "The Board, with the recommendation of the CEO",
                    "The CEO alone",
                    "The Public Service Commission"
                ],
                answer: 1,
                explanation: "Section 31 states: 'The conditions of service, including the remuneration package of the Secretary, shall be set by the Board, with the recommendation of the Chief Executive Officer.'"
            },
            {
                question: "What is the accountability relationship of the Secretary of the Board?",
                options: [
                    "Accountable to the Minister",
                    "Accountable to the Authority, for his or her functions and responsibilities",
                    "Accountable to the CEO",
                    "Accountable to the Tribunal"
                ],
                answer: 1,
                explanation: "Section 30 states: 'The Secretary of the Board shall be accountable to the Authority, for his or her functions and responsibilities.' The Authority is the body corporate, effectively the organization."
            }
        ]
    },

    // ============================================================
    // PART V - FINANCIAL AND ADMINISTRATIVE PROVISIONS (Sections 33-38)
    // ============================================================
    part5: {
        title: "Part V — Financial and Administrative Provisions",
        sections: "Sections 33-38",
        questions: [
            {
                question: "The Authority receives fees for contractor registration, charges for bidding documents, and a grant from a development partner. Where must these moneys be deposited?",
                options: [
                    "Into the Consolidated Fund as required for all government revenue",
                    "Into a designated bank account maintained by the Authority",
                    "Into an account specified by the Minister of Finance",
                    "Directly into the Authority's operational petty cash"
                ],
                answer: 1,
                explanation: "Section 33(2) states: 'The Authority shall maintain with a bank, a designated account into which shall be paid all sums accruing to the Authority in respect of subsection (1) and from which all due payments shall be effected.'"
            },
            {
                question: "The funds of the Authority include 'moneys appropriated by the National Assembly' and 'fees, charges and levies for services provided'. What is the third source?",
                options: [
                    "Donations from international organizations only",
                    "Any payments received from any other sources in favour of the Authority",
                    "Fines imposed on contractors for non-compliance",
                    "Contributions from procuring entities for audits conducted"
                ],
                answer: 1,
                explanation: "Section 33(1)(c) lists 'any payments received from any other sources in favour of the Authority' as the third source of funds."
            },
            {
                question: "The financial year of the Authority runs from:",
                options: [
                    "1st January to 31st December",
                    "1st July to 30th June",
                    "1st April to 31st March",
                    "The date determined by the Board annually"
                ],
                answer: 2,
                explanation: "Section 34 states: 'The financial year of the Authority shall be a period of 12 months starting on 1st April and ending on 31st March each year.'"
            },
            {
                question: "Within how many months after the end of the financial year must the Authority's accounts be audited?",
                options: [
                    "One month",
                    "Three months",
                    "Six months",
                    "Twelve months"
                ],
                answer: 1,
                explanation: "Section 35(2) states: 'The accounts of the Authority in respect of each financial year shall, within three months of the end of each financial year, be audited by an auditor appointed by the Board.'"
            },
            {
                question: "Who appoints the auditor for the Authority's accounts?",
                options: [
                    "The Minister of Finance",
                    "The Auditor-General",
                    "The Board",
                    "The Chief Executive Officer"
                ],
                answer: 2,
                explanation: "Section 35(2) states the auditor is 'appointed by the Board'. The Board has this responsibility."
            },
            {
                question: "Within what period must the Authority submit its annual report to the Minister after the end of the financial year?",
                options: [
                    "Three months",
                    "Six months, or such longer period as the Minister may approve",
                    "One year",
                    "There is no fixed deadline"
                ],
                answer: 1,
                explanation: "Section 36(1) states: 'The Authority shall, within a period of six months after the end of the financial year or within such longer period as the Minister may approve, submit to the Minister, a comprehensive report on the operations of the Authority during such year.'"
            },
            {
                question: "What must the Minister do with the Authority's annual report within 30 days of receiving it?",
                options: [
                    "Publish it in the Government Gazette",
                    "Lay it before the National Assembly",
                    "Submit it to the Auditor-General for verification",
                    "Return it to the Authority for any corrections"
                ],
                answer: 1,
                explanation: "Section 36(2) states: 'The Minister shall, within 30 days of his or her receiving the Authority's report referred to under subsection (1), lay such report before the National Assembly.'"
            },
            {
                question: "The auditor's report on the Authority's accounts must be forwarded to the Authority within:",
                options: [
                    "7 days of completion",
                    "14 days of completion",
                    "30 days of completion",
                    "3 months of the financial year-end"
                ],
                answer: 1,
                explanation: "Section 35(4) states: 'The report of the auditor and a copy of the audited accounts shall, within 14 days of the completion thereof, be forwarded to the Authority by the auditor.'"
            },
            {
                question: "The Authority is required to submit an Annual Management Plan. What must this plan include?",
                options: [
                    "Only the budget for the upcoming year",
                    "The previous year's performance result, objective of the current year, resource required to deliver on specified output, and any other output",
                    "Only a list of procurement activities planned",
                    "A detailed staffing plan for the next five years"
                ],
                answer: 1,
                explanation: "Section 37(2) states: 'An Annual Management Plan should set out the previous year's performance result, objective of the current year and resource required to deliver on a specified output, and any other output.'"
            },
            {
                question: "The Authority may establish pension, superannuation, provident or other funds for its employees. Which section provides for this?",
                options: [
                    "Section 33",
                    "Section 35",
                    "Section 38",
                    "Section 40"
                ],
                answer: 2,
                explanation: "Section 38(1) states: 'The Authority may, out of its revenues, establish and maintain such pension, superannuation, provident or other funds as it may consider desirable or necessary for the payment of benefits or other allowances on the death, sickness, injury, superannuation, resignation, retirement or discharge of its employees.'"
            }
        ]
    },

    // ============================================================
    // PART VI - PROCURING ENTITIES AND ACCOUNTING OFFICERS (Sections 39-44)
    // ============================================================
    part6: {
        title: "Part VI — Procuring Entities and Accounting Officers",
        sections: "Sections 39-44",
        questions: [
            {
                question: "A procuring entity consists of several components. Which of the following is NOT a component listed in Section 39?",
                options: [
                    "The Accounting Officer",
                    "The procurement oversight unit",
                    "The Public Procurement Tribunal",
                    "The user Department"
                ],
                answer: 2,
                explanation: "Section 39 lists the components as: Accounting Officer, procurement oversight unit, procurement unit, ad hoc Evaluation Committee, user Department, or any other appropriate structure. The Tribunal is not part of a procuring entity."
            },
            {
                question: "In executing its functions, a procuring entity must 'take into account the total lifecycle cost of acquisition, operation and maintenance'. This is an example of:",
                options: [
                    "A preference scheme requirement",
                    "A value for money consideration",
                    "A citizen empowerment mandate",
                    "A confidentiality obligation"
                ],
                answer: 1,
                explanation: "Section 40(2)(j) requires the procuring entity to 'take into account the total lifecycle cost of acquisition, operation and maintenance of supplies, works and services'. This is a value for money consideration, going beyond just the purchase price."
            },
            {
                question: "An Accounting Officer may delegate a procurement function to another procuring entity. Which of the following is true about such delegation?",
                options: [
                    "The delegation divests the Accounting Officer of all responsibility for the function",
                    "The Accounting Officer remains responsible and accountable for any decision made in the exercise of the delegated function",
                    "The delegation must be approved by the Authority before it takes effect",
                    "The delegation can only be made to a subdivision within the same procuring entity"
                ],
                answer: 1,
                explanation: "Section 43(3) states: 'An Accounting Officer shall remain responsible and accountable for any decision made in the exercise of a procurement function delegated by such Accounting Officer.' Delegation does not transfer accountability."
            },
            {
                question: "A procuring entity decides to use a procurement agent to handle a complex international tender. Under Section 44, which condition must be met?",
                options: [
                    "The procurement agent must be a citizen contractor registered in Botswana",
                    "The procurement agent must be appointed in accordance with the provisions of this Act, and all procurement shall be undertaken in accordance with the Act",
                    "The Accounting Officer is no longer accountable for the procurement once the agent is appointed",
                    "The procurement agent may use its own procurement procedures if they are internationally recognised"
                ],
                answer: 1,
                explanation: "Section 44(1) proviso states: '(i) the procurement agent or procurement service provider shall be appointed in accordance with the provisions of this Act, and (ii) all procurement by the procurement agent or procurement service provider shall be undertaken in accordance with the provisions of this Act.' Section 44(2) confirms the Accounting Officer remains accountable."
            },
            {
                question: "An Accounting Officer rejects a bid recommendation from the procurement oversight unit and appoints an independent evaluation team to re-evaluate. Under Section 41(2)(f), what must the Accounting Officer do?",
                options: [
                    "Obtain the Authority's approval before rejecting the recommendation",
                    "Cancel the entire tender process and restart from the beginning",
                    "Detail the action taken and the reasons for such action",
                    "Notify all bidders of the rejection within 24 hours"
                ],
                answer: 2,
                explanation: "Section 41(2)(f) states the Accounting Officer is responsible for 'returning of a bid recommendation to the sender for reconsideration, rejection of a bid recommendation, appointment of an independent evaluation team to re-evaluate a bid recommendation, and on the determination of the Accounting Officer, make an award to a compliant bidder detailing the action taken and the reasons for such action'."
            },
            {
                question: "Under Section 41(2)(e), if an Accounting Officer cancels a tender process, what compensation is owed to the bidders?",
                options: [
                    "Full compensation for all bid preparation costs",
                    "A fixed percentage of the estimated contract value to each bidder",
                    "No compensation is owed to bidders of a cancelled tender",
                    "Compensation only to the lowest evaluated bidder"
                ],
                answer: 2,
                explanation: "Section 41(2)(e) states the Accounting Officer is responsible for 'cancellation of a tender process and rejection of a tender offer at any time prior to entering into a contract, in the manner as may be prescribed, and the Accounting Officer shall not compensate the bidder of a tender that has been cancelled'."
            },
            {
                question: "A procuring entity is required to 'ensure competition among contractors by using the most efficient and competitive methods of procurement to achieve the best value for money'. Which section contains this obligation?",
                options: [
                    "Section 39",
                    "Section 40(2)(f)",
                    "Section 41(1)",
                    "Section 43"
                ],
                answer: 1,
                explanation: "Section 40(2)(f) states: 'ensure competition among contractors by using the most efficient and competitive methods of procurement to achieve the best value for money'."
            },
            {
                question: "The Accounting Officer must submit certain items to the Authority. Which of the following is NOT listed in Section 41(2)(h)?",
                options: [
                    "An annual procurement plan",
                    "A list of contracts awarded",
                    "Copies of complaints and reports of the findings",
                    "A quarterly financial statement of the procuring entity"
                ],
                answer: 3,
                explanation: "Section 41(2)(h) lists: 'submission to the Authority of — (i) an annual procurement plan, (ii) a list of contracts awarded, and (iii) copies of complaints and reports of the findings'. A quarterly financial statement is not mentioned."
            },
            {
                question: "Functions related to procurement under this Act shall be carried out by persons who are:",
                options: [
                    "Any employee assigned by the Accounting Officer",
                    "Qualified or knowledgeable in procurement matters, and independently in relation to such functions",
                    "Certified by the Authority regardless of their position",
                    "At least at the level of Deputy Director or equivalent"
                ],
                answer: 1,
                explanation: "Section 40(3) states: 'The functions related to procurement under this Act, of a procuring entity, shall be carried out — (a) by a person qualified or knowledgeable in procurement matters; and (b) independently in relation to such functions.'"
            },
            {
                question: "An Accounting Officer decides to aggregate the procurement of office supplies across five departments to benefit from economies of scale. Which procurement principle in Section 40 does this reflect?",
                options: [
                    "Standardisation of procurement items",
                    "Aggregation of procurement items and activities that are common to a procuring entity",
                    "Sustainability in procurement",
                    "Electronic procurement implementation"
                ],
                answer: 1,
                explanation: "Section 40(2)(d) requires the procuring entity to 'aggregate procurement items and activities that are common to a procuring entity in order to benefit from economies of scale'."
            }
        ]
    },

    // ============================================================
    // PART VII - PROCUREMENT OVERSIGHT UNITS (Sections 45-51)
    // ============================================================
    part7: {
        title: "Part VII — Procurement Oversight Units, Ad Hoc Evaluation Committees, User Departments and Central Agencies",
        sections: "Sections 45-51",
        questions: [
            {
                question: "The procurement oversight unit is described as the 'principal advisor to an Accounting Officer on any procurement matter'. Does this mean the Accounting Officer must follow the unit's advice?",
                options: [
                    "Yes, because the unit is the principal advisor and its recommendations are binding",
                    "No, the Accounting Officer may reject recommendations but must give reasons for doing so",
                    "No, the unit provides advisory and oversight functions, but the Accounting Officer retains decision-making authority",
                    "Yes, unless the Authority overrules the unit's advice"
                ],
                answer: 2,
                explanation: "Section 46(1)(a) describes the unit as the 'principal advisor'. However, Section 41(1) gives the Accounting Officer overall responsibility for procurement execution. The oversight unit advises, but the Accounting Officer decides. Section 41(2)(f) shows the Accounting Officer can reject a bid recommendation and detail the reasons."
            },
            {
                question: "A procurement oversight unit 'shall carry out such functions independently'. What does this independence mean under Section 46(3)?",
                options: [
                    "The unit is independent of the procuring entity and reports directly to the Authority",
                    "It relates to segregation of duties and does not mean the unit shall not report to or be under the supervision of the Accounting Officer",
                    "The unit cannot be overruled by the Accounting Officer on any procurement matter",
                    "The unit has its own budget and financial independence from the procuring entity"
                ],
                answer: 1,
                explanation: "Section 46(3) states: 'The independence of a procurement oversight unit referred to under subsection (2) relates to the segregation of duties and shall not be construed to mean that a procurement oversight unit shall not report to or be under the supervision or direction of an Accounting Officer.'"
            },
            {
                question: "An ad hoc Evaluation Committee is established by:",
                options: [
                    "The Authority",
                    "The Accounting Officer",
                    "The procurement oversight unit",
                    "The Minister"
                ],
                answer: 1,
                explanation: "Section 49(1) states: 'An Accounting Officer shall establish an ad hoc Evaluation Committee which shall conduct the evaluation of bids and submit recommendations to a procurement unit.'"
            },
            {
                question: "To whom does the ad hoc Evaluation Committee submit its recommendations?",
                options: [
                    "Directly to the Accounting Officer",
                    "To the procurement unit",
                    "To the procurement oversight unit",
                    "To the Authority for review"
                ],
                answer: 1,
                explanation: "Section 49(1) states the Evaluation Committee shall 'submit recommendations to a procurement unit'."
            },
            {
                question: "The Minister may designate a central agency as a Government Procurement Office. What is one of its key functions regarding common use items?",
                options: [
                    "To approve all procurement above a specified threshold",
                    "To develop and manage framework contracts for procurement of common use items by procuring entities",
                    "To replace the Authority in regulating procurement for common use items",
                    "To directly purchase all common use items on behalf of the entire Government"
                ],
                answer: 1,
                explanation: "Section 51(2)(b) states the functions include: 'develop and manage framework contracts for procurement of common use items by a procuring entity within Government'."
            },
            {
                question: "Once a central agency is designated under Section 51(1), how must procuring entities procure common use items?",
                options: [
                    "They may choose their own method of procurement as long as it is competitive",
                    "They must procure in accordance with such procedures as may be prescribed",
                    "They are exempt from the Act for common use items",
                    "They must use open international bidding for all common use items"
                ],
                answer: 1,
                explanation: "Section 51(3) states: 'A procuring entity shall, once a central agency is designated under subsection (1), procure common use items or any other works, services or supplies in accordance with such procedures as may be prescribed.'"
            },
            {
                question: "The procurement unit is responsible for 'preparing a statement of requirements'. What is this document?",
                options: [
                    "A list of contractors invited to bid",
                    "A detailed specification of what the procuring entity needs to procure",
                    "The procurement budget for the financial year",
                    "The contract award notice"
                ],
                answer: 1,
                explanation: "Section 48(2)(c) lists preparing a statement of requirements as a function of the procurement unit. This is the specification document that describes what is to be procured."
            },
            {
                question: "Which entity is responsible for issuing an approved contract document?",
                options: [
                    "The Accounting Officer",
                    "The procurement oversight unit",
                    "The procurement unit",
                    "The ad hoc Evaluation Committee"
                ],
                answer: 2,
                explanation: "Section 48(2)(h) lists 'issue an approved contract document' as a function of the procurement unit."
            },
            {
                question: "The functions of a user Department are determined by:",
                options: [
                    "The Accounting Officer's discretion",
                    "The procurement oversight unit's directive",
                    "As prescribed by regulations",
                    "The Authority's annual guidelines"
                ],
                answer: 2,
                explanation: "Section 50(1) states: 'The functions of a user Department shall be as prescribed.' This means they are determined in the regulations made under the Act."
            },
            {
                question: "What is the purpose of framework contracts managed by the Government Procurement Office for common use items?",
                options: [
                    "To eliminate all other procurement methods within Government",
                    "To allow procuring entities to procure goods or services needed continuously at an agreed price over an agreed period through placement of orders",
                    "To ensure only citizen contractors supply common use items",
                    "To delegate procurement authority from Accounting Officers to the central agency"
                ],
                answer: 1,
                explanation: "Section 2 defines 'framework contract' as 'a contractual arrangement which allows a procuring entity to procure goods, services or works that are needed continuously or repeatedly at an agreed price over an agreed period of time through placement of orders as and when the need arises'. The Government Procurement Office manages these framework contracts."
            }
        ]
    },

    // ============================================================
    // PART VIII - METHODS AND SELECTION OF PROCUREMENT (Sections 52-55)
    // ============================================================
    part8: {
        title: "Part VIII — Methods and Selection of Procurement",
        sections: "Sections 52-55",
        questions: [
            {
                question: "A procuring entity needs to purchase standard office stationery worth P50,000. It decides to use micro procurement. Is this method appropriate?",
                options: [
                    "No, because micro procurement can only be used for items below P10,000",
                    "Yes, provided the procurement does not exceed the prescribed threshold for micro procurement",
                    "No, because office stationery must be procured through open bidding",
                    "Yes, but only if there is only one supplier available"
                ],
                answer: 1,
                explanation: "Section 52(1)(f) lists micro procurement as a valid procurement method. Whether it is appropriate depends on the prescribed threshold. The question says P50,000; the Act leaves thresholds to be prescribed."
            },
            {
                question: "According to Section 53(1), which is the default procurement method that a procuring entity 'shall' use except as otherwise prescribed?",
                options: [
                    "Open international bidding",
                    "Open domestic bidding",
                    "Restricted domestic bidding",
                    "Request for quotations"
                ],
                answer: 1,
                explanation: "Section 53(1) states: 'Except as otherwise prescribed, a procuring entity shall conduct procurement by means of open domestic bidding.'"
            },
            {
                question: "A procuring entity decides to use restricted international bidding for a specialised medical equipment procurement. What must it do under Section 53(3)?",
                options: [
                    "Obtain prior approval from the Authority",
                    "Provide justification for the use of that method, subject to the approval by an Accounting Officer",
                    "Publish the decision in the Government Gazette",
                    "Request Ministerial exemption from open bidding requirements"
                ],
                answer: 1,
                explanation: "Section 53(3) states: 'If a procuring entity uses a method of procurement other than open domestic bidding, it shall, subject to the approval by an Accounting Officer, provide justification for the use of that method.'"
            },
            {
                question: "A procuring entity splits a large construction project into several smaller contracts, each falling below the open bidding threshold, and awards them through micro procurement. Is this lawful?",
                options: [
                    "Yes, if each contract is genuinely below the threshold",
                    "No, Section 53(4) prohibits splitting procurement to avoid formal procurement",
                    "Yes, if the procurement oversight unit approves the splitting",
                    "No, unless the total value of all contracts is less than P500,000"
                ],
                answer: 1,
                explanation: "Section 53(4) states: 'A procuring entity shall not split a procurement in order to avoid a formal procurement.'"
            },
            {
                question: "The procurement of highly sensitive works, services, or supplies may involve restricted procurement. Under Section 54(2), how is such procurement managed?",
                options: [
                    "It is exempt from the Act entirely",
                    "It is managed on the basis of a dual list covering open procurement items and restricted procurement items",
                    "It must be approved by the National Security Council",
                    "Only the Minister may authorise such procurement"
                ],
                answer: 1,
                explanation: "Section 54(2) states a procuring entity 'shall manage its procurement on the basis of a dual list, covering items that are subject to (a) open procurement method; and (b) restricted procurement of such highly sensitive works, services, supplies... in respect of which strict confidentiality and utmost secrecy may be required'."
            },
            {
                question: "The National eProcurement System is described as:",
                options: [
                    "A website for publishing tender notices only",
                    "An electronic end-to-end one stop information and transaction portal for any public procurement",
                    "A system used only for bid submission and opening",
                    "A database of all registered contractors"
                ],
                answer: 1,
                explanation: "Section 55(1) states: 'The Minister shall establish a National eProcurement System which shall be an electronic end-to-end one stop information and transaction portal for any public procurement in accordance with this Act.'"
            },
            {
                question: "Which of the following is NOT a listed function of the National eProcurement System under Section 55(3)?",
                options: [
                    "Registration of users and suppliers",
                    "Evaluation and award of a tender",
                    "Management of a supplier",
                    "Approval of annual procurement plans by the Authority"
                ],
                answer: 3,
                explanation: "Section 55(3) lists many functions including (a) registration of users and suppliers, (f) evaluation and award of a tender, (l) management of a supplier. It does not include approval of annual procurement plans by the Authority."
            },
            {
                question: "A document submitted electronically using the National eProcurement System:",
                options: [
                    "Must also be submitted in hard copy to be valid",
                    "Is not admissible in any legal proceedings",
                    "Shall be included in the definition of a document submitted in writing under this Act",
                    "Is only valid if digitally signed by a notary"
                ],
                answer: 2,
                explanation: "Section 55(2) states: 'A document which has to be submitted in writing under this Act shall include a document submitted electronically using the National eProcurement System referred to under subsection (1).'"
            },
            {
                question: "The restricted list for sensitive procurement is subject to audit by:",
                options: [
                    "The Authority only",
                    "The Auditor General, as a classified audit",
                    "The Directorate on Corruption and Economic Crime",
                    "The Minister's internal audit unit"
                ],
                answer: 1,
                explanation: "Section 54(4) states: 'The restricted list referred to under subsection (3) shall be subject to a classified audit by the Auditor General.'"
            },
            {
                question: "A procuring entity uses 'competitive dialogue' as a procurement method. Which of the following best describes this method under Section 52(2)?",
                options: [
                    "A bidding method that requires bidders to submit sealed bids with no negotiation",
                    "A procedure in which a contractor is allowed to develop alternative proposals in response to requirements, and candidates with suitable proposals are invited to tender",
                    "A method where the procuring entity directly negotiates with a single contractor",
                    "An auction method where bidders can see each other's bids in real time"
                ],
                answer: 1,
                explanation: "Section 52(2) defines competitive dialogue as 'a bidding method that allows a bidder to develop alternative proposals in response to a procuring entity's requirements and tenderers are invited to submit competitive bids when the proposals are developed to sufficient detail; or a procedure in which a contractor or a bidder is allowed to develop alternative proposals... and candidates with proposals that are suitable and capable... are invited to tender.'"
            }
        ]
    },

    // ============================================================
    // PART IX - STANDARDISED BIDDING PACKAGES (Sections 56-62)
    // ============================================================
    part9: {
        title: "Part IX — Standardised Bidding Packages and Bidding Processes",
        sections: "Sections 56-62",
        questions: [
            {
                question: "The Authority develops standardised bidding packages. Are procuring entities required to use them?",
                options: [
                    "No, they are merely guidelines and procuring entities may adapt them",
                    "Yes, they shall be used on a mandatory basis by any procuring entity as may be prescribed",
                    "Only for procurements above a certain threshold",
                    "Only if the Authority specifically directs the procuring entity to use them for a particular tender"
                ],
                answer: 1,
                explanation: "Section 56(1) states: 'The Authority shall develop and issue, and amend where necessary, a standardised bidding package and contract, which shall be used on a mandatory basis by any procuring entity as may be prescribed.'"
            },
            {
                question: "Each procuring entity must enter into an 'integrity agreement' with contractors. What is the purpose of this agreement?",
                options: [
                    "To guarantee payment to the contractor upon completion of work",
                    "To promote compliance to ethical conduct and integrity in the bidding process and execution of a contract",
                    "To transfer all liability from the procuring entity to the contractor",
                    "To confirm that the contractor has no pending litigation in any court"
                ],
                answer: 1,
                explanation: "Section 56(2) states: 'A procuring entity shall enter into an integrity agreement with contractors to promote compliance to ethical conduct and integrity in the bidding process and execution of a contract.'"
            },
            {
                question: "Where the Authority has not yet issued national standards specifications, what interim measure does Section 57(2) provide?",
                options: [
                    "Procuring entities may use any international standard they choose",
                    "The Authority shall determine which country's or institution's national standards specifications shall be used",
                    "Procuring entities may proceed without specifications until the Authority issues them",
                    "The Minister prescribes interim specifications by Gazette"
                ],
                answer: 1,
                explanation: "Section 57(2) states: 'Where the Authority has not yet issued the national standards specifications... the Authority shall, in the interim and after consultation with the relevant stakeholders, determine which country's or institution's national standards specifications shall be used by a procuring entity in its bidding packages.'"
            },
            {
                question: "A procuring entity wishes to use a different standard from the national standards specification for a specific project due to unique technical requirements. What must it do?",
                options: [
                    "Proceed with the different standard and inform the Authority afterwards",
                    "Apply to the Authority for derogation from national standards specifications",
                    "Seek Ministerial exemption from the Act",
                    "Use the national standard but add supplementary technical requirements"
                ],
                answer: 1,
                explanation: "Section 58(1) states: 'A procuring entity may, in exceptional cases, apply to the Authority for derogation from national standards specifications.'"
            },
            {
                question: "From the time a Tender Notice is issued, correspondence between the bidder and procuring entity, including the bidding package, forms part of the contract and has legal validity. This is established by:",
                options: [
                    "Section 56",
                    "Section 59",
                    "Section 61",
                    "Section 62"
                ],
                answer: 1,
                explanation: "Section 59(1) states: 'From the time a Tender Notice is issued, the following shall form part of the contract and have legal validity, the (a) correspondence between a bidder and a procuring entity including the bidding package, up to the point of adjudication; and (b) communication between an awarded bidder and a procuring entity...'"
            },
            {
                question: "When procurement is by electronic means, who is responsible for confidentiality, completeness, integrity and timeliness of data?",
                options: [
                    "The Authority",
                    "The procuring entity's IT department",
                    "The transmitter, in each instance",
                    "The National eProcurement System administrator"
                ],
                answer: 2,
                explanation: "Section 60 states: 'Where procurement is by electronic means, the transmitter shall, in each instance, be responsible for the confidentiality, completeness, integrity and timeliness of the data and the document being transmitted.'"
            },
            {
                question: "The official language of any communication in relation to a procurement process under this Act is:",
                options: [
                    "Setswana, as the national language",
                    "English, except where the Authority otherwise determines or as stated in the bidding package",
                    "Either English or Setswana at the bidder's choice",
                    "The language specified in the procuring entity's internal policies"
                ],
                answer: 1,
                explanation: "Section 62(1) states: 'English shall be the official language of any communication in relation to a procurement process, except where (a) the Authority otherwise determines; or (b) it is otherwise stated in the specific instructions in a bidding package or Tender Notice.'"
            },
            {
                question: "A procuring entity charges a fee for a bid document. Is this permitted?",
                options: [
                    "No, bidding documents must be provided free of charge to ensure open competition",
                    "Yes, a procuring entity shall charge a bidder fee, as may be prescribed",
                    "Only if the estimated contract value exceeds P500,000",
                    "Yes, but the fee must be refunded if the bidder submits a responsive bid"
                ],
                answer: 1,
                explanation: "Section 56(5) states: 'A procuring entity shall charge a bidder fee, as may be prescribed, for a bid document.'"
            },
            {
                question: "The period of validity of a tender is determined by:",
                options: [
                    "The Authority's standard regulations, which fix it at 90 days for all tenders",
                    "The period specified in a tender document",
                    "The Accounting Officer at the time of bid opening",
                    "The bidder, who may propose any validity period in their submission"
                ],
                answer: 1,
                explanation: "Section 61 states: 'The period of validity of a tender shall be the period specified in a tender document.'"
            },
            {
                question: "Subject to the provisions of the Act, any notification, decision, and other communication must be:",
                options: [
                    "In writing, but a procuring entity may use electronic communication for certain purposes",
                    "Always in hard copy, signed and delivered by courier",
                    "Oral, followed by written confirmation within 48 hours",
                    "At the discretion of the Accounting Officer"
                ],
                answer: 0,
                explanation: "Section 62(2) states: 'Subject to the provisions of this Act, any document, notification, decision and any other communication in accordance with this Act shall be in writing.' Section 62(3) allows electronic communication for publication, transmission, submission, conclusion, and payment processing."
            }
        ]
    },

    // ============================================================
    // PART X - EVALUATION AND ADJUDICATION PROCEDURE (Sections 63-71)
    // ============================================================
    part10: {
        title: "Part X — Evaluation and Adjudication Procedure",
        sections: "Sections 63-71",
        questions: [
            {
                question: "What must a bid package include in the instructions regarding evaluation, as per Section 63(1)(a)?",
                options: [
                    "Only the name of the evaluation committee members",
                    "The criteria to be used, the value and weights to be attached to each criterion, and the evaluation procedure or methodology",
                    "The minimum number of bidders required for a valid evaluation",
                    "A statement that evaluation will be at the sole discretion of the Accounting Officer"
                ],
                answer: 1,
                explanation: "Section 63(1)(a) requires providing in the instructions: '(i) the criteria to be used in the evaluation process, (ii) the value and weights to be attached to each criterion, and (iii) the evaluation procedure or methodology to be followed in the conduct of the evaluation'."
            },
            {
                question: "A procuring entity receives 12 bids but only 8 are substantially compliant. The evaluation committee evaluates all 12. Is this correct?",
                options: [
                    "Yes, because all bids should be evaluated to ensure fairness",
                    "No, only substantially compliant bids should be considered for comparison, evaluation, adjudication and award",
                    "Yes, but non-compliant bids receive a score of zero",
                    "No, unless the Accounting Officer specifically directs evaluation of all bids"
                ],
                answer: 1,
                explanation: "Section 63(2) states: 'A procuring entity shall consider only a substantially compliant bid for comparison, evaluation, adjudication and award.'"
            },
            {
                question: "An evaluator wants to consider a bidder's past performance with another Ministry, even though the bidding package did not include past performance as a criterion. Can the evaluator do this?",
                options: [
                    "Yes, if the evaluator believes it is relevant to the best value decision",
                    "No, an evaluator shall not take into account any factor outside the national standards specifications or evaluation procedure explicitly stated in the bidding package",
                    "Yes, but only if the bidder is informed and given a chance to respond",
                    "No, unless the Authority grants special permission"
                ],
                answer: 1,
                explanation: "Section 64(1) states: 'In the evaluation and adjudication of a bid, an evaluator or adjudicator shall not take into account any factor that is outside the national standards specifications or the evaluation procedure explicitly stated in the bidding package when arriving at a recommendation or in making an award, unless there is an extenuating reason to use an industry standard.'"
            },
            {
                question: "A procuring entity wants to alter the conditions of an awarded bid before implementation. What does Section 65 require?",
                options: [
                    "The alteration can be made verbally with the contractor's agreement",
                    "Prior written approval of an Accounting Officer is required if the alteration impacts evaluation ranking or amends the nature of the awarded bid",
                    "Alterations are never permitted after award",
                    "The alteration only needs approval from the procurement unit"
                ],
                answer: 1,
                explanation: "Section 65(1) requires prior written approval of the Accounting Officer if the alteration is likely to impact on the evaluation and adjudication ranking and thus the choice of contractor, or amends the nature of the awarded bid in terms of contract cost, implementation schedule, components, aggregation or splitting."
            },
            {
                question: "A normal variation in the execution of a contract, within the contingency sum approved by the Accounting Officer, does not require prior written approval. This is stated in:",
                options: [
                    "Section 65(1)",
                    "Section 65(2)",
                    "Section 66",
                    "Section 68"
                ],
                answer: 1,
                explanation: "Section 65(2) states: 'Subsection (1) shall not apply to a normal variation in the execution of a contract, where such variation is within the contingency sum of a bid approved by an Accounting Officer.'"
            },
            {
                question: "A bidder discovers, after award, that a key subcontractor has gone bankrupt and cannot perform. What must the bidder do under Section 66?",
                options: [
                    "Find a replacement subcontractor without informing the procuring entity",
                    "Immediately draw to the attention of the Accounting Officer or procuring entity any changes in circumstances that could materially affect the bidder's capacity to deliver",
                    "Request the subcontractor to complete as much work as possible before the bankruptcy becomes public",
                    "Cancel the contract unilaterally due to force majeure"
                ],
                answer: 1,
                explanation: "Section 66(1) states: 'A bidder, or any party with an interest in the procurement process in question, shall... immediately draw to the attention of an Accounting Officer or a procuring entity, any changes in the circumstances of the bidder that could materially affect such bidder's capacity to successfully deliver the required scheduled outputs.'"
            },
            {
                question: "An Accounting Officer retrospectively approves a tender that was issued without following proper procedures. Under Section 68, when is retroactive approval permitted?",
                options: [
                    "Whenever the Accounting Officer deems it necessary",
                    "Only when the Accounting Officer is satisfied that a procuring entity was required to proceed due to an urgent requirement or emergency arising from special circumstances",
                    "Retroactive approval is never permitted under any circumstances",
                    "Only with the prior written consent of the Authority"
                ],
                answer: 1,
                explanation: "Section 68(2) states: 'Notwithstanding subsection (1), an Accounting Officer may approve a retroactive bid issued or invitation to tender, where the Accounting Officer is satisfied that a procuring entity was required to proceed with the procurement due to an urgent requirement or emergency arising from special circumstances.'"
            },
            {
                question: "A procuring entity issues an invitation to bid but does not have funds available to pay for the contract if awarded. What does Section 69 require?",
                options: [
                    "The procuring entity may still invite bids if it expects funds to be approved before contract signing",
                    "A procuring entity shall not invite a bid if funds for the bid are inadequate or not available, or without written confirmation that funds are available",
                    "The Accounting Officer may sign a promissory note to the contractor",
                    "The procurement can proceed if the contractor agrees to deferred payment"
                ],
                answer: 1,
                explanation: "Section 69 states: 'A procuring entity shall not invite a bid or sign a public private partnership contract if the (a) funds for the bid are inadequate or not available; or (b) procuring entity has not issued a written confirmation that the funds required for the bid are available.'"
            },
            {
                question: "An 'end of activity report' must be submitted to the Authority not later than:",
                options: [
                    "The date of contract signing",
                    "The date of final payment to the contractor",
                    "30 days after contract award",
                    "The end of the financial year"
                ],
                answer: 1,
                explanation: "Section 70(1) states: 'a procuring entity shall submit to the Authority in respect of each bid, an end of activity report not later than the date of final payment to the contractor'."
            },
            {
                question: "A procuring entity is required to prepare an annual strategic procurement plan. When must this plan be published?",
                options: [
                    "At the end of the financial year",
                    "At the beginning of each financial year by notice in the Gazette, newspaper, electronic media or Government portal",
                    "Within 30 days of budget approval",
                    "Whenever the Authority requests it"
                ],
                answer: 1,
                explanation: "Section 71(1)(b) states the procuring entity shall 'by notice in the Gazette, in a newspaper of national circulation, electronic media or Government portal, publish such approved procurement plan at the beginning of each financial year for any person interested in bidding to prepare for optimal competition'."
            }
        ]
    },

    // ============================================================
    // PART XI - RESERVATION AND PREFERENTIAL TREATMENT (Sections 72-81)
    // ============================================================
    part11: {
        title: "Part XI — Reservation and Preferential Treatment",
        sections: "Sections 72-81",
        questions: [
            {
                question: "The Government's reservation and preferential procurement scheme must be consistent with:",
                options: [
                    "The ruling party's manifesto",
                    "Its external obligations and its stable, market oriented, macro-economic framework",
                    "The preferences of the Minister of Trade",
                    "The demands of citizen contractor associations"
                ],
                answer: 1,
                explanation: "Section 72(1) states the scheme 'shall be consistent with its external obligations and its stable, market oriented, macro-economic framework'."
            },
            {
                question: "Under Section 73(e), a procuring entity shall, as the Minister may prescribe, unbundle a tender to promote participation of a citizen or citizen contractor. What does this mean?",
                options: [
                    "Award the entire tender to a single citizen contractor",
                    "Divide the tender into smaller lots to allow citizen contractors with smaller capacity to participate",
                    "Exempt citizen contractors from meeting technical requirements",
                    "Reduce the price for citizen contractors only"
                ],
                answer: 1,
                explanation: "Unbundling means dividing a large procurement into smaller lots so that citizen contractors, who may not have the capacity to bid for the entire project, can bid for individual lots. This promotes participation."
            },
            {
                question: "To be eligible for a specific reservation or preference scheme, a contractor must:",
                options: [
                    "Be registered with the Authority only",
                    "Attach to its bidding package certification or proof of eligibility from the competent issuing authority",
                    "Submit an affidavit of citizenship",
                    "Have at least 51% citizen ownership"
                ],
                answer: 1,
                explanation: "Section 75 states: 'To be eligible for a specific reservation or preference scheme, a contractor shall attach to its bidding package certification or proof of eligibility from the competent issuing authority.'"
            },
            {
                question: "Under Section 76(1), all works, services and supplies procurement shall be reserved for a citizen or citizen contractor except:",
                options: [
                    "When the Authority directs otherwise",
                    "As otherwise provided under this Act",
                    "When the value exceeds P10 million",
                    "When international competitive bidding is used"
                ],
                answer: 1,
                explanation: "Section 76(1) states: 'Except as otherwise provided under this Act, all works, services and supplies procurement shall be reserved for a citizen or citizen contractor.'"
            },
            {
                question: "The reservation scheme under Section 76(2) includes procurement activities intended to promote innovation, local technology and the commercialisation of the procurement activity. This is specified in which sub-paragraph?",
                options: [
                    "Section 76(2)(f)",
                    "Section 76(2)(a)",
                    "Section 76(2)(c)",
                    "Section 76(2)(g)"
                ],
                answer: 0,
                explanation: "Section 76(2)(f) lists: 'a procurement activity intended to promote innovation, local technology and the commercialisation of the procurement activity'."
            },
            {
                question: "Under Section 78, the highest level of preference in descending order is:",
                options: [
                    "Sole citizen contractors",
                    "Joint ventures between citizen contractors",
                    "Joint ventures between citizen and local contractors with majority shares held by citizen contractors",
                    "Association arrangements between citizen subcontractors and local contractors"
                ],
                answer: 1,
                explanation: "Section 78(1) lists the order as: (a) joint ventures between citizen contractors; (b) sole citizen contractors; (c) joint ventures between citizen and local contractors, with majority shares held by citizen contractors; (d) association arrangements between citizen subcontractors and local contractors."
            },
            {
                question: "What happens if a bidding package is issued without expressly providing for the inclusion of the prescribed reservation or preference schemes where such scheme is applicable?",
                options: [
                    "The bidder may still claim preference after award",
                    "The bidding package shall be invalid",
                    "The procuring entity must reissue the package with the correct provisions",
                    "The Authority may impose a fine on the procuring entity"
                ],
                answer: 1,
                explanation: "Section 77(3) states: 'A bidding package that is issued without expressly providing for the inclusion of the prescribed reservation or preference schemes, where such reservation or preference scheme is applicable, shall be invalid.'"
            },
            {
                question: "A preference in respect of supplies may apply to any product produced in Botswana and may vary according to:",
                options: [
                    "The size of the manufacturing company",
                    "The percentage of value addition or local content as may be prescribed",
                    "The duration the company has been in business in Botswana",
                    "Whether the product is also exported"
                ],
                answer: 1,
                explanation: "Section 80(2) states: 'A preference referred to under subsection (1) may vary in accordance with the percentage of value addition or local content as may be prescribed.'"
            },
            {
                question: "Where a primary contractor is required to use citizen subcontractors, what must be appended to its bidding package?",
                options: [
                    "A letter of intent from the subcontractor",
                    "A subcontracting agreement for each subcontractor detailing the key operational principles which shall govern the contract",
                    "Proof of payment of subcontractor fees",
                    "A certificate from the Authority approving the subcontractor"
                ],
                answer: 1,
                explanation: "Section 81(1) states: 'Where the primary contractor... elects or is required to use citizen subcontractors... such primary contractor shall append to its bidding package a subcontracting agreement for each subcontractor, detailing the key operational principles which shall govern the contract of the parties.'"
            },
            {
                question: "'Local content' means the sum of domestic or locally generated input that is required or used at any stage in a supply chain. This includes:",
                options: [
                    "Only materials manufactured in Botswana",
                    "Materials, labour, services, technology, works or parts, or any other related input",
                    "Only raw materials extracted in Botswana",
                    "Only the percentage of ownership by Botswana citizens"
                ],
                answer: 1,
                explanation: "Section 80(3) defines 'local content' as 'the sum of domestic or locally generated input of materials, labour, services, technology, works or parts, or any other related input, that is required or used at any stage in a supply chain'."
            }
        ]
    },

    // ============================================================
    // PART XII - ACCOUNTABILITY AND TRANSPARENCY (Sections 82-90)
    // ============================================================
    part12: {
        title: "Part XII — Accountability and Transparency: Records and Ethics",
        sections: "Sections 82-90",
        questions: [
            {
                question: "The Authority, procuring entities, and other entities within the scope of this Act must keep and maintain detailed records of all their procurement processes and preserve all relevant documents. This duty is imposed by:",
                options: [
                    "Section 83",
                    "Section 82",
                    "Section 85",
                    "Section 87"
                ],
                answer: 1,
                explanation: "Section 82 states: 'The Authority, procuring entity and any other entity that falls within the scope of this Act shall (a) keep and maintain detailed records of all their processes; and (b) preserve, maintain and safeguard all relevant documents issued and received.'"
            },
            {
                question: "The Authority must issue a price guide. What is the purpose of this guide?",
                options: [
                    "To fix maximum prices for all government procurement",
                    "To provide indicative prices for commonly procured goods, works and services for reference when preparing a bid or estimating contract value",
                    "To replace all market research by procuring entities",
                    "To penalise contractors who charge above the guide prices"
                ],
                answer: 1,
                explanation: "Section 83(1) states the price guide shall 'provide indicative prices for commonly procured goods, works and services for reference by a procuring entity, procuring unit or bidder, when preparing a bid for procurement, in order to (a) estimate contract value; and (b) measure the reasonableness of prices when evaluating a tender'."
            },
            {
                question: "The Authority shall give the public access to several databases. Which of the following is NOT a listed database under Section 83(2)(b)?",
                options: [
                    "Contractors' register",
                    "Specification providers",
                    "Contractors' prices and construction price index",
                    "Employee records of procuring entities"
                ],
                answer: 3,
                explanation: "Section 83(2)(b) lists: (i) contractors' register, (ii) specification providers, (iii) test and certification contractors, (iv) insurance and intermodal transport operations, (v) documentation collection, (vi) contractors' prices and construction price index, (vii) professional register, and (viii) price guide. Employee records are not listed."
            },
            {
                question: "The Authority shall make information on the Contractor Register available to applicants, including:",
                options: [
                    "Only the contractor's name and registration number",
                    "A list of registered contractors, grades and codes",
                    "Full financial statements of all contractors",
                    "Personal contact details of contractors' directors"
                ],
                answer: 1,
                explanation: "Section 84(1) states: 'The Authority shall make the information on Contractor Register available to an applicant, including a list of registered contractors, grades and codes.'"
            },
            {
                question: "Members of the Board, committees, co-opted persons, employees of the Authority, procuring entity personnel, and any other person involved in procurement shall:",
                options: [
                    "Sign and adhere to a code of ethical behaviour as may be prescribed",
                    "Report directly to the Authority on all procurement matters",
                    "Obtain annual clearance from the DCEC",
                    "Declare all assets to the Minister"
                ],
                answer: 0,
                explanation: "Section 86 states: 'A member of the Board, committee or sub-committee, a co-opted person, and employees of the Authority, a procuring entity, and any other person involved in procurement shall sign and adhere to a code of ethical behaviour as may be prescribed.'"
            },
            {
                question: "Bid submissions and pre-qualification applications remain confidential and are only available to Public Oversight Agencies during an investigation, appeal, or court process. This is established by:",
                options: [
                    "Section 82",
                    "Section 87",
                    "Section 88",
                    "Section 90"
                ],
                answer: 1,
                explanation: "Section 87 states: 'A bid submission and pre-qualification application for registration, shall remain confidential and shall only be available to the Public Oversight Agencies in the event of — (a) an investigation... (b) an appeal... or (c) a court process.'"
            },
            {
                question: "When does communication on a bid become available to the public for review and research under Section 88?",
                options: [
                    "Immediately after the bid opening",
                    "Once the pre-qualification list is approved or the bid has been awarded and contract signed, or registration has been approved and communicated",
                    "Only after the conclusion of any investigation by the Authority",
                    "After two years from the date of the bid submission"
                ],
                answer: 1,
                explanation: "Section 88 provides that once a pre-qualification list is approved or bid awarded and contract signed, or registration approved and communicated, 'any relevant communication shall, subject to section 87, be declassified in accordance with section 89 and shall be available to the public for review and research'."
            },
            {
                question: "Under Section 89, any communication on a bid and registration shall be declassified after:",
                options: [
                    "One year",
                    "Two years, except in cases where a project is still in progress or disclosure would be prejudicial",
                    "Five years",
                    "Immediately upon contract completion"
                ],
                answer: 1,
                explanation: "Section 89 states: 'Any communication on a bid and registration shall be declassified after two years, except in cases where a project is still in progress, disclosure would be prejudicial to the interest of the Government or the interest of the contractors or private party, in which case a procuring entity or the Authority shall retain the communication for a further period that the procuring entity or the Authority may deem appropriate'."
            },
            {
                question: "The Authority must transmit records that have been in existence for five years or more to:",
                options: [
                    "The Public Procurement Tribunal",
                    "The National Archives and Records Services",
                    "The Auditor-General",
                    "The Minister's office"
                ],
                answer: 1,
                explanation: "Section 90 states: 'The Authority shall transmit any of its records that have been in existence for five years or more to the National Archives and Records Services, except where an awarded bid continues to be under implementation, dispute or investigation.'"
            },
            {
                question: "A procuring entity and the Tribunal shall publicise any decision arising from a complaint. How should this be done?",
                options: [
                    "By publishing in the Government Gazette only",
                    "In a manner as may be prescribed",
                    "By sending email notifications to all registered contractors",
                    "By posting on the procuring entity's notice board"
                ],
                answer: 1,
                explanation: "Section 85(1) states: 'A procuring entity and the Tribunal shall, in a manner as may be prescribed, publicise any decision arising from a complaint and challenges dealt with by the procuring entity or the Tribunal.'"
            }
        ]
    },

    // ============================================================
    // PART XIII - REGISTRATION OF CONTRACTORS (Sections 91-103)
    // ============================================================
    part13: {
        title: "Part XIII — Registration of Contractors",
        sections: "Sections 91-103",
        questions: [
            {
                question: "The Contractors' Register is kept and maintained by:",
                options: [
                    "Each procuring entity independently",
                    "The Authority",
                    "The Ministry of Trade and Industry",
                    "The Registrar of Companies"
                ],
                answer: 1,
                explanation: "Section 91(1) states: 'The Authority shall continue to keep and maintain an up-to-date register of contractors, known as the 'Contractors' Register', in works, services and supplies, or any combination thereof, however classified.'"
            },
            {
                question: "The Contractors' Register is open for inspection to any member of the public:",
                options: [
                    "Free of charge at all times",
                    "Upon payment of such fees as may be prescribed",
                    "Only with the written permission of the Authority",
                    "Only during normal working hours and with a valid reason"
                ],
                answer: 1,
                explanation: "Section 91(2) states: 'The Contractors' Register shall be open for inspection to any member of the public upon payment of such fees as may be prescribed.'"
            },
            {
                question: "A contractor who intends to bid for procurement must be:",
                options: [
                    "Licensed or incorporated under the relevant Laws of Botswana and domiciled in Botswana",
                    "A citizen of Botswana or a company with majority Botswana ownership",
                    "Registered with the Authority for at least two years",
                    "Recommended by at least two procuring entities"
                ],
                answer: 0,
                explanation: "Section 92(1) states a contractor may apply if they are '(a) licensed or incorporated under the relevant Laws of Botswana; and (b) domiciled in Botswana'."
            },
            {
                question: "The registration of a contractor in the Contractors' Register is valid for:",
                options: [
                    "One year",
                    "Three years",
                    "Five years",
                    "An indefinite period unless revoked"
                ],
                answer: 2,
                explanation: "Section 92(4) states: 'The registration of a contractor in the Contractors' Register shall be valid for a period of five years, after which a contractor may apply for re-registration in accordance with subsections (1) and (2).'"
            },
            {
                question: "Is the Contractors' Register considered a pre-qualification list?",
                options: [
                    "Yes, being on the register automatically pre-qualifies a contractor for all tenders",
                    "No, a registered contractor must still satisfy such other pre-qualification conditions specified by a procuring entity for each bid",
                    "Yes, but only for tenders below a certain threshold",
                    "No, unless the Authority specifically designates it as such"
                ],
                answer: 1,
                explanation: "Section 93(1) states: 'The Contractors' Register shall not be considered as a pre-qualification list.' Section 93(2) adds: 'A registered contractor shall satisfy such other pre-qualification conditions as may be specified by a procuring entity in respect of any bid, in order to be eligible to tender in each specific case.'"
            },
            {
                question: "A non-registered contractor is disqualified from tendering except:",
                options: [
                    "If they are a citizen contractor",
                    "In projects where the specific instructions in both the bidding package and Tender Notice explicitly state that registration is not an eligibility requirement",
                    "If they have applied for registration but the application is pending",
                    "If the contract value is below the prescribed threshold for registration"
                ],
                answer: 1,
                explanation: "Section 94 states: 'A non-registered contractor shall be disqualified from tendering, except in projects where the specific instructions in both the bidding package and the Tender Notice explicitly state that registration is not an eligibility requirement to participate.'"
            },
            {
                question: "The registration of contractors is by classification, grades and codes, and types of business associations. The modality for classification is:",
                options: [
                    "Fixed by the Act and cannot be changed",
                    "As per the criteria set and revised from time to time by the Authority",
                    "Determined by each procuring entity",
                    "Set by the Minister in regulations"
                ],
                answer: 1,
                explanation: "Section 95(2) states: 'The modality for the classification under subsection (1) shall be as per the criteria set and revised from time to time by the Authority.'"
            },
            {
                question: "The Authority must review the Contractors' Register how often?",
                options: [
                    "Annually",
                    "Every two years",
                    "Every five years",
                    "Whenever directed by the Minister"
                ],
                answer: 2,
                explanation: "Section 96 states: 'The Authority shall review the Contractors' Register every five years and de-list from the Contractors' Register any contractor who has not applied for the renewal of the certificate of registration.'"
            },
            {
                question: "A contractor convicted of corruption or bribery under the Corruption and Economic Crime Act is:",
                options: [
                    "Given a warning but can continue participating in procurement",
                    "Not eligible to participate in any procurement activity for such period as specified in the code of conduct",
                    "Automatically debarred for life from all procurement activities",
                    "Only debarred if the conviction relates specifically to a procurement matter"
                ],
                answer: 1,
                explanation: "Section 99(2)(a) states: 'A contractor who is convicted of corruption or bribery under the Corruption and Economic Crime Act... shall not be eligible to participate in any procurement activity for such period as may be specified in the code of conduct.'"
            },
            {
                question: "Where a defaulting shareholder of a suspended contractor joins another contractor, what is the consequence under Section 102?",
                options: [
                    "The other contractor is unaffected because the suspension applies to the entity, not the individual",
                    "The other contractor shall be debarred from bidding on a new tender until the period of suspension has lapsed",
                    "The other contractor may bid but must disclose the shareholder's suspension status",
                    "The other contractor is only debarred if the shareholder holds a majority stake in the new company"
                ],
                answer: 1,
                explanation: "Section 102(1) states: 'Where a defaulting shareholder, director, partner or any person who holds a key operational position of the suspended contractor joins another contractor, the contractor shall be debarred from bidding on a new tender until the period of suspension has lapsed.'"
            }
        ]
    },

    // ============================================================
    // PART XIV - COMPLAINTS AND DISPUTE RESOLUTION (Sections 104-113)
    // ============================================================
    part14: {
        title: "Part XIV — Complaints and Dispute Resolution",
        sections: "Sections 104-113",
        questions: [
            {
                question: "After publication of an award decision, a procuring entity must allow a cooling-off period of:",
                options: [
                    "5 days",
                    "10 days",
                    "14 days",
                    "30 days"
                ],
                answer: 1,
                explanation: "Section 104(1)(a) states: 'allow a cooling-off period of 10 days in order for the procuring entity to receive and address complaints, if any, from any contractor who is aggrieved by the award decision'."
            },
            {
                question: "A contractor is aggrieved by an award decision. To whom must they first lodge a complaint?",
                options: [
                    "The Authority",
                    "The Accounting Officer",
                    "The Public Procurement Tribunal",
                    "The High Court"
                ],
                answer: 1,
                explanation: "Section 104(2) states: 'A contractor who is aggrieved... shall, at the first instance, lodge a complaint before an Accounting Officer for review.'"
            },
            {
                question: "An Accounting Officer shall not entertain a complaint after:",
                options: [
                    "The cooling-off period has expired",
                    "A contract has entered into force",
                    "The bidder has been notified of the decision",
                    "10 days from the award decision"
                ],
                answer: 1,
                explanation: "Section 104(6) states: 'An Accounting Officer shall not entertain a complaint after a contract has entered into force.'"
            },
            {
                question: "An Accounting Officer may dismiss a complaint if it is determined to be 'frivolous or vexatious'. Which of the following best describes such a complaint?",
                options: [
                    "Any complaint that is not made by a legal practitioner",
                    "A complaint that lacks arguable basis in law or fact, or is intended to cause delays or frustrate the procurement process",
                    "A complaint filed by a bidder who did not win the award",
                    "A complaint filed more than 5 days after the award decision"
                ],
                answer: 1,
                explanation: "Section 105(3)(a) defines 'frivolous or vexatious complaint' as one 'that lacks arguable basis in law or fact, or its contention is baseless and intended to cause delays or frustrate the procurement process'."
            },
            {
                question: "An aggrieved person must submit a complaint to the Accounting Officer within what timeframe?",
                options: [
                    "Within 5 days from the publication of the award decision",
                    "Within 10 days from the publication of the award decision",
                    "Within 14 days from the publication of the award decision",
                    "Any time before the contract is signed"
                ],
                answer: 1,
                explanation: "Section 106(1) states: 'An aggrieved person shall submit his or her complaint in writing to an Accounting Officer within 10 days from the date of the publication of an award decision by the Accounting Officer, relating to the complaint.'"
            },
            {
                question: "Upon receiving a complaint, the Accounting Officer may suspend the procurement process. When may the Accounting Officer NOT suspend the process?",
                options: [
                    "If the complaint is from a non-winning bidder",
                    "In the case of an emergency procurement",
                    "If the contract value exceeds a prescribed threshold",
                    "If the complaint was filed after hours"
                ],
                answer: 1,
                explanation: "Section 107(2) states: 'Notwithstanding subsection (1), an Accounting Officer may not suspend an emergency procurement.'"
            },
            {
                question: "If a Public Oversight Agency is investigating a procurement process, can it suspend the procurement process?",
                options: [
                    "Yes, on its own authority",
                    "No, it may not suspend without the prior written approval by the Authority",
                    "Yes, but only for 48 hours",
                    "No, only the Accounting Officer may suspend procurement"
                ],
                answer: 1,
                explanation: "Section 107(4) states: 'Where a Public Oversight Agency is investigating a procurement process, the Public Oversight Agency may not suspend a procurement process without the prior written approval by the Authority.'"
            },
            {
                question: "The Accounting Officer must deliver a written decision on a complaint within:",
                options: [
                    "10 days",
                    "The period to be prescribed",
                    "30 days",
                    "A reasonable time"
                ],
                answer: 1,
                explanation: "Section 109(1) states: 'An Accounting Officer shall, within the period to be prescribed, deliver a written decision on a complaint.' The exact period is left to regulations."
            },
            {
                question: "An Accounting Officer may, after receipt of a complaint, constitute an independent review panel. From where may this panel be drawn?",
                options: [
                    "Only from the Authority's staff",
                    "From a procuring entity of the Accounting Officer, or another procuring entity",
                    "Only from the private sector",
                    "From the Tribunal's members"
                ],
                answer: 1,
                explanation: "Section 110 states the Accounting Officer may constitute an independent review panel 'from a procuring entity of the Accounting Officer, or another procuring entity'."
            },
            {
                question: "A public officer or employee of a public body shall not participate as a bidder in any public procurement activity. Does this restriction extend to immediate family members?",
                options: [
                    "No, the restriction is personal to the public officer only",
                    "Yes, an immediate family member of a public officer shall not participate as a bidder in any procurement activity involving the employer of that public officer",
                    "Only if the family member lives in the same household",
                    "Only if the public officer is involved in the procurement process"
                ],
                answer: 1,
                explanation: "Section 111(3) states: 'An immediate member of the family of a public officer or of an employee of a public body shall not participate as a bidder in any procurement activity involving the employer of the public officer or of the public body where such public officer or employee of the public body is employed, and no award of a tender shall be made to such immediate member of the family.'"
            }
        ]
    },

    // ============================================================
    // PART XV - PUBLIC PROCUREMENT TRIBUNAL (Sections 114-138)
    // ============================================================
    part15: {
        title: "Part XV — Public Procurement Tribunal",
        sections: "Sections 114-138",
        questions: [
            {
                question: "The Public Procurement Tribunal is described as:",
                options: [
                    "A division of the High Court",
                    "A body independent of the Public Procurement Regulatory Authority",
                    "A committee of the Board",
                    "A sub-unit of the Ministry of Finance"
                ],
                answer: 1,
                explanation: "Section 114 states: 'There is established, for purposes of this Act, a body independent of the Public Procurement Regulatory Authority, known as the Public Procurement Tribunal.'"
            },
            {
                question: "Who appoints the President of the Tribunal?",
                options: [
                    "The Chief Justice",
                    "The Minister",
                    "The Board",
                    "The Authority"
                ],
                answer: 1,
                explanation: "Section 116 states: 'The Minister shall appoint, as a member of the Tribunal — (a) a President of the Tribunal, who shall be a retired High Court judge or a legal practitioner who qualifies to be appointed as a High Court Judge; (b) a Vice President... (c) five other persons...'"
            },
            {
                question: "The President of the Tribunal must be:",
                options: [
                    "A current High Court judge",
                    "A retired High Court judge or a legal practitioner who qualifies to be appointed as a High Court Judge",
                    "Any legal practitioner with 10 years of experience",
                    "The Chief Executive Officer of the Authority"
                ],
                answer: 1,
                explanation: "Section 116(a) states the President shall be 'a retired High Court judge or a legal practitioner who qualifies to be appointed as a High Court Judge'."
            },
            {
                question: "A person shall not qualify for appointment as a member of the Tribunal if they are:",
                options: [
                    "Over 65 years of age",
                    "Regulated by the Authority or have an interest in an entity regulated by the Authority, or are a member of the Board or employee of the Authority",
                    "A former employee of a procuring entity",
                    "Not a citizen of Botswana"
                ],
                answer: 1,
                explanation: "Section 117(1) states disqualification if the person is '(a) regulated by the Authority or has an interest in an entity which is regulated by the Authority; or (b) a member of the Board or is an employee of the Authority'."
            },
            {
                question: "Members of the Tribunal (President, Vice President, and other members) hold office for:",
                options: [
                    "Five years, renewable once",
                    "Four years, renewable for only one further term not exceeding four years",
                    "Three years, with no limit on renewals",
                    "Six years, non-renewable"
                ],
                answer: 1,
                explanation: "Section 118 states: 'The President and other members of the Tribunal shall hold office for a period not exceeding four years, and shall be eligible for re-appointment for only one further term not exceeding four years.'"
            },
            {
                question: "The Registrar of the Tribunal is appointed by whom and for what term?",
                options: [
                    "The Tribunal, for a term of three years",
                    "The Minister, for a period of five years, eligible for reappointment for one further term not exceeding five years",
                    "The Authority, for an indefinite term",
                    "The Board, for four years"
                ],
                answer: 1,
                explanation: "Section 126(1) and (3) state the Registrar is appointed by the Minister on such terms and conditions as the Minister may determine, for a period of five years, eligible for re-appointment for one further term not exceeding five years."
            },
            {
                question: "The Registrar of the Tribunal is the accounting officer of the Tribunal. This is stated in:",
                options: [
                    "Section 126(1)",
                    "Section 126(2)",
                    "Section 126(5)",
                    "Section 127"
                ],
                answer: 1,
                explanation: "Section 126(2) states: 'The Registrar shall be the accounting officer, and an ex officio member, of the Tribunal.'"
            },
            {
                question: "Proceedings before the Tribunal: a person appearing before the Tribunal shall:",
                options: [
                    "Be represented by a legal practitioner of their choice",
                    "Appear in person or virtually and not by means of a legal representation",
                    "Only appear virtually unless the Tribunal orders otherwise",
                    "Must be represented by a legal practitioner if the matter involves more than P1 million"
                ],
                answer: 1,
                explanation: "Section 135(a) states a person appearing before the Tribunal shall 'appear in person or virtually and not by means of a legal representation'. This means lawyers are not permitted to represent parties."
            },
            {
                question: "A decision of the Tribunal is:",
                options: [
                    "Merely advisory and may be accepted or rejected by the Accounting Officer",
                    "Binding unless appealed to the High Court, and has the same force and effect as a judgment of a court of competent jurisdiction",
                    "Final and cannot be appealed to any court",
                    "Subject to ratification by the Minister before taking effect"
                ],
                answer: 1,
                explanation: "Section 136(2) states: 'A decision of the Tribunal shall (a) be binding unless appealed to the High Court; and (b) have the same force and effect as a judgment or order of a court of competent jurisdiction and shall be enforceable in the same manner as such judgment or order.'"
            },
            {
                question: "A party aggrieved by a decision of the Tribunal may appeal to:",
                options: [
                    "The Authority",
                    "The High Court",
                    "The Court of Appeal directly",
                    "The Minister for review"
                ],
                answer: 1,
                explanation: "Section 137 states: 'A party who is aggrieved by the decision of the Tribunal may appeal to the High Court against such decision.'"
            }
        ]
    },

    // ============================================================
    // PART XVI - GENERAL PROVISIONS (Sections 139-152)
    // ============================================================
    part16: {
        title: "Part XVI — General Provisions",
        sections: "Sections 139-152",
        questions: [
            {
                question: "Where a procurement matter is before a court and the contract has not yet been concluded, the court may suspend the procurement process. Under Section 139(2), if a contract has already been concluded, the court:",
                options: [
                    "Must automatically suspend the execution of the contract",
                    "May not suspend or interdict the execution of the contract, but may order execution to proceed without interruption",
                    "Must cancel the contract and order a fresh procurement",
                    "May only award damages to the aggrieved party"
                ],
                answer: 1,
                explanation: "Section 139(2) states: 'Where a procurement matter is before a court, in the case where a contract involving the procurement matter has been concluded by the parties to such procurement matter, the court may — (a) not suspend or interdict the execution of the contract; and (b) order for the execution of the contract to proceed without interruption whether the award decision relating to such contract may in itself be disputable in court.'"
            },
            {
                question: "Notwithstanding the general rule about concluded contracts, a court may suspend revocation or termination if:",
                options: [
                    "The contract value exceeds P10 million",
                    "Sufficient evidence shows the execution of the contract may cause substantial loss to the public revenue or prejudicially affect public interest",
                    "A citizen contractor files an application",
                    "The Authority intervenes in the proceedings"
                ],
                answer: 1,
                explanation: "Section 139(3) states: 'Notwithstanding subsection (2), a court may suspend, interdict or revoke the execution of a contract if in the court's decision, sufficient evidence has been adduced to demonstrate that the execution of the contract may cause substantial loss to the public revenue or prejudicially affect public interest.'"
            },
            {
                question: "Where a treaty or agreement to which Botswana is a party contains provisions favourable to citizens and local contractors, what must be done?",
                options: [
                    "Ignore the provisions if they conflict with domestic preferences",
                    "Full advantage shall, subject to the applicable provisions of this Act, be taken of these in the interest of promoting domestic capacity development",
                    "Apply only the domestic preferences under this Act",
                    "Seek an amendment to the treaty to align with the Act"
                ],
                answer: 1,
                explanation: "Section 140(1) states: 'Where a treaty or agreement to which Botswana is a party contains provisions favourable to citizens and local contractors, full advantage shall, subject to the applicable provisions of this Act, be taken of these in the interest of promoting domestic capacity development.'"
            },
            {
                question: "A procuring entity wishes to derogate from the application of the Act in respect of external obligations. Under Section 142, what must it do?",
                options: [
                    "Inform the Minister of the derogation",
                    "Apply to the Authority in the prescribed form and submit supporting documentation and justification",
                    "Negotiate with the external entity to follow Botswana's procurement rules",
                    "Publish the derogation in the Government Gazette"
                ],
                answer: 1,
                explanation: "Section 142 states: 'A procuring entity shall apply to the Authority for a derogation from the application of the relevant provisions of this Act in respect of external obligations, in the prescribed form and submit such form together with supporting documentation and justification.'"
            },
            {
                question: "The Minister may, by Order published in the Gazette, exempt any person, procuring entity or procurement activity from the provisions of this Act. This power is found in:",
                options: [
                    "Section 142",
                    "Section 143",
                    "Section 144",
                    "Section 150"
                ],
                answer: 1,
                explanation: "Section 143 states: 'The Minister shall, by Order published in the Gazette, exempt any person, procuring entity or procurement activity from the provisions of this Act.'"
            },
            {
                question: "Any contribution by the Government to an entity such as a parastatal, private entity, NGO, charity, or trust, which entails procurement activity, shall be subject to:",
                options: [
                    "The entity's own procurement rules",
                    "The applicable provisions of this Act",
                    "The general guidelines of the Ministry of Finance only",
                    "No procurement rules, as it is a contribution, not a procurement"
                ],
                answer: 1,
                explanation: "Section 144 states that such contributions 'shall be (a) kept discrete and identifiable, as far as possible; and (b) subject to the applicable provisions of this Act'."
            },
            {
                question: "A person who opens a sealed tender before the appointed time for public opening, or divulges its contents, commits an offence. What is the penalty for a body corporate under Section 147(5)?",
                options: [
                    "A fine not exceeding P500,000 or imprisonment for 5 years",
                    "A fine not exceeding P1,500,000; for individuals referred to in subsection (3), a fine not exceeding P500,000 or imprisonment for a term not exceeding five years, or both",
                    "A fine of P10 million and permanent debarment from all Government contracts",
                    "Only an administrative penalty prescribed by the Authority"
                ],
                answer: 1,
                explanation: "Section 147(5) states: 'A body corporate or unincorporated body which commits an offence under this section is liable to a fine not exceeding P1 500 000 or, in the case of a person referred to under subsection (3), to a fine not exceeding P500 000 or to imprisonment for a term not exceeding five years, or to both.'"
            },
            {
                question: "Where the Authority is satisfied that a person has contravened a provision for which a civil penalty is to be imposed, what administrative actions may the Authority take under Section 148?",
                options: [
                    "Only issue a fine",
                    "Give a written warning, issue a fine, recommend action to a supervisor, or direct the person to do or refrain from doing a specified act to remedy the contravention",
                    "Automatically debar the person from procurement activities",
                    "Refer the matter to the police for criminal prosecution"
                ],
                answer: 1,
                explanation: "Section 148 lists the administrative actions as: (a) give such person a written warning; (b) issue a fine; (c) recommend to supervisor the relevant action; or (d) directing the person to do or refrain from doing a specified act to remedy the effects of the contravention or ensure no further contravention."
            },
            {
                question: "No action shall be taken against employees of the Authority, members of the Board or Tribunal, or officials of a procuring entity for any act or omission, except:",
                options: [
                    "If the act or omission was grossly negligent",
                    "Insofar as the act or omission complained of was done in bad faith",
                    "If the act or omission resulted in financial loss to the Government",
                    "If the person acted outside the scope of their employment"
                ],
                answer: 1,
                explanation: "Section 149 states: 'An action shall not be taken against any employee of the Authority, any member or Secretary of the Board, any employee, member or Registrar of the Tribunal, any member of a committee or sub-committee, or any official of a procuring entity for any act or omission except in so far as the act or omission complained of was done in bad faith.'"
            },
            {
                question: "The Public Procurement and Asset Disposal Act (Cap. 42:08) was repealed by:",
                options: [
                    "Section 150",
                    "Section 151",
                    "Section 152",
                    "The Act automatically repealed it upon commencement"
                ],
                answer: 1,
                explanation: "Section 151 states: 'The Public Procurement and Asset Disposal Act is hereby repealed.'"
            }
        ]
    }
};
