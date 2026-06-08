// AUTO-GENERATED from source/manual.md by scripts/build-manual.mjs — do not edit by hand.
// Re-generate with: npm run build-manual

export type ManualBlock =
  | { type: 'subheading'; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'note'; text: string }
  | { type: 'formula'; text: string }
  | { type: 'list'; ordered: boolean; items: string[] }
  | { type: 'definition'; term: string; def: string }
  | { type: 'callout'; variant: 'watch' | 'privatus' | 'practice' | 'worked'; label: string; body: ManualBlock[] };

export interface ManualSection {
  id: number;
  kind: 'intro' | 'day' | 'section' | 'formulas' | 'glossary';
  phase: string;
  day: number | null;
  title: string;
  subtitle: string;
  blocks: ManualBlock[];
}

export const manualSections: ManualSection[] = [
  {
    "id": 0,
    "kind": "intro",
    "phase": "",
    "day": null,
    "title": "How to use this manual",
    "subtitle": "",
    "blocks": [
      {
        "type": "paragraph",
        "text": "This is your evening reading. Each day below is a self-contained chapter: read it before (or at the start of) that day's study block, and you'll arrive already understanding the ideas, so your hands-on time goes on practising rather than learning cold."
      },
      {
        "type": "paragraph",
        "text": "Every day follows the same shape — the concepts explained in depth, the formulas and mechanics you must know, worked examples where numbers teach faster than words, the mistakes juniors make, how it connects to Privatus's real work, and a short “practice today” to do in Excel or on paper. Formulas sit in monospaced boxes; orange boxes are pitfalls; purple boxes are Privatus anchors; teal boxes are the day's practice task."
      },
      {
        "type": "paragraph",
        "text": "__The throughline: __Privatus is a merchant bank — it advises on deals and invests its own and partners' capital alongside them. Almost every concept here serves both an advisory use (helping a client transact) and an investing use (deciding whether to commit capital). Read with both lenses on."
      }
    ]
  },
  {
    "id": 1,
    "kind": "day",
    "phase": "Phase 1 — Foundations (Days 1–4)",
    "day": 1,
    "title": "Day 1 — The merchant-bank model & where you fit",
    "subtitle": "Goal: understand what the firm is, how it makes money, and what your seat actually does.",
    "blocks": [
      {
        "type": "subheading",
        "text": "What “merchant banking” means here"
      },
      {
        "type": "paragraph",
        "text": "A pure advisory bank sells advice and earns fees. A pure fund raises money and invests it for a return. A merchant bank does both — it advises clients on transactions and also commits capital into situations, sometimes the same ones. Privatus describes itself as a corporate adviser and investment partner specialising in private capital across Asia Pacific, with a model where it advises and invests alongside select private-capital partners. That dual identity is the single most important thing to internalise."
      },
      {
        "type": "subheading",
        "text": "The two revenue engines"
      },
      {
        "type": "paragraph",
        "text": "__Advisory fees. __On a mandate the firm typically earns a retainer (a fixed monthly or milestone fee) plus a success fee (a percentage of deal value, payable on completion). The success fee aligns the adviser with getting the deal done on good terms."
      },
      {
        "type": "paragraph",
        "text": "__Investment returns. __On the principal side the firm and its capital partners earn returns on the capital they invest — capital gains on equity, plus, in a fund structure, management fees and carried interest (a share of profits above a hurdle). Here the time horizon is years, not months."
      },
      {
        "type": "callout",
        "variant": "privatus",
        "label": "Privatus angle",
        "body": [
          {
            "type": "paragraph",
            "text": "Privatus has deployed more than A$350m of committed capital for high-net-worth individuals and family offices, and is a certified B Corp operating from Sydney and Singapore (CapitaSpring). The Singapore office is partner-led by Boon-Kee Tan and Terence Lim. That capital base — private wealth and family offices rather than institutions — shapes everything: it is patient, relationship-driven, and often wants to co-invest directly."
          }
        ]
      },
      {
        "type": "subheading",
        "text": "Why doing both is powerful"
      },
      {
        "type": "paragraph",
        "text": "Advisory relationships generate proprietary insight and deal flow; investing capital deepens alignment with clients and partners and captures upside beyond fees. Seeing a sector as both an adviser and an investor produces sharper judgement than either lens alone — you learn what buyers actually pay and where value is really created."
      },
      {
        "type": "subheading",
        "text": "Where the analyst fits"
      },
      {
        "type": "paragraph",
        "text": "As an analyst/associate you are the engine behind the partners. Day to day that means building and maintaining financial models, drafting marketing and investment materials, running comparable and precedent analyses, keeping diligence and data-room trackers immaculate, researching companies and sectors, and turning partner questions around quickly and accurately. Early credibility is built less by brilliance than by reliability — numbers that tie out, files that are clean, deadlines that are met."
      },
      {
        "type": "callout",
        "variant": "watch",
        "label": "Watch out",
        "body": [
          {
            "type": "paragraph",
            "text": "Don't conflate the two hats. When supporting a client's ask you argue their best case; when testing the firm's own investment you lean conservative. Bringing advisory optimism into an investment decision (or vice versa) is how juniors lose trust."
          }
        ]
      },
      {
        "type": "callout",
        "variant": "practice",
        "label": "Practice today",
        "body": [
          {
            "type": "paragraph",
            "text": "Read the firm's About, Advisory and Investments pages end to end. Write a one-page note answering: what does the Singapore office likely do versus Sydney, and what is each Singapore partner's background? Then list every deal on the site and tag it advisory or investment, buy-side or sell-side."
          }
        ]
      }
    ]
  },
  {
    "id": 2,
    "kind": "day",
    "phase": "Phase 1 — Foundations (Days 1–4)",
    "day": 2,
    "title": "Day 2 — The M&A deal lifecycle",
    "subtitle": "Goal: know every stage of a deal so you can anticipate what's needed next.",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Sell-side and buy-side mandates move through a recognisable sequence. Learn it as a map: at any moment you should know which stage you're in and what the next deliverable is."
      },
      {
        "type": "subheading",
        "text": "The stages in detail"
      },
      {
        "type": "list",
        "ordered": true,
        "items": [
          "Origination & pitch — the firm develops a relationship and pitches, usually with a pitch book showing positioning, process options and an indicative valuation range.",
          "Engagement letter — scope, fees (retainer + success fee), exclusivity and the “tail” (the period after termination during which a success fee is still owed if a deal closes) are agreed.",
          "Preparation — build the operating model and the marketing materials; agree the equity story and the buyer/target universe.",
          "Marketing — a short, anonymous teaser is sent to potential counterparties; interested parties sign an NDA (confidentiality agreement) and then receive the CIM, the full information memorandum.",
          "First round — parties submit indicative, non-binding offers (NBIOs / IOIs). The seller draws a shortlist.",
          "Management presentations & data room — shortlisted parties meet management and access the virtual data room (VDR).",
          "Due diligence — financial, commercial, legal, tax and ESG workstreams run in parallel (covered on Day 11).",
          "Final bids — binding offers, usually with a marked-up SPA (sale & purchase agreement).",
          "Negotiation & signing — price, structure and risk allocation are settled; the SPA is signed.",
          "Closing (completion) — conditions precedent (e.g. regulatory approval) are satisfied, funds flow, ownership transfers. Signing and closing are often not the same day."
        ]
      },
      {
        "type": "subheading",
        "text": "Auction vs bilateral"
      },
      {
        "type": "paragraph",
        "text": "A broad auction maximises competitive tension and price but risks leaks and takes more management time. A bilateral (one buyer) or targeted process trades some price tension for speed, confidentiality and certainty. Choosing the process is a core piece of sell-side advice."
      },
      {
        "type": "subheading",
        "text": "Price mechanisms: completion accounts vs locked box"
      },
      {
        "type": "paragraph",
        "text": "__Completion accounts: __the final price is trued up after closing based on actual net debt and working capital at completion."
      },
      {
        "type": "paragraph",
        "text": "__Locked box: __price is fixed off a historical balance-sheet date; the buyer bears risk/reward from that date, with leakage protection. Common in European and increasingly APAC deals for its certainty."
      },
      {
        "type": "subheading",
        "text": "Process differences by mandate"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "__Sell-side: __run the process, market the asset, drive competitive tension, get to signing.",
          "__Buy-side: __find and approach targets, lead diligence, structure the offer, negotiate to protect the buyer.",
          "__Capital raise: __position a growth story to investors; the “buyer” is providing growth capital, not buying the whole company (links to Day 12)."
        ]
      },
      {
        "type": "callout",
        "variant": "privatus",
        "label": "Privatus angle",
        "body": [
          {
            "type": "paragraph",
            "text": "In Australia, deals above the relevant thresholds need FIRB (Foreign Investment Review Board) approval — a real conditions-precedent and timing factor on cross-border ANZ transactions, exactly the kind Privatus runs between Australia and Singapore."
          }
        ]
      },
      {
        "type": "callout",
        "variant": "watch",
        "label": "Watch out",
        "body": [
          {
            "type": "paragraph",
            "text": "“Signed” is not “done.” Conditions precedent — regulatory clearances, financing, third-party consents — can still break a signed deal. Track them as carefully as the headline terms."
          }
        ]
      },
      {
        "type": "callout",
        "variant": "practice",
        "label": "Practice today",
        "body": [
          {
            "type": "paragraph",
            "text": "Draw the full timeline yourself without copying one, marking where the analyst spends time. Then classify three Privatus deals by where they'd have sat in this sequence and whether they were auction or bilateral."
          }
        ]
      }
    ]
  },
  {
    "id": 3,
    "kind": "day",
    "phase": "Phase 1 — Foundations (Days 1–4)",
    "day": 3,
    "title": "Day 3 — Reading financial statements like a dealmaker",
    "subtitle": "Goal: extract sustainable earning power and true net obligations — the things that get valued and paid for.",
    "blocks": [
      {
        "type": "paragraph",
        "text": "You read statements well from credit work. The dealmaker's shift is to look past reported figures to the normalised, run-rate economics a buyer is really acquiring, and to the genuine net debt they inherit."
      },
      {
        "type": "subheading",
        "text": "Quality of earnings (QoE)"
      },
      {
        "type": "paragraph",
        "text": "Reported profit is rarely the number you value. QoE strips out what won't recur and adjusts for distortions to reach clean, sustainable earnings. A taxonomy of typical adjustments:"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "__Non-recurring items: __one-off legal settlements, restructuring costs, transaction fees, asset write-downs.",
          "__Normalisations: __an owner's above- or below-market salary in a private company, related-party rents not at arm's length, pandemic-era distortions.",
          "__Run-rate adjustments: __annualising a price rise or a new contract signed mid-year, or removing a customer already lost."
        ]
      },
      {
        "type": "paragraph",
        "text": "Every adjustment must be defensible with evidence; buyers attack aggressive add-backs, and the gap between reported and “adjusted” EBITDA is where price disputes live."
      },
      {
        "type": "subheading",
        "text": "Working capital and the normalisation peg"
      },
      {
        "type": "formula",
        "text": "Net working capital = receivables + inventory − payables"
      },
      {
        "type": "paragraph",
        "text": "Deals are typically done cash-free / debt-free with a working-capital “peg” (a normalised target, often the trailing 12-month average). If working capital at completion is below the peg, the buyer pays less; above, more — because too little working capital means the buyer must inject cash to run the business. The working-capital cycle also tells you how cash-hungry growth will be."
      },
      {
        "type": "subheading",
        "text": "Net debt and debt-like items"
      },
      {
        "type": "formula",
        "text": "Net debt = total borrowings + finance leases + preferred − cash & equivalents"
      },
      {
        "type": "paragraph",
        "text": "Then add “debt-like items” a buyer effectively assumes: unfunded pensions, deferred consideration/earnouts, large overdue payables, restructuring provisions, and dividends declared but unpaid. Net debt is the bridge from enterprise value to equity value (Day 5), so misjudging it misprices the equity directly."
      },
      {
        "type": "subheading",
        "text": "The EBITDA-to-cash bridge"
      },
      {
        "type": "formula",
        "text": "FCF ≈ EBITDA − ΔNWC − capex − cash interest − cash tax"
      },
      {
        "type": "paragraph",
        "text": "This shows how much accounting profit actually becomes cash. A business with high EBITDA but heavy capex and a swelling working-capital cycle converts poorly — a crucial quality signal."
      },
      {
        "type": "callout",
        "variant": "watch",
        "label": "Watch out",
        "body": [
          {
            "type": "paragraph",
            "text": "Treat the seller's “Adjusted EBITDA” as their best case, and rebuild it from the audited accounts. Also confirm the accounting basis (e.g. IFRS 16 puts leases on balance sheet and lifts EBITDA) before comparing anything."
          }
        ]
      },
      {
        "type": "callout",
        "variant": "privatus",
        "label": "Privatus angle",
        "body": [
          {
            "type": "paragraph",
            "text": "For a childcare roll-up like Story House / Aurrum Kids, QoE focuses on occupancy-driven revenue durability, government subsidy dependence, lease obligations, and the true maintenance capex per centre — the difference between headline and sustainable earnings."
          }
        ]
      },
      {
        "type": "callout",
        "variant": "practice",
        "label": "Practice today",
        "body": [
          {
            "type": "paragraph",
            "text": "Take a listed company's annual report and compute normalised EBITDA, net debt (including any debt-like items), and an EBITDA-to-FCF bridge. Write two sentences on the quality of its earnings."
          }
        ]
      }
    ]
  },
  {
    "id": 4,
    "kind": "day",
    "phase": "Phase 1 — Foundations (Days 1–4)",
    "day": 4,
    "title": "Day 4 — Know the deal book cold",
    "subtitle": "Goal: be able to speak fluently about their actual transactions and the sectors behind them.",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Nothing makes you sound like an insider faster than knowing the firm's deals. For each, hold three facts — the mandate (what Privatus did), the parties, and the value driver — and understand the sector logic underneath."
      },
      {
        "type": "subheading",
        "text": "The deals"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "__DBG Health — __advisory on a A$2.6bn capital commitment from BDT & MSD; a large healthcare growth-capital situation. Driver: scaling a diversified healthcare platform.",
          "__Automic — __sell-side adviser on the ~A$725m sale to Advent International; earlier a Five V minority and the take-private of Advanced Share Registry. Driver: consolidating registry/technology infrastructure into a scaled platform.",
          "__Viridios AI — __advised on the sale to Bloomberg; carbon-credit pricing and analytics. Driver: data/analytics value in a growing carbon market.",
          "__Story House Early Learning — __childcare/education roll-up including Aurrum Kids. Driver: buy-and-build economics in a fragmented, demand-resilient sector.",
          "__FairSupply — __supply-chain ESG and modern-slavery analytics; a Series A raise. Driver: regulatory-driven demand for supply-chain transparency."
        ]
      },
      {
        "type": "subheading",
        "text": "The sector map"
      },
      {
        "type": "paragraph",
        "text": "Read across the book and a pattern emerges: healthcare, financial/registry infrastructure, education, and a strong data-plus-ESG sub-theme (carbon markets, supply-chain transparency). That tells you where the firm's conviction, network and likely future mandates sit — useful context for any conversation."
      },
      {
        "type": "subheading",
        "text": "How to research a deal"
      },
      {
        "type": "paragraph",
        "text": "For each: read the firm's own write-up, then search press at announcement for value, parties and rationale; identify the buyer/seller type (strategic vs financial); and note the value driver in one line. Build a reusable one-pager template — mandate, parties, size, rationale, your one-line take — and fill it for each deal."
      },
      {
        "type": "callout",
        "variant": "practice",
        "label": "Practice today",
        "body": [
          {
            "type": "paragraph",
            "text": "Write a one-paragraph profile of each of the five deals above. Pick the one you find most compelling and prepare two sentences on why — you'll use it to show genuine interest in week one."
          }
        ]
      }
    ]
  },
  {
    "id": 5,
    "kind": "day",
    "phase": "Phase 2 — Valuation (Days 5–9)",
    "day": 5,
    "title": "Day 5 — Comparable companies (trading comps)",
    "subtitle": "Goal: value a company against what the market pays for similar listed peers.",
    "blocks": [
      {
        "type": "subheading",
        "text": "The foundation: enterprise vs equity value"
      },
      {
        "type": "paragraph",
        "text": "Master this bridge first — every multiple depends on it. Equity value is the shareholders' stake; enterprise value is the whole operating business, independent of financing."
      },
      {
        "type": "formula",
        "text": "Equity value = share price × fully diluted shares"
      },
      {
        "type": "formula",
        "text": "EV = equity value + net debt + preferred + minority interest − associates"
      },
      {
        "type": "paragraph",
        "text": "A whole-business buyer assumes the debt and gets the cash, so EV adds net debt. Because EV is capital-structure-neutral, pair it with pre-interest metrics (revenue, EBITDA, EBIT); pair equity value with post-interest metrics (net income, EPS)."
      },
      {
        "type": "subheading",
        "text": "Fully diluted shares: the treasury stock method"
      },
      {
        "type": "paragraph",
        "text": "In-the-money options and convertibles add shares. Under the treasury stock method, option proceeds are assumed to buy back shares at the current price, so only the net new shares are added. Forgetting dilution understates equity value and the implied price."
      },
      {
        "type": "subheading",
        "text": "Building the comp set"
      },
      {
        "type": "paragraph",
        "text": "Choose 5–10 listed peers genuinely similar on industry, size, geography, growth and margins. Closeness beats quantity — three tight comps outweigh ten loose ones. Document why each is in or out."
      },
      {
        "type": "subheading",
        "text": "Spreading and cleaning"
      },
      {
        "type": "paragraph",
        "text": "“Spreading” a comp means pulling its figures and computing multiples on a like-for-like basis: calendarise to a common year-end, strip non-recurring items, and confirm consistent accounting. Use last-twelve-months (LTM) for the trailing view and forward (NTM / next fiscal year) where estimates exist — markets price the future."
      },
      {
        "type": "subheading",
        "text": "Choosing the multiple"
      },
      {
        "type": "paragraph",
        "text": "EV/Revenue   EV/EBITDA   EV/EBIT   P/E"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "__EV/Revenue: __early-stage or unprofitable companies where earnings aren't meaningful.",
          "__EV/EBITDA: __the workhorse; capital-structure-neutral and pre-D&A.",
          "__EV/EBIT: __when peers differ in capital intensity, since EBIT is after depreciation.",
          "__P/E: __mature, profitable companies and financials (where capital structure is part of the model)."
        ]
      },
      {
        "type": "subheading",
        "text": "Applying it"
      },
      {
        "type": "paragraph",
        "text": "Take the median of the set (more robust to outliers than the mean) and apply it to the target's corresponding metric to imply EV, then bridge to equity and per-share value."
      },
      {
        "type": "callout",
        "variant": "worked",
        "label": "Worked example",
        "body": [
          {
            "type": "paragraph",
            "text": "Target EBITDA = $50m. Peer median EV/EBITDA = 9.0x → implied EV = $450m."
          },
          {
            "type": "paragraph",
            "text": "Net debt = $80m → implied equity value = $370m. Diluted shares = 100m → $3.70 per share."
          }
        ]
      },
      {
        "type": "callout",
        "variant": "watch",
        "label": "Watch out",
        "body": [
          {
            "type": "paragraph",
            "text": "Matching the numerator to the denominator is the most common comp error: never EV/net income or equity value/EBITDA. And a multiple built on uncleaned, uncalendarised figures is noise dressed as precision."
          }
        ]
      },
      {
        "type": "callout",
        "variant": "privatus",
        "label": "Privatus angle",
        "body": [
          {
            "type": "paragraph",
            "text": "For an ANZ company in one of their sectors (childcare, registry/fintech, carbon tech), the right peer set is regional and sector-specific; a US mega-cap “comparable” usually isn't comparable at all."
          }
        ]
      },
      {
        "type": "callout",
        "variant": "practice",
        "label": "Practice today",
        "body": [
          {
            "type": "paragraph",
            "text": "Build a six-company comp table in Excel: pull revenue, EBITDA, net debt, share count; compute EV and EV/EBITDA and EV/Revenue; take the median and apply it to a target. Anchor it in an ANZ sector from their book."
          }
        ]
      }
    ]
  },
  {
    "id": 6,
    "kind": "day",
    "phase": "Phase 2 — Valuation (Days 5–9)",
    "day": 6,
    "title": "Day 6 — Precedent transactions",
    "subtitle": "Goal: value using what acquirers have actually paid to buy similar companies.",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Same logic as trading comps, but the multiples come from completed M&A deals rather than daily prices. Because an acquirer pays for control, these multiples embed a control premium and usually sit above trading comps."
      },
      {
        "type": "subheading",
        "text": "The control premium"
      },
      {
        "type": "paragraph",
        "text": "Control lets an owner change strategy, management and capital structure and capture synergies, so buyers pay above the undisturbed share price — often 20–40%, though it varies widely. Precedent multiples therefore tell you what control has cost in practice."
      },
      {
        "type": "subheading",
        "text": "Sourcing and computing"
      },
      {
        "type": "paragraph",
        "text": "Pull deal multiples from announcements, press and databases, using the target's metrics at announcement (LTM at the time). Prioritise recent deals struck in similar market conditions; older deals from a different cycle can mislead badly."
      },
      {
        "type": "subheading",
        "text": "Strategic vs financial buyers"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "__Strategic buyers __can pay more because they bank synergies (cost or revenue) from combining businesses.",
          "__Financial buyers (sponsors) __are disciplined by the returns their model must hit, so they anchor nearer intrinsic value."
        ]
      },
      {
        "type": "paragraph",
        "text": "Separate the two when reading precedents — a strategic, synergy-driven multiple is not a fair benchmark for a financial deal."
      },
      {
        "type": "subheading",
        "text": "Deal-structure effects"
      },
      {
        "type": "paragraph",
        "text": "Cash vs stock consideration, earnouts, and minority vs control stakes all move the headline multiple. Note the structure beside each data point so you compare like with like."
      },
      {
        "type": "callout",
        "variant": "watch",
        "label": "Watch out",
        "body": [
          {
            "type": "paragraph",
            "text": "Disclosure is often partial, especially for private targets, so precedent sets are smaller and messier than trading comps. Be transparent about which data points are estimates, and weight recent, condition-matched, comparable-structure deals most."
          }
        ]
      },
      {
        "type": "callout",
        "variant": "privatus",
        "label": "Privatus angle",
        "body": [
          {
            "type": "paragraph",
            "text": "Registry/technology-services deals around the Automic and Advanced Share Registry transactions are a natural precedent set for that sub-sector; the control premium and strategic-buyer logic are visible in the Advent acquisition."
          }
        ]
      },
      {
        "type": "callout",
        "variant": "practice",
        "label": "Practice today",
        "body": [
          {
            "type": "paragraph",
            "text": "Build a 4–5 deal precedent-transactions table in one sector: announced value, target metric, implied multiple, buyer type and structure. Compare the median to your Day 5 trading-comp median and explain the gap."
          }
        ]
      }
    ]
  },
  {
    "id": 7,
    "kind": "day",
    "phase": "Phase 2 — Valuation (Days 5–9)",
    "day": 7,
    "title": "Day 7 — Discounted cash flow (part 1): cash flows & discount rate",
    "subtitle": "Goal: build the cash-flow engine and the discount rate from scratch.",
    "blocks": [
      {
        "type": "paragraph",
        "text": "A DCF values a business as the present value of the cash it will generate, discounted for time and risk. It's the most assumption-heavy method — and the most revealing about what you actually believe."
      },
      {
        "type": "subheading",
        "text": "Unlevered free cash flow (FCFF)"
      },
      {
        "type": "formula",
        "text": "FCFF = EBIT×(1−tax) + D&A − capex − ΔNWC"
      },
      {
        "type": "formula",
        "text": "Work down from revenue: revenue → EBIT (via margins) → NOPAT = EBIT×(1−tax) → add back non-cash D&A → subtract capex and the increase in net working capital. “Unlevered” means before financing flows, so the result is attributable to all capital providers and yields an enterprise value. Project an explicit horizon of 5–10 years off a defensible operating model."
      },
      {
        "type": "subheading",
        "text": "The mid-year convention"
      },
      {
        "type": "paragraph",
        "text": "Cash arrives throughout the year, not only at year-end, so many models discount each year's flow as if received mid-year (period 0.5, 1.5, ...). It lifts value modestly and is standard practice."
      },
      {
        "type": "subheading",
        "text": "WACC — the discount rate"
      },
      {
        "type": "formula",
        "text": "WACC = (E/V)×Re + (D/V)×Rd×(1−tax)"
      },
      {
        "type": "paragraph",
        "text": "WACC is the blended required return of equity and debt, weighted at market values. The (1−tax) on debt reflects the tax-deductibility of interest."
      },
      {
        "type": "subheading",
        "text": "Cost of equity via CAPM"
      },
      {
        "type": "formula",
        "text": "Re = Rf + β×ERP (+ size / country premia if used)"
      },
      {
        "type": "paragraph",
        "text": "Risk-free rate (Rf): a long-dated government bond yield. Equity risk premium (ERP): the extra return equities demand over the risk-free rate. Beta (β): the company's sensitivity to market moves."
      },
      {
        "type": "subheading",
        "text": "Levering and unlevering beta"
      },
      {
        "type": "formula",
        "text": "βu = βL / [1 + (1−tax)×D/E] βL = βu×[1 + (1−tax)×D/E]"
      },
      {
        "type": "paragraph",
        "text": "Pure-play betas come from peers, but each peer's beta reflects its own leverage. Unlever each to strip out financing risk, take the median asset beta, then relever at the target's capital structure. Skipping this contaminates the cost of equity with peers' balance sheets."
      },
      {
        "type": "callout",
        "variant": "watch",
        "label": "Watch out",
        "body": [
          {
            "type": "paragraph",
            "text": "Weight the capital structure at market values, not book, and use a target/long-run structure rather than today's snapshot if leverage is abnormal. Small changes in Rf, ERP or beta move WACC and swing the whole valuation."
          }
        ]
      },
      {
        "type": "callout",
        "variant": "practice",
        "label": "Practice today",
        "body": [
          {
            "type": "paragraph",
            "text": "Project five years of unlevered FCF for one company and build its WACC from scratch — pull peer betas, unlever and relever, and assemble CAPM. Keep every input in its own labelled cell."
          }
        ]
      }
    ]
  },
  {
    "id": 8,
    "kind": "day",
    "phase": "Phase 2 — Valuation (Days 5–9)",
    "day": 8,
    "title": "Day 8 — Discounted cash flow (part 2): terminal value, bridge & sensitivity",
    "subtitle": "Goal: finish the DCF, bridge to per-share value, and stress it. Cross-check against Damodaran.",
    "blocks": [
      {
        "type": "subheading",
        "text": "Terminal value"
      },
      {
        "type": "formula",
        "text": "Gordon growth: TV = FCFₙ×(1+g) / (WACC − g)"
      },
      {
        "type": "formula",
        "text": "Exit multiple: TV = terminal-year EBITDA × chosen multiple"
      },
      {
        "type": "paragraph",
        "text": "The terminal value captures all cash flows beyond the explicit horizon. The Gordon (perpetuity-growth) method assumes a steady growth rate forever; the exit-multiple method applies a sale multiple to the final year. Best practice is to compute both and cross-check: derive the implied perpetuity growth from your exit multiple, and the implied exit multiple from your growth rate, and make sure neither is absurd."
      },
      {
        "type": "subheading",
        "text": "Discount and assemble"
      },
      {
        "type": "formula",
        "text": "EV = Σ PV(FCFₜ) + PV(terminal value)"
      },
      {
        "type": "paragraph",
        "text": "Discount each explicit FCF and the terminal value at WACC, then sum for enterprise value. Bridge EV → equity value (subtract net debt and minorities, add associates) → divide by diluted shares for value per share."
      },
      {
        "type": "callout",
        "variant": "worked",
        "label": "Worked example",
        "body": [
          {
            "type": "paragraph",
            "text": "Sum of PV(explicit FCF) = $120m. Terminal value (Gordon) = $900m; PV of TV = $560m → EV = $680m."
          },
          {
            "type": "formula",
            "text": "Less net debt $80m → equity value $600m; ÷ 100m shares = $6.00 per share. Note TV is ~82% of EV — typical, and why g matters so much."
          }
        ]
      },
      {
        "type": "subheading",
        "text": "Sensitivity and scenarios"
      },
      {
        "type": "paragraph",
        "text": "A single DCF number is false precision. Run a data table flexing WACC against g (or the exit multiple) to produce a value range, and build base / upside / downside scenarios by toggling the operating drivers. Present the range, not a point."
      },
      {
        "type": "subheading",
        "text": "The football field"
      },
      {
        "type": "paragraph",
        "text": "Plot the value ranges from trading comps, precedent transactions and DCF as horizontal bars on one chart. Where they overlap is your defensible value range — the output partners actually use."
      },
      {
        "type": "callout",
        "variant": "watch",
        "label": "Watch out",
        "body": [
          {
            "type": "paragraph",
            "text": "Terminal value usually drives 60–80% of a DCF, so a careless g or exit multiple swamps all your forecasting. Keep g below long-run GDP growth and always below WACC, and sanity-check the implied terminal multiple."
          }
        ]
      },
      {
        "type": "callout",
        "variant": "practice",
        "label": "Practice today",
        "body": [
          {
            "type": "paragraph",
            "text": "Finish the DCF from Day 7: add terminal value (both methods, cross-checked), bridge to per-share value, and build a WACC×g sensitivity table. Then watch a Damodaran valuation lecture and compare your structure to one of his free spreadsheets, reconciling differences."
          }
        ]
      }
    ]
  },
  {
    "id": 9,
    "kind": "day",
    "phase": "Phase 2 — Valuation (Days 5–9)",
    "day": 9,
    "title": "Day 9 — The three-statement model",
    "subtitle": "Goal: build the engine that links all three statements into one consistent system.",
    "blocks": [
      {
        "type": "paragraph",
        "text": "A three-statement model links the income statement, balance sheet and cash-flow statement so that one set of assumptions drives all three and they stay internally consistent. It underpins the DCF, the LBO and almost everything else."
      },
      {
        "type": "subheading",
        "text": "Drivers first"
      },
      {
        "type": "paragraph",
        "text": "Build an assumptions/drivers block: revenue growth, margins, tax rate, capex as a % of revenue, working-capital days (DSO, DIO, DPO), depreciation policy, and financing. Everything downstream references these cells — never type a number twice."
      },
      {
        "type": "subheading",
        "text": "The links"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "__Income statement → __net income flows to retained earnings on the balance sheet and to the top of the cash-flow statement.",
          "__Cash-flow statement → __closing cash feeds the balance-sheet cash line.",
          "__Balance sheet → __must balance (assets = liabilities + equity). If it doesn't, a link upstream is wrong."
        ]
      },
      {
        "type": "subheading",
        "text": "The cash sweep / revolver plug"
      },
      {
        "type": "paragraph",
        "text": "Surplus cash can pay down debt (a cash sweep); a shortfall is funded by drawing a revolver. This balancing mechanism is what keeps the balance sheet balanced as assumptions change."
      },
      {
        "type": "subheading",
        "text": "Circularity"
      },
      {
        "type": "paragraph",
        "text": "Interest depends on debt; debt depends on cash generated; cash depends — via interest — on itself. Excel resolves this loop with iterative calculation enabled; professional models add a “circuit breaker” switch that zeroes interest to clear error spirals, then is switched back on."
      },
      {
        "type": "subheading",
        "text": "Hygiene — non-negotiable"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "__Colour code: __blue = hardcoded inputs, black = formulas, green = links to other sheets.",
          "__No hardcodes in formulas: __every assumption lives in its own input cell.",
          "__One formula per row, copied across: __consistency across columns prevents subtle, trust-destroying errors.",
          "__Build checks: __a balance-sheet-balances check and a cash-flow-ties check that flag red when broken."
        ]
      },
      {
        "type": "callout",
        "variant": "watch",
        "label": "Watch out",
        "body": [
          {
            "type": "paragraph",
            "text": "A balance sheet that won't balance is a real linkage error, not a rounding nuisance to bury under a plug. Find it. The usual culprits: a cash-flow sign error, or a balance-sheet item that doesn't flow through the cash-flow statement."
          }
        ]
      },
      {
        "type": "callout",
        "variant": "practice",
        "label": "Practice today",
        "body": [
          {
            "type": "paragraph",
            "text": "Build a simple three-statement model for one company from a drivers block, with a revolver/cash-sweep plug and two check rows. Make the balance sheet balance under a changed assumption."
          }
        ]
      }
    ]
  },
  {
    "id": 10,
    "kind": "day",
    "phase": "Phase 3 — Deal mechanics (Days 10–13)",
    "day": 10,
    "title": "Day 10 — The sell-side toolkit",
    "subtitle": "Goal: know every document that carries a sell-side process and why each exists.",
    "blocks": [
      {
        "type": "subheading",
        "text": "The documents, in sequence"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "__Teaser: __a one-to-two page anonymous summary — sector, scale, investment highlights, financial snapshot — designed to create interest without revealing identity.",
          "__NDA: __the confidentiality agreement signed before sensitive information is shared; may include a standstill (no hostile bid) and non-solicit (no poaching staff/customers).",
          "__CIM / IM: __the Confidential Information Memorandum — the full marketing document. Typical structure: executive summary, investment highlights, market overview, business description, management, historical financials, and a financial projection. Analysts often draft large parts of it.",
          "__Management presentation: __the live session where management tells the story to shortlisted bidders and answers questions.",
          "__Data room (VDR): __the secure repository of diligence materials, access tiered by bidder stage; you'll often manage structure and the Q&A log.",
          "__Process letters: __formal instructions to bidders at each round — what to submit, in what form, by when."
        ]
      },
      {
        "type": "subheading",
        "text": "The equity story"
      },
      {
        "type": "paragraph",
        "text": "Everything above serves one narrative: why this business is valuable and will grow. A strong equity story — defensible market position, clear growth levers, quality earnings — is what drives competitive tension and price. Drafting it well is a genuinely senior skill you can start learning now."
      },
      {
        "type": "subheading",
        "text": "Auction dynamics"
      },
      {
        "type": "paragraph",
        "text": "The art of sell-side is managing tension: enough bidders to compete, enough confidentiality to protect the client, and a credible willingness to walk. Exclusivity is granted late and sparingly, because it removes the seller's leverage."
      },
      {
        "type": "callout",
        "variant": "privatus",
        "label": "Privatus angle",
        "body": [
          {
            "type": "paragraph",
            "text": "For a Story-House-style childcare asset, the equity story centres on occupancy and enrolment growth, the quality and defensibility of locations, regulatory tailwinds, and the buy-and-build runway across a fragmented market."
          }
        ]
      },
      {
        "type": "callout",
        "variant": "practice",
        "label": "Practice today",
        "body": [
          {
            "type": "paragraph",
            "text": "Outline a CIM table of contents for a hypothetical sell-side client, then draft the one-paragraph “investment highlights” section as if pitching that business."
          }
        ]
      }
    ]
  },
  {
    "id": 11,
    "kind": "day",
    "phase": "Phase 3 — Deal mechanics (Days 10–13)",
    "day": 11,
    "title": "Day 11 — Buy-side & due diligence",
    "subtitle": "Goal: run diligence like an investor — and turn findings into deal terms. Your credit instinct is the edge.",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Acting for a buyer (or investing directly), diligence is where the discipline of asking “what could go wrong?” directly protects capital — exactly the muscle you built in credit."
      },
      {
        "type": "subheading",
        "text": "The workstreams"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "__Financial (QoE): __sustainability and cash conversion of earnings; the quality of the projections.",
          "__Commercial (CDD): __market size and growth, competitive position, customer concentration and churn, pricing power.",
          "__Legal: __contracts, change-of-control clauses, litigation, title, IP ownership.",
          "__Tax: __structure, exposures, the most efficient acquisition structure.",
          "__Operational / IT / HR: __systems, key-person risk, culture, integration feasibility.",
          "__ESG: __increasingly a standalone workstream (Day 15)."
        ]
      },
      {
        "type": "subheading",
        "text": "From findings to terms"
      },
      {
        "type": "paragraph",
        "text": "Diligence isn't an academic exercise; it reshapes the deal. Findings feed:"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "__Price: __a discovered liability or weaker run-rate earnings cuts the offer, or adjusts the completion accounts.",
          "__Reps & warranties: __the seller's contractual statements about the business; breaches trigger claims.",
          "__Indemnities & escrow: __specific protection for known risks; part of the price may be held back in escrow.",
          "__W&I insurance: __warranty & indemnity insurance increasingly covers breaches, easing clean exits for sellers.",
          "__Conditions & MAC: __a material adverse change clause lets a buyer walk if something serious happens before closing.",
          "__Earnouts: __deferred consideration contingent on post-deal performance, bridging price gaps."
        ]
      },
      {
        "type": "subheading",
        "text": "The red-flag report"
      },
      {
        "type": "paragraph",
        "text": "Advisers usually deliver a concise red-flag report first — only the issues that could change price or kill the deal — before any full report. Learning to surface the three things that matter, not the thirty that don't, is a senior instinct worth practising early."
      },
      {
        "type": "callout",
        "variant": "privatus",
        "label": "Privatus angle",
        "body": [
          {
            "type": "paragraph",
            "text": "For a DBG-Health-style buy-side mandate, the diligence question set spans regulatory and reimbursement exposure, supplier/customer concentration, and the durability of the growth plan — structured risk thinking applied to equity rather than credit."
          }
        ]
      },
      {
        "type": "callout",
        "variant": "practice",
        "label": "Practice today",
        "body": [
          {
            "type": "paragraph",
            "text": "Build a diligence request list grouped by workstream for a target of your choice, then write a three-bullet “red-flag” summary imagining what the biggest risks would be."
          }
        ]
      }
    ]
  },
  {
    "id": 12,
    "kind": "day",
    "phase": "Phase 3 — Deal mechanics (Days 10–13)",
    "day": 12,
    "title": "Day 12 — Growth equity & capital raising",
    "subtitle": "Goal: master the mechanics of a funding round — the core analytical task on the investing side.",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Growth equity sits between venture and buyout: minority investments in companies with proven models that need capital to scale. The mechanics of a round are essential vocabulary."
      },
      {
        "type": "subheading",
        "text": "Valuation mechanics"
      },
      {
        "type": "formula",
        "text": "Post-money = pre-money + new investment"
      },
      {
        "type": "formula",
        "text": "Investor ownership % = investment / post-money"
      },
      {
        "type": "paragraph",
        "text": "If a company raises $20m at a $80m pre-money valuation, post-money is $100m and the investor owns 20%."
      },
      {
        "type": "subheading",
        "text": "Primary vs secondary"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "__Primary: __new capital goes into the company to fund growth (dilutes everyone proportionally).",
          "__Secondary: __an investor buys existing shares from current holders, giving them liquidity but putting no new money into the business."
        ]
      },
      {
        "type": "subheading",
        "text": "Dilution and the option pool"
      },
      {
        "type": "paragraph",
        "text": "Issuing new shares reduces existing percentages. Investors often require an option-pool top-up created pre-money, which dilutes founders before the new money arrives — a subtle but material point in negotiations. Model the full cap table round by round to see who ends up owning what."
      },
      {
        "type": "subheading",
        "text": "Instruments"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "__Preferred shares: __the standard growth/VC instrument, carrying preferences over common.",
          "__SAFE / convertible note: __early-stage instruments that convert to equity at a later priced round, often with a discount or valuation cap.",
          "__Warrants: __rights to buy shares later at a set price, sometimes attached to debt."
        ]
      },
      {
        "type": "subheading",
        "text": "Economic & control terms"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "__Liquidation preference: __the preferred return paid before common on an exit. “1x non-participating” (take the greater of preference or as-converted) is the common, founder-friendly standard; “participating” preferred takes its money back and then shares the rest.",
          "__Anti-dilution: __protects investors if a later round prices lower — broad-based weighted-average is normal; full ratchet is aggressive.",
          "__Pro-rata rights: __the right to invest in future rounds to maintain ownership.",
          "__Governance: __board seats, protective provisions, information rights — control terms that matter as much as price."
        ]
      },
      {
        "type": "callout",
        "variant": "worked",
        "label": "Worked example",
        "body": [
          {
            "type": "paragraph",
            "text": "$20m at $80m pre → $100m post, investor owns 20%. A later down-round or a participating preference can change effective ownership and exit proceeds materially — model both."
          }
        ]
      },
      {
        "type": "callout",
        "variant": "watch",
        "label": "Watch out",
        "body": [
          {
            "type": "paragraph",
            "text": "Headline valuation is not the same as economics. A high “pre-money” paired with a participating preference, a full ratchet or a large pre-money option pool can leave founders worse off than a lower, cleaner offer. Always model the exit waterfall, not just ownership %."
          }
        ]
      },
      {
        "type": "callout",
        "variant": "privatus",
        "label": "Privatus angle",
        "body": [
          {
            "type": "paragraph",
            "text": "FairSupply's Series A and Viridios' growth rounds are exactly this type of situation; modelling pre/post-money and the resulting ownership and preferences is the core task."
          }
        ]
      },
      {
        "type": "callout",
        "variant": "practice",
        "label": "Practice today",
        "body": [
          {
            "type": "paragraph",
            "text": "Build a cap table in Excel and run a financing round through it — primary raise, option-pool top-up, resulting ownership. Then test how a participating preference changes proceeds at a sample exit value."
          }
        ]
      }
    ]
  },
  {
    "id": 13,
    "kind": "day",
    "phase": "Phase 3 — Deal mechanics (Days 10–13)",
    "day": 13,
    "title": "Day 13 — Returns analysis (IRR / MOIC) & a light LBO",
    "subtitle": "Goal: quantify returns and understand the levers that drive them.",
    "blocks": [
      {
        "type": "subheading",
        "text": "The two measures"
      },
      {
        "type": "formula",
        "text": "MOIC = total cash returned / total cash invested (e.g. 2.5x)"
      },
      {
        "type": "paragraph",
        "text": "IRR = the annualised rate that sets the investment's NPV to zero"
      },
      {
        "type": "paragraph",
        "text": "MOIC ignores timing; IRR captures it. A 3.0x in three years is a far higher IRR than a 3.0x in ten. Always read them together — a high IRR on a quick small flip and a high MOIC on a long hold tell different stories."
      },
      {
        "type": "subheading",
        "text": "The LBO in outline"
      },
      {
        "type": "paragraph",
        "text": "In a leveraged buyout an investor acquires a company using equity plus debt, uses the company's cash flow to service and repay that debt, grows the business, and exits later. The model has four pieces:"
      },
      {
        "type": "list",
        "ordered": true,
        "items": [
          "Sources & uses — how the purchase is funded (equity + debt tranches) and what it pays for (equity purchase price, refinanced debt, fees).",
          "Debt schedule — tranches (senior, mezzanine), interest, mandatory and optional repayment, covenants.",
          "Operating model — the three-statement projection that generates the cash flow.",
          "Returns / exit — exit enterprise value (exit-year EBITDA × exit multiple), repay remaining debt, equity proceeds → IRR and MOIC."
        ]
      },
      {
        "type": "subheading",
        "text": "The value-creation bridge"
      },
      {
        "type": "paragraph",
        "text": "Returns decompose into four levers — a framework partners love because it shows where value comes from:"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "__EBITDA growth: __growing revenue and margins (the most sustainable driver).",
          "__Multiple expansion: __selling at a higher multiple than entry (least controllable; never rely on it).",
          "__Deleveraging: __paying down debt so more of the exit value accrues to equity.",
          "__Free-cash-flow / dividends: __cash returned during the hold."
        ]
      },
      {
        "type": "subheading",
        "text": "Growth equity vs buyout"
      },
      {
        "type": "paragraph",
        "text": "Growth-equity deals use little or no leverage, so returns lean almost entirely on EBITDA/revenue growth and (hopefully) multiple expansion — closer to Privatus's investing style than a classic high-leverage buyout. Management incentives (sweet equity, ratchets) align the team to the same outcome."
      },
      {
        "type": "callout",
        "variant": "worked",
        "label": "Worked example",
        "body": [
          {
            "type": "paragraph",
            "text": "Enter: EBITDA $50m, 9.0x → EV $450m, $250m debt + $200m equity. Hold 5y: EBITDA grows to $75m, exit 9.0x → EV $675m, debt repaid to $150m → equity $525m."
          },
          {
            "type": "formula",
            "text": "MOIC = 525/200 = 2.6x; IRR ≈ 21%. Note how much came from EBITDA growth and deleveraging, not multiple expansion."
          }
        ]
      },
      {
        "type": "callout",
        "variant": "practice",
        "label": "Practice today",
        "body": [
          {
            "type": "paragraph",
            "text": "Build a one-page returns model: entry multiple and leverage, a simple EBITDA growth path, debt paydown, exit multiple → IRR and MOIC. Sensitise on entry leverage and exit multiple, and decompose the value-creation bridge."
          }
        ]
      }
    ]
  },
  {
    "id": 14,
    "kind": "day",
    "phase": "Phase 4 — The Privatus lens (Days 14–16)",
    "day": 14,
    "title": "Day 14 — Growth-investing frameworks",
    "subtitle": "Goal: judge whether a company deserves capital, beyond the model.",
    "blocks": [
      {
        "type": "subheading",
        "text": "Market sizing"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "__TAM / SAM / SOM: __Total Addressable / Serviceable Available / Serviceable Obtainable market. Is the prize big enough, and how much can this company realistically win? Build it bottom-up (units × price) where you can, not just top-down."
        ]
      },
      {
        "type": "subheading",
        "text": "Unit economics"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "__LTV / CAC: __customer lifetime value versus acquisition cost; a healthy ratio (often cited around 3x+) signals scalable economics.",
          "__Payback period: __months to recover acquisition cost — shorter means growth funds itself faster.",
          "__Contribution margin: __revenue minus variable cost per unit; the real engine of operating leverage.",
          "__Net revenue retention: __revenue from existing customers over time including expansion; above 100% means the base grows even without new customers — a powerful signal."
        ]
      },
      {
        "type": "subheading",
        "text": "Cohort and retention analysis"
      },
      {
        "type": "paragraph",
        "text": "Tracking customers by the period they joined reveals whether the business actually retains and expands users, or churns them and masks it with new-customer growth. Cohorts cut through headline growth."
      },
      {
        "type": "subheading",
        "text": "The Rule of 40"
      },
      {
        "type": "paragraph",
        "text": "revenue growth % + profit (or FCF) margin % ≥ 40   (software heuristic)"
      },
      {
        "type": "paragraph",
        "text": "A quick health check for software-type businesses: fast growth can justify thin margins, and vice versa, but the sum should clear ~40%."
      },
      {
        "type": "subheading",
        "text": "Moats and management"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "__Moat: __what protects returns — network effects, high switching costs, proprietary data/IP, scale economies, brand.",
          "__Management: __in growth deals, execution capability is often the deciding factor; assess track record, depth and alignment."
        ]
      },
      {
        "type": "subheading",
        "text": "The co-investment model"
      },
      {
        "type": "paragraph",
        "text": "Through Princeville Global, Privatus co-invests alongside a lead investor into global growth names (Immutable, SmartNews, Trendyol, DayOne). Co-investing means leveraging the lead's diligence and access while forming an independent view — so a crisp, self-standing one-page thesis is genuinely useful, and you must understand the economics (fees/carry, information and minority-protection rights) of investing behind a lead."
      },
      {
        "type": "callout",
        "variant": "practice",
        "label": "Practice today",
        "body": [
          {
            "type": "paragraph",
            "text": "Write a one-page investment thesis on one Princeville portfolio company: market size, unit economics, moat, management, key risks, and your verdict. Use only public information."
          }
        ]
      }
    ]
  },
  {
    "id": 15,
    "kind": "day",
    "phase": "Phase 4 — The Privatus lens (Days 14–16)",
    "day": 15,
    "title": "Day 15 — ESG & the B-Corp angle",
    "subtitle": "Goal: treat ESG as a value and risk lens, not a compliance box — it's core to this firm.",
    "blocks": [
      {
        "type": "subheading",
        "text": "B Corp, precisely"
      },
      {
        "type": "paragraph",
        "text": "A certified B Corporation has been assessed by the non-profit B Lab against verified standards covering social and environmental performance, accountability and transparency, via the B Impact Assessment, and must re-certify periodically. It is distinct from a “benefit corporation,” which is a legal company form. For Privatus, B Corp status signals values to clients and to the family-office capital it represents."
      },
      {
        "type": "subheading",
        "text": "How ESG enters investing"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "__Screening: __excluding certain activities.",
          "__Integration: __building material ESG factors into valuation and risk like any other driver.",
          "__Impact / additionality: __seeking measurable positive outcomes, and asking whether the capital actually causes them."
        ]
      },
      {
        "type": "subheading",
        "text": "Materiality and frameworks"
      },
      {
        "type": "paragraph",
        "text": "Not every ESG issue matters for every business; materiality (e.g. SASB's industry lens) focuses attention on what affects value. Useful frameworks to recognise: GRI (broad sustainability reporting — which you already know), TCFD (climate-related financial disclosure), and SFDR (EU fund-level sustainability classification)."
      },
      {
        "type": "subheading",
        "text": "ESG as value, not cost"
      },
      {
        "type": "paragraph",
        "text": "Strong ESG can lower operating and regulatory risk, widen the eventual buyer pool, and support a premium at exit; weak ESG is increasingly a discount or a deal-breaker. The discipline is to express ESG factors as inputs to a value or risk judgement — the same way you'd treat customer concentration."
      },
      {
        "type": "callout",
        "variant": "watch",
        "label": "Watch out",
        "body": [
          {
            "type": "paragraph",
            "text": "Watch for greenwashing — claims unsupported by data. Credible ESG analysis is specific and measurable; vague “green” narratives without metrics are a red flag, not a selling point."
          }
        ]
      },
      {
        "type": "callout",
        "variant": "privatus",
        "label": "Privatus angle",
        "body": [
          {
            "type": "paragraph",
            "text": "ESG is a sector Privatus invests in, not just a policy: Viridios (carbon-credit valuation analytics), FairSupply (supply-chain emissions and modern-slavery data), Carbon Friendly. Your GRI/ESG grounding plugs straight in — the shift is framing it as an investment input."
          }
        ]
      },
      {
        "type": "callout",
        "variant": "practice",
        "label": "Practice today",
        "body": [
          {
            "type": "paragraph",
            "text": "Take one Privatus deal and write half a page on how an ESG lens creates or protects value in it, naming the specific, measurable factors that matter."
          }
        ]
      }
    ]
  },
  {
    "id": 16,
    "kind": "day",
    "phase": "Phase 4 — The Privatus lens (Days 14–16)",
    "day": 16,
    "title": "Day 16 — APAC / ANZ market & regulatory context",
    "subtitle": "Goal: understand the market, the capital base and the rules the firm operates within.",
    "blocks": [
      {
        "type": "subheading",
        "text": "The capital base"
      },
      {
        "type": "paragraph",
        "text": "Much of the money is from high-net-worth individuals and family offices — patient, relationship-driven, often keen to co-invest directly. That differs from institutional LPs: more bespoke, more aligned on values (hence the B Corp fit), and reachable through trust and track record rather than formal mandates."
      },
      {
        "type": "subheading",
        "text": "The Australia–Singapore corridor"
      },
      {
        "type": "paragraph",
        "text": "Singapore is the regional hub for capital, wealth management and cross-border structuring; Australia provides deal flow and the firm's roots. Expect recurring themes of cross-border structuring, currency, and tax efficiency between the two."
      },
      {
        "type": "subheading",
        "text": "The regulators to know"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "__ASIC: __Australia's corporate and financial-services regulator.",
          "__AFSL: __the Australian Financial Services Licence (issued by ASIC) that authorises financial-services conduct — the firm's regulatory backbone in Australia.",
          "__FIRB: __the Foreign Investment Review Board screens significant foreign acquisitions; a live conditions-precedent and timing factor on inbound ANZ deals.",
          "__MAS: __the Monetary Authority of Singapore regulates financial services in Singapore — relevant to the Singapore office's activities."
        ]
      },
      {
        "type": "subheading",
        "text": "ANZ sector themes"
      },
      {
        "type": "paragraph",
        "text": "The ANZ deal landscape is shaped by resources/energy transition, healthcare and aged care, financial-services and registry/infrastructure, and a growing technology and climate sector — overlapping neatly with Privatus's book. Skim a recent market outlook to carry a few current themes into conversation."
      },
      {
        "type": "callout",
        "variant": "practice",
        "label": "Practice today",
        "body": [
          {
            "type": "paragraph",
            "text": "Read a recent ANZ M&A/PE outlook and note five themes. For each, write one line on how it could affect a Privatus mandate or investment."
          }
        ]
      }
    ]
  },
  {
    "id": 17,
    "kind": "day",
    "phase": "Phase 5 — Practice & launch (Days 17–20)",
    "day": 17,
    "title": "Day 17 — Build a model end to end",
    "subtitle": "Goal: integrate everything into one clean, presentable valuation.",
    "blocks": [
      {
        "type": "paragraph",
        "text": "By now you have the pieces; the skill being tested is making them consistent and presentable. Take one ANZ company and produce a single integrated workbook."
      },
      {
        "type": "subheading",
        "text": "The workflow"
      },
      {
        "type": "list",
        "ordered": true,
        "items": [
          "Build a clean three-statement model from a drivers block (Day 9).",
          "Drive an unlevered DCF off it, with terminal value and a WACC×g sensitivity (Days 7–8).",
          "Add a trading-comps tab and a precedent-transactions tab (Days 5–6).",
          "Summarise all methods in a football-field chart with a defensible value range."
        ]
      },
      {
        "type": "subheading",
        "text": "Self-review checklist"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "__Do the checks pass — __balance sheet balances, cash flow ties, no error cells?",
          "__Is it readable — __colour conventions applied, assumptions visible, units and periods labelled?",
          "__Is it honest — __are the ranges driven by real assumptions, and does the football field actually overlap?",
          "__Could a partner pick it up cold __and follow it in two minutes?"
        ]
      },
      {
        "type": "callout",
        "variant": "practice",
        "label": "Practice today",
        "body": [
          {
            "type": "paragraph",
            "text": "Produce the full workbook above for one ANZ company, ending with a football-field chart. Then run the self-review checklist and fix everything it flags."
          }
        ]
      }
    ]
  },
  {
    "id": 18,
    "kind": "day",
    "phase": "Phase 5 — Practice & launch (Days 17–20)",
    "day": 18,
    "title": "Day 18 — The investment-committee (IC) memo",
    "subtitle": "Goal: communicate an investment case the way it's actually decided. This is your best week-one artefact.",
    "blocks": [
      {
        "type": "paragraph",
        "text": "The IC memo is how an investment is proposed, debated and approved. Writing one shows you can think like an investor, not just operate a model."
      },
      {
        "type": "subheading",
        "text": "The structure"
      },
      {
        "type": "list",
        "ordered": true,
        "items": [
          "Recommendation & key terms — lead with the answer: what, how much, at what price/structure, expected return.",
          "Situation / opportunity — what's being proposed and why now.",
          "Business overview — what the company does and how it makes money.",
          "Market — size, growth, competitive dynamics (Day 14 frameworks).",
          "Financials & valuation — your triangulated range and the key assumptions behind it.",
          "Returns — IRR/MOIC under base and downside cases; the value-creation bridge.",
          "Risks & mitigants — the part where your credit instinct shines.",
          "Recommendation, conditions & next steps."
        ]
      },
      {
        "type": "subheading",
        "text": "Writing risks well"
      },
      {
        "type": "paragraph",
        "text": "Weak memos list generic risks; strong ones name the two or three things that could actually impair the investment, size them, and say specifically how each is mitigated or priced. Specificity signals you understand the business."
      },
      {
        "type": "subheading",
        "text": "Returns presentation"
      },
      {
        "type": "paragraph",
        "text": "Always show a downside case, not just the base. IC members trust an analyst who has already stress-tested their own thesis more than one who presents only the upside."
      },
      {
        "type": "callout",
        "variant": "privatus",
        "label": "Privatus angle",
        "body": [
          {
            "type": "paragraph",
            "text": "A two-page IC-style memo on one of their real deals — say Viridios or a Princeville name — is the single most impressive thing to have ready in your first week. It demonstrates the investor mindset directly."
          }
        ]
      },
      {
        "type": "callout",
        "variant": "practice",
        "label": "Practice today",
        "body": [
          {
            "type": "paragraph",
            "text": "Write a two-page IC memo on one Privatus deal using the structure above, with an explicit base and downside case and three specific, sized, mitigated risks."
          }
        ]
      }
    ]
  },
  {
    "id": 19,
    "kind": "day",
    "phase": "Phase 5 — Practice & launch (Days 17–20)",
    "day": 19,
    "title": "Day 19 — Excel & PowerPoint craft",
    "subtitle": "Goal: apply your front-loaded Excel mechanics at speed, and present like a banker.",
    "blocks": [
      {
        "type": "subheading",
        "text": "Excel — apply, don't relearn"
      },
      {
        "type": "paragraph",
        "text": "The crash course gave you the mechanics; now use them fluently: keyboard-only navigation, F4 anchoring, INDEX/MATCH or XLOOKUP, and data tables for sensitivities. Add light auditing habits — trace precedents/dependents, use the formula-auditing tools, and keep a checks block live."
      },
      {
        "type": "subheading",
        "text": "PowerPoint — the banker slide"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "__Action titles: __the title states the takeaway (“Margins expand as scale builds”), not a label (“Margins”). The reader should grasp the message from titles alone.",
          "__One message per slide: __if a slide makes two points, split it.",
          "__Chart discipline: __clean axes, direct labels over legends where possible, consistent colours, no clutter.",
          "__The “so what”: __every exhibit answers why it's there; if it doesn't change a conclusion, cut it."
        ]
      },
      {
        "type": "callout",
        "variant": "practice",
        "label": "Practice today",
        "body": [
          {
            "type": "paragraph",
            "text": "Rebuild part of your Day 17 model keyboard-only at speed, then turn its output into three client-ready slides with action titles. Use Macabacus's free formatting guides as a reference."
          }
        ]
      }
    ]
  },
  {
    "id": 20,
    "kind": "day",
    "phase": "Phase 5 — Practice & launch (Days 17–20)",
    "day": 20,
    "title": "Day 20 — Consolidate & plan your first week",
    "subtitle": "Goal: lock in recall, and walk in with a plan rather than just hope.",
    "blocks": [
      {
        "type": "subheading",
        "text": "Consolidate"
      },
      {
        "type": "paragraph",
        "text": "Re-skim every page of the firm's site so names, deals and language are instant recall, and re-read this manual's pitfalls and formula sheet. Aim to be able to explain any concept here in two plain sentences — that's the test of real understanding."
      },
      {
        "type": "subheading",
        "text": "First-week posture"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "__Listen first: __learn how this specific team runs a process before suggesting changes.",
          "__Own the unglamorous well: __flawless trackers and comps build trust faster than clever ideas.",
          "__Check before you send: __tie out every number; one wrong figure in a client deck costs more than a slow turnaround.",
          "__Use your edge: __when a risk or diligence question arises, your credit instinct is genuinely valuable — contribute it."
        ]
      },
      {
        "type": "subheading",
        "text": "Smart questions for your manager"
      },
      {
        "type": "list",
        "ordered": true,
        "items": [
          "What does a great first three months look like in this seat?",
          "Which live or upcoming mandates will I touch first, and what's my role?",
          "What are the team's modelling and formatting conventions — is there a house template?",
          "How do advisory and investment work intersect day-to-day in Singapore?",
          "Where do analysts here usually struggle early, so I can get ahead of it?"
        ]
      },
      {
        "type": "subheading",
        "text": "Your first 30/60/90"
      },
      {
        "type": "paragraph",
        "text": "Draft light goals: 30 days — master the house templates, know the live pipeline, deliver flawless support tasks; 60 days — own a workstream end to end; 90 days — contribute analysis that shapes a recommendation. Bring it to your first one-to-one; arriving with a plan is itself a strong signal."
      },
      {
        "type": "callout",
        "variant": "practice",
        "label": "Practice today",
        "body": [
          {
            "type": "paragraph",
            "text": "Prepare your five questions and your first-30/60/90 draft, and do a final pass over the formula sheet and glossary so recall is automatic on day one."
          }
        ]
      }
    ]
  },
  {
    "id": 21,
    "kind": "formulas",
    "phase": "",
    "day": null,
    "title": "Appendix 1 — Formula quick-reference",
    "subtitle": "",
    "blocks": [
      {
        "type": "formula",
        "text": "Equity value = share price × diluted shares (treasury stock method)"
      },
      {
        "type": "formula",
        "text": "Enterprise value = equity value + net debt + preferred + minorities − associates"
      },
      {
        "type": "formula",
        "text": "Net debt = total debt + leases + preferred + debt-like items − cash"
      },
      {
        "type": "formula",
        "text": "Net working cap = receivables + inventory − payables"
      },
      {
        "type": "formula",
        "text": "FCFF = EBIT×(1−tax) + D&A − capex − ΔNWC"
      },
      {
        "type": "formula",
        "text": "WACC = (E/V)×Re + (D/V)×Rd×(1−tax)"
      },
      {
        "type": "formula",
        "text": "Re (CAPM) = Rf + β×ERP"
      },
      {
        "type": "formula",
        "text": "Unlever beta = βL / [1 + (1−tax)×D/E]"
      },
      {
        "type": "formula",
        "text": "TV (Gordon) = FCFₙ×(1+g) / (WACC−g)"
      },
      {
        "type": "formula",
        "text": "TV (exit) = terminal EBITDA × multiple"
      },
      {
        "type": "formula",
        "text": "MOIC = cash out / cash in"
      },
      {
        "type": "formula",
        "text": "Post-money = pre-money + investment"
      },
      {
        "type": "formula",
        "text": "Ownership % = investment / post-money"
      },
      {
        "type": "formula",
        "text": "Rule of 40 = revenue growth % + margin % ≥ 40"
      }
    ]
  },
  {
    "id": 22,
    "kind": "glossary",
    "phase": "",
    "day": null,
    "title": "Appendix 2 — Glossary",
    "subtitle": "",
    "blocks": [
      {
        "type": "definition",
        "term": "Accretion / dilution",
        "def": "Whether a deal raises or lowers the acquirer's earnings per share."
      },
      {
        "type": "definition",
        "term": "Anti-dilution",
        "def": "Protection for investors if a later round prices below their entry."
      },
      {
        "type": "definition",
        "term": "Bolt-on",
        "def": "A small acquisition added to a larger platform company."
      },
      {
        "type": "definition",
        "term": "CIM",
        "def": "Confidential Information Memorandum — the full sell-side marketing document."
      },
      {
        "type": "definition",
        "term": "Completion accounts",
        "def": "Post-closing true-up of price based on actual net debt and working capital."
      },
      {
        "type": "definition",
        "term": "Control premium",
        "def": "The extra a buyer pays above market price to acquire control."
      },
      {
        "type": "definition",
        "term": "Earnout",
        "def": "Deferred consideration contingent on post-deal performance."
      },
      {
        "type": "definition",
        "term": "FIRB",
        "def": "Australia's Foreign Investment Review Board, which screens foreign acquisitions."
      },
      {
        "type": "definition",
        "term": "GP / LP",
        "def": "General Partner (manages the fund) / Limited Partner (provides capital)."
      },
      {
        "type": "definition",
        "term": "IC",
        "def": "Investment Committee — the body that approves investments."
      },
      {
        "type": "definition",
        "term": "IRR / MOIC",
        "def": "Annualised return / total return multiple on invested capital."
      },
      {
        "type": "definition",
        "term": "Locked box",
        "def": "Price fixed off a historical balance-sheet date, with leakage protection."
      },
      {
        "type": "definition",
        "term": "MAC",
        "def": "Material Adverse Change clause — lets a buyer walk if something serious occurs pre-close."
      },
      {
        "type": "definition",
        "term": "NBIO / IOI",
        "def": "Non-Binding Indicative Offer / Indication of Interest — a first-round bid."
      },
      {
        "type": "definition",
        "term": "Net revenue retention",
        "def": "Revenue from existing customers over time, including expansion."
      },
      {
        "type": "definition",
        "term": "Quality of earnings",
        "def": "Diligence assessing how sustainable and cash-backed reported profit is."
      },
      {
        "type": "definition",
        "term": "Reps & warranties",
        "def": "The seller's contractual statements about the business in the SPA."
      },
      {
        "type": "definition",
        "term": "SAFE / convertible",
        "def": "Early-stage instrument converting to equity at a later priced round."
      },
      {
        "type": "definition",
        "term": "SPA",
        "def": "Sale & Purchase Agreement — the binding transaction contract."
      },
      {
        "type": "definition",
        "term": "Synergies",
        "def": "Cost or revenue gains a buyer expects from combining businesses."
      },
      {
        "type": "definition",
        "term": "TAM / SAM / SOM",
        "def": "Total / Serviceable Available / Serviceable Obtainable market size."
      },
      {
        "type": "definition",
        "term": "Treasury stock method",
        "def": "Counts net new shares from in-the-money options, assuming proceeds buy back stock."
      },
      {
        "type": "definition",
        "term": "VDR",
        "def": "Virtual Data Room — secure repository for diligence documents."
      },
      {
        "type": "definition",
        "term": "W&I insurance",
        "def": "Warranty & Indemnity insurance covering breaches of deal warranties."
      },
      {
        "type": "definition",
        "term": "WACC",
        "def": "Weighted Average Cost of Capital — blended discount rate for cash flows."
      },
      {
        "type": "note",
        "text": "Company facts are drawn from privatuscp.com (accessed June 2026); verify the live deal book before your start date. The frameworks and formulas here are standard finance — use the resources in your plan (Damodaran, Rosenbaum & Pearl, CFI, Macabacus) to go deeper on any day."
      }
    ]
  }
];
