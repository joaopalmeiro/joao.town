# joao.town

My [personal website](https://joao.town/).

## Development

Install [fnm](https://github.com/Schniz/fnm) and [Rancher Desktop](https://docs.rancherdesktop.io/) (if necessary).

```bash
fnm install && fnm use && node --version && npm --version
```

```bash
npm install
```

```bash
npm run dev
```

```bash
npm run format
```

```bash
docker run -p 3000:3000 --rm --init -it --workdir /home/pwuser --user pwuser mcr.microsoft.com/playwright:v1.57.0-noble /bin/sh -c "npx -y playwright@1.57.0 run-server --port 3000 --host 0.0.0.0"
```

```bash
npm run test
```

### Tools

- [AccessMonitor](https://accessmonitor.acessibilidade.gov.pt/):
  - [index](https://accessmonitor.acessibilidade.gov.pt/results/https%3A%2F%2Fjoao.town%2F)
  - [contribs](https://accessmonitor.acessibilidade.gov.pt/results/https%3A%2F%2Fjoao.town%2Fcontribs%2F)
  - [uses](https://accessmonitor.acessibilidade.gov.pt/results/https%3A%2F%2Fjoao.town%2Fuses%2F)
- [Cloudflare Radar URL Scanner](https://radar.cloudflare.com/scan/067522b6-da45-431f-af8a-759229f1322a)
- [WebPageTest](https://www.catchpoint.com/webpagetest)

## Deployment

```bash
npm run build
```

```bash
npm run deploy
```
