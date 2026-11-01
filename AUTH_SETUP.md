# T-CLOSET Authentication Setup

The account forms use Supabase Auth for email/password registration and login. The signup confirmation email can serve as the welcome email; customize its subject and copy in Supabase's **Confirm signup** email template.

## Current Project State

- The storefront is connected to the Supabase project in `supabase-config.js` using its project URL and browser-safe publishable key.
- Email/password sign-in, new user registration, and email confirmation are enabled in Supabase.
- Allowed development redirects include `http://localhost:5500/**`, `http://127.0.0.1:5500/**`, and `http://localhost:3000/**`.
- The storefront is being served at `http://localhost:5500/tcloset.html` for local testing.
- Custom SMTP is not configured. Supabase's default sender is restricted to authorized team addresses and is for testing only; configure SMTP before sending welcome/confirmation emails to customers.

To test locally, open the storefront URL, create an account using an email address allowed by Supabase's default sender, confirm the email, and then sign in with that email and password.

## Configure Supabase

1. Create a Supabase project.
2. In **Project Settings / API**, copy the project URL and the publishable key. Put them in `supabase-config.js` as `url` and `publishableKey`.
3. Never put a `service_role` or secret key in this frontend project. The publishable key is intended for browser use.
4. In **Authentication / Providers / Email**, enable email/password sign-in and require email confirmation.
5. In **Authentication / URL Configuration**, set the Site URL and add the development and deployed site URLs to the allowed redirect URLs. Run the site on localhost or a hosted URL, not with `file://`.
6. In **Authentication / Email Templates / Confirm signup**, set a welcome-style subject and message. Keep Supabase's confirmation link (usually `{{ .ConfirmationURL }}`) in the template so new users can activate their account.
7. For delivery to customers beyond project team members, configure a custom SMTP provider in Supabase Authentication settings. Verify the sender domain and its email authentication records (SPF/DKIM) with the provider.

The default Supabase email sender is intended for testing, has strict recipient restrictions, and may have low rate limits. Configure custom SMTP before public launch.

## Welcome / Confirmation Email

Use this as the **Confirm sign up** subject and body after custom SMTP is configured. It is sent once during signup, not on every login. The username is stored in Supabase metadata by the signup form, and the button confirms the email before returning to the storefront.

Subject:

```text
Welcome to T-CLOSET, {{ .Data.username }}! Confirm your email
```

HTML body:

```html
<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:32px 24px;color:#241c20;line-height:1.6">
	<p>Hey {{ .Data.username }}! 💕</p>

	<h1 style="color:#762746">Welcome to T-CLOSET</h1>
	<p>We're so excited to have you here!</p>

	<p>You've just joined a fashion space where personal style has no limits, confidence is always in fashion, and there's something for every mood, every style, and everyone. ✨</p>

	<p>Think gorgeous outfits, stylish shoes, statement bags, beautiful accessories, and those little pieces that make an outfit <em>the outfit</em>. 😉</p>

	<p><strong>Here's what you can look forward to:</strong></p>
	<ul>
		<li>👗 Discover styles that match your mood and personality.</li>
		<li>👜 Find your next favourite bag, shoe, or accessory.</li>
		<li>✨ Explore fresh looks and outfit inspiration.</li>
		<li>💃 Express yourself, experiment, and wear what makes you feel amazing.</li>
	</ul>

	<p>You don't have to follow every trend to have great style. At T-CLOSET, your style is your statement!</p>

	<p style="margin:32px 0">
		<a href="{{ .ConfirmationURL }}" style="display:inline-block;padding:14px 24px;background:#762746;color:#ffffff;text-decoration:none;font-weight:bold">Confirm email &amp; explore T-CLOSET</a>
	</p>

	<p>Thank you for joining our fashion community. We can't wait to be part of your style journey!</p>
	<p>Stay stylish, stay confident, and always be YOU. 💗</p>

	<p>With love,<br><strong>The T-CLOSET Team</strong><br><em>Every mood. Every style. Everyone.</em></p>
</div>
```

Keep the `{{ .ConfirmationURL }}` variable in the button. Replacing it with a direct storefront URL would skip email verification.

## Login Link Email

The login screen also offers a customer-requested, passwordless sign-in link. It is not sent after every password login and it will not create a new account. After custom SMTP is configured, set the **Magic link or OTP** template to:

Subject:

```text
Your T-CLOSET sign-in link
```

HTML body:

```html
<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:32px 24px;color:#241c20;line-height:1.6">
	<p>Hey {{ .Data.username }}! ✨</p>
	<h1 style="color:#762746">Your style edit is waiting.</h1>
	<p>Use the secure link below to sign in to T-CLOSET and pick up where your style journey left off.</p>
	<p style="margin:32px 0">
		<a href="{{ .ConfirmationURL }}" style="display:inline-block;padding:14px 24px;background:#762746;color:#ffffff;text-decoration:none;font-weight:bold">Sign in to T-CLOSET</a>
	</p>
	<p>This link is for one-time use and expires soon. If you didn't request it, you can safely ignore this email. For your security, don't forward the link.</p>
	<p>With love,<br><strong>The T-CLOSET Team</strong><br><em>Every mood. Every style. Everyone.</em></p>
</div>
```

The sign-in link uses the same allowed redirect URLs as signup. The storefront requests it with `shouldCreateUser: false`, so it only signs in existing users.

## Current Flow

- Signup stores the username as Supabase user metadata and sends the configured confirmation email.
- The user confirms their email, then can sign in with that email and password or request a one-time email sign-in link.
- The sign-in link is sent only after the user requests it and does not create an account.
- Supabase manages the signed-in session; the account button shows the username or email name.
- The resend button requests another signup confirmation email.
- This implementation uses the confirmation email as the welcome email. A separate message sent only after confirmation needs a server-side Supabase Edge Function or Auth email hook and an email provider; do not send email using provider secrets from browser code.
