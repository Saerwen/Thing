import type { Unit } from '../types';

export const unitsPhase5: Unit[] = [
  {
    id: 17,
    day: 17,
    title: "Build a model end to end",
    subtitle: "Integrate everything into one clean, presentable valuation.",
    questions: [
      {
        type: "ordering",
        id: "u17-q1",
        prompt: "Put the four steps of the Day 17 end-to-end modelling workflow in the correct order.",
        correctOrder: [
          "Build a clean three-statement model from a drivers block",
          "Drive an unlevered DCF with terminal value and a WACC x g sensitivity",
          "Add a trading-comps tab and a precedent-transactions tab",
          "Summarise all methods in a football-field chart with a defensible value range"
        ],
        explanation: "The workflow goes: (1) three-statement model, (2) unlevered DCF with TV and sensitivity, (3) trading comps + precedent-transactions tabs, (4) football-field summary. Each step builds on the previous one."
      },
      {
        type: "mcq",
        id: "u17-q2",
        prompt: "Which sensitivity is explicitly called for in Step 2 of the Day 17 workflow?",
        options: [
          "Revenue growth vs EBITDA margin",
          "WACC vs terminal-growth-rate (g)",
          "Entry multiple vs exit multiple",
          "Leverage ratio vs interest coverage"
        ],
        correctIndex: 1,
        explanation: "The manual specifies 'a WACC x g sensitivity' as part of the DCF step — a two-variable data table showing how implied value changes across WACC and terminal-growth-rate combinations."
      },
      {
        type: "trueFalse",
        id: "u17-q3",
        statement: "The football-field chart in Step 4 is optional; a single DCF output is sufficient for a presentable valuation.",
        isTrue: false,
        explanation: "The manual is explicit: the workflow ends with summarising ALL methods in a football-field chart with a defensible value range. The football field is the required deliverable, not optional."
      },
      {
        type: "mcq",
        id: "u17-q4",
        prompt: "The self-review checklist asks whether 'the football field actually overlaps.' What does this mean?",
        options: [
          "That the DCF range is wider than all comps ranges",
          "That the valuation bands from different methods share a common region, suggesting a credible range",
          "That all methods produce exactly the same midpoint estimate",
          "That the chart uses consistent bar colours"
        ],
        correctIndex: 1,
        explanation: "Overlap means the different valuation methods converge on a common zone, giving you a defensible and internally consistent range. If they don't overlap at all, the inputs or assumptions are likely inconsistent."
      },
      {
        type: "trueFalse",
        id: "u17-q5",
        statement: "Under the self-review checklist, colour conventions and labelled units/periods fall under the 'honest' criterion.",
        isTrue: false,
        explanation: "Colour conventions, visible assumptions, and labelled units/periods fall under the 'readable' criterion. The 'honest' criterion asks whether ranges are driven by real assumptions and the football field actually overlaps."
      },
      {
        type: "matching",
        id: "u17-q6",
        prompt: "Match each self-review checklist criterion to what it tests.",
        pairs: [
          { left: "Checks pass", right: "Balance sheet balances, cash flow ties, no error cells" },
          { left: "Readable", right: "Colour conventions applied, assumptions visible, units and periods labelled" },
          { left: "Honest", right: "Ranges driven by real assumptions, football field actually overlaps" },
          { left: "Partner pick-up test", right: "A partner could follow the model cold in two minutes" }
        ],
        explanation: "The four self-review criteria cover technical integrity (checks pass), presentation quality (readable), analytical credibility (honest), and usability by others (partner pick-up test)."
      },
      {
        type: "mcq",
        id: "u17-q7",
        prompt: "What is the 'partner pick-up test' in the Day 17 self-review checklist?",
        options: [
          "A partner must be able to rebuild the model from scratch in one hour",
          "A partner could pick up the model cold and follow it in two minutes",
          "A partner approves the football-field range before submission",
          "A partner checks that all formula cells are protected"
        ],
        correctIndex: 1,
        explanation: "The manual asks: 'Could a partner pick it up cold and follow it in two minutes?' This tests whether the model is self-explanatory and professionally structured, not just technically correct."
      },
      {
        type: "trueFalse",
        id: "u17-q8",
        statement: "The three-statement model in Step 1 should be driven off a separate assumptions/drivers block.",
        isTrue: true,
        explanation: "The manual specifies 'Build a clean three-statement model from a drivers block (Day 9).' A drivers block keeps assumptions visible and separate from calculations, which also satisfies the 'readable' self-review criterion."
      },
      {
        type: "formula",
        id: "u17-q9",
        prompt: "Recall drill (Day 17 integrates this): Write the Gordon Growth Model formula for Terminal Value. FCFn is the final-year free cash flow, g is the long-run growth rate, WACC is the discount rate.",
        accepted: [
          "TV = FCFn*(1+g)/(WACC-g)",
          "TV = FCFn x (1+g) / (WACC - g)",
          "TV(Gordon) = FCFn*(1+g)/(WACC-g)",
          "terminal value = FCFn*(1+g)/(WACC-g)",
          "TV=FCFn*(1+g)/(WACC-g)"
        ],
        explanation: "TV (Gordon) = FCFn x (1+g) / (WACC - g). The terminal value captures value beyond the explicit forecast period. Day 17's DCF step requires this formula; Day 20 asks you to re-read the formula sheet so recall is automatic."
      },
      {
        type: "fillBlank",
        id: "u17-q10",
        prompt: "The Day 17 workflow integrates trading comps and precedent transactions alongside the DCF, then presents all methods together in a ___ chart.",
        accepted: ["football-field", "football field", "football field chart", "football-field chart"],
        explanation: "A football-field chart displays valuation ranges from multiple methods side by side, letting you identify a defensible overlap and communicate the range of outcomes to a reader."
      },
      {
        type: "mcq",
        id: "u17-q11",
        prompt: "Which of the following would FAIL the 'checks pass' criterion in the self-review checklist?",
        options: [
          "Assumptions are on a separate tab from the income statement",
          "The balance sheet does not balance in the final projection year",
          "The football field shows a wide valuation range",
          "The sensitivity table covers only three WACC values"
        ],
        correctIndex: 1,
        explanation: "The 'checks pass' criterion requires the balance sheet to balance, cash flows to tie, and no error cells. A balance sheet that does not balance is a fundamental error that must be fixed before the model is presentable."
      },
      {
        type: "wordBank",
        id: "u17-q12",
        prompt: "Complete the definition: A football-field chart presents ___ from ___ methods side by side to show a ___ value range.",
        answerTokens: ["valuation ranges", "multiple", "defensible"],
        distractors: ["single point estimates", "one", "precise", "approximate", "accounting figures"],
        explanation: "A football-field chart presents valuation ranges from multiple methods (DCF, trading comps, precedent transactions) side by side, allowing the analyst to identify a defensible overlapping value range."
      },
      {
        type: "trueFalse",
        id: "u17-q13",
        statement: "The Day 17 practice task asks you to produce the full workbook for any company globally.",
        isTrue: false,
        explanation: "The manual specifies 'one ANZ company' — an Australian or New Zealand listed company. This keeps the practice relevant to the Privatus context and forces you to source real ANZ data."
      },
      {
        type: "mcq",
        id: "u17-q14",
        prompt: "How many tabs does the Day 17 integrated workbook contain at minimum?",
        options: [
          "One tab — a combined model",
          "Two tabs — income statement and DCF",
          "At least four tabs — three-statement model, DCF, trading comps, precedent transactions (plus football field)",
          "Exactly three tabs as specified by the manual"
        ],
        correctIndex: 2,
        explanation: "Steps 1-4 of the workflow imply at minimum: a three-statement model (Step 1), a DCF tab (Step 2), a trading-comps tab and a precedent-transactions tab (Step 3), and a football-field summary (Step 4)."
      },
      {
        type: "trueFalse",
        id: "u17-q15",
        statement: "In the 'honest' criterion, ranges being driven by 'real assumptions' means the analyst should widen ranges artificially to ensure the football field overlaps.",
        isTrue: false,
        explanation: "The 'honest' criterion means ranges must reflect genuine, defensible assumptions — not manipulated to force overlap. If the football field doesn't naturally overlap, the analyst should revisit the assumptions, not fake the numbers."
      },
      {
        type: "fillBlank",
        id: "u17-q16",
        prompt: "Step 2 of the workflow requires an unlevered ___, not a levered equity DCF, because it values the business independently of its capital structure.",
        accepted: ["DCF", "discounted cash flow", "unlevered DCF", "free cash flow model"],
        explanation: "An unlevered DCF uses free cash flows to the firm (FCFF) discounted at WACC, which values the operating business independent of financing. This is the standard approach in investment banking and private equity."
      },
      {
        type: "mcq",
        id: "u17-q17",
        prompt: "The self-review checklist has four criteria. Which ordering matches the manual?",
        options: [
          "Readable, Checks pass, Honest, Partner pick-up test",
          "Checks pass, Readable, Honest, Partner pick-up test",
          "Honest, Readable, Checks pass, Partner pick-up test",
          "Partner pick-up test, Checks pass, Readable, Honest"
        ],
        correctIndex: 1,
        explanation: "The manual lists: (1) Do the checks pass, (2) Is it readable, (3) Is it honest, (4) Could a partner pick it up cold. Technical integrity first, then presentation, then credibility, then usability."
      },
      {
        type: "writing",
        id: "u17-q18",
        prompt: "Practice today (Day 17): Describe how you would run the self-review checklist after completing your integrated ANZ company workbook. What would you check under each criterion, and what would you fix?",
        modelAnswer: "After completing the workbook, I would run through all four checklist criteria systematically. First, I would verify the checks pass: confirm the balance sheet balances in every period, the cash-flow statement ties to the opening and closing cash balance, and there are no #REF or #VALUE error cells. Second, I would assess readability: check that colour conventions are applied consistently (inputs in one colour, formulas in another), that all assumptions are visible on a dedicated drivers tab, and that every column has a clearly labelled period and every table has labelled units. Third, I would test honesty: trace each valuation range back to its source assumptions to confirm no range is artificially widened, and verify that the football-field chart shows genuine overlap. Finally, I would do the partner pick-up test: ask whether someone unfamiliar with the model could open it cold and understand the structure and key outputs within two minutes, fixing any unlabelled sections or buried assumptions.",
        keyPoints: [
          "Verify balance sheet balances, cash flow ties, and no error cells under 'checks pass'",
          "Confirm colour conventions, visible assumptions, and labelled units/periods under 'readable'",
          "Trace ranges to real assumptions and check football-field overlap under 'honest'",
          "Test whether a new reader could follow the model cold in two minutes",
          "Fix every issue the checklist flags before considering the workbook presentable"
        ]
      }
    ]
  },
  {
    id: 18,
    day: 18,
    title: "The investment-committee (IC) memo",
    subtitle: "Communicate an investment case the way it's actually decided.",
    questions: [
      {
        type: "ordering",
        id: "u18-q1",
        prompt: "Put the eight sections of an IC memo in the correct order as specified in the manual.",
        correctOrder: [
          "Recommendation & key terms",
          "Situation / opportunity",
          "Business overview",
          "Market",
          "Financials & valuation",
          "Returns — IRR/MOIC base and downside; value-creation bridge",
          "Risks & mitigants",
          "Recommendation, conditions & next steps"
        ],
        explanation: "The IC memo leads with the answer (Recommendation), then context (Situation, Business, Market), then numbers (Financials, Returns), then risk (Risks & mitigants), and closes with the decision (Recommendation, conditions & next steps)."
      },
      {
        type: "mcq",
        id: "u18-q2",
        prompt: "What does Section 1 of the IC memo ('Recommendation & key terms') require the analyst to lead with?",
        options: [
          "A summary of the company's financial history",
          "The answer: what, how much, at what price/structure, expected return",
          "A description of the market opportunity",
          "The two or three key risks and how they are mitigated"
        ],
        correctIndex: 1,
        explanation: "Section 1 leads with the answer — what is being proposed, how much capital, at what price or structure, and the expected return. This 'lead with the answer' structure is a hallmark of clear investment communication."
      },
      {
        type: "trueFalse",
        id: "u18-q3",
        statement: "Weak IC memos list specific, sized risks; strong ones name only generic risks to avoid alarming the committee.",
        isTrue: false,
        explanation: "The manual says the opposite: weak memos list generic risks; strong memos name the two or three things that could actually impair the investment, size them, and say specifically how each is mitigated or priced. Specificity signals you understand the business."
      },
      {
        type: "matching",
        id: "u18-q4",
        prompt: "Match each IC memo section to its core content.",
        pairs: [
          { left: "Situation / opportunity", right: "What is being proposed and why now" },
          { left: "Business overview", right: "What the company does and how it makes money" },
          { left: "Market", right: "Size, growth, competitive dynamics" },
          { left: "Returns", right: "IRR/MOIC under base and downside; value-creation bridge" }
        ],
        explanation: "Each section has a distinct purpose: Situation sets the context and timing, Business overview explains the model, Market applies Day 14 frameworks, and Returns quantifies the investment outcome under multiple scenarios."
      },
      {
        type: "mcq",
        id: "u18-q5",
        prompt: "Why does the manual say IC members trust an analyst who shows a downside case?",
        options: [
          "Because downside cases are required by regulation",
          "Because showing only the base case inflates the IRR",
          "Because it signals the analyst has already stress-tested their own thesis",
          "Because the downside case is always more accurate than the base case"
        ],
        correctIndex: 2,
        explanation: "The manual states: 'IC members trust an analyst who has already stress-tested their own thesis more than one who presents only the upside.' Showing a downside case demonstrates intellectual honesty and analytical rigour."
      },
      {
        type: "fillBlank",
        id: "u18-q6",
        prompt: "In the IC memo's Returns section, the analyst must always show a ___ case, not just the base case.",
        accepted: ["downside", "downside case", "stress", "stress case", "bear case"],
        explanation: "The manual is explicit: 'Always show a downside case, not just the base.' IC members trust analysts who stress-test their own thesis. The downside case is part of the Returns section (Section 6) alongside IRR/MOIC and the value-creation bridge."
      },
      {
        type: "trueFalse",
        id: "u18-q7",
        statement: "The IC memo's Financials & valuation section should present the analyst's triangulated range together with the key assumptions behind it.",
        isTrue: true,
        explanation: "Section 5 is described as 'your triangulated range and the key assumptions behind it.' Triangulation means combining multiple valuation methods (DCF, comps, precedents) and the assumptions must be visible so committee members can challenge them."
      },
      {
        type: "mcq",
        id: "u18-q8",
        prompt: "According to the manual, why does writing an IC memo demonstrate more than just running a model?",
        options: [
          "Because it requires more Excel formulas than a standalone model",
          "Because it shows you can think like an investor, not just operate a model",
          "Because it is longer than a typical financial model",
          "Because it follows a regulated format approved by ASIC"
        ],
        correctIndex: 1,
        explanation: "The manual says: 'Writing one shows you can think like an investor, not just operate a model.' The IC memo forces you to construct an investment thesis, weigh risks, and communicate a decision — higher-order skills than spreadsheet mechanics."
      },
      {
        type: "mcq",
        id: "u18-q9",
        prompt: "What is the 'value-creation bridge' in Section 6 of the IC memo?",
        options: [
          "A chart linking revenue to EBITDA growth",
          "An explanation of how returns are generated — the sources of IRR/MOIC",
          "A reconciliation of equity value to enterprise value",
          "A timeline of the deal process from mandate to close"
        ],
        correctIndex: 1,
        explanation: "The value-creation bridge explains how investor returns are generated — for example, the contributions from revenue growth, margin expansion, multiple re-rating, and leverage pay-down. It bridges the entry and exit valuations to explain the IRR/MOIC."
      },
      {
        type: "trueFalse",
        id: "u18-q10",
        statement: "The 'Privatus angle' section suggests that an IC memo on a Privatus deal is a useful but low-priority first-week artefact.",
        isTrue: false,
        explanation: "The manual calls it 'the single most impressive thing to have ready in your first week.' It demonstrates the investor mindset directly and shows you have done substantive preparation specific to the firm."
      },
      {
        type: "wordBank",
        id: "u18-q11",
        prompt: "Complete: Writing risks well means naming the ___ things that could actually ___ the investment, ___ them, and saying how each is ___ or priced.",
        answerTokens: ["two or three", "impair", "sizing", "mitigated"],
        distractors: ["many", "enhance", "listing", "ignored", "avoided", "five"],
        explanation: "Strong risk writing is specific and quantified. The manual contrasts this with weak memos that list generic risks — specificity signals you understand the business."
      },
      {
        type: "mcq",
        id: "u18-q10b",
        prompt: "Which Privatus deals does the manual mention by name as suitable subjects for a first-week IC memo?",
        options: [
          "Transurban and APA Group",
          "Viridios or a Princeville name",
          "Macquarie Infrastructure and Brookfield",
          "The manual does not name specific deals"
        ],
        correctIndex: 1,
        explanation: "The manual states: 'a two-page IC-style memo on one of their real deals — say Viridios or a Princeville name.' These are real Privatus deal references that demonstrate firm-specific research."
      },
      {
        type: "fillBlank",
        id: "u18-q12",
        prompt: "According to the manual, specificity in the Risks & mitigants section signals that you ___ the business.",
        accepted: ["understand", "understand the business", "know the business", "have understood the business"],
        explanation: "The manual says: 'Specificity signals you understand the business.' Generic risks suggest superficial analysis; named, sized, mitigated risks show deep diligence."
      },
      {
        type: "trueFalse",
        id: "u18-q13",
        statement: "The IC memo's final section (Section 8) is simply a restatement of Section 1 and adds no new information.",
        isTrue: false,
        explanation: "Section 8 is 'Recommendation, conditions & next steps' — it includes the conditions under which the investment proceeds and the concrete next steps, which go beyond a simple restatement of Section 1's recommendation and terms."
      },
      {
        type: "mcq",
        id: "u18-q14",
        prompt: "The Market section (Section 4) of an IC memo draws on which day's frameworks according to the manual?",
        options: [
          "Day 9 — three-statement modelling",
          "Day 14 — market analysis frameworks",
          "Day 7 — DCF methodology",
          "Day 5 — trading comparables"
        ],
        correctIndex: 1,
        explanation: "The manual specifies 'Market — size, growth, competitive dynamics (Day 14 frameworks).' Day 14 covers market sizing and competitive analysis tools that feed directly into the IC memo's market section."
      },
      {
        type: "mcq",
        id: "u18-q15",
        prompt: "How long should the Privatus IC memo practice artefact be?",
        options: [
          "One page maximum",
          "Two pages",
          "Five pages with exhibits",
          "The manual does not specify a length"
        ],
        correctIndex: 1,
        explanation: "The manual specifies 'a two-page IC-style memo.' This constraint forces concision and prioritisation — a core professional skill. The practice task also specifies two pages."
      },
      {
        type: "matching",
        id: "u18-q16",
        prompt: "Match each IC memo section number to its title.",
        pairs: [
          { left: "Section 2", right: "Situation / opportunity" },
          { left: "Section 5", right: "Financials & valuation" },
          { left: "Section 6", right: "Returns — IRR/MOIC base and downside; value-creation bridge" },
          { left: "Section 7", right: "Risks & mitigants" }
        ],
        explanation: "Knowing the section numbers and titles lets you structure a memo rapidly under time pressure and check that you haven't omitted a required component."
      },
      {
        type: "trueFalse",
        id: "u18-q17",
        statement: "An IC memo is primarily how an investment is reported after a deal closes, rather than how it is proposed and approved.",
        isTrue: false,
        explanation: "The manual states: 'The IC memo is how an investment is proposed, debated and approved.' It is a pre-decision document, not a post-close report."
      },
      {
        type: "writing",
        id: "u18-q18",
        prompt: "Practice today (Day 18): Draft the Risks & mitigants section for a hypothetical Privatus IC memo on a mid-market ANZ company. Name three specific, sized risks and explain how each is mitigated.",
        modelAnswer: "Risk 1: Customer concentration — the top three customers represent approximately 60% of revenue; mitigant is contractual lock-in via multi-year take-or-pay agreements that expire staggered across 2026-2028, reducing single-event renewal risk. Risk 2: Input cost inflation — raw material costs rose 18% in FY24 and could compress EBITDA margins by 200-300bps in a sustained inflation scenario; mitigant is existing fixed-price supplier contracts covering 70% of FY25 volumes and a demonstrated ability to pass through costs with a 3-6 month lag. Risk 3: Regulatory change — the company operates under an ACCC-reviewed pricing regime; an adverse determination could reduce allowed returns by 50-100bps; mitigant is that the next review is not until 2027, providing a clear investment horizon, and precedent determinations have been stable.",
        keyPoints: [
          "Name exactly two or three risks — not a laundry list of generic concerns",
          "Size each risk with specific numbers (percentages, basis points, revenue impact)",
          "Name a specific, concrete mitigant for each risk — not just 'management is aware'",
          "Risks should be company-specific, not generic sector risks",
          "Specificity signals understanding of the business"
        ]
      }
    ]
  },
  {
    id: 19,
    day: 19,
    title: "Excel & PowerPoint craft",
    subtitle: "Apply your front-loaded Excel mechanics at speed, and present like a banker.",
    questions: [
      {
        type: "mcq",
        id: "u19-q1",
        prompt: "What is the key Excel habit for referencing cells that must not shift when a formula is copied across columns or rows?",
        options: [
          "VLOOKUP with an absolute column reference",
          "F4 anchoring to create absolute references",
          "Copy-paste values only",
          "Named ranges for all inputs"
        ],
        correctIndex: 1,
        explanation: "The manual specifies 'F4 anchoring' as a core Excel mechanic. Pressing F4 cycles through absolute/mixed/relative reference modes, locking rows and/or columns so formulas copy correctly across a model."
      },
      {
        type: "trueFalse",
        id: "u19-q2",
        statement: "The Day 19 approach to Excel is to relearn the mechanics from scratch, spending time on tutorials before modelling.",
        isTrue: false,
        explanation: "The manual says 'apply, don't relearn.' The crash course (earlier days) gave you the mechanics; Day 19 is about using them fluently at speed — keyboard-only navigation, F4, INDEX/MATCH or XLOOKUP, data tables, and auditing habits."
      },
      {
        type: "matching",
        id: "u19-q3",
        prompt: "Match each Excel tool or habit to its purpose in Day 19.",
        pairs: [
          { left: "Keyboard-only navigation", right: "Move through the model at speed without using a mouse" },
          { left: "F4 anchoring", right: "Lock cell references so formulas copy correctly" },
          { left: "INDEX/MATCH or XLOOKUP", right: "Look up values flexibly without column-number fragility" },
          { left: "Data tables", right: "Build sensitivity analyses across two variables" }
        ],
        explanation: "Each tool serves a distinct purpose: navigation speed, reference locking, flexible lookups, and scenario/sensitivity analysis. Together they constitute the 'fluent mechanics' the manual refers to."
      },
      {
        type: "mcq",
        id: "u19-q4",
        prompt: "What auditing habit does the manual specify for maintaining model integrity?",
        options: [
          "Password-protecting all formula cells",
          "Printing the formula view and checking it manually",
          "Trace precedents/dependents and keep a live checks block",
          "Saving a backup copy every 30 minutes"
        ],
        correctIndex: 2,
        explanation: "The manual says to 'add light auditing habits — trace precedents/dependents, use the formula-auditing tools, and keep a checks block live.' These habits catch errors before they propagate through the model."
      },
      {
        type: "fillBlank",
        id: "u19-q5",
        prompt: "In a banker PowerPoint slide, the title should state the ___, not a label.",
        accepted: ["takeaway", "message", "so what", "conclusion", "key message", "action"],
        explanation: "The manual defines action titles: 'the title states the takeaway (e.g. Margins expand as scale builds), not a label (e.g. Margins). The reader should grasp the message from titles alone.' This is the single most important PowerPoint discipline."
      },
      {
        type: "trueFalse",
        id: "u19-q6",
        statement: "The 'one message per slide' rule means that if a slide makes two points, the analyst should use smaller font to fit both.",
        isTrue: false,
        explanation: "The manual says: 'if a slide makes two points, split it.' The one-message rule requires creating a second slide rather than cramming two messages onto one slide. Clarity of communication takes priority over slide count."
      },
      {
        type: "wordBank",
        id: "u19-q7",
        prompt: "Complete the action-title rule: The ___ states the ___, not a ___. The reader should grasp the ___ from titles alone.",
        answerTokens: ["title", "takeaway", "label", "message"],
        distractors: ["slide", "chart", "data", "heading", "formula", "number"],
        explanation: "Action titles — where the title states the takeaway rather than a label — let a senior reader skim a deck and understand the argument from headings alone, without reading every chart."
      },
      {
        type: "mcq",
        id: "u19-q8",
        prompt: "What does the 'so what' test require of every chart or exhibit in a banker deck?",
        options: [
          "Every exhibit must have a footnote explaining data sources",
          "Every exhibit must answer why it is there; if it does not change a conclusion, cut it",
          "Every exhibit must be accompanied by a data table",
          "Every exhibit must use consistent blue-and-white colour scheme"
        ],
        correctIndex: 1,
        explanation: "The manual states: 'every exhibit answers why it's there; if it doesn't change a conclusion, cut it.' The 'so what' test ruthlessly removes slides and charts that are informative but not decision-relevant."
      },
      {
        type: "trueFalse",
        id: "u19-q9",
        statement: "Chart discipline in banker slides favours legends over direct labels where possible.",
        isTrue: false,
        explanation: "The manual specifies 'direct labels over legends where possible' as part of chart discipline. Direct labels eliminate the need for readers to cross-reference a legend, reducing cognitive load and speeding comprehension."
      },
      {
        type: "mcq",
        id: "u19-q10",
        prompt: "The manual gives an example of an action title. Which of the following is an action title (not a label)?",
        options: [
          "Margins",
          "Revenue growth",
          "Margins expand as scale builds",
          "EBITDA bridge FY23-FY26"
        ],
        correctIndex: 2,
        explanation: "'Margins expand as scale builds' is an action title — it states a specific, arguable takeaway. The others ('Margins', 'Revenue growth', 'EBITDA bridge') are labels that describe the content without conveying a message."
      },
      {
        type: "fillBlank",
        id: "u19-q11",
        prompt: "The Day 19 manual recommends using ___ for building sensitivity analyses across two variables in Excel.",
        accepted: ["data tables", "data table", "sensitivity tables", "two-variable data tables"],
        explanation: "The manual specifies 'data tables for sensitivities.' Excel's What-If Analysis > Data Table feature allows a two-variable input table (e.g. WACC vs growth rate) that is more robust and dynamic than manually copying outputs."
      },
      {
        type: "trueFalse",
        id: "u19-q12",
        statement: "According to the manual, INDEX/MATCH and XLOOKUP are mentioned as alternatives to each other for flexible lookups.",
        isTrue: true,
        explanation: "The manual says 'INDEX/MATCH or XLOOKUP' — presenting them as equivalent options for flexible lookup. Both avoid the column-number fragility of VLOOKUP and can look in any direction."
      },
      {
        type: "mcq",
        id: "u19-q13",
        prompt: "What does the manual say should happen to exhibits that don't change a conclusion?",
        options: [
          "Move them to an appendix",
          "Reduce their size",
          "Cut them",
          "Label them as supplementary"
        ],
        correctIndex: 2,
        explanation: "The manual says: 'if it doesn't change a conclusion, cut it.' This is the 'so what' discipline — every slide and exhibit must earn its place by affecting a decision or supporting a key message."
      },
      {
        type: "matching",
        id: "u19-q14",
        prompt: "Match each PowerPoint principle to its description.",
        pairs: [
          { left: "Action titles", right: "Title states the takeaway, not a label; message graspable from titles alone" },
          { left: "One message per slide", right: "If a slide makes two points, split it into two slides" },
          { left: "Chart discipline", right: "Clean axes, direct labels, consistent colours, no clutter" },
          { left: "The so what", right: "Every exhibit must justify its presence; cut if it changes nothing" }
        ],
        explanation: "These four principles together define what the manual calls 'the banker slide.' Mastering all four is what separates a professional financial presentation from a data dump."
      },
      {
        type: "trueFalse",
        id: "u19-q15",
        statement: "The Day 19 practice task asks you to rebuild part of your Day 17 model keyboard-only at speed, then convert output into three client-ready slides.",
        isTrue: true,
        explanation: "The manual's 'Practice today' for Day 19 is: 'Rebuild part of your Day 17 model keyboard-only at speed, then turn its output into three client-ready slides with action titles.' This integrates both the Excel and PowerPoint craft from the day."
      },
      {
        type: "mcq",
        id: "u19-q16",
        prompt: "What external formatting reference does the manual suggest using for banker-quality slide formatting?",
        options: [
          "The CFA Institute style guide",
          "Macabacus's free formatting guides",
          "The ASX Listing Rules presentation guidelines",
          "Bloomberg's data visualisation handbook"
        ],
        correctIndex: 1,
        explanation: "The manual states: 'Use Macabacus's free formatting guides as a reference.' Macabacus is a widely used add-in and resource for investment banking Excel and PowerPoint formatting conventions."
      },
      {
        type: "fillBlank",
        id: "u19-q17",
        prompt: "The Day 19 Excel section says to add 'light auditing habits' — specifically: trace ___, use formula-auditing tools, and keep a checks block live.",
        accepted: ["precedents/dependents", "precedents and dependents", "precedents / dependents", "precedents & dependents"],
        explanation: "Tracing precedents and dependents lets you follow the logic of a formula both forward and backward, catching errors in complex models. Combined with a live checks block, these habits form a lightweight but effective model-auditing practice."
      },
      {
        type: "writing",
        id: "u19-q18",
        prompt: "Practice today (Day 19): You have an exhibit showing the company's revenue split by segment for FY21-FY24. Write an action title for this slide AND explain what 'so what' test you would apply to decide whether to include it in a client deck.",
        modelAnswer: "An action title for this slide might be 'Infrastructure segment drives three-quarters of growth as legacy services decline' rather than the label 'Revenue by segment FY21-FY24.' The action title states a specific takeaway that advances the investment argument. To apply the 'so what' test, I would ask: does this exhibit change a conclusion or support a key message in the deck? If the revenue mix shift to infrastructure explains the margin expansion thesis or justifies the comparable-company selection, it earns its place. If it is simply informational background that a reader could ignore without missing anything, it should be cut or moved to an appendix. The test is whether removing the slide would weaken the argument.",
        keyPoints: [
          "Action title states a specific arguable takeaway, not just a description of the content",
          "The takeaway should connect to the investment thesis or a key decision",
          "The so what test asks whether the exhibit changes a conclusion or supports a key message",
          "If removing the slide would not weaken the argument, cut it",
          "Direct labels on charts and clean axes are part of chart discipline on the same slide"
        ]
      }
    ]
  },
  {
    id: 20,
    day: 20,
    title: "Consolidate & plan your first week",
    subtitle: "Lock in recall, and walk in with a plan rather than just hope.",
    questions: [
      {
        type: "ordering",
        id: "u20-q1",
        prompt: "Put the three phases of the 30/60/90 plan in the correct order as described in the manual.",
        correctOrder: [
          "30 days: master house templates, know the live pipeline, deliver flawless support tasks",
          "60 days: own a workstream end to end",
          "90 days: contribute analysis that shapes a recommendation"
        ],
        explanation: "The 30/60/90 progresses from learning and supporting (30 days), to owning a workstream independently (60 days), to contributing analysis that influences real decisions (90 days). Each phase builds on the previous."
      },
      {
        type: "mcq",
        id: "u20-q2",
        prompt: "What is the recommended standard for 'real understanding' of any concept in the manual, according to Day 20?",
        options: [
          "Being able to derive it from first principles on a whiteboard",
          "Being able to explain it in two plain sentences",
          "Being able to reproduce every formula from memory",
          "Being able to build it in Excel within ten minutes"
        ],
        correctIndex: 1,
        explanation: "The manual says: 'Aim to be able to explain any concept here in two plain sentences — that's the test of real understanding.' Simplicity and clarity of explanation reveal genuine understanding better than technical complexity."
      },
      {
        type: "matching",
        id: "u20-q3",
        prompt: "Match each first-week posture principle to its meaning.",
        pairs: [
          { left: "Listen first", right: "Learn how this specific team runs a process before suggesting changes" },
          { left: "Own the unglamorous well", right: "Flawless trackers and comps build trust faster than clever ideas" },
          { left: "Check before you send", right: "Tie out every number; one wrong figure costs more than a slow turnaround" },
          { left: "Use your edge", right: "When a risk or diligence question arises, contribute your credit instinct" }
        ],
        explanation: "These four posture principles define how to build credibility and trust in the first week. Together they balance humility (listen, own the unglamorous) with contribution (check, use your edge)."
      },
      {
        type: "trueFalse",
        id: "u20-q4",
        statement: "The 'Own the unglamorous well' principle means you should seek high-visibility projects from day one to make an early impression.",
        isTrue: false,
        explanation: "The manual says: 'flawless trackers and comps build trust faster than clever ideas.' The principle is about doing unglamorous tasks perfectly, not seeking high-visibility work early. Trust is built through reliability, not ambition."
      },
      {
        type: "mcq",
        id: "u20-q5",
        prompt: "Which of the five smart questions for your manager asks about the team's house formatting conventions?",
        options: [
          "Question 1: What does a great first three months look like?",
          "Question 3: What are the modelling and formatting conventions — is there a house template?",
          "Question 4: How do advisory and investment work intersect day-to-day?",
          "Question 5: Where do analysts usually struggle early?"
        ],
        correctIndex: 1,
        explanation: "Question 3 is: 'What are the team's modelling and formatting conventions — is there a house template?' This is directly practical and connects to the Day 20 30-day goal of 'master the house templates.'"
      },
      {
        type: "ordering",
        id: "u20-q6",
        prompt: "Put the five smart questions for your manager in the order they appear in the manual.",
        correctOrder: [
          "What does a great first three months look like in this seat?",
          "Which live or upcoming mandates will I touch first, and what's my role?",
          "What are the team's modelling and formatting conventions — is there a house template?",
          "How do advisory and investment work intersect day-to-day in Singapore?",
          "Where do analysts here usually struggle early, so I can get ahead of it?"
        ],
        explanation: "The five questions move from performance expectations (Q1), to live work (Q2), to operational conventions (Q3), to firm structure (Q4), and finally to proactive risk management of your own development (Q5)."
      },
      {
        type: "trueFalse",
        id: "u20-q7",
        statement: "The manual suggests the 30/60/90 plan should be kept private and not shared with your manager.",
        isTrue: false,
        explanation: "The manual says: 'Bring it to your first one-to-one; arriving with a plan is itself a strong signal.' Sharing the 30/60/90 with your manager demonstrates initiative, self-awareness, and commitment — it is not a private document."
      },
      {
        type: "mcq",
        id: "u20-q8",
        prompt: "What does the Day 20 consolidation task involve, according to the manual?",
        options: [
          "Building a new model from scratch to test recall",
          "Re-skimming the firm's site, re-reading pitfalls and formula sheet, and ensuring two-sentence explanations are ready",
          "Writing a practice IC memo under timed conditions",
          "Completing an online finance certification"
        ],
        correctIndex: 1,
        explanation: "Day 20 consolidation involves: 'Re-skim every page of the firm's site so names, deals and language are instant recall, and re-read this manual's pitfalls and formula sheet.' The two-sentence test is the benchmark for readiness."
      },
      {
        type: "trueFalse",
        id: "u20-q9",
        statement: "The 'Use your edge' posture principle refers to your advantage in Excel speed over more experienced analysts.",
        isTrue: false,
        explanation: "The manual specifies: 'when a risk or diligence question arises, your credit instinct is genuinely valuable — contribute it.' The edge is credit instinct, not Excel speed. It refers to a background or prior experience in credit analysis or risk assessment."
      },
      {
        type: "fillBlank",
        id: "u20-q10",
        prompt: "The Day 20 consolidation goal is to be able to explain any concept in ___ plain sentences — that is the test of real understanding.",
        accepted: ["two", "2", "two plain", "two plain sentences"],
        explanation: "The manual sets 'two plain sentences' as the benchmark. If you cannot explain a concept simply and clearly to a non-expert, you have not fully understood it. This is a practical test you can apply to any topic in the manual."
      },
      {
        type: "mcq",
        id: "u20-q11",
        prompt: "The 90-day goal in the 30/60/90 plan is to:",
        options: [
          "Be promoted to associate level",
          "Master the house modelling templates",
          "Contribute analysis that shapes a recommendation",
          "Own a workstream end to end"
        ],
        correctIndex: 2,
        explanation: "The 90-day goal is to 'contribute analysis that shapes a recommendation.' Owning a workstream end to end is the 60-day goal. Mastering templates is the 30-day goal. The 90-day goal represents moving from execution to genuine analytical contribution."
      },
      {
        type: "mcq",
        id: "u20-q12",
        prompt: "Which smart question explicitly mentions Singapore as context?",
        options: [
          "Question 1: What does a great first three months look like in this seat?",
          "Question 2: Which live mandates will I touch first?",
          "Question 4: How do advisory and investment work intersect day-to-day in Singapore?",
          "Question 5: Where do analysts here usually struggle early?"
        ],
        correctIndex: 2,
        explanation: "Question 4 is: 'How do advisory and investment work intersect day-to-day in Singapore?' This reflects the Privatus context — a Singapore-based firm where advisory and direct investment activities coexist and may interact operationally."
      },
      {
        type: "trueFalse",
        id: "u20-q13",
        statement: "The 'Check before you send' posture principle says a slow turnaround is acceptable if it prevents errors in a client deck.",
        isTrue: true,
        explanation: "The manual says: 'one wrong figure in a client deck costs more than a slow turnaround.' This explicitly states that accuracy takes priority over speed when sending work externally. Getting it right matters more than getting it fast."
      },
      {
        type: "fillBlank",
        id: "u20-q14",
        prompt: "The 30-day goal includes three elements: master the house templates, know the ___, and deliver flawless support tasks.",
        accepted: ["live pipeline", "pipeline", "live mandates pipeline", "pipeline of live deals"],
        explanation: "The three 30-day goals are: master house templates, know the live pipeline (which deals are active and at what stage), and deliver flawless support. Knowing the pipeline lets you contribute intelligently from the first week."
      },
      {
        type: "matching",
        id: "u20-q15",
        prompt: "Match each 30/60/90 phase to its primary goal.",
        pairs: [
          { left: "30 days", right: "Master templates, know the pipeline, deliver flawless support" },
          { left: "60 days", right: "Own a workstream end to end" },
          { left: "90 days", right: "Contribute analysis that shapes a recommendation" }
        ],
        explanation: "The progression is deliberate: support and learn (30), operate independently (60), contribute strategically (90). Each phase represents a step change in autonomy and analytical contribution."
      },
      {
        type: "mcq",
        id: "u20-q16",
        prompt: "According to the manual, what does 'arriving with a plan' — i.e. bringing your 30/60/90 to your first one-to-one — signal to your manager?",
        options: [
          "That you have already decided what projects you want to work on",
          "That you are a strong signal — it is itself impressive",
          "That you do not trust the firm to have a development plan for you",
          "That you need formal performance targets to stay motivated"
        ],
        correctIndex: 1,
        explanation: "The manual says: 'arriving with a plan is itself a strong signal.' It signals initiative, self-awareness, and commitment — qualities that distinguish analysts who build trust quickly from those who wait to be directed."
      },
      {
        type: "trueFalse",
        id: "u20-q17",
        statement: "Question 5 (where analysts usually struggle early) is a risky question to ask a manager because it reveals weakness.",
        isTrue: false,
        explanation: "The manual presents it as one of the five smart questions. Asking where analysts struggle early signals self-awareness and a desire to get ahead of predictable problems — a sign of maturity and proactiveness, not weakness."
      },
      {
        type: "writing",
        id: "u20-q18",
        prompt: "Practice today (Day 20): Write your five smart questions for your manager and your first 30/60/90 plan draft in the format the manual recommends. Then explain in two sentences what the posture principle 'Listen first' means in practice.",
        modelAnswer: "My five questions are: (1) What does a great first three months look like in this seat? (2) Which live or upcoming mandates will I touch first, and what is my role? (3) What are the team's modelling and formatting conventions — is there a house template? (4) How do advisory and investment work intersect day-to-day in Singapore? (5) Where do analysts here usually struggle early, so I can get ahead of it? My 30/60/90: 30 days — master the house templates, understand the live pipeline, and deliver every support task flawlessly; 60 days — own a workstream end to end with minimal oversight; 90 days — contribute analysis that directly shapes a recommendation. 'Listen first' means learning how this specific team runs its process before proposing changes or shortcuts — every team has its own rhythms and conventions, and observing them before speaking builds credibility faster than demonstrating knowledge prematurely.",
        keyPoints: [
          "All five questions are included and specific to the Privatus context",
          "The 30/60/90 covers all three phases with the correct goals from the manual",
          "Listen first means learning the team's process before suggesting changes",
          "The plan is brought to the first one-to-one as a signal of initiative",
          "Two-sentence explanations demonstrate real understanding per Day 20's benchmark"
        ]
      }
    ]
  }
];
