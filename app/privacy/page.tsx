export default function PrivacyPage() {
  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        minHeight: "100dvh",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          fontSize: "1.1rem",
          lineHeight: "1.6",
          padding: "40px 30px 100px",
          color: "var(--gray7)",
        }}
      >
        <h1 style={{ color: "var(--yellow1)" }}>Privacy & Cookies</h1>
        <p><em>Last updated: 23.08.2025</em></p>

        <h3 style={{ color: "var(--yellow2)" }}>Who we are</h3>
        <p>
          Pins and Curves is operated by Martin Trifonov.<br />
          Contact: <a href="mailto:martin@pinsandcurves.app">martin@pinsandcurves.app</a>.
        </p>
        <p>
          This policy applies to <b>pinsandcurves.app</b> and{" "}
          <b>run.pinsandcurves.app</b>.
        </p>

        <h3 style={{ color: "var(--yellow2)" }}>What we collect</h3>
        <ul>
          <li>
            <b>Essential data</b> — To make the app work, we may store a cookie
            so your session continues when you reload the page. This is strictly
            necessary.
          </li>
          <li>
            <b>Optional cookies</b> — On run.pinsandcurves.app we may, with your
            consent, use cookies to recognise returning visits and understand
            how the app is used. This helps us improve Pins and Curves.
          </li>
          <li>
            <b>Newsletter sign-ups</b> — If you choose to join our newsletter,
            we collect your email address via Mailchimp. Your email is only used
            to send you updates about Pins and Curves. You can unsubscribe at
            any time using the link in each email.
          </li>
        </ul>
        <p>
          We do not use cookies for advertising. If we add new purposes in the
          future, we will update this page and ask for consent again.
        </p>

        <h3 style={{ color: "var(--yellow2)" }}>How long we keep data</h3>
        <ul>
          <li>Essential cookies: only as long as needed for the session.</li>
          <li>
            Optional cookies: up to 12 months unless you withdraw consent
            earlier.
          </li>
          <li>Newsletter email addresses: until you unsubscribe.</li>
        </ul>

        <h3 style={{ color: "var(--yellow2)" }}>Your rights</h3>
        <p>You can:</p>
        <ul>
          <li>
            Withdraw consent at any time by deleting cookies in your browser
            settings. If you don&apos;t know how, contact us and we&apos;ll help.
          </li>
          <li>
            Unsubscribe from the newsletter at any time using the link in each
            email.
          </li>
          <li>
            Contact us at{" "}
            <a href="mailto:martin@pinsandcurves.app">
              martin@pinsandcurves.app
            </a> if you would like a copy of your data, or have it corrected or
            deleted.
          </li>
        </ul>
      </div>
    </div>
  );
}
