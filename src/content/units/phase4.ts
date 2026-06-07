import type { Unit } from '../types';

export const unitsPhase4: Unit[] = [
  {
    id: 14,
    day: 14,
    title: "Growth-investing frameworks",
    subtitle: "Judge whether a company deserves capital, beyond the model.",
    questions: [
      // q1 — matching: TAM / SAM / SOM glossary
      {
        type: "matching",
        id: "u14-q1",
        prompt: "Match each market-sizing term to its definition.",
        pairs: [
          { left: "TAM", right: "Total Addressable Market — the full prize if 100% share were won" },
          { left: "SAM", right: "Serviceable Available Market — the portion the company can realistically serve" },
          { left: "SOM", right: "Serviceable Obtainable Market — the share the company can actually win near-term" },
        ],
        explanation: "TAM > SAM > SOM. TAM is the total opportunity; SAM is the slice addressable by the business model; SOM is the realistic near-term capture.",
      },

      // q2 — ordering: TAM -> SAM -> SOM largest to obtainable
      {
        type: "ordering",
        id: "u14-q2",
        prompt: "Order these market-sizing concepts from the largest (total universe) down to the most obtainable near-term estimate.",
        correctOrder: [
          "TAM — Total Addressable Market",
          "SAM — Serviceable Available Market",
          "SOM — Serviceable Obtainable Market",
        ],
        explanation: "TAM is always the biggest number; SAM narrows it to what the business model can serve; SOM is the realistic near-term capture. Each step filters down.",
      },

      // q3 — mcq: build market sizing bottom-up vs top-down
      {
        type: "mcq",
        id: "u14-q3",
        prompt: "When building a market-sizing estimate, the manual recommends using a bottom-up approach where possible. What does this mean?",
        options: [
          "Taking the broadest industry report figure and applying a market-share guess",
          "Building the estimate from units times price rather than starting from a macro figure",
          "Sizing only the SOM and ignoring the TAM",
          "Using analyst consensus as the primary data source",
        ],
        correctIndex: 1,
        explanation: "The manual says to build market size bottom-up (units × price) where possible, not just top-down from macro reports.",
      },

      // q4 — fillBlank: LTV/CAC ratio
      {
        type: "fillBlank",
        id: "u14-q4",
        prompt: "A healthy LTV/CAC ratio is often cited around ___, signalling scalable economics.",
        accepted: ["3x", "3", "3x+", "around 3x", "3x or more", "3 or more"],
        explanation: "The manual states a healthy LTV/CAC ratio is often cited around 3x+, signalling that the lifetime value of a customer substantially exceeds the cost to acquire them.",
      },

      // q5 — matching: unit economics terms
      {
        type: "matching",
        id: "u14-q5",
        prompt: "Match each unit-economics term to its meaning.",
        pairs: [
          { left: "LTV / CAC", right: "Customer lifetime value versus acquisition cost" },
          { left: "Payback period", right: "Months to recover the customer acquisition cost" },
          { left: "Contribution margin", right: "Revenue minus variable cost per unit" },
          { left: "Net revenue retention", right: "Revenue from existing customers over time, including expansion" },
        ],
        explanation: "These four metrics together give a full picture of the economics of acquiring and retaining a customer.",
      },

      // q6 — trueFalse: payback period
      {
        type: "trueFalse",
        id: "u14-q6",
        statement: "A shorter payback period is better because it means growth funds itself faster.",
        isTrue: true,
        explanation: "The manual states that a shorter payback period means growth funds itself faster — the business does not need to keep raising external capital to finance customer acquisition.",
      },

      // q7 — fillBlank: net revenue retention threshold
      {
        type: "fillBlank",
        id: "u14-q7",
        prompt: "Net revenue retention above ___% means the base grows even without new customers — a powerful signal.",
        accepted: ["100", "100%", "one hundred", "one hundred percent"],
        explanation: "When NRR exceeds 100%, existing customers expand their spend faster than any churn, so revenue grows from the installed base alone.",
      },

      // q8 — wordBank: net revenue retention definition
      {
        type: "wordBank",
        id: "u14-q8",
        prompt: "Build the definition: Net revenue retention is revenue from ___ customers over time including ___; above 100% means the base ___ even without ___ customers.",
        answerTokens: ["existing", "expansion", "grows", "new"],
        distractors: ["churned", "acquired", "declines", "institutional", "potential", "lost"],
        explanation: "NRR tracks only the existing cohort of customers and measures whether their collective revenue (net of churn, plus upsell/cross-sell) rises or falls.",
      },

      // q9 — trueFalse: contribution margin
      {
        type: "trueFalse",
        id: "u14-q9",
        statement: "Contribution margin is calculated as revenue minus total fixed costs per unit.",
        isTrue: false,
        explanation: "Contribution margin is revenue minus variable cost per unit — fixed costs are excluded. It measures the per-unit engine of operating leverage.",
      },

      // q10 — mcq: cohort and retention analysis purpose
      {
        type: "mcq",
        id: "u14-q10",
        prompt: "Why does tracking customers by cohort (the period they joined) provide a better picture than headline growth numbers?",
        options: [
          "Cohorts let you compare companies across different industries more easily",
          "Cohorts reveal whether the business truly retains and expands users, or masks churn with new-customer growth",
          "Cohorts simplify accounting for stock-based compensation",
          "Cohorts replace the need for LTV/CAC analysis",
        ],
        correctIndex: 1,
        explanation: "The manual says cohort analysis cuts through headline growth — it shows whether underlying retention is strong or whether new-customer inflows are hiding a churn problem.",
      },

      // q11 — formula: Rule of 40
      {
        type: "formula",
        id: "u14-q11",
        prompt: "Write the Rule of 40 formula for software businesses.",
        accepted: [
          "revenue growth % + profit margin % >= 40",
          "revenue growth % + profit margin % >= 40%",
          "revenue growth % + FCF margin % >= 40",
          "revenue growth % + margin % >= 40",
          "growth % + margin % >= 40",
          "revenue growth + profit margin >= 40",
          "revenue growth% + profit (or FCF) margin% >= 40",
        ],
        explanation: "Rule of 40 = revenue growth % + profit (or FCF) margin % >= 40. It is a quick health check: fast growth can justify thin margins and vice versa, but the sum should clear ~40%.",
      },

      // q12 — trueFalse: Rule of 40 applies to all industries
      {
        type: "trueFalse",
        id: "u14-q12",
        statement: "The Rule of 40 is a universal benchmark applicable to every industry, not just software.",
        isTrue: false,
        explanation: "The manual explicitly describes the Rule of 40 as a software heuristic. It is most relevant to software-type businesses where growth and margin trade off in predictable ways.",
      },

      // q13 — mcq: Rule of 40 interpretation
      {
        type: "mcq",
        id: "u14-q13",
        prompt: "A software company grows revenue at 50% year-on-year but has a -15% FCF margin. What does the Rule of 40 say about this company?",
        options: [
          "It fails the Rule of 40 because the margin is negative",
          "It passes the Rule of 40 because 50% - 15% = 35%, which is below 40%",
          "It passes the Rule of 40 because 50% + (-15%) = 35%, which is just below 40%",
          "It passes the Rule of 40 because revenue growth alone exceeds 40%",
        ],
        correctIndex: 2,
        explanation: "50% growth + (−15%) margin = 35%, which is below the 40% threshold. The company does not pass the Rule of 40 on these numbers.",
      },

      // q14 — matching: moat types
      {
        type: "matching",
        id: "u14-q14",
        prompt: "Match each moat type to a brief description.",
        pairs: [
          { left: "Network effects", right: "The product becomes more valuable as more users join" },
          { left: "Switching costs", right: "Customers find it costly or disruptive to leave" },
          { left: "Proprietary data / IP", right: "Unique data sets or intellectual property competitors cannot easily replicate" },
          { left: "Scale economies", right: "Cost advantages that grow with volume" },
          { left: "Brand", right: "Reputation that commands customer preference or a price premium" },
        ],
        explanation: "The manual lists these five moat types as the key sources of competitive protection: network effects, high switching costs, proprietary data/IP, scale economies, and brand.",
      },

      // q15 — mcq: management in growth deals
      {
        type: "mcq",
        id: "u14-q15",
        prompt: "According to the manual, what role does management play in growth-stage deals?",
        options: [
          "Management is secondary to financial model accuracy",
          "Execution capability is often the deciding factor; track record, depth, and alignment matter most",
          "Management only matters after the investment has been made",
          "Management assessment is the lead investor's job, not the co-investor's",
        ],
        correctIndex: 1,
        explanation: "The manual states that in growth deals, execution capability is often the deciding factor, and that assessing track record, depth, and alignment is key.",
      },

      // q16 — wordBank: moat definition
      {
        type: "wordBank",
        id: "u14-q16",
        prompt: "Complete the definition: A moat is what ___ returns — examples include network ___, high switching ___, proprietary ___, scale economies, and brand.",
        answerTokens: ["protects", "effects", "costs", "data/IP"],
        distractors: ["increases", "network reach", "barriers", "technology stack", "pricing power", "market share"],
        explanation: "Moats are durable competitive advantages that protect returns. The manual names five: network effects, switching costs, proprietary data/IP, scale economies, and brand.",
      },

      // q17 — mcq: co-investment model
      {
        type: "mcq",
        id: "u14-q17",
        prompt: "Through which entity does Privatus co-invest alongside a lead investor into global growth companies?",
        options: [
          "Immutable Capital",
          "Princeville Global",
          "DayOne Ventures",
          "Trendyol Group",
        ],
        correctIndex: 1,
        explanation: "The manual states that through Princeville Global, Privatus co-invests alongside a lead investor into global growth names.",
      },

      // q18 — mcq: co-investment portfolio companies
      {
        type: "mcq",
        id: "u14-q18",
        prompt: "Which of the following is NOT listed in the manual as a Princeville portfolio company that Privatus has co-invested in?",
        options: [
          "Immutable",
          "SmartNews",
          "Trendyol",
          "Viridios",
        ],
        correctIndex: 3,
        explanation: "The manual lists Immutable, SmartNews, Trendyol, and DayOne as Princeville portfolio companies. Viridios is a Privatus direct ESG investment, not a Princeville co-investment.",
      },

      // q19 — trueFalse: co-investment economics
      {
        type: "trueFalse",
        id: "u14-q19",
        statement: "When co-investing behind a lead investor, Privatus simply relies entirely on the lead's analysis and does not need to form an independent view.",
        isTrue: false,
        explanation: "The manual says co-investing means leveraging the lead's diligence and access WHILE forming an independent view — a crisp, self-standing one-page thesis is genuinely useful.",
      },

      // q20 — mcq: co-investment one-page thesis
      {
        type: "mcq",
        id: "u14-q20",
        prompt: "According to the manual, what makes a one-page investment thesis useful in a co-investment context?",
        options: [
          "It summarises the lead investor's materials into a shorter format",
          "It is crisp and self-standing, reflecting an independent view formed alongside the lead's diligence",
          "It focuses exclusively on financial modelling outputs",
          "It replaces the need to understand deal economics such as fees and carry",
        ],
        correctIndex: 1,
        explanation: "The manual says a crisp, self-standing one-page thesis is genuinely useful because Privatus must form an independent view even while leveraging the lead's diligence.",
      },

      // q21 — mcq: co-investment economics to understand
      {
        type: "mcq",
        id: "u14-q21",
        prompt: "When investing behind a lead, the manual highlights that you must understand which aspects of co-investment economics?",
        options: [
          "Revenue multiples and EBITDA margins only",
          "Fees/carry, information rights, and minority-protection rights",
          "The lead investor's fund size and vintage year",
          "The company's Rule of 40 score",
        ],
        correctIndex: 1,
        explanation: "The manual specifies that a co-investor must understand the economics: fees/carry, information rights, and minority-protection rights of investing behind a lead.",
      },

      // q22 — writing: Day 14 practice task
      {
        type: "writing",
        id: "u14-q22",
        prompt: "Write a one-page investment thesis on one Princeville portfolio company (e.g. Immutable, SmartNews, Trendyol, or DayOne). Cover: market size, unit economics, moat, management, key risks, and your verdict. Use only public information.",
        modelAnswer: "A strong thesis names the company and frames the market opportunity with a TAM/SAM/SOM breakdown built bottom-up. It then addresses unit economics (LTV/CAC, payback period, NRR if applicable) to show scalability. The moat section identifies the durable competitive advantage — for example, network effects or proprietary data. Management is assessed on track record and alignment. Key risks are specific (not generic) and the verdict is a clear buy/pass with a rationale tied to the evidence above.",
        keyPoints: [
          "Market sized with TAM/SAM/SOM, preferably bottom-up",
          "Unit economics discussed (LTV/CAC, payback period, NRR where relevant)",
          "Moat clearly identified and defended (network effects, switching costs, data/IP, scale, brand)",
          "Management assessed on track record, depth, and alignment",
          "Specific key risks named and verdict given",
        ],
      },

      // q23 — trueFalse: bottom-up vs top-down sizing
      {
        type: "trueFalse",
        id: "u14-q23",
        statement: "The manual prefers top-down market sizing (e.g. applying a percentage to a macro industry figure) over bottom-up (units × price) wherever possible.",
        isTrue: false,
        explanation: "The manual explicitly says to build market size bottom-up (units × price) where you can, rather than relying on top-down macro figures.",
      },
    ],
  },

  {
    id: 15,
    day: 15,
    title: "ESG & the B-Corp angle",
    subtitle: "Treat ESG as a value and risk lens, not a compliance box — it's core to this firm.",
    questions: [
      // q1 — mcq: B Lab
      {
        type: "mcq",
        id: "u15-q1",
        prompt: "Which organisation assesses and certifies B Corporations?",
        options: [
          "The Global Reporting Initiative (GRI)",
          "The non-profit B Lab",
          "SFDR's governing body under the EU Commission",
          "SASB Standards Board",
        ],
        correctIndex: 1,
        explanation: "The manual states that a certified B Corporation has been assessed by the non-profit B Lab against verified standards.",
      },

      // q2 — mcq: B Impact Assessment
      {
        type: "mcq",
        id: "u15-q2",
        prompt: "What is the name of the assessment tool B Lab uses to certify B Corporations?",
        options: [
          "ESG Impact Score",
          "B Impact Assessment",
          "Sustainability Accounting Standards Review",
          "TCFD Disclosure Audit",
        ],
        correctIndex: 1,
        explanation: "The manual specifies the B Impact Assessment as the tool B Lab uses, covering social and environmental performance, accountability, and transparency.",
      },

      // q3 — trueFalse: B Corp recertification
      {
        type: "trueFalse",
        id: "u15-q3",
        statement: "A B Corp certification is permanent once awarded — companies do not need to re-certify.",
        isTrue: false,
        explanation: "The manual states that certified B Corporations must re-certify periodically — it is an ongoing commitment, not a one-time award.",
      },

      // q4 — mcq: B Corp vs benefit corporation
      {
        type: "mcq",
        id: "u15-q4",
        prompt: "How does a 'B Corp' differ from a 'benefit corporation'?",
        options: [
          "They are interchangeable terms for the same concept",
          "A B Corp is a certification by B Lab; a benefit corporation is a legal company form",
          "A benefit corporation is certified; a B Corp is a self-declared status",
          "A B Corp applies only to US companies; a benefit corporation is the global equivalent",
        ],
        correctIndex: 1,
        explanation: "The manual draws a clear distinction: B Corp is a certification granted by the non-profit B Lab; a benefit corporation is a legal form of company. They are separate concepts.",
      },

      // q5 — wordBank: B Corp definition
      {
        type: "wordBank",
        id: "u15-q5",
        prompt: "Build the sentence: A certified B Corporation has been assessed by the non-profit ___ against verified standards via the B ___ Assessment, and must ___ periodically.",
        answerTokens: ["B Lab", "Impact", "re-certify"],
        distractors: ["GRI", "ESG", "SASB", "renew", "report", "disclose"],
        explanation: "B Lab runs the B Impact Assessment, which measures social and environmental performance, accountability, and transparency. Re-certification is required periodically.",
      },

      // q6 — ordering: ESG integration approaches by intensity
      {
        type: "ordering",
        id: "u15-q6",
        prompt: "Order these ESG investment approaches from least to most active engagement with ESG outcomes.",
        correctOrder: [
          "Screening — excluding certain activities",
          "Integration — building material ESG factors into valuation and risk",
          "Impact / additionality — seeking measurable positive outcomes caused by the capital",
        ],
        explanation: "Screening is the most passive (exclude bad actors). Integration actively incorporates ESG into analysis. Impact/additionality goes furthest by asking whether the capital itself causes positive change.",
      },

      // q7 — mcq: ESG screening
      {
        type: "mcq",
        id: "u15-q7",
        prompt: "In an ESG investing context, 'screening' refers to which approach?",
        options: [
          "Building material ESG factors into valuation as you would any other driver",
          "Seeking measurable positive outcomes and asking whether capital causes them",
          "Excluding investments in certain activities or sectors",
          "Disclosing ESG metrics under regulatory frameworks like SFDR",
        ],
        correctIndex: 2,
        explanation: "The manual defines screening as excluding certain activities — the most basic ESG approach.",
      },

      // q8 — mcq: ESG integration
      {
        type: "mcq",
        id: "u15-q8",
        prompt: "The manual defines ESG 'integration' as:",
        options: [
          "Excluding companies with poor ESG scores from the portfolio",
          "Publishing an annual sustainability report aligned to GRI standards",
          "Building material ESG factors into valuation and risk like any other driver",
          "Donating a portion of management fees to charitable causes",
        ],
        correctIndex: 2,
        explanation: "Integration means treating material ESG factors as inputs to valuation and risk analysis — the same analytical rigour applied to any financial driver.",
      },

      // q9 — mcq: additionality
      {
        type: "mcq",
        id: "u15-q9",
        prompt: "The concept of 'additionality' in impact investing asks which key question?",
        options: [
          "Does the company disclose its ESG metrics to a recognised framework?",
          "Does the capital actually cause the measurable positive outcome?",
          "Is the ESG score above the industry median?",
          "Has the company been certified by a third party?",
        ],
        correctIndex: 1,
        explanation: "Additionality asks whether the capital itself causes measurable positive outcomes — not merely whether good things happen in proximity to the investment.",
      },

      // q10 — matching: ESG frameworks
      {
        type: "matching",
        id: "u15-q10",
        prompt: "Match each ESG/reporting framework to its focus.",
        pairs: [
          { left: "SASB", right: "Industry-specific materiality lens for what affects value" },
          { left: "GRI", right: "Broad sustainability reporting across environmental, social and governance topics" },
          { left: "TCFD", right: "Climate-related financial disclosure" },
          { left: "SFDR", right: "EU fund-level sustainability classification" },
        ],
        explanation: "SASB focuses on material, industry-specific issues; GRI covers broad sustainability reporting; TCFD is climate-specific financial disclosure; SFDR classifies EU funds by sustainability level.",
      },

      // q11 — mcq: materiality
      {
        type: "mcq",
        id: "u15-q11",
        prompt: "Why does materiality matter in ESG analysis?",
        options: [
          "It ensures every ESG issue is weighted equally across all industries",
          "It allows firms to ignore environmental issues and focus only on governance",
          "It focuses attention on the ESG issues that actually affect value for a specific business or industry",
          "It is a regulatory requirement under SFDR for all EU funds",
        ],
        correctIndex: 2,
        explanation: "The manual notes that not every ESG issue matters for every business — materiality (e.g. SASB's industry lens) focuses attention on what actually affects value.",
      },

      // q12 — trueFalse: ESG as value driver
      {
        type: "trueFalse",
        id: "u15-q12",
        statement: "Strong ESG can lower operating and regulatory risk, widen the eventual buyer pool, and support a premium at exit.",
        isTrue: true,
        explanation: "The manual explicitly states all three benefits: lower operating/regulatory risk, a wider buyer pool, and a premium at exit. Weak ESG is increasingly a discount or deal-breaker.",
      },

      // q13 — mcq: ESG as value not cost
      {
        type: "mcq",
        id: "u15-q13",
        prompt: "How does the manual say ESG factors should be expressed in investment analysis?",
        options: [
          "As a separate qualitative section that does not affect the financial model",
          "As inputs to a value or risk judgement — the same way you would treat customer concentration",
          "As a pass/fail compliance checklist before proceeding to valuation",
          "As a discount to the terminal value only",
        ],
        correctIndex: 1,
        explanation: "The manual says the discipline is to express ESG factors as inputs to a value or risk judgement — the same way you would treat any other driver like customer concentration.",
      },

      // q14 — mcq: greenwashing watch-out (spot-the-error)
      {
        type: "mcq",
        id: "u15-q14",
        prompt: "A company's investor deck states: 'We are committed to a green future and sustainability leadership.' There are no supporting metrics or data. According to the manual's Watch Out, this is best described as:",
        options: [
          "A credible ESG integration approach because the commitment is board-level",
          "An example of greenwashing — vague claims unsupported by specific, measurable data",
          "An acceptable Impact/additionality disclosure",
          "A TCFD-compliant climate disclosure",
        ],
        correctIndex: 1,
        explanation: "The manual warns to watch for greenwashing: claims unsupported by data. Credible ESG analysis is specific and measurable; vague 'green' narratives without metrics are a red flag.",
      },

      // q15 — trueFalse: greenwashing
      {
        type: "trueFalse",
        id: "u15-q15",
        statement: "According to the manual, vague 'green' narratives without supporting metrics are a selling point rather than a red flag.",
        isTrue: false,
        explanation: "The manual explicitly states vague 'green' narratives without metrics are a red flag, not a selling point. Credible ESG analysis must be specific and measurable.",
      },

      // q16 — mcq: Privatus ESG portfolio companies
      {
        type: "mcq",
        id: "u15-q16",
        prompt: "Which of the following is correctly described as a Privatus ESG investment focused on carbon-credit valuation analytics?",
        options: [
          "FairSupply",
          "Carbon Friendly",
          "Viridios",
          "Princeville Global",
        ],
        correctIndex: 2,
        explanation: "The manual describes Viridios as a carbon-credit valuation analytics company in the Privatus ESG portfolio.",
      },

      // q17 — matching: Privatus ESG investments
      {
        type: "matching",
        id: "u15-q17",
        prompt: "Match each Privatus ESG portfolio company to its focus.",
        pairs: [
          { left: "Viridios", right: "Carbon-credit valuation analytics" },
          { left: "FairSupply", right: "Supply-chain emissions and modern-slavery data" },
          { left: "Carbon Friendly", right: "ESG-focused company in the Privatus portfolio" },
        ],
        explanation: "The manual names all three as ESG investments Privatus has made: Viridios (carbon credits), FairSupply (supply chain ESG data), and Carbon Friendly.",
      },

      // q18 — trueFalse: B Corp and Privatus capital
      {
        type: "trueFalse",
        id: "u15-q18",
        statement: "The manual suggests Privatus's B Corp status is irrelevant to the family-office capital it manages.",
        isTrue: false,
        explanation: "The manual says B Corp status signals values to clients and to the family-office capital Privatus represents — it is directly relevant to the firm's capital relationships.",
      },

      // q19 — mcq: B Impact Assessment coverage
      {
        type: "mcq",
        id: "u15-q19",
        prompt: "The B Impact Assessment covers which areas?",
        options: [
          "Financial performance, leverage ratios, and return on equity",
          "Social and environmental performance, accountability, and transparency",
          "Carbon emissions, supply-chain data, and board diversity quotas",
          "TCFD scenario analysis and SFDR fund classification",
        ],
        correctIndex: 1,
        explanation: "The manual says the B Impact Assessment covers social and environmental performance, accountability, and transparency.",
      },

      // q20 — fillBlank: ESG weak rating impact
      {
        type: "fillBlank",
        id: "u15-q20",
        prompt: "According to the manual, weak ESG is increasingly a ___ or a deal-breaker at exit.",
        accepted: ["discount", "price discount", "valuation discount"],
        explanation: "The manual states: 'weak ESG is increasingly a discount or a deal-breaker.' Buyers apply haircuts or walk away when ESG risks are unmanaged.",
      },

      // q21 — wordBank: ESG three approaches
      {
        type: "wordBank",
        id: "u15-q21",
        prompt: "The three ESG investing approaches are: ___ (excluding activities), ___ (building ESG factors into valuation), and Impact / ___ (seeking measurable outcomes caused by the capital).",
        answerTokens: ["Screening", "Integration", "additionality"],
        distractors: ["Disclosure", "Reporting", "Classification", "measurement", "compliance", "certification"],
        explanation: "Screening excludes bad actors; Integration treats ESG as a financial input; Impact/additionality asks whether the capital itself causes positive change.",
      },

      // q22 — mcq: SFDR classification
      {
        type: "mcq",
        id: "u15-q22",
        prompt: "SFDR primarily applies to which type of entity?",
        options: [
          "Individual listed companies reporting carbon emissions",
          "EU funds, classifying them by sustainability level",
          "B Corporations seeking annual re-certification",
          "Supply-chain auditors verifying modern-slavery data",
        ],
        correctIndex: 1,
        explanation: "The manual describes SFDR as an EU fund-level sustainability classification framework.",
      },

      // q23 — writing: Day 15 practice task
      {
        type: "writing",
        id: "u15-q23",
        prompt: "Take one Privatus deal (e.g. Viridios, FairSupply, or Carbon Friendly) and write half a page on how an ESG lens creates or protects value in it, naming the specific, measurable factors that matter.",
        modelAnswer: "A strong answer names the specific company and identifies the material ESG factors relevant to its business model — for example, Viridios: the accuracy and credibility of carbon-credit valuations directly affect buyer willingness to pay and regulatory acceptance, so data quality and methodology are measurable value drivers. The answer explains how strong performance on those factors lowers risk (regulatory, reputational) and supports a premium at exit by widening the buyer pool to ESG-mandated investors. Vague claims are avoided; specific metrics (e.g. verification rates, data coverage) are referenced.",
        keyPoints: [
          "Specific company named and material ESG factors identified",
          "ESG factors linked to value creation or protection (not just compliance)",
          "Risk reduction explained (regulatory, reputational, or operational)",
          "Exit value impact discussed (buyer pool, premium or discount)",
          "Measurable factors cited, not vague green claims",
        ],
      },
    ],
  },

  {
    id: 16,
    day: 16,
    title: "APAC / ANZ market & regulatory context",
    subtitle: "Understand the market, the capital base and the rules the firm operates within.",
    questions: [
      // q1 — mcq: HNW and family office capital characteristics
      {
        type: "mcq",
        id: "u16-q1",
        prompt: "How does the manual characterise the capital from high-net-worth individuals and family offices that Privatus manages?",
        options: [
          "Short-term, return-maximising, and driven by formal mandates",
          "Patient, relationship-driven, often keen to co-invest directly, and aligned on values",
          "Institutional, index-driven, and focused on quarterly reporting",
          "Predominantly debt capital seeking fixed-income returns",
        ],
        correctIndex: 1,
        explanation: "The manual describes HNW and family office capital as patient, relationship-driven, often keen to co-invest directly, more bespoke, and more aligned on values than institutional LPs.",
      },

      // q2 — trueFalse: HNW vs institutional LP differences
      {
        type: "trueFalse",
        id: "u16-q2",
        statement: "Family office capital is reachable primarily through formal mandates rather than trust and track record.",
        isTrue: false,
        explanation: "The manual says family office capital is reachable through trust and track record rather than formal mandates — in contrast to institutional LPs.",
      },

      // q3 — mcq: B Corp fit with capital base
      {
        type: "mcq",
        id: "u16-q3",
        prompt: "According to the manual, why does Privatus's B Corp status fit with its HNW and family office capital base?",
        options: [
          "Because B Corp certification provides regulatory relief under AFSL",
          "Because HNW and family office LPs are more aligned on values, making B Corp status meaningful to them",
          "Because institutional LPs require B Corp certification before committing capital",
          "Because B Corp status lowers fund management fees under SFDR",
        ],
        correctIndex: 1,
        explanation: "The manual notes that family office capital is more aligned on values (hence the B Corp fit), differentiating it from typical institutional LP relationships.",
      },

      // q4 — mcq: Australia–Singapore corridor
      {
        type: "mcq",
        id: "u16-q4",
        prompt: "What role does Singapore play in the Australia–Singapore corridor described by the manual?",
        options: [
          "Singapore provides deal flow while Australia is the regional capital hub",
          "Singapore is the regional hub for capital, wealth management, and cross-border structuring",
          "Singapore provides regulatory oversight of Privatus's Australian operations",
          "Singapore is where FIRB reviews foreign acquisitions of Australian assets",
        ],
        correctIndex: 1,
        explanation: "The manual states that Singapore is the regional hub for capital, wealth management, and cross-border structuring; Australia provides deal flow and the firm's roots.",
      },

      // q5 — trueFalse: Australia-Singapore corridor themes
      {
        type: "trueFalse",
        id: "u16-q5",
        statement: "The manual highlights cross-border structuring, currency, and tax efficiency as recurring themes in the Australia–Singapore corridor.",
        isTrue: true,
        explanation: "The manual explicitly mentions cross-border structuring, currency, and tax efficiency as themes to expect in the Australia–Singapore corridor.",
      },

      // q6 — matching: regulators
      {
        type: "matching",
        id: "u16-q6",
        prompt: "Match each regulator or licence to its precise meaning from the manual.",
        pairs: [
          { left: "ASIC", right: "Australia's corporate and financial-services regulator" },
          { left: "AFSL", right: "Australian Financial Services Licence — authorises financial-services conduct in Australia" },
          { left: "FIRB", right: "Foreign Investment Review Board — screens significant foreign acquisitions of Australian assets" },
          { left: "MAS", right: "Monetary Authority of Singapore — regulates financial services in Singapore" },
        ],
        explanation: "All four definitions come directly from the manual's Day 16 regulators section. AFSL is issued by ASIC and is the firm's regulatory backbone in Australia.",
      },

      // q7 — mcq: ASIC
      {
        type: "mcq",
        id: "u16-q7",
        prompt: "What does ASIC stand for, and what is its role?",
        options: [
          "Australian Securities & Investment Corporation — manages sovereign wealth",
          "Australian Securities and Investments Commission — Australia's corporate and financial-services regulator",
          "Australian Structured Investment Committee — oversees PE fund structures",
          "ASEAN Securities and Investment Council — cross-border regulator for APAC",
        ],
        correctIndex: 1,
        explanation: "ASIC is the Australian Securities and Investments Commission — Australia's corporate and financial-services regulator, as stated in the manual.",
      },

      // q8 — fillBlank: AFSL issuer
      {
        type: "fillBlank",
        id: "u16-q8",
        prompt: "The Australian Financial Services Licence (AFSL) is issued by ___ and is the firm's regulatory backbone in Australia.",
        accepted: ["ASIC", "the Australian Securities and Investments Commission", "Australian Securities and Investments Commission"],
        explanation: "The manual states the AFSL is issued by ASIC and authorises financial-services conduct — it is the firm's regulatory backbone in Australia.",
      },

      // q9 — mcq: FIRB role in deals
      {
        type: "mcq",
        id: "u16-q9",
        prompt: "Why is FIRB relevant to inbound ANZ deals?",
        options: [
          "It sets the interest-rate policy that affects deal financing costs",
          "It screens significant foreign acquisitions, creating a live conditions-precedent and timing factor",
          "It issues the AFSL licence required to advise on Australian transactions",
          "It regulates financial services in Singapore for cross-border transactions",
        ],
        correctIndex: 1,
        explanation: "The manual describes FIRB as the Foreign Investment Review Board that screens significant foreign acquisitions — making it a live conditions-precedent and timing factor on inbound ANZ deals.",
      },

      // q10 — trueFalse: MAS jurisdiction
      {
        type: "trueFalse",
        id: "u16-q10",
        statement: "MAS (Monetary Authority of Singapore) is relevant to the Singapore office's financial-services activities.",
        isTrue: true,
        explanation: "The manual states MAS regulates financial services in Singapore and is relevant to the Singapore office's activities.",
      },

      // q11 — wordBank: FIRB definition
      {
        type: "wordBank",
        id: "u16-q11",
        prompt: "Build the definition: FIRB is Australia's Foreign Investment ___ Board, which ___ significant foreign ___ of Australian assets.",
        answerTokens: ["Review", "screens", "acquisitions"],
        distractors: ["Regulatory", "approves", "investments", "transactions", "Advisory", "monitors"],
        explanation: "FIRB — the Foreign Investment Review Board — screens (does not simply approve) significant foreign acquisitions; this creates a timing and conditions-precedent factor on deals.",
      },

      // q12 — mcq: ANZ sector themes
      {
        type: "mcq",
        id: "u16-q12",
        prompt: "Which of the following best represents the ANZ sector themes described in the manual?",
        options: [
          "Consumer retail, automotive, media, and traditional banking",
          "Resources/energy transition, healthcare and aged care, financial services/registry/infrastructure, and technology and climate",
          "Defence, aerospace, pharmaceuticals, and real estate",
          "Oil and gas, luxury goods, logistics, and insurance only",
        ],
        correctIndex: 1,
        explanation: "The manual lists: resources/energy transition, healthcare and aged care, financial services and registry/infrastructure, and a growing technology and climate sector as the ANZ deal landscape themes.",
      },

      // q13 — trueFalse: ANZ themes and Privatus overlap
      {
        type: "trueFalse",
        id: "u16-q13",
        statement: "The manual notes that ANZ sector themes overlap neatly with Privatus's existing investment book.",
        isTrue: true,
        explanation: "The manual explicitly says ANZ deal themes overlap neatly with Privatus's book — resources/energy transition, healthcare, financial services, and technology/climate all align.",
      },

      // q14 — mcq: difference HNW vs institutional LP
      {
        type: "mcq",
        id: "u16-q14",
        prompt: "Compared with institutional LPs, how does the manual describe the approach of HNW individuals and family offices?",
        options: [
          "More standardised, less personalised, and driven by quarterly benchmarks",
          "More bespoke, more aligned on values, and reachable through trust and track record",
          "More leveraged, using more debt capital in their investment structures",
          "More passive — they delegate all decisions to the GP without co-investing",
        ],
        correctIndex: 1,
        explanation: "The manual contrasts HNW/family office LPs with institutional LPs: they are more bespoke, more aligned on values, and are reached through trust and track record rather than formal mandates.",
      },

      // q15 — fillBlank: FIRB acronym
      {
        type: "fillBlank",
        id: "u16-q15",
        prompt: "FIRB stands for Foreign Investment ___ Board.",
        accepted: ["Review", "review"],
        explanation: "FIRB = Foreign Investment Review Board. It screens significant foreign acquisitions of Australian assets.",
      },

      // q16 — mcq: MAS
      {
        type: "mcq",
        id: "u16-q16",
        prompt: "MAS stands for:",
        options: [
          "Market Allocation Scheme",
          "Monetary Authority of Singapore",
          "Managed Asset Supervisor",
          "Multi-Asset Strategy framework",
        ],
        correctIndex: 1,
        explanation: "MAS is the Monetary Authority of Singapore, which regulates financial services in Singapore.",
      },

      // q17 — matching: glossary terms from Day 16 context
      {
        type: "matching",
        id: "u16-q17",
        prompt: "Match each glossary term to its meaning as relevant to Day 16.",
        pairs: [
          { left: "FIRB", right: "Australia's Foreign Investment Review Board, which screens foreign acquisitions" },
          { left: "GP / LP", right: "General Partner (manages the fund) / Limited Partner (provides capital)" },
        ],
        explanation: "FIRB and the GP/LP structure are both directly relevant to understanding the ANZ deal environment and how Privatus's capital base works.",
      },

      // q18 — mcq: Singapore regulatory body
      {
        type: "mcq",
        id: "u16-q18",
        prompt: "Which regulator is described as relevant to Privatus's Singapore office activities?",
        options: [
          "ASIC",
          "FIRB",
          "MAS",
          "AFSL",
        ],
        correctIndex: 2,
        explanation: "The manual identifies MAS (Monetary Authority of Singapore) as the regulator relevant to the Singapore office's activities. ASIC and AFSL apply to Australian operations; FIRB screens foreign acquisitions.",
      },

      // q19 — trueFalse: AFSL is the firm's backbone
      {
        type: "trueFalse",
        id: "u16-q19",
        statement: "The AFSL (Australian Financial Services Licence) is described as the firm's regulatory backbone in Australia.",
        isTrue: true,
        explanation: "The manual states exactly this: the AFSL authorises financial-services conduct and is the firm's regulatory backbone in Australia.",
      },

      // q20 — ordering: ASIC to AFSL relationship
      {
        type: "ordering",
        id: "u16-q20",
        prompt: "Order the steps that describe how the AFSL fits into the Australian regulatory framework.",
        correctOrder: [
          "ASIC is Australia's corporate and financial-services regulator",
          "ASIC issues the Australian Financial Services Licence (AFSL)",
          "The AFSL authorises a firm to conduct financial-services activities in Australia",
        ],
        explanation: "ASIC is the regulator; it issues the AFSL; the AFSL is what legally authorises financial-services conduct. This is the chain from regulator to licence to permission.",
      },

      // q21 — mcq: Australia's role in corridor
      {
        type: "mcq",
        id: "u16-q21",
        prompt: "In the Australia–Singapore corridor, what does Australia primarily contribute?",
        options: [
          "Capital, wealth management, and cross-border structuring expertise",
          "Deal flow and the firm's roots",
          "Regulatory oversight of both countries' financial-services sectors",
          "The regional headquarters for currency and tax structuring",
        ],
        correctIndex: 1,
        explanation: "The manual says Singapore is the regional hub for capital, wealth management, and cross-border structuring — Australia provides deal flow and the firm's roots.",
      },

      // q22 — wordBank: capital base description
      {
        type: "wordBank",
        id: "u16-q22",
        prompt: "Complete the description: Much of the money is from high-net-worth individuals and ___ offices — ___, relationship-driven, often keen to ___ directly.",
        answerTokens: ["family", "patient", "co-invest"],
        distractors: ["hedge", "aggressive", "divest", "pension", "sovereign", "leverage"],
        explanation: "HNW and family office capital is patient and relationship-driven, and those investors are often keen to co-invest directly alongside the manager.",
      },

      // q23 — writing: Day 16 practice task
      {
        type: "writing",
        id: "u16-q23",
        prompt: "Read a recent ANZ M&A/PE market outlook and note five themes. For each, write one line on how it could affect a Privatus mandate or investment.",
        modelAnswer: "A strong answer names five distinct, current ANZ sector or macro themes (e.g. energy transition investment, healthcare consolidation, financial-services M&A, technology roll-ups, or interest-rate-driven deal flow). For each theme, one precise sentence connects it to a Privatus mandate: for example, 'Healthcare consolidation among aged-care providers creates platform-acquisition opportunities aligned with Privatus's buy-and-build thesis.' The answer demonstrates awareness of the regulators (ASIC/AFSL/FIRB/MAS) and cross-border corridor where relevant.",
        keyPoints: [
          "Five distinct ANZ themes named (resources/energy, healthcare, financial services, tech/climate, or macro)",
          "Each theme linked by one sentence to a specific Privatus mandate or deal type",
          "At least one regulatory or corridor consideration mentioned (FIRB, cross-border structuring)",
          "Themes reflect current market awareness, not generic points",
          "Language is precise — not vague statements about 'growth' or 'opportunity'",
        ],
      },
    ],
  },
];
