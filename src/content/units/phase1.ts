import type { Unit } from '../types';

export const unitsPhase1: Unit[] = [
  {
    id: 1,
    day: 1,
    title: "The merchant-bank model & where you fit",
    subtitle: "Understand what the firm is, how it makes money, and what your seat actually does.",
    questions: [
      // ### What "merchant banking" means here
      {
        type: "mcq",
        id: "u1-q1",
        prompt: "Which statement best captures what a merchant bank does that distinguishes it from both a pure advisory bank and a pure fund?",
        options: [
          "It only advises clients on transactions and charges a flat fee.",
          "It both advises clients on transactions AND commits its own capital into situations.",
          "It exclusively raises third-party capital and deploys it into funds.",
          "It acts as a commercial lender providing debt financing to corporations."
        ],
        correctIndex: 1,
        explanation: "A merchant bank does both — it advises clients on transactions and also commits capital into situations, sometimes the same ones. That dual identity is the single most important thing to internalise."
      },
      {
        type: "wordBank",
        id: "u1-q2",
        prompt: "Build the one-sentence definition of Privatus as a merchant bank by tapping the tokens in order.",
        answerTokens: ["Privatus", "is", "a", "corporate", "adviser", "and", "investment", "partner", "specialising", "in", "private", "capital", "across", "Asia", "Pacific"],
        distractors: ["public", "equity", "debt", "institutional", "Europe"],
        explanation: "Privatus describes itself as a corporate adviser and investment partner specialising in private capital across Asia Pacific."
      },

      // ### The two revenue engines
      {
        type: "mcq",
        id: "u1-q3",
        prompt: "On an advisory mandate, what are the two main fee components Privatus typically earns?",
        options: [
          "Management fee and carried interest.",
          "Retainer and success fee.",
          "Origination fee and trailing commission.",
          "Placement fee and monitoring fee."
        ],
        correctIndex: 1,
        explanation: "On a mandate the firm typically earns a retainer (a fixed monthly or milestone fee) plus a success fee (a percentage of deal value, payable on completion)."
      },
      {
        type: "trueFalse",
        id: "u1-q4",
        statement: "The success fee on an advisory mandate is payable upfront when the engagement letter is signed.",
        isTrue: false,
        explanation: "The success fee is payable on completion of the deal, not at signing of the engagement letter. This aligns the adviser with getting the deal done on good terms."
      },
      {
        type: "mcq",
        id: "u1-q5",
        prompt: "In a fund structure, what is 'carried interest'?",
        options: [
          "A fixed annual management fee charged on committed capital.",
          "A share of profits above a hurdle rate, earned by the fund manager.",
          "Interest on loans carried forward to the next fiscal year.",
          "A fee charged to limited partners for early redemption."
        ],
        correctIndex: 1,
        explanation: "In a fund structure, the firm and its capital partners earn management fees and carried interest — a share of profits above a hurdle. The time horizon for investment returns is years, not months."
      },
      {
        type: "trueFalse",
        id: "u1-q6",
        statement: "Privatus has deployed more than A$350m of committed capital, primarily sourced from institutional pension funds.",
        isTrue: false,
        explanation: "Privatus has deployed more than A$350m of committed capital, but it is sourced from high-net-worth individuals and family offices — not institutions. That capital base is patient, relationship-driven, and often wants to co-invest directly."
      },

      // ### Why doing both is powerful
      {
        type: "mcq",
        id: "u1-q7",
        prompt: "According to the manual, why is the combination of advising AND investing particularly powerful?",
        options: [
          "It allows the firm to charge double the fees of a pure adviser.",
          "Advisory relationships generate proprietary deal flow and investing deepens alignment, producing sharper judgement than either lens alone.",
          "It eliminates the need for external due diligence on investments.",
          "It lets the firm bypass regulatory requirements that apply to pure funds."
        ],
        correctIndex: 1,
        explanation: "Advisory relationships generate proprietary insight and deal flow; investing capital deepens alignment with clients and partners and captures upside beyond fees. You learn what buyers actually pay and where value is really created."
      },

      // ### Where the analyst fits
      {
        type: "mcq",
        id: "u1-q8",
        prompt: "Which of the following is NOT listed as a core analyst/associate responsibility in the manual?",
        options: [
          "Building and maintaining financial models.",
          "Running comparable and precedent analyses.",
          "Negotiating final price terms directly with counterparties.",
          "Keeping diligence and data-room trackers immaculate."
        ],
        correctIndex: 2,
        explanation: "The manual lists building models, drafting materials, running analyses, keeping trackers, researching companies, and turning around partner questions. Direct negotiation of final price terms is a partner-level activity."
      },
      {
        type: "trueFalse",
        id: "u1-q9",
        statement: "According to the manual, early credibility as a junior is built primarily through displaying brilliant analytical insights rather than reliability.",
        isTrue: false,
        explanation: "Early credibility is built less by brilliance than by reliability — numbers that tie out, files that are clean, deadlines that are met."
      },

      // ### Watch out — the two hats pitfall
      {
        type: "mcq",
        id: "u1-q10",
        prompt: "An analyst is supporting a sell-side advisory mandate AND separately stress-testing the firm's co-investment in the same deal. Which approach is correct?",
        options: [
          "Use the same optimistic equity story for both — consistency is key.",
          "Argue the client's best case for the advisory work; lean conservative when testing the firm's own investment.",
          "Apply the same conservative assumptions to both to avoid conflicts of interest.",
          "Delegate the investment analysis to a different team to avoid any overlap."
        ],
        correctIndex: 1,
        explanation: "Don't conflate the two hats. When supporting a client's ask you argue their best case; when testing the firm's own investment you lean conservative. Bringing advisory optimism into an investment decision is how juniors lose trust."
      },
      {
        type: "mcq",
        id: "u1-q11",
        prompt: "An analyst applies advisory-side optimistic revenue projections to the firm's own co-investment model. What does the manual say about this?",
        options: [
          "This is fine as long as both the client and the firm's IC review it.",
          "This is good practice — consistent assumptions reduce confusion.",
          "This is how juniors lose trust, because advisory optimism must not bleed into investment decisions.",
          "This is acceptable only if the co-investment is below A$10m."
        ],
        correctIndex: 2,
        explanation: "Bringing advisory optimism into an investment decision (or vice versa) is explicitly how juniors lose trust, per the Watch Out section of Day 1."
      },

      // Privatus angle — office & structure
      {
        type: "mcq",
        id: "u1-q12",
        prompt: "Where does Privatus operate its Singapore office, and who leads it?",
        options: [
          "Marina Bay Sands, led by the Sydney founding partners remotely.",
          "CapitaSpring, partner-led by Boon-Kee Tan and Terence Lim.",
          "One Raffles Place, led by a team of associates.",
          "Changi Business Park, led by the head of capital markets."
        ],
        correctIndex: 1,
        explanation: "The Singapore office is at CapitaSpring and is partner-led by Boon-Kee Tan and Terence Lim. Privatus is a certified B Corp operating from Sydney and Singapore."
      },

      // Practice today — writing question
      {
        type: "writing",
        id: "u1-q13",
        prompt: "Practice today: Read Privatus's About, Advisory and Investments pages. Write a one-page note answering: what does the Singapore office likely do versus Sydney, and what is each Singapore partner's background? Then list every deal on the site and tag it advisory or investment, buy-side or sell-side.",
        modelAnswer: "The Singapore office, led by Boon-Kee Tan and Terence Lim, likely focuses on sourcing and executing cross-border Asia Pacific mandates and capital-partner relationships with regional family offices and HNW investors. Sydney likely anchors the firm's Australian origination and deal execution. Each deal should be categorised by whether Privatus earned an advisory fee (advisory) or deployed capital for a return (investment), and whether the client was selling (sell-side) or acquiring (buy-side).",
        keyPoints: [
          "Distinguish the Sydney origination/execution hub from the Singapore regional-access role.",
          "Research Boon-Kee Tan's and Terence Lim's backgrounds from public sources.",
          "Tag each deal: advisory vs investment, and buy-side vs sell-side.",
          "Note that some mandates may be dual-hat (advised AND co-invested).",
          "The capital base is HNW/family offices — this shapes the Singapore office's LP relationship mandate."
        ]
      },

      // Glossary matching — Day 1 relevant terms
      {
        type: "matching",
        id: "u1-q14",
        prompt: "Match each term to its correct definition.",
        pairs: [
          { left: "Retainer", right: "Fixed monthly or milestone fee paid during an advisory mandate." },
          { left: "Success fee", right: "Percentage of deal value paid to the adviser on completion." },
          { left: "Carried interest", right: "Fund manager's share of profits above a hurdle rate." },
          { left: "GP", right: "General Partner — the entity that manages the fund." },
          { left: "LP", right: "Limited Partner — the entity that provides capital to the fund." }
        ],
        explanation: "These terms define the two revenue engines: advisory fees (retainer + success fee) and investment returns (carried interest on funds managed for LPs by the GP)."
      },

      // Additional coverage — B Corp and capital base
      {
        type: "trueFalse",
        id: "u1-q15",
        statement: "Privatus is a certified B Corp, reflecting a commitment to social and environmental standards alongside commercial objectives.",
        isTrue: true,
        explanation: "The manual states Privatus is a certified B Corp operating from Sydney and Singapore. B Corp certification requires meeting verified standards of social and environmental performance."
      },

      // fillBlank on capital deployed
      {
        type: "fillBlank",
        id: "u1-q16",
        prompt: "Privatus has deployed more than ___ of committed capital for high-net-worth individuals and family offices.",
        accepted: ["A$350m", "A$350 million", "350m", "350 million", "$350m", "$350 million", "A$350M", "350M"],
        explanation: "The manual states Privatus has deployed more than A$350m of committed capital, sourced from high-net-worth individuals and family offices."
      },

      // Additional coverage — analyst role and the dual-lens advantage
      {
        type: "mcq",
        id: "u1-q17",
        prompt: "Which of the following best describes the strategic advantage Privatus gains from operating as both an adviser and an investor in the same sectors?",
        options: [
          "It allows the firm to charge both an advisory fee and a management fee on every deal.",
          "Advisory relationships generate proprietary deal flow and insight; investing alongside clients captures upside beyond fees and sharpens judgement.",
          "It lets the firm avoid regulatory oversight that applies to pure advisers.",
          "It provides the firm with guaranteed access to FIRB approval for cross-border deals."
        ],
        correctIndex: 1,
        explanation: "Seeing a sector as both an adviser and an investor produces sharper judgement than either lens alone — you learn what buyers actually pay and where value is really created. Advisory relationships generate proprietary insight and deal flow; investing deepens alignment and captures upside beyond fees."
      },

      {
        type: "trueFalse",
        id: "u1-q18",
        statement: "The patient, relationship-driven nature of Privatus's capital base (HNW individuals and family offices) influences how deals are sourced and structured.",
        isTrue: true,
        explanation: "The capital base — private wealth and family offices rather than institutions — shapes everything: it is patient, relationship-driven, and often wants to co-invest directly. This influences origination, deal structure, and the firm's long-term orientation."
      }
    ]
  },

  {
    id: 2,
    day: 2,
    title: "The M&A deal lifecycle",
    subtitle: "Know every stage of a deal so you can anticipate what's needed next.",
    questions: [
      // Ordering — the 10-stage M&A lifecycle
      {
        type: "ordering",
        id: "u2-q1",
        prompt: "Put the 10 stages of the M&A deal lifecycle in the correct sequence, from first to last.",
        correctOrder: [
          "Origination & pitch",
          "Engagement letter",
          "Preparation",
          "Marketing",
          "First round (NBIOs / IOIs)",
          "Management presentations & data room",
          "Due diligence",
          "Final bids",
          "Negotiation & signing",
          "Closing (completion)"
        ],
        explanation: "The sequence is: Origination & pitch → Engagement letter → Preparation → Marketing → First round → Management presentations & data room → Due diligence → Final bids → Negotiation & signing → Closing. Signing and closing are often not the same day."
      },

      // ### Stage-by-stage coverage
      {
        type: "mcq",
        id: "u2-q2",
        prompt: "What is the purpose of the 'teaser' document sent during the Marketing stage?",
        options: [
          "A binding offer document distributed to all known buyers.",
          "A short, anonymous document sent to potential counterparties to gauge interest before they sign an NDA.",
          "A detailed financial model shared with shortlisted bidders.",
          "The engagement letter outlining the adviser's fee structure."
        ],
        correctIndex: 1,
        explanation: "During marketing, a short, anonymous teaser is sent to potential counterparties. Interested parties then sign an NDA and receive the full CIM (Confidential Information Memorandum)."
      },
      {
        type: "mcq",
        id: "u2-q3",
        prompt: "What is a CIM?",
        options: [
          "A binding purchase offer submitted at the end of due diligence.",
          "The Confidential Information Memorandum — the full sell-side marketing document.",
          "A regulatory filing submitted to FIRB for cross-border deal approval.",
          "A completion mechanism used to true-up price after closing."
        ],
        correctIndex: 1,
        explanation: "CIM stands for Confidential Information Memorandum — the full sell-side marketing document distributed to parties who have signed an NDA."
      },
      {
        type: "trueFalse",
        id: "u2-q4",
        statement: "NBIOs submitted in the first round are binding offers that legally commit the buyer to the stated price.",
        isTrue: false,
        explanation: "NBIOs (Non-Binding Indicative Offers) / IOIs (Indications of Interest) are indicative and non-binding. Binding offers come later, in the final bids stage, usually accompanied by a marked-up SPA."
      },
      {
        type: "mcq",
        id: "u2-q5",
        prompt: "What document do shortlisted bidders typically submit alongside their final, binding bids?",
        options: [
          "A signed NDA confirming confidentiality obligations.",
          "A marked-up Sale and Purchase Agreement (SPA).",
          "A letter of credit from their financing bank.",
          "A FIRB pre-approval clearance certificate."
        ],
        correctIndex: 1,
        explanation: "Final bids are binding offers, usually submitted with a marked-up SPA (sale and purchase agreement). This lets the seller see exactly what risk allocation the buyer is proposing."
      },
      {
        type: "mcq",
        id: "u2-q6",
        prompt: "What is the 'tail' provision in an engagement letter?",
        options: [
          "The maximum retainer period if no deal is found.",
          "The period after termination during which a success fee is still owed if a deal closes.",
          "The trailing 12-month revenue used to calculate the advisory fee.",
          "A penalty the client pays if they terminate the engagement early."
        ],
        correctIndex: 1,
        explanation: "The 'tail' is the period after termination of the engagement during which a success fee is still owed if a deal closes with a party introduced during the mandate. It is agreed in the engagement letter."
      },

      // ### Auction vs bilateral
      {
        type: "mcq",
        id: "u2-q7",
        prompt: "A seller is prioritising maximum price and is comfortable with a longer timeline and some leak risk. Which process type is most appropriate?",
        options: [
          "Bilateral process — one buyer, maximum speed.",
          "Targeted process — approach only two or three pre-selected buyers.",
          "Broad auction — maximises competitive tension and price.",
          "Capital raise process — structure it as a minority investment."
        ],
        correctIndex: 2,
        explanation: "A broad auction maximises competitive tension and price but risks leaks and takes more management time. A bilateral or targeted process trades some price tension for speed, confidentiality and certainty."
      },
      {
        type: "trueFalse",
        id: "u2-q8",
        statement: "A bilateral process offers more certainty and speed compared to a broad auction, but typically achieves a lower level of competitive price tension.",
        isTrue: true,
        explanation: "A bilateral (one buyer) or targeted process trades some price tension for speed, confidentiality and certainty. Choosing the process is a core piece of sell-side advice."
      },

      // ### Price mechanisms
      {
        type: "mcq",
        id: "u2-q9",
        prompt: "Under a 'completion accounts' price mechanism, how is the final purchase price determined?",
        options: [
          "The price is fixed at signing off a historical balance-sheet date with leakage protection.",
          "The final price is trued up after closing based on actual net debt and working capital at completion.",
          "The price is set by averaging the first-round and final-round bids.",
          "The buyer and seller each appoint an independent expert who averages their valuations."
        ],
        correctIndex: 1,
        explanation: "Completion accounts: the final price is trued up after closing based on actual net debt and working capital at completion. This contrasts with a locked box where price is fixed at signing."
      },
      {
        type: "mcq",
        id: "u2-q10",
        prompt: "What is a 'locked box' price mechanism and who bears economic risk/reward between the locked box date and closing?",
        options: [
          "Price is trued up after closing; the seller bears the risk between signing and closing.",
          "Price is fixed off a historical balance-sheet date; the buyer bears risk/reward from that date, with leakage protection.",
          "Price is locked at the midpoint of the first-round and final-round bids; both parties share risk equally.",
          "Price is fixed by the seller's auditors after closing; the buyer has no economic exposure until closing."
        ],
        correctIndex: 1,
        explanation: "In a locked box, price is fixed off a historical balance-sheet date; the buyer bears risk/reward from that date, with leakage protection. Common in European and increasingly APAC deals for its certainty."
      },

      // ### Process differences by mandate
      {
        type: "mcq",
        id: "u2-q11",
        prompt: "On a buy-side mandate, what is the adviser primarily responsible for?",
        options: [
          "Running a competitive auction and driving multiple bidders to improve price.",
          "Finding and approaching targets, leading diligence, structuring the offer, and negotiating to protect the buyer.",
          "Preparing the CIM and teaser to market the asset to potential acquirers.",
          "Managing the VDR and coordinating due diligence responses from management."
        ],
        correctIndex: 1,
        explanation: "On a buy-side mandate the adviser finds and approaches targets, leads diligence, structures the offer, and negotiates to protect the buyer. The sell-side adviser runs the auction and drives competitive tension."
      },

      // ### Privatus angle — FIRB
      {
        type: "mcq",
        id: "u2-q12",
        prompt: "Why is FIRB relevant to Privatus's cross-border Australia-Singapore transactions?",
        options: [
          "FIRB sets the advisory fee caps for deals above A$100m in Australia.",
          "FIRB approval is required for foreign acquisitions above relevant thresholds and is a real conditions-precedent and timing factor.",
          "FIRB provides mandatory financing guarantees for cross-border deals in ANZ.",
          "FIRB certifies the CIM before it can be distributed to offshore buyers."
        ],
        correctIndex: 1,
        explanation: "In Australia, deals above the relevant thresholds need FIRB (Foreign Investment Review Board) approval — a real conditions-precedent and timing factor on cross-border ANZ transactions, exactly the kind Privatus runs between Australia and Singapore."
      },

      // ### Watch out — signed is not done
      {
        type: "mcq",
        id: "u2-q13",
        prompt: "A deal signs on Monday. A junior analyst tells the client 'the deal is done.' What is wrong with this?",
        options: [
          "Nothing — signing the SPA means the deal is legally complete.",
          "The analyst should have said 'the deal is done' only after the announcement is made publicly.",
          "Signing is not closing. Conditions precedent such as regulatory clearances can still break a signed deal.",
          "The analyst should have used the term 'exchange' instead of 'signing'."
        ],
        correctIndex: 2,
        explanation: "Watch out: 'Signed' is not 'done.' Conditions precedent — regulatory clearances, financing, third-party consents — can still break a signed deal. Track them as carefully as the headline terms."
      },
      {
        type: "trueFalse",
        id: "u2-q14",
        statement: "Signing the SPA and closing (completion) always occur on the same day in an M&A transaction.",
        isTrue: false,
        explanation: "Signing and closing are often not the same day. Conditions precedent such as regulatory approvals must be satisfied before funds flow and ownership transfers at closing."
      },

      // Matching — key glossary terms for Day 2
      {
        type: "matching",
        id: "u2-q15",
        prompt: "Match each M&A term to its correct definition.",
        pairs: [
          { left: "NBIO / IOI", right: "Non-Binding Indicative Offer / Indication of Interest — a first-round bid." },
          { left: "SPA", right: "Sale and Purchase Agreement — the binding transaction contract." },
          { left: "Completion accounts", right: "Post-closing true-up of price based on actual net debt and working capital." },
          { left: "Locked box", right: "Price fixed off a historical balance-sheet date, with leakage protection." },
          { left: "MAC", right: "Material Adverse Change clause — lets a buyer walk if something serious occurs pre-close." },
          { left: "VDR", right: "Virtual Data Room — secure repository for diligence documents." }
        ],
        explanation: "These are the core M&A process terms. MAC and VDR also belong to the due diligence and signing/closing stages of the lifecycle."
      },

      // fillBlank — stages count
      {
        type: "fillBlank",
        id: "u2-q16",
        prompt: "The M&A deal lifecycle described in the manual has ___ distinct stages, from origination to closing.",
        accepted: ["10", "ten"],
        explanation: "The manual lists exactly 10 stages: Origination & pitch, Engagement letter, Preparation, Marketing, First round, Management presentations & data room, Due diligence, Final bids, Negotiation & signing, and Closing."
      },

      // mcq — NDA timing
      {
        type: "mcq",
        id: "u2-q17",
        prompt: "At what point in the marketing process do interested counterparties sign an NDA?",
        options: [
          "Before receiving the teaser.",
          "After receiving the teaser but before receiving the full CIM.",
          "Only after submitting a first-round NBIO.",
          "At the same time as submitting a final binding bid."
        ],
        correctIndex: 1,
        explanation: "A short, anonymous teaser is sent to potential counterparties first. Interested parties then sign an NDA (confidentiality agreement) and receive the CIM, the full information memorandum."
      },

      // Practice today — writing question
      {
        type: "writing",
        id: "u2-q18",
        prompt: "Practice today: Draw the full 10-stage M&A timeline yourself without copying one, marking where the analyst spends most time. Then classify three Privatus deals by where they would have sat in this sequence and whether they were auction or bilateral.",
        modelAnswer: "The analyst is most active during Preparation (building the model and materials), Marketing (preparing and distributing the teaser and CIM), Due Diligence (running workstreams and the VDR tracker), and Final Bids (analysing bid comparisons and marked-up SPAs). For Privatus deals such as Automic (~A$725m sale to Advent) the process likely ran a targeted or broad auction to maximise price. The Viridios AI sale to Bloomberg may have been bilateral given its specialist nature. DBG Health's capital commitment from BDT & MSD reads as a capital-raise / growth-capital process.",
        keyPoints: [
          "Mark all 10 stages accurately and in order.",
          "Analyst effort peaks at Preparation, Marketing, Due Diligence, and Final Bids.",
          "Classify each deal as sell-side/buy-side/capital raise and auction vs bilateral.",
          "Automic — likely broad auction given large size and financial sponsor buyer.",
          "Remember: signing is not closing; conditions precedent must be tracked post-signing."
        ]
      },

      // trueFalse — capital raise distinction
      {
        type: "trueFalse",
        id: "u2-q19",
        statement: "In a capital raise mandate, the 'buyer' is providing growth capital and acquiring the whole company outright.",
        isTrue: false,
        explanation: "In a capital raise the 'buyer' is providing growth capital, not buying the whole company. The company retains its independence and the investor acquires a minority or growth stake."
      },

      // wordBank — locked box definition
      {
        type: "wordBank",
        id: "u2-q20",
        prompt: "Build the definition of a Locked Box by tapping the tokens in order.",
        answerTokens: ["Price", "fixed", "off", "a", "historical", "balance-sheet", "date", "with", "leakage", "protection"],
        distractors: ["closing", "actual", "completion", "adjusted", "net", "debt"],
        explanation: "A locked box fixes the price off a historical balance-sheet date with leakage protection, giving both parties certainty compared to completion accounts."
      }
    ]
  },

  {
    id: 3,
    day: 3,
    title: "Reading financial statements like a dealmaker",
    subtitle: "Extract sustainable earning power and true net obligations — the things that get valued and paid for.",
    questions: [
      // ### Quality of earnings
      {
        type: "mcq",
        id: "u3-q1",
        prompt: "What is the primary purpose of a Quality of Earnings (QoE) analysis?",
        options: [
          "To verify that the company's tax returns match its statutory accounts.",
          "To strip out non-recurring items and adjustments to reach clean, sustainable earnings.",
          "To calculate the seller's net debt for price adjustment purposes.",
          "To assess whether the company's auditor has signed off without qualification."
        ],
        correctIndex: 1,
        explanation: "QoE strips out what won't recur and adjusts for distortions to reach clean, sustainable earnings. Reported profit is rarely the number you value."
      },
      {
        type: "matching",
        id: "u3-q2",
        prompt: "Match each type of QoE adjustment to its correct example.",
        pairs: [
          { left: "Non-recurring item", right: "One-off legal settlement or restructuring cost." },
          { left: "Normalisation", right: "Owner's above-market salary in a private company." },
          { left: "Run-rate adjustment", right: "Annualising a price rise signed mid-year." },
          { left: "Quality of earnings", right: "Diligence assessing how sustainable and cash-backed reported profit is." }
        ],
        explanation: "QoE taxonomy: non-recurring (one-offs that won't repeat), normalisations (distortions like related-party transactions), and run-rate adjustments (timing differences that need annualising or removing)."
      },
      {
        type: "trueFalse",
        id: "u3-q3",
        statement: "In a QoE analysis, every adjustment must be defensible with evidence because buyers will attack aggressive add-backs.",
        isTrue: true,
        explanation: "Every adjustment must be defensible with evidence; buyers attack aggressive add-backs, and the gap between reported and 'adjusted' EBITDA is where price disputes live."
      },
      {
        type: "mcq",
        id: "u3-q4",
        prompt: "Which of the following would be a 'run-rate adjustment' in a QoE analysis?",
        options: [
          "Excluding a one-time legal settlement paid in the prior year.",
          "Adjusting an owner's salary from above-market to market rate.",
          "Removing revenue from a major customer that has already been lost.",
          "Adding back depreciation to convert EBIT to EBITDA."
        ],
        correctIndex: 2,
        explanation: "A run-rate adjustment removes revenue already lost (e.g. a customer no longer active) or annualises a mid-year event. Removing a customer already lost is a clear run-rate adjustment."
      },

      // ### Working capital
      {
        type: "formula",
        id: "u3-q5",
        prompt: "Type the formula for Net Working Capital.",
        accepted: [
          "netwc=receivables+inventory-payables",
          "nwc=receivables+inventory-payables",
          "netwc=receivables+inventory−payables",
          "nwc=receivables+inventory−payables",
          "networkcapital=receivables+inventory-payables",
          "networkingcapital=receivables+inventory-payables",
          "netwc=inventory+receivables-payables",
          "nwc=inventory+receivables-payables"
        ],
        explanation: "Net working capital = receivables + inventory − payables. This measures the short-term operating capital tied up in the business."
      },
      {
        type: "mcq",
        id: "u3-q6",
        prompt: "In a cash-free / debt-free M&A deal with a working-capital peg, what happens if working capital at completion is BELOW the peg?",
        options: [
          "The seller receives a bonus for delivering a leaner balance sheet.",
          "The buyer pays more to compensate for the extra capital they must inject to run the business.",
          "The buyer pays less, because the seller is delivering less working capital than the agreed target.",
          "The deal price is not affected — the peg is only relevant for debt adjustments."
        ],
        correctIndex: 2,
        explanation: "If working capital at completion is below the peg, the buyer pays less; above, more — because too little working capital means the buyer must inject cash to run the business."
      },
      {
        type: "mcq",
        id: "u3-q7",
        prompt: "What does the working-capital cycle tell a dealmaker beyond the peg adjustment?",
        options: [
          "The precise tax rate that applies to the transaction.",
          "How cash-hungry growth will be — a swelling working-capital cycle consumes cash as the business scales.",
          "The optimal debt structure for financing the acquisition.",
          "The depreciation policy used to calculate EBITDA."
        ],
        correctIndex: 1,
        explanation: "The working-capital cycle also tells you how cash-hungry growth will be. A business with a swelling working-capital cycle consumes cash as it grows, which is a crucial quality signal."
      },

      // fillBlank — peg definition
      {
        type: "fillBlank",
        id: "u3-q8",
        prompt: "The working-capital peg is typically set at the ___ average of the trailing 12-month working capital.",
        accepted: ["normalised", "normalized", "normalised target", "normalized target", "trailing 12-month", "12-month", "12 month"],
        explanation: "The peg is a normalised target, often the trailing 12-month average. Deviations at completion trigger price adjustments up or down."
      },

      // ### Net debt
      {
        type: "formula",
        id: "u3-q9",
        prompt: "Type the formula for Net Debt (as used in M&A, including debt-like items).",
        accepted: [
          "netdebt=totaldebt+leases+preferred+debtlikeitems-cash",
          "netdebt=totalborrowings+financeleases+preferred-cash&equivalents",
          "netdebt=totalborrowing+leases+preferred+debtlikeitems-cash",
          "netdebt=debt+leases+preferred+debtlikeitems-cash",
          "netdebt=totaldebt+financeleases+preferred+debtlikeitems-cash&equivalents",
          "netdebt=totaldebt+leases+preferred-cash+debtlikeitems",
          "netdebt=totaldebt+preferred+leases+debtlikeitems-cashequivalents"
        ],
        explanation: "Net debt = total borrowings + finance leases + preferred − cash & equivalents, then add debt-like items (unfunded pensions, deferred consideration, large overdue payables, restructuring provisions, dividends declared but unpaid). This bridges enterprise value to equity value."
      },
      {
        type: "mcq",
        id: "u3-q10",
        prompt: "Which of the following is an example of a 'debt-like item' that a buyer effectively assumes in an M&A transaction?",
        options: [
          "Accumulated goodwill from a prior acquisition.",
          "Unfunded pension obligations.",
          "Deferred tax assets on the balance sheet.",
          "Minority interest in a subsidiary."
        ],
        correctIndex: 1,
        explanation: "Debt-like items include unfunded pensions, deferred consideration/earnouts, large overdue payables, restructuring provisions, and dividends declared but unpaid — all real economic obligations a buyer assumes."
      },
      {
        type: "mcq",
        id: "u3-q11",
        prompt: "Why does misjudging net debt directly misprice the equity in a deal?",
        options: [
          "Because net debt sets the WACC used in the DCF valuation.",
          "Because net debt is the bridge from enterprise value to equity value — overstate net debt and equity value falls by the same amount.",
          "Because lenders use net debt to set the interest rate on acquisition financing.",
          "Because IFRS requires net debt to be disclosed in the purchase price allocation."
        ],
        correctIndex: 1,
        explanation: "Net debt is the bridge from enterprise value to equity value (Day 5), so misjudging it misprices the equity directly. Every dollar of missed net debt is a dollar overpaid for equity."
      },

      // ### EBITDA-to-cash bridge (FCF)
      {
        type: "formula",
        id: "u3-q12",
        prompt: "Type the approximate formula for Free Cash Flow (FCF) used in the EBITDA-to-cash bridge.",
        accepted: [
          "fcf=ebitda-δnwc-capex-cashinterest-cashtax",
          "fcf≈ebitda-δnwc-capex-cashinterest-cashtax",
          "fcf=ebitda-changeinwc-capex-cashinterest-cashtax",
          "fcf=ebitda-deltanwc-capex-cashinterest-cashtax",
          "fcf=ebitda-nwcchange-capex-cashinterest-cashtax",
          "freecashflow=ebitda-δnwc-capex-cashinterest-cashtax",
          "freecashflow≈ebitda-changeinwc-capex-cashinterest-cashtax",
          "fcf=ebitda-capex-δnwc-cashinterest-cashtax",
          "fcf=ebitda-capex-changeinwc-cashinterest-cashtax"
        ],
        explanation: "FCF ≈ EBITDA − ΔNWC − capex − cash interest − cash tax. This bridge shows how much accounting profit actually becomes cash. High EBITDA but heavy capex and swelling working capital signals poor cash conversion."
      },
      {
        type: "trueFalse",
        id: "u3-q13",
        statement: "A business with high EBITDA but heavy capex requirements and a growing working-capital cycle is a high-quality cash generator.",
        isTrue: false,
        explanation: "A business with high EBITDA but heavy capex and a swelling working-capital cycle converts poorly — this is a crucial quality signal indicating poor cash conversion, not high quality."
      },
      {
        type: "mcq",
        id: "u3-q14",
        prompt: "In the EBITDA-to-cash bridge, what does ΔNWC represent and why does it reduce FCF when positive?",
        options: [
          "Change in net working capital; a positive ΔNWC means the business released cash from working capital.",
          "Change in net working capital; a positive ΔNWC means the business consumed more cash to fund growing receivables and inventory.",
          "Depreciation and amortisation; it is subtracted because it is a non-cash charge.",
          "Change in net debt; it reduces FCF when the company repays borrowings."
        ],
        correctIndex: 1,
        explanation: "ΔNWC is the change in net working capital. A positive ΔNWC (working capital increasing) means cash is being consumed — more tied up in receivables and inventory than released from payables — so it reduces FCF."
      },

      // ### Watch out — IFRS 16 and adjusted EBITDA
      {
        type: "mcq",
        id: "u3-q15",
        prompt: "A seller presents an 'Adjusted EBITDA' figure. What does the manual say an analyst should do first?",
        options: [
          "Accept it as the base case since it has been reviewed by the seller's auditors.",
          "Treat it as the seller's best case and rebuild it from the audited accounts.",
          "Use it directly in the DCF but apply a haircut of 10-15% for conservatism.",
          "Compare it only against other companies using the same accounting standard."
        ],
        correctIndex: 1,
        explanation: "Treat the seller's 'Adjusted EBITDA' as their best case, and rebuild it from the audited accounts. This is the Watch Out for Day 3: seller adjustments are optimistic by design."
      },
      {
        type: "mcq",
        id: "u3-q16",
        prompt: "IFRS 16 (the lease accounting standard) has which effect on reported EBITDA compared to the old treatment, and why does this matter for deal comparisons?",
        options: [
          "IFRS 16 lowers EBITDA by expensing lease payments above the line; this makes IFRS 16 companies look less profitable.",
          "IFRS 16 puts leases on the balance sheet and lifts EBITDA by reclassifying lease expense; comparing companies on different bases distorts analysis.",
          "IFRS 16 has no effect on EBITDA; it only changes how depreciation is reported.",
          "IFRS 16 reduces net debt by removing operating lease liabilities from the balance sheet."
        ],
        correctIndex: 1,
        explanation: "IFRS 16 puts leases on the balance sheet and lifts EBITDA (because lease expense moves below EBITDA as depreciation + interest). Confirm the accounting basis before comparing anything."
      },

      // ### Privatus angle — childcare QoE
      {
        type: "mcq",
        id: "u3-q17",
        prompt: "For Privatus's childcare roll-up (Story House / Aurrum Kids), the manual highlights which specific QoE focus areas?",
        options: [
          "Patent expiry risk, R&D capitalisation, and executive compensation dilution.",
          "Occupancy-driven revenue durability, government subsidy dependence, lease obligations, and true maintenance capex per centre.",
          "Foreign exchange exposure, cross-border transfer pricing, and regulatory fines.",
          "Customer concentration, software renewal rates, and deferred revenue recognition."
        ],
        correctIndex: 1,
        explanation: "For a childcare roll-up like Story House / Aurrum Kids, QoE focuses on occupancy-driven revenue durability, government subsidy dependence, lease obligations, and the true maintenance capex per centre — the difference between headline and sustainable earnings."
      },

      // wordBank — QoE definition
      {
        type: "wordBank",
        id: "u3-q18",
        prompt: "Build the glossary definition of 'Quality of earnings' by tapping the tokens in order.",
        answerTokens: ["Diligence", "assessing", "how", "sustainable", "and", "cash-backed", "reported", "profit", "is"],
        distractors: ["audited", "adjusted", "recurring", "verified", "EBITDA", "net"],
        explanation: "Quality of earnings is defined in the glossary as: diligence assessing how sustainable and cash-backed reported profit is."
      },

      // Practice today — writing
      {
        type: "writing",
        id: "u3-q19",
        prompt: "Practice today: Take a listed company's annual report and compute normalised EBITDA, net debt (including any debt-like items), and an EBITDA-to-FCF bridge. Write two sentences on the quality of its earnings.",
        modelAnswer: "Start with reported EBIT and add back depreciation and amortisation to get EBITDA, then layer in QoE adjustments (remove non-recurring items, normalise owner-related distortions, annualise mid-year events). For net debt, sum all borrowings plus finance leases plus preferred minus cash, then add pension deficits, earnout liabilities, and other debt-like items. The FCF bridge subtracts the change in working capital, maintenance capex, cash interest, and cash tax from EBITDA to show true cash conversion. The quality of earnings commentary should address whether the adjustments are defensible and whether the cash conversion ratio is high.",
        keyPoints: [
          "Compute EBITDA starting from audited accounts, not from the company's own adjusted figure.",
          "Net debt must include leases (IFRS 16), preferred equity, and all debt-like items.",
          "The FCF bridge must subtract ΔNWC, capex, cash interest, and cash tax.",
          "Quality commentary addresses sustainability (non-recurring items) and cash conversion.",
          "Confirm whether IFRS 16 has been applied before making any cross-company EBITDA comparisons."
        ]
      },

      // fillBlank — bridge components
      {
        type: "fillBlank",
        id: "u3-q20",
        prompt: "The EBITDA-to-FCF bridge subtracts four items from EBITDA: change in net working capital, ___, cash interest, and cash tax.",
        accepted: ["capex", "capital expenditure", "capital expenditures", "maintenance capex", "capex (capital expenditure)"],
        explanation: "FCF ≈ EBITDA − ΔNWC − capex − cash interest − cash tax. Capex is the third deduction in the bridge."
      }
    ]
  },

  {
    id: 4,
    day: 4,
    title: "Know the deal book cold",
    subtitle: "Speak fluently about their actual transactions and the sectors behind them.",
    questions: [
      // ### The deals — individual deal coverage
      {
        type: "mcq",
        id: "u4-q1",
        prompt: "Privatus advised DBG Health on a capital commitment from which investors, and what was the approximate size?",
        options: [
          "Advent International and KKR; approximately A$725m.",
          "BDT & MSD Partners; A$2.6bn.",
          "Bloomberg LP and Five V Capital; approximately A$500m.",
          "Macquarie Infrastructure and Real Assets; A$1.2bn."
        ],
        correctIndex: 1,
        explanation: "DBG Health involved advisory on a A$2.6bn capital commitment from BDT & MSD Partners — a large healthcare growth-capital situation. The value driver was scaling a diversified healthcare platform."
      },
      {
        type: "mcq",
        id: "u4-q2",
        prompt: "What was the key value driver behind the Automic deal?",
        options: [
          "Expanding into Asian carbon credit markets as a data analytics platform.",
          "Consolidating registry and technology infrastructure into a scaled platform.",
          "Acquiring childcare centres to build a buy-and-build education roll-up.",
          "Providing growth capital to a diversified healthcare services company."
        ],
        correctIndex: 1,
        explanation: "Automic: sell-side adviser on the ~A$725m sale to Advent International. The value driver was consolidating registry/technology infrastructure into a scaled platform. Earlier milestones included Five V's minority stake and the take-private of Advanced Share Registry."
      },
      {
        type: "trueFalse",
        id: "u4-q3",
        statement: "Privatus acted as sell-side adviser on the Automic transaction, which was sold to Advent International for approximately A$725m.",
        isTrue: true,
        explanation: "Automic: Privatus was sell-side adviser on the ~A$725m sale to Advent International. The deal also involved an earlier Five V minority and the take-private of Advanced Share Registry."
      },
      {
        type: "mcq",
        id: "u4-q4",
        prompt: "What was the nature of the Viridios AI transaction and who was the buyer?",
        options: [
          "A childcare roll-up sold to a private equity firm for A$350m.",
          "A sale to Bloomberg; the company provided carbon-credit pricing and analytics.",
          "A capital raise from BDT & MSD for a healthcare growth platform.",
          "A sell-side mandate on a Series A raise for a supply-chain ESG company."
        ],
        correctIndex: 1,
        explanation: "Viridios AI — Privatus advised on the sale to Bloomberg. The company provided carbon-credit pricing and analytics, and the value driver was data/analytics value in a growing carbon market."
      },
      {
        type: "mcq",
        id: "u4-q5",
        prompt: "What is the business model underpinning the Story House Early Learning deal, and why is the sector attractive?",
        options: [
          "A SaaS platform sold for recurring revenue; attractive because of high net revenue retention.",
          "A childcare/education roll-up (buy-and-build) in a fragmented, demand-resilient sector.",
          "A healthcare distribution business; attractive because of demographic-driven demand.",
          "A registry technology platform consolidated to achieve scale economies."
        ],
        correctIndex: 1,
        explanation: "Story House Early Learning is a childcare/education roll-up (including Aurrum Kids). The value driver is buy-and-build economics in a fragmented, demand-resilient sector — a classic private equity roll-up thesis."
      },
      {
        type: "mcq",
        id: "u4-q6",
        prompt: "FairSupply raised capital in what type of financing round, and what is the underlying demand driver for its product?",
        options: [
          "A$500m Series B; driven by ESG investor mandates to reduce carbon emissions.",
          "Series A raise; regulatory-driven demand for supply-chain transparency (including modern slavery compliance).",
          "Growth debt facility; driven by government procurement requirements for cybersecurity.",
          "NBIO process; driven by strategic acquirer interest in supply-chain data assets."
        ],
        correctIndex: 1,
        explanation: "FairSupply — supply-chain ESG and modern-slavery analytics; a Series A raise. The driver is regulatory-driven demand for supply-chain transparency."
      },

      // ### The sector map
      {
        type: "mcq",
        id: "u4-q7",
        prompt: "Reading across the Privatus deal book, which sectors reflect the firm's core conviction and network?",
        options: [
          "Mining, energy, and infrastructure.",
          "Healthcare, financial/registry infrastructure, education, and data-plus-ESG (carbon markets, supply-chain transparency).",
          "Consumer retail, fintech lending, and property development.",
          "Defence, telecommunications, and government services."
        ],
        correctIndex: 1,
        explanation: "Reading across the book a pattern emerges: healthcare, financial/registry infrastructure, education, and a strong data-plus-ESG sub-theme (carbon markets, supply-chain transparency). This tells you where the firm's conviction, network and likely future mandates sit."
      },
      {
        type: "trueFalse",
        id: "u4-q8",
        statement: "The Privatus deal book shows a strong data-and-ESG sub-theme, exemplified by Viridios AI (carbon markets) and FairSupply (supply-chain transparency).",
        isTrue: true,
        explanation: "Both Viridios AI (carbon-credit pricing and analytics) and FairSupply (supply-chain ESG and modern-slavery analytics) represent the firm's data-plus-ESG sub-theme, which sits alongside healthcare, financial infrastructure, and education."
      },

      // matching — deals to mandates
      {
        type: "matching",
        id: "u4-q9",
        prompt: "Match each Privatus deal to its primary value driver.",
        pairs: [
          { left: "DBG Health", right: "Scaling a diversified healthcare platform via growth capital." },
          { left: "Automic", right: "Consolidating registry/technology infrastructure into a scaled platform." },
          { left: "Viridios AI", right: "Data and analytics value in a growing carbon market." },
          { left: "Story House Early Learning", right: "Buy-and-build economics in a fragmented, demand-resilient childcare sector." },
          { left: "FairSupply", right: "Regulatory-driven demand for supply-chain ESG transparency." }
        ],
        explanation: "Each deal in the Privatus book has a distinct value driver reflecting the firm's sector map: healthcare, registry tech, carbon analytics, education roll-up, and supply-chain ESG."
      },

      // ### How to research a deal
      {
        type: "mcq",
        id: "u4-q10",
        prompt: "According to the manual, what are the key elements of a one-pager deal template?",
        options: [
          "EBITDA, EV/EBITDA multiple, net debt, and a DCF sensitivity table.",
          "Mandate, parties, size, rationale, and a one-line take on the value driver.",
          "Teaser, CIM, management presentation, and VDR access log.",
          "Sector overview, comparable transactions, buyer universe, and bid history."
        ],
        correctIndex: 1,
        explanation: "The manual specifies a reusable one-pager template covering: mandate, parties, size, rationale, and your one-line take. Build it for each deal."
      },
      {
        type: "mcq",
        id: "u4-q11",
        prompt: "When researching a Privatus deal in the press, what three key data points should you identify?",
        options: [
          "The EV/EBITDA multiple, the financing structure, and the legal adviser.",
          "The value/size, the parties involved, and the stated rationale for the deal.",
          "The deal timeline, the due diligence workstreams, and the completion mechanism.",
          "The FIRB approval date, the SPA signing date, and the closing date."
        ],
        correctIndex: 1,
        explanation: "For each deal: read the firm's own write-up, then search press at announcement for value, parties and rationale; identify the buyer/seller type (strategic vs financial); and note the value driver in one line."
      },

      // trueFalse — buyer types
      {
        type: "trueFalse",
        id: "u4-q12",
        statement: "Advent International, the buyer in the Automic transaction, is a financial (private equity) buyer rather than a strategic buyer.",
        isTrue: true,
        explanation: "Advent International is a private equity firm — a financial buyer. The manual notes you should identify whether the buyer/seller type is strategic vs financial when researching each deal."
      },

      // fillBlank — DBG Health deal size
      {
        type: "fillBlank",
        id: "u4-q13",
        prompt: "The DBG Health advisory mandate involved a capital commitment of approximately ___.",
        accepted: ["A$2.6bn", "A$2.6 billion", "2.6bn", "2.6 billion", "$2.6bn", "$2.6 billion", "A$2.6B", "2.6B"],
        explanation: "DBG Health involved a A$2.6bn capital commitment from BDT & MSD Partners — the largest deal by disclosed size in the Privatus book."
      },

      // fillBlank — Automic deal size
      {
        type: "fillBlank",
        id: "u4-q14",
        prompt: "Privatus acted as sell-side adviser on the Automic sale to Advent International, at an approximate deal value of ___.",
        accepted: ["A$725m", "~A$725m", "A$725 million", "725m", "725 million", "$725m", "$725 million", "A$725M"],
        explanation: "The Automic sale to Advent International was at approximately A$725m, making it a significant mid-market technology infrastructure transaction."
      },

      // ordering — how to research a deal
      {
        type: "ordering",
        id: "u4-q15",
        prompt: "Put the steps for researching a Privatus deal in the correct order as described in the manual.",
        correctOrder: [
          "Read the firm's own deal write-up.",
          "Search press at announcement for value, parties, and rationale.",
          "Identify whether the buyer/seller is strategic or financial.",
          "Note the value driver in one line.",
          "Fill out the one-pager template: mandate, parties, size, rationale, your one-line take."
        ],
        explanation: "The manual prescribes: read the firm's write-up first, then press coverage, then classify buyer/seller type, then distil the value driver, then document everything in the one-pager template."
      },

      // mcq — Automic history
      {
        type: "mcq",
        id: "u4-q16",
        prompt: "Before the Advent International sale, which two earlier transactions are mentioned for Automic in the manual?",
        options: [
          "A IPO on the ASX and a Series B growth raise.",
          "A Five V Capital minority investment and the take-private of Advanced Share Registry.",
          "A BDT & MSD growth-capital commitment and a Bloomberg strategic acquisition.",
          "A management buyout and a Macquarie Infrastructure investment."
        ],
        correctIndex: 1,
        explanation: "For Automic: earlier milestones included a Five V minority stake and the take-private of Advanced Share Registry, before the culminating ~A$725m sale to Advent International."
      },

      // mcq — sector map insight
      {
        type: "mcq",
        id: "u4-q17",
        prompt: "Why is knowing the Privatus sector map useful for a new analyst in week one?",
        options: [
          "It allows the analyst to independently pitch new mandates without partner oversight.",
          "It provides useful context for conversations — showing where the firm's conviction, network and likely future mandates sit.",
          "It determines the analyst's modelling template library for the first six months.",
          "It replaces the need to read the firm's About page in detail."
        ],
        correctIndex: 1,
        explanation: "Reading across the deal book reveals where the firm's conviction, network and likely future mandates sit — useful context for any conversation, particularly in week one."
      },

      // Practice today — writing
      {
        type: "writing",
        id: "u4-q18",
        prompt: "Practice today: Write a one-paragraph profile of each of the five Privatus deals. Pick the one you find most compelling and prepare two sentences on why — you will use it to show genuine interest in week one.",
        modelAnswer: "For each deal, the profile should cover: the mandate (what Privatus did), the parties (buyer, seller, investor), the deal size where disclosed, and the value driver in one line. For example, Viridios AI (most compelling): Privatus advised on the sale of Viridios AI, a carbon-credit pricing and analytics platform, to Bloomberg. The deal reflects the growing premium placed on data infrastructure in emerging regulatory markets — a theme with a long runway as carbon compliance expands across Asia Pacific.",
        keyPoints: [
          "Each profile must cover mandate, parties, size (where disclosed), and value driver.",
          "DBG Health: A$2.6bn, BDT & MSD, healthcare platform growth capital.",
          "Automic: ~A$725m, sell-side to Advent International, registry/tech consolidation.",
          "Viridios AI: sale to Bloomberg, carbon-credit data/analytics.",
          "Story House: childcare roll-up (Aurrum Kids), buy-and-build education thesis.",
          "FairSupply: Series A, supply-chain ESG/modern-slavery analytics, regulatory demand driver.",
          "The 'most compelling' answer should demonstrate genuine sector interest, not just recite facts."
        ]
      },

      // wordBank — sector map
      {
        type: "wordBank",
        id: "u4-q19",
        prompt: "Build the sentence describing Privatus's sector pattern by tapping the tokens in order.",
        answerTokens: ["healthcare", "financial", "registry", "infrastructure", "education", "and", "data-plus-ESG"],
        distractors: ["mining", "property", "fintech", "defence", "energy"],
        explanation: "Reading across the Privatus book the pattern is: healthcare, financial/registry infrastructure, education, and a strong data-plus-ESG sub-theme (carbon markets, supply-chain transparency)."
      },

      // trueFalse — FairSupply
      {
        type: "trueFalse",
        id: "u4-q20",
        statement: "FairSupply's demand driver is primarily technology innovation in supply-chain logistics, rather than regulatory requirements.",
        isTrue: false,
        explanation: "FairSupply's demand driver is regulatory-driven — specifically demand for supply-chain transparency including modern-slavery analytics. This is a compliance and ESG regulatory mandate, not primarily a technology innovation story."
      }
    ]
  }
];
