import type { Unit } from '../types';

export const unitsPhase2: Unit[] = [
  {
    id: 5,
    day: 5,
    title: "Comparable companies (trading comps)",
    subtitle: "Value a company against what the market pays for similar listed peers.",
    questions: [
      // ── Foundation: EV vs Equity Value ──
      {
        type: "mcq",
        id: "u5-q1",
        prompt: "Why is enterprise value (EV) described as 'capital-structure-neutral'?",
        options: [
          "Because it excludes intangible assets and goodwill from the calculation.",
          "Because it represents the whole operating business before financing, so it is independent of how the company is funded.",
          "Because it is always equal to equity value when net debt is zero.",
          "Because it uses book values rather than market values."
        ],
        correctIndex: 1,
        explanation: "EV = equity value + net debt + preferred + minority interest − associates. A whole-business buyer assumes the debt and gets the cash, so EV reflects the operating business regardless of capital structure."
      },
      {
        type: "trueFalse",
        id: "u5-q2",
        statement: "EV/EBITDA and equity value/EBITDA are interchangeable multiples because both measure the same operating performance.",
        isTrue: false,
        explanation: "Matching numerator to denominator is critical. EV is a whole-business (pre-interest) metric and must be paired with pre-interest denominators like EBITDA. Equity value/EBITDA mismatches the numerator (equity, a post-debt concept) with EBITDA (a pre-debt metric)."
      },
      // ── Formula: Equity Value ──
      {
        type: "formula",
        id: "u5-q3",
        prompt: "Write the formula for equity value in terms of share price and diluted shares.",
        accepted: [
          "equity value = share price * diluted shares",
          "equity value = share price × diluted shares",
          "equity value=shareprice*dilutedshares",
          "equity value = price * diluted shares",
          "equity value=price×dilutedshares"
        ],
        explanation: "Equity value = share price × fully diluted shares (treasury stock method). Diluted shares include net new shares from in-the-money options and convertibles."
      },
      // ── Formula: Enterprise Value ──
      {
        type: "formula",
        id: "u5-q4",
        prompt: "Write the bridge formula for enterprise value (EV) starting from equity value.",
        accepted: [
          "ev = equity value + net debt + preferred + minority interest - associates",
          "ev = equity value + net debt + preferred + minorities - associates",
          "EV = equity value + net debt + preferred + minority interest − associates",
          "ev=equityvalue+netdebt+preferred+minorityinterest-associates",
          "enterprise value = equity value + net debt + preferred + minority interest - associates"
        ],
        explanation: "EV = equity value + net debt + preferred + minority interest − associates. Adding net debt reflects that a buyer assumes the debt and acquires the cash; preferred and minority interest are non-equity claims; associates are subtracted because their earnings are not consolidated."
      },
      // ── Treasury Stock Method ──
      {
        type: "wordBank",
        id: "u5-q5",
        prompt: "Complete this definition: The treasury stock method counts ___ from in-the-money options, assuming the option proceeds are used to ___ shares at the current price, so only the ___ shares are added to the diluted count.",
        answerTokens: ["net new shares", "buy back", "net new"],
        distractors: ["all option shares", "issue additional", "gross", "retire preferred", "outstanding"],
        explanation: "Under the treasury stock method, option proceeds are assumed to buy back shares at the current price, so only the net new shares (options exercised minus shares repurchased) are added. Forgetting dilution understates equity value."
      },
      {
        type: "trueFalse",
        id: "u5-q6",
        statement: "Forgetting to include dilution from in-the-money options overstates the implied equity value per share.",
        isTrue: false,
        explanation: "Forgetting dilution understates equity value per share because the denominator (diluted share count) is too small, making each share appear more valuable than it is. The manual states: 'Forgetting dilution understates equity value and the implied price.'"
      },
      // ── Building the Comp Set ──
      {
        type: "mcq",
        id: "u5-q7",
        prompt: "When building a comparable companies set, how many peers does the manual recommend, and what matters most?",
        options: [
          "At least 20 peers; more data always produces a more accurate multiple.",
          "5–10 genuinely similar peers; closeness beats quantity — three tight comps outweigh ten loose ones.",
          "Exactly 10 peers; the median is only reliable with large samples.",
          "No more than 3 peers; simplicity reduces noise."
        ],
        correctIndex: 1,
        explanation: "The manual recommends choosing 5–10 listed peers genuinely similar on industry, size, geography, growth and margins. Closeness beats quantity — three tight comps outweigh ten loose ones."
      },
      // ── Spreading and Cleaning ──
      {
        type: "mcq",
        id: "u5-q8",
        prompt: "What does 'spreading' a comp mean, and what adjustments are required for like-for-like comparison?",
        options: [
          "Averaging all public multiples without adjustment to get a broad market view.",
          "Pulling each peer's figures and computing multiples after calendarising to a common year-end, stripping non-recurring items, and confirming consistent accounting.",
          "Selecting the highest and lowest multiples and averaging them to create a range.",
          "Using only forward earnings estimates and ignoring trailing metrics."
        ],
        correctIndex: 1,
        explanation: "Spreading a comp means pulling its figures and computing multiples on a like-for-like basis: calendarise to a common year-end, strip non-recurring items, and confirm consistent accounting."
      },
      {
        type: "trueFalse",
        id: "u5-q9",
        statement: "Forward (NTM) multiples are preferred over trailing (LTM) where estimates exist because markets price the future.",
        isTrue: true,
        explanation: "The manual states: 'Use last-twelve-months (LTM) for the trailing view and forward (NTM / next fiscal year) where estimates exist — markets price the future.'"
      },
      // ── Choosing the Multiple ──
      {
        type: "mcq",
        id: "u5-q10",
        prompt: "For which type of company is EV/Revenue the most appropriate multiple?",
        options: [
          "Mature, capital-light businesses with stable margins.",
          "Companies where capital intensity differs significantly across peers.",
          "Early-stage or unprofitable companies where earnings are not meaningful.",
          "Financial institutions where capital structure is integral to the model."
        ],
        correctIndex: 2,
        explanation: "EV/Revenue is used for early-stage or unprofitable companies where earnings are not meaningful. EV/EBIT is preferred when peers differ in capital intensity; P/E is suited to mature, profitable companies and financials."
      },
      {
        type: "mcq",
        id: "u5-q11",
        prompt: "Why is EV/EBITDA described as the 'workhorse' multiple?",
        options: [
          "Because it includes the effect of financial leverage and interest costs.",
          "Because it is capital-structure-neutral and pre-D&A, making it comparable across differently financed and depreciation-policy peers.",
          "Because it equals P/E for companies with no debt.",
          "Because it is always higher than EV/EBIT, giving a more conservative valuation."
        ],
        correctIndex: 1,
        explanation: "EV/EBITDA is the workhorse because it is capital-structure-neutral (EV in the numerator) and pre-D&A, removing the distortion of different depreciation policies across peers."
      },
      // ── Applying the Multiple ──
      {
        type: "trueFalse",
        id: "u5-q12",
        statement: "The mean of a peer multiple set is preferred over the median because it incorporates all data points.",
        isTrue: false,
        explanation: "The manual recommends taking the median because it is more robust to outliers than the mean. A single outlier peer can distort the mean significantly."
      },
      // ── Worked Example: fillBlanks ──
      {
        type: "fillBlank",
        id: "u5-q13",
        prompt: "Target EBITDA = $50m. Peer median EV/EBITDA = 9.0x. The implied enterprise value is ___.",
        accepted: ["$450m", "450m", "450", "$450 million", "450 million"],
        explanation: "Implied EV = target EBITDA × peer multiple = $50m × 9.0x = $450m."
      },
      {
        type: "fillBlank",
        id: "u5-q14",
        prompt: "Using the Day 5 worked example: implied EV = $450m, net debt = $80m. The implied equity value is ___.",
        accepted: ["$370m", "370m", "370", "$370 million", "370 million"],
        explanation: "Equity value = EV − net debt = $450m − $80m = $370m."
      },
      {
        type: "fillBlank",
        id: "u5-q15",
        prompt: "Using the Day 5 worked example: implied equity value = $370m, diluted shares = 100m. The value per share is ___.",
        accepted: ["$3.70", "3.70", "3.7", "$3.70 per share", "3.70 per share"],
        explanation: "Value per share = equity value / diluted shares = $370m / 100m = $3.70 per share."
      },
      // ── Watch Out ──
      {
        type: "mcq",
        id: "u5-q16",
        prompt: "An analyst values a target using (equity value) / EBITDA. What is the error?",
        options: [
          "The multiple should use LTM EBITDA, not forward EBITDA.",
          "The numerator (equity value, a post-debt concept) is mismatched with the denominator (EBITDA, a pre-interest, pre-debt metric).",
          "EBITDA should be replaced with EBIT for capital-intensive companies.",
          "The analyst should use the mean rather than the median of the peer set."
        ],
        correctIndex: 1,
        explanation: "The most common comp error is mismatching numerator and denominator. EV (not equity value) must be paired with EBITDA. Equity value pairs with post-interest metrics like net income or EPS."
      },
      {
        type: "mcq",
        id: "u5-q17",
        prompt: "Why is a multiple built on uncleaned, uncalendarised figures described as 'noise dressed as precision'?",
        options: [
          "Because cleaning figures reduces the sample size below a reliable minimum.",
          "Because non-recurring items and different fiscal year-ends make peer figures non-comparable, so the multiple reflects apples-to-oranges differences rather than genuine valuation signal.",
          "Because calendarisation always increases reported EBITDA artificially.",
          "Because cleaning must be done by an auditor to be legally valid."
        ],
        correctIndex: 1,
        explanation: "Without calendarisation and removal of non-recurring items, the peer figures are not on a like-for-like basis. The resulting multiple is meaningless precision — it looks exact but reflects structural differences, not real valuation."
      },
      // ── Matching: Key Terms ──
      {
        type: "matching",
        id: "u5-q18",
        prompt: "Match each term to its definition.",
        pairs: [
          { left: "Treasury stock method", right: "Counts net new shares from in-the-money options, assuming proceeds buy back stock at current price." },
          { left: "WACC", right: "Weighted Average Cost of Capital — blended discount rate for cash flows." },
          { left: "LTM", right: "Last twelve months — the trailing period used for the revenue/EBITDA denominator." },
          { left: "EV/EBITDA", right: "The workhorse multiple: capital-structure-neutral and pre-depreciation." }
        ],
        explanation: "These are the core terms from the trading comps framework."
      },
      // ── Practice Today ──
      {
        type: "writing",
        id: "u5-q19",
        prompt: "Describe the process of building a six-company trading comps table for an ANZ sector company, from selecting peers through to implying a per-share value.",
        modelAnswer: "Select 5–10 peers genuinely similar on industry, size, geography, growth and margins — for an ANZ company, prioritise regional sector-specific peers. Pull revenue, EBITDA, net debt and diluted share count for each peer; calendarise to a common year-end and strip non-recurring items so figures are comparable. Compute EV (equity value + net debt + preferred + minority interest − associates) and the chosen multiple (e.g. EV/EBITDA) for each peer. Take the median multiple and apply it to the target's corresponding metric to imply EV; subtract net debt to get equity value and divide by diluted shares (using the treasury stock method) to reach a per-share value.",
        keyPoints: [
          "5–10 peers selected on industry, size, geography, growth and margins; closeness beats quantity.",
          "Calendarise to a common year-end and strip non-recurring items for like-for-like comparison.",
          "Use LTM for trailing view; NTM/forward estimates where available.",
          "Take the median (not mean) of peer multiples to reduce outlier distortion.",
          "Bridge EV → equity value (subtract net debt) → per-share value (divide by diluted shares)."
        ]
      }
    ]
  },

  // ═══════════════════════════════════════════════════════
  // DAY 6 — Precedent Transactions
  // ═══════════════════════════════════════════════════════
  {
    id: 6,
    day: 6,
    title: "Precedent transactions",
    subtitle: "Value using what acquirers have actually paid to buy similar companies.",
    questions: [
      // ── Introduction ──
      {
        type: "mcq",
        id: "u6-q1",
        prompt: "Why do precedent transaction multiples generally sit above trading comp multiples?",
        options: [
          "Because precedent transactions use forward estimates while trading comps use trailing figures.",
          "Because acquirers pay for control, embedding a control premium above the undisturbed share price.",
          "Because transaction multiples are calculated on book value rather than market value.",
          "Because precedent sets exclude financial buyers, who bid lower than strategic buyers."
        ],
        correctIndex: 1,
        explanation: "Precedent transaction multiples embed a control premium because an acquirer pays above the undisturbed share price to obtain control of the target company."
      },
      // ── Control Premium ──
      {
        type: "mcq",
        id: "u6-q2",
        prompt: "What does the control premium reflect, and what is the typical range cited in the manual?",
        options: [
          "The discount applied for minority stakes; typically 5–15%.",
          "The extra a buyer pays above market price to acquire control, because control enables strategy/management changes and synergy capture; often 20–40%, though it varies widely.",
          "The difference between the Gordon growth and exit-multiple terminal values; typically 10–20%.",
          "The premium for paying in cash rather than stock; typically 15–25%."
        ],
        correctIndex: 1,
        explanation: "Control lets an owner change strategy, management and capital structure and capture synergies. Buyers therefore pay above the undisturbed share price — often 20–40%, though it varies widely."
      },
      {
        type: "trueFalse",
        id: "u6-q3",
        statement: "Precedent transaction multiples tell you what control has cost in practice.",
        isTrue: true,
        explanation: "The manual states: 'Precedent multiples therefore tell you what control has cost in practice.' They embed the control premium paid by acquirers in actual completed deals."
      },
      // ── Sourcing and Computing ──
      {
        type: "mcq",
        id: "u6-q4",
        prompt: "Which target metrics should be used when computing precedent transaction multiples?",
        options: [
          "The target's latest annual report figures, regardless of timing.",
          "Forward estimates at the time of the current valuation, to be consistent with trading comps.",
          "The target's LTM metrics at the time of announcement, prioritising recent deals in similar market conditions.",
          "The acquiring company's metrics, since they determine the purchase price."
        ],
        correctIndex: 2,
        explanation: "Pull deal multiples using the target's metrics at announcement (LTM at the time). Prioritise recent deals struck in similar market conditions; older deals from a different cycle can mislead badly."
      },
      {
        type: "trueFalse",
        id: "u6-q5",
        statement: "Older precedent transactions from a different market cycle are reliable benchmarks because the deal economics reflect fundamental business value.",
        isTrue: false,
        explanation: "The manual warns that older deals from a different cycle can mislead badly. Market conditions — interest rates, credit availability, risk appetite — materially affect multiples paid."
      },
      // ── Strategic vs Financial Buyers ──
      {
        type: "mcq",
        id: "u6-q6",
        prompt: "Why can strategic buyers generally pay more in an acquisition than financial (sponsor) buyers?",
        options: [
          "Because strategic buyers have lower cost of capital due to their investment-grade credit ratings.",
          "Because strategic buyers can bank synergies (cost or revenue) from combining businesses, making the combined entity worth more to them.",
          "Because financial buyers are legally restricted in how much leverage they can use.",
          "Because strategic buyers pay in stock, which costs less than cash consideration."
        ],
        correctIndex: 1,
        explanation: "Strategic buyers can pay more because they bank synergies (cost or revenue) from combining businesses. Financial buyers are disciplined by the returns their model must hit, anchoring nearer intrinsic value."
      },
      {
        type: "mcq",
        id: "u6-q7",
        prompt: "When reading a precedent transaction set, why should strategic and financial buyer multiples be separated?",
        options: [
          "Because financial buyers always pay more than strategic buyers, skewing the median upward.",
          "Because a strategic, synergy-driven multiple is not a fair benchmark for a financial deal — the two buyer types have fundamentally different valuation disciplines.",
          "Because regulatory requirements mandate separate disclosure for each buyer type.",
          "Because only financial buyers use LTM metrics; strategic buyers use NTM."
        ],
        correctIndex: 1,
        explanation: "Strategic buyers pay synergy-inflated multiples; financial buyers anchor near intrinsic value. Mixing them produces a distorted benchmark."
      },
      // ── Deal-Structure Effects ──
      {
        type: "mcq",
        id: "u6-q8",
        prompt: "Which deal structure elements can move the headline transaction multiple and must be noted beside each data point?",
        options: [
          "Only whether the target is public or private.",
          "Cash vs stock consideration, earnouts, and minority vs control stakes.",
          "The number of bidders in the process and the exclusivity period length.",
          "Only the size of the transaction and the sector."
        ],
        correctIndex: 1,
        explanation: "Cash vs stock consideration, earnouts, and minority vs control stakes all move the headline multiple. Note the structure beside each data point so you compare like with like."
      },
      {
        type: "trueFalse",
        id: "u6-q9",
        statement: "An earnout is a form of deferred consideration that is contingent on post-deal performance.",
        isTrue: true,
        explanation: "The glossary defines earnout as: 'Deferred consideration contingent on post-deal performance.' Earnouts affect the economic value of a deal and therefore its effective multiple."
      },
      // ── Watch Out: Data Limitations ──
      {
        type: "mcq",
        id: "u6-q10",
        prompt: "Why are precedent transaction sets typically smaller and messier than trading comp sets?",
        options: [
          "Because transactions happen less frequently and disclosure is often partial, especially for private targets.",
          "Because databases only track domestic transactions and exclude cross-border deals.",
          "Because transaction multiples must be recalculated annually, making historic data unreliable.",
          "Because regulators restrict publication of deal terms to protect buyer confidentiality."
        ],
        correctIndex: 0,
        explanation: "The manual warns that disclosure is often partial, especially for private targets, so precedent sets are smaller and messier than trading comps. Be transparent about which data points are estimates."
      },
      {
        type: "mcq",
        id: "u6-q11",
        prompt: "An analyst includes a strategic acquisition from a boom-cycle year in a current financial-buyer precedent set without adjustment or comment. What is wrong?",
        options: [
          "Nothing — all completed transactions are valid benchmarks regardless of timing or buyer type.",
          "Two errors: the strategic deal embeds synergy value not available to a financial buyer, and the boom-cycle conditions inflated the multiple beyond what today's market supports.",
          "Only the timing is an issue; buyer type does not affect the multiple.",
          "Only the buyer type matters; cycle timing is irrelevant for long-lived assets."
        ],
        correctIndex: 1,
        explanation: "Both buyer type (strategic vs financial) and market conditions (boom vs current cycle) affect comparability. The manual requires separating buyer types and prioritising recent, condition-matched, comparable-structure deals."
      },
      // ── Same logic, different source ──
      {
        type: "trueFalse",
        id: "u6-q12",
        statement: "Precedent transactions use the same underlying valuation logic as trading comps, but the multiples come from completed M&A deals rather than daily market prices.",
        isTrue: true,
        explanation: "The manual states: 'Same logic as trading comps, but the multiples come from completed M&A deals rather than daily prices.' The key structural difference is that transaction multiples embed a control premium."
      },
      // ── Deal structure: stock vs cash ──
      {
        type: "mcq",
        id: "u6-q13",
        prompt: "Why is it important to note deal consideration structure (cash vs stock) beside each precedent transaction data point?",
        options: [
          "Because stock deals always produce lower multiples than cash deals.",
          "Because cash vs stock consideration, along with earnouts and stake size, moves the headline multiple, so you must compare like with like.",
          "Because only cash deals are admissible evidence in a valuation opinion.",
          "Because stock consideration is tax-exempt and this must be adjusted out."
        ],
        correctIndex: 1,
        explanation: "Cash vs stock consideration, earnouts, and minority vs control stakes all move the headline multiple. The structure must be noted beside each data point to ensure like-for-like comparison."
      },
      // ── Weighting ──
      {
        type: "mcq",
        id: "u6-q14",
        prompt: "When a precedent transaction set contains some estimated (partially disclosed) data points and some fully disclosed ones, how should you treat them?",
        options: [
          "Weight all data points equally, since estimates have been professionally prepared.",
          "Be transparent about which data points are estimates, and weight recent, condition-matched, comparable-structure deals most.",
          "Exclude all partially disclosed deals from the set to maintain data integrity.",
          "Use only financial buyer deals to avoid synergy distortion."
        ],
        correctIndex: 1,
        explanation: "The manual instructs: be transparent about which data points are estimates, and weight recent, condition-matched, comparable-structure deals most. Partial disclosure is unavoidable in precedent sets."
      },
      // ── LTM at announcement ──
      {
        type: "trueFalse",
        id: "u6-q15",
        statement: "When computing a precedent transaction multiple, you should use the target's current LTM metrics (at today's date) rather than the metrics at the time of announcement.",
        isTrue: false,
        explanation: "Precedent multiples must use the target's LTM metrics at the time of announcement — this is when the price was set. Using today's metrics distorts the multiple because performance may have changed since the deal was struck."
      },
      // ── wordBank: control premium definition ──
      {
        type: "wordBank",
        id: "u6-q16",
        prompt: "Complete this definition: Control lets an owner change ___, management and capital structure and capture ___, so buyers pay above the undisturbed share price — often ___.",
        answerTokens: ["strategy", "synergies", "20–40%"],
        distractors: ["revenue", "goodwill", "5–10%", "50–60%", "leverage"],
        explanation: "The manual states: 'Control lets an owner change strategy, management and capital structure and capture synergies, so buyers pay above the undisturbed share price — often 20–40%, though it varies widely.'"
      },
      // ── Matching: Key Terms ──
      {
        type: "matching",
        id: "u6-q17",
        prompt: "Match each term to its definition.",
        pairs: [
          { left: "Control premium", right: "The extra a buyer pays above market price to acquire control." },
          { left: "Synergies", right: "Cost or revenue gains a buyer expects from combining businesses." },
          { left: "Accretion / dilution", right: "Whether a deal raises or lowers the acquirer's earnings per share." },
          { left: "Bolt-on", right: "A small acquisition added to a larger platform company." },
          { left: "Earnout", right: "Deferred consideration contingent on post-deal performance." }
        ],
        explanation: "These are key M&A terms from the Day 6 content and glossary."
      },
      // ── Practice Today ──
      {
        type: "writing",
        id: "u6-q18",
        prompt: "You have built a precedent transactions table showing a median EV/EBITDA of 12.0x and your Day 5 trading comps show a median of 9.0x. Explain why this gap exists and how you would present both in your valuation.",
        modelAnswer: "The gap between precedent (12.0x) and trading comp (9.0x) multiples reflects the control premium embedded in transaction prices — acquirers pay above the undisturbed market price to obtain control and capture synergies. The 3.0x difference (33% premium) is broadly consistent with the typical 20–40% control premium. In a football field chart, both valuation methods are plotted as horizontal bars alongside the DCF range; the overlap zone represents the defensible value range. When presenting, I would note whether the precedent set contains strategic buyers (whose synergy-driven multiples are less relevant to a financial buyer) and flag any deal-structure or cycle differences that could distort comparability.",
        keyPoints: [
          "Transaction multiples embed a control premium (typically 20–40%) above undisturbed market prices.",
          "Strategic buyer multiples reflect synergies and are not directly comparable to financial buyer deals.",
          "Prioritise recent deals in similar market conditions; older boom-cycle deals can mislead.",
          "Both trading comps and precedents are plotted on the football field; the overlap is the defensible range.",
          "Be transparent about data limitations — disclosure is often partial for private targets."
        ]
      }
    ]
  },

  // ═══════════════════════════════════════════════════════
  // DAY 7 — DCF Part 1: Cash Flows & Discount Rate
  // ═══════════════════════════════════════════════════════
  {
    id: 7,
    day: 7,
    title: "Discounted cash flow (part 1): cash flows & discount rate",
    subtitle: "Build the cash-flow engine and the discount rate from scratch.",
    questions: [
      // ── FCFF concept ──
      {
        type: "mcq",
        id: "u7-q1",
        prompt: "What does 'unlevered' mean in the context of free cash flow to the firm (FCFF)?",
        options: [
          "The cash flow is calculated before subtracting depreciation and amortisation.",
          "The cash flow is before financing flows (interest, debt repayment), so it is attributable to all capital providers and yields an enterprise value.",
          "The cash flow excludes capital expenditure because it is non-cash.",
          "The cash flow is calculated on a post-tax equity basis, attributable only to shareholders."
        ],
        correctIndex: 1,
        explanation: "'Unlevered' means before financing flows, so the result is attributable to all capital providers (equity and debt) and yields an enterprise value — not an equity value."
      },
      // ── Formula: FCFF ──
      {
        type: "formula",
        id: "u7-q2",
        prompt: "Write the formula for unlevered free cash flow to the firm (FCFF).",
        accepted: [
          "FCFF = EBIT*(1-tax) + D&A - capex - ΔNWC",
          "FCFF = EBIT×(1-tax) + D&A - capex - ΔNWC",
          "fcff=ebit*(1-tax)+d&a-capex-δnwc",
          "fcff=ebit*(1-tax)+da-capex-dnwc",
          "FCFF = EBIT*(1-t) + D&A - capex - change in NWC",
          "fcff=ebit*(1-t)+d&a-capex-changeinNWC",
          "FCFF = NOPAT + D&A - capex - ΔNWC"
        ],
        explanation: "FCFF = EBIT×(1−tax) + D&A − capex − ΔNWC. Start with EBIT, tax-effect to get NOPAT, add back non-cash D&A, subtract capex and the increase in net working capital."
      },
      // ── Ordering: FCFF build-up ──
      {
        type: "ordering",
        id: "u7-q3",
        prompt: "Put the steps for building unlevered free cash flow (FCFF) in the correct order, working down from revenue.",
        correctOrder: [
          "Revenue",
          "EBIT (via margins)",
          "NOPAT = EBIT × (1 − tax rate)",
          "Add back non-cash D&A",
          "Subtract capital expenditure (capex)",
          "Subtract increase in net working capital (ΔNWC)",
          "= FCFF"
        ],
        explanation: "The manual's sequence: revenue → EBIT (via margins) → NOPAT = EBIT×(1−tax) → add back non-cash D&A → subtract capex → subtract ΔNWC."
      },
      // ── Mid-year convention ──
      {
        type: "trueFalse",
        id: "u7-q4",
        statement: "Under the mid-year convention, each year's cash flow is discounted as if received at year-end (period 1, 2, 3...) rather than mid-year.",
        isTrue: false,
        explanation: "The mid-year convention discounts each year's flow as if received mid-year (period 0.5, 1.5, ...) because cash arrives throughout the year, not only at year-end. This lifts value modestly and is standard practice."
      },
      {
        type: "mcq",
        id: "u7-q5",
        prompt: "Why does the mid-year convention typically produce a higher DCF value than the year-end convention?",
        options: [
          "Because it uses a lower discount rate for mid-year periods.",
          "Because cash flows are received on average six months earlier than assumed under year-end discounting, reducing the discount applied.",
          "Because it adds an extra half-year of cash flow to the explicit period.",
          "Because it eliminates the need for a terminal value adjustment."
        ],
        correctIndex: 1,
        explanation: "Discounting at 0.5 rather than 1.0 for the first year (and 1.5 rather than 2.0 for the second, etc.) reduces the total discount applied, lifting the present value of each cash flow modestly."
      },
      // ── Formula: WACC ──
      {
        type: "formula",
        id: "u7-q6",
        prompt: "Write the WACC formula.",
        accepted: [
          "WACC = (E/V)*Re + (D/V)*Rd*(1-tax)",
          "WACC = (E/V)×Re + (D/V)×Rd×(1-tax)",
          "wacc=(e/v)*re+(d/v)*rd*(1-tax)",
          "wacc=(e/v)*re+(d/v)*rd*(1-t)",
          "WACC = (E/V)*Re + (D/V)*Rd*(1-t)",
          "wacc = (e/v)×re + (d/v)×rd×(1-tax)"
        ],
        explanation: "WACC = (E/V)×Re + (D/V)×Rd×(1−tax). It is the blended required return of equity and debt, weighted at market values. The (1−tax) on debt reflects the tax-deductibility of interest."
      },
      {
        type: "mcq",
        id: "u7-q7",
        prompt: "What does the (1 − tax) term in the WACC formula represent?",
        options: [
          "The after-tax equity return required by shareholders.",
          "The tax deductibility of interest, which reduces the effective cost of debt to the firm.",
          "The corporate tax applied to EBITDA before computing free cash flow.",
          "The adjustment for the tax loss on capital expenditure."
        ],
        correctIndex: 1,
        explanation: "The (1−tax) on debt in WACC reflects the tax-deductibility of interest — because interest payments are a pre-tax expense, the after-tax cost of debt is Rd×(1−tax)."
      },
      // ── Formula: CAPM / Cost of equity ──
      {
        type: "formula",
        id: "u7-q8",
        prompt: "Write the CAPM formula for the cost of equity (Re).",
        accepted: [
          "Re = Rf + β*ERP",
          "Re = Rf + beta*ERP",
          "re=rf+β*erp",
          "re=rf+beta*erp",
          "Re = Rf + β×ERP",
          "cost of equity = Rf + β*ERP"
        ],
        explanation: "Re = Rf + β×ERP (plus size/country premia if used). Rf is the risk-free rate (long-dated government bond yield), ERP is the equity risk premium, and β is the company's sensitivity to market moves."
      },
      {
        type: "mcq",
        id: "u7-q9",
        prompt: "What are the three core inputs to the CAPM cost-of-equity formula?",
        options: [
          "WACC, ERP, and the cost of debt (Rd).",
          "Risk-free rate (Rf), equity risk premium (ERP), and beta (β).",
          "EBIT margin, tax rate, and net debt.",
          "Terminal growth rate (g), WACC, and free cash flow."
        ],
        correctIndex: 1,
        explanation: "Re = Rf + β×ERP. Rf is a long-dated government bond yield; ERP is the extra return equities demand over the risk-free rate; β is the company's sensitivity to market moves."
      },
      // ── Levering / Unlevering Beta ──
      {
        type: "formula",
        id: "u7-q10",
        prompt: "Write the formula to unlever an observed (levered) beta to obtain the asset (unlevered) beta.",
        accepted: [
          "βu = βL / (1 + (1-tax)*D/E)",
          "βu = βL / [1 + (1-tax)*D/E]",
          "bu = bL / (1 + (1-tax)*D/E)",
          "unlevered beta = levered beta / (1 + (1-tax)*(D/E))",
          "βu=βL/(1+(1-tax)*D/E)",
          "bu=bl/(1+(1-t)*d/e)"
        ],
        explanation: "βu = βL / [1 + (1−tax)×D/E]. Each peer's observed beta reflects its own leverage; unlevering strips out financing risk to reveal the pure business (asset) beta."
      },
      {
        type: "formula",
        id: "u7-q11",
        prompt: "Write the formula to relever an unlevered (asset) beta to the target's capital structure.",
        accepted: [
          "βL = βu * (1 + (1-tax)*D/E)",
          "βL = βu × [1 + (1-tax)*D/E]",
          "bL = bu * (1 + (1-tax)*D/E)",
          "levered beta = unlevered beta * (1 + (1-tax)*(D/E))",
          "βL=βu*(1+(1-tax)*D/E)",
          "bl=bu*(1+(1-t)*d/e)"
        ],
        explanation: "βL = βu×[1 + (1−tax)×D/E]. After taking the median asset beta from peers, relever it at the target's capital structure to get the target's levered beta for use in CAPM."
      },
      {
        type: "mcq",
        id: "u7-q12",
        prompt: "Why must you unlever peer betas before using them to estimate the target's cost of equity?",
        options: [
          "Because peers report betas annually and they must be updated to current market prices.",
          "Because each peer's observed beta reflects that peer's own financial leverage; using it directly contaminates the target's cost of equity with peers' balance sheets.",
          "Because unlevered betas are always lower and produce a more conservative WACC.",
          "Because regulators require the use of asset betas in valuation reports."
        ],
        correctIndex: 1,
        explanation: "Each peer's beta reflects its own leverage. Skipping the unlever-relever step contaminates the cost of equity with peers' balance sheets rather than measuring the target's own business risk at its own capital structure."
      },
      // ── Watch Out: WACC inputs ──
      {
        type: "mcq",
        id: "u7-q13",
        prompt: "The manual warns about two key errors in building WACC. Which pair are they?",
        options: [
          "Using pre-tax cost of debt and using LTM rather than NTM EBITDA.",
          "Weighting at book values rather than market values, and using a snapshot capital structure rather than a target/long-run structure when leverage is abnormal.",
          "Using the wrong risk-free rate country and forgetting the size premium.",
          "Discounting at year-end rather than mid-year and double-counting D&A."
        ],
        correctIndex: 1,
        explanation: "The manual warns: weight the capital structure at market values (not book), and use a target/long-run structure rather than today's snapshot if leverage is abnormal. Small changes in Rf, ERP or beta also move WACC significantly."
      },
      {
        type: "trueFalse",
        id: "u7-q14",
        statement: "Small changes in the risk-free rate, equity risk premium or beta have a negligible effect on a DCF valuation.",
        isTrue: false,
        explanation: "The manual explicitly warns: 'Small changes in Rf, ERP or beta move WACC and swing the whole valuation.' This is why sensitivity analysis is critical."
      },
      // ── Explicit horizon ──
      {
        type: "mcq",
        id: "u7-q15",
        prompt: "What explicit projection horizon does the manual recommend for the FCF forecast in a DCF?",
        options: [
          "1–3 years, to limit forecast uncertainty.",
          "5–10 years, off a defensible operating model.",
          "Exactly 5 years only, as longer forecasts are too speculative.",
          "20+ years to capture the full business cycle."
        ],
        correctIndex: 1,
        explanation: "The manual states: 'Project an explicit horizon of 5–10 years off a defensible operating model.'"
      },
      // ── Practice Today ──
      {
        type: "writing",
        id: "u7-q16",
        prompt: "Describe the process of building a WACC from scratch for a target company, including how you would handle beta.",
        modelAnswer: "Start with the risk-free rate (Rf), taken from a long-dated government bond yield, and the equity risk premium (ERP). To estimate beta, collect levered betas from 5–10 comparable listed peers. Unlever each peer's beta using βu = βL / [1 + (1−tax)×D/E] to strip out each peer's financial leverage and isolate the business (asset) risk. Take the median unlevered beta, then relever it at the target's own capital structure: βL = βu×[1 + (1−tax)×D/E]. Plug into CAPM: Re = Rf + β×ERP to get the cost of equity. For cost of debt (Rd), use the target's marginal borrowing rate and apply the tax shield: after-tax cost of debt = Rd×(1−tax). Weight equity and debt at market values (not book) — or at the target long-run structure if current leverage is abnormal — and compute WACC = (E/V)×Re + (D/V)×Rd×(1−tax).",
        keyPoints: [
          "Risk-free rate from long-dated government bond; ERP is the extra return equities demand over Rf.",
          "Unlever peer betas to strip out peers' financial leverage before taking the median asset beta.",
          "Relever at the target's own capital structure using βL = βu×[1+(1−tax)×D/E].",
          "Weight at market values, not book; use target/long-run structure if current leverage is abnormal.",
          "WACC inputs (Rf, ERP, β) are individually small but collectively swing the whole valuation."
        ]
      },
      {
        type: "mcq",
        id: "u7-q17",
        prompt: "Why is unlevered free cash flow (FCFF) the right measure to discount when you want an enterprise value?",
        options: [
          "It is calculated before financing flows, so it is attributable to all capital providers (debt and equity) and yields an enterprise value",
          "It already subtracts interest, so it represents cash available only to equity holders",
          "It includes the tax shield on debt, so it captures the benefit of leverage directly",
          "It is measured net of dividends, so it reflects what shareholders actually receive"
        ],
        correctIndex: 0,
        explanation: "'Unlevered' means before financing flows, so the result is attributable to all capital providers and yields an enterprise value."
      },
      {
        type: "trueFalse",
        id: "u7-q18",
        statement: "In CAPM, beta (β) measures the company's sensitivity to market moves.",
        isTrue: true,
        explanation: "Re = Rf + β×ERP, where beta is the company's sensitivity to market moves; Rf is a long-dated government bond yield and ERP is the extra return equities demand over the risk-free rate."
      },
      {
        type: "fillBlank",
        id: "u7-q19",
        prompt: "The mid-year convention discounts each year's cash flow as if received at period 0.5, 1.5, … because cash arrives ___ the year, not only at year-end.",
        accepted: ["throughout", "through", "across", "during", "throughout the year"],
        explanation: "Cash arrives throughout the year, so many models discount each year's flow as if received mid-year; it lifts value modestly and is standard practice."
      }
    ]
  },

  // ═══════════════════════════════════════════════════════
  // DAY 8 — DCF Part 2: Terminal Value, Bridge & Sensitivity
  // ═══════════════════════════════════════════════════════
  {
    id: 8,
    day: 8,
    title: "Discounted cash flow (part 2): terminal value, bridge & sensitivity",
    subtitle: "Finish the DCF, bridge to per-share value, and stress it.",
    questions: [
      // ── Terminal Value: Gordon Growth ──
      {
        type: "formula",
        id: "u8-q1",
        prompt: "Write the Gordon growth model formula for terminal value (TV).",
        accepted: [
          "TV = FCFn*(1+g)/(WACC-g)",
          "TV = FCFn×(1+g)/(WACC-g)",
          "tv=fcfn*(1+g)/(wacc-g)",
          "TV = FCF_n*(1+g)/(WACC-g)",
          "terminal value = FCFn*(1+g)/(WACC-g)",
          "TV=FCFn*(1+g)/(wacc-g)"
        ],
        explanation: "TV (Gordon) = FCFₙ×(1+g) / (WACC − g). FCFₙ is the final explicit-period free cash flow, g is the perpetuity growth rate, and WACC is the discount rate. The growth rate must be below WACC."
      },
      // ── Terminal Value: Exit Multiple ──
      {
        type: "formula",
        id: "u8-q2",
        prompt: "Write the exit-multiple formula for terminal value (TV).",
        accepted: [
          "TV = terminal EBITDA * multiple",
          "TV = terminal-year EBITDA × multiple",
          "tv=terminalebitda*multiple",
          "TV = EBITDA * exit multiple",
          "terminal value = terminal EBITDA * exit multiple"
        ],
        explanation: "TV (exit multiple) = terminal-year EBITDA × chosen multiple. This applies a market-derived sale multiple to the final year's EBITDA as a proxy for what the business would sell for at the end of the explicit horizon."
      },
      // ── Best Practice: Cross-Check ──
      {
        type: "mcq",
        id: "u8-q3",
        prompt: "What is the best practice when you have computed both a Gordon growth and an exit-multiple terminal value?",
        options: [
          "Use the higher of the two to be conservative about upside.",
          "Average them to produce a blended terminal value.",
          "Cross-check: derive the implied perpetuity growth rate from the exit multiple and the implied exit multiple from the growth rate, confirming neither is absurd.",
          "Discard the Gordon growth model and rely solely on the exit multiple, which is market-anchored."
        ],
        correctIndex: 2,
        explanation: "Best practice is to compute both and cross-check: derive the implied perpetuity growth from the exit multiple, and the implied exit multiple from the growth rate, and make sure neither is absurd."
      },
      // ── Discount and Assemble ──
      {
        type: "formula",
        id: "u8-q4",
        prompt: "Write the formula for enterprise value (EV) in a DCF, assembling the present values.",
        accepted: [
          "EV = Σ PV(FCFt) + PV(terminal value)",
          "EV = sum of PV(FCFt) + PV(TV)",
          "ev=ΣPV(FCFt)+PV(TV)",
          "ev=sum PV(fcft)+PV(tv)",
          "EV = Σ PV(FCFt) + PV(TV)",
          "enterprise value = Σ PV(FCFt) + PV(terminal value)"
        ],
        explanation: "EV = Σ PV(FCFₜ) + PV(terminal value). Discount each explicit FCF and the terminal value at WACC, then sum for enterprise value."
      },
      // ── Ordering: DCF Assembly Steps ──
      {
        type: "ordering",
        id: "u8-q5",
        prompt: "Put the DCF assembly steps in the correct order, from forecasting cash flows to arriving at value per share.",
        correctOrder: [
          "Project explicit-period FCFF (5–10 years)",
          "Compute terminal value (Gordon growth and/or exit multiple)",
          "Discount all FCFs and terminal value at WACC to get present values",
          "Sum PV(FCFs) + PV(terminal value) = Enterprise Value (EV)",
          "Subtract net debt and minorities, add associates → Equity Value",
          "Divide equity value by diluted shares → Value per share"
        ],
        explanation: "The DCF flows: project FCFs → compute TV → discount at WACC → sum for EV → bridge EV to equity value → divide by diluted shares for per-share value."
      },
      // ── Worked Example: fillBlanks ──
      {
        type: "fillBlank",
        id: "u8-q6",
        prompt: "In the Day 8 worked example, the sum of PV(explicit FCF) = $120m and PV(terminal value) = $560m. The enterprise value (EV) is ___.",
        accepted: ["$680m", "680m", "680", "$680 million", "680 million"],
        explanation: "EV = PV(explicit FCF) + PV(TV) = $120m + $560m = $680m."
      },
      {
        type: "fillBlank",
        id: "u8-q7",
        prompt: "In the Day 8 worked example: EV = $680m, net debt = $80m. The implied equity value is ___.",
        accepted: ["$600m", "600m", "600", "$600 million", "600 million"],
        explanation: "Equity value = EV − net debt = $680m − $80m = $600m."
      },
      {
        type: "fillBlank",
        id: "u8-q8",
        prompt: "In the Day 8 worked example: equity value = $600m, diluted shares = 100m. The value per share is ___.",
        accepted: ["$6.00", "6.00", "6", "$6", "$6.00 per share", "6.00 per share"],
        explanation: "Value per share = equity value / diluted shares = $600m / 100m = $6.00 per share."
      },
      {
        type: "fillBlank",
        id: "u8-q9",
        prompt: "In the Day 8 worked example, PV(TV) = $560m and EV = $680m. Terminal value as a percentage of EV is approximately ___.",
        accepted: ["82%", "82", "~82%", "approximately 82%", "82 percent"],
        explanation: "TV as % of EV = $560m / $680m ≈ 82%. The manual notes this is typical, and is why the growth rate (g) matters so much."
      },
      // ── Sensitivity and Scenarios ──
      {
        type: "mcq",
        id: "u8-q10",
        prompt: "What is the purpose of running a WACC × g sensitivity table in a DCF?",
        options: [
          "To identify the single most likely value and report it as a point estimate.",
          "To show how much the valuation changes across a range of WACC and terminal growth rate assumptions, presenting a value range rather than false-precision point.",
          "To replace the need for trading comps and precedent transactions.",
          "To determine the optimal capital structure for the company."
        ],
        correctIndex: 1,
        explanation: "A single DCF number is false precision. A WACC×g data table shows the range of implied values, which is what partners actually need to make a defensible case."
      },
      {
        type: "trueFalse",
        id: "u8-q11",
        statement: "A DCF should be presented as a single point estimate rather than a range, because a range implies the analyst is uncertain.",
        isTrue: false,
        explanation: "The manual states: 'A single DCF number is false precision. Run a data table flexing WACC against g to produce a value range... Present the range, not a point.'"
      },
      // ── Football Field ──
      {
        type: "mcq",
        id: "u8-q12",
        prompt: "What is a 'football field' chart in a valuation context?",
        options: [
          "A bar chart ranking companies by size from largest to smallest.",
          "A chart showing value ranges from trading comps, precedent transactions and DCF as horizontal bars; where they overlap is the defensible value range.",
          "A sensitivity table showing WACC on one axis and growth rate on the other.",
          "A chart comparing EV/EBITDA multiples across all peers in the comp set."
        ],
        correctIndex: 1,
        explanation: "The football field plots the value ranges from trading comps, precedent transactions and DCF as horizontal bars on one chart. Where they overlap is the defensible value range — the output partners actually use."
      },
      // ── Watch Out: Terminal Value ──
      {
        type: "mcq",
        id: "u8-q13",
        prompt: "The manual warns that terminal value often drives 60–80% of a DCF's total value. What constraint must the perpetuity growth rate (g) satisfy?",
        options: [
          "g must equal long-run GDP growth exactly; no more, no less.",
          "g must be below long-run GDP growth and always below WACC.",
          "g must exceed WACC to ensure the business grows in perpetuity.",
          "g must be zero to be conservative; non-zero growth is speculative."
        ],
        correctIndex: 1,
        explanation: "The manual states: 'Keep g below long-run GDP growth and always below WACC, and sanity-check the implied terminal multiple.' If g ≥ WACC, the Gordon growth formula breaks down (denominator becomes zero or negative)."
      },
      {
        type: "trueFalse",
        id: "u8-q14",
        statement: "If the perpetuity growth rate (g) equals WACC, the Gordon growth terminal value formula produces a mathematically valid (though very large) result.",
        isTrue: false,
        explanation: "If g = WACC, the denominator (WACC − g) = 0, making the formula undefined. If g > WACC, the result is negative — economically nonsensical. g must always be below WACC."
      },
      {
        type: "mcq",
        id: "u8-q15",
        prompt: "An analyst sets g = 4% and WACC = 9%. The implied exit multiple from the Gordon growth model appears absurdly high. What does this likely signal?",
        options: [
          "The WACC is too high and should be reduced to match the growth assumption.",
          "Either the growth rate is too high relative to the business's long-run prospects or the WACC is underestimated; the cross-check reveals the terminal value assumption is internally inconsistent.",
          "The model is correct; high terminal multiples are normal for high-growth businesses.",
          "The analyst should switch to the exit multiple method and ignore the Gordon growth result."
        ],
        correctIndex: 1,
        explanation: "The cross-check (derive implied exit multiple from g, or implied g from exit multiple) is designed to catch exactly this: an absurd result signals the underlying assumption is unrealistic. The manual requires both methods to be computed and cross-checked."
      },
      // ── Practice Today ──
      {
        type: "writing",
        id: "u8-q16",
        prompt: "Describe how you would build, cross-check and present the terminal value in a DCF, and explain why it is the most consequential part of the model.",
        modelAnswer: "Compute terminal value using both methods: the Gordon growth model (TV = FCFₙ×(1+g)/(WACC−g)) and the exit multiple method (TV = terminal-year EBITDA × chosen multiple). Cross-check by deriving the implied perpetuity growth rate from the exit multiple and the implied exit multiple from the growth rate — if either result is absurd, the assumption needs revision. Constrain g below long-run GDP growth and always below WACC. Discount both terminal values at WACC to present value and sum with PV(explicit FCFs) to get EV. Terminal value is consequential because it typically drives 60–80% of total DCF value; a small change in g or the exit multiple swamps all the detailed forecasting work in the explicit period. Present the result as a WACC×g sensitivity table (a range), not a single point.",
        keyPoints: [
          "Compute both Gordon growth and exit multiple; cross-check by deriving each method's implied output from the other.",
          "g must be below long-run GDP growth and strictly below WACC.",
          "Terminal value typically drives 60–80% of total DCF value — the most consequential assumption.",
          "Sanity-check the implied terminal EBITDA multiple from the Gordon growth rate.",
          "Present as a WACC×g sensitivity range on the football field, never as a single point."
        ]
      },
      {
        type: "mcq",
        id: "u8-q17",
        prompt: "On a football field chart, what do the overlapping region of the trading-comps, precedent-transactions and DCF bars represent?",
        options: [
          "Your defensible value range — the output partners actually use",
          "The single most likely price, taken as the midpoint of the overlap",
          "The control premium implied by the precedent transactions",
          "The margin of error in the underlying financial model"
        ],
        correctIndex: 0,
        explanation: "Plot the value ranges from trading comps, precedent transactions and DCF as horizontal bars on one chart; where they overlap is your defensible value range — the output partners actually use."
      },
      {
        type: "trueFalse",
        id: "u8-q18",
        statement: "Best practice is to present a single DCF number, because a precise point estimate looks more rigorous than a range.",
        isTrue: false,
        explanation: "A single DCF number is false precision. Run a data table flexing WACC against g (or the exit multiple) to produce a value range, and present the range, not a point."
      }
    ]
  },

  // ═══════════════════════════════════════════════════════
  // DAY 9 — The Three-Statement Model
  // ═══════════════════════════════════════════════════════
  {
    id: 9,
    day: 9,
    title: "The three-statement model",
    subtitle: "Build the engine that links all three statements into one consistent system.",
    questions: [
      // ── Introduction ──
      {
        type: "mcq",
        id: "u9-q1",
        prompt: "What is the defining characteristic of a three-statement model?",
        options: [
          "It projects three years of financial data using one set of assumptions.",
          "It links the income statement, balance sheet and cash-flow statement so that one set of assumptions drives all three and they stay internally consistent.",
          "It combines three valuation methods: DCF, trading comps and precedent transactions.",
          "It models three scenarios: base, upside and downside."
        ],
        correctIndex: 1,
        explanation: "A three-statement model links the income statement, balance sheet and cash-flow statement so that one set of assumptions drives all three and they stay internally consistent. It underpins the DCF, the LBO and almost everything else."
      },
      // ── Drivers First ──
      {
        type: "mcq",
        id: "u9-q2",
        prompt: "According to the manual, what should be built first and how should downstream cells reference assumptions?",
        options: [
          "Start with the income statement; all other statements should reference it.",
          "Build an assumptions/drivers block first; every downstream cell references these driver cells — never type a number twice.",
          "Build the balance sheet first to determine the capital structure for all forecasts.",
          "Build the cash-flow statement first because cash is the most important metric."
        ],
        correctIndex: 1,
        explanation: "Drivers first: build an assumptions/drivers block (revenue growth, margins, tax rate, capex %, working-capital days, depreciation policy, financing). Everything downstream references these cells — never type a number twice."
      },
      {
        type: "mcq",
        id: "u9-q3",
        prompt: "Which of the following is included in the assumptions/drivers block of a three-statement model?",
        options: [
          "The actual historical income statement figures.",
          "Revenue growth, margins, tax rate, capex as % of revenue, working-capital days (DSO, DIO, DPO), depreciation policy, and financing.",
          "The valuation multiples from the comparable companies analysis.",
          "The WACC and terminal growth rate used in the DCF."
        ],
        correctIndex: 1,
        explanation: "The drivers block contains: revenue growth, margins, tax rate, capex as a % of revenue, working-capital days (DSO, DIO, DPO), depreciation policy, and financing assumptions."
      },
      // ── The Links ──
      {
        type: "ordering",
        id: "u9-q4",
        prompt: "Arrange the three key linkages of a three-statement model in the correct order, starting from the income statement.",
        correctOrder: [
          "Net income from the income statement flows to retained earnings on the balance sheet",
          "Net income also flows to the top of the cash-flow statement",
          "Closing cash from the cash-flow statement feeds the balance-sheet cash line",
          "Balance sheet must balance (assets = liabilities + equity)"
        ],
        explanation: "Income statement → net income to retained earnings (balance sheet) and to top of cash-flow statement → closing cash feeds balance-sheet cash → balance sheet must balance. A link error anywhere breaks the balance."
      },
      {
        type: "trueFalse",
        id: "u9-q5",
        statement: "Net income flows to two places: retained earnings on the balance sheet and the top of the cash-flow statement.",
        isTrue: true,
        explanation: "The manual states: net income flows to retained earnings on the balance sheet and to the top of the cash-flow statement. Both links must be correctly coded for the model to be internally consistent."
      },
      {
        type: "mcq",
        id: "u9-q6",
        prompt: "What is the definitive test that a three-statement model is correctly linked?",
        options: [
          "Revenue growth flows correctly from the assumptions block to the income statement.",
          "The balance sheet balances: assets = liabilities + equity.",
          "The DCF produces a value consistent with the trading comps.",
          "EBITDA margin is consistent across all three statements."
        ],
        correctIndex: 1,
        explanation: "The balance sheet must balance (assets = liabilities + equity). If it doesn't, a link upstream is wrong. This is both the test and the diagnostic starting point."
      },
      // ── Cash Sweep / Revolver Plug ──
      {
        type: "mcq",
        id: "u9-q7",
        prompt: "What is the purpose of the cash sweep / revolver plug in a three-statement model?",
        options: [
          "To ensure revenue forecasts remain within a plausible range.",
          "To keep the balance sheet balanced as assumptions change: surplus cash pays down debt (cash sweep) and a cash shortfall is funded by drawing a revolver.",
          "To eliminate the circularity caused by interest expense depending on debt balances.",
          "To convert the model from nominal to real (inflation-adjusted) terms."
        ],
        correctIndex: 1,
        explanation: "The cash sweep / revolver plug is the balancing mechanism: surplus cash pays down debt (a cash sweep); a shortfall is funded by drawing the revolver. This keeps the balance sheet balanced as assumptions change."
      },
      {
        type: "trueFalse",
        id: "u9-q8",
        statement: "In a three-statement model, if the company generates surplus cash it draws on the revolver, and if it has a cash shortfall it uses the cash sweep to pay down debt.",
        isTrue: false,
        explanation: "It is the opposite: surplus cash can pay down debt (cash sweep); a shortfall is funded by drawing the revolver. The revolver is a borrowing facility, not a savings mechanism."
      },
      // ── Circularity ──
      {
        type: "wordBank",
        id: "u9-q9",
        prompt: "Complete this explanation of circularity: Interest depends on ___; debt depends on ___ generated; cash depends — via interest — on ___. Excel resolves this loop with ___ enabled.",
        answerTokens: ["debt", "cash", "itself", "iterative calculation"],
        distractors: ["equity", "EBITDA", "manual input", "circular reference checking", "depreciation"],
        explanation: "Interest depends on debt; debt depends on cash generated; cash depends via interest on itself. This circular reference is resolved in Excel by enabling iterative calculation. Professional models add a circuit-breaker switch."
      },
      {
        type: "mcq",
        id: "u9-q10",
        prompt: "How do professional models handle the circularity problem, beyond enabling iterative calculation?",
        options: [
          "They break the link between interest and debt by using fixed historical interest rates.",
          "They add a 'circuit breaker' switch that zeroes interest to clear error spirals, then is switched back on.",
          "They replace interest expense with a flat fee, eliminating the dependency on debt balance.",
          "They calculate the model manually for the first year and automate subsequent years."
        ],
        correctIndex: 1,
        explanation: "Professional models add a circuit-breaker switch that zeroes interest to clear error spirals, then is switched back on. This prevents circular reference errors from cascading through the model."
      },
      // ── Hygiene ──
      {
        type: "mcq",
        id: "u9-q11",
        prompt: "In a properly colour-coded financial model, what colour conventions apply to hardcoded inputs, formulas, and links to other sheets?",
        options: [
          "Red = inputs, yellow = formulas, blue = external links.",
          "Blue = hardcoded inputs, black = formulas, green = links to other sheets.",
          "Green = inputs, black = formulas, red = links to other sheets.",
          "There is no standard; colour coding is a personal preference."
        ],
        correctIndex: 1,
        explanation: "The manual specifies: blue = hardcoded inputs, black = formulas, green = links to other sheets. This is the professional standard referenced in the hygiene section."
      },
      {
        type: "trueFalse",
        id: "u9-q12",
        statement: "It is acceptable to hardcode numbers directly inside formulas if the values are unlikely to change.",
        isTrue: false,
        explanation: "Hygiene rule: no hardcodes in formulas — every assumption lives in its own input cell. Hardcoding inside formulas makes the model opaque, error-prone, and hard to update."
      },
      {
        type: "mcq",
        id: "u9-q13",
        prompt: "Why should each row in a financial model use one formula copied across columns, rather than different formulas in each column?",
        options: [
          "Because Excel cannot handle different formulas in the same row.",
          "Because consistency across columns prevents subtle, trust-destroying errors where one period's formula diverges from the others.",
          "Because auditors require a uniform formula structure for compliance.",
          "Because it reduces file size and prevents model crashes."
        ],
        correctIndex: 1,
        explanation: "One formula per row, copied across: consistency across columns prevents subtle, trust-destroying errors. Divergent formulas in a single row are a common source of hidden mistakes."
      },
      {
        type: "mcq",
        id: "u9-q14",
        prompt: "What two check rows does the manual recommend building into a three-statement model?",
        options: [
          "A WACC check and a FCFF check.",
          "A balance-sheet-balances check and a cash-flow-ties check, both flagging red when broken.",
          "A revenue-growth check and a margin-consistency check.",
          "A tax-rate check and a depreciation-reconciliation check."
        ],
        correctIndex: 1,
        explanation: "Build two checks: a balance-sheet-balances check and a cash-flow-ties check that flag red when broken. These are non-negotiable hygiene items."
      },
      // ── Watch Out: Balance Sheet ──
      {
        type: "mcq",
        id: "u9-q15",
        prompt: "A balance sheet that won't balance is discovered. What does the manual say the analyst should do?",
        options: [
          "Insert a balancing plug row to make the numbers work and note it in a footnote.",
          "Find the real linkage error — the usual culprits are a cash-flow sign error or a balance-sheet item that doesn't flow through the cash-flow statement.",
          "Accept a small rounding difference of up to $1m as immaterial.",
          "Rebuild the model from scratch, as a persistent imbalance means the structure is fundamentally wrong."
        ],
        correctIndex: 1,
        explanation: "The manual states: 'A balance sheet that won't balance is a real linkage error, not a rounding nuisance to bury under a plug. Find it. The usual culprits: a cash-flow sign error, or a balance-sheet item that doesn't flow through the cash-flow statement.'"
      },
      {
        type: "trueFalse",
        id: "u9-q16",
        statement: "A small balance-sheet imbalance is acceptable to leave as a rounding plug, provided it is disclosed to the client.",
        isTrue: false,
        explanation: "The manual is unambiguous: 'A balance sheet that won't balance is a real linkage error, not a rounding nuisance to bury under a plug. Find it.' Plugging hides real model errors."
      },
      // ── Practice Today ──
      {
        type: "writing",
        id: "u9-q17",
        prompt: "Explain the circularity problem in a three-statement model and describe how a professional model handles it.",
        modelAnswer: "Circularity arises because interest expense depends on the debt balance; the debt balance depends on cash generated; and cash generated depends (via interest) on itself. This creates a circular reference loop that Excel cannot resolve with standard calculation. Professionals handle it in two ways: first, they enable iterative calculation in Excel, which runs the calculation repeatedly until the loop converges. Second, they add a circuit-breaker switch that zeroes out interest income/expense to clear any error spirals — the model is run with the breaker on (zeroing interest) to establish the base, then the breaker is switched off so interest flows correctly. This prevents circular reference errors from cascading and creating #REF or infinite loops.",
        keyPoints: [
          "Circularity: interest depends on debt; debt depends on cash; cash depends via interest on itself.",
          "Excel resolves the loop with iterative calculation enabled.",
          "Professional models add a circuit-breaker switch that zeroes interest to clear error spirals.",
          "The circuit breaker is switched back on after clearing the spiral for normal model operation.",
          "Circularity is unavoidable in a fully linked three-statement model — it must be managed, not avoided."
        ]
      },
      {
        type: "mcq",
        id: "u9-q18",
        prompt: "In standard model colour-coding hygiene, what does a BLUE cell signify?",
        options: [
          "A hardcoded input",
          "A formula",
          "A link to another sheet",
          "A check row that has failed"
        ],
        correctIndex: 0,
        explanation: "Colour code: blue = hardcoded inputs, black = formulas, green = links to other sheets."
      }
    ]
  }
];
