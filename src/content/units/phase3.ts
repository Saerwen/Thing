import type { Unit } from '../types';

export const unitsPhase3: Unit[] = [
  // ─────────────────────────────────────────────────────────────────────────
  // Day 10 — The sell-side toolkit
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 10,
    day: 10,
    title: "The sell-side toolkit",
    subtitle: "Know every document that carries a sell-side process and why each exists.",
    questions: [
      // --- Documents sequence ordering ---
      {
        type: "ordering",
        id: "u10-q1",
        prompt: "Put the six sell-side documents in the order they appear in a typical auction process.",
        correctOrder: [
          "Teaser",
          "NDA",
          "CIM / IM",
          "Management presentation",
          "Data room (VDR)",
          "Process letters"
        ],
        explanation: "The standard sell-side sequence: the anonymous Teaser creates initial interest, the NDA is signed before any sensitive detail is shared, the CIM is the full marketing document, shortlisted bidders then attend the Management presentation, the Data room (VDR) is opened for detailed diligence, and Process letters govern each formal submission round."
      },

      // --- Teaser ---
      {
        type: "mcq",
        id: "u10-q2",
        prompt: "What is the primary purpose of a sell-side Teaser?",
        options: [
          "To create interest in a target without revealing its identity",
          "To provide buyers with detailed historical financials",
          "To formalise the confidentiality obligations of a bidder",
          "To give management an opportunity to answer buyer questions live"
        ],
        correctIndex: 0,
        explanation: "The Teaser is a one-to-two page anonymous summary — sector, scale, investment highlights, financial snapshot — designed to create interest without revealing the target's identity."
      },
      {
        type: "trueFalse",
        id: "u10-q3",
        statement: "A Teaser typically identifies the target company by name so that interested parties can research it before signing an NDA.",
        isTrue: false,
        explanation: "The Teaser is deliberately anonymous. Its purpose is to generate interest while protecting the seller's identity until an NDA is signed."
      },

      // --- NDA ---
      {
        type: "mcq",
        id: "u10-q4",
        prompt: "Which of the following provisions can be included in an NDA in a sell-side process?",
        options: [
          "A standstill clause preventing a hostile bid, and a non-solicit preventing poaching of staff or customers",
          "A liquidation preference protecting the seller's proceeds on exit",
          "An anti-dilution ratchet applying to the target's existing shareholders",
          "A MAC clause allowing the buyer to walk if earnings deteriorate"
        ],
        correctIndex: 0,
        explanation: "An NDA may include a standstill (no hostile bid) and a non-solicit (no poaching staff or customers), in addition to standard confidentiality obligations."
      },
      {
        type: "trueFalse",
        id: "u10-q5",
        statement: "Sensitive deal information may be shared with potential buyers before they sign an NDA.",
        isTrue: false,
        explanation: "The NDA is the confidentiality agreement signed before sensitive information is shared. No confidential material should flow to a counterparty before this is in place."
      },

      // --- CIM / IM ---
      {
        type: "mcq",
        id: "u10-q6",
        prompt: "Which of the following best describes the typical structure of a CIM?",
        options: [
          "Executive summary, investment highlights, market overview, business description, management, historical financials, and financial projections",
          "Sources and uses of funds, debt schedule, operating model, and returns analysis",
          "Process timeline, bidder instructions, submission format, and bid deadline",
          "Due diligence request list grouped by workstream with red-flag findings"
        ],
        correctIndex: 0,
        explanation: "The CIM (Confidential Information Memorandum) is the full marketing document. Its typical structure covers: executive summary, investment highlights, market overview, business description, management, historical financials, and a financial projection."
      },
      {
        type: "trueFalse",
        id: "u10-q7",
        statement: "Analysts on a sell-side team often draft large parts of the CIM.",
        isTrue: true,
        explanation: "The manual explicitly notes that analysts often draft large parts of the CIM, making it a core junior skill in a sell-side mandate."
      },
      {
        type: "mcq",
        id: "u10-q8",
        prompt: "\"CIM\" stands for:",
        options: [
          "Confidential Information Memorandum",
          "Competitive Intelligence Module",
          "Capital Instrument Manual",
          "Commercial Indicative Memorandum"
        ],
        correctIndex: 0,
        explanation: "CIM stands for Confidential Information Memorandum — the full sell-side marketing document (also called the Information Memorandum, or IM)."
      },

      // --- Management presentation ---
      {
        type: "mcq",
        id: "u10-q9",
        prompt: "At what stage of a sell-side process does the Management presentation typically occur?",
        options: [
          "After the CIM is distributed, when a shortlist of bidders has been identified",
          "Before the NDA is signed, to generate early interest",
          "Simultaneously with the Teaser, as a marketing kick-off",
          "Only after binding bids have been received"
        ],
        correctIndex: 0,
        explanation: "The Management presentation is the live session where management tells the story to shortlisted bidders and answers questions — it follows CIM distribution and the first round of bids."
      },

      // --- Data room / VDR ---
      {
        type: "mcq",
        id: "u10-q10",
        prompt: "What is a Virtual Data Room (VDR) in a sell-side process?",
        options: [
          "A secure, tiered-access repository of diligence materials managed by the sell-side adviser",
          "The document that formally instructs bidders on what to submit and by when",
          "An anonymous marketing summary distributed before the NDA is signed",
          "The live session where management answers questions from shortlisted buyers"
        ],
        correctIndex: 0,
        explanation: "The VDR is a secure repository of diligence materials with access tiered by bidder stage. Junior team members often manage its structure and the Q&A log."
      },
      {
        type: "trueFalse",
        id: "u10-q11",
        statement: "All bidders receive the same level of access to the Data Room throughout the process.",
        isTrue: false,
        explanation: "Access to the VDR is tiered by bidder stage — more advanced bidders receive progressively deeper access as the process narrows."
      },

      // --- Process letters ---
      {
        type: "mcq",
        id: "u10-q12",
        prompt: "What is the role of Process letters in a sell-side auction?",
        options: [
          "They formally instruct bidders at each round on what to submit, in what form, and by when",
          "They constitute the binding sale and purchase agreement between buyer and seller",
          "They serve as the confidential marketing document distributed after NDA signing",
          "They are the seller's contractual statements about the business included in the SPA"
        ],
        correctIndex: 0,
        explanation: "Process letters are formal instructions issued to bidders at each round of the auction, specifying submission requirements, format, and deadlines."
      },

      // --- Equity story ---
      {
        type: "mcq",
        id: "u10-q13",
        prompt: "According to the manual, which three elements make a strong equity story that drives competitive tension and price?",
        options: [
          "Defensible market position, clear growth levers, and quality earnings",
          "Detailed debt schedule, sources and uses table, and management CVs",
          "Process letter timeline, NDA terms, and VDR structure",
          "Anti-dilution protection, liquidation preference, and governance rights"
        ],
        correctIndex: 0,
        explanation: "A strong equity story includes a defensible market position, clear growth levers, and quality earnings — these drive competitive tension and ultimately price."
      },
      {
        type: "trueFalse",
        id: "u10-q14",
        statement: "All six sell-side documents serve the same underlying narrative: why this business is valuable and will grow.",
        isTrue: true,
        explanation: "The manual states that everything — Teaser, NDA, CIM, Management presentation, Data room, and Process letters — serves one narrative: why this business is valuable and will grow."
      },

      // --- Auction dynamics ---
      {
        type: "mcq",
        id: "u10-q15",
        prompt: "Why is exclusivity granted late and sparingly in a sell-side process?",
        options: [
          "Because granting exclusivity removes the seller's leverage by eliminating competitive tension",
          "Because the NDA must expire before exclusivity can be granted",
          "Because the CIM has not yet been distributed to all bidders",
          "Because process letters require a minimum of three bidders at all times"
        ],
        correctIndex: 0,
        explanation: "Exclusivity is granted late and sparingly because it removes the seller's leverage. The art of sell-side is maintaining competitive tension among enough bidders while protecting confidentiality."
      },

      // --- Matching: CIM, VDR, Teaser, NDA ---
      {
        type: "matching",
        id: "u10-q16",
        prompt: "Match each sell-side document to its correct description.",
        pairs: [
          { left: "Teaser", right: "Anonymous 1-2 page summary designed to create interest without revealing identity" },
          { left: "NDA", right: "Confidentiality agreement signed before sensitive information is shared; may include standstill and non-solicit" },
          { left: "CIM", right: "Full sell-side marketing document covering market, business, management, and financials" },
          { left: "VDR", right: "Secure tiered-access repository of diligence materials" }
        ],
        explanation: "These four documents each play a distinct role in the sell-side sequence, progressing from anonymous interest generation through full diligence access."
      },

      // --- Privatus angle ---
      {
        type: "mcq",
        id: "u10-q17",
        prompt: "For a childcare asset (Story-House-style), the manual identifies which of the following as central to the equity story?",
        options: [
          "Occupancy and enrolment growth, quality and defensibility of locations, regulatory tailwinds, and buy-and-build runway in a fragmented market",
          "High leverage, deleveraging potential, and multiple expansion from sector re-rating",
          "Anti-dilution provisions, pro-rata rights, and preferred liquidation preference",
          "EBITDA margin compression, debt covenant headroom, and completion accounts mechanics"
        ],
        correctIndex: 0,
        explanation: "For a childcare asset the equity story centres on occupancy/enrolment growth, location quality and defensibility, regulatory tailwinds, and buy-and-build opportunity in a fragmented market."
      },

      // --- Writing: Practice today ---
      {
        type: "writing",
        id: "u10-q18",
        prompt: "Outline a CIM table of contents for a hypothetical sell-side client, then draft a one-paragraph 'investment highlights' section as if pitching that business.",
        modelAnswer: "A CIM table of contents typically runs: (1) Executive Summary, (2) Investment Highlights, (3) Market Overview, (4) Business Description, (5) Management Team, (6) Historical Financials, (7) Financial Projections. The investment highlights paragraph should lead with the single most compelling value proposition — for example, a market-leading position in a growing sector — then layer in defensible competitive advantages, a clear growth path (organic and M&A), and a quality-earnings narrative. The goal is to make a rational, motivated buyer want to read every subsequent section.",
        keyPoints: [
          "Table of contents includes executive summary, investment highlights, market overview, business description, management, historical financials, and projections",
          "Investment highlights should open with the strongest value proposition",
          "Highlights should cover market position, growth levers, and earnings quality",
          "The section must create desire to read further — it sets competitive tension",
          "Drafting the CIM is explicitly identified as a junior analyst skill"
        ]
      },

      // --- wordBank: equity story definition ---
      {
        type: "wordBank",
        id: "u10-q19",
        prompt: "Build the sentence that describes the equity story's purpose in a sell-side process.",
        answerTokens: ["A", "strong", "equity", "story", "drives", "competitive", "tension", "and", "price"],
        distractors: ["weak", "diligence", "exclusivity", "binding", "leverage", "NDA"],
        explanation: "The manual states that a strong equity story — defensible market position, clear growth levers, quality earnings — is what drives competitive tension and price."
      },

      // --- Additional MCQs to hit depth ---
      {
        type: "trueFalse",
        id: "u10-q20",
        statement: "Drafting the equity story well is described as a senior skill that junior analysts cannot start learning early.",
        isTrue: false,
        explanation: "The manual says drafting the equity story well 'is a genuinely senior skill you can start learning now' — it is worth developing from the junior level."
      },
      {
        type: "mcq",
        id: "u10-q21",
        prompt: "Which of the following is NOT listed by the manual as a section typically found in a CIM?",
        options: [
          "Sources and uses of acquisition financing",
          "Executive summary",
          "Market overview",
          "Historical financials"
        ],
        correctIndex: 0,
        explanation: "Sources and uses is part of an LBO model, not a CIM section. The CIM covers executive summary, investment highlights, market overview, business description, management, historical financials, and financial projections."
      },
      {
        type: "mcq",
        id: "u10-q22",
        prompt: "Which role do junior team members often play in relation to the VDR?",
        options: [
          "Managing the VDR structure and the Q&A log",
          "Negotiating NDA terms with each bidder directly",
          "Setting the auction reserve price and bidder shortlist",
          "Delivering the management presentation to bidders"
        ],
        correctIndex: 0,
        explanation: "The manual notes that junior team members often manage the VDR structure and the Q&A log — a key operational responsibility in a sell-side process."
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────────────────
  // Day 11 — Buy-side & due diligence
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 11,
    day: 11,
    title: "Buy-side & due diligence",
    subtitle: "Run diligence like an investor — and turn findings into deal terms.",
    questions: [
      // --- Workstreams ---
      {
        type: "mcq",
        id: "u11-q1",
        prompt: "Which diligence workstream assesses the sustainability and cash conversion of earnings and the quality of projections?",
        options: [
          "Financial (Quality of Earnings)",
          "Commercial (CDD)",
          "Legal",
          "Operational / IT / HR"
        ],
        correctIndex: 0,
        explanation: "The Financial (QoE) workstream focuses on the sustainability and cash conversion of earnings and the quality of the projections — exactly what 'Quality of Earnings' means."
      },
      {
        type: "mcq",
        id: "u11-q2",
        prompt: "The Commercial Due Diligence (CDD) workstream primarily investigates:",
        options: [
          "Market size and growth, competitive position, customer concentration and churn, and pricing power",
          "Contract change-of-control clauses, litigation, and IP ownership",
          "Tax structure, exposures, and the most efficient acquisition structure",
          "Key-person risk, systems integration feasibility, and culture"
        ],
        correctIndex: 0,
        explanation: "Commercial (CDD) covers market size and growth, competitive position, customer concentration and churn, and pricing power."
      },
      {
        type: "mcq",
        id: "u11-q3",
        prompt: "Which diligence workstream covers change-of-control clauses, litigation, title, and IP ownership?",
        options: [
          "Legal",
          "Financial (QoE)",
          "ESG",
          "Tax"
        ],
        correctIndex: 0,
        explanation: "The Legal workstream covers contracts (including change-of-control clauses), litigation, title, and IP ownership."
      },
      {
        type: "mcq",
        id: "u11-q4",
        prompt: "Which workstream evaluates the most efficient acquisition structure and the target's tax exposures?",
        options: [
          "Tax",
          "Commercial (CDD)",
          "Operational / IT / HR",
          "Financial (QoE)"
        ],
        correctIndex: 0,
        explanation: "The Tax workstream covers structure, exposures, and the most efficient acquisition structure for the deal."
      },
      {
        type: "trueFalse",
        id: "u11-q5",
        statement: "ESG is now increasingly treated as a standalone diligence workstream.",
        isTrue: true,
        explanation: "The manual explicitly lists ESG as 'increasingly a standalone workstream', alongside the traditional Financial, Commercial, Legal, Tax, and Operational streams."
      },
      {
        type: "mcq",
        id: "u11-q6",
        prompt: "Systems, key-person risk, culture, and integration feasibility are covered by which diligence workstream?",
        options: [
          "Operational / IT / HR",
          "Legal",
          "Tax",
          "ESG"
        ],
        correctIndex: 0,
        explanation: "The Operational / IT / HR workstream covers systems, key-person risk, culture, and integration feasibility."
      },

      // --- From findings to terms ---
      {
        type: "mcq",
        id: "u11-q7",
        prompt: "How do diligence findings typically affect deal price?",
        options: [
          "A discovered liability or weaker run-rate earnings cuts the offer or adjusts the completion accounts",
          "They rarely affect price; the NDA constrains any post-signing renegotiation",
          "They only affect price if the MAC clause is triggered by the buyer",
          "Price can only change if the seller provides an indemnity for the specific risk found"
        ],
        correctIndex: 0,
        explanation: "Diligence is not academic — a discovered liability or weaker run-rate earnings directly cuts the offer, or adjusts the completion accounts."
      },
      {
        type: "mcq",
        id: "u11-q8",
        prompt: "What are 'Reps & warranties' in an M&A transaction?",
        options: [
          "The seller's contractual statements about the business; breaches trigger claims",
          "Deferred consideration payments contingent on post-deal performance",
          "Insurance policies covering known operational risks discovered in diligence",
          "Clauses that allow the buyer to walk if a material adverse change occurs"
        ],
        correctIndex: 0,
        explanation: "Reps & warranties are the seller's contractual statements about the business included in the SPA. Breaches trigger claims against the seller."
      },
      {
        type: "mcq",
        id: "u11-q9",
        prompt: "What is Warranty & Indemnity (W&I) insurance?",
        options: [
          "Insurance that increasingly covers breaches of deal warranties, easing clean exits for sellers",
          "A policy that guarantees the target's EBITDA projections for three years post-close",
          "An instrument that converts to equity at a later priced round if a warranty is breached",
          "A standstill clause preventing a hostile bid after the NDA is signed"
        ],
        correctIndex: 0,
        explanation: "W&I insurance increasingly covers breaches of deal warranties, easing clean exits for sellers who would otherwise carry warranty liability for years."
      },
      {
        type: "mcq",
        id: "u11-q10",
        prompt: "What is the purpose of a MAC (Material Adverse Change) clause?",
        options: [
          "It lets a buyer walk if something serious happens to the target before closing",
          "It requires the seller to maintain a minimum cash balance until the deal closes",
          "It converts deferred consideration into equity if earnings miss targets",
          "It prevents the seller from approaching other bidders once exclusivity is granted"
        ],
        correctIndex: 0,
        explanation: "A MAC clause lets a buyer walk if something serious happens to the target between signing and closing."
      },
      {
        type: "mcq",
        id: "u11-q11",
        prompt: "An earnout is best described as:",
        options: [
          "Deferred consideration contingent on post-deal performance, used to bridge price gaps",
          "The seller's warranty that historical earnings are accurately stated in the SPA",
          "An indemnity held in escrow to cover pre-closing tax liabilities",
          "A ratchet mechanism that increases investor ownership if a down-round occurs"
        ],
        correctIndex: 0,
        explanation: "An earnout is deferred consideration contingent on post-deal performance — it bridges the gap between buyer and seller price expectations."
      },
      {
        type: "trueFalse",
        id: "u11-q12",
        statement: "Indemnities and escrow arrangements can provide specific protection for known risks identified in diligence, with part of the price held back in escrow.",
        isTrue: true,
        explanation: "The manual states: indemnities & escrow provide specific protection for known risks; part of the price may be held back in escrow."
      },

      // --- Red-flag report ---
      {
        type: "mcq",
        id: "u11-q13",
        prompt: "What is the primary purpose of a red-flag report in buy-side diligence?",
        options: [
          "To surface only the issues that could change price or kill the deal, before any full report",
          "To provide a comprehensive list of every finding across all diligence workstreams",
          "To formalise the buyer's NDA obligations and standstill restrictions",
          "To deliver the management presentation schedule for shortlisted bidders"
        ],
        correctIndex: 0,
        explanation: "The red-flag report is a concise document — only the issues that could change price or kill the deal — delivered before the full diligence report."
      },
      {
        type: "trueFalse",
        id: "u11-q14",
        statement: "Being able to surface the three issues that matter — rather than all thirty findings — is described as a senior instinct worth developing early.",
        isTrue: true,
        explanation: "The manual explicitly states: 'learning to surface the three things that matter, not the thirty that don't, is a senior instinct worth practising early'."
      },
      {
        type: "mcq",
        id: "u11-q15",
        prompt: "The manual frames the buy-side diligence mindset as:",
        options: [
          "Asking 'what could go wrong?' to directly protect capital — the same muscle built in credit analysis",
          "Maximising competitive tension among sellers to drive the price down",
          "Identifying synergies that justify paying a higher multiple than comparable transactions",
          "Drafting the equity story to present the business in the best possible light"
        ],
        correctIndex: 0,
        explanation: "The manual says: acting for a buyer, diligence is where the discipline of asking 'what could go wrong?' directly protects capital — exactly the muscle built in credit."
      },

      // --- Matching: key terms ---
      {
        type: "matching",
        id: "u11-q16",
        prompt: "Match each buy-side / diligence term to its correct definition.",
        pairs: [
          { left: "Quality of earnings", right: "Diligence assessing how sustainable and cash-backed reported profit is" },
          { left: "Reps & warranties", right: "The seller's contractual statements about the business in the SPA" },
          { left: "W&I insurance", right: "Insurance covering breaches of deal warranties, easing seller exits" },
          { left: "MAC", right: "Material Adverse Change clause that lets a buyer walk pre-close" },
          { left: "Earnout", right: "Deferred consideration contingent on post-deal performance" }
        ],
        explanation: "Each of these terms describes a key mechanism linking diligence findings to the final deal terms and protections."
      },

      // --- Privatus angle ---
      {
        type: "mcq",
        id: "u11-q17",
        prompt: "For a health-sector buy-side mandate (DBG-Health-style), the manual highlights which diligence question set?",
        options: [
          "Regulatory and reimbursement exposure, supplier/customer concentration, and durability of the growth plan",
          "Option-pool mechanics, preferred share terms, and anti-dilution provisions",
          "Sources and uses, debt tranche sizing, and covenant headroom",
          "Teaser content, NDA standstill terms, and CIM table of contents"
        ],
        correctIndex: 0,
        explanation: "For a health-sector buy-side mandate the diligence question set spans regulatory and reimbursement exposure, supplier/customer concentration, and durability of the growth plan."
      },

      // --- MCQ: diligence feeds terms ---
      {
        type: "trueFalse",
        id: "u11-q18",
        statement: "Diligence is primarily an academic exercise; its findings rarely reshape deal terms.",
        isTrue: false,
        explanation: "The manual is explicit: 'Diligence isn't an academic exercise; it reshapes the deal.' Findings feed price, reps & warranties, indemnities, W&I insurance, MAC clauses, and earnouts."
      },

      // --- Writing: Practice today ---
      {
        type: "writing",
        id: "u11-q19",
        prompt: "Build a diligence request list grouped by workstream for a target of your choice, then write a three-bullet red-flag summary imagining what the biggest risks would be.",
        modelAnswer: "A structured diligence request list should group requests under Financial (QoE), Commercial (CDD), Legal, Tax, Operational/IT/HR, and ESG. For each workstream, requests should be specific and prioritised — for example, QoE requests: three years of management accounts, normalisation schedule, and revenue bridge; CDD: customer concentration analysis, churn data, and market share data. The red-flag summary should then cut to only the three findings that could change price or kill the deal — for example: (1) top three customers represent 60% of revenue with no long-term contracts; (2) pending regulatory review of the core product licence; (3) EBITDA overstated by one-off items not included in management's normalisation.",
        keyPoints: [
          "Request list should be grouped by workstream: Financial (QoE), Commercial, Legal, Tax, Operational/IT/HR, ESG",
          "Red-flag report surfaces only issues that could change price or kill the deal",
          "Customer concentration, regulatory exposure, and earnings quality are classic red flags",
          "The senior skill is filtering: three things that matter, not thirty that don't",
          "Diligence findings directly reshape deal terms — price, reps, indemnities, earnouts"
        ]
      },

      // --- Additional depth ---
      {
        type: "mcq",
        id: "u11-q20",
        prompt: "In which order are diligence reports typically delivered?",
        options: [
          "Red-flag report first, then the full detailed report",
          "Full report first, then an executive red-flag summary",
          "Both delivered simultaneously at signing",
          "Red-flag report only if the MAC clause is triggered"
        ],
        correctIndex: 0,
        explanation: "Advisers usually deliver a concise red-flag report first — only the issues that could change price or kill the deal — before the full report."
      },
      {
        type: "mcq",
        id: "u11-q21",
        prompt: "Which of the following is NOT listed by the manual as a way diligence findings reshape deal terms?",
        options: [
          "Changing the seller's governance rights and board seat allocation",
          "Adjusting price or completion accounts",
          "Strengthening or narrowing reps & warranties",
          "Adding specific indemnities or escrow holdbacks"
        ],
        correctIndex: 0,
        explanation: "The manual lists: price, reps & warranties, indemnities & escrow, W&I insurance, conditions & MAC, and earnouts. Governance rights are an investment term, not a diligence-to-terms mechanic."
      },
      {
        type: "wordBank",
        id: "u11-q22",
        prompt: "Complete the sentence: 'Diligence is where the discipline of asking ___ directly ___ capital.'",
        answerTokens: ["what", "could", "go", "wrong", "protects"],
        distractors: ["maximises", "right", "creates", "leverages", "increases"],
        explanation: "The manual frames buy-side diligence as asking 'what could go wrong?' in order to directly protect capital."
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────────────────
  // Day 12 — Growth equity & capital raising
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 12,
    day: 12,
    title: "Growth equity & capital raising",
    subtitle: "Master the mechanics of a funding round — the core analytical task on the investing side.",
    questions: [
      // --- Definitions / positioning ---
      {
        type: "mcq",
        id: "u12-q1",
        prompt: "Growth equity is best defined as:",
        options: [
          "Minority investments in companies with proven models that need capital to scale, sitting between venture and buyout",
          "Control buyouts funded by a mix of debt and equity to acquire mature businesses",
          "Early-stage angel investments in pre-revenue startups using convertible notes",
          "Public-market equity strategies targeting high-growth technology indices"
        ],
        correctIndex: 0,
        explanation: "Growth equity sits between venture and buyout: minority investments in companies with proven models that need capital to scale."
      },

      // --- Formulas ---
      {
        type: "formula",
        id: "u12-q2",
        prompt: "Write the formula for post-money valuation in a funding round.",
        accepted: [
          "post-money=pre-money+investment",
          "postmoney=premoney+investment",
          "post-money=pre-money+newinvestment",
          "postmoney=premoney+newinvestment",
          "post money = pre money + investment",
          "post-money = pre-money + new investment",
          "post money valuation = pre money valuation + investment"
        ],
        explanation: "Post-money = pre-money + new investment. This is the foundational valuation formula for a funding round."
      },
      {
        type: "formula",
        id: "u12-q3",
        prompt: "Write the formula for an investor's ownership percentage after a funding round.",
        accepted: [
          "ownership%=investment/post-money",
          "ownership=investment/postmoney",
          "investor ownership % = investment / post-money",
          "investorownership=investment/post-money",
          "ownership%=investment/post money",
          "% ownership = investment / post-money valuation"
        ],
        explanation: "Investor ownership % = investment / post-money. After investing in a round, the investor's stake is simply their investment divided by the total post-money valuation."
      },

      // --- Worked example fill-in-the-blanks ---
      {
        type: "fillBlank",
        id: "u12-q4",
        prompt: "A company raises $20m at an $80m pre-money valuation. The post-money valuation is ___.",
        accepted: ["$100m", "100m", "100", "$100 million", "100 million", "$100,000,000"],
        explanation: "Post-money = pre-money + new investment = $80m + $20m = $100m."
      },
      {
        type: "fillBlank",
        id: "u12-q5",
        prompt: "A company raises $20m at an $80m pre-money valuation (post-money = $100m). The investor's ownership percentage is ___.",
        accepted: ["20%", "20", "0.2", "20 percent", "1/5"],
        explanation: "Investor ownership % = investment / post-money = $20m / $100m = 20%."
      },

      // --- Primary vs secondary ---
      {
        type: "mcq",
        id: "u12-q6",
        prompt: "What distinguishes a primary investment from a secondary investment in a funding round?",
        options: [
          "Primary capital goes into the company to fund growth (diluting everyone); secondary capital goes to existing holders, giving them liquidity without new money entering the business",
          "Primary investments are made by venture funds; secondary investments are made by buyout funds",
          "Primary rounds use preferred shares; secondary rounds use convertible notes",
          "Primary investors receive anti-dilution protection; secondary investors do not"
        ],
        correctIndex: 0,
        explanation: "Primary: new capital goes into the company to fund growth, diluting everyone proportionally. Secondary: an investor buys existing shares from current holders — liquidity for sellers, no new money for the business."
      },
      {
        type: "trueFalse",
        id: "u12-q7",
        statement: "A secondary transaction puts new money into the company to fund its growth plans.",
        isTrue: false,
        explanation: "In a secondary transaction, an investor buys existing shares from current holders, giving them liquidity — but no new money enters the business."
      },

      // --- Dilution and option pool ---
      {
        type: "mcq",
        id: "u12-q8",
        prompt: "Why does a pre-money option-pool top-up matter in funding negotiations?",
        options: [
          "It dilutes founders before the new money arrives, effectively lowering the real pre-money valuation",
          "It increases the post-money valuation by the size of the option pool",
          "It gives new investors anti-dilution protection against future down-rounds",
          "It converts the SAFE to equity at a discount to the new round price"
        ],
        correctIndex: 0,
        explanation: "Investors often require an option-pool top-up created pre-money, which dilutes founders before the new money arrives — a subtle but material point in negotiations."
      },
      {
        type: "trueFalse",
        id: "u12-q9",
        statement: "Issuing new shares in a funding round reduces the ownership percentage of all existing shareholders proportionally.",
        isTrue: true,
        explanation: "Issuing new shares dilutes everyone — existing shareholders own a smaller percentage of a larger total share count."
      },

      // --- Instruments ---
      {
        type: "mcq",
        id: "u12-q10",
        prompt: "Which instrument is described as the standard growth/VC instrument, carrying preferences over common shares?",
        options: [
          "Preferred shares",
          "SAFE / convertible note",
          "Warrants",
          "Common equity"
        ],
        correctIndex: 0,
        explanation: "Preferred shares are the standard growth/VC instrument, carrying preferences over common shares on liquidation and other events."
      },
      {
        type: "mcq",
        id: "u12-q11",
        prompt: "A SAFE or convertible note is best described as:",
        options: [
          "An early-stage instrument that converts to equity at a later priced round, often with a discount or valuation cap",
          "A preferred share instrument used in growth equity rounds with full liquidation preference",
          "A right to buy shares later at a set price, sometimes attached to debt",
          "A binding agreement to purchase a fixed number of shares at the post-money valuation"
        ],
        correctIndex: 0,
        explanation: "SAFE / convertible notes are early-stage instruments that convert to equity at a later priced round, often with a discount or valuation cap."
      },
      {
        type: "mcq",
        id: "u12-q12",
        prompt: "Warrants are:",
        options: [
          "Rights to buy shares later at a set price, sometimes attached to debt",
          "Deferred consideration contingent on post-deal performance targets",
          "Contractual statements by the seller about the business",
          "Early-stage instruments that convert to equity at a priced round"
        ],
        correctIndex: 0,
        explanation: "Warrants are rights to buy shares later at a set price, sometimes attached to debt instruments."
      },

      // --- Economic & control terms ---
      {
        type: "mcq",
        id: "u12-q13",
        prompt: "What is a '1x non-participating' liquidation preference?",
        options: [
          "The investor takes the greater of their preference amount or their as-converted equity value — the founder-friendly standard",
          "The investor first takes their money back, then also participates in the remaining proceeds",
          "The investor's preference is reduced by 1x for each down-round that occurs",
          "The investor receives 1% of exit proceeds per year of hold regardless of equity value"
        ],
        correctIndex: 0,
        explanation: "1x non-participating means the investor takes the greater of their preference or their as-converted equity value — the common, founder-friendly standard."
      },
      {
        type: "mcq",
        id: "u12-q14",
        prompt: "How does a 'participating preferred' liquidation preference differ from a non-participating one?",
        options: [
          "Participating preferred takes its money back AND then shares the remaining proceeds with common shareholders",
          "Participating preferred only gets its money back if the company is sold above a set threshold",
          "Participating preferred converts automatically to common at IPO with no preference",
          "Participating preferred takes the greater of preference or as-converted value, same as non-participating"
        ],
        correctIndex: 0,
        explanation: "Participating preferred takes its money back first and then participates in the remaining proceeds alongside common — more aggressive than non-participating."
      },
      {
        type: "mcq",
        id: "u12-q15",
        prompt: "Broad-based weighted-average anti-dilution is described as:",
        options: [
          "The normal, investor-friendly standard that partially adjusts the conversion price in a down-round",
          "An aggressive mechanism that resets the investor's price fully to the new lower round price",
          "A mechanism that protects founders from dilution in any subsequent funding round",
          "A clause that prevents the option pool from being expanded without investor consent"
        ],
        correctIndex: 0,
        explanation: "Broad-based weighted-average anti-dilution is the normal standard; full ratchet (which resets the price fully to the down-round price) is aggressive."
      },
      {
        type: "trueFalse",
        id: "u12-q16",
        statement: "Full ratchet anti-dilution is described as the founder-friendly, standard approach to down-round protection.",
        isTrue: false,
        explanation: "Full ratchet is described as aggressive. Broad-based weighted-average is the normal standard and is less punishing to founders in a down-round."
      },
      {
        type: "mcq",
        id: "u12-q16b",
        prompt: "Pro-rata rights give investors:",
        options: [
          "The right to invest in future rounds to maintain their ownership percentage",
          "The right to receive their investment back before common shareholders on exit",
          "Protection against a lower valuation in a subsequent round",
          "Board representation proportional to their ownership stake"
        ],
        correctIndex: 0,
        explanation: "Pro-rata rights give an investor the right to invest in future rounds to maintain their ownership percentage."
      },

      // --- Watch out ---
      {
        type: "mcq",
        id: "u12-q17",
        prompt: "The manual's 'Watch out' warns that a high pre-money valuation may not mean good economics. Which combination is flagged as potentially leaving founders worse off?",
        options: [
          "A high pre-money paired with a participating preference, a full ratchet, or a large pre-money option pool",
          "A low pre-money with a 1x non-participating preference and broad-based weighted-average anti-dilution",
          "A secondary transaction with no option pool and pro-rata rights for existing investors",
          "A primary raise with preferred shares and a standard information-rights clause"
        ],
        correctIndex: 0,
        explanation: "The Watch Out: headline valuation is not the same as economics. A high pre-money paired with a participating preference, a full ratchet, or a large pre-money option pool can leave founders worse off than a lower, cleaner offer."
      },
      {
        type: "mcq",
        id: "u12-q18",
        prompt: "The manual advises founders and analysts to model the exit waterfall rather than just ownership %. This is because:",
        options: [
          "A participating preference or full ratchet can change effective economics even when ownership % looks attractive",
          "Ownership % is not a legally binding measure in the SPA",
          "The VDR contains the definitive cap table that supersedes any model",
          "Exit waterfalls are required by ASIC for all growth equity transactions"
        ],
        correctIndex: 0,
        explanation: "Always model the exit waterfall, not just ownership %, because a participating preference or full ratchet can dramatically change the effective split of proceeds at exit."
      },

      // --- Matching ---
      {
        type: "matching",
        id: "u12-q19",
        prompt: "Match each growth equity term to its definition.",
        pairs: [
          { left: "Anti-dilution", right: "Protects investors if a later round prices below their entry" },
          { left: "SAFE / convertible", right: "Early-stage instrument converting to equity at a later priced round" },
          { left: "Liquidation preference", right: "Preferred return paid before common shareholders on an exit" },
          { left: "Pro-rata rights", right: "Right to invest in future rounds to maintain ownership percentage" }
        ],
        explanation: "These four terms are the core economic and control mechanisms in a growth equity term sheet."
      },

      // --- wordBank: growth equity definition ---
      {
        type: "wordBank",
        id: "u12-q20",
        prompt: "Complete the definition: 'Growth equity sits between ___ and ___: minority investments in companies with ___ models that need capital to scale.'",
        answerTokens: ["venture", "and", "buyout", "proven"],
        distractors: ["debt", "control", "early-stage", "public", "majority"],
        explanation: "Growth equity sits between venture and buyout: minority investments in companies with proven models that need capital to scale."
      },

      // --- Writing: Practice today ---
      {
        type: "writing",
        id: "u12-q21",
        prompt: "Build a cap table showing a primary raise with an option-pool top-up, then explain how a participating preference changes proceeds at a sample exit value.",
        modelAnswer: "Start with the pre-round cap table showing founder shares and any existing investor shares. Add the option pool top-up pre-money (diluting all existing holders), then add the new investor shares at the negotiated price. The post-round cap table shows each party's updated ownership %. At a sample exit (say $150m), a non-participating preferred investor takes the greater of their 1x preference or their as-converted value. A participating preferred investor takes their preference back first, then shares the remainder with common — resulting in more proceeds to the investor and less to founders at moderate exit values. Always model multiple exit scenarios to show where the preference bites.",
        keyPoints: [
          "Option-pool top-up is created pre-money, diluting founders before new investor comes in",
          "Post-money = pre-money + new investment; investor owns investment / post-money",
          "Non-participating preferred: investor takes greater of preference or as-converted value",
          "Participating preferred: investor takes preference back then shares remainder with common",
          "Model the full exit waterfall at multiple exit values — not just ownership %"
        ]
      },

      // --- Additional governance MCQ ---
      {
        type: "mcq",
        id: "u12-q22",
        prompt: "Which of the following are examples of governance / control terms in a growth equity deal?",
        options: [
          "Board seats, protective provisions, and information rights",
          "Post-money valuation, investor ownership %, and pre-money option pool",
          "EBITDA growth, multiple expansion, and deleveraging",
          "QoE, CDD, and legal diligence workstreams"
        ],
        correctIndex: 0,
        explanation: "Governance terms include board seats, protective provisions, and information rights — control mechanisms that matter as much as the economic terms."
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────────────────
  // Day 13 — Returns analysis (IRR / MOIC) & a light LBO
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 13,
    day: 13,
    title: "Returns analysis (IRR / MOIC) & a light LBO",
    subtitle: "Quantify returns and understand the levers that drive them.",
    questions: [
      // --- The two measures ---
      {
        type: "formula",
        id: "u13-q1",
        prompt: "Write the formula for MOIC (Multiple on Invested Capital).",
        accepted: [
          "MOIC=cashout/cashin",
          "MOIC=totalcashreturned/totalcashinvested",
          "MOIC = total cash returned / total cash invested",
          "MOIC=cashreturned/cashinvested",
          "MOIC = cash out / cash in",
          "multiple on invested capital = total cash returned / total cash invested"
        ],
        explanation: "MOIC = total cash returned / total cash invested. It is a simple total-return multiple, e.g. 2.5x."
      },
      {
        type: "mcq",
        id: "u13-q2",
        prompt: "IRR is best defined as:",
        options: [
          "The annualised rate that sets the investment's NPV to zero",
          "The ratio of total cash returned to total cash invested",
          "The exit EBITDA multiplied by the exit multiple",
          "The rate of debt repayment divided by initial equity invested"
        ],
        correctIndex: 0,
        explanation: "IRR = the annualised rate that sets the investment's NPV to zero. Unlike MOIC, it captures the time value of money."
      },
      {
        type: "mcq",
        id: "u13-q3",
        prompt: "How do MOIC and IRR differ in what they capture?",
        options: [
          "MOIC ignores timing; IRR captures it — a 3.0x in three years is a far higher IRR than a 3.0x in ten years",
          "IRR ignores timing; MOIC captures it — a 3.0x in three years gives the same MOIC as a 3.0x in ten years",
          "MOIC is annualised; IRR is a cumulative multiple",
          "They are mathematically equivalent and always tell the same story"
        ],
        correctIndex: 0,
        explanation: "MOIC ignores timing; IRR captures it. A 3.0x in three years is a far higher IRR than a 3.0x in ten years. Always read them together."
      },
      {
        type: "trueFalse",
        id: "u13-q4",
        statement: "A high IRR on a quick small flip and a high MOIC on a long hold tell different stories, which is why both measures should be read together.",
        isTrue: true,
        explanation: "The manual is explicit: always read MOIC and IRR together — a high IRR on a quick small flip and a high MOIC on a long hold tell different stories."
      },

      // --- LBO in outline: ordering ---
      {
        type: "ordering",
        id: "u13-q5",
        prompt: "Put the four pieces of an LBO model in their correct order.",
        correctOrder: [
          "Sources & uses",
          "Debt schedule",
          "Operating model",
          "Returns / exit"
        ],
        explanation: "The four LBO model pieces in order: (1) Sources & uses — how the deal is funded and what it pays for; (2) Debt schedule — tranches, interest, repayment; (3) Operating model — three-statement projection generating cash flow; (4) Returns / exit — exit EV, repay debt, equity proceeds, IRR and MOIC."
      },
      {
        type: "mcq",
        id: "u13-q6",
        prompt: "What does the 'Sources & uses' section of an LBO model show?",
        options: [
          "How the purchase is funded (equity + debt tranches) and what it pays for (equity purchase price, refinanced debt, fees)",
          "The exit enterprise value, remaining debt, and resulting equity proceeds for investors",
          "The three-statement projection that generates the free cash flow used to service debt",
          "The debt schedule including tranches, interest rates, mandatory repayment, and covenants"
        ],
        correctIndex: 0,
        explanation: "Sources & uses shows how the purchase is funded (equity + debt tranches) and what it pays for (equity purchase price, refinanced debt, fees)."
      },
      {
        type: "mcq",
        id: "u13-q7",
        prompt: "What is the role of the debt schedule in an LBO model?",
        options: [
          "It models the debt tranches, interest, mandatory and optional repayment, and covenants",
          "It shows the exit enterprise value and resulting equity proceeds",
          "It is the three-statement projection that generates operating cash flow",
          "It records how the acquisition is financed from equity and debt sources"
        ],
        correctIndex: 0,
        explanation: "The debt schedule models tranches (senior, mezzanine), interest, mandatory and optional repayment, and covenants."
      },
      {
        type: "mcq",
        id: "u13-q8",
        prompt: "In an LBO model, how is the exit enterprise value calculated?",
        options: [
          "Exit-year EBITDA multiplied by the exit multiple",
          "Total debt at exit multiplied by the interest coverage ratio",
          "Entry equity value plus cumulative free cash flow over the hold period",
          "Pre-money valuation plus total equity invested"
        ],
        correctIndex: 0,
        explanation: "Exit EV = exit-year EBITDA × exit multiple. Repaying remaining debt gives equity proceeds, which feed into IRR and MOIC."
      },

      // --- Worked example: fill-in-the-blanks ---
      {
        type: "fillBlank",
        id: "u13-q9",
        prompt: "Entry: EBITDA $50m at 9.0x entry multiple. The entry enterprise value (EV) is ___.",
        accepted: ["$450m", "450m", "450", "$450 million", "450 million", "$450,000,000"],
        explanation: "Entry EV = EBITDA × entry multiple = $50m × 9.0x = $450m."
      },
      {
        type: "fillBlank",
        id: "u13-q10",
        prompt: "After 5 years EBITDA grows to $75m. At an exit multiple of 9.0x, the exit enterprise value is ___.",
        accepted: ["$675m", "675m", "675", "$675 million", "675 million", "$675,000,000"],
        explanation: "Exit EV = exit EBITDA × exit multiple = $75m × 9.0x = $675m."
      },
      {
        type: "fillBlank",
        id: "u13-q11",
        prompt: "At exit, the EV is $675m and debt has been repaid from $250m to $150m. The equity proceeds to investors are ___.",
        accepted: ["$525m", "525m", "525", "$525 million", "525 million", "$525,000,000"],
        explanation: "Exit equity = exit EV − remaining debt = $675m − $150m = $525m."
      },
      {
        type: "fillBlank",
        id: "u13-q12",
        prompt: "Investors put in $200m equity at entry and receive $525m at exit. The MOIC is ___.",
        accepted: ["2.6x", "2.6", "2.63x", "2.625x", "525/200"],
        explanation: "MOIC = cash out / cash in = $525m / $200m = 2.625x, approximately 2.6x."
      },

      // --- Value-creation bridge ---
      {
        type: "mcq",
        id: "u13-q13",
        prompt: "Which of the four value-creation levers is described as the most sustainable driver of LBO returns?",
        options: [
          "EBITDA growth (growing revenue and margins)",
          "Multiple expansion (selling at a higher multiple than entry)",
          "Deleveraging (paying down debt)",
          "Free cash flow / dividends (cash returned during the hold)"
        ],
        correctIndex: 0,
        explanation: "EBITDA growth is described as the most sustainable driver of returns. Multiple expansion is the least controllable, and relying on it alone is explicitly warned against."
      },
      {
        type: "mcq",
        id: "u13-q14",
        prompt: "Which value-creation lever is described as 'least controllable' and something investors should never rely on?",
        options: [
          "Multiple expansion",
          "EBITDA growth",
          "Deleveraging",
          "Free cash flow / dividends"
        ],
        correctIndex: 0,
        explanation: "Multiple expansion — selling at a higher multiple than entry — is the least controllable lever and should never be relied upon as a primary return driver."
      },
      {
        type: "mcq",
        id: "u13-q15",
        prompt: "How does deleveraging create value in an LBO?",
        options: [
          "By paying down debt, more of the exit enterprise value accrues to equity investors",
          "By increasing the exit EBITDA multiple through sector re-rating",
          "By growing revenue and margins to expand absolute EBITDA",
          "By distributing free cash flow as dividends during the hold period"
        ],
        correctIndex: 0,
        explanation: "Deleveraging creates value by paying down debt so that more of the exit enterprise value accrues to equity — the same exit EV translates to higher equity proceeds."
      },
      {
        type: "trueFalse",
        id: "u13-q16",
        statement: "The value-creation bridge decomposes LBO returns into: EBITDA growth, multiple expansion, deleveraging, and free cash flow / dividends.",
        isTrue: true,
        explanation: "The manual identifies exactly these four levers as the value-creation bridge — a framework for decomposing where returns came from."
      },

      // --- Growth equity vs buyout ---
      {
        type: "mcq",
        id: "u13-q17",
        prompt: "How do growth equity returns differ from classic LBO returns in terms of value-creation levers?",
        options: [
          "Growth equity uses little or no leverage, so returns lean almost entirely on EBITDA/revenue growth and multiple expansion",
          "Growth equity relies heavily on deleveraging as the primary return driver, with minimal revenue growth expected",
          "LBO returns come entirely from EBITDA growth; growth equity relies on financial engineering",
          "They are identical — both use the same mix of EBITDA growth, multiple expansion, deleveraging, and dividends"
        ],
        correctIndex: 0,
        explanation: "Growth equity deals use little or no leverage, so returns lean almost entirely on EBITDA/revenue growth and (hopefully) multiple expansion — closer to Privatus's investing style than a classic high-leverage buyout."
      },
      {
        type: "trueFalse",
        id: "u13-q18",
        statement: "Management incentive schemes such as sweet equity and ratchets are used in growth equity to align the management team to the same outcome as investors.",
        isTrue: true,
        explanation: "The manual notes that management incentives (sweet equity, ratchets) align the team to the same outcome as investors in growth equity situations."
      },

      // --- Matching: IRR/MOIC and GP/LP ---
      {
        type: "matching",
        id: "u13-q19",
        prompt: "Match each term to its correct definition.",
        pairs: [
          { left: "MOIC", right: "Total cash returned divided by total cash invested — a cumulative return multiple" },
          { left: "IRR", right: "The annualised rate that sets the investment's NPV to zero — captures timing" },
          { left: "GP", right: "General Partner — manages the fund" },
          { left: "LP", right: "Limited Partner — provides capital to the fund" }
        ],
        explanation: "MOIC and IRR are the two complementary return measures. GP/LP describes the fund structure in private equity."
      },

      // --- wordBank: MOIC definition ---
      {
        type: "wordBank",
        id: "u13-q20",
        prompt: "Build the definition: 'MOIC = total cash ___ divided by total cash ___.'",
        answerTokens: ["returned", "divided", "by", "total", "cash", "invested"],
        distractors: ["annualised", "NPV", "discounted", "IRR", "multiple"],
        explanation: "MOIC = total cash returned / total cash invested. It is a simple cumulative multiple that ignores the timing of cash flows."
      },

      // --- LBO overview MCQ ---
      {
        type: "mcq",
        id: "u13-q21",
        prompt: "In a leveraged buyout, how does the investor typically generate equity returns during the hold period?",
        options: [
          "By using the company's cash flow to service and repay debt, growing the business, and exiting later",
          "By issuing additional preferred shares to existing investors at a higher valuation each year",
          "By converting the acquisition debt to equity at a predetermined conversion price",
          "By distributing the full purchase price back to investors through dividends in year one"
        ],
        correctIndex: 0,
        explanation: "In an LBO, the investor acquires a company using equity plus debt, uses the company's cash flow to service and repay the debt, grows the business, and exits later for equity proceeds."
      },

      // --- Writing: Practice today ---
      {
        type: "writing",
        id: "u13-q22",
        prompt: "Build a one-page returns model: entry multiple and leverage, a simple EBITDA growth path, debt paydown, exit multiple — then explain what IRR and MOIC each tell you, and how you would decompose the value-creation bridge.",
        modelAnswer: "A one-page returns model starts with entry: EBITDA × entry multiple = entry EV, then splits EV into debt and equity. The operating model projects EBITDA growth year by year; the debt schedule shows mandatory repayment reducing debt each year. At exit, exit EV = exit-year EBITDA × exit multiple; equity = exit EV minus remaining debt. MOIC = exit equity / entry equity (e.g. 2.6x); IRR is the annualised rate on those cash flows (e.g. 21% over 5 years). To decompose the value-creation bridge: attribute returns to (1) EBITDA growth — the change in EBITDA times the exit multiple; (2) multiple expansion — change in multiple times exit EBITDA; (3) deleveraging — the debt paid down; (4) FCF/dividends — cash returned during hold. Sensitise on entry leverage and exit multiple to show how much each lever contributes.",
        keyPoints: [
          "Entry EV = EBITDA × entry multiple; split into debt and equity",
          "Exit EV = exit-year EBITDA × exit multiple; equity = exit EV minus remaining debt",
          "MOIC = exit equity / entry equity; IRR is the annualised equivalent capturing timing",
          "Value-creation bridge decomposes returns into EBITDA growth, multiple expansion, deleveraging, and FCF",
          "EBITDA growth is most sustainable; multiple expansion is least controllable — never rely on it"
        ]
      },

      // --- IRR approximation from worked example ---
      {
        type: "fillBlank",
        id: "u13-q23",
        prompt: "In the manual's worked example (entry equity $200m, exit equity $525m after 5 years), the approximate IRR is ___.",
        accepted: ["21%", "21", "~21%", "approximately 21%", "circa 21%"],
        explanation: "The manual states IRR ≈ 21% for a 2.625x MOIC over 5 years. This reflects the annualised return that sets the NPV of the cash flows to zero."
      }
    ]
  }
];
