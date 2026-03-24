import { useState } from 'preact/hooks';

interface FormData {
  name: string;
  address: string;
  email: string;
  phoneNumber: string;
  privacyConsentAccepted: boolean;
}

interface FormErrors {
  name?: string;
  address?: string;
  email?: string;
  phoneNumber?: string;
  privacyConsentAccepted?: string;
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export function Spende() {
  const IBAN = 'DE67 3006 0601 0107 2840 56';

  const [formData, setFormData] = useState<FormData>({
    name: '',
    address: '',
    email: '',
    phoneNumber: '',
    privacyConsentAccepted: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>('idle');
  const [matchingCode, setMatchingCode] = useState('');
  const [serverError, setServerError] = useState('');

  function validate(): FormErrors {
    const errs: FormErrors = {};
    if (!formData.name.trim()) errs.name = 'Bitte geben Sie Ihren Namen ein.';
    if (!formData.address.trim()) errs.address = 'Bitte geben Sie Ihre Adresse ein.';
    if (!formData.email.trim()) {
      errs.email = 'Bitte geben Sie Ihre E-Mail-Adresse ein.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.';
    }
    if (!formData.phoneNumber.trim()) errs.phoneNumber = 'Bitte geben Sie Ihre Telefonnummer ein.';
    if (!formData.privacyConsentAccepted) {
      errs.privacyConsentAccepted = 'Sie müssen der Datenschutzerklärung zustimmen.';
    }
    return errs;
  }

  async function handleSubmit(e: Event) {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setStatus('submitting');
    setServerError('');

    try {
      const res = await fetch('https://app.heldenberlin.de/api/donation-bank-transfer-forms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setMatchingCode(data.matchingCode);
        setStatus('success');
      } else if (res.status === 429) {
        setServerError('Bitte warten Sie 60 Sekunden, bevor Sie das Formular erneut absenden.');
        setStatus('error');
      } else {
        setServerError(data.message || 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.');
        setStatus('error');
      }
    } catch {
      setServerError('Verbindungsfehler. Bitte prüfen Sie Ihre Internetverbindung und versuchen Sie es erneut.');
      setStatus('error');
    }
  }

  function handleInput(field: keyof FormData) {
    return (e: Event) => {
      const target = e.target as HTMLInputElement;
      setFormData((prev) => ({
        ...prev,
        [field]: field === 'privacyConsentAccepted' ? target.checked : target.value,
      }));
      if (errors[field]) {
        setErrors((prev) => {
          const next = { ...prev };
          delete next[field];
          return next;
        });
      }
    };
  }

  return (
    <section class="spende-page">
      <div class="container">
        <div class="spende-header">
          <a href="/" class="btn btn-outline back-button">
            &larr; Zurück zur Startseite
          </a>
          <h1 class="spende-title">
            <span class="section-badge">&hearts;</span> Spenden
          </h1>
          <p class="spende-intro">
            Unterstützen Sie unser Projekt mit einer Spende per Banküberweisung.
            Damit helfen Sie uns, Erste-Hilfe-Kurse an Berliner Schulen zu ermöglichen.
          </p>
        </div>

        <div class="spende-iban-card">
          <h2 class="spende-iban-label">Spendenkonto</h2>
          <div class="spende-bank-details">
            <div class="spende-bank-row">
              <span class="spende-bank-label">Empfänger</span>
              <span class="spende-bank-value">Pépinière Stiftung</span>
            </div>
            <div class="spende-bank-row">
              <span class="spende-bank-label">IBAN</span>
              <span class="spende-bank-value spende-iban">{IBAN}</span>
            </div>
            <div class="spende-bank-row">
              <span class="spende-bank-label">BIC</span>
              <span class="spende-bank-value">DAAEDEDDXXX</span>
            </div>
          </div>
        </div>

        <div class="spende-steps">
          <h2 class="spende-steps-title">So funktioniert's</h2>
          <div class="spende-steps-grid">
            <div class="spende-step">
              <div class="spende-step-number">1</div>
              <h3 class="spende-step-title">Formular ausfüllen</h3>
              <p class="spende-step-desc">
                Füllen Sie das untenstehende Formular aus, um einen eindeutigen Zuordnungscode zu erhalten.
              </p>
            </div>
            <div class="spende-step">
              <div class="spende-step-number">2</div>
              <h3 class="spende-step-title">Code erhalten</h3>
              <p class="spende-step-desc">
                Nach dem Absenden erhalten Sie sofort einen Zuordnungscode, der Ihre Spende eindeutig zuordnet.
              </p>
            </div>
            <div class="spende-step">
              <div class="spende-step-number">3</div>
              <h3 class="spende-step-title">Überweisung tätigen</h3>
              <p class="spende-step-desc">
                Überweisen Sie den gewünschten Betrag an die oben angegebene IBAN und tragen Sie den Zuordnungscode im Verwendungszweck ein.
              </p>
            </div>
          </div>
        </div>

        {status === 'success' ? (
          <div class="spende-success">
            <div class="spende-success-icon">&#10003;</div>
            <h2 class="spende-success-title">Vielen Dank!</h2>
            <p class="spende-success-text">
              Ihr Zuordnungscode lautet:
            </p>
            <div class="spende-matching-code">{matchingCode}</div>
            <p class="spende-success-instructions">
              Bitte verwenden Sie diesen Code als <strong>Verwendungszweck</strong> bei Ihrer Banküberweisung an:
            </p>
            <p class="spende-success-iban">{IBAN}</p>
            <p class="spende-success-note">
              So können wir Ihre Spende eindeutig zuordnen. Vielen Dank für Ihre Unterstützung!
            </p>
          </div>
        ) : (
          <div class="spende-form-section">
            <h2 class="spende-form-title">Spendenformular</h2>
            <p class="spende-form-desc">
              Bitte füllen Sie das Formular aus, um Ihren persönlichen Zuordnungscode zu erhalten.
            </p>
            <form class="spende-form" onSubmit={handleSubmit} noValidate>
              <div class="spende-field">
                <label class="spende-label" for="name">Vollständiger Name *</label>
                <input
                  id="name"
                  type="text"
                  class={`spende-input ${errors.name ? 'spende-input-error' : ''}`}
                  value={formData.name}
                  onInput={handleInput('name')}
                  placeholder="Max Mustermann"
                />
                {errors.name && <span class="spende-error">{errors.name}</span>}
              </div>

              <div class="spende-field">
                <label class="spende-label" for="address">Adresse *</label>
                <input
                  id="address"
                  type="text"
                  class={`spende-input ${errors.address ? 'spende-input-error' : ''}`}
                  value={formData.address}
                  onInput={handleInput('address')}
                  placeholder="Musterstr. 1, 12345 Berlin"
                />
                {errors.address && <span class="spende-error">{errors.address}</span>}
              </div>

              <div class="spende-field">
                <label class="spende-label" for="email">E-Mail-Adresse *</label>
                <input
                  id="email"
                  type="email"
                  class={`spende-input ${errors.email ? 'spende-input-error' : ''}`}
                  value={formData.email}
                  onInput={handleInput('email')}
                  placeholder="max@example.org"
                />
                {errors.email && <span class="spende-error">{errors.email}</span>}
              </div>

              <div class="spende-field">
                <label class="spende-label" for="phoneNumber">Telefonnummer *</label>
                <input
                  id="phoneNumber"
                  type="tel"
                  class={`spende-input ${errors.phoneNumber ? 'spende-input-error' : ''}`}
                  value={formData.phoneNumber}
                  onInput={handleInput('phoneNumber')}
                  placeholder="+49 30 1234567"
                />
                {errors.phoneNumber && <span class="spende-error">{errors.phoneNumber}</span>}
              </div>

              <div class="spende-field spende-checkbox-field">
                <label class="spende-checkbox-label">
                  <input
                    type="checkbox"
                    class="spende-checkbox"
                    checked={formData.privacyConsentAccepted}
                    onChange={handleInput('privacyConsentAccepted')}
                  />
                  <span>
                    Ich willige ein, dass meine im Formular angegebenen personenbezogenen Daten zum Zweck
                    der Bearbeitung meiner Spendenüberweisung gespeichert und verarbeitet werden. *
                  </span>
                </label>
                {errors.privacyConsentAccepted && (
                  <span class="spende-error">{errors.privacyConsentAccepted}</span>
                )}
              </div>

              {serverError && (
                <div class="spende-server-error">{serverError}</div>
              )}

              <button
                type="submit"
                class="btn btn-primary btn-large spende-submit"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? 'Wird gesendet...' : 'Zuordnungscode anfordern'}
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
