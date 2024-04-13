# Express Server

[Building a Simple Express Server](https://www.javascripttutorial.net/nodejs-tutorial/simple-express-server/)

To run on port `443` you need to tell the kernel to allow binding to ports lower than 1024<sup>1</sup>.

```bash
sudo setcap 'cap_net_bind_service=+ep' $(which node)
```

## Generate a self signed certificate

### Using OpenSSL (Linux/Unix/Windows):

```bash
openssl req -newkey rsa:4096 -x509 -sha256 -days 3650 -nodes -out example.crt -keyout example.key
```

### Using PowerShell (Windows):

Run the following command to create a new self-signed certificate:

```PowerShell
New-SelfSignedCertificate -DnsName "yourdomain.com" -CertStoreLocation "cert:\LocalMachine\My"
```

Replace "yourdomain.com" with your actual domain name. This command will generate a self-signed certificate and store it in the local machine’s certificate store.

To export the certificate, use the following command:

```PowerShell
Export-Certificate -Cert "cert:\LocalMachine\My\CertificateThumbprint" -FilePath "C:\path\to\certificate.cer"
```

Replace "CertificateThumbprint" with the actual thumbprint of your certificate and specify the desired file path for the exported certificate.

## Footnotes

<sup>1</sup> [Error: listen EACCES 0.0.0.0:443](https://stackoverflow.com/questions/50112186/error-listen-eacces-0-0-0-0443)