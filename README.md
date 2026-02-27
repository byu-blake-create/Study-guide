# IS 414 Study + Quiz (Static Site)

Minimalist study + quiz website built with plain HTML/CSS/JavaScript.

## Files
- `index.html`: semantic page structure and UI containers
- `styles.css`: minimalist responsive styling (desktop + mobile)
- `app.js`: study content data, quiz logic, progress persistence, and final review logic

## Run locally
1. Open `index.html` directly in a browser.
2. Click **Start Studying**.
3. Review each section summary/slides and take the quiz shown in that section.

No build step or server is required.

## Features included
- 60-minute landing schedule
- 5 study sections with concise bullets
- Section quiz after each section (6 questions each, all multiple choice)
- Immediate feedback + explanation after submit
- Per-section score, overall score, retry section quiz
- Final mixed random quiz from all sections
- Weak section detection + compact revisit topics list
- Mark-as-reviewed checkboxes with localStorage persistence
- Slide review block per section shown between summary and quiz
- Reset-all-progress control

## Customize questions/content
All study content and quiz questions live in the `STUDY_SECTIONS` array in `app.js`.

To customize:
1. Open `app.js`.
2. Edit any section’s:
   - `summary` array for study bullets
   - `questions` array for quiz items
   - `slideFile` for local deck link
   - `slideEmbedUrl` for inline iframe embed URL (optional)
3. For each question:
   - `type: "mc"` uses `options` + `correctIndex`
4. Save and refresh the browser.

## Persistence notes
- Progress is saved to `localStorage` under key `is414-study-quiz-state-v1`.
- Use **Reset all progress** in the UI to clear saved progress.
