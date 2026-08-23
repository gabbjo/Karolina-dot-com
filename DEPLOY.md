# Publish to Simply.com

Deploy the **official site** (latest `main`) to `public_html` at karolinabengtsson.com.

## Quick deploy (with FTP password)

```bash
FTP_SERVER=karolinabengtsson.com \
FTP_USERNAME=karolinabengtsson.com \
FTP_PASSWORD='your-ftp-password' \
./scripts/deploy-simply.sh
```

FTP password: [Simply control panel](https://www.simply.com/controlpanel/) → Web hosting → **Login details**.

## What gets published

- Official homepage with Koncept section
- Assets: `css/`, `js/`, `fonts/`, `img/`, `press/`
- Portfolio builds under `builds/`

Excluded from upload: `*.zip`, `.git`, README files.

## Troubleshooting

**455 Security Incident** — Simply WAF blocked the request. Check WAF logs in the control panel.

**FTPS fails** — Try `FTP_SERVER=linux1.simply.com` (see Administration in control panel).
