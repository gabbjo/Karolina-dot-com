# Publish to Simply.com

## Find the correct FTP details

In [Simply control panel](https://www.simply.com/controlpanel/):

1. Click your **web hosting** product (not the domain only)
2. Open **Login details** / **Inloggningsuppgifter**
3. Copy exactly:

| Field | What to use |
|-------|-------------|
| **Server** | Often your domain (`karolinabengtsson.com`) OR `ftp.simply.com` OR `linux1.simply.com` — see **Administration** for the exact server name |
| **Username** | The **domain tied to the web hosting** (e.g. `karolinabengtsson.com`) — **not** your Simply.com email |
| **Password** | The **FTP password** shown there — click reveal (may ask for your Simply account password) |

### Common mistakes

- Using your **Simply.com account login** instead of the **FTP password**
- Using the wrong **username** (must match the hosting product's domain)
- Using **SFTP/SSH** credentials — this deploy uses **FTPS on port 21**
- Hosting registered under a **different domain** than karolinabengtsson.com

## Test connection

```bash
FTP_PASSWORD='paste-ftp-password-here' \
FTP_USERNAME='karolinabengtsson.com' \
./scripts/test-simply-ftp.sh
```

This tries several server names and reports which works.

## Deploy

```bash
FTP_SERVER='the-server-that-worked' \
FTP_USERNAME='karolinabengtsson.com' \
FTP_PASSWORD='your-ftp-password' \
./scripts/deploy-simply.sh
```

## What gets published

Official site + `builds/` folder. Zip files excluded.

## Troubleshooting

**"Wrong details" / login rejected** — Reset FTP password in Simply control panel → Login details → generate new password, then retry.

**455 Security Incident** — WAF block. Check Website → security logs in control panel.

**Connection timeout** — Try `FTP_SERVER=ftp.simply.com` or the linux server from Administration.
