const STORAGE_KEY = "is414-study-quiz-state-v1";

const STUDY_SECTIONS = [
  {
    id: "risk",
    title: "Risk / Assets / Threats / Vulnerabilities / Risk Response",
    time: "12 min",
    slideFile: "https://byu.box.com/s/c3lo1mmpyrmev85245h7n3c9xysh85jf",
    slideLabel: "Risk",
    slideEmbedUrl: "",
    summary: [
      "Risk is the chance that a threat exploits a vulnerability and causes loss to an asset.",
      "Common formula: Risk = Likelihood x Impact (or probability x loss magnitude).",
      "Asset identification includes inventory, ownership, classification, and business criticality.",
      "Threats are potential causes of harm (e.g., ransomware, insider misuse, power failure).",
      "Vulnerabilities are weaknesses; common sources include NIST NVD and MITRE CVE/CWE.",
      "Risk response options: reduction, transfer, avoidance, and retention.",
    ],
    questions: [
      {
        id: "risk-q1",
        type: "mc",
        prompt:
          "A company decides likelihood is very small and chooses no extra controls or preparation. Which risk response is this?",
        options: ["Reduction", "Retention", "Avoidance", "Transfer"],
        correctIndex: 1,
        explanation:
          "Retention means the organization accepts the risk without adding new controls.",
        topic: "Risk response selection",
      },
      {
        id: "risk-q2",
        type: "mc",
        prompt: "Which formula is commonly used to estimate risk?",
        options: [
          "Risk = Likelihood x Impact",
          "Risk = Number of assets x Number of users",
          "Risk = Asset value - Threat frequency",
          "Risk = Controls + Compliance requirements",
        ],
        correctIndex: 0,
        explanation:
          "A standard estimate multiplies how likely an event is by how severe the impact would be.",
        topic: "Risk formulas",
      },
      {
        id: "risk-q3",
        type: "mc",
        prompt: "Which best describes a qualitative risk assessment?",
        options: [
          "Uses only exact dollar values and annualized loss expectancy",
          "Uses ratings like low/medium/high and judgment-based prioritization",
          "Requires vulnerability scanning tools only",
          "Eliminates uncertainty from risk decisions",
        ],
        correctIndex: 1,
        explanation:
          "Qualitative assessment uses categories and expert judgment rather than exact numeric values.",
        topic: "Qualitative vs quantitative assessment",
      },
      {
        id: "risk-q4",
        type: "mc",
        prompt:
          "Which is a widely used source for vulnerability information in risk assessment?",
        options: [
          "NIST NVD and MITRE CVE/CWE",
          "Only social media trend reports",
          "Company cafeteria schedules",
          "Website color accessibility checkers",
        ],
        correctIndex: 0,
        explanation:
          "Security teams commonly reference NVD and MITRE CVE/CWE for known vulnerabilities and weakness types.",
        topic: "Vulnerability intelligence sources",
      },
      {
        id: "risk-q5",
        type: "mc",
        prompt:
          "When is a security control usually justified in cost-benefit analysis?",
        options: [
          "When control cost is higher than expected loss reduction",
          "When expected loss reduction is greater than control cost",
          "Only when the control is free",
          "Only when risk is already eliminated",
        ],
        correctIndex: 1,
        explanation:
          "Controls are usually selected when they reduce expected loss by more than they cost to implement and operate.",
        topic: "Control cost-benefit",
      },
      {
        id: "risk-q6",
        type: "mc",
        prompt: "Which is a practical step in asset identification?",
        options: [
          "Create an asset inventory with owners and classifications",
          "Disable monitoring to reduce alert fatigue",
          "Skip systems that are not internet-facing",
          "Track only hardware and ignore data assets",
        ],
        correctIndex: 0,
        explanation:
          "Strong asset identification starts with inventory, ownership assignment, and classification by business value.",
        topic: "Asset identification",
      },
    ],
  },
  {
    id: "vuln",
    title: "Vulnerability Management & System Hardening",
    time: "12 min",
    slideFile: "https://byu.box.com/s/6oxbafkeuprllu4bxb7mnv6ffms7y57x",
    slideLabel: "Vulnerability Management and Systems Hardening",
    slideEmbedUrl: "",
    summary: [
      "Scanning finds open ports, services, and known weaknesses; Nmap is commonly used for network discovery.",
      "The cyber kill chain helps map attacker progress from reconnaissance through actions on objectives.",
      "Hardening reduces attack surface by disabling unnecessary services, tightening configs, and enforcing least privilege.",
      "Patch management reduces known exploitable flaws when done consistently and quickly.",
      "Layered controls include firewalls, anti-malware, sandboxing, and encryption.",
      "Full-disk encryption protects data at rest, but can add recovery/key-management complexity.",
    ],
    questions: [
      {
        id: "vuln-q1",
        type: "mc",
        prompt:
          "What is one thing Nmap scanning helps identify on a target system?",
        options: [
          "Open ports and running services",
          "Employee annual salary history",
          "Cloud billing discount rates",
          "Social media engagement metrics",
        ],
        correctIndex: 0,
        explanation:
          "Nmap is used to map hosts, ports, and services so teams can detect exposure and prioritize hardening.",
        topic: "Scanning purpose",
      },
      {
        id: "vuln-q2",
        type: "mc",
        prompt:
          "Which cyber kill chain stage is most associated with attacker-side vulnerability scanning?",
        options: ["Reconnaissance", "Delivery", "Installation", "Actions on Objectives"],
        correctIndex: 0,
        explanation:
          "Scanning usually supports reconnaissance by helping attackers identify exploitable weaknesses.",
        topic: "Cyber kill chain mapping",
      },
      {
        id: "vuln-q3",
        type: "mc",
        prompt: "Which is an example of sandboxing?",
        options: [
          "Running suspicious files in an isolated virtual environment",
          "Sharing one admin account across all servers",
          "Disabling patching to improve system speed",
          "Turning off endpoint protection during business hours",
        ],
        correctIndex: 0,
        explanation:
          "Sandboxing isolates untrusted code so behavior can be observed without exposing production systems.",
        topic: "Sandboxing",
      },
      {
        id: "vuln-q4",
        type: "mc",
        prompt:
          "Which choice best states one benefit and one drawback of full-drive encryption?",
        options: [
          "Benefit: protects data at rest; Drawback: key management and recovery overhead",
          "Benefit: eliminates phishing; Drawback: slower internet speed only",
          "Benefit: removes need for backups; Drawback: none",
          "Benefit: blocks all malware; Drawback: no remote access",
        ],
        correctIndex: 0,
        explanation:
          "Encryption reduces data exposure risk but introduces operational overhead around key handling and recovery.",
        topic: "Encryption tradeoffs",
      },
      {
        id: "vuln-q5",
        type: "mc",
        prompt: "What is the primary goal of patch management?",
        options: [
          "Increase attack surface for testing",
          "Reduce exploitable known vulnerabilities over time",
          "Replace backups with endpoint scanning",
          "Avoid all system change in production",
        ],
        correctIndex: 1,
        explanation:
          "Patch management closes known flaws before attackers can exploit them.",
        topic: "Patch management goals",
      },
      {
        id: "vuln-q6",
        type: "mc",
        prompt: "What is one core goal of system hardening?",
        options: [
          "Reduce attack surface through secure configuration baselines",
          "Increase default admin access for faster troubleshooting",
          "Delay patching to avoid any operational change",
          "Expose more services so monitoring has more data",
        ],
        correctIndex: 0,
        explanation:
          "Hardening aims to reduce exploitable weaknesses by tightening configuration and permissions.",
        topic: "Hardening goals",
      },
    ],
  },
  {
    id: "network",
    title: "Network Security",
    time: "12 min",
    slideFile: "https://byu.box.com/s/pduhpowggwmav6nlfnw4uf98gip3c479",
    slideLabel: "Network and Cloud Security",
    slideEmbedUrl: "",
    summary: [
      "Firewalls enforce network policy by filtering traffic between trust boundaries.",
      "Stateful firewalls track connection state, unlike basic stateless packet filters.",
      "Application-layer firewalls inspect higher-layer behavior and payload context.",
      "Type-1 hypervisors run on bare metal; Type-2 hypervisors run on top of a host OS.",
      "Containers (e.g., Docker) share the host kernel and are lighter than full virtual machines.",
      "MitM risks include session hijacking and ARP/DNS spoofing; IDS detects and IPS blocks malicious traffic.",
    ],
    questions: [
      {
        id: "network-q1",
        type: "mc",
        prompt:
          "What does a stateful firewall do that basic packet filtering does not?",
        options: [
          "Tracks active session/connection state",
          "Encrypts all packets by default",
          "Blocks only outbound traffic",
          "Eliminates need for IDS/IPS",
        ],
        correctIndex: 0,
        explanation:
          "Stateful inspection remembers flow state, allowing context-aware traffic decisions.",
        topic: "Stateful firewall behavior",
      },
      {
        id: "network-q2",
        type: "mc",
        prompt:
          "What does an application-level (next-gen) firewall add compared with basic packet filtering?",
        options: [
          "Only checks source and destination IP addresses",
          "Inspects application-layer behavior and content context",
          "Disables all deep packet inspection",
          "Requires no policy tuning",
        ],
        correctIndex: 1,
        explanation:
          "Application-level firewalls evaluate traffic at higher layers (for example, protocol behavior and app content).",
        topic: "Application-level firewall behavior",
      },
      {
        id: "network-q3",
        type: "mc",
        prompt: "Type-1 vs Type-2 hypervisor: what is the key difference?",
        options: [
          "Type-1 runs on bare metal; Type-2 runs on a host OS",
          "Type-1 is only for containers; Type-2 is only for firewalls",
          "Type-1 requires no hardware; Type-2 requires specialized chips",
          "Type-1 and Type-2 are different names for the same architecture",
        ],
        correctIndex: 0,
        explanation:
          "The main difference is where the hypervisor sits in the stack: directly on hardware or above a host OS.",
        topic: "Hypervisor types",
      },
      {
        id: "network-q4",
        type: "mc",
        prompt:
          "How are Docker-style containers different from full virtual machines?",
        options: [
          "Containers each require a full guest OS",
          "Containers share the host kernel and are typically lighter",
          "Containers cannot run isolated applications",
          "Containers replace all network security controls",
        ],
        correctIndex: 1,
        explanation:
          "Containers virtualize at the OS level and typically consume fewer resources than VMs.",
        topic: "Containers vs VMs",
      },
      {
        id: "network-q5",
        type: "mc",
        prompt: "ARP or DNS spoofing is often used to support which attack type?",
        options: ["Privilege escalation", "On-path (MitM) interception", "Disk encryption", "Data backup"],
        correctIndex: 1,
        explanation:
          "Spoofed ARP/DNS responses can redirect traffic through an attacker for interception or manipulation.",
        topic: "MitM enablers",
      },
      {
        id: "network-q6",
        type: "mc",
        prompt: "How does an IPS differ from an IDS?",
        options: [
          "IDS detects and alerts; IPS can block traffic inline",
          "IDS blocks inline; IPS only logs events",
          "IDS and IPS only inspect encrypted backups",
          "IDS and IPS are unrelated to network security",
        ],
        correctIndex: 0,
        explanation:
          "IDS focuses on detection visibility, while IPS adds active prevention.",
        topic: "IDS vs IPS",
      },
    ],
  },
  {
    id: "social",
    title: "Social Engineering",
    time: "10 min",
    slideFile: "https://byu.box.com/s/9z2cdglqcbpi9f8zq91h08dhn1nl7v4c",
    slideLabel: "Social Engineering",
    slideEmbedUrl: "",
    summary: [
      "Social engineering manipulates people instead of directly exploiting technology.",
      "Common techniques include pretexting, impersonation, phishing/spearphishing/vishing, and elicitation.",
      "Persuasion principles (for example, commitment/consistency) influence behavior.",
      "Rapport-building uses pacing, mirroring, and conversational alignment.",
      "Password profiling and personal detail gathering can improve attacker targeting.",
      "Defense includes verification steps, awareness training, and channel validation.",
    ],
    questions: [
      {
        id: "social-q1",
        type: "mc",
        prompt: "True/False: Using a slower rate of speech tends to decrease rapport with a target.",
        options: ["True", "False"],
        correctIndex: 0,
        explanation:
          "When pacing is mismatched (for example, noticeably slower than the target), rapport can drop.",
        topic: "Rapport principles",
      },
      {
        id: "social-q2",
        type: "mc",
        prompt:
          "Getting people to sign a pledge before the action date increases follow-through. Which persuasion principle is this?",
        options: ["Scarcity", "Reciprocity", "Commitment and consistency", "Social proof"],
        correctIndex: 2,
        explanation:
          "Public commitments increase pressure to act consistently with that commitment later.",
        topic: "Persuasion principles",
      },
      {
        id: "social-q3",
        type: "mc",
        prompt: "What is pretexting in social engineering?",
        options: [
          "Creating a believable false scenario to gain trust and extract information",
          "Blocking suspicious IP ranges with a firewall ACL",
          "Encrypting all email attachments at rest",
          "Installing antivirus signatures on a weekly schedule",
        ],
        correctIndex: 0,
        explanation:
          "Attackers use a crafted backstory (pretext) to appear legitimate and solicit sensitive details.",
        topic: "Pretexting",
      },
      {
        id: "social-q4",
        type: "mc",
        prompt: "Which statement best defines spearphishing?",
        options: [
          "A mass phishing campaign sent to random recipients",
          "A targeted phishing message crafted for a specific person or group",
          "A voice call using a fake caller ID",
          "A physical tailgating attempt",
        ],
        correctIndex: 1,
        explanation:
          "Spearphishing is personalized and targeted, usually using contextual details to improve credibility.",
        topic: "Spearphishing",
      },
      {
        id: "social-q5",
        type: "mc",
        prompt: "What is vishing?",
        options: [
          "Phishing conducted over voice calls",
          "A malware sample isolated in a sandbox",
          "A denial-of-service attack using botnets",
          "A password policy requiring 12+ characters",
        ],
        correctIndex: 0,
        explanation:
          "Vishing uses phone calls or voicemail to trick targets into sharing information or taking risky actions.",
        topic: "Vishing",
      },
      {
        id: "social-q6",
        type: "mc",
        prompt: "What is elicitation?",
        options: [
          "Blocking suspicious IP addresses at the firewall",
          "Extracting information through casual-seeming conversation",
          "Encrypting laptop drives at rest",
          "Running malware in an isolated sandbox",
        ],
        correctIndex: 1,
        explanation:
          "Elicitation gathers sensitive details indirectly by steering conversation.",
        topic: "Elicitation",
      },
    ],
  },
  {
    id: "target",
    title: "Target Case (and compare with Home Depot)",
    time: "8 min",
    slideFile: "https://byu.box.com/s/edh132887xucr8swa0nd7lsk29py4vm6",
    slideLabel: "Target Case",
    slideEmbedUrl: "",
    summary: [
      "Target's breach involved third-party vendor access and POS malware deployment.",
      "After entry, attackers moved laterally and exfiltrated payment card data.",
      "Detection tooling generated alerts, but response and escalation were insufficient.",
      "Containment and response included malware removal, disclosures, and customer support actions.",
      "Key lessons include stronger segmentation, tighter vendor access controls, and faster incident response.",
      "Target and Home Depot both involved third-party access abuse and POS-focused theft.",
    ],
    questions: [
      {
        id: "target-q1",
        type: "mc",
        prompt: "How did the initial Target compromise begin?",
        options: [
          "Direct brute-force login to POS terminals from the internet",
          "Compromised third-party vendor credentials",
          "A zero-day exploit in consumer web browsers",
          "An employee posting data on social media",
        ],
        correctIndex: 1,
        explanation:
          "The breach is widely associated with stolen third-party vendor credentials used to gain foothold access.",
        topic: "Initial attack vector",
      },
      {
        id: "target-q2",
        type: "mc",
        prompt: "What happened after initial entry into Target's environment?",
        options: [
          "Attackers moved laterally, installed POS malware, and exfiltrated card data",
          "The intrusion was immediately contained before any movement",
          "Only internal email signatures were modified",
          "The attacker disabled all network routing",
        ],
        correctIndex: 0,
        explanation:
          "After foothold access, attackers expanded reach and collected card data from compromised POS systems.",
        topic: "Post-compromise activity",
      },
      {
        id: "target-q3",
        type: "mc",
        prompt: "Why was the attack not stopped sooner?",
        options: [
          "No security systems were deployed",
          "Alerts and segmentation controls were not used effectively enough",
          "The attack was physically unstoppable",
          "Card data had no monitoring requirements",
        ],
        correctIndex: 1,
        explanation:
          "Reportedly, detection alerts existed, but operational response and containment were not fast enough.",
        topic: "Detection and response gaps",
      },
      {
        id: "target-q4",
        type: "mc",
        prompt: "Which action is part of a standard post-breach response Target used?",
        options: [
          "Ignoring customer notifications to avoid panic",
          "Containing malware and informing affected parties",
          "Keeping third-party access unchanged",
          "Disabling all encryption permanently",
        ],
        correctIndex: 1,
        explanation:
          "Response commonly includes containment, investigation, disclosure, and customer support/remediation.",
        topic: "Incident response",
      },
      {
        id: "target-q5",
        type: "mc",
        prompt: "Name one lesson learned from Target that also applies broadly.",
        options: [
          "Strengthen third-party access controls, segmentation, and incident response",
          "Disable logging to reduce storage costs",
          "Use shared vendor admin accounts for convenience",
          "Avoid patching POS systems during business quarters",
        ],
        correctIndex: 0,
        explanation:
          "Major lessons include stronger third-party governance, segmentation, and disciplined incident handling.",
        topic: "Lessons learned",
      },
      {
        id: "target-q6",
        type: "mc",
        prompt: "Which is a meaningful comparison between Target and Home Depot breaches?",
        options: [
          "Neither involved payment systems",
          "Both were linked to third-party credential abuse and POS malware exposure",
          "Both were caused mainly by natural disasters",
          "Home Depot was unrelated to network security controls",
        ],
        correctIndex: 1,
        explanation:
          "A common theme in both cases is third-party access risk combined with POS-focused data theft.",
        topic: "Target vs Home Depot comparison",
      },
    ],
  },
];

let state = loadState();

const dom = {};

document.addEventListener("DOMContentLoaded", init);

function init() {
  dom.landingView = document.getElementById("landingView");
  dom.appView = document.getElementById("appView");
  dom.startStudyingBtn = document.getElementById("startStudyingBtn");
  dom.resetProgressBtn = document.getElementById("resetProgressBtn");
  dom.sectionsContainer = document.getElementById("sectionsContainer");
  dom.reviewProgressBar = document.getElementById("reviewProgressBar");
  dom.quizProgressBar = document.getElementById("quizProgressBar");
  dom.reviewProgressText = document.getElementById("reviewProgressText");
  dom.quizProgressText = document.getElementById("quizProgressText");
  dom.overallScoreText = document.getElementById("overallScoreText");
  dom.sectionDots = document.getElementById("sectionDots");
  dom.startFinalQuizBtn = document.getElementById("startFinalQuizBtn");
  dom.retryFinalQuizBtn = document.getElementById("retryFinalQuizBtn");
  dom.finalQuizContainer = document.getElementById("finalQuizContainer");
  dom.finalSummary = document.getElementById("finalSummary");

  bindEvents();
  updateStudyVisibility();
  render();
}

function bindEvents() {
  dom.startStudyingBtn.addEventListener("click", () => {
    state.started = true;
    saveState();
    updateStudyVisibility();
  });

  dom.resetProgressBtn.addEventListener("click", () => {
    const confirmed = window.confirm("Reset all study progress and quiz scores?");
    if (!confirmed) return;
    state = defaultState();
    localStorage.removeItem(STORAGE_KEY);
    updateStudyVisibility();
    render();
  });

  dom.sectionsContainer.addEventListener("change", (event) => {
    const input = event.target;
    if (!input.matches('input[data-action="review-toggle"]')) return;
    const sectionId = input.getAttribute("data-section-id");
    state.reviewed[sectionId] = input.checked;
    saveState();
    renderProgressPanel();
  });

  dom.sectionsContainer.addEventListener("click", (event) => {
    const retryButton = event.target.closest('button[data-action="retry-section"]');
    if (!retryButton) return;
    const sectionId = retryButton.getAttribute("data-section-id");
    delete state.sectionScores[sectionId];
    saveState();
    render();
  });

  dom.sectionsContainer.addEventListener("submit", (event) => {
    const form = event.target;
    if (!form.matches(".section-quiz-form")) return;
    event.preventDefault();
    const sectionId = form.getAttribute("data-section-id");
    submitSectionQuiz(sectionId, new FormData(form));
  });

  dom.startFinalQuizBtn.addEventListener("click", generateFinalQuiz);
  dom.retryFinalQuizBtn.addEventListener("click", generateFinalQuiz);

  dom.finalQuizContainer.addEventListener("submit", (event) => {
    const form = event.target;
    if (!form.matches("#finalQuizForm")) return;
    event.preventDefault();
    submitFinalQuiz(new FormData(form));
  });
}

function render() {
  renderProgressPanel();
  renderSections();
  renderFinalReview();
}

function updateStudyVisibility() {
  dom.landingView.hidden = state.started;
  dom.appView.hidden = !state.started;
}

function renderSections() {
  dom.sectionsContainer.innerHTML = STUDY_SECTIONS.map((section) => {
    const reviewed = Boolean(state.reviewed[section.id]);
    const scoreData = state.sectionScores[section.id];
    const attempts = scoreData?.attempts || 0;
    const scoreLine = scoreData
      ? `Latest score: ${scoreData.score} / ${scoreData.total} (Attempts: ${attempts})`
      : "No quiz attempt yet.";

    return `
      <article class="card section-card" id="section-${section.id}">
        <div class="section-header">
          <div>
            <h3>${escapeHtml(section.title)}</h3>
            <p class="section-meta">Recommended time: ${escapeHtml(section.time)}</p>
          </div>
          <label class="review-toggle">
            <input type="checkbox" data-action="review-toggle" data-section-id="${section.id}" ${reviewed ? "checked" : ""} />
            Mark as reviewed
          </label>
        </div>

        <ul class="summary-list">
          ${section.summary.map((point) => `<li>${escapeHtml(point)}</li>`).join("")}
        </ul>
        ${renderSlidePanel(section)}

        <div class="quiz-panel">
          <h4>Section Quiz</h4>
          <p class="quiz-status">${escapeHtml(scoreLine)}</p>
          <form class="section-quiz-form" data-section-id="${section.id}">
            ${section.questions
              .map((question, index) => renderQuestionBlock(question, section.id, index + 1, "section"))
              .join("")}
            <div class="button-row">
              <button type="submit" class="primary">Submit section quiz</button>
              <button type="button" class="secondary" data-action="retry-section" data-section-id="${section.id}">
                Retry section quiz
              </button>
            </div>
          </form>
          ${scoreData ? renderFeedbackList(scoreData.feedback) : ""}
        </div>
      </article>
    `;
  }).join("");
}

function renderSlidePanel(section) {
  if (!section.slideFile && !section.slideEmbedUrl) return "";

  if (section.slideEmbedUrl) {
    return `
      <section class="slide-panel" aria-label="Section slides">
        <h4>Slide Review</h4>
        <p class="muted">Review this deck before taking the section quiz.</p>
        <iframe
          class="slide-frame"
          src="${escapeHtml(section.slideEmbedUrl)}"
          title="${escapeHtml(section.title)} slide deck"
          loading="lazy"
        ></iframe>
      </section>
    `;
  }

  const href = section.slideFile ? encodeURI(section.slideFile) : "#";
  return `
    <section class="slide-panel" aria-label="Section slides">
      <h4>Slide Review</h4>
      <p class="muted">
        Open the slide deck for this section before starting the quiz.
      </p>
      <p>
        <a href="${escapeHtml(href)}" target="_blank" rel="noopener">Open ${escapeHtml(section.slideLabel || section.slideFile || "deck")}</a>
      </p>
    </section>
  `;
}

function renderQuestionBlock(question, sectionId, number, scope) {
  const fieldName = makeFieldName(scope, sectionId, question.id);
  const safePrompt = escapeHtml(question.prompt);

  if (question.type === "mc") {
    return `
      <fieldset class="question-block">
        <legend>${number}. ${safePrompt}</legend>
        ${question.options
          .map((option, optionIndex) => {
            const id = `${fieldName}_${optionIndex}`;
            return `
              <label for="${id}" class="option-row">
                <input type="radio" id="${id}" name="${fieldName}" value="${optionIndex}" />
                ${escapeHtml(option)}
              </label>
            `;
          })
          .join("")}
      </fieldset>
    `;
  }

  return `
    <div class="question-block">
      <label for="${fieldName}" class="question-label">${number}. ${safePrompt}</label>
      <input type="text" id="${fieldName}" name="${fieldName}" autocomplete="off" />
    </div>
  `;
}

function submitSectionQuiz(sectionId, formData) {
  const section = STUDY_SECTIONS.find((item) => item.id === sectionId);
  if (!section) return;

  const previousAttempts = state.sectionScores[sectionId]?.attempts || 0;
  let score = 0;
  const feedback = section.questions.map((question, index) => {
    const graded = gradeQuestion(question, sectionId, "section", formData);
    if (graded.correct) score += 1;
    return {
      number: index + 1,
      prompt: question.prompt,
      topic: question.topic,
      explanation: question.explanation,
      correct: graded.correct,
      userAnswer: graded.userAnswer,
      correctAnswer: graded.correctAnswer,
    };
  });

  state.sectionScores[sectionId] = {
    score,
    total: section.questions.length,
    attempts: previousAttempts + 1,
    feedback,
    updatedAt: new Date().toISOString(),
  };

  saveState();
  render();
}

function gradeQuestion(question, sectionId, scope, formData) {
  const fieldName = makeFieldName(scope, sectionId, question.id);
  const rawInput = (formData.get(fieldName) || "").toString().trim();

  if (question.type === "mc") {
    const selectedIndex = rawInput === "" ? null : Number(rawInput);
    const correct = selectedIndex === question.correctIndex;
    return {
      correct,
      userAnswer:
        selectedIndex === null || Number.isNaN(selectedIndex)
          ? "No answer provided"
          : question.options[selectedIndex],
      correctAnswer: question.options[question.correctIndex],
    };
  }

  const normalized = normalize(rawInput);
  const matches = question.keywords.filter((keyword) => normalized.includes(normalize(keyword))).length;
  const minMatches = question.minMatches || 1;
  const correct = matches >= minMatches;

  return {
    correct,
    userAnswer: rawInput || "No answer provided",
    correctAnswer: question.sampleAnswer,
  };
}

function renderFeedbackList(feedbackItems) {
  return `
    <ol class="feedback-list">
      ${feedbackItems
        .map((item) => {
          const statusClass = item.correct ? "feedback-good" : "feedback-bad";
          return `
            <li>
              <p class="${statusClass}">
                <strong>Q${item.number}:</strong> ${item.correct ? "Correct" : "Needs review"}
              </p>
              <p><strong>Explanation:</strong> ${escapeHtml(item.explanation)}</p>
              ${
                item.correct
                  ? ""
                  : `<p><strong>Expected answer:</strong> ${escapeHtml(item.correctAnswer)}</p>`
              }
            </li>
          `;
        })
        .join("")}
    </ol>
  `;
}

function renderProgressPanel() {
  const sectionCount = STUDY_SECTIONS.length;
  const reviewedCount = STUDY_SECTIONS.filter((section) => state.reviewed[section.id]).length;
  const completedQuizzes = STUDY_SECTIONS.filter((section) => Boolean(state.sectionScores[section.id]));

  const reviewPercent = Math.round((reviewedCount / sectionCount) * 100);
  const quizPercent = Math.round((completedQuizzes.length / sectionCount) * 100);

  dom.reviewProgressBar.style.width = `${reviewPercent}%`;
  dom.quizProgressBar.style.width = `${quizPercent}%`;
  dom.reviewProgressText.textContent = `${reviewedCount} / ${sectionCount}`;
  dom.quizProgressText.textContent = `${completedQuizzes.length} / ${sectionCount}`;

  const totals = calculateOverallScore();
  dom.overallScoreText.textContent = `Overall score: ${totals.correct} / ${totals.total}`;

  dom.sectionDots.innerHTML = STUDY_SECTIONS.map((section) => {
    const isReviewed = Boolean(state.reviewed[section.id]);
    const isQuizzed = Boolean(state.sectionScores[section.id]);
    const title = `${section.title} - ${isReviewed ? "reviewed" : "not reviewed"}, ${isQuizzed ? "quiz completed" : "quiz not completed"}`;
    return `<span class="dot ${isReviewed ? "is-reviewed" : ""} ${isQuizzed ? "is-quizzed" : ""}" title="${escapeHtml(title)}"></span>`;
  }).join("");
}

function calculateOverallScore() {
  let correct = 0;
  let total = 0;

  Object.values(state.sectionScores).forEach((scoreData) => {
    correct += scoreData.score;
    total += scoreData.total;
  });

  if (state.finalQuiz?.results) {
    correct += state.finalQuiz.score;
    total += state.finalQuiz.total;
  }

  return { correct, total };
}

function generateFinalQuiz() {
  const bank = getQuestionBank();
  const selectionCount = Math.min(12, bank.length);
  const selected = shuffleArray(bank).slice(0, selectionCount).map((entry) => ({
    sectionId: entry.sectionId,
    questionId: entry.question.id,
  }));

  state.finalQuiz = {
    selected,
    score: 0,
    total: selectionCount,
    results: null,
    weakSections: [],
    missedTopics: [],
    updatedAt: new Date().toISOString(),
  };

  saveState();
  render();
}

function renderFinalReview() {
  if (!state.finalQuiz || !state.finalQuiz.selected?.length) {
    dom.finalQuizContainer.innerHTML = "<p class=\"muted\">Final quiz not started yet.</p>";
    dom.finalSummary.innerHTML = "";
    return;
  }

  const entries = resolveFinalEntries();
  dom.finalQuizContainer.innerHTML = `
    <form id="finalQuizForm">
      ${entries
        .map((entry, index) => {
          const title = `${index + 1}. (${entry.section.title}) ${entry.question.prompt}`;
          const questionWithPrefixedPrompt = { ...entry.question, prompt: title };
          return renderQuestionBlock(questionWithPrefixedPrompt, entry.section.id, index + 1, "final");
        })
        .join("")}
      <button type="submit" class="primary">Submit final quiz</button>
    </form>
    ${state.finalQuiz.results ? renderFeedbackList(state.finalQuiz.results) : ""}
  `;

  if (!state.finalQuiz.results) {
    dom.finalSummary.innerHTML = "";
    return;
  }

  const weakSectionList = state.finalQuiz.weakSections.length
    ? state.finalQuiz.weakSections.map((item) => `<li>${escapeHtml(item.title)} (${item.misses} missed)</li>`).join("")
    : "<li>No weak sections identified in this attempt.</li>";

  const revisitTopics = state.finalQuiz.missedTopics.length
    ? state.finalQuiz.missedTopics.map((topic) => `<span class="chip">${escapeHtml(topic)}</span>`).join("")
    : "<span class=\"muted\">No revisit topics from this attempt.</span>";

  dom.finalSummary.innerHTML = `
    <h3>Final Results</h3>
    <p><strong>Total score:</strong> ${state.finalQuiz.score} / ${state.finalQuiz.total}</p>
    <p><strong>Weak sections:</strong></p>
    <ul class="final-summary-list">${weakSectionList}</ul>
    <p><strong>What to revisit:</strong></p>
    <div class="chip-list">${revisitTopics}</div>
  `;
}

function submitFinalQuiz(formData) {
  if (!state.finalQuiz) return;

  const entries = resolveFinalEntries();
  let score = 0;
  const weakMap = {};
  const missedTopics = new Set();

  const results = entries.map((entry, index) => {
    const graded = gradeQuestion(entry.question, entry.section.id, "final", formData);
    if (graded.correct) {
      score += 1;
    } else {
      weakMap[entry.section.id] = (weakMap[entry.section.id] || 0) + 1;
      missedTopics.add(entry.question.topic);
    }

    return {
      number: index + 1,
      prompt: entry.question.prompt,
      topic: entry.question.topic,
      explanation: entry.question.explanation,
      correct: graded.correct,
      userAnswer: graded.userAnswer,
      correctAnswer: graded.correctAnswer,
    };
  });

  state.finalQuiz.results = results;
  state.finalQuiz.score = score;
  state.finalQuiz.total = entries.length;
  state.finalQuiz.weakSections = Object.entries(weakMap)
    .map(([sectionId, misses]) => {
      const section = STUDY_SECTIONS.find((item) => item.id === sectionId);
      return { sectionId, title: section ? section.title : sectionId, misses };
    })
    .sort((a, b) => b.misses - a.misses);
  state.finalQuiz.missedTopics = Array.from(missedTopics);
  state.finalQuiz.updatedAt = new Date().toISOString();

  saveState();
  render();
}

function resolveFinalEntries() {
  if (!state.finalQuiz?.selected) return [];

  return state.finalQuiz.selected
    .map((selection) => {
      const section = STUDY_SECTIONS.find((item) => item.id === selection.sectionId);
      if (!section) return null;
      const question = section.questions.find((item) => item.id === selection.questionId);
      if (!question) return null;
      return { section, question };
    })
    .filter(Boolean);
}

function getQuestionBank() {
  return STUDY_SECTIONS.flatMap((section) =>
    section.questions.map((question) => ({
      sectionId: section.id,
      question,
    }))
  );
}

// Fisher-Yates keeps selection unbiased without external libraries.
function shuffleArray(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function makeFieldName(scope, sectionId, questionId) {
  return `${scope}_${sectionId}_${questionId}`;
}

function loadState() {
  const fallback = defaultState();
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return fallback;

  try {
    const parsed = JSON.parse(raw);
    return {
      ...fallback,
      ...parsed,
      reviewed: { ...fallback.reviewed, ...(parsed.reviewed || {}) },
      sectionScores: parsed.sectionScores || {},
      finalQuiz: parsed.finalQuiz || null,
    };
  } catch (error) {
    return fallback;
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function defaultState() {
  return {
    started: false,
    reviewed: {},
    sectionScores: {},
    finalQuiz: null,
  };
}

function normalize(value) {
  return value.toLowerCase().replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
